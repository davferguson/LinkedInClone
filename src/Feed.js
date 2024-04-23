import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import { collection, query, onSnapshot, addDoc, serverTimestamp, orderBy } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  
  useEffect(() => { //runs code when Feed component loads
    // connect to database in realtime
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => 
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []) //if we don't pass a second arg the code will re-run everytime component re-renders
  //since we passed a second arg it will only run when the compoenent initially loads and never again

  const sendPost = async (e) => {
    e.preventDefault();

    // Add a new document with a generated id.
    await addDoc(collection(db, "posts"), {
      name: user.displayName,
      desc: user.email,
      msg: input,
      photoURL: user.photoURL || "",
      timestamp: serverTimestamp()
    });

    setInput("");
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type='text' />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Media" color="#70B5F9" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c37d16" />
          <InputOption Icon={ArticleIcon} title="Write article" color="#e06847" />
        </div>
      </div>

      <FlipMove>
      {posts.map(({ id, data: { name, desc, msg, photoURL}}) => (
        <Post key={id} name={name} desc={desc} msg={msg} photoURL={photoURL} />
      ))}
      </FlipMove>
    </div>
  )
}

export default Feed