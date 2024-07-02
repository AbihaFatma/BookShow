import React, { useContext } from "react";
import SelectMovie from "../components/SelectMovie";
import TimeSchedule from "../components/TimeSchedule";
import SelectSeats from "../components/SelectSeats";
import LastBooking from "../components/LastBooking";
import "../Css/Home.css";
import BsContext from "../Context/BsContext";
const Home = () => {
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context;
  const handleBookNow = () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please select a movie");
    } else {
      handlePostBooking();
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="select-movie-component">
          <SelectMovie />
        </div>
        <div className="last_booking_details_container">
          <LastBooking />
        </div>
      </div>
      <div className="time_seats_container">
        <TimeSchedule />
        <SelectSeats />
        <button
          className="BN-btn"
          onClick={() => {
            handleBookNow();
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Home;
