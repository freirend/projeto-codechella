const pergunta = document.querySelectorAll('.pergunta')
const resposta = document.querySelectorAll('.resposta')
const arrow = document.querySelectorAll('.uil-angle-down')

function mostrar(id){
    if (resposta[id].className == "resposta hide"){
        resposta[id].classList.remove('hide')
        arrow[id].style.transform = 'rotate(180deg)'
    } else{
        resposta[id].classList.add('hide')
        arrow[id].style.transform = 'rotate(0deg)'
    }
}

for (c = 0; c < pergunta.length; c++){
    pergunta[c].addEventListener('click', (param)=>{
        mostrar(param.target.parentElement.id)
    })
}






/*
pergunta.addEventListener('click', mostrar)


function mostrar(){
    if (resposta.className == "resposta hide"){
        resposta.classList.remove('hide')
        arrow.style.transform = 'rotate(180deg)'
    } else{
        resposta.classList.add('hide')
        arrow.style.transform = 'rotate(0deg)'
    }
*/