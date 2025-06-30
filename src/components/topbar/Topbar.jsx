import React from "react";

export default function Topbar() {
  return (
    <>
      <div className="topbarContaier">
        <div className="topbarLeft">
          <span className="logo">Real SNS</span>
        </div>
        <div className="topbarCenter">
          <input
            type="text"
            className="searchInput"
            placeholder="探し物はなんですか？"
          />
        </div>
        <div className="topbarRight">
          <div className="topbarIconItem">1</div>
          <div className="topbarIconItem">2</div>
        </div>
        <img src="/assets/persion/1.jpg" alt="" className="topbarImg" />
      </div>
    </>
  );
}
