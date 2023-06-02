function getMinMax(str) {
  let result = {
    min: 0,
    max: 0
  };

  let arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i])
  }
  let arrNum = arr.filter(item => !isNaN(item));
  let minNum = arrNum.sort((a, b) => a - b)[0];
  let maxNum = arrNum.sort((a, b) => a - b)[arrNum.length - 1];
  result.max = maxNum;
  result.min = minNum;
  return result
}
