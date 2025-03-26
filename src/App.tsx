import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
      },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-pink-600 mb-2">
            ✨ Min To-Do Liste ✨
          </h1>
          <p className="text-pink-400 italic">Organiser dagene dine med stil</p>
        </div>

        <form onSubmit={addTodo} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Legg til en ny oppgave..."
              className="flex-1 px-4 py-3 rounded-full border-2 border-pink-200 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              Legg til
            </button>
          </div>
        </form>

        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm hover:shadow-md transition-all transform hover:scale-[1.02] border border-pink-100"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-6 h-6 text-pink-500 rounded-full focus:ring-pink-300 border-pink-300"
              />
              <span
                className={`flex-1 text-lg ${
                  todo.completed
                    ? "line-through text-pink-300"
                    : "text-gray-700"
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-pink-400 hover:text-pink-600 focus:outline-none transform hover:scale-110 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}

          {todos.length === 0 && (
            <div className="text-center py-12">
              <div className="text-pink-300 text-6xl mb-4">🌸</div>
              <p className="text-pink-400 text-lg">
                Ingen oppgaver ennå. Legg til en ny oppgave over!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
