import React from "react";
import "./index.css";
export default function SideBarFooter({ onClick }) {
  return (
    <div className="sidebarFooter">
      <button className="add-button" onClick={onClick}>
        +
      </button>
    </div>
  );
}
