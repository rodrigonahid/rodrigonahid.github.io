// function scrollSuave(){
//     const accordionList = document.querySelectorAll('.menu a[href^="#"]');

//     function activeAccordion(event){
//         event.preventDefault();
//         const href = event.currentTarget.getAttribute('href');
//         const section = document.querySelector(href);
//         var topo = section.offsetTop;
//         section.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//             inline: 'end'
//         })
//     }

//     accordionList.forEach((accordionItem)=>{
//         accordionItem.addEventListener('click', activeAccordion);
//     })
// }
// scrollSuave();

sections = document.querySelector('.sobreMimCard');
navbar = document.querySelector('.header');
navbarLogo = document.querySelectorAll('#logoJs');
navbarMenus = document.querySelectorAll('a[href^="#"] li')
console.log(navbarMenus)
function animaScroll(){
    const sectionTop= sections.getBoundingClientRect().top;
    const navbarBottom = navbar.getBoundingClientRect().bottom;
    const height = sectionTop - navbarBottom;
    if(height<=0){
        navbar.classList.add('header2');
        navbarLogo[0].classList.add('headerColor');
        navbarLogo[1].classList.add('headerColor');
        navbarMenus.forEach(element => {
            element.classList.add('headerColor');
        });
    }else{
        navbar.classList.remove('header2');
        navbarLogo[0].classList.remove('headerColor');
        navbarLogo[1].classList.remove('headerColor');
        navbarMenus.forEach(element => {
            element.classList.remove('headerColor');
        });
    }
}
window.addEventListener('scroll', animaScroll);