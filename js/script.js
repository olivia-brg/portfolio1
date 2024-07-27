import { displayHomepage } from "./home.js";
import { displayAbout } from "./about.js";
import { displaySkills } from "./skills.js";
import { displayCV } from "./cv.js";
import { displayContact } from "./contact.js";

displayHomepage();

function homepageClick() { changeContent(displayHomepage); }
function aboutClick() { changeContent(displayAbout); }
function skillsClick() { changeContent(displaySkills); }
function cvClick() { changeContent(displayCV); }
function contactClick() { changeContent(displayContact); }

document.getElementById("homeButton").addEventListener("click", homepageClick);
document.getElementById("aboutButton").addEventListener("click", aboutClick);
document.getElementById("skillsButton").addEventListener("click", skillsClick);
document.getElementById("cvButton").addEventListener("click", cvClick);
document.getElementById("contactButton").addEventListener("click", contactClick);

let content = document.getElementById("content");

function changeContent(displayFunction) {
    // Ajoute la classe pour l'animation de disparition
    content.classList.add("slide-out");
    content.classList.remove("slide-in");

    // Attends la fin de l'animation avant de changer le contenu
    setTimeout(() => {
        displayFunction();
        content.classList.remove("slide-out");
        content.classList.add("slide-in");
    }, 500); // Doit correspondre à la durée de l'animation CSS
}
