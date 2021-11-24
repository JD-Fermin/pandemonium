export const fetchMessages = () => (
    $.ajax({
        method: "GET",
        url: "api/messages"
    })
)

export const fetchMessage = (id) => (
    $.ajax({
        method: "GET",
        url: `api/messages/${id}`
    })
)

export const createMessage = (message) => (
    $.ajax({
        method: "POST",
        url: "api/messages",
        data: {message: message}
    })
)

export const updateMessage = (message) => (
    $.ajax({
        method: "PATCH",
        url: `api/messages/${message.id}`,
        data: {message: message}
    })
)

export const deleteMessage = (id) => (
    $.ajax({
        method: "DELETE",
        url: `api/messages/${id}`
    })
)