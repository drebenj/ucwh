import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../shared/Header";
import Button from "../shared/Button";
import { Form, TextArea, Label, Error } from "./components";
import axios from "axios";
import { loginUser, logoutUser } from "../../redux/actions/authActions";
import { FormInput } from "../Login/components";
import bcrypt from "bcryptjs";

class ApplyPage extends Component {
  constructor() {
    super();
    this.state = {
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.user.status !== "applicant") {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
      console.log("HERE");
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      q1: this.state.q1,
      q2: this.state.q2,
      q3: this.state.q3,
      q4: this.state.q4,
      q5: this.state.q5,
      q6: this.state.q6,
    };
    bcrypt
      .compare(this.state.password, this.props.auth.user.password)
      .then((isMatch) => {
        if (isMatch) {
          axios
            .post("/api/applications", data)
            .then((val) => {
              axios
                .put(`/api/users/${this.props.auth.user.id}`)
                .then((user) => {
                  const creds = {
                    username: user.data.username,
                    password: this.state.password,
                  };
                  this.props.logoutUser();
                  this.props.loginUser(creds);
                })
                .catch((err) => this.setState({ errors: err.response.data }));
            })
            .catch((err) => this.setState({ errors: err.response.data }));
        } else {
          this.setState({ errors: { password: "Password is incorrect" } });
        }
      });
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header style={{ marginTop: "0.5em" }}>Apply Here!</Header>
        <Form noValidate onSubmit={this.onSubmit}>
          <Label>Do you skateboard? (300 word minimum)</Label>
          <TextArea
            value={this.state.q1}
            onChange={this.onChange}
            name="q1"
            id="q1"
          ></TextArea>
          <Error>{this.state.errors.q1}</Error>
          <Label>
            What is your favorite MR NO song? And why is it Lovely Jean?
          </Label>
          <TextArea name="q2" id="q2" onChange={this.onChange}></TextArea>
          <Error>{this.state.errors.q2}</Error>
          <Label>How does one pee with a pad on? (minimum 200 words)</Label>
          <TextArea name="q3" id="q3" onChange={this.onChange}></TextArea>
          <Error>{this.state.errors.q3}</Error>
          <Label>
            Sometimes when you and then that thing that happens but you don’t
            but then you decide, “maybe?” and that works out okay until the
            raccoons come to feed. Why?
          </Label>
          <TextArea name="q4" id="q4" onChange={this.onChange}></TextArea>
          <Error>{this.state.errors.q4}</Error>
          <Label>
            “And how?” What is that from? Please tell me it’s been really
            killing me.
          </Label>
          <TextArea name="q5" id="q5" onChange={this.onChange}></TextArea>
          <Error>{this.state.errors.q5}</Error>
          <Label>Question 6?</Label>
          <TextArea name="q6" id="q6" onChange={this.onChange}></TextArea>
          <Error>{this.state.errors.q6}</Error>
          <Label>Enter Your Password:</Label>
          <FormInput
            onChange={this.onChange}
            name="password"
            id="password"
            type="password"
            style={{ width: "50%" }}
          ></FormInput>
          <Error>{this.state.errors.password}</Error>
          <Button type="submit" style={{ marginTop: "1em", width: "90%" }}>
            Submit!
          </Button>
        </Form>
      </div>
    );
  }
}

ApplyPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser, logoutUser })(ApplyPage);
