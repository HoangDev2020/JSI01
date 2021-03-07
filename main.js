
//function logVisibleLightWaves(){
    //console.log(lightWaves); // --> Cannot access 'lightWaves' before initialization
    //const lightWaves = 'Moonlight'
    // console.log(lightWaves);
//}
//console.log(lightWaves); // --> lightWaves is not defined
//logVisibleLightWaves()

// let longestWord 
// let findLongestWord = (word) => {
//     let newWord = word.split(' ')
//     for(let i = 0; i < newWord.length; i++){
//         longestWord = newWord[i]
//         for(let j = 0; j < newWord.length; j++){
//             if(i != j){
//                 if (newWord[i].length < newWord[j].length){
//                     longestWord = newWord[j]
//                 }
//             }
//         }
//     }
//     return longestWord
// }
// console.log(longestCountryName(['vietnam', 'lao', 'chingchong']))


// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     greeting() {
//         return `${this.name} ${this.age}`
//     }
// }

// const hoang = new Person('Hoang', 16)
// console.log(hoang.greeting());


// }

// console.log(findLongestWord('mindx js intensive'));

// let longestName
// let longestCountryName = (name) => {
//     for(let i = 0; i < name.length; i++){
//         longestName = name[i]
//         for(let j = 0; j < name.length; j++){
//             if(i != j){
//                 if(name[i].length < name[j].length){
//                     longestName = name[j]
//                 }
//             }
//         }
//     }
//     return longestName
// class Vietnamese extends Person {
//     constructor(nationality) {
//         super();
//         this.nationality = nationality
//     }

//     xin_chao(){
//         return `${this.name} ${this.age} ${this.nationality}`
//     }
// }
// const vietnam = new Vietnamese('vietnam')
// console.log(vietnam.xin_chao());


class Book {
    constructor(name, price, publishedDay) {
        this.id = uuid.v4()
        this.name = name
        this.price = price
        this.publishedDay = publishedDay
    }
    
}

class BookShelf {
    constructor(name, owner, dateModified){
        this.name = name
        this.owner = owner
        this.date = dateModified
        this.books = []
    }
    add(book) {
        if(book instanceof Book) {
            this.books.push(book)
        }
    }
    updateBook(id, data) {
        for(let book of this.books){
            if(book.id === id){
                book.update(data)
                break
            }
        }
    }
    deleteBook(id) {
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i].id = id){
                this.books.splice(i, 1)
            }
        }
    }
    showBooks(name) {
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i].name = name){
                console.log(this.books[i].name);
            }
        }
    }
}

// Music : id song singer artist
// VpopMusic, US Uk, Kpop, Libraries:owner, id, quantity, Views(tat ca thong tin), ViewDetail(ten cac bai hat)