import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo, editTodo } from "../features/action";
import { Link } from "react-router-dom";
import "./todo.css";

export const Todo = () => {
  const [text, setText] = useState("");
  const [des, setDes] = useState("");
  const todos = useSelector((state) => state.todos);
  const totalTodo = todos.length;
  const dispatch = useDispatch();

  async function req() {
    const data = await fetch("http://localhost:3004/todos").then((d) =>
      d.json()
    );

    dispatch(getTodo(data));
  }

  useEffect(() => {
    req();
  }, []);

  const handleClick = () => {
    fetch("http://localhost:3004/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ status: false, title: text, details: des }),
    })
      .then((d) => d.json())
      .then((res) => {
        // success
        dispatch(addTodo(res));
        setText("");
        setDes("");
      });
  };

  const handleToggle = (id, status) => {
    let newStatus;

    if (status) {
      newStatus = false;
    } else {
      newStatus = true;
    }

    fetch(`http://localhost:3004/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((d) => d.json())
      .then((res) => {
        // success
        dispatch(editTodo(res));
        req();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteElement = (id) => {
    fetch(`http://localhost:3004/todos/${id}`, {
      method: "DELETE",
    })
      .then((d) => d.json())
      .then((res) => {
        req();
      });
  };

  return (
    <div id="todoContainer">
      <input
        id="input"
        value={text}
        type="text"
        placeholder="Enter todo here"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <input
        id="input"
        value={des}
        type="text"
        placeholder="Enter details here"
        onChange={(e) => setDes(e.target.value)}
      ></input>

      <button id="inputButton" onClick={handleClick}>
        Add Todo
      </button>

      <div id="output">
        {todos.map((e, i) => (
          <div key={i} className="element">
            <Link to={`/todo/${e.id}`} className="link">
              <div className="element1">
                <b> ⭐ {e.title} </b>
              </div>
            </Link>
            <div className="buttonDiv">
              <button
                onClick={() => {
                  handleToggle(e.id, e.status);
                }}
              >
                {e.status === false ? "Not Done" : "Done"}
              </button>
              <Link to={`/todo/${e.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button
                onClick={() => {
                  deleteElement(e.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div id="totalTodos">{totalTodo}</div>
    </div>
  );
};
