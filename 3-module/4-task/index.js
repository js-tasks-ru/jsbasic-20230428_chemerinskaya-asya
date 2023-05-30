function showSalary(users, age) {
  let ageFilterUsers = users.filter(item => item.age <= age);
  let newStr = '';
  for (let i = 0; i < (ageFilterUsers.length - 1); i++) {
      newStr += ageFilterUsers[i].name + ', ' + ageFilterUsers[i].balance + '\n'
  }
  newStr += ageFilterUsers[ageFilterUsers.length - 1].name + ', ' + ageFilterUsers[ageFilterUsers.length - 1]
      .balance
  return newStr
}
