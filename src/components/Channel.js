import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
const Channel = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (db) {
        const logout=db.collection('messages').orderBy('createdAt').limit(400).onSnapshot(querySnapshot=>{
            const data=query
        })
    }
  }, [db]);
  return null;
};
export default Channel;