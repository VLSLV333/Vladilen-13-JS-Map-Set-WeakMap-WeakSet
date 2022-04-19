// const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6, 7])        // створює об'єкт в якому усі значення передаються унікальними без повторів

// set.add(10).add(20).add(30).add(20)

// console.log(set)

// console.log(set.has(30))

// console.log(set.size)


// console.log(set.delete(1))          // так само повертає true, якщо видалення було успішним

// set.clear()              // повністю очищає set


// console.log(set.values())            // в        set   values and keys are THE SAME!


// console.log(set.keys())


// console.log(set.entries())

// console.log(Object.fromEntries(set.entries()))


// for (let key of set){
//     console.log(key)
// }


//                              ====================================================    практичне застосування

// function uniqValues (array){                      // буде повертати нам унікальне значення з масиву
//         // return [...new Set(array)]
//         return Array.from( new Set(array))
// }                                         

// console.log(uniqValues( [1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 9]))