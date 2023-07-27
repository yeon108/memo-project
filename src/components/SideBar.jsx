import React from "react";
import MemoList from "./MemoList";
import SideBarHeader from "./SideBarHeader";
import SideBarFooter from "./SideBarFooter";

export default function SideBar({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
}) {
  return (
    <div className="sidebar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <SideBarFooter />
    </div>
  );
}
