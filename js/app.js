console.log('Hello!');
// To change navbar color when scrolled
const header = document.querySelector('#navbarList');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if(top >= 10){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

