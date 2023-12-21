import { useState } from "react";
import "./index.css";

export const What = () => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(username);
    console.log(content, tags);
  };
  return (
    <div className="formWrapper">
      <form>
        <div className="inputWrapper">
          <label htmlFor="username">username </label>
          <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            id="username"
            className="username"
          ></input>
        </div>

        <div className="inputWrapper">
          <label htmlFor="content">content </label>
          <textarea
            onChange={(event) => setContent(event.target.value)}
            id="content"
            className="content"
          ></textarea>
        </div>
        <div className="inputWrapper">
          <label htmlFor="tags">tags </label>
          <input
            onChange={(e) => setTags(e.target.value)}
            type="text"
            id="tags"
            className="tags"
          ></input>
        </div>
        <button onClick={(event) => handleSubmit(event)} className="addButton">
          + Add New
        </button>
      </form>
    </div>
  );
};
