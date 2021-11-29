import * as APIUtil from "../util/message_api_util"

// export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
// export const REMOVE_MESSAGE = "REMOVE_MESSAGE"

// const receiveMessage = (message) => ({
//     type: RECEIVE_MESSAGE,
//     message
// })

const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
})

// const removeMessage = (messageId) => ({
//     type: REMOVE_MESSAGE,
//     messageId
// })

export const fetchMessages = (channelId) => dispatch => (
    APIUtil.fetchMessages(channelId ).then(res => dispatch(receiveMessages(res)))
)

export const createMessage = (message) => dispatch => (
    APIUtil.createMessage(message) //.then(res => dispatch(receiveMessage(res)))
)

export const updateMessage = (message) => dispatch => (
    APIUtil.updateMessage(message) //.then(res => dispatch(receiveMessage(res)))
)

export const deleteMessage = (message) => dispatch => (
    APIUtil.deleteMessage(message) // .then(res => dispatch(removeMessage(res)))
)