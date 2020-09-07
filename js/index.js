// Your code goes here
// * `mouseover` - done + mouseleave
// * `keydown` - done + keyup
// * `wheel` - done
// * `load` - done 
// * `focus` - done
// * `resize` - done
// * `scroll` - done
// * `select` -done
// * `dblclick` - done
// * `drag / drop` - done

/* mouseover on nav bar to change color of element to yellow */

const navLinks=document.querySelectorAll('.nav-link');
console.log(navLinks);
navLinks.forEach(item =>{
    item.addEventListener('mouseover',(event)=>{
        event.target.style.color="goldenrod";
        event.target.style.borderBottom='1.2px dotted red';
        event.target.style.transform='scale(1.5)';
        event.target.style.transition='all 0.5s';
    })
})
    
/* mouseleave on nav bar to change color back to original */

navLinks.forEach(item=>{
    item.addEventListener('mouseleave',(event)=>{
        event.target.style.color="black";
        event.target.style.borderBottom='none';
        event.target.style.transform='scale(1)';
        event.target.style.transition='all 0.3s';
    }

    )
})

/* keydown event - change background and font color for the below elements on key press*/
// select header section and home container section
// select h1 and h2 

const h1=document.querySelector('h1');
const h2=document.querySelectorAll('h2');
const homeContainer=document.querySelector('.container');
const header=document.querySelector('.main-navigation');
const body=document.querySelector('body');
const p=document.querySelectorAll('p');
console.log(h1);
console.log(h2);
console.log(homeContainer);
console.log(header);

window.addEventListener('keydown',event=>{
    if(event.key === 'z'){
        h1.style.color='dodgerblue';
        h1.style.transform='scale(1.8)';
        h1.style.transition='1.5s';
        header.style.backgroundColor="goldenrod";
    }
})

window.addEventListener('keydown',event=>{
    if(event.key === 'a'){
    header.style.backgroundColor="darkcyan";
    h1.style.color="snow";
    navLinks.forEach(item=>item.style.color="snow");
    body.style.backgroundColor="darkcyan";
    h2.forEach(item=>item.style.color="snow");
    p.forEach(item=>item.style.color="snow");
    }
})

window.addEventListener('keyup',()=>{
    header.style.backgroundColor="white";
    h1.style.color="black";
    h2.forEach(item=>item.style.color="black");
    navLinks.forEach(item=>item.style.color="black");
    body.style.backgroundColor="white";
    body.style.backgroundImage="none";
})

/*load event*/
window.addEventListener('load',()=>{
    alert("Fun Bus Loaded Successfully");
})

/*resize of window to change bus image to rocket ship and change h1 content*/
const busImg=document.querySelector('.intro img')
window.addEventListener('resize',()=>{
    body.style.backgroundImage ="url(https://www.brinknews.com/wp-content/uploads/2020/04/nasa-yZygONrUBe8-unsplash.jpg)"
   body.style.backgroundSize="cover";
   body.style.backgroundAttachment= "fixed";
   body.style.backgroundRepeat= "no-repeat";
   body.style.color="white";
busImg.src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F07%2F07%2Fspace-perspective-capsule-SPACEPOD0720.jpg";
h1.textContent="Space Travel Z";
h2[0].textContent="Welcome to Space Travel Bus Z";
h1.style.color="dodgerblue";
h1.style.fontSize="5rem";
h2[0].style.color="dodgerblue";
body.style.backgroundColor="seashell";
header.style.backgroundColor="seashell";
navLinks.forEach(item=>item.style.color="dodgerblue");
})

const contentImgs=document.querySelectorAll('.img-content img');
const destImg=document.querySelector('.content-destination img');
const h4=document.querySelectorAll('.destination h4');
const copyr=document.querySelector('footer p');
/*double click the intro image to take to space world*/
busImg.addEventListener('dblclick',()=>{
    busImg.src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F07%2F07%2Fspace-perspective-capsule-SPACEPOD0720.jpg"
    h1.textContent="Space Travel Z";
    h2[0].textContent="Welcome to Space Travel Bus Z";
    h1.style.color="dodgerblue";
    h1.style.fontSize="5rem";
    h2.forEach(item=>item.style.color="dodgerblue");
    body.style.backgroundColor="seashell";
    header.style.backgroundColor="seashell";
    navLinks.forEach(item=>item.style.color="dodgerblue");
    contentImgs[0].src="https://www.travelpress.com/wp-content/uploads/2020/06/TRAVEL-SPACE-LANDSCAPE-KEY-VISUAL_600x400.jpg";
    contentImgs[1].src="https://s3.amazonaws.com/iexplore_web/images/assets/000/006/572/original/space_travel.jpg?1443785354"
    destImg.src="https://i1.wp.com/blog.bambatravel.com/wp-content/uploads/2019/09/1111.jpg?fit=833%2C555&ssl=1";
    h4.forEach(item=>item.style.color="dodgerblue");
    h4[0].textContent="Shine on Luna Land!"
    h4[1].textContent="Visit the Red Planet!"
    h4[2].textContent="Dare to Solar flares!"
    copyr.textContent="Copyright Space Travel Z 2020";
}) 

 const footer=document.querySelector('footer');
/* scroll event */
window.addEventListener('scroll',()=>{
   busImg.src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F07%2F07%2Fspace-perspective-capsule-SPACEPOD0720.jpg";
    h1.textContent="Space Travel Z";
    h2[0].textContent="Welcome to Space Travel Bus Z";
    h1.style.color="dodgerblue";
    h1.style.fontSize="5rem";
    h2.forEach(item=>item.style.color="dodgerblue");
    // body.style.backgroundColor="seashell";
    header.style.backgroundColor="seashell";
    footer.style.backgroundColor="black";
    // navLinks.forEach(item=>item.style.color="dodgerblue");
    contentImgs[0].src="https://www.travelpress.com/wp-content/uploads/2020/06/TRAVEL-SPACE-LANDSCAPE-KEY-VISUAL_600x400.jpg";
    contentImgs[1].src="https://s3.amazonaws.com/iexplore_web/images/assets/000/006/572/original/space_travel.jpg?1443785354"
    destImg.src="https://i1.wp.com/blog.bambatravel.com/wp-content/uploads/2019/09/1111.jpg?fit=833%2C555&ssl=1";
    p.forEach(item=>item.style.color="white");
    h4.forEach(item=>item.style.color="dodgerblue");
    h4[0].textContent="Shine on Luna Land!"
    h4[1].textContent="Visit the Red Planet!"
    h4[2].textContent="Dare to Solar flares!"
    copyr.textContent="Copyright Space Travel Z 2020";
    body.style.backgroundColor="black";
    navLinks.forEach(item=>item.style.color="dodgerblue");
})
/*select and focus => works on forms */
/* Create form */
let myDest=document.querySelector('.destination') /*the last section class*/
/*Creating a label element that reads "enter your email" */
const myLabel = document.createElement("label")
myLabel.textContent="Enter your email";
myLabel.style.color="white";
myLabel.style.fontSize="1.6rem";
myLabel.style.margin="2rem";
myLabel.style.padding="3rem";

/*creating a form element */
let myForm = document.createElement("form");
    //   document.body.appendChild(f);
    //  myDest.appendChild(myForm);
    /* append form element next to label element */  
      myLabel.appendChild(myForm);
      /*create input element for the form with type as text */
      let myInput = document.createElement("input");
      myInput.setAttribute("type", "text");
      myInput.setAttribute("name", "email");
      myInput.setAttribute("value","Enter your Email")
      myForm.appendChild(myInput);
/*style the form*/
myForm.style.paddingTop="1.5rem";
myForm.style.paddingBottom="1rem";
myLabel.style.display="flex";
myLabel.style.flexDirection="column";

/*add the label element at the end of last container */
myDest.appendChild(myLabel);

/*focus */
myInput.addEventListener('focus',()=>{
    myInput.style.backgroundColor='#17A2B8';
}) 

/*select */
myInput.addEventListener('select',()=>{
   myInput.style.backgroundColor='hotpink';
}) 

/*drag drop event */

let newdiv1=document.createElement("dropzone");
newdiv1.className="dropzone"
myLabel.appendChild(newdiv1)
newdiv1.className="dropzone"
let newdiv2=document.createElement("dropzone");
myLabel.appendChild(newdiv2)
 
let dragged;
/*assign all destination p*/
let divDest=document.querySelectorAll('.destination p')
divDest[0].textContent="Tour de Moon ! Fall in love with the Craters.Witness the Giant Leap of Mankind. Learn to drink your hot cup of Coffee in the Moon with zero Gravity."
divDest[1].textContent="Tour de Mars ! Enjoy the Reddiness of the planet B.Keep your eyes open to wish hellos and shake hands with Marsians! if you happend to spot one..."
divDest[2].textContent="Tour de Sun , the ultimate adventure to take a look at our closest Star!. Witness the solar flares , our life source of energy. Daring adventure of all! "


//  let myH4=document.querySelectorAll('H4');
//  myH4[0].className="dropzone";
//  myH4[1].className="dropzone";
//  myH4[2].className="dropzone";
// /*  set the below attributes for destination div class <div id="draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"> */
//  myDest[0].id="draggable";
//  myDest[0].draggable="true";
//  myDest[0].ondragstart="event.dataTransfer.setData('text/plain',null)";

/* events fired on the draggable target */
document.addEventListener("drag", function(){

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
  event.target.style.color="green"
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "destination") {
    event.target.style.background = "pink";
    event.target.style.fontSize="2rem";
    event.target.style.color="dodgerblue";
    event.target.style.fontStyle="cursive";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "destination") {
    event.target.style.background = "";
  }

}, false);


document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "destination") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

// /* Try to name class as 'dropzone for destination class and try moving the content say fun in sun to mountain excursion*/
/* wheel even on nav*/
 
window.addEventListener("wheel",event=>{
  header.style.backgroundColor="snow";
  event.stopPropagation();
})
 
// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
// mouseover - Bubbles
// Check mouseover on header and mouseover on H2

header.addEventListener('click',event=>{
event.target.style.background = "limegreen";
// event.stopPropagation(); 
})
h1.addEventListener('click',event=>{
  event.target.style.color = "red";
  event.stopPropagation();/*without stop, both color change happens*/
  })

// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()` /* without preventDefault, on click of nav links it takes to the top of the page*/
navLinks.forEach(item =>{
  item.addEventListener('click',(event)=>{
      event.preventDefault();
  })
})
  
