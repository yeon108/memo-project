import React from "react";
import MemoList from "../MemoList";
import SideBarFooter from "../SideBarFooter";
import SideBarHeader from "../ SideBarHeader";
import "./index.css";

export default function SideBar({
  memos,
  addMemo,
  deleteMemo,
  selectedMemoIndex,
  setSelectedMemoIndex,
}) {
  return (
    <div className="sidebar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        deleteMemo={deleteMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}
