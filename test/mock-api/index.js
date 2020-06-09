module.exports = () => {
  const data = {users: [], books: []};
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({id: i, name: `user${i}`});
  }

  for (let i = 0; i < 1000; i++) {
    data.books.push({id: i, name: `book${i}`});
  }
  return data;
};
