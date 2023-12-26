export default function changeSlide(){
  
const imgPainel = document.querySelector(".dynamic-bg img"),
      imgsGaleryImg = document.querySelectorAll(".images-galery img"),
      imgsGalery = document.querySelectorAll(".images-galery .slide"),
      framesParagraph = document.querySelectorAll(".p-frame")
    
    function changeFrame(index, image){
      const imageSrc = image.src
      imgPainel.src = imageSrc 

      framesParagraph.forEach((paragraph)=>{
        paragraph.classList.remove("change")
        framesParagraph[index].classList.add("change")
      })

      imgsGalery.forEach((currentSlide)=>{
        currentSlide.classList.remove("currentSlide")
        imgsGalery[index].classList.add("currentSlide")
      })
    }

    imgsGaleryImg.forEach((image, index)=>{
      image.addEventListener("click", ()=>{
        changeFrame(index, image)
      })
    })
}

