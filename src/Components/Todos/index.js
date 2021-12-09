import { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import ListTodo from './ListTodo';
import './styles.css';

function Todos() {
  const [allTodos, setAllTodos] = useState([]);

  return (
    <div className="container">
      <NewTodoForm allTodos={allTodos} addTodos={setAllTodos} />
      <ListTodo allTodos={allTodos} setTodos={setAllTodos} />
    </div>
  );
}

export default Todos;
