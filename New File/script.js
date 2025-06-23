// Seleciona o botão do menu e o menu de navegação (alteração para funcionamento do menu responsivo)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
// Adiciona/remover a classe 'active' para abrir/fechar o menu lateral (alteração para funcionamento do menu responsivo)
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
