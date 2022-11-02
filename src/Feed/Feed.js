import EventIcon from "@mui/icons-material/Event";
import ImageIcon from "@mui/icons-material/Image";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="feed">
      <div className="feed-input-container">
        <Avatar className="feed-input-container-avatar" />
        <div className="feed-input">
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="feed-inputOptions">
        <InputOption Icon={ImageIcon} title="Photo" color="#3C9DF8" />
        <InputOption Icon={VideoCameraBackIcon} title="Video" color="#17AE00" />
        <InputOption Icon={EventIcon} title="Event" color="#E7A33E" />
        <InputOption
          Icon={NewspaperIcon}
          title="Write article"
          color="D57D09"
        />
      </div>

      {/* Posts Section */}
      {/* {
        posts.map((post) => (
          <Post
            name="Kartik Tyagi"
            description="This is a test description"
            message="This is a test message"
          />
        ))
      } */}
      <Post
        name="Kartik Tyagi"
        description="This is a test description"
        message="This is a test message"
      />
    </div>
  );
}

export default Feed;
