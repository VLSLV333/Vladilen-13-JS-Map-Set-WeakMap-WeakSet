//       WeakSet    =   ключами можуть бути тільки об'єкти (в Set value and keys це одне й теж) і якщо будь-який об'єкт обнуляється, він автоматично прибирається з WeakSet

// const users = [                 
//     {name: "Vlad"},
//     {name: "Julia"},
//     {name: "Anastasia"}
// ]

// const visits = new WeakSet()

// visits.add(users[0]).add(users[1])    //.add(users[2])

// users.splice(1, 1)                  // ми прибрали users[1] з самого array  users і тим самим цей об'єкт автоматично пропав з WeakSet = visits


// console.log(visits.has(users[0]))
// console.log(visits.has(users[1]))