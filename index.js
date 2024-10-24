// constants

// constats for scroll animations
const scrollAnimationObserver = new IntersectionObserver( scrollAnimationCallback, {threshold: 0.2})
const scrollTargets = document.querySelectorAll(".anim-on-scroll");
// For service box 
const boxHeight = 250 //in px
const boxheightMargin = 55
let screenFactor = 2
let shrinkedHeight =  screenFactor*(boxHeight+boxheightMargin) + "px"
const showMoreBtn = document.getElementById("show-more")
const services = document.querySelector(".services-grid")









// show more box logic
services.style.height = shrinkedHeight
showMoreBtn.addEventListener("click",()=>{
 
  if(showMoreBtn.classList.contains("more")){
    services.style.height = 100 + "%"
    showMoreBtn.classList.remove("more")
    showMoreBtn.classList.add("less")
    showMoreBtn.textContent = "Show less"
  }else{
    services.style.height = shrinkedHeight
    showMoreBtn.classList.remove("less")
    showMoreBtn.classList.add("more")
    showMoreBtn.textContent = "Show more"
  }
})




// observing scroll animated elements
observeTargets(scrollAnimationObserver, scrollTargets)











//document.querySelector('#test').addEventListener('click', ()=>{console.log('test passed')})









// for applying animations to target elements
function scrollAnimationCallback(entries){
    entries.forEach((entry) => {


      if (entry.isIntersecting) {
        let target = entry.target;
        
        
        if(target.classList.contains('sway-left')){
          target.classList.add('anim-text-reveal-left')
          target.classList.toggle('hide')
          //console.log("swaying left")

        }else if(target.classList.contains('sway-right')){
          target.classList.add('anim-text-reveal-right')
          target.classList.toggle('hide')
          //console.log("swaying right")
        }else{
          //default animation
        }


      }
    })
}



function observeTargets(observer, targets){
  targets.forEach(target =>{observer.observe(target)})
}

// animations
function expandContentToMax(content){

}

function shrinkContent(content, shrinkedHeight){

}

