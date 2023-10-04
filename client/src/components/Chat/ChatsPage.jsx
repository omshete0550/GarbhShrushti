import React from "react";
import axios from "axios";
import { PrettyChatWindow } from "react-chat-engine-pretty";

export default function ChatsPage(props) {
//   const chatProps = useMultiChatLogic(
//     "3049dbe3-8e61-44b5-a46b-d64b044145bf",
//     props.user.username,
//     props.user.secret
//   );
const {user} = props;
console.log(user)
  return (
    <div style={{ "height": "100vh" }}>
      <PrettyChatWindow
        projectId="3049dbe3-8e61-44b5-a46b-d64b044145bf"
        username={user.username}
        secret={user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
}