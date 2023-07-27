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

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
