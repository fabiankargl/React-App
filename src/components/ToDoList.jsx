import { useState, useEffect } from "react";
import { Container } from "./UI/Container";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");
  const [loaded, setLoaded] = useState(false);

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

  const deleteToDo = (id) => {
    setToDoList((prevToDoList) => {
      const filteredToDoList = prevToDoList.filter((toDo) => toDo.id !== id);
      return filteredToDoList;
    });
  };

  useEffect(() => {
    const storedToDoList = localStorage.getItem("toDoList");
    if (storedToDoList) {
      setToDoList(JSON.parse(storedToDoList));
    }
    setLoaded(true); 
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
    }
  }, [toDoList, loaded]);

  return (
    <Container>
      <h1 className="text-2xl font-bold text-blue-600">To-Do-List</h1>
      <div className="flex m-2 justify-between space-x-3">
        <label htmlFor="todo" className="text-lg">
          Add ToDo:
        </label>
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
      <ul className="m-2 p-2 w-1/2">
        {toDoList.map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex justify-between items-center p-2 border border-gray-400 rounded-lg text-stone-800 text-xl mt-1  w-full"
            >
              <span>{todo.toDo}</span>
              <button
                className="text-sm px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => deleteToDo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
