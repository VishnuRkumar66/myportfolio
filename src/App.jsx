import React, { useState } from "react";
import NetflixIntro from "./components/NetflixIntro";
import Users from "./components/Users";
import MainPage from "./components/MainPage";

const App = () => {
  const [start, setStart] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <div className=" bg-black w-screen  font-netflix">
      {/* {!start ? (
        <NetflixIntro setStart={setStart} />
      ) : userLoggedIn === false ? (
        <Users setUserLoggedIn={setUserLoggedIn} setUserName={setUserName} />
      ) : (
        <MainPage username={userName} />
      )} */}
      <MainPage/>
    </div>
  );
};
export default App;