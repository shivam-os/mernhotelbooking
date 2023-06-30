import React, { useEffect } from "react";
import { Tabs, Tag } from "antd";

import MyBookingScreen from "./MyBookingScreen";
const { TabPane } = Tabs;

function ProfileScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, [user]);

  function callback(key) {
    console.log(key);
  }

  const containerStyle = {
    marginLeft: "3rem",
    marginTop: "3rem",
  };

  const tabContentStyle = {
    padding: "1rem",
  };

  const profileCardStyle = {
    margin: "0 auto",
    width: "400px",
    padding: "1rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Profile" key="1">
          <div style={tabContentStyle}>
            <div style={profileCardStyle}>
              <h3>My Profile</h3>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>
                IsAdmin:{" "}
                {user.isAdmin ? (
                  <Tag color="green">YES</Tag>
                ) : (
                  <Tag color="red">NO</Tag>
                )}
              </p>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Booking" key="2">
          <div style={tabContentStyle}>
            <MyBookingScreen />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ProfileScreen;
