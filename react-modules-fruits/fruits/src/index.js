/* eslint-disable no-unused-vars */
import { choice, remove } from './helpers'
import foods from './foods'

let fruit = choice(foods)
console.log(fruit)
console.log(`I'd like one ${fruit}, please`)
console.log(`Here you go: ${fruit}`)
console.log(`Delicious! May I have another?`)
remove(foods, fruit)
console.log(`I'm sorry, we're all out. We have ${foods} left.`)
