import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="header-option">
      {Icon && <Icon className="header-option-icon" />}
      {avatar && (
        <Avatar className="header-option-icon">
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="header-option-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
