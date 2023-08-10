import React, { Component } from "react";
import { nanoid } from "nanoid";
import s from "./Form.module.css";

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
        <form onSubmit={this.handleSubmit} className={s.form__wrap}>
          <label htmlFor={this.loginInputId} style={{ textAlign: "start" }}>
            Ім'я
          </label>
          <input
            className={s.form__input}
            id={this.loginInputId}
            type="text"
            name="inputValue"
            placeholder="Введіть ім'я"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <label style={{ textAlign: "start" }}>
            Нікнейм
            <input
              className={s.form__input}
              type="text"
              name="tag"
              placeholder="Введіть login"
              value={this.state.tag}
              onChange={this.handleInputChange}
            />
          </label>
          <label style={{ textAlign: "start" }}>
            Пароль
            <input
              className={s.form__input}
              type="password"
              name="password"
              placeholder="Введіть password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit" className={s.form__toggle}>
            Відправити
          </button>
        </form>
      </div>
    );
  }
}