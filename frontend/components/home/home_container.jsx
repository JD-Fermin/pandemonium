import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUsers } from "../../actions/user_actions";
import Home from "./home";
import { withRouter } from "react-router";
import { fetchServer } from "../../actions/server_actions";


const mSTP = (state, ownProps) => ({
    users: Object.values(state.entities.users),
    currentUser: state.session.currentUser,
    activeChannelId: ownProps.match.params.channelId,
    activeServerId: ownProps.match.params.serverId,
    activeServer: state.entities.servers[ownProps.match.params.serverId]
   
})

const mDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchServer: (id) => dispatch(fetchServer(id)),
    logout: () => dispatch(logout())
})


export default withRouter(connect(mSTP, mDTP)(Home))