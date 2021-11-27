const mobilenav = document.querySelector('#hamburger');
const mobileoverlay = document.querySelector('.mobile-overlay-menu');
mobilenav.addEventListener('click',function() {    
    mobileoverlay.style.display = 'block';
});
mobileoverlay.addEventListener('click',function() {
    mobileoverlay.style.display = 'none';
})