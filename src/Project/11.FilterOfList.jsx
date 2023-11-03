import { useEffect, useState } from "react";
// This React component displays a list of todos and allows the user to filter the list by completed and incompleted todos. 
// Write a test case to ensure that the filtering functionality is working correctly.
export default function FilterOfList() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);
  const [showIncompleted, setShowIncompleted] = useState(true);
  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const filterTodos = (todos) => {
    return todos.filter((todo) => {
      const isCompleted = todo.completed;

      if (showCompleted && showIncompleted) {
        // Show all todos
        return true;
      } else if (showCompleted && !showIncompleted) {
        // Show completed todos only
        return isCompleted;
      } else if (!showCompleted && showIncompleted) {
        // Show incompleted todos only
        return !isCompleted;
      } else {
        // Show no todos
        return false;
      }
    });
  };

  const filteredTodos = filterTodos(todos);
  console.log(filteredTodos);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="checkbox"
        checked={showCompleted}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
      Show Completed
      <input
        type="checkbox"
        checked={showIncompleted}
        onChange={(e) => setShowIncompleted(e.target.checked)}
      />
      Show Incompleted
      <ul>
        {filteredTodos.map((todo) => (
          <>
            <li key={todo.id}>{todo.title}</li>
          </>
        ))}
      </ul>
    </div>
  );
}
