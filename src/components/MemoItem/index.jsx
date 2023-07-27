import React from "react";
import "./index.css";

export default function MemoItem({
  children,
  onClick,
  deleteClickHandler,
  isSelected,
}) {
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onClick}
    >
      {children}
      <button className="delete-button" onClick={deleteClickHandler}>
        -
      </button>
    </div>
  );
}
