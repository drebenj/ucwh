import React, { Component } from "react";
import Header from "../shared/Header";
import * as Styled from "./components";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
    if (this.props.auth.didRegister) {
      this.props.history.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
    if (nextProps.auth.didRegister) {
      this.props.history.push("/login");
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <Styled.Wrapper>
        <Header>Register!</Header>
        <Styled.FormWrapper noValidate onSubmit={this.onSubmit}>
          <Styled.RLabel>First Name:</Styled.RLabel>
          <Styled.RLabel>Last Name:</Styled.RLabel>
          <Styled.RFormInput
            name="firstName"
            onChange={this.onChange}
            value={this.state.firstName}
            type="text"
          />
          <Styled.RFormInput
            name="lastName"
            onChange={this.onChange}
            value={this.state.lastName}
            type="text"
          />
          {errors.firstName || errors.lastName ? (
            <>
              <Styled.ErrorSpan>{errors.firstName}</Styled.ErrorSpan>
              <Styled.ErrorSpan>{errors.lastName}</Styled.ErrorSpan>
            </>
          ) : null}
          <Styled.LongLabel>Username:</Styled.LongLabel>
          <Styled.LongInput
            name="username"
            onChange={this.onChange}
            value={this.state.username}
            type="text"
          />
          {errors.username ? (
            <>
              <Styled.LongErrorSpan>{errors.username}</Styled.LongErrorSpan>
            </>
          ) : null}
          <Styled.LongLabel>Password:</Styled.LongLabel>
          <Styled.LongInput
            onChange={this.onChange}
            value={this.state.password}
            name="password"
            type="password"
          />
          {errors.password ? (
            <>
              <Styled.PassErrorSpan>{errors.password}</Styled.PassErrorSpan>
            </>
          ) : null}
          <Styled.ConfirmPassLabel>Confirm Password: </Styled.ConfirmPassLabel>
          <Styled.LongInput
            onChange={this.onChange}
            value={this.state.password2}
            name="password2"
            type="password"
          />
          {errors.password2 ? (
            <>
              <Styled.PassErrorSpan2>{errors.password2}</Styled.PassErrorSpan2>
            </>
          ) : null}
          <Styled.StyledButton type="submit">Submit</Styled.StyledButton>
        </Styled.FormWrapper>
      </Styled.Wrapper>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(Register);
