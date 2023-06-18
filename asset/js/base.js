const wrapper = document.querySelector('.wrapper');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const menu = document.querySelector('#show-menu');
const closeSidebar = document.querySelector('#close-menu')

// sidebar toggle menu
menu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
    wrapper.classList.toggle('active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
    content.classList.remove('active');
    wrapper.classList.remove('active');
});