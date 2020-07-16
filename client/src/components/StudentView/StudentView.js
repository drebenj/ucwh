import React, { Component } from "react";
import axios from "axios";
import Button from "../shared/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactLoading from "react-loading";
import * as Styled from "./components";

class StudentView extends Component {
  constructor() {
    super();
    this.state = {
      app: {},
      isAccepted: false,
      loading: true,
      isAdmin: false,
    };
  }
  onClick = (e) => {
    e.preventDefault();
    this.props.history.push("/home");
  };

  acceptStudent = (e) => {
    e.preventDefault();
    axios.put(`/api/users/accept/${this.props.match.params.id}`);
  };
  componentDidMount() {
    axios
      .get(`/api/applications/${this.props.match.params.id}`)
      .then((application) => {
        this.setState({ app: application.data, loading: false });
      });
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then((user) => {
        if (user.data.status === "accepted!") {
          this.setState({ isAccepted: true });
        }
        if (user.data.status === "admin") {
          this.setState({ isAdmin: true });
        }
      })
      .catch((err) => console.log(err));
  }
  render() {
    const data = this.state.app;
    // const answers = this.state.loading
    //   ? null
    //   : this.state.app.map((item) => <P>{item}</P>);
    return (
      <div>
        {this.state.loading ? (
          <Styled.LoadingWrapper>
            <ReactLoading height={100} width={100} color="white" type="spin" />
          </Styled.LoadingWrapper>
        ) : data ? (
          <>
            <Styled.BtnWrapper>
              <Button onClick={this.onClick}>Home</Button>
              {this.props.auth.user.admin && !this.state.isAccepted ? (
                <Button onClick={this.acceptStudent}>Accept</Button>
              ) : null}
            </Styled.BtnWrapper>
            <Styled.Wrapper>
              <Styled.Label>Do you skateboard? (300 word minimum)</Styled.Label>
              <Styled.P>{data.q1}</Styled.P>
              <Styled.Label>
                What is your favorite MR NO song? And why is it Lovely Jean?
              </Styled.Label>
              <Styled.P>{data.q2}</Styled.P>
              <Styled.Label>
                How does one pee with a pad on? (minimum 200 words)
              </Styled.Label>
              <Styled.P>{data.q3}</Styled.P>
              <Styled.Label>
                Sometimes when you and then that thing that happens but you
                don’t but then you decide, “maybe?” and that works out okay
                until the raccoons come to feed. Why?
              </Styled.Label>
              <Styled.P>{data.q4}</Styled.P>
              <Styled.Label>
                “And how?” What is that from? Please tell me it’s been really
                killing me.
              </Styled.Label>
              <Styled.P>{data.q5}</Styled.P>
              <Styled.Label>Question 6?</Styled.Label>
              <Styled.P>{data.q6}</Styled.P>
            </Styled.Wrapper>
          </>
        ) : this.state.isAdmin ? (
          <Styled.CenterWrap>
            <Styled.StyledHeader>Oops!</Styled.StyledHeader>
            <Styled.Label>Looks like this person is an admin!</Styled.Label>
            <Styled.Label>
              That means they are much cooler than you and don't need to apply
            </Styled.Label>
            <Styled.BtnWrapper>
              <Button onClick={this.onClick}>Home</Button>
            </Styled.BtnWrapper>
          </Styled.CenterWrap>
        ) : (
          <Styled.CenterWrap>
            <Styled.StyledHeader>Oops!</Styled.StyledHeader>
            <Styled.Label>
              Looks like this person hasn't applied yet!
            </Styled.Label>
            <Styled.BtnWrapper>
              <Button onClick={this.onClick}>Home</Button>
            </Styled.BtnWrapper>
          </Styled.CenterWrap>
        )}
      </div>
    );
  }
}

StudentView.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(StudentView);
