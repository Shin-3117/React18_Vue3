// let i = 0
// while (i<6) {
//   console.log(i)
// 	i++
// }

// for (let i = 0; i<6; i++){
//   console.log(i)
// }
const i = {
    1: '일',
    2: '이',
    3: '삼',
    4: '사'
}
for (let key in i){
    console.log(key)
    console.log(i[key])
}

const numbers = [0, 1, 2, 3]
for (const number of numbers){
    console.log(number)
}