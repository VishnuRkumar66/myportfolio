// import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import NetflixIntro from "./components/NetflixIntro";
// import Users from "./components/Users";
// import HomePage from "./components/HomePage";
// import NavBar from "./components/NavBar";
// import Certificates from "./components/Certificates";
// import Hobbies from "./components/Hobbies";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";
// import Experience from "./components/Experience";
// import Positives from "./components/Positives";

// const App = () => {
//   const [start, setStart] = useState(0);

//   const [userName, setUserName] = useState("guest");

//   function context() {
//     switch (start) {
//       case 1:
//         return <Users setStart={setStart} setUserName={setUserName} />;

//       case 2:
//         return (
//           <>
//             <NavBar />
//             <div className="pb-16"></div>
//             <Routes>
//               <Route
//                 path="/myportfolio"
//                 element={<HomePage username={userName} />}
//               />
//               <Route path="/certificate" element={<Certificates />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/timeline" element={<Experience />} />
//               <Route path="/experience" element={<Experience />} />
//               <Route path="/positives" element={<Positives />} />
//               <Route path="/skills" element={<Skills />} />
//               <Route path="/hobbies" element={<Hobbies />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/users" element={<Users />} />
//               <Route path="/contact_me" element={<Contact />} />
//               <Route
//                 path="/*"
//                 element={
//                   <div className="w-screen bg-red-400 pt-16">
//                     <p>Page not found</p>
//                   </div>
//                 }
//               />
//             </Routes>
//           </>
//         );

//       default:
//         return <NetflixIntro setStart={setStart} />;
//     }
//   }

//   return (
//     <div className="bg-black w-screen text-white font-netflix">{context()}</div>
//   );
// };

// export default App;

import React from "react";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div className="bg-black w-screen text-white">
      <Projects />
    </div>
  );
};

export default App;
