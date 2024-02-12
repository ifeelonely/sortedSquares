// sorted squares O(n) time complexity
var sortedSquares = function (nums) {
  const squaredNums = new Array(nums.length);
  let leftIndx = 0;
  let rightIndx = nums.length - 1;
  let squaredNumsIndx = nums.length - 1;

  while (leftIndx <= rightIndx) {
    const leftSquaredNum = nums[leftIndx] * nums[leftIndx];
    const rightSquaredNum = nums[rightIndx] * nums[rightIndx];

    if (leftSquaredNum <= rightSquaredNum) {
      squaredNums[squaredNumsIndx] = rightSquaredNum;
      rightIndx--;
    } else {
      squaredNums[squaredNumsIndx] = leftSquaredNum;
      leftIndx++;
    }
    squaredNumsIndx--;
  }
  return squaredNums;
};
console.log('O(n) time complexity: ', sortedSquares([-3, 2, 4]));

// sorted squares O(n * log(n)) time complexity
const sortedSquares1 = (nums) =>
  nums.map((num) => num ** 2).sort((a, b) => a - b);

console.log('O(n * log(n)) time complexity: ', sortedSquares1([-3, 2, 4]));
