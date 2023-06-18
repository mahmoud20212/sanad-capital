const wrapper = document.querySelector('.wrapper');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const menu = document.querySelector('#show-menu');
const closeSidebar = document.querySelector('#close-menu');
const allLinkTag = document.querySelectorAll('.link-tag');

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

// SVG change color
allLinkTag.forEach(link =>{
    // check active if in link or not
    if (link.classList.contains('active')) return;

    // event for link
    link.addEventListener('mouseover', () => {
        let path = link.querySelectorAll('svg path');
        path.forEach(itemPath => {
            itemPath.setAttribute('stroke', '#FAFAFA');
        });
    });

    link.addEventListener('mouseleave', () => {
        let path = link.querySelectorAll('svg path');
        path.forEach(itemPath => {
            itemPath.setAttribute('stroke', '#718096');
        });
    });
});