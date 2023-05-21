import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3">TO DO LIST</h3>
      {props.todos.length === 0
        ? "No tasks for today"
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
