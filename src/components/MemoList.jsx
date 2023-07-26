import React from "react";

export default function MemoList({ memos }) {
  return (
    <div>
      {memos.map((memo) => (
        <div>{memo.title}</div>
      ))}
    </div>
  );
}
