import React from "react";
import { connect } from "react-redux";

class UserBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-ops">
        <div className="user-prof">
          <span className="material-icons">account_circle</span>
          <h3>{this.props.currentUser.username}</h3>
        </div>

        <span
          className="server-settings material-icons"
          onClick={this.props.logout}
        >
          logout
        </span>
        <div className="leave-word logout">Logout</div>
      </div>
    );
  }
}

const mSTP = (state) => ({
    currentUser: state.session.currentUser
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(UserBar);
