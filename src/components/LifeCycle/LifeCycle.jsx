import { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    // console.clear();
    // console.log("consructor");
    super();
    this.state = {
      value: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log("nextProps", nextProps);
    // console.log("prevState", prevState);
    // console.log("get Derived State From Props");
    return null;
    // return { val: nextProps .value};
  }

  componentDidMount() {
    // console.log("component Did Mount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("component Did Update");
    // console.log("prevProps");
    // console.log("prevState");
    // console.log("snapshot");
  }

  handleBtn = () => {
    this.setState((prewState) => ({
      value: prewState.value + 1,
    }));
    // console.log("action");
  };
  render() {
    // console.log("render-1");
    return (
      <>
        {/* {console.log("render-2")} */}
        <button type="button" onClick={this.handleBtn}>
          Some Push
        </button>
        <div>{this.state.value}</div>
      </>
    );
  }
}

export default LifeCycle;
