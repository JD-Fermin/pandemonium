export const fetchDirectMessages = async (conversationId) => {
    if (!conversationId) return [];
    const res = await $.ajax({
        method: "GET",
        url: `api/conversations/${conversationId}/direct_messages`
    })
    // return Object.values(res)
    return res
}



export const createDirectMessage = async (direct_message) => {
    if (!direct_message) return {}
    const res = await $.ajax({
        method: "POST",
        url: `api/conversations/${direct_message.conversation_id}/direct_messages`,
        data: {direct_message: direct_message}
    })
    return res;
}

export const updateDirectMessage = async (direct_message) => {
    if(!direct_message) return {}
     const res = await $.ajax({
        method: "PATCH",
        url: `api/conversations/${direct_message.conversation_id}/direct_messages/${direct_message.id}`,
        data: {direct_message: direct_message}
    })
    return res;
}

export const deleteDirectMessage = async (direct_message) => {
    if(!direct_message) return {}
    const res = await $.ajax({
        method: "DELETE",
        url: `api/conversations/${direct_message.conversation_id}/direct_messages/${direct_message.id}`
    })
    return res;
}