import React from "react";
import MemoList from "./MemoList";
import SideBarHeader from "./SideBarHeader";
import SideBarFooter from "./SideBarFooter";

export default function SideBar({ memos }) {
  return (
    <div className="sidebar">
      <SideBarHeader />
      <MemoList memos={memos} />
      <SideBarFooter />
    </div>
  );
}
