import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) return;

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="w-full px-4 py-3 pr-32 text-gray-700 bg-white border-2 
                     border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 
                     transition-colors duration-200 shadow-sm placeholder:text-gray-400
                     hover:border-gray-300"
          />
          <button
            type="submit"
            disabled={input.trim().length === 0}
            className="absolute right-2 px-6 py-2 font-medium text-white bg-blue-500 
                     rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500
                     transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <span>Add Task</span>
            </div>
          </button>
        </div>
        <div className="mt-2 text-sm text-gray-500 ml-1">
          {input.trim().length === 0 ? (
            <p>Type something to add a new task</p>
          ) : (
            <p>Press Enter or click Add Task to add</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
