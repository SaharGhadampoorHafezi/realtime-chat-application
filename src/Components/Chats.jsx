import React, { useState } from "react";
import { useEffect } from "react";
import profile from "../images/photo for profile.jpg";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Chats = () => {
  const [chat, setChat] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChats", currentUser.uid),
        (doc) => {
          setChat(doc.data());
        }
      );
      return () => {
        unsub();
      };
    };
    
    currentUser.uid && getChats();

  }, [currentUser.uid]);

  console.log(Object.entries(chat));
  console.log("current user is: " + currentUser);

  return (
    <div className="chats">
      {Object.entries(chat)?.map((chat => (
        <div className="userChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage}</p>
          </div>
        </div>
      )))}
    </div>
  );
};

export default Chats;
