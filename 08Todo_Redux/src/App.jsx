import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Todo List with Redux Toolkit
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
