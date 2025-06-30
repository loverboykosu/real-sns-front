import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
export default function Topbar() {
  return (
    <>
      <div className="topbarContaier">
        <div className="topbarLeft">
          <span className="logo">Real SNS</span>
        </div>
        <div className="topbarCenter">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="探し物はなんですか？"
          />
        </div>
        <div className="topbarRight">
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBa">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBa">2</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </>
  );
}
