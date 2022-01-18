import React from "react";
import { fetchUsers } from "../../actions/user_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createServer } from "../../actions/server_actions";
import { createMembership } from "../../actions/membership_actions";
class UserList extends React.Component {
  componentDidMount() {
    this.props.match.params.serverId
      ? this.props.fetchUsers(this.props.match.params.serverId)
      : this.props.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.fetchUsers(this.props.match.params.serverId);
    }
  }

  render() {
    if (!this.props.activeServer) return null;
    return (
      <div className="sidebar">
        <ul className="users-list">
          <h3>Users</h3>
          {this.props.users.map((user) => (
            <li
              key={this.props.activeServer.id + user.username}
            >
              {this.props.activeServer &&
              user.id === this.props.activeServer.ownerId ? (
                <div className="owner">
                  {user.username}
                  <img
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/54/crown_1f451.png"
                    className="owner-crown"
                  />
                </div>
              ) : (
                user.username
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mSTP = (state) => ({
  users: Object.values(state.entities.users),
  currentUser: state.session.currentUser
});

const mDTP = (dispatch) => ({
  fetchUsers: (id) => dispatch(fetchUsers(id)),
});

export default withRouter(connect(mSTP, mDTP)(UserList));
