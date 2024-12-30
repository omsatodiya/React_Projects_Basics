import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow">
        <p className="text-gray-500 text-lg">
          No todos yet. Add one to get started!
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="group transform transition-all duration-200 hover:-translate-y-1 
                     flex items-center justify-between p-4 bg-white rounded-lg shadow-md 
                     hover:shadow-lg border border-gray-100"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className="relative">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 
                         focus:ring-blue-500 transition-all duration-200 
                         cursor-pointer"
              />
              {todo.completed && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-3 w-3 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              )}
            </div>
            <span
              className={`flex-1 text-gray-700 transition-all duration-200
                       ${todo.completed ? "line-through text-gray-400" : ""}
                       ${todo.completed ? "opacity-50" : "opacity-100"}`}
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="ml-4 px-3 py-1.5 bg-red-50 text-red-500 rounded-md
                     hover:bg-red-100 transition-colors duration-200
                     opacity-0 group-hover:opacity-100 focus:outline-none
                     focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Delete todo"
          >
            <div className="flex items-center gap-1">
              <svg
                className="h-4 w-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
              <span className="text-sm font-medium">Delete</span>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
