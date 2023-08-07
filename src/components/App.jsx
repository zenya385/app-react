import React, { useState, useEffect } from "react";
import shortid from "shortid";
import Section from "./Section";
import PaintingList from "./PaintingList/PaintingList";
import paintings from "../paintings.json";
import Counter from "./Counter/Counter";
import Dropdown from "./Dropdown/Dropdown";
import Form from "./Form/Form";
import LoginForm from "./LoginForm/LoginForm";
import LifeCycle from "./LifeCycle/LifeCycle";
import Clock from "./Clock/Clock";
import Container from "./Container/Container";
import Modal from "./Modal/Modal";
import TodoList from "./TodoList/TodoList";
import TodoFilter from "./TodoFilter/TodoFilter";
import Todo from "./Todo/Todo";
import TodoEditor from "./TodoEditor/TodoEditor";
import Counter1 from "./Counter1/Counter1";
import App1 from "./Counter/Counter";
import { Route, Routes, Link, NavLink, Navigate } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import ColorPicker from "./ColorPicker/ColorPicker";
import styled from "styled-components";
import ToDoPage from "../pages/ToDoPage/ToDoPage";
import CouterPage from "../pages/CounterPage.jsx/CouterPage";
import Painting from "./Painting";
import Customers from "../pages/Customers/Customers";
import CustomerDetails from "../pages/CustomerDetails/CustomerDetails";
// import SharedLayout from "./components/SharedLayout/SharedLayout";
// import ToDoPage from "./pages/ToDoPage/ToDoPage";
// import Painting from "./components/Painting";
// import PaintingPage from "./pages/PaitingPage/PaintingPage";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

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
        <StyledLink to="/counter">Counter</StyledLink>
        <StyledLink to="/customers">Customers</StyledLink>
        <StyledLink to="/counter1">Counter1</StyledLink>
        <StyledLink to="/painting">Painting List</StyledLink>
        <StyledLink to="/todo">To Do</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route index element={<Navigate to="customers" />} />

        <Route
          path="/colorpicker"
          element={<ColorPicker options={colorPickerOptions} />}
        />
        <Route path="/counter" element={<CouterPage />} />
        <Route path="/counter1" element={<Counter1 />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/:customerId" element={<CustomerDetails />} />
        <Route path="/painting" element={<PaintingList items={paintings} />} />
        <Route path="/todo" element={<ToDoPage />}>
          <Route path="painting" element={<div> Painting </div>} />
          <Route path="clock" element={<Clock />} />
          <Route path="counter" element={<Counter step={3} />} />
        </Route>
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
