import React from "react";

export default function MemoContainer() {
  return (
    <div className="memoContainer">
      <div>
        <input type="text" className="memoContainer_title" />
      </div>
      <div>
        <textarea className="memoContainer_content" />
      </div>
    </div>
  );
}
