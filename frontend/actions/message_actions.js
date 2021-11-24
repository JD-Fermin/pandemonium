import * as APIUtil from "../util/message_api_util"

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
})

export const removeMessage = (messageId) => ({
    type: REMOVE_MESSAGE,
    messageId
})

export const fetchMessages = () => dispatch => (
    APIUtil.fetchMessages().then(res => dispatch(receiveMessages(res)))
)

export const fetchMessage = (id) => dispatch => (
    APIUtil.fetchMessage(id).then(res => dispatch(receiveMessage(res)))
)

export const createMessage = (message) => dispatch => (
    APIUtil.createMessage(message).then(res => dispatch(receiveMessage(res)))
)

export const updateMessage = (message) => dispatch => (
    APIUtil.updateMessage(message).then(res => dispatch(receiveMessage(res)))
)

export const deleteMessage = (id) => dispatch => (
    APIUtil.deleteMessage(id).then(res => dispatch(removeMessage(res.id)))
)