import { useEffect, useState } from "react";

import "./chatUser.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function chatUser() {
  const [user, setUser] = useState(undefined);

  useEffect(()=>{
    console.log(user)
  },[user])
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default chatUser;