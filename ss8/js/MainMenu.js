const template = document.createElement('template')
template.innerHTML = `
                    <div id="menu">
                        <div class="menu_item"><a href="index.html"> Index</a></div>
                        <div class="menu_item"><a href="about.html">About</a></div>
                        <div class="menu_item"><a href="contact.html">Contact</a></div>
                    </div>
                    `

export default class MainMenu extends HTMLElement {
    constructor() {
        super()
        this.appendChild(template.content.cloneNode(true))
    }


}
window.customElements.define('main-menu', MainMenu)

