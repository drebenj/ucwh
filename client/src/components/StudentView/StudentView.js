import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "../shared/Button";
import Header from "../shared/Header";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactLoading from "react-loading";

const P = styled.p`
  font-size: 18px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  line-height: 1.5em;
  padding: 1em;
  color: ${(props) => props.theme.maize};
  text-align: left;
  border: 3px solid ${(props) => props.theme.maize};
  border-radius: 20px;
`;

const Label = styled.h3`
  color: ${(props) => props.theme.saphire};
  margin: 0;
  text-align: center;
  margin-top: 2em;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em;
`;

const CenterWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em;
`;

const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled(Header)`
  margin: 0 auto;
`;

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
          <LoadingWrapper>
            <ReactLoading height={100} width={100} color="white" type="spin" />
          </LoadingWrapper>
        ) : data ? (
          <>
            <BtnWrapper>
              <Button onClick={this.onClick}>Home</Button>
              {this.props.auth.user.admin && !this.state.isAccepted ? (
                <Button onClick={this.acceptStudent}>Accept</Button>
              ) : null}
            </BtnWrapper>
            <Wrapper>
              <Label>Do you skateboard? (300 word minimum)</Label>
              <P>{data.q1}</P>
              <Label>
                What is your favorite MR NO song? And why is it Lovely Jean?
              </Label>
              <P>{data.q2}</P>
              <Label>How does one pee with a pad on? (minimum 200 words)</Label>
              <P>{data.q3}</P>
              <Label>
                Sometimes when you and then that thing that happens but you
                don’t but then you decide, “maybe?” and that works out okay
                until the raccoons come to feed. Why?
              </Label>
              <P>{data.q4}</P>
              <Label>
                “And how?” What is that from? Please tell me it’s been really
                killing me.
              </Label>
              <P>{data.q5}</P>
              <Label>Question 6?</Label>
              <P>{data.q6}</P>
            </Wrapper>
          </>
        ) : this.state.isAdmin ? (
          <CenterWrap>
            <StyledHeader>Oops!</StyledHeader>
            <Label>Looks like this person is an admin!</Label>
            <Label>
              That means they are much cooler than you and don't need to apply
            </Label>
            <BtnWrapper>
              <Button onClick={this.onClick}>Home</Button>
            </BtnWrapper>
          </CenterWrap>
        ) : (
          <CenterWrap>
            <StyledHeader>Oops!</StyledHeader>
            <Label>Looks like this person hasn't applied yet!</Label>
            <BtnWrapper>
              <Button onClick={this.onClick}>Home</Button>
            </BtnWrapper>
          </CenterWrap>
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
