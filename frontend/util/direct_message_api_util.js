export const fetchDirectMessages = async (conversationId) => {
    if (!conversationId) return [];
    const res = await $.ajax({
        method: "GET",
        url: `api/conversations/${conversationId}/direct_messages`
    })
    return Object.values(res)
}



export const createDirectMessage = (direct_message) => (
    $.ajax({
        method: "POST",
        url: `api/conversations/${direct_message.conversation_id}/direct_messages`,
        data: {direct_message: direct_message}
    })
)

export const updateDirectMessage = (direct_message) => (
    $.ajax({
        method: "PATCH",
        url: `api/conversations/${direct_message.conversation_id}/direct_messages/${direct_message.id}`,
        data: {direct_message: direct_message}
    })
)

export const deleteDirectMessage = (direct_message) => (
    $.ajax({
        method: "DELETE",
        url: `api/conversations/${direct_message.conversation_id}/direct_messages/${direct_message.id}`
    })
)