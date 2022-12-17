import React, { useState, useReducer, createContext, useContext } from "react";

const ACTIONS = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

export const Todos = (props) => {
  const reducer = (todos, action) => {
    switch (action.type) {
      case ACTIONS.ADD: {
        return [...todos, { name: action.payload.name, id: Date.now() }];
      }
      case ACTIONS.REMOVE: {
        return [todos.filter((el) => el.id !== action.payload.id)];
      }
      default:
        return todos;
    }
  };
  const [todos, dispatch] = useReducer(reducer, []);

  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: { name } });
    setName("");
  };
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' value={name} onChange={handleChange} />
        </form>
      </div>
    </>
  );
};

const MyContext = createContext({ user: null, setUser: () => {} });

const MyProvider = (props) => {
  const [user, setUser] = useState(null);
  const value = {
    user,
    setUser,
  };
  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};
const Another = createContext();
const AnotherProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(null);
  const newValue = { newUser, setNewUser };
  return <Another.Provider value={newValue}>{children}</Another.Provider>;
};
