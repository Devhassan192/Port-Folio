// scroll Animations

const loadElements = document.querySelectorAll('.load');
loadElements.forEach(function(el, index){
    el.dataset.loadindex = index + 1;
});
const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            if(entry.target.classList.contains('scale-on-scrol')){
                entry.target.classList.add('scale-effect')
                entry.target.classList.remove('show')
            }
            if(entry.target.classList.contains('year')){
                entry.target.classList.add('reload')
                entry.target.classList.remove('show')
                
            }
            if(entry.target.classList.contains('load') && !entry.target.classList.contains('loaded') ){
                const index = entry.target.dataset.loadindex;
                entry.target.classList.add(`load${index}`)
                entry.target.classList.add(`loaded`)
                entry.target.classList.remove('show')
            }
        }
        
    })
},{
    threshold : 0.3
}
)
const hiddenElements = document.querySelectorAll('.hidden-at-start, .scale-on-scroll, .load, .year');
hiddenElements.forEach(function(el){
    observer.observe(el);
} );

// Accordion
let allContainers = document.querySelectorAll('.container-faq')
allContainers.forEach((container)=>{
    let answer = container.querySelector('.item-ans');
    let cross = container.querySelector('.circle');
    
    answer.style.maxHeight = '0px';
    answer.style.transition = "max-height 0.3s ease-in"
    container.style.transition = "all 0.3s ease-in"
    
    
    container.addEventListener('click', ()=>{
        const isOpen = answer.style.maxHeight !== '0px';
        
        document.querySelectorAll('.container-faq').forEach( (el) =>{
            const answer = el.querySelector('.item-ans');
            const cross = el.querySelector('.circle');
            answer.style.maxHeight = '0px';
            cross.style.transform = 'rotate(0deg)';
            cross.firstElementChild.style.opacity = "1";

        });
        
        if(!isOpen){
        answer.style.maxHeight = answer.scrollHeight + 'px';
        cross.style.transform = 'rotate(180deg)'
        cross.firstElementChild.style.opacity = "0"
        }
        
    });
});
