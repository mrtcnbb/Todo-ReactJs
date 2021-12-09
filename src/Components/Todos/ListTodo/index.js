import { useEffect, useState } from 'react';
import './styles.css';

const deleteButton = '\u00D7';
const checkedButton = '\u2713';

function ListTodo({ allTodos, setTodos }) {
  const [filtermode, setFiltermode] = useState('all');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const filtering = () => {
      switch (filtermode) {
        case 'unchecked':
          setFilteredList(allTodos.filter((todo) => !todo.done));
          break;
        case 'checked':
          setFilteredList(allTodos.filter((todo) => todo.done));
          break;
        default:
          setFilteredList([...allTodos]);
          break;
      }
    };
    filtering();
  }, [filtermode, allTodos]);

  const deleteClick = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return id !== todo.id;
      });
    });
  };

  const checkedClick = (id) => {
    const todos = [...allTodos];
    const newState = todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
    setTodos(newState);
  };

  const clearChecked = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return true !== todo.done;
      });
    });
  };

  return (
    <div>
      <ul>
        {allTodos &&
          filteredList.map((todo) => {
            return (
              <li key={todo.id}>
                <button onClick={() => checkedClick(todo.id)}>{checkedButton}</button>
                <p className={todo.done ? 'completed' : ''}>{todo.task}</p>
                <span className="crossbutton" onClick={() => deleteClick(todo.id)}>
                  {deleteButton}
                </span>
              </li>
            );
          })}
      </ul>
      <div className="buttons-container">
        <div>
          <p>{allTodos.filter((todo) => !todo.done).length} items left</p>
        </div>
        <div className="filter-buttons">
          <button onClick={() => setFiltermode('checked')} className>
            Checked
          </button>
          <button onClick={() => setFiltermode('unchecked')}>Unchecked </button>
          <button onClick={() => setFiltermode('all')}>All</button>
        </div>
        <div>
          <button onClick={() => clearChecked()}>Clear Checked</button>
        </div>
      </div>
    </div>
  );
}

export default ListTodo;
