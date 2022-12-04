import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ChatContext } from "../Context/ChatContext";
import { db } from "../firebase";
import "../style.scss";
import Message from "./Message";

const Messages = () => {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
  }, [data.chatID]);
  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} />
      ))}
    </div>
  );
};

export default Messages;
