import React, { Component } from "react";

export default class Form extends Component {
  state = {
    inputValue: "",
    tag: "",
    password: "",
  };

  // handleChangeName = (e) => {
  //   // console.log("e.target.value :>> ", e.currentTarget.value);
  //   this.setState({
  //     inputValue: e.target.value,
  //   });
  // };
  // handleChangeTag = (e) => {
  //   // console.log("e.target.value :>> ", e.currentTarget.value);
  //   this.setState({
  //     tag: e.target.value,
  //   });
  // };
  // handleChangePassword = (e) => {
  //   // console.log("e.target.value :>> ", e.currentTarget.value);
  //   this.setState({
  //     password: e.target.value,
  //   });
  // };

  handleInputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("this.state :>> ", this.state);
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Ім'я
            <input
              type="text"
              name="inputValue"
              placeholder="введіть своє ім'я"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </label>
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
