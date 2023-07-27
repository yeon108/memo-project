import React from "react";
import "./index.css";

export default function MemoContainer({ memo, setMemo }) {
  if (memo === undefined) {
    return (
      <div>
        <h1>메모가 없습니다</h1>
        <h2>새로운 메모를 추가하세요</h2>
      </div>
    );
  }
  return (
    <div className="memoContainer">
      <div>
        <input
          type="text"
          className="memoContainer_title"
          value={memo.title}
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updatedAt: new Date().getTime(),
            });
          }}
          placeholder="Untitled"
        />
      </div>
      <div>
        <textarea
          className="memoContainer_content"
          value={memo.content}
          onChange={(e) => {
            setMemo({
              ...memo,
              content: e.target.value,
              updatedAt: new Date().getTime(),
            });
          }}
          placeholder="fill the text"
        />
      </div>
    </div>
  );
}
