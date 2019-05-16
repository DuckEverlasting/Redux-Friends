import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {
        username: "",
        password: ""
      }
    };
  }

  handleChange = ev => {
    this.setState({
      input: {
        ...this.state.input,
        [ev.target.name]: ev.target.value
      }
    });
  };

  handleClick = ev => {
    ev.preventDefault();
    if (!this.state.input.username || !this.state.input.password) {return};
    this.props.login(this.state.input)
      .then(() => {
        this.props.history.push("./protected")
      })
    this.setState({
      input: { username: "", password: "" }
    })
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            name="username"
            value={this.state.input.username}
            onChange={this.handleChange}
            placeholder="name"
          />
          <input
            type="password"
            name="password"
            value={this.state.input.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button onClick={this.handleClick}>submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
