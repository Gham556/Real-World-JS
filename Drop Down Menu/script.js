const dropDown = document.querySelector('.dropDown');
const hiddenObjects = document.querySelectorAll('.hidden');
const topItem = document.querySelector('.top');


const showDropDown = function myloop () { setTimeout(() => {
    
    for (let i of hiddenObjects) {
        i.classList.remove('hidden')
        
    }
}, 10000) };

topItem.addEventListener('click', showDropDown);
