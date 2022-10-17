import { useContext } from "react";
import MainContext from "../MainContext";
import "../App.css";

const CommentText = () => {
  const { position } = useContext(MainContext);
  return (
    <div
      className="comment-text"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x + 20,
      }}
    >
      Yorum yazmak için tıkla
    </div>
  );
};

export default CommentText;
