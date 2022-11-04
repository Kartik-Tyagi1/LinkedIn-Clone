import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-article-left">
        <FiberManualRecord fontSize="smaller" />
      </div>
      <div className="widgets-article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("LinkedIn Clone Created", "Top new - 9909 readers")}
      {newsArticle("Big Tech Hiring Freeze", "7 Hrs Ago - 11345 readers")}
      {newsArticle(
        "Starbucks Holiday Lattes Coming Soon",
        "9 Hrs Ago - 14935 readers"
      )}
      {newsArticle("Meta Continues to Tank", "13 Hrs Ago - 13742 readers")}
    </div>
  );
}

export default Widgets;
