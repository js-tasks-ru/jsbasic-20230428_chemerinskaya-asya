function checkSpam(str) {
  let newStr = str.toLowerCase(),
      foundStavki = newStr.indexOf('1xbet'),
      result = isFound(foundStavki);
  if (!(result)) {
      foundStavki = newStr.indexOf('xxx');
      result = isFound(foundStavki)
  }
return result
}

function isFound (index) {
  if (index == -1) {
      return false
  } else {
      return true
  }
}
