import EventIcon from "@mui/icons-material/Event";
import ImageIcon from "@mui/icons-material/Image";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import { Avatar } from "@mui/material";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { db } from "../Firebase/Firebase";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  // Get posts from firestore db
  const fetchPosts = async () => {
    await getDocs(
      query(collection(db, "Posts"), orderBy("timestamp", "desc"))
    ).then((querySnapshot) =>
      setPosts(
        querySnapshot.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }))
      )
    );
  };

  // Add post to firestore db
  const addPost = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setInput("");
  };

  // useEffect hook lets us fire off code when the feed component loads
  // The dependency list lets us fire off again if one of those dependency changes
  useEffect(() => {
    fetchPosts();
  }, [posts]);

  // Click functions return an event which is trackable
  const sendPost = (e) => {
    addPost(e);
  };

  return (
    <div className="feed">
      <div className="feed-input-container">
        <Avatar className="feed-input-container-avatar">
          {user?.displayName[0].toUpperCase()}
        </Avatar>
        <div className="feed-input">
          <form>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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

      {/* Posts Section - the key allows react to know which entries are new and to only render those and not re render the whole list */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
