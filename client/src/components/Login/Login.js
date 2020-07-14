import React, { Component } from "react";
import Header from "../shared/Header";
import * as Styled from "./components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <Styled.Wrapper>
        <Header>Login!</Header>
        <Styled.Form noValidate onSubmit={this.onSubmit}>
          <Styled.Label>Username:</Styled.Label>
          <Styled.FormInput
            onChange={this.onChange}
            value={this.state.username}
            type="text"
            name="username"
          />
          <Styled.ErrorSpan>
            {errors.username}
            {errors.usernamenotfound}
          </Styled.ErrorSpan>
          <Styled.Label>Password:</Styled.Label>
          <Styled.FormInput
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
          />
          <Styled.ErrorSpan>
            {errors.password}
            {errors.passwordincorrect}
          </Styled.ErrorSpan>
          <Styled.StyledButton type="submit" name="Submit">
            Submit
          </Styled.StyledButton>
        </Styled.Form>
      </Styled.Wrapper>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
