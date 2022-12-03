import { onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {};
  }, []);

  return (
    <ChatContext.Provider value={{ currentUser }}>
      {children}
    </ChatContext.Provider>
  );
};
