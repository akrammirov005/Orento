let dropdownP = document.querySelectorAll('.dropdown-item__content > p');
let dropdown = document.querySelectorAll('.dropdown');
let svg = document.querySelectorAll('.dropdown-svg');

for (let i = 0; i < dropdown.length && dropdownP.length && svg.length; i++) {
    const down = dropdown[i];
    const downP = dropdownP[i];
    const rot = svg[i]
    down.addEventListener('click', ()=>{
        if(downP.style.maxHeight){
            downP.style.maxHeight = null
        }else{
            downP.style.maxHeight = downP.scrollHeight + 'px'
        }
    })
    down.addEventListener('click',()=>{
        rot.classList.toggle('rotate')
    })
    
}
