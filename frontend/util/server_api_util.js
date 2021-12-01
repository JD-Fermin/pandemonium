export const ServerApi = {
    list: () => (
        $.ajax({
            method: 'GET',
            url: 'api/servers'
        }) 
    ),

    grab: async (id) => {
        if (!id) return {};
        const res = await $.ajax({
            method: 'GET',
            url: `api/servers/${id}`
        }) 

        return res;
    },
    
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