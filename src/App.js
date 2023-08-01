import { useCallback, useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { setItem, getItem } from "./lib/storage";
import debounce from "lodash.debounce";

const debouncedSetItem = debounce(setItem, 4000); //execute setItem() after 4sec
//debouncedSetItem => This returns the setItem which applied the debounce function
function App() {
  const [memos, setMemos] = useState(getItem("memo") || []); //[]=>undefined
  console.log([]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setMemos((memos) => {
        const newMemoArr = [...memos];
        newMemoArr[selectedMemoIndex] = newMemo;
        debouncedSetItem("memo", newMemoArr);
        return newMemoArr;
      });

      // setMemos(newMemoArr) = setMemos([...memos]);
    },
    [selectedMemoIndex] //selectedMemoIndex 바뀌는경우 recreate the function
  );
  const addMemo = useCallback(() => {
    const now = new Date().getTime();
    const newMemos = setMemos([
      ...memos,
      {
        title: "Untitled",
        content: "",
        createdAt: now,
        updatedAt: now,
      },
    ]);

    setSelectedMemoIndex(memos.length);
    debouncedSetItem("memo", newMemos);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemoArr = [...memos];
        newMemoArr.splice(index, 1);
        debouncedSetItem("memo", newMemoArr);
        return newMemoArr;
      });

      //setMemos(newMemoArr);

      if ((index && selectedMemoIndex) === 0) {
        setSelectedMemoIndex(0);
      } else {
        setSelectedMemoIndex(index - 1);
      }
    },
    [selectedMemoIndex]
  );
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
