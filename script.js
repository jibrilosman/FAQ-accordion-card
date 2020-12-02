const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {
        const currentlyActiveAccordionItemHeader = document.querySelector('.accordion-item-header.active');
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !==accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle('active');
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            
        }

        accordionItemHeader.classList.toggle('active');
        accordionItemHeader.style.color = "hsl(14, 88%, 65%)";
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        
        }
        else {
            accordionItemBody.style.maxHeight = 0;
            
        }
    })
})