// export let name = 'hoang'
// export let favor = 'game'

// export let pen = () => {
//     console.log('Hi');
// }

// export class Table {
//     constructor(name, size) {
//         this.name = name 
//         this.size = size
//     }
// }

class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>Hello World</h1>`
    }
}

customElements.define('my-component', MyComponent)


let datas = [
    {
        name: 'hoang',
        age: 1000
    },
    {
        name: 'huy',
        age: 2000
    },
    {
        name: 'nguyen',
        age: 3000
    }
]

// data.forEach(element => console.log(element));
let fragment = document.getElementById('my-template')

datas.forEach(data => {
    console.log(data);
    const instance = document.importNode(fragment.content, true)
    instance.querySelector('.name').innerHTML = data.name
    instance.querySelector('.age').innerHTML = data.age

    document.getElementById('datas').appendChild(instance)
})