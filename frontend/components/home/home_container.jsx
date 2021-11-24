import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchMessages } from "../../actions/message_actions";
import Home from "./home";

const mSTP = (state) => ({
    users: Object.values(state.entities.users),
    messages: Object.values(state.entities.messages),
    currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchMessages: () => dispatch(fetchMessages()),
    logout: () => dispatch(logout())
})


export default connect(mSTP, mDTP)(Home)