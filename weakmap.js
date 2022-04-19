// let obj = {name: "weakMap"}

// const arr = [obj]

// obj = null


// console.log(obj)         // will return   =  null, because we have deleted object
// console.log(arr[0])          // will still return    {name: "weakMap"} because obj was saved in   arr


// const map = new WeakMap([               //   в    WeakMap   ключами можуть бути лише об'єкти
//     [obj, "obj data"]
// ])
//  наявні методи:   get, set, delete, has 

// console.log(map.has(obj))

// obj = null               //   обнуляємо сам об'єкт

// console.log(map.has(obj))
// console.log(map.get(obj))               //    value яке зберігалось за ключем  obj  більше недоступне

// console.log(map.size)               // неможливо обрахувати


//                                          ========================================== практичне застосування

// const cache = new WeakMap()


// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now())
//     }
//     return cache.get(user)
// }

// let Juli = {name: "Julia"}
// let Vlad = {name: "Vlad"}
// let Bogdan = {name: "Bodka"}

// cacheUser(Juli)
// cacheUser(Vlad)
// cacheUser(Bogdan)

// Bogdan = null

// console.log(cache.has(Bogdan))
// console.log(cache.has(Vlad))
// console.log(cache.has(Juli))

// console.log(cache)                  // після усіх маніпуляцій ми просто обнулили об'єкт Bogdan.   І він автоматично прибрався з cache = адже це WeakMap . Таким чином в cache з'явилось більше пам'яті, а тому наш застосунок буде працювати швидше. Ми в свою чергу впевнені, що кеш почиститься автоматично, якщо будь-який об'єкт буде обнулений


