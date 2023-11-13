export default function animationHandle(){

const animationsElements = document.querySelectorAll(".js-anime")

function animationsHandle(e){
  const windowHeight = window.innerHeight * 0.9
  animationsElements.forEach((element)=>{
    const topDistanceElement = element.getBoundingClientRect().top
    if(windowHeight > topDistanceElement){
      element.classList.add("activeScrollAnime")
    }
  })
  
}
window.addEventListener("scroll", animationsHandle)
}


