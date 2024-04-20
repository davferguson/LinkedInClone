import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
// import { doc, onSnapshot } from "firebase/firestore";
import { collection, query, onSnapshot } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => { //runs code when Feed component loads

    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
          posts.push(doc.data());
      });
      // console.log("Data: ", posts.join(", "));
      console.log("Data: ", posts[0].desc, posts[1].desc);
    });

    // db.collection("posts").onSnapshot((snapshot) => 
    //   setPosts(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       data: doc.data(),
    //     }))
    //   )
    // );
  }, []) //if we don't pass a second arg the code will re-run everytime component re-renders
  //since we passed a second arg it will only run when the compoenent initially loads and never again

  const sendPost = (e) => {
    e.preventDefault();
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type='text' />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Media" color="#70B5F9" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c37d16" />
          <InputOption Icon={ArticleIcon} title="Write article" color="#e06847" />
        </div>
      </div>

      {posts.map((post) => (
        <Post />
      ))}
      <Post name="Davin Ferguson" desc="Test desc here" msg="Here is message. IT WORKED!" />
    </div>
  )
}

export default Feed