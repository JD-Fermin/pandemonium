import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Home from "./home";
import { withRouter } from "react-router";
import { fetchServer } from "../../actions/server_actions";
import { fetchUsers } from "../../actions/user_actions";


const mSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    activeChannelId: ownProps.match.params.channelId,
    // activeServerId: ownProps.match.params.serverId,
    activeServer: state.entities.servers[ownProps.match.params.serverId],
    users: state.entities.users
   
})

const mDTP = (dispatch) => ({
    fetchServer: (id) => dispatch(fetchServer(id)),
    fetchUsers: (id) => dispatch(fetchUsers(id)),
    logout: () => dispatch(logout())
})


export default withRouter(connect(mSTP, mDTP)(Home))