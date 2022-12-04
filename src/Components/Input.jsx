import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import attach from "../images/attach.png";
import img from "../images/img.png";

const Input = () => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const handleSent = () => {
    if(img) {

    } else {
      
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something...."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="send">
        <img src={attach} alt="" />
        <input
          type="text"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.file[0])}
        />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button onClick={handleSent}>Send</button>
      </div>
    </div>
  );
};

export default Input;
