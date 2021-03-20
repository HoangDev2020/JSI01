
class MyBook extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div id="nav"><h1>MyBook</h1>
                            </div>
                            <div id="delete">
                                <input type="text" id="deleteTerm" placeholder="Enter name or id to delete">
                                <button id="btn_delete">Delete</button>
                            </div>
                            
                          <div id="container"></div>
                          <hr>
                          <footer> <h1>DESCRIPTIONS</h1>
                                   <p>There is no descriptions</p>
                            </footer> `
    }
}
customElements.define('my-book', MyBook)
// get the element by DOM
let container = document.getElementById('container')
let deleteTerm = document.getElementById('deleteTerm')
let btn_delete = document.getElementById('btn_delete')
let item = document.getElementsByClassName('item')


class Book {
    constructor(name, img) {
        this.id = uuid.v4()
        this.name = name
        this.img = img
    }
}

const book1 = new Book('Tensei Shitara Slime Datta Ken', 'https://tse1.mm.bing.net/th?id=OIP.wx2MAbrdDxJaXfvjkE7wCwHaEV&pid=Api&P=0&w=274&h=161')
const book2 = new Book('Mushoko Tensei', 'https://s199.imacdn.com/ta/2020/12/18/54dba0a10cd16c56_57a1e426e4d2700e_41366116083002517185710.jpg')
const book3 = new Book('Gimgar', 'https://vignette.wikia.nocookie.net/86-eighty-six/images/5/58/86_v6_full.jpg/revision/latest?cb=20190515050303')
const book4 = new Book('One Piece', 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2017/07/one-piece-manga-monkey-d-luffy-header.jpg')
const book5 = new Book('Hundred', 'https://animematch.com/wp-content/uploads/2018/09/Iconic-Hundred-Light-Novel-Series-Final-Volume.jpg')
const book6 = new Book('Oregairu', 'http://haruhichan.com/wpblog/wp-content/uploads/My-Teen-Romantic-Comedy-SNAFU-light-novel-volume-6-cover.png')
const book7 = new Book('Miserable People', 'http://isach.info/images/story/cover/nhung_nguoi_khon_kho__victor_hugo.jpg')
const book8 = new Book('Person who every know', 'https://img.giaoduc.net.vn/w1050/uploaded/2020/vowkjqkp/2017_12_09/chi_pheo.jpg')
const book9 = new Book('Three Kingdom', 'https://nhatrangbooks.com/wp-content/uploads/2019/10/14e0b3f66247a9bce61569ae13e1a9dc.jpg')

// console.log();
class Libraries {
    constructor() {
        this.data = []
    }
    add(infor) {
        if (infor instanceof Book) {
            this.data.push(infor)
        }
    }
    // show the books
    view() {
        for (let i = 0; i < this.data.length; i++) {
            let htmlEle = `<div class="item">
                                <img src="${this.data[i].img}">
                                <h3> ${this.data[i].name} </h3>
                            </div>`
            container.insertAdjacentHTML('beforeend', htmlEle)
        }
    }
    // delete book when you enter name or id
    delete() {
        for(let i = 0; i < this.data.length; i++) {
            btn_delete.addEventListener('click', () => {
                if(this.data[i].name === deleteTerm.value) {
                    item[i].style.display = 'none'
                }
                else if(this.data[i].id === deleteTerm.value) {
                    item[i].style.display = 'none'
                }
            })
        }
    }
    
}
const libraries = new Libraries()
libraries.add(book1)
libraries.add(book2)
libraries.add(book3)
libraries.add(book4)
libraries.add(book5)
libraries.add(book6)
libraries.add(book7)
libraries.add(book8)
libraries.add(book9)



libraries.view()

class MyCss extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' })
        this.innerHTML = `<style>
                            body,html {
                                background-color: whitesmoke;
                                height: 100%;
                            }
                            
                            #nav{
                                display: grid;
                                width: 100%;
                                height: 65px;
                                background-color: white;
                            }
                            #nav h1{
                                text-align: center;
                                align-item: center;
                                font-family: cursive;
                                animation: change 2s infinite;
                            }
                            @keyframes change {
                                0% {
                                    color: rgb(236, 81, 75);
                                }
                                50% {
                                    color: rgb(160, 202, 81);
                                }
                                100% {
                                    color: rgb(247, 192, 92);
                                }
                            }
                            #delete {
                                display: flex;
                                width: 100%;
                                margin-top: 20px;
                                justify-content: center;
                                align-item: center;
                            }
                            #btn_delete {
                                cursor: pointer;
                            }
                            
                            #container {
                                display: grid;
                                grid-template-columns: auto auto auto;
                                justify-content: space-around;
                                flex-wrap: wrap;
                                margin-top: 60px;
                            }
                            .item img{
                                width: 230px;
                                height: 240px;
                            }
                            .item h3 {
                                text-align: center;
                            }
                            footer {
                                height: 150px;
                            }
                        </style>`
    }
}
customElements.define('my-css', MyCss)

libraries.delete()