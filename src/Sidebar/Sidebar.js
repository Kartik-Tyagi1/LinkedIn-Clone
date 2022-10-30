import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
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
        <Avatar className="sidebar-avatar" />
        <h2>Kartik Tyagi</h2>
        <h4>kartiktyagi278@gmail.com</h4>
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
