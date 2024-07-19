// import React from "react";
// import Home from "./Pages/Home";
// import BsState from "./Context/BsState";
// import "../src/App.css";

// const App = () => {
//   return (
//     <div className="nm">
//       <BsState>
//         <Home />
//       </BsState>
//     </div>
//   );
// };
// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>current count:{count}</p>
//       <button onClick={handleCount}>Increment</button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState, useEffect } from "react";

// function Todo() {
//   const [todo, setTodo] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json())
//       .then((data) => setTodo(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   if (!todo) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Todo List</h1>

//       <div key={todo.id}>
//         <p> User ID:{todo.userId}</p>
//         <p> ID:{todo.id}</p>
//         <p> Title:{todo.title}</p>
//         <p> Completed:{todo.completed ? "Yes" : "No"}</p>
//       </div>
//     </div>
//   );
// }

// export default Todo;
