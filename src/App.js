import { useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";

function App() {
  const [memos, setMemos] = useState([
    { title: "memo1", content: "This is memo 1", createdAt: 33, updatedAt: 33 },
    { title: "memo2", content: "This is memo 2", createdAt: 1, updatedAt: 1 },
  ]);
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);
  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    console.log(memos);
    // setMemos([...memos]);
    setMemos(newMemos);
  };
  const addMemo = () => {
    const now = new Date().getTime();
    setMemos([
      ...memos,
      {
        title: "Untitled",
        content: "",
        createdAt: now,
        updatedAt: now,
      },
    ]);
    setSelectedMemoIndex(memos.length);
  };
  const deleteMemo = (index) => {
    const newMemos = [...memos];

    newMemos.splice(index, 1);
    setMemos(newMemos);
    console.log(index);
    console.log(selectedMemoIndex);
    if ((index && selectedMemoIndex) === 0) {
      setSelectedMemoIndex(0);
    } else {
      setSelectedMemoIndex(index - 1);
    }
  };
  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
