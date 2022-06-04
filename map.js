// const obj = {
//     name: "Vlad",
//     age: 25,
//     job: "programing"
// }

const entries = [
    ["name", "Vlad"],
    ["age", 25],
    ["job", "programing"],
    [true, "Julia"]
]

// const obj2 = {
//     example: "Julia",
//     job: "lovely wife"
// }


// // console.log(Object.entries(obj))                 // метод Object.entries() перетворює об'єкти в array
// // console.log(Object.fromEntries(entries))         //  метод Object.fromEntries() перетворює array в об'єкти

// const map = new Map([     // маючи еррей ентріс (який був створений з об'єкту, а тому це набір ерреїв з парами ключ-велью), ми можемо з нього створити  new Map, що дозволить оперувати цим  ерреєм як об'єктом.
//                             // ключова особливість   Map :  ключами в цьому об'єкті може бути будь-що:  наприклад об'єкти, Nan, booleans, arrays  і тд.

//     ["name", "Vlad"],
//     ["age", 25],
//     ["job", "programing"]
// ])

const map = new Map(entries)

console.log(map)
// // console.log(map.get("job"))


// map
//     .set("newField", 42)
//     .set(obj2, "Value of obj")
//     // .set(NaN, "PROgraming")

// console.log(map.get(NaN))
// console.log(map.get(obj2))

// console.log(map.delete("job"))                  //  returns true if there WAS such key in obj, or false if there WAS no such key
// map.delete("job") 
// console.log(map.has("job"))                      //    returns true if there IS such key in obj, or false if there IS no such key

// console.log(map.size)                           // альтернатива length(не працює) для методу map

// map.clear()                                    // повністю очищає ключі і велью в        map


// console.log(map)

//                      ====================================================================            for of loops for    map

// for (let entry of map.entries()) {           // same as next
//     console.log(entry)
// }

// for (let entry of map) {
//     console.log(entry)
// }


// for (let [key, value] of map) {                 // this way we can straigtly use keys and values of map
//     console.log(key, value)
// }


// for (let val of map.values()){                      // ітерує лише values of keys
//     console.log(val)
// }


// for (let key of map.keys()){                      // ітерує лише keys of map
//     console.log(key)
// }


// map.forEach( (val, key, map) => {               // value, key   = of each iteration  ; map = сам об'єкт мап
//         console.log(val, key)
//         // console.log(map)
// })

//          =====================================    робимо array з map


// const array = [...map]

// const array = Array.from(map)

// const mapObj = Object.fromEntries(map.entries())                //   map.entries()  = перетворює наш об'єкт в array, Object.fromEntries()   =  перетворює наш array(map) в об'єкт

// console.log(mapObj)


//                  =======================================    практичне застосування map


// const users = [                 // хочемо відслідковувати час коли кожен з цих користувачів відвідував сайт чи переглядав статтю
//     {name: "Vlad"},
//     {name: "Julia"},
//     {name: "Anastasia"}
// ]

// const visits = new Map()

// visits                                          // за допомогою нового MAP створюємо змінну яка буде фіксувати час відвідування
//     .set(users[0], new Date())
//     .set(users[1], new Date( new Date().getTime() + 1000 * 60))
//     .set(users[2], new Date( new Date().getTime() + 5000 * 60))

// function lastVisit(user){                       //  ця функція повертає нам час відвідування користувача, якщо ми в неї передамо ключ потрібного користувача
//     return visits.get(user)
// } 

// console.log(lastVisit(users[2]))        

console.log("Vladik ozivai!")