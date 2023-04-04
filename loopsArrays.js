// Activity 1
let favFilms = ["Film1", "Film2", "Film3", "Film4", "Film5"]
favFilms.push("Film6", "Film7")
for (let index = 0; index < favFilms.length; index++) {
    console.log(favFilms[index])
    
}

// Activity 2
let ranNum = [ Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50)]
for (let index = 0; index < ranNum.length; index++) {
    console.log(ranNum[index])
}

// Activity 3
const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let index = zeroToNine.length; index >= 0; index = (index-1)) {
    console.log(zeroToNine[index]); 
}