import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Styled from "./components";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { getRoster } from "../../redux/actions/contentActions";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      roster: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.props.getRoster(this.props.auth.user);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content.roster) {
      this.setState({ roster: nextProps.content.roster, loading: false });
    }
  }

  logOut = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  };

  viewStudent = (id) => {
    this.props.history.push(`/student/${id}`);
  };

  render() {
    const { user } = this.props.auth;
    const Roster = !this.state.loading
      ? this.state.roster.map((student) => {
          return (
            <Styled.RCard
              key={student._id}
              onClick={() => this.viewStudent(student._id)}
              admin={student.status === "admin"}
              accepted={student.status === "accepted!"}
            >
              {student.firstName} {student.lastName}
            </Styled.RCard>
          );
        })
      : null;
    return (
      <div>
        <Styled.HeadWrapper>
          <Styled.LargeLabel>
            Welcome &nbsp;{" "}
            <Styled.SecondaryLabel>{user.firstName}!</Styled.SecondaryLabel>
          </Styled.LargeLabel>
          <Styled.LargeLabel>
            Status: &nbsp;{" "}
            <Styled.SecondaryLabel>{user.status}</Styled.SecondaryLabel>
          </Styled.LargeLabel>
        </Styled.HeadWrapper>
        <Styled.MainWrapper>
          {this.state.loading ? (
            <Styled.SectionWrap>
              <ReactLoading
                type="spin"
                color="white"
                height={100}
                width={100}
              />
            </Styled.SectionWrap>
          ) : (
            <Styled.SectionWrap>
              <Styled.RosterWrap>{Roster}</Styled.RosterWrap>
            </Styled.SectionWrap>
          )}
          <Styled.BottomWrap>
            {user.status === "applicant" ? (
              <Styled.StyledButton
                onClick={() => this.props.history.push("/apply")}
              >
                Apply
              </Styled.StyledButton>
            ) : null}
            <Styled.SecondaryLabel style={{ color: "#255f85" }}>
              Click on a person to see their application!
            </Styled.SecondaryLabel>
            <Styled.StyledButton onClick={this.logOut}>
              Sign Out
            </Styled.StyledButton>
          </Styled.BottomWrap>
        </Styled.MainWrapper>
      </div>
    );
  }
}

Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  content: state.content,
});
export default connect(mapStateToProps, { logoutUser, getRoster })(Home);
