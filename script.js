const dropMenu = document.querySelector('.secret-menu');
const hamburger = document.querySelector('.fa-bars');

hamburger.addEventListener('click', function(){

    if (hamburger.classList.contains('open')) {
        dropMenu.style.display = "none";
        hamburger.classList.remove('open');
        hamburger.style.color = 'rgb(246,246,246';
        console.log('Am closedddd');
    } else {
        dropMenu.style.display = "block";
        hamburger.classList.add('open');
        hamburger.style.color = 'rgb(228, 164, 54)';
        console.log('Am opennnnn');
    }
});

const contactForm = document.querySelector('.contactForm');

const userName = document.querySelector('#userName');

const thankTheUser = document.querySelector('.userThank');
console.log(thankTheUser);
contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    const userNameInput = userName.value;
    console.log(userNameInput);
    userName.value = '';
    document.querySelector('#userEmail').value = '';
    document.querySelector('#userMessage').value = '';

    const newParagraph = document.createElement('p');
    thankTheUser.appendChild(newParagraph);
    thankTheUser.querySelector('p').textContent = `Thanks, ${userNameInput}!`;
})