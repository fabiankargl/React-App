import { useState, useEffect } from "react";
import { Container } from "../../shared/components/Container";
import { Label } from "../../shared/components/UI/LabelV1/Label";
import { Button } from "../../shared/components/UI/ButtonV1/Button";

interface ToDo {
  id: string;
  toDo: string;
}

const ToDoList = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDo[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(event.target.value);
  };

  const addToDo = (toDo: string) => {
    if (toDo.trim() === "") return;
    const newToDo = { id: Date.now().toString(), toDo };
    setToDoList((prevToDoList) => [...prevToDoList, newToDo]);
    setToDo("");
  };

  const deleteToDo = (id: string) => {
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
        <Label forHtml={"todo"}>Add ToDo:</Label>
        <input
          type="text"
          id="todo"
          value={toDo}
          onChange={handleInput}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-testid={"todo_input"}
        />
        <Button onClick={() => addToDo(toDo)} data-testid={"todo_btn_add"}>Add</Button>
      </div>
      <ul className="m-2 p-2 w-1/2">
        {toDoList.map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex justify-between items-center p-2 border border-gray-400 rounded-lg text-stone-800 text-xl mt-1 w-full"
            >
              <span data-testid={"todo_element"}>{todo.toDo}</span>
              <button
                className="text-sm px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => deleteToDo(todo.id)}
                data-testid={"todo_btn_delete"}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ToDoList;