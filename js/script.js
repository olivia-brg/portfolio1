import { displayHomepage } from "./home.js";
import { displayAbout } from "./about.js";
import { displaySkills } from "./skills.js";
import { displayCV } from "./cv.js";
import { displayContact } from "./contact.js";


displayHomepage();

function homepageClick() { displayHomepage() }
function aboutClick() { displayAbout() }
function skillsClick() { displaySkills() }
function cvClick() { displayCV() }
function contactClick() { displayContact() }

document.getElementById("homeButton").addEventListener("click", homepageClick);
document.getElementById("aboutButton").addEventListener("click", aboutClick);
document.getElementById("skillsButton").addEventListener("click", skillsClick);
document.getElementById("cvButton").addEventListener("click", cvClick);
document.getElementById("contactButton").addEventListener("click", contactClick);