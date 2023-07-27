import React from "react";
import MemoItem from "./MemoItem";

export default function MemoList({
  memos,
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
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}
