import { addDivToBody } from './dom'
import $ from 'jquery'

test('test addDivToBody', () => {
  addDivToBody()
  expect($('body').find('div').length).toBe(1)
})
