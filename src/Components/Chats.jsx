import React, { useState } from "react";
import { useEffect } from "react";
import profile from "../images/photo for profile.jpg";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";

const Chats = () => {
  const [chat, setChat] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChat(doc.data());
      });
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(Object.entries(chat));
  console.log("current user is: " + currentUser);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u});
  };

  return (
    <div className="chats">
      {Object.entries(chat)?.map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
