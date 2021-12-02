export const createMembership = (membership) => (
    $.ajax({
        method: 'post',
        url: 'api/memberships',
        data: { membership }
    })
)