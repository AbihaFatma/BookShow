// import React, { useContext } from "react";
// import { slots } from "../data";
// import RadioComponent from "./RadioComponent";
// import BsContext from "../Context/BsContext";
// import "../Css/TimeSchedule.css";

// const TimeSchedule = () => {
//   const { time, setTime } = useContext(BsContext);
//   const handleChangeItem = (val) => {
//     setTime(val);
//     window.localStorage.setItem("slot", val);
//   };
//   return (
//     <>
//       <div className="slot_container">
//         <h1 className="TS_heading">Select a Schedule</h1>
//         <div className="TS_main_container">
//           {slots.map((el, index) => (
//             <RadioComponent
//               text={el}
//               key={index}
//               data={time}
//               changeSelection={handleChangeItem}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default TimeSchedule;
