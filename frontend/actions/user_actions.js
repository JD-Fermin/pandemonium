import * as APIUtil from "../util/user_api_util"

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const receiveUsers = (users) => {

    return {
        type: RECEIVE_USERS,
        users
    }
    
}

export const fetchUser = (id) => (dispatch) => (
    APIUtil.fetchUser(id).then(res => dispatch(receiveUser(res)))
)

export const fetchUsers = () => dispatch => {

    return APIUtil.fetchUsers().then(res => dispatch(receiveUsers(res)))
}