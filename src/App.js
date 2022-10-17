import { useRef, useEffect, useState } from "react";
import "./App.css";
import MainContext from "./MainContext";
import CommentText from "./components/LeaveCommentText";
import Note from "./components/Note";
import NoteBox from "./components/NoteBox";
import FootBar from "./components/Footer";

function App() {
  const screen = useRef(null);
  const [deleteNumber, setDeleteNumber] = useState(true);
  const [mode, setMode] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [notes, setNotes] = useState(
    (localStorage.notes && JSON.parse(localStorage.notes)) || []
  );

  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const [boxVisible, setBoxVisible] = useState(false);
  const [writeMode, setWriteMode] = useState(true);

  useEffect(() => {
    screen.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleKeyUp = (e) => {
    if (writeMode) {
      if (e.key === "c") {
        setMode(!mode);
        setBoxVisible(false);
        setDeleteNumber(true);
      }
      if (e.key === "*") {
        setDeleteNumber(false);
        setNotes([]);
        setMode(false);
        setBoxVisible(false);
        screen.current.focus();
      }
      if (e.key === "Escape") {
        setMode(false);
        setBoxVisible(false);
      }
    }
  };

  const handleMouseMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const handleClick = (e) => {
    if (mode) {
      setBoxPosition({ x: position.x, y: position.y });
      setBoxVisible(true);
    }
  };

  const data = {
    position,
    boxPosition,
    setMode,
    setNotes,
    notes,
    setBoxVisible,
    deleteNumber,
    screen,
    setWriteMode,
    writeMode,
  };

  return (
    <MainContext.Provider value={data}>
      <div
        ref={screen}
        tabIndex={0}
        onMouseMove={handleMouseMove}
        onKeyUp={handleKeyUp}
        onClick={handleClick}
        className={`screen ${mode && "editable"}`}
      >
        <img
          className="bground"
          src="https://wallpapercave.com/wp/wp3191222.jpg"
          alt=""
        />

        {mode && <CommentText />}

        {notes && notes.map((note, key) => <Note key={key} {...note} />)}

        {boxVisible && <NoteBox />}
        <FootBar></FootBar>
      </div>

      <div
        onMouseEnter={() => setMode(false)}
        onMouseLeave={() => setMode(true)}
        className="upper-left"
        style={{
          cursor: "help",
        }}
      >
        <p>
          -Press "<b>C</b>" to switch "Add Note" mode.
        </p>
        {notes.length > 0 && (
          <>
            <br />
            <p>
              -Press "<b>*</b>" to delete all notes.
            </p>
          </>
        )}
      </div>
    </MainContext.Provider>
  );
}

export default App;
