import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminBookingScreen() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionid",
      key: "transactionid",
    },
    { title: "Room ID", dataIndex: "roomid", key: "roomid" },
    { title: "Room", dataIndex: "room", key: "room" },
    { title: "From Date", dataIndex: "fromdate", key: "fromdate" },
    { title: "To Date", dataIndex: "todate", key: "todate" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "booked" ? "green" : "red"}>
          {status === "booked" ? "CONFIRMED" : "CANCELLED"}
        </Tag>
      ),
    },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/bookings/getallbookings")).data;
      setBookings(data);
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

  return (
    <div style={containerStyle}>
      {loading ? (
        <Loader />
      ) : error.length > 0 ? (
        <Error msg={error} />
      ) : (
        <div style={tableContainerStyle}>
          <Table columns={columns} dataSource={bookings} />
        </div>
      )}
    </div>
  );
}

export default AdminBookingScreen;
