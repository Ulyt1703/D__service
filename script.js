let titleAbout = document.querySelector(".title-about")
window.addEventListener("scroll", function(){
    if(scrollY > 1040){
        titleAbout.classList.add("new__title-about")
    }
    else{
        titleAbout.classList.remove("new__title-about")
    }
})

let textAbout = document.querySelector(".box-about")
window.addEventListener("scroll", function(){
    if(scrollY > 1240){
        textAbout.classList.add("new__text-about")
    }
    else{
        textAbout.classList.remove("new__text-about")
    }
})

let textFooter = document.querySelector(".info-Footer")
window.addEventListener("scroll", function(){
    if(scrollY > 2500){
        textFooter.classList.add("text-lime")
    }
    else{
        textFooter.classList.remove("text-lime")
    }
})