import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';

function NewTodoForm({ addTodos }) {
  const [newTodo, setNewTodo] = useState('');
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      task: newTodo,
      done: false,
      id: uuidv4(),
    };

    if (newTodo.trim() === '') {
      return false;
    }

    addTodos((prevTodos) => {
      const newToodos = [...prevTodos, todo];
      return newToodos;
    });

    setNewTodo('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChange} placeholder="What needs to be done?" />
      </form>
    </div>
  );
}

export default NewTodoForm;
