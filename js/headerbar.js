
// let header = document.querySelector('header nav');

// window.addEventListener('resize',function(){
//     let fenetre = window.innerWidth;
//     if (fenetre > 992) {
//         header.classList.remove("fixed-top");
//     } else {
//         header.classList.add("fixed-top")
//     } 
// })

let barre = document.querySelector('.barre');
let btn = document.querySelector('.navbar-toggler');

btn.addEventListener('click', function(){
    barre.classList.toggle("d-none");
})