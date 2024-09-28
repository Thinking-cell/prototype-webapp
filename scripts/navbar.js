// constants
 
const hamburger = document.querySelector(".nav-hamburger")
const navMenu = document.querySelector(".nav-menu")
const links = document.querySelectorAll(".nav-menu-link")
const quoteButton = document.querySelector("#nav-quote-btn")
const sidebarOverlay = document.querySelector("#overlay")









// activating navbar
navbarActive()




//Functions-->

// navbar logic





function navbarActive(){
    hamburger.addEventListener("click", ()=>{
        navMenu.classList.toggle("active")
        hamburger.classList.toggle("active")
        quoteButton.classList.toggle("active")
        console.log("closed")
    })
    
    window.addEventListener("resize", ()=>{
        if (window.matchMedia("(max-width : 550px)").matches){
            closeMenu();
        }
    })
    
    if (window.matchMedia("(max-width : 550px)").matches){
        closeMenu()
    }
    function closingMenu(){
            
        navMenu.classList.remove("active")
        hamburger.classList.remove("active")
        quoteButton.classList.remove("active")
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
