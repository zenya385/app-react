import { useEffect, useState } from "react";
import TodoEditor from "../../components/TodoEditor/TodoEditor";
import TodoFilter from "../../components/TodoFilter/TodoFilter";
import TodoList from "../../components/TodoList/TodoList";
import shortid from "shortid";
import { Link, Outlet } from "react-router-dom";


export default function ToDoPage() {
  
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");

useEffect(() => {
    const todos = localStorage.getItem("todos");
  const parsedTodos = JSON.parse(todos);
  
    if (parsedTodos) {
      setTodos(parsedTodos);
    }
}, []);
  

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter(({ id }) => id !== todoId));
  };

  const toggleCompleted = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleTodos = () => {
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter)
    );
  };
    const calculateCompletedTodos = () => {
    return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
  };

    const totalTodoCount = todos.length;
  const completedTodoCount = calculateCompletedTodos();
  const visibleTodos = getVisibleTodos();

  return <>
 <TodoEditor onSubmit={addTodo} /> 
 <div>
          <p>Всього нотаток: {totalTodoCount}</p>
           <p>Виконано: {completedTodoCount}</p>
      </div> 
 <TodoFilter value={filter} onChange={changeFilter} /> 
 <TodoList
         todos={visibleTodos}
          onDeleteTodo={deleteTodo}
           onToggleCompleted={toggleCompleted}
    /> 
    
    <div>
      <ul>
        <li>
          <Link to="painting">Painting image</Link>
        </li>
        <li>
          <Link to="clock">Clock time</Link>
        </li>
        <li>
          <Link to="counter">Counter</Link>
        </li>
      </ul>
    </div>
      <Outlet />
  </>
};
