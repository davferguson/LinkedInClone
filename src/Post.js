import React, {forwardRef} from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, desc, msg, photoURL }, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoURL}>{name[0].toUpperCase()}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{msg}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
            <InputOption Icon={CommentOutlinedIcon} title="Comment" color="gray" />
            <InputOption Icon={ShareOutlinedIcon} title="Repost" color="gray" />
            <InputOption Icon={SendIcon} title="Send" color="gray" />
        </div>
    </div>
  )
})

export default Post
