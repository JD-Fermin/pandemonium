
export const fetchUser = async (id) => {
  if (!id) return {}
  const res = await $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
  return res;
};

export const fetchUsers = async (serverId) => {
  const res = await $.ajax({
    method: 'GET',
    url: '/api/users',
    data: { server_id: serverId }
  })
  return res;
};
