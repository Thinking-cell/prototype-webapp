// constants

// constats for scroll animations
const scrollAnimationObserver = new IntersectionObserver( scrollAnimationCallback, {threshold: 0.2})
const scrollTargets = document.querySelectorAll(".anim-on-scroll");














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
          console.log("swaying left")

        }else if(target.classList.contains('sway-right')){
          target.classList.add('anim-text-reveal-right')
          target.classList.toggle('hide')
          console.log("swaying right")
        }else{
          //default animation
        }


      }
    })
}



function observeTargets(observer, targets){
  targets.forEach(target =>{observer.observe(target)})
}

