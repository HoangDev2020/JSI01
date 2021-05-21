import {register} from "../models/user.js"

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
            
    </form>
`

export default class RegisterForm extends HTMLElement {
    constructor() {
        super()
        this.appendChild($template.content.cloneNode(true))
        this.$registerform = this.querySelector('.register-form')

        this.$name = this.querySelector('#name')
        this.$email = this.querySelector('#email')
        this.$password = this.querySelector('#password')
        this.$passwordConfirmation = this.querySelector('#password-confirmation')

        this.$nameError = this.querySelector('#name-error')
        this.$emailError = this.querySelector('#email-error')
        this.$passwordError = this.querySelector('#password-error')
        this.$passwordConfirmationError = this.querySelector('#password-confirmation-error')
    }
    connectedCallback() {
        this.$registerform.onsubmit = (event) => {
            event.preventDefault()

            if(this.validate()) {
                register({
                    name: this.$name.value.trim(), 
                    email: this.$email.value.trim(), 
                    password: this.$password.value
                }, () => {
                    alert("Create account succeesfully")
                }, (error) => {
                    alert(error.message)
                })
                
            }
        }
    }

    validate() {
        let isPassed = true
        if(this.$name.value.trim() == '') {
            this.$nameError.textContent = "Please enter your name"
            isPassed = false
        } else {
            this.$nameError.innerHTML = ""
        }
        if(this.$email.value.trim() == '') {
            this.$emailError.textContent = "Please enter your name"
            isPassed = false
        } else {
            this.$emailError.innerHTML = ""
        }
        if(this.$password.value == '') {
            this.$passwordError.textContent = "Please enter your name"
            isPassed = false
        } else {
            this.$passwordError.innerHTML = ""
        }
        if(this.$passwordConfirmation.value == '') {
            this.$passwordConfirmationError.textContent = "Please enter your name"
            isPassed = false
        } else if(this.$password.value != this.$passwordConfirmation.value) {
            this.$passwordConfirmationError.innerHTML = "Your password is bot correct"
            isPassed = false
        }
        else {
           this.$passwordConfirmationError.innerHTML = ""
       }
       return isPassed
    }
}

window.customElements.define('register-form', RegisterForm)