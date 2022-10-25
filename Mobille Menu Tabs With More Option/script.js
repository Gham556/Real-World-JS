const menu = document.querySelector('.menu');
const more = document.querySelector('.more');
const hiddenObjects = document.querySelectorAll('.hidden');

const showDropDown = function () {
    
    for (let i of hiddenObjects) {
        i.classList.toggle('hidden')
        
    }
}

more.addEventListener('click', showDropDown);
more.addEventListener('mouseover', showDropDown);