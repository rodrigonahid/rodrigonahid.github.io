function scrollSuave(){
    const accordionList = document.querySelectorAll('.menu a[href^="#"]');

    function activeAccordion(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        var topo = section.offsetTop;
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'end'
        })
    }

    accordionList.forEach((accordionItem)=>{
        accordionItem.addEventListener('click', activeAccordion);
    })
}
scrollSuave();