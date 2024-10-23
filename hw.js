

// const fizzBuzz = (num) => {
//     if(num % 3 === 0 && num % 5 === 0) return console.log('fizzBuzz')
//         if(num % 3 === 0) return console.log('fizz')
//             if(num % 5 === 0) return console.log('Buzz')

//                 return console.log(num)
// }

// fizzBuzz(30)
// fizzBuzz(33)
// fizzBuzz(20)
// fizzBuzz(7)


// const findItem = (list, item) => {
//     // return list.some(listItem => listItem === item)
//     return Boolean(list.some(listItem => listItem === item))
//     // return list.includes(item)

// }
// // console.log(findItem([1,2,3,4],4))


// const uniqList = (list) => {
//     return list.reduce((acc, curr) => {
//         if(!findItem(acc, curr)) acc.push(curr)
//         return acc;
//     },[])
// }

// console.log(uniqList([1,2,2,2,2,3,4,5,6,6,6]))



// const arr = [1,2,2,2,3,3,4,7]

// const result = arr.filter((item, index) => {
//     if(index === 0) return true

//     for(let i = 0; i < index; i++) {
//         if(arr[i] === item) return false;
//     }

//     return true;
// })

// console.log(result)


///asa e mai usor:

// const result = new Set(arr)
// console.log(Array.from(result))


// const result = (list) => {
//     return list.some((listItem, index) => {
//         return list.some((secondItem, secondIndex)=>{
//             return listItem === secondItem && index !== secondIndex
//         })
//     })
// }



// const result = (list) => {
//    const uniqList = Array.from(new Set(list))
//    return list.length === uniqList.length
// }

// console.log(result([1,2,2,2,2,3]))


// const countVocale = (str) => {
//     let count = 0
//     let vocale = ['a', 'e','i', 'o', 'u']

//     for(let i = 0; i < str.length; i++) {
//    if(vocale.includes(str[i].toLowerCase())) count++
//     }
//     return count
// }
// console.log(countVocale('hello world'))


// const arrStr = ['st11111111r', 'str1', 'str222', 'str11144']

// const result = arrStr.sort((a, b) => a.length - b.length)

// console.log(result)