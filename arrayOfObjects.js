let users = [ { id: 1, name: 'Lavanya', course: 'Node.js', age: 20}, 
    { id: 2, name: 'Venkat', course: 'React' , age: 21}, 
    {id: 3, name: 'Shiva', course: 'Python', age: 22}, 
    {id: 4, name: 'Teja', course: 'React', age: 23}];
const usersCopy = JSON.parse(JSON.stringify(users))
usersCopy.forEach((item)=> {
    item.course = 'Node.js'
    return item
})
console.log('Users: ', JSON.stringify(users), 'UsersCopy', JSON.stringify(usersCopy))


const usersMap = users.map((item) => {
    //item.course = 'Node.js'
    //return item
    return item.name
})
console.log('\nUsers: ', JSON.stringify(users), '\nUsersMap: ', JSON.stringify(usersMap))

const filteredUsers = users.filter((item) =>  item.course === 'React')
console.log('\nUsers: ', JSON.stringify(users), '\nFilteredUsers: ', JSON.stringify(filteredUsers))

const findUser = users.find(user => user.id === 1)
console.log('\nFind User: ', JSON.stringify(findUser))

const findIndex = users.findIndex(item => item.id ===3)
console.log("\nIndex Found: ", JSON.stringify(findIndex))

users.forEach((item, index) => {
    console.log('Item.name: ', item.name)
    console.log('index', index)
})


let usersConcat = users.concat(usersMap)
console.log('\nUsers: ', users)
console.log('\nUsersConcat', usersConcat)

let usersSpread = [...users, ...usersMap]
console.log('\nUsers: ', users, '\nUsersMap', usersMap, 'usersMap', usersSpread)


const inputs = [2,5,1,9]
const maxValue = inputs.reduce((accumulator, currentValue) => {
    return currentValue>accumulator ? currentValue : accumulator
}, inputs[0])
console.log('maxValue: ', maxValue)

const totalAge = users.reduce((total, item) => {
    return total+item.age
}, 0)
console.log('totalAge: ', totalAge)

usersCopy.sort((item1, item2) => item1.Age - item2.Age)
console.log('usersCopy: ', usersCopy)