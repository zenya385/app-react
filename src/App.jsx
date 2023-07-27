
// import { Component } from "react";
// import shortid from "shortid";
// import Section from "./components/Section";
// import PaintingList from "./components/PaintingList/PaintingList";
// import paintings from "../src/paintings.json";
// import Counter from "./components/Counter/Counter";
// import Dropdown from "./components/Dropdown/Dropdown";
// import Form from "./components/Form/Form";
// import LoginForm from "./components/LoginForm/LoginForm";
// import LifeCycle from "./components/LifeCycle/LifeCycle";
// import Clock from "./components/Clock/Clock";
// import Container from "./components/Container/Container";
// import Modal from "./components/Modal/Modal";
// import TodoList from "./components/TodoList/TodoList";
// import TodoFilter from "./components/TodoFilter/TodoFilter";
// import Todo from "./components/Todo/Todo";
// import TodoEditor from "./components/TodoEditor/TodoEditor";
// import Counter1 from "./components/Counter1/Counter1";
// import App1 from "./components/Counter/Counter";
// import { Route, Routes } from "react-router";
// import { Link, NavLink } from "react-router-dom";
// import NotFound from "./components/NotFound/NotFound";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
// import styled from "styled-components";

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }`

// export default class App extends Component {
//   state = {
//     todos: [],
//     filter: "",
//     showModal: false,
//   };
//   componentDidMount() {
//     // console.log('App componentDidMount');

//     const todos = localStorage.getItem("todos");
//     const parsedTodos = JSON.parse(todos);

//     if (parsedTodos) {
//       this.setState({ todos: parsedTodos });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log('App componentDidUpdate');

//     const nextTodos = this.state.todos;
//     const prevTodos = prevState.todos;

//     if (nextTodos !== prevTodos) {
//       // console.log("Обновилось поле todos, записую todos в сховище");
//       localStorage.setItem("todos", JSON.stringify(nextTodos));
//     }

//     if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
//       // this.toggleModal();
//     }
//   }

//   addTodo = (text) => {
//     const todo = {
//       id: shortid.generate(),
//       text,
//       completed: false,
//     };

//     this.setState(({ todos }) => ({
//       todos: [todo, ...todos],
//     }));

//     // this.toggleModal();
//   };

//   deleteTodo = (todoId) => {
//     this.setState(({ todos }) => ({
//       todos: todos.filter(({ id }) => id !== todoId),
//     }));
//   };

//   toggleCompleted = (todoId) => {
//     this.setState(({ todos }) => ({
//       todos: todos.map((todo) =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleTodos = () => {
//     const { filter, todos } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return todos.filter(({ text }) =>
//       text.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   handleSubmitForm = (data) => {
//     console.log("data :>> ", data);
//   };

//   calculateCompletedTodos = () => {
//     const { todos } = this.state;

//     return todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0
//     );
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { todos, filter, showModal } = this.state;
//     const totalTodoCount = todos.length;
//     const completedTodoCount = this.calculateCompletedTodos();
//     const visibleTodos = this.getVisibleTodos();



//     return (
//       <Container>


//         {/* <button type="button" onClick={this.toggleModal}>
//           відкрити модалку
//         </button> */}
//         {/* <Clock /> */}

//         {/* {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <Form onSubmitq={this.handleSubmitForm} />
//             <Clock />
//             <Clock />
//             <Clock />
//             <button type="button" onClick={this.toggleModal}>
//               закрити модалку
//             </button>
//           </Modal>
//         )} */}
//         {/* <Clock /> */}
//         {/* <TodoEditor onSubmit={this.addTodo} /> */}

//         {/* <div>
//           <p>Всього нотаток: {totalTodoCount}</p>
//           <p>Виконано: {completedTodoCount}</p>
//         </div> */}
//         {/* <TodoFilter value={filter} onChange={this.changeFilter} /> */}
//         {/* <TodoList
//           todos={visibleTodos}
//           onDeleteTodo={this.deleteTodo}
//           onToggleCompleted={this.toggleCompleted}
//         /> */}
//         {/* <LifeCycle val={5} /> */}
//         {/* <Form onSubmitq={this.handleSubmitForm} /> */}
//         {/* <LoginForm onSubmit={(values) => console.log(values)} /> */}
//        {/* <Counter step={1} /> */}
//         {/* <Counter1 /> */}
//         {/* <Dropdown /> */}
//         {/* <Section title="Gallery">
//           <PaintingList items={paintings} />
//         </Section> */}
//         {/* <Section title="Top gallery" /> */}
//         {/* <App1 step={6} /> */}

//         <nav style={{ display:"flex", justifyContent:"space-evenly"}}>
//           <StyledLink to="/">Home</StyledLink>
//           <StyledLink to="/colorpicker">ColorPicker</StyledLink>
//           <StyledLink to="/painting">Painting List</StyledLink>
//           {/* <StyledLink to="/products">Products</StyledLink> */}
//         </nav>
//         <Routes>
//           <Route path="/" element={  <Clock/> } />
//           <Route path="/colorpicker" element={  <ColorPicker/> } />
//           <Route path="/about" element={  <Counter1 /> } />
//           <Route path="/painting" element={  <PaintingList items={paintings}/> } />
//           <Route path="/todo" element={ <Form onSubmitq={this.handleSubmitForm} /> } />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Container>

//     );
//   }
// }


// ========================================== hooks =============================================



import React, { useState, useEffect } from "react";
import shortid from "shortid";
import Section from "./components/Section";
import PaintingList from "./components/PaintingList/PaintingList";
import paintings from "../src/paintings.json";
import Counter from "./components/Counter/Counter";
import Dropdown from "./components/Dropdown/Dropdown";
import Form from "./components/Form/Form";
import LoginForm from "./components/LoginForm/LoginForm";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import Clock from "./components/Clock/Clock";
import Container from "./components/Container/Container";
import Modal from "./components/Modal/Modal";
import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import Todo from "./components/Todo/Todo";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import Counter1 from "./components/Counter1/Counter1";
import App1 from "./components/Counter/Counter";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import styled from "styled-components";
import ToDoPage from "./pages/ToDoPage/ToDoPage";
import Painting from "./components/Painting";
import PaintingPage from "./pages/PaitingPage/PaintingPage";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const App = () => {
 const [showModal, setShowModal] = useState(false);

  const handleSubmitForm = (data) => {
    console.log("data :", data);
  };

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };



  return (
    <Container>
      <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/colorpicker">Color Picker</StyledLink>
        <StyledLink to="/painting">Painting List</StyledLink>
        <StyledLink to="/todo">To Do</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/colorpicker" element={<ColorPicker />} />
        <Route path="/about" element={<Counter1 />} />
        <Route path="/painting" element={<PaintingList items={paintings} />} />
        <Route path="/painting/:" element={<PaintingPage  />} />
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </Container>
  );
};

export default App;




// =========================== components =======================================


//       <Container>


//         {/* <button type="button" onClick={this.toggleModal}>
//           відкрити модалку
//         </button> */}
//         {/* <Clock /> */}

//         {/* {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <Form onSubmitq={this.handleSubmitForm} />
//             <Clock />
//             <Clock />
//             <Clock />
//             <button type="button" onClick={this.toggleModal}>
//               закрити модалку
//             </button>
//           </Modal>
//         )} */}
//         {/* <Clock /> */}
//*         {/* <TodoEditor onSubmit={this.addTodo} /> */}

//*         {/* <div>
//*           <p>Всього нотаток: {totalTodoCount}</p>
//*           <p>Виконано: {completedTodoCount}</p>
//*         </div> */}
//*         {/* <TodoFilter value={filter} onChange={this.changeFilter} /> */}
//*         {/* <TodoList
//*           todos={visibleTodos}
//*           onDeleteTodo={this.deleteTodo}
//*           onToggleCompleted={this.toggleCompleted}
//*         /> */}
//         {/* <LifeCycle val={5} /> */}
//         {/* <Form onSubmitq={this.handleSubmitForm} /> */}
//         {/* <LoginForm onSubmit={(values) => console.log(values)} /> */}
//        {/* <Counter step={1} /> */}
//         {/* <Counter1 /> */}
//         {/* <Dropdown /> */}
//         {/* <Section title="Gallery">
//           <PaintingList items={paintings} />
//         </Section> */}
//         {/* <Section title="Top gallery" /> */}
//         {/* <App1 step={6} /> */}