import React from "react";
import EditServerForm from "./edit_server_form";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { deleteMembership } from "../../actions/membership_actions";
class ServerHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openForm: false };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  toggleForm() {
    this.setState({ openForm: this.state.openForm ? false : true });
  }

  findMembership(serverId, userId) {
    for (let key in this.props.memberships) {
      if (
        this.props.memberships[key].serverId === serverId &&
        this.props.memberships[key].userId === userId
      )
        return key;
    }
    return null;
  }

  handleLeave() {
    this.props
      .leave(
        this.findMembership(
          this.props.activeServer.id,
          this.props.currentUser.id
        )
      )
      .then((res) => this.props.history.push("/home"));
  }

  render() {
    let serverTitle;
    if (this.props.activeServer) {
      serverTitle = (
        <div className="server-title-header">
          <h2>{this.props.activeServer.name}</h2>
        </div>
      );
    } else {
      if (this.props.match.path === "/discover") {
        serverTitle = (
          <div className="server-title-header">
            <h2>Explore Servers!</h2>
          </div>
        );
      } else {
        serverTitle = null;
      }
    }
    return (
      <div className="server-title">
        {serverTitle}
        {this.props.activeServer &&
        this.props.currentUser.id === this.props.activeServer.ownerId ? (
          <span
            onClick={this.toggleForm}
            className="server-settings material-icons"
          >
            settings
          </span>
        ) : null}
        {this.props.activeServer &&
        this.props.currentUser.id !== this.props.activeServer.ownerId ? (
          <>
          <span
            onClick={this.handleLeave}
            className="server-settings material-icons"
          >
            exit_to_app
          </span>
          <div className="leave-word">
            Leave
          </div>
          </>
          
        ) : null}
        {this.state.openForm ? (
          <div className="create-channel-container">
            <EditServerForm
              toggleForm={this.toggleForm}
              server={this.props.activeServer}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

const mSTP = (state) => ({
  memberships: state.entities.memberships,
});

const mDTP = (dispatch) => ({
  leave: (id) => dispatch(deleteMembership(id)),
});

export default withRouter(connect(mSTP, mDTP)(ServerHeader));
