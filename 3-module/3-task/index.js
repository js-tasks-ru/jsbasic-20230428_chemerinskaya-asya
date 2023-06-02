function camelize(str) {
  let strArr = str.split('-')
  for (let i = 1; i < strArr.length; i++) {
      if (strArr[i].length != 0 || strArr[0]) {
          strArr[i] = strArr[i].at(0).toUpperCase() + strArr[i].slice(1);
      }
  }
  let newStr = strArr.join('')
  return newStr
}
