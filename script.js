function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance){
        elements[instance].scrollIntoView({behavior:'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', () => {scrollToElement('.products-container');});
link2.addEventListener('click', () => {scrollToElement('.info');});
link3.addEventListener('click', () => {scrollToElement('.services h2');});
link4.addEventListener('click', () => {scrollToElement('.container2');});