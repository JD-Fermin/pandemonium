import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUsers } from "../../actions/user_actions";
import Home from "./home";
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => ({
    users: Object.values(state.entities.users),
    currentUser: state.session.currentUser,
    activeChannelId: ownProps.match.params.channelId
})

const mDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    
    logout: () => dispatch(logout())
})


export default withRouter(connect(mSTP, mDTP)(Home))