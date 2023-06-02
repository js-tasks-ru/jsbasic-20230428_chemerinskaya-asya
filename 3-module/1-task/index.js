function namify(users) {
  let newArr = [];
  for (let i = 0; i < users.length; i++) {
      newArr.push(users[i].name)
  }
  return newArr
}
