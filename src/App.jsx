import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addTodo,
  checkCompleted,
  deleteCompleted,
  deleteTask,
} from "./redux/slices/todoSlice";

const App = () => {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;

    dispatch(addTodo({ id: newId, task, completed: false }));
  };

  const handleChecked = (id, check) => {
    const findById = todos.find((todo) => todo.id === id);

    if (findById) {
      dispatch(checkCompleted({ id, completed: check }));
    }
  };

  return (
    <>
      <form
        action=""
        style={{ display: "flex", gap: "50px" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="masukkan todo"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>
      <button
        type="button"
        style={{ marginTop: "10px", background: "transparent", color: "red" }}
        onClick={() => dispatch(deleteCompleted())}
      >
        hapus list selesai
      </button>
      {todos.map((todo, i) => (
        <div key={i} style={{ display: "flex", gap: "10px" }}>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={(e) => handleChecked(todo.id, e.target.checked)}
          />
          {todo.completed === true ? (
            <p style={{ textDecoration: "line-through" }}>
              {todo.id} {todo.task}
            </p>
          ) : (
            <p>
              {todo.id} {todo.task}
            </p>
          )}
          <button
            type="button"
            style={{
              background: "transparent",
              color: "red",
              fontWeight: "bold",
            }}
            onClick={() => dispatch(deleteTask({ id: todo.id }))}
          >
            x
          </button>
        </div>
      ))}
    </>
  );
};

export default App;
