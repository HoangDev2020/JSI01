const $template = document.createElement('template')
$template.innerHTML = `
    <form class="register-form auth-form">
        <h2 style="text-align: center;">Register</h2>
        <hr>
            
        <div class="input-wrapper">
            <input type="text" id="name" class="input-main" placeholder="Your name">
            <div id="name-error" class="input-error"></div>
        </div>
            
        <div class="input-wrapper">
            <input type="email" id="email" class="input-main" placeholder="Your email">
            <div id="email-error" class="input-error"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" id="password" class="input-main" placeholder="Your password">
            <div id="password-error" class="input-error"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" id="password-confirmation" class="input-main" placeholder="Repeat your password">
            <div id="password-confirmation-error" class="input-error"></div>
        </div>
        <div class="input-wrapper">
            <button id="btn_register" class="btn">Register</button>
            <button id="btn_sign_in" class="btn">Sign in</button>
    </form>
`

export default class RegisterForm extends HTMLElement {
    constructor() {
        super()
        this.appendChild($template.content.cloneNode(true))
    }
}

window.customElements.define('register-form', RegisterForm)