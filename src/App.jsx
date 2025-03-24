import React, { useState } from "react";
import NetflixIntro from "./components/NetflixIntro";
import Users from "./components/Users";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
const App = () => {
  const [start, setStart] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("guest");
  return (
    <div className=" bg-black w-screen  font-netflix">
      {/* {!start ? (
        <NetflixIntro setStart={setStart} />
      ) : userLoggedIn === false ? (
        <Users setUserLoggedIn={setUserLoggedIn} setUserName={setUserName} />
      ) : (
        <>
          <NavBar />
          <HomePage username={userName} />
        </>
      )} */}
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <NavBar /> <HomePage />
            </>
          }
        />
        <Route path="/Certificate" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};
export default App;
