
const projectCards = document.getElementById('projectCards');
const leftArrow =  document.getElementById('leftarr');
const rightArrow =  document.getElementById('rightarr');

leftArrow.addEventListener('click', () => {
    projectCards.scrollLeft -= 800;  
    console.log("Scrolled left");
});


rightArrow.addEventListener('click', () => {
    projectCards.scrollLeft += 800;  
    console.log("Scrolled right");
});
