import React, { useState } from "react";
// for react icon
import { FaTrashAlt } from "react-icons/fa";
// data import as file
import { userData } from "../UserData";
// user css styles
import "./User.css";
function User() {
  const [profileData, setProfileData] = useState(userData);
  const removeProfileHandler = (id) => {
    const savedUserData = profileData.filter((data) => data.id !== id);
    setProfileData(savedUserData);
  };

  return profileData.map((users) => (
    <div className="user" key={users.id}>
      <div className="user_img">
        <img src={users.img} alt="profile"></img>
        <div className="user_title">
          <p className="user__Name"> {users.userName}</p>
          <p className="user__Job"> {users.jobTitle}</p>
        </div>
      </div>

      <div className="trash_icon">
        {/* this handler on delete button should only work when clicked, so we use arrow function */}
        <FaTrashAlt onClick={() => removeProfileHandler(users.id)} />
      </div>
     
    </div>
  ));
}

export default User;
