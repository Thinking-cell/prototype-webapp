// constants
 
const hamburger = document.querySelector(".nav-hamburger")
const navMenu = document.querySelector(".nav-menu")
const links = document.querySelectorAll(".nav-menu-link")
const quoteButton = document.querySelector("#nav-quote-btn")
const sidebarOverlay = document.querySelector("#overlay")









// activating navbar
navbarActive()


// changing header background on scroll
window.onscroll = ()=>{
  
    let header = document.querySelector('header')
    if(document.querySelector('html').scrollTop> 150){
      header.classList.add('header-background')
      navMenu.classList.remove('nav-border')
    }else{
      header.classList.remove('header-background')
      navMenu.classList.add('nav-border')
      
    }
  }

//Functions-->

// navbar logic





function navbarActive(){
    hamburger.addEventListener("click", toggleMenu)

    
    
    window.addEventListener("resize", ()=>{
        if (window.matchMedia("(max-width : 550px)").matches){
            closeMenu();
        
        }
    })
    
    if (window.matchMedia("(max-width : 550px)").matches){
        closeMenu()
    }
    
    
    function closeMenu(){
    
        
        links.forEach((link)=>{
            link.addEventListener("click", ()=>{
                
                closingMenu()
            })
        })
        
        sidebarOverlay.addEventListener("click", closingMenu)
    
    
    }
    

}



function closingMenu(){

    sidebarOverlay.style.display = "none"
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
    quoteButton.classList.remove("active")
    
}

function toggleMenu(){

    sidebarOverlay.style.display = "block"
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
    quoteButton.classList.toggle("active")


        
}
