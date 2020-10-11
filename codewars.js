//#region Split Strings

const { start } = require("repl")

// console.log(solution('abc')); 

// function solution (str) {
//   let result = []

//   for (let i = 0; i < str.length; i += 2) {
//     let el = !str[i + 1] ? str[i] + '_' : str[i] + str[i + 1]
//     result.push(el)
//   }

//   return result
// }

//#endregion

//#region Replace With Alphabet Position

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// function alphabetPosition(text) {
//   let clean = text.toUpperCase().match(/[a-z]/gi)

//   return !clean ? '' : clean.map(e => e.charCodeAt() - 64).join(' ')
// }

//#endregion

//#region Take a Ten Minute Walk
// console.log(isValidWalk(['w']))

// function isValidWalk (walk) {
//   if (walk.length !== 10) {
//     return false
//   } else {
//     let pos = [0, 0]

//     for (let i = 0; i < walk.length; i++) {
//       switch (walk[i]) {
//         case 'n':
//           pos[1]++
//           break
//         case 's':
//           pos[1]--
//           break
//         case 'w':
//           pos[0]--
//           break
//         case 'e':
//           pos[0]++
//           break
//         default:
//           break
//       }
//     }

//     return pos[0] === 0 && pos[1] === 0 ? true : false
//   }
// }

//#endregion

//#region Isograms

// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram("aba"))
// console.log(isIsogram("moOse"))
// console.log(isIsogram(""))

// function isIsogram(str) {
//   let split = str.toLowerCase().split('').sort()
//   for (let i = 0; i < split.length - 1; i++) {
//     if (split[i] === split[i + 1]) return false
//   }
//   return true

//   // return !/(\w).*\1/i.test(str) //keren abis
//   // return new Set(str.toUpperCase()).size == str.length; //Set buat nyari unique value di array
// }

//#endregion

//#region Highest Scoring Word

// console.log(high('man i need a taxi up to ubud'))
// console.log(high('what time are we climbing up the volcano'))
// console.log(high('take me to semynak'))

// function high(x){
//   let words = x.toLowerCase().split(' ')
//   let scores = words.map(word => {
//     let score = 0
//     word.split('').forEach(c => score += c.charCodeAt() - 95)
//     return score
//   })
//   return words[scores.indexOf(Math.max(...scores))]
// }

//#endregion

//#region Sum of Numbers

// console.log(getSum(1, 0) == 1)   // 1 + 0 = 1
// console.log(getSum(1, 2) == 3)   // 1 + 2 = 3
// console.log(getSum(0, 1) == 1)   // 0 + 1 = 1
// console.log(getSum(1, 1) == 1)   // 1 Since both are same
// console.log(getSum(-1, 0) == -1) // -1 + 0 = -1
// console.log(getSum(-1, 2) == 2)  // -1 + 0 + 1 + 2 = 2

// function getSum(a, b){
//   let start = a < b ? a : b
//   let end = a < b ? b : a
//   let result = 0
//   for (let i = start; i <= end; i++) {
//     result += i
//   }
//   return result
// }

//#endregion

//#region Sum of odd numbers

// function rowSumOddNumbers(n) {
//   const start = (n) => n >= 0 ? (2 * n) + start(n - 1) : 1
//   const sum = (n, start) => n > 0 ? start + sum(--n, start + 2) : start
//   return sum(n - 1, start(n - 1))
// }

// console.log(rowSumOddNumbers(42));

//#endregion

//#region Is a number prime?

// function isPrime (n) {
//   if (n <= 3) return n > 1
//   else if (n % 2 === 0 || n % 3 === 0) return false

//   let i = 5

//   while (i ** 2 <= n) {
//     if (n % i === 0 || n % (i + 2) === 0) return false
//     i += 6
//   }

//   return true
// }
//#endregion

//#region Narcissistic Number 

// function narcissistic (value) {
//   1st method
//   const split = value.toString().split('')
//   let holder = 0

//   for (let i = 0; i < split.length; i++) {
//     holder += Math.pow(split[i], split.length)
//   }

//   return holder === value

//   2nd method
//   return value.toString()
//               .split('')
//               .map((e, i, arr) => e ** arr.length)
//               .reduce((accumulator, currentValue) => accumulator + currentValue, 0) === value
// }

// console.log(narcissistic(371))

//#endregion

//#region smallest positive integer in array

// function solution(A) {
//   let smallest = 1
//   let max = Math.max(...A)
//   if (max < smallest) return smallest
//   else {
//     for (let i = 1; i <= max; i++) {
//       if (A.filter((number) => number === i).length === 0) {
//         smallest = i
//         break
//       }
//     }
//     return (smallest !== 1) ? smallest : max + 1
//   }
// }

// console.log(solution([1, 3, 6, 4, 1, 2]));

//#endregion

//#region Product of consecutive Fib numbers

// function productFib(prod) {
//   // 1st way
//   // let arr = [0, 1]
//   // while (arr[arr.length - 2] * arr[arr.length - 1] < prod) {
//   //   arr.push(arr[arr.length - 2] + arr[arr.length - 1])
//   // }

//   // return [arr[arr.length - 2], arr[arr.length - 1], arr[arr.length - 2] * arr[arr.length - 1] === prod]

//   // 2nd way
//   // let [x, y] = [0, 1]
//   // while (x * y < prod) [x, y] = [y, x + y]

//   // return [x, y, x * y === prod]

//   // 3rd way
//   // for (var [x, y] = [0, 1]; x * y < prod; [x, y] = [y, x + y]); // ; is a must
//   // return [x, y, x * y === prod]
// }

// console.log(productFib(4895)) // [55, 89, true]
// console.log(productFib(5895)) // [89, 144, false]
// console.log(productFib(74049690)) // [6765, 10946, true]
// console.log(productFib(84049690)) // [10946, 17711, false]
// console.log(productFib(193864606)) // [10946, 17711, true]
// console.log(productFib(447577)) // [610, 987, false]
// console.log(productFib(602070)) // [610, 987, true]

//#endregion

//#region Sum of Interval (NOT SOLVE YET)

// function sumIntervals(intervals){
//   let ranges = [intervals[0][0], intervals[0][1]]
//   for (let i = 1; i < intervals.length; i++) {
//     for (let j = 0; j < ranges.length; j++) {
//       if (intervals[i][0] >= ranges[j][0] && intervals[i][0] <= ranges[j][1]) {

//       }
//     }
//   }


// }

// rule: Overlapping intervals should only be counted once
// console.log(sumIntervals( [
//   [1,2],
//   [6, 10],
//   [11, 15]
// ] )) // => 9

// console.log(sumIntervals( [
//   [1,4],
//   [7, 10],
//   [3, 5]
// ] )) // => 7

// console.log(sumIntervals( [
//   [1, 5], 4
//   [10, 20], 10
//   [1, 6], 1
//   [16, 19], 0
//   [5, 11] 5
// ] )) // => 19

//#endregion

//#region ROT13

// function rot13(message){
//   return message.split('')
//                 .map(char => !(/[a-z]/gi.test(char)) ? char : String.fromCharCode(char.toLowerCase() < 'n' ? char.charCodeAt() + 13 : char.charCodeAt() - 13))
//                 .join('')
// }

// console.log(rot13('I Love Ruby'));

//#endregion

//#region Twice Linear https://www.codewars.com/kata/5672682212c8ecf83e000050/train/javascript (UNSOLVED)

// function dblLinear(n) {

// }

// console.log(dblLinear(10));

//#endregion

//#region The Hashtag Generator https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// function generateHashtag (str) {
//   if (/[a-z]/gi.test(str)) {
//     let process = '#' + str.replace(/\b[a-z]/gi, (c) => c.toUpperCase()).replace(/\s/g, '')
//     return process.length > 140 ? false : process
//   } else {
//     return false
//   }
// }

// console.log(generateHashtag("")) // Expected an empty string to return false
// console.log(generateHashtag(" ".repeat(200))) // Still an empty string
// console.log(generateHashtag("Do We have A Hashtag")) // #DoWeHaveAHashtag
// console.log(generateHashtag("Codewars")) // #Codewars
// console.log(generateHashtag("Codewars Is Nice")) // #CodewarsIsNice
// console.log(generateHashtag("Codewars is nice")) // #CodewarsIsNice"
// console.log(generateHashtag("code" + " ".repeat(140) + "wars")) //#CodeWars
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")) // false
// console.log(generateHashtag("a".repeat(139))) // "#A" + "a".repeat(138), "Should work"
// console.log(generateHashtag("a".repeat(140))) // false, "Too long"

//#endregion

//#region Local Maxima https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript

// function pickPeaks(arr){
//   let pos = []
//   let flat = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i - 1] < arr[i]) {
//       if (arr[i] > arr[i + 1]) pos.push(i)
//       else if (arr[i] === arr[i + 1]) flat = i
//     }

//     if (flat !== 0 && arr[flat] > arr[i + 1]) {
//       pos.push(flat)
//       flat = 0
//     }

//     if (arr[flat] < arr[i + 1]) flat = 0
//   }

//   return { pos, peaks: pos.map(n => arr[n]) }
// }

// console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]), {pos:[3,7], peaks:[6,3]});
// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]), {pos:[3,7], peaks:[6,3]});
// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});
// console.log(pickPeaks([2,1,3,1,2,2,2,2,1]), {pos:[2,4], peaks:[3,2]});
// console.log(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
// console.log(pickPeaks([2,1,3,2,2,2,2,5,6]), {pos:[2], peaks:[3]});
// console.log(pickPeaks([2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]});
// console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]), {pos:[2,7,14,20], peaks:[5,6,5,5]});
// console.log(pickPeaks([]),{pos:[],peaks:[]});
// console.log(pickPeaks([1,1,1,1]),{pos:[],peaks:[]});
//#endregion

//#region Memoized Fibonacci

// function fibonacci(n) {
//   let cache = {}

//   function populate (n) {
//     if (n <= 1) return n
//     return cache[n] = cache[n] || populate(n - 1) + populate(n - 2)
//   }

//   return populate(n)
// }

// console.log(fibonacci(70), 190392490709135);
// console.log(fibonacci(60), 1548008755920);
// console.log(fibonacci(50), 12586269025);

//#endregion

//#region Range Extraction https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

// function solution(list){
// 	let result = []
// 	let cache = []
// 	list.forEach((n, i, arr) => {
// 		cache.push(n)
// 		if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
// 			if (cache.length === 0 ) result.push(n)
// 			else cache.length > 2 ? result.push(cache[0] + '-' + cache[cache.length - 1]) : result = result.concat(cache)
// 			cache = []
// 		}
// 	})
// 	return result.join(',')
// }

// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]) == "-6,-3-1,3-5,7-11,14,15,17-20")

//#endregion

//#region Anagram https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

// function anagrams(word, words) {
// 	// let result = []
// 	// words.forEach(w => {
// 	// 	if (word.split('').sort().join('') === w.split('').sort().join('')) {
// 	// 		result.push(w)
// 	// 	}
// 	// })
// 	// return result

// 	// return words.map(w => word.split('').sort().join('') === w.split('').sort().join('') ? w : null).filter(Boolean)

// 	return words.filter(w => word.split('').sort().join('') === w.split('').sort().join(''))
// }

// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))

//#endregion

//#region My smallest code interpreter (aka Brainf**k) https://www.codewars.com/kata/526156943dfe7ce06200063e/train/javascript (UNSOLVED)

// function brainLuck(code, input) {
// 	let pointer = 0

// 	return output;
// }

// console.log(brainLuck(',+[-.,+]', 'Codewars' + String.fromCharCode(255)), 'Codewars')

//#endregion

//#region Catching Car Mileage Numbers https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript

// function isInteresting(number, awesomePhrases) {
// 	const zeroCheck = (n) => +n.substr(1, n.length - 1) === 0
// 	const sameCheck = (n) => n.split('').every(e => e === n[0])
// 	const palindromeCheck = (n) => n.split('').reverse().join('') === n
// 	const awesomeCheck = (n) => awesomePhrases.some(e => e === +n)
// 	const incrementCheck = (n) => {
// 		let increment = '1234567890'
// 		let start = increment.split('').indexOf(n[0])
// 		return increment.substr(start, n.length) === n
// 	}
// 	const decrementCheck = (n) => {
// 		let decrement = '9876543210'
// 		let start = decrement.split('').indexOf(n[0])
// 		return decrement.substr(start, n.length) === n
// 	}

// 	if (number === 98 || number === 99) return 1 // exception
// 	if (number > 99 && number < 10 ** 9) {
// 		for (let i = 0; i < 3; i++) {
// 			let n = (number + i).toString()
// 			if (zeroCheck(n) || sameCheck(n) || incrementCheck(n) || decrementCheck(n) || palindromeCheck(n) || awesomeCheck(n)) {
// 				return i === 0 ? 2 : 1
// 			} 
// 		}
// 	}
	
// 	return 0
// }

// console.log(isInteresting(100, []),     1);
// console.log(isInteresting(3, [1337, 256]),     0);
// console.log(isInteresting(1336, [1337, 256]),  1);
// console.log(isInteresting(1337, [1337, 256]),  2);
// console.log(isInteresting(11208, [1337, 256]), 0);
// console.log(isInteresting(11209, [1337, 256]), 1);
// console.log(isInteresting(11211, [1337, 256]), 2);

//#endregion

//#region Next bigger number with the same digits https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
//credit: https://dev.to/kopiro/kata-resolution-next-bigger-number-with-the-same-digits-41mj

// function nextBigger(n){
// 	if (n < 10) return -1
	
// 	let str = n.toString()
// 	let pivot = -1
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		if (str[i] > str[i - 1]) {
// 			pivot = i - 1
// 			break
// 		}
// 	}

// 	if (pivot === -1) return -1

// 	let right = str.substr(pivot + 1, str.length).split('')

// 	let next = -1
// 	right.forEach((d, i) => {
// 		if (d > str[pivot]) {
// 			if (next === -1 || d < right[next]) next = i
// 		}
// 	})

// 	if (right[next] === -1) return -1

// 	right[next] = str[pivot]
// 	right.sort((a, b) => a - b)

// 	let left = str.substring(0, pivot)

// 	return +(left + str[pivot + next + 1] + right.join(''))
// }

// function nextBigger (n) {
// 	const generate = (input) => +input.toString().split('').sort((a, b) => b - a).join('')
// 	let next = generate(n)

// 	for (let i = n + 1; i <= next; i++) {
// 		if (generate(i) === next) return i
// 	}

// 	return -1
// }


// console.log(nextBigger(-1))
// console.log(nextBigger(12),21)
// console.log(nextBigger(513),531)
// console.log(nextBigger(2017),2071)
// console.log(nextBigger(414),441)
// console.log(nextBigger(144),414)
// console.log(nextBigger(111))
// console.log(nextBigger(9876543210))

//#endregion

//#region The observed PIN https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

// function getPINs(observed) {
//   const cache = {
//     1: ['1', '2', '4'],
//     2: ['1', '2', '3', '5'],
//     3: ['2', '3', '6'],
//     4: ['1', '4', '5', '7'],
//     5: ['2', '4', '5', '6', '8'],
//     6: ['3', '5', '6', '9'],
//     7: ['4', '7', '8'],
//     8: ['5', '7', '8', '9', '0'],
//     9: ['6', '8', '9'],
//     0: ['8', '0']
//   }

//   let split = observed.toString().split('')
//   let result = []

//   const combine = (arr, placeholder = [], i = 0) => {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (i === arr.length - 1) {
//         result.push(placeholder.join('') + arr[i][j])
//       } else {
//         placeholder[i] = arr[i][j]
//         combine(arr, placeholder, i + 1)
//       }
//     }
//   }

//   combine(split.map(d => cache[d]))

//   return result.sort()
// }

// console.log(getPINs(8).sort(), ["5", "7", "8", "9", "0"].sort())
// console.log(getPINs(11).sort(), ["11", "22", "44", "12", "21", "14", "41", "24", "42"].sort())
// console.log(getPINs(369).sort(), ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"].sort())

//#endregion

//#region Sudoku Solver https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript



//#endregion