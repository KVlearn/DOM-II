// Your code goes here
// * `mouseover` - done + mouseleave
// * `keydown` -done + keyup
// * `wheel` 
// * `load` - done 
// * `focus`
// * `resize` - done
// * `scroll` - done
// * `select` 
// * `dblclick` - done
// * `drag / drop`

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
let myDest=document.querySelector('.destination')
let myLabel = document.createElement("myLabel")
myLabel.textContent="Enter your email";
myLabel.style.fontSize="1.6rem";
myLabel.style.margin="2rem";
myLabel.style.padding="3rem";

let myForm = document.createElement("form");
    //   document.body.appendChild(f);
    //  myDest.appendChild(myForm);
    myLabel.appendChild(myForm);
      let myInput = document.createElement("input");
      myInput.setAttribute("type", "text");
      myInput.setAttribute("name", "email");
      myInput.setAttribute("value","Enter your Email")
      myForm.appendChild(myInput);

myForm.style.paddingTop="1rem";
myForm.style.paddingBottom="1rem";
myDest.appendChild(myLabel);

let newdiv1=document.createElement("dropzone");
newdiv1.className="dropzone"
myLabel.appendChild(newdiv1)
newdiv1.textContent="place1"
newdiv1.className="dropzone"
let newdiv2=document.createElement("dropzone");
myLabel.appendChild(newdiv2)
newdiv2.textContent="place2"

/*focus */
 myInput.addEventListener('focus',()=>{
     myInput.style.backgroundColor='goldenrod';
 }) 

/*select */
myInput.addEventListener('select',()=>{
    myInput.style.backgroundColor='pink';
}) 
 
