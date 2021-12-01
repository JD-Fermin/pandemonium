import { ServerApi } from "../util/server_api_util"
export const FETCH_SERVER_LIST = "FETCH_SERVER_LIST"

export const CREATE_SERVER = "CREATE_SERVER"
export const UPDATE_SERVER = "UPDATE_SERVER"
export const DELETE_SERVER = "DELETE_SERVER"
export const FETCH_SERVER = "FETCH_SERVER"

const _fetchServerList = (serverList) => ({
    type: FETCH_SERVER_LIST,
    payload: serverList
})

const _fetchServer = (server) => ({
    type: FETCH_SERVER,
    payload: server
})


const _createServer = (server) => ({
    type: CREATE_SERVER,
    payload: server
})

const _updateServer = (server) => ({
    type: UPDATE_SERVER,
    payload: server
})

const _deleteServer = (serverId) => ({
    type: DELETE_SERVER,
    payload: serverId
})



export const fetchServerList = () => (dispatch) => (
    ServerApi.list().then(serverList => dispatch(_fetchServerList(serverList)))
)

export const fetchServer = (id) => (dispatch) => (
    ServerApi.grab(id).then(server => dispatch(_fetchServer(server)))
)



export const createServer = (server) => dispatch => (
    ServerApi.create(server).then(res => dispatch(_createServer(res)))
)

export const updateServer = (server) => dispatch => (
    ServerApi.update(server).then(res => dispatch(_updateServer(res)))
)

export const deleteServer = (serverId) => dispatch => (
    ServerApi.delete(serverId).then(res => {
        dispatch(_deleteServer(res.id))
    })
)