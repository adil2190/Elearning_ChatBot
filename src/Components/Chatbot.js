import React, { useState } from "react";
import { ReactComponent as SendChat } from "../Assets/sendicon.svg";
import { chatBotMessage } from "../Apis/chatbotApi";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { useEffect } from "react";
import { addDocInSubCollection, db } from "../Services/firestoreService";
import { collectionNames } from "../Constants/firebaseCollections";
function Chatbot({ onClose }) {
  const [msg, setMsg] = useState("");
  const [chatData, setChatData] = useState([]);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const q = query(
      collection(db, collectionNames.students, userId, "chats"),
      orderBy("date", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setChatData(data);
      console.log("messages --> ", data);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (sender) => {
    try {
      const userId = localStorage.getItem("userId");
      await addDocInSubCollection(collectionNames.students, userId, "chats", {
        sender,
        message: msg,
        date: Date.now(),
      });
      setMsg("");
    } catch (err) {
      console.log(err);
    }
  };

  const chatBotSendMessage = async (message) => {
    try {
      const userId = localStorage.getItem("userId");
      await addDocInSubCollection(collectionNames.students, userId, "chats", {
        sender: 2,
        message: message,
        date: Date.now(),
      });
      setMsg("");
    } catch (err) {
      console.log(err);
    }
  };
  const data = [
    { sender: 1, msg: "hello" },
    { sender: 1, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 1, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 1, msg: "hello" },
    { sender: 1, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
    { sender: 2, msg: "hello" },
  ];

  const chatRequest = async (e) => {
    e.preventDefault();
    if (msg) {
      try {
        await sendMessage(1);
        const response = await chatBotMessage(msg);
        await chatBotSendMessage(response.message.top.res);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please write a valid message");
    }
  };
  return (
    <div className="chatbot-body">
      <div className="chatbot-header">
        <div className="chatbot-header-left">
          <div className="chatbot-header-logo"></div>
          <div>
            <div className="chatbot-heading">Chatbot-Elearning</div>
            <div className="chatbot-subheading">AI Chatbot</div>
          </div>
        </div>
        <div className="minimize" onClick={onClose}></div>
      </div>
      <div className="message-wrapper">
        {chatData.map((item) => (
          <div className={item.sender == 1 ? "my-message" : "chatbot-message"}>
            {item.message}
          </div>
        ))}
      </div>
      <form onSubmit={chatRequest} className="chatbot-input-wrapper">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          placeholder="Ask a question"
          className="chatbot-input"
        />
        <button
          type="submit"
          style={{ cursor: "pointer", backgroundColor: "transparent" }}
        >
          <SendChat />
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
