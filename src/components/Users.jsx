import React, { useState } from "react";
import Popup from "reactjs-popup";
const Users = ({ setUserLoggedIn, setUserName }) => {
  const [Users, setUsers] = useState(["Recruiters", "Friends", "Explorers"]);
  const [newUser, setNewUser] = useState(" ");
  const [PopUp, setPopUp] = useState(false);
  function addUser() {
    if (newUser.trim() === "") {
      alert("enter valid name...");
    } else {
      setUsers([...Users, newUser]);
      setNewUser(" ");
      setPopUp(false);
    }
  }
  function UserClicked(userName) {
    setUserLoggedIn(true);
    setUserName(userName);
  }

  return (
    <div className=" w-screen h-screen flex justify-center items-center text-red-700 ">
      <p className="absolute top-1 left-1 ">VISHNU R KUMAR</p>
      <div>
        <p className="text-center text-white text-2xl p-2">Who's watching.?</p>
        <div className="flex">
          {Users.map((user, index) => (
            <div
              key={index}
              onClick={() => UserClicked(user)}
              className="border-2 m-2 w-[120px] h-[120px] flex items-center justify-center text-center rounded bg-gray-950 cursor-pointer hover:border-[3px] hover:bg-gray-900"
            >
              <p>{user}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => setPopUp(true)}
          className=" rounded p-2 mt-3 m-auto flex cursor-pointer  bg-gray-900 hover:bg-gray-800 w-[50px] h-[50px]  bg-[url(./assets/add.png)] bg-contain"
        ></button>

        <Popup
          open={PopUp}
          onClose={() => setPopUp(false)}
          position="top center"
        >
          <div className="text-red-700 bg-gray-900 rounded  font-netflix border-2 p-2">
            Name :
            <input
              type="text"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              className="rounded m-2 border-2  w-[100px]"
            />
            <br />
            <button
              onClick={addUser}
              className="m-auto flex border-1  border-red-600 rounded  p-1  bg-gray-800 hover:bg-gray-900 cursor-pointer mt-2
             "
            >
              submit
            </button>
          </div>

          <p></p>
        </Popup>
      </div>
    </div>
  );
};

export default Users;
