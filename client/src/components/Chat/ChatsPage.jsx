import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import "./chatsPage.css"
export default function ChatsPage(props) {
  //   const chatProps = useMultiChatLogic(
  //     "3049dbe3-8e61-44b5-a46b-d64b044145bf",
  //     props.user.username,
  //     props.user.secret
  //   );
  const { username, secret } = props;
  console.log(props)
  // console.log(user)
  return (
    <div style={{ "height": "100vh" }}>
      <a href={`http://localhost:3001/${username}`} target="blank"><div className="iconVideo" ><AiOutlineVideoCameraAdd /></div>
      </a>
      <PrettyChatWindow
        projectId="3049dbe3-8e61-44b5-a46b-d64b044145bf"
        username={username}
        secret={secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
}