// import Section from "./components/Section";
// import PaintingList from "./components/PaintingList/PaintingList";
// import paintings from "../src/paintings.json";
// import Counter from "./components/Counter/Counter";
// import Dropdown from "./components/Dropdown/Dropdown";
import { Component } from "react";
import Form from "./components/Form/Form";
import LoginForm from "./components/LoginForm/LoginForm";

export default class App extends Component {
  handleSubmitForm = (data) => {
    console.log("data :>> ", data);
  };

  render() {
    return (
      <div>
        <Form onSubmitq={this.handleSubmitForm} />
        {/* <LoginForm onSubmit={(values) => console.log(values)} /> */}

        {/* <Counter step={2} />
      <Dropdown />
      <Section style={{ textAlign: "center" }} title="Gallery">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Top gallery" /> */}
      </div>
    );
  }
}
