const dropMenu = document.querySelector('.secret-menu');
const hamburger = document.querySelector('.fa-bars');

hamburger.addEventListener('click', function(){

    if (hamburger.classList.contains('open')) {
        dropMenu.style.display = "none";
        hamburger.classList.remove('open');
        console.log('Am closedddd');
    } else {
        dropMenu.style.display = "block";
        hamburger.classList.add('open');
        console.log('Am opennnnn');
    } 


    // dropMenu.style.display = 'block';
    // hamburger.style.color = 'rgb(228, 164, 54)';
    // // hamburger.style.color.toggle('white');
    // console.log('dropdown menu style display');

});

