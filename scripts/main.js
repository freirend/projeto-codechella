const burguer = document.querySelector('.uil-bars')
const navbar = document.querySelector('#nav')

burguer.addEventListener('click', ()=>{
    burguer.classList.toggle('uil-multiply')
    if (burguer.className == "uil uil-bars uil-multiply"){
        navbar.style.right = '0'
    } else{
        navbar.style.right = '150%'
    }
})