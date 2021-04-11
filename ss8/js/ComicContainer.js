const template = document.createElement('template')
template.innerHTML = `
                    <div class="comic-container">
                        <div class="comic-image">
                            <span class="comic-release">1 day ago </span>
                            <span class="comic-hot">Hot</span>
                        </div>
                        <div class="comic-name">Attack on titan</div>
                        <div class="comic-new-chapter">Chapter 139</div>
                    </div>
`;

export default class ComicContainer extends HTMLElement {
    constructor() {
        super()
        this.appendChild(template.content.cloneNode(true))
        this.name = this.querySelector('.comic-name')
        this.newChapter = this.querySelector('.comic-new-chapter')
        this.image = this.querySelector('.comic-image')
        this.release = this.querySelector('.comic-release')
        this.hot = this.querySelector('.comic-hot')
    }
    //define attribute of component
    static get observedAttributes() {
        return ['name', 'image', 'new-chapter', 'release', 'hot']
    }

    // called when attributes are defined change value
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log("Element " + attrName + " has value is " + newValue);

        if (attrName == 'name') {
            this.name.innerHTML = newValue
        } 
        else if (attrName == 'image') {
            this.image.style.backgroundImage = "url(" + newValue + ")"
        }
        else if (attrName == 'new-chapter') {
            this.newChapter.innerHTML = "Chap" + newValue
        }
        else if (attrName == 'release') {
            this.release.innerHTML = newValue
        }
    }
}

window.customElements.define('comic-container', ComicContainer)