// tres constantes para refenciar as "Item" divs Projetos

const programadorFrontEnd = document.getElementById('programadorFrontEnd');
const programadorTI = document.getElementById('programadorTI');
const mundoTI = document.getElementById('mundoTI');

// constante para referenciar as iFrame
const movieprogramadorFrontEnd = document.querySelector('.movieprogramador'); 
const movieprogramadorTI = document.querySelector('.movieprogramadorTI');
const moviemundoTI = document.querySelector('.moviemundoTI');

// evento de click
programadorFrontEnd.addEventListener('click', () => {
    programadorFrontEnd.classList.toggle('active');
    movieprogramadorFrontEnd.classList.toggle('active');
});
programadorTI.addEventListener('click', () => {
    programadorTI.classList.toggle('active');
    movieprogramadorTI.classList.toggle('active');
});
mundoTI.addEventListener('click', () => {
    mundoTI.classList.toggle('active');
    moviemundoTI.classList.toggle('active');
});