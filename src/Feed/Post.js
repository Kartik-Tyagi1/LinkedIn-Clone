import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";

import InsertCommentIcon from "@mui/icons-material/InsertComment";
import LoopIcon from "@mui/icons-material/Loop";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar />
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="grey" />
        <InputOption Icon={InsertCommentIcon} title="Comment" color="grey" />
        <InputOption Icon={LoopIcon} title="Repost" color="grey" />
        <InputOption Icon={SendIcon} title="Send" color="grey" />
      </div>
    </div>
  );
}

export default Post;
