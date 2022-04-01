const config = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

module.exports = config;