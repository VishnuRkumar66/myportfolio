import React, { useState } from "react";
import NetflixIntro from "./components/NetflixIntro";
import Users from "./components/Users";

const App = () => {
  const [start, setStart] = useState(false);

  return (
    <div className="bg-black  font-netflix">
      {start ? <Users /> : <NetflixIntro setStart={setStart} />}
    </div>
  );
};

export default App;
