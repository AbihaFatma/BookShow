// import React, { useContext, useEffect } from "react";
// import { seats } from "../data";
// import "../Css/LastBookingDetails.css";
// import BsContext from "../Context/BsContext";

// const LastBooking = () => {
//   const context = useContext(BsContext);

//   const { handleGetBooking, lastBooking } = context;
//   useEffect(() => {
//     handleGetBooking();
//   }, [handleGetBooking]);
//   return (
//     <div className="last_booking_details_container_main">
//       <h2 className="last_booking_details_header">Last Booking Details: </h2>
//       {lastBooking ? (
//         <>
//           <div className="seats_container">
//             <p className="seats_header">Seats:</p>
//             <ul className="seats">
//               {seats.map((seat, index) => (
//                 <li className="seat_value" key={index}>
//                   {seat} : {Number(lastBooking.seats[seat])}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <p className="slot" style={{ textAlign: "left" }}>
//             Slot : <span>{lastBooking.slot}</span>
//           </p>
//           <p className="movie">
//             Movie: <span>{lastBooking.movie}</span>
//           </p>
//         </>
//       ) : (
//         <p className="no_previous">No Previous booking</p>
//       )}
//     </div>
//   );
// };

// export default LastBooking;
