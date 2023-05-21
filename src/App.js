import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./MyComponents/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("item deleted", todo);
    setTodos((todos) => todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    sno = sno ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  //as soon as someone changes todos run useffect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <BrowserRouter>
      <Header title="To do List" searchBar={true} />
      <Routes>
        <Route>
          <Route
            index
            element={
              <>
                <Todos todos={todos} onDelete={onDelete} />
                <AddTodo addTodo={addTodo} />
              </>
            }
          />

          <Route exact path="/about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
