
export const fetchUser= id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const fetchUsers = (serverId) => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
    data: { server_id: serverId }
  })
);
