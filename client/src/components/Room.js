import React, { useState, useEffect } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Room({ room, fromDate, toDate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const roomContainerStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
  };

  const roomImageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  };

  const roomDetailsStyle = {
    paddingLeft: "20px",
  };

  const roomActionsStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px",
  };

  const modalTitleStyle = {
    textAlign: "center",
  };

  return (
    <div style={roomContainerStyle}>
      <div className="col-md-4">
        <img src={room.imageurls[0]} style={roomImageStyle} alt="" />
      </div>
      <div className="col-md-7" style={roomDetailsStyle}>
        <h1>{room.name}</h1>
        <b>
          <p>Max Count: {room.maxcount}</p>
          <p>Phone Number: {room.phonenumber}</p>
          <p>Type: {room.type}</p>
        </b>

        <div style={roomActionsStyle}>
          {fromDate && toDate && (
            <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
              <button className="btn btn-primary m-2">Book Now</button>
            </Link>
          )}

          <button
            className="btn btn-primary m-2"
            onClick={handleShow}
          >
            View Detail
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={modalTitleStyle}>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item key={url}>
                  <img
                    className="d-block w-100 bigimg"
                    src={url}
                    alt="Slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Room;
