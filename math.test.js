const math = require('./math.js')
const { add, minus, multi } = math

test('测试加法', () => {
  expect(add(3, 7)).toBe(10)
})
test('测试减法', () => {
  expect(minus(3, 3)).toBe(0)
})
test('测试乘法', () => {
  expect(multi(3, 7)).toBe(21)
})
