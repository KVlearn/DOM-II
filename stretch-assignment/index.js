let blocksContainer=document.querySelector('.blocks');
console.log(blocksContainer);
let blockClass=document.querySelectorAll('.block');
 
console.log(blockClass);
 
/*Rockets When a block is clicked, it should go to the top of the stack.*/ 
 
 blockClass.forEach(item=>{
    item.addEventListener('click',event=>{
        blocksContainer.removeChild(event.target);
        blocksContainer.prepend(event.target);   
        event.target.style.transform="rotate(180deg)"; 
        event.stopPropagation();     
    })
})
 
// While a mouse is clicked down on a box, it should move to the right (It should coninuously move, there is no limit on how far it will go).
 
blockClass.forEach(item=>{
    item.addEventListener('mousedown',(event)=>{
        event.target.style.transition="margin-left, 3.5s";
        event.target.style.marginLeft="85rem";
        event.target.style.transform="rotate(190deg)"; 
        event.stopPropagation(); /* so mousedown didnt propagate to click */
    })
})

blockClass.forEach(item=>{
    item.addEventListener('mouseup',event=>{
        // event.target.style.transition="margin-right 2s";
        event.target.style.marginLeft="1rem"; /*bring square to original pos?*/
        event.stopImmediatePropagation();
    })
})
// Animate the rockets, visually show them being transported to the top.
// let sOrder = -1;
// let animateRockets = (event) => {
//   event.target.transition="20s";
//   event.target.style.order = sOrder;
//   sOrder--;
//   }
// blocksContainer.addEventListener('click',animateRockets);

// Travelers:

// * Give the travelers a limit on the distance it can travel. => get the limit from form input and use it as margin left distance.
// * When the mouse button is released, it should travel back to its original position.
// * A mouse down that occurs during a transition back to the original position should send it traveling to the right again  from it's current position.

// Add event listener for mouse up and mouse down and call the functions mouseDown,mouseUp


blockClass.forEach((item)=>{
    item.addEventListener('mousedown',startTimer);
    item.addEventListener('mouseup',reEntry);
    
});

let choice=0;
let timer;

function startTimer(){
timer = setInterval(blastOff,10) /*perform blastOff function at interval of every 10ms*/
}

const blastOff = ()=>{
    choice+=100;
    console.log('im heare')
    blockClass.forEach(item=>{
    item.addEventListener('mousedown',(event)=>{
    event.target.style.transition="margin-left, 3.5s";
    console.log('im here for margin');
    console.log(`${choice}px`);
    event.target.style.marginLeft=`${choice}px`;
    event.stopPropagation(); /* so mousedown didnt propagate to click */
     })
    })
    if (choice>1300){
        clearInterval(timer);
    }   
}
  
const reEntry = ()=>{
   
    // event.target.style.marginLRight='1500px'
    blockClass.forEach(item=>{
    item.addEventListener('mouseup',event=>{
       console.log('im in reentry')
    //    event.target.style.transition="margin-right, 3.5s"; /* how to bring it back??*/
    //     event.target.style.marginLeft='800px';
        clearInterval(blastOff);
        
    })
})
}
        
