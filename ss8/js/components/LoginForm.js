const $template = document.createElement('template')
$template.innerHTML = `

`

export default class LoginForm extends HTMLElement {
    constructor() {
        super()
        this.appendChild($template.content.cloneNode(true))
    }
}

window.customElements.define('login-form', LoginForm)