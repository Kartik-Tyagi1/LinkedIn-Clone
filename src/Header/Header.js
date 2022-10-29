import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt=" "
        />
        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsActiveIcon} title="Notifications" />
        <HeaderOption Icon={AccountCircleIcon} title="Me" />
      </div>
    </div>
  );
}

export default Header;
