function openMenu() {
    let menu = document.getElementById('menu');
    let menuComplement = document.getElementById('menuComplement');

    menu.classList.toggle('active');
    menuComplement.classList.toggle('active');

};

function showPopup() {
    let menu = document.getElementById('menu');
    let popup1 = document.getElementById('popup1');
    let popup2 = document.getElementById('popup2');
    let popup3 = document.getElementById('popup3');

    popup1.classList.toggle('show')
    popup2.classList.toggle('show')
    popup3.classList.toggle('show')

    
    
};


function closePopup1() {
    let popup1 = document.getElementById('popup1');

    popup1.classList.remove('show')
};

function closePopup2() {
    let popup2 = document.getElementById('popup2');

    popup2.classList.remove('show')
};

function closePopup3() {
    let popup3 = document.getElementById('popup3');

    popup3.classList.remove('show')
};

