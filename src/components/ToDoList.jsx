import { useState, useEffect } from "react";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");

  const handleInput = (event) => {
    setToDo(event.target.value);
  };

  const addToDo = (toDo) => {
    if (toDo.trim() === "") return;
    setToDoList((prevToDoList) => {
      return [
        ...prevToDoList,
        {
          id: Math.random(), // change later for good id
          toDo: toDo,
        },
      ];
    });
    setToDo("");
  };

  useEffect(() => {
    const storedToDoList = localStorage.getItem("toDoList");
    if (storedToDoList) {
      setToDoList(JSON.parse(storedToDoList));
    }
  }, []);

  useEffect(() => {
    if (toDoList.length > 0) {
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
    }
  }, [toDoList]);

  return (
    <div className="flex flex-col items-center bg-slate-300 m-4 rounded-3xl p-4 w-1/2 mx-auto">
      <h1 className="text-2xl font-bold text-blue-600">To-Do-List</h1>
      <div className="flex m-2 justify-between space-x-3">
        <label htmlFor="todo" className="text-lg">Add ToDo:</label>
        <input
          type="text"
          id="todo"
          value={toDo}
          onChange={(event) => handleInput(event)}
        />
        <button
          className="text-sm px-2 py-1 mx-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
          onClick={() => addToDo(toDo)}
        >
          Add
        </button>
      </div>
      <ul className="m-2 p-2  w-1/2">
        {toDoList.map((todo) => {
          return (
            <li
              key={todo.id}
              className="p-2 border border-gray-400 rounded-lg text-stone-800 text-xl mt-1  w-full"
            >
              {todo.toDo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
