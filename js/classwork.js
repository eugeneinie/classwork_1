const pic = document.getElementsByClassName('picture')[0]
// const pic = document.getElementsByClassName('.picture')
const btn = document.querySelectorAll('button')
const title = document.querySelector('h2')

function changeOne(){
    pic.classList.remove('img3')
    pic.classList.remove('img2')
    pic.classList.remove('picture')
    pic.classList.add('img1')
    title.textContent = ' -Sky'
    title.style.display = 'block'
}

function changeTwo(){
    pic.classList.remove('img1')
    pic.classList.remove('img3')
    pic.classList.remove('picture')
    pic.classList.add('img2')
}

function changeThree(){
    pic.classList.remove('img1')
    pic.classList.remove('img2')
    pic.classList.remove('picture')
    pic.classList.add('img3')
    title.style.fontSize = '3rem'
    title.textContent = '- Colour palette'
    title.style.textTransform = 'uppercase'
}

function randomColor(){
    pic.style.background = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}

btn[0].addEventListener('click', changeOne)
btn[1].addEventListener('click', changeTwo)
btn[2].addEventListener('click', changeThree)
btn[3].addEventListener('click', randomColor)