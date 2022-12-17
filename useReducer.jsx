// import { Fragment } from "react";
// import React, { useReducer, useState } from "react/cjs/react.production.min";

// export default function ReduceMe(props) {
//   const ACTIONS = {
//     INCREMENT: "ADD",
//     DECREMENT: "MINUS",
//   };
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case ACTIONS.INCREMENT:
//         return { count: state.count + 1 };
//       case ACTIONS.DECREMENT:
//         return { count: state.count - 1 };
//       default:
//         throw new Error(console.log("no state to change"));
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   return (
//     <Fragment>
//       <button onClick={dispatch({ type: "ADD" })}>Add</button>
//       <span>{state.count}</span>
//     </Fragment>
//   );
// }

// export default function App() {
//   const reducer = (todos, action) => {
//     switch (action.type) {
//       case "ADD":
//         return [...todos, newTodo(action.payload.name)];
//       default:
//         return todos;
//     }
//   };
//   const [todos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");
//   const newTodo = () => {
//     return { id: Date.now(), name: name, complete: false };
//   };
//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch({ type: "ADD", payload: { name: name } });
//     setName("");
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type='text'
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </form>
//     </>
//   );
// }
