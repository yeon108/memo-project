import React from "react";
import MemoItem from "../MemoItem";

export default function MemoList({
  memos,
  deleteMemo,
  selectedMemoIndex,
  setSelectedMemoIndex,
}) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClick={() => {
            setSelectedMemoIndex(index);
          }}
          deleteClickHandler={(e) => {
            deleteMemo(index);

            e.stopPropagation();
          }}
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}
