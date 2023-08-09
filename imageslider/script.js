const pan=document.querySelectorAll('.panel');
pan.forEach(item =>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add("over");
    });
});

function removeActive(){
    pan.forEach(item =>{
        item.classList.remove('over');
    });
}
