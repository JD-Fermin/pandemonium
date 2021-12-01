export const ServerApi = {
    list: () => (
        $.ajax({
            method: 'GET',
            url: 'api/servers'
        }) 
    ),

    grab: (id) => (
        $.ajax({
            method: 'GET',
            url: `api/servers/${id}`
        }) 
    ),
    
    create: (server) => (
        $.ajax({
            method: 'POST',
            url: 'api/servers',
            data: { server }
        })
    ),

    update: (server) => (
        $.ajax({
            method: 'PATCH',
            url: `api/servers/${server.id}`,
            data: { server }
        })
    ),
    
    delete: (id) => (
        $.ajax({
            method: 'DELETE',
            url: `api/servers/${id}`,
        })
    )
}