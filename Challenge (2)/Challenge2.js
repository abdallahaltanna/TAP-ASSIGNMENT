function majority(nums) {
  let count = 0
  let candidate = null

  for (let num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += num === candidate ? 1 : -1
  }

  return candidate
}

const ex1 = [2, 2, 1, 1, 1, 2, 2]
const ex2 = [3, 2, 3]

const theMajority1 = majority(ex1)
const theMajority2 = majority(ex2)

console.log(theMajority1)
console.log(theMajority2)
