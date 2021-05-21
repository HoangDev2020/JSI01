import MainMenu from "./components/MainMenu.js";

import ComicContainer from "./components/ComicContainer.js"
import RegisterForm from "./components/RegisterForm.js"
import data from "./data.js"

// let $content = document.getElementsByClassName('content')[0]
// function showComics(data, $container) {
//     for(let comicData of data) {
//         let $comicContainer = new ComicContainer()

//         $comicContainer.setAttribute('name', comicData.name)
//         $comicContainer.setAttribute('image', comicData.image)
//         $comicContainer.setAttribute('new-chapter', comicData.newChapter)
//         $comicContainer.setAttribute('release', comicData.release)
//         $comicContainer.setAttribute('hot', comicData.hot)
//         $container.appendChild($comicContainer)
//     }
// }

// showComics(data, $content)

function test() {
    try {
        console.log("get data");
        throw new Error("Cannot get the data")
        console.log("xu li data");
    } catch(error) {
        console.log("Has one bug is: " + error.message);
    }

    console.log("show screen(bat buoc)");
}
test()