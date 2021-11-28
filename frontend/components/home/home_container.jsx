import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUsers } from "../../actions/user_actions";
import Home from "./home";

const mSTP = (state) => ({
    users: Object.values(state.entities.users),
    currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    
    logout: () => dispatch(logout())
})


export default connect(mSTP, mDTP)(Home)