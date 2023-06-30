import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminRoomScreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [
    {
      title: "Room ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    { title: "Max Count", dataIndex: "maxcount", key: "maxcount" },
    { title: "Phone Number", dataIndex: "phonenumber", key: "phonenumber" },
    { title: "Rent per Day", dataIndex: "rentperday", key: "rentperday" },
    { title: "Type", dataIndex: "type", key: "type" },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/rooms/getallrooms")).data;
      setRooms(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMyData();
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const tableContainerStyle = {
    width: "800px",
    padding: "20px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    marginBottom: "16px",
  };

  return (
    <div style={containerStyle}>
      {loading ? (
        <Loader />
      ) : error.length > 0 ? (
        <Error msg={error} />
      ) : (
        <div style={tableContainerStyle}>
          <Button
            type="primary"
            style={buttonStyle}
            onClick={fetchMyData}
          >
            Refresh
          </Button>
          <Table columns={columns} dataSource={rooms} />
        </div>
      )}
    </div>
  );
}

export default AdminRoomScreen;
