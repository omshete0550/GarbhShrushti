import { useEffect, useState } from "react";

import "./chatUser.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function chatUser() {
  // const [user, setUser] = useState({
  //   name: null,
  //   secret: null
  // });
  async function onSubmits(e) {
    const storedUserName = localStorage.getItem("userName");
    console.log(storedUserName)
    setUser(
      {
        name: storedUserName,
        secret: storedUserName
      }
    )
    // e.preventDefault();
    const { value } = e.target[0];
    console.log(value);
    await axios.post("http://localhost:8800/authenticate",
      {
        username: storedUserName
      })
      .then(r => r.json()).then((res) => console.log(res))
      .catch(e => console.log(e))
  };



  useEffect(() => {
    // const storedUserName = localStorage.getItem("userName");

    // if (storedUserName) {
    // setUser(prevUser => ({
    //   ...prevUser,
    //   name: storedUserName,
    //   secret: storedUserName
    // }));
    onSubmits()
    // }
  }, []);
  const storedUserName = localStorage.getItem("userName")

  // if (!user) {
  //   return <AuthPage onAuth={user} />;
  // } else {
  return <ChatsPage username={storedUserName} secret={storedUserName} />;
  // }
}

export default chatUser;