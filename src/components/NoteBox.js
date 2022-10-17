import { useContext, useState } from "react";
import MainContext from "../MainContext";

const NoteBox = () => {
  const {
    boxPosition,
    setMode,
    notes,
    setNotes,
    setBoxVisible,
    screen,
    setWriteMode,
  } = useContext(MainContext);
  const types = [
    {
      name: "comment",
      color: "red",
      text: "Yorum",
    },
    {
      name: "private-comment",
      color: "gray",
      text: "Özel Yorum",
    },
    {
      name: "note",
      color: "orange",
      text: "Not",
    },
  ];

  const [color, setColor] = useState(types[0].color);
  const [note, setNote] = useState("");

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  const addNote = () => {
    const currentNote = {
      number: notes.length + 1,
      note,
      color,
      position: { x: boxPosition.x, y: boxPosition.y },
    };

    setNotes([...notes, currentNote]);
    setBoxVisible(false);
    setMode(true);
    screen.current.focus();
  };
  return (
    <div
      onMouseEnter={() => setMode(false)}
      onMouseLeave={() => setMode(true)}
      className="note-box"
      style={{
        "--color": color,
        position: "absolute",
        top: boxPosition.y,
        left: boxPosition.x,
      }}
    >
      <span className="note-box-number">{notes.length}</span>
      <select onChange={changeColor}>
        {types.map((type) => (
          <option style={{ backgroundColor: "#252525" }} value={type.color}>
            {type.text}
          </option>
        ))}
      </select>
      <textarea
        onFocus={() => setWriteMode(false)}
        onBlur={() => setWriteMode(true)}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Metni Giriniz..."
        cols="30"
        rows="5"
      ></textarea>
      <button onClick={addNote} disabled={!note}>
        Ekle
      </button>
    </div>
  );
};

export default NoteBox;
