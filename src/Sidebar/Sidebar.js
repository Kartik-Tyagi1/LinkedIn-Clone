import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar-recent-item">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/286/114/401/light-background-wallpaper-preview.jpg"
          alt="Defulat Background"
        />
        <Avatar src={user.photoUrl} className="sidebar-avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Profile Views</p>
          <p className="sidebar-stat-number">2,500</p>
        </div>
        <div className="sidebar-stat">
          <p>Views On Posts</p>
          <p className="sidebar-stat-number">2,500</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("C++")}
        {recentItem("videogames")}
        {recentItem("UE5")}
      </div>
    </div>
  );
}

export default Sidebar;
