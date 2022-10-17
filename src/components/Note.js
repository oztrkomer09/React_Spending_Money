import { useContext, useState } from "react";
import MainContext from "../MainContext";
import Draggable from "react-draggable";

const Note = (note) => {
  const [visible, setVisible] = useState(false);
  const [clickable, setClickable] = useState(true);
  const { deleteNumber, setMode, notes } = useContext(MainContext);

  const showNote = () => {
    if (clickable) {
      setVisible(!visible);
    }
  };

  return (
    <Draggable
      onDrag={() => setClickable(false)}
      onStart={() => setClickable(true)}
    >
      <div
        onMouseEnter={() => setMode(false)}
        onMouseLeave={() => setMode(true)}
        className="note-container"
        style={{
          "--color": note.color,
          position: "absolute",
          top: note.position.y,
          left: note.position.x,
        }}
      >
        {deleteNumber && (
          <span onClick={showNote} className="note-box-number">
            {note.number - 1}
          </span>
        )}
        {visible && <div className="note">{note.note}</div>}
      </div>
    </Draggable>
  );
};

export default Note;
