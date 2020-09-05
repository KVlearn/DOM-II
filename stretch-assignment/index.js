let blocksContainer=document.querySelector('.blocks');
console.log(blocksContainer);
let blockClass=document.querySelectorAll('.block');
console.log(blockClass);
let redBlock=document.querySelectorAll('.block--red');
console.log(redBlock);
let blueBlock=document.querySelectorAll('.block--blue');
console.log(blueBlock);
/*Rockets When a block is clicked, it should go to the top of the stack.*/ 
blocksContainer.addEventListener('click',event=>{
    blocksContainer.removeChild(event.target);
    blocksContainer.prepend(event.target);
})
// While a mouse is clicked down on a box, it should move to the right (It should coninuously move, there is no limit on how far it will go).
blocksContainer.addEventListener('mousedown', event=>{
    // event.target.style = 'transition: margin-left, 2s; margin-left: 100rem';
    event.target.style.transition="margin-left 3s";
    event.target.style.marginLeft= "100rem";
})
 
blocksContainer.addEventListener('mouseup', event=>{
    event.target.style.marginLeft="1rem" /*back to home*/
    event.target.style.transition="";
})
