import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Form extends Component {
  loginInputId = nanoid();
  //   nickInputId = nanoid();
  //  passInputId = nanoid();

  state = {
    inputValue: "",
    tag: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitq(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      inputValue: "",
      tag: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.loginInputId}>Ім'я</label>
          <input
            id={this.loginInputId}
            type="text"
            name="inputValue"
            placeholder="введіть своє ім'я"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <label>
            Нікнейм
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Відправити</button>
        </form>
      </div>
    );
  }
}
