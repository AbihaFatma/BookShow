import { useEffect, useState } from "react";
import BsContext from "./BsContext";
const BsState = (props) => {
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [movie, setMovie] = useState("");
  const [time, setTime] = useState("");

  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });
  const [lastBooking, setLastBooking] = useState(null);

  const handlePostBooking = async () => {
    const response = await fetch(`https://localhost:8080/api/booking`, {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
    });
    const data = await response.json();
    setErrorPopup(true);
    setErrorMessage(data.message);

    if (response.status === 2000) {
      setTime("");
      setMovie("");
      setLastBooking(data.data);
      window.localStorage.clear();
    }
  };
  const handleGetBooking = async () => {
    const response = await fetch(`https://localhost:8080/api/booking`, {
      method: "Get",
    });

    const data = await response.json();
    setLastBooking(data.data);
  };

  useEffect(() => {
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));

    if (movie) {
      setMovie(movie);
    }
    if (slot) {
      setTime(slot);
    }
    if (seats) {
      changeNoOfSeats(seats);
    }
  }, []);

  return (
    <BsContext.Provider
      value={{
        movie,
        setMovie,
        time,
        setTime,
        changeNoOfSeats,
        noOfSeat,
        lastBooking,
        setLastBooking,
        handleGetBooking,
        handlePostBooking,
        errorMessage,
        errorPopup,
        setErrorMessage,
        setErrorPopup,
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};
export default BsState;
