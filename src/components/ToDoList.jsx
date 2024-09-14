import { useState } from "react";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");

  const handleInput = (event) => {
    setToDo(event.target.value);
  };

  const addToDo = (toDo) => {
    setToDoList((prevToDoList) => {
      return [
        ...prevToDoList,
        {
          id: Math.random(), // change later for good id
          toDo: toDo,
        },
      ];
    });
  };

  return (
    <div className="flex flex-col items-center bg-slate-300 m-4 rounded-3xl p-4 w-1/2 mx-auto">
      <h1 className="text-2xl font-bold text-blue-600">To-Do-List</h1>
      <div className="flex m-2 justify-between space-x-3">
        <label htmlFor="todo">Add ToDo:</label>
        <input type="text" id="todo" onChange={(event) => handleInput(event)} />
        <button
          className="text-sm px-2 py-1 mx-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
          onClick={() => addToDo(toDo)}
        >
          Add
        </button>
      </div>
      <ul className="m-4 p-4  w-1/2">
        <li className="p-2 border border-gray-400 rounded-lg text-stone-800 text-xl  w-full">
          tets
        </li>
      </ul>
    </div>
  );
}
