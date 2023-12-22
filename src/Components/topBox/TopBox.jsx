import React from "react";
import { topDealUsers } from "../../data";

import "./topBox.scss";

// ye box1 ky  andar a data hy jo keh data.jsx sy lea fr edr map krlea
const TopBox = () => {
  return (
    <>
      <div className="topBox">
        <h1>Top Deals</h1>
        <div className="list">
          {topDealUsers.map(user => (
            <div className="listItem" key={user.id}>
              <div className="user">
                <h4>{user.img}</h4>
                <div className="userTexts">
                  <span className="username">{user.username}</span>
                  <span className="email">{user.email}</span>
                </div>
              </div>

              <span className="amount">{user.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopBox;
