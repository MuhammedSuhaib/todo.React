// import React from "react";

// export default function App() {
//   const [todos, setTodos] = React.useState([]);
//   const [input, setInput] = React.useState("");
//   const addTodo = () => {
//     if (input.trim() !== "") {
//       setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
//       setInput("");
//     }
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px" }}>
//       <h1>Todo List</h1>
//       <div style={{ display: "flex", marginBottom: "20px" }}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && addTodo()}
//           placeholder="Add a new todo"
//           style={{ flex: 1, marginRight: "10px", padding: "8px" }}
//         />
//         <button onClick={addTodo} style={{ padding: "8px 16px" }}>
//           Add
//         </button>
//       </div>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               padding: "8px",
//               marginBottom: "8px",
//               backgroundColor: "#f5f5f5",
//               borderRadius: "4px",
//             }}
//           >
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(todo.id)}
//               style={{ marginRight: "10px" }}
//             />
//             <span
//               style={{
//                 textDecoration: todo.completed ? "line-through" : "none",
//                 flex: 1,
//               }}
//             >
//               {todo.text}
//             </span>
//             <button
//               onClick={() => deleteTodo(todo.id)}
//               style={{
//                 backgroundColor: "#ff4444",
//                 color: "white",
//                 border: "none",
//                 padding: "4px 8px",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
      <div className="flex mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo"
          className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none "
        />
        <button
          onClick={addTodo}
          className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center p-4 bg-gray-200 rounded-lg shadow hover:shadow-md transition"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-4"
            />
            <span className={`${todo.completed ? 'line-through text-gray-500' : ''} flex-1`}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
