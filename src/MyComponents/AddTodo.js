import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) alert("title or description can not be blank");
    else {
      props.addTodo(title, desc);
      settitle("");
      setdesc("");
    }
  };

  return (
    <div classNameName="container my-3">
      <h3 className="text-center">Add a Task</h3>
      <form className="mx-3 px-3" onSubmit={submit}>
        <div classNameName="mb-3">
          <label htmlFor="title" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Task Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Task
        </button>
      </form>
    </div>
  );
};
