function filterRange(arr, a, b) {
  let emptyArr = [];
  if (a == undefined && b == undefined) {
      let newArr = emptyArr.concat(arr)
      return newArr
  } else {
      let newArr = arr.filter(num => (num >= a && num <= b))
      return newArr
  }
}
