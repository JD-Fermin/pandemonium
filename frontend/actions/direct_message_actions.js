import * as APIUtil from "../util/direct_message_api_util";

export const FETCH_DIRECT_MESSAGES = "FETCH_DIRECT_MESSAGES";
export const CREATE_DIRECT_MESSAGE = "CREATE_DIRECT_MESSAGE";
export const DELETE_DIRECT_MESSAGE = "DELETE_DIRECT_MESSAGE";
export const UPDATE_DIRECT_MESSAGE = "UPDATE_DIRECT_MESSAGE";

const _fetchDirectMessages = (direct_messages) => ({
    type: FETCH_DIRECT_MESSAGES,
    payload: direct_messages
})

const _createDirectMessage = (direct_message) => ({
    type: CREATE_DIRECT_MESSAGE,
    payload: direct_message
})

const _updateDirectMessage = (direct_message) => ({
    type: UPDATE_DIRECT_MESSAGE,
    payload: direct_message
})

const _deleteDirectMessage = (direct_message_id) => ({
    type: DELETE_DIRECT_MESSAGE,
    payload: direct_message_id
})

export const fetchDirectMessages = (conversationId) => dispatch => (
    APIUtil.fetchDirectMessages(conversationId).then(res => dispatch(_fetchDirectMessages(res)))
)

export const createDirectMessage = (direct_message) => dispatch => (
    APIUtil.createDirectMessage(direct_message).then(res => dispatch(_createDirectMessage(res)))
)

export const updateDirectMessage = (direct_message) => dispatch => (
    APIUtil.updateDirectMessage(direct_message).then(res => dispatch(_updateDirectMessage(res)))
)

export const deleteDirectMessage = (direct_message) => dispatch => (
    APIUtil.deleteDirectMessage(direct_message).then(res => dispatch(_deleteDirectMessage(res.id)))
)



