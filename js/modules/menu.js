export default function menuMobileHandle(){

const menuHamburguer = Array.from(document.querySelectorAll(".menu-hamburguer")),
      menuClose = document.querySelector(".menu-close"),
      menu = document.querySelector(".menu-itens-hamburguer"),
      overlayMenu = document.querySelector(".overlayOnMenu"),
      imgMenuHamburguer = document.querySelector(".img-menuHamburguer")

  function handleHiddenMenu(){
    const activeMenu = menu.classList.toggle("handle-menu")
    overlayMenu.classList.toggle("zIndex") 

    if(activeMenu){
      overlayMenu.classList.add("activeLay")
      menuClose.style.opacity = 1
      imgMenuHamburguer.style.opacity = 0
      
    }else{
      overlayMenu.classList.remove("activeLay")
      menuClose.style.opacity = 0
      imgMenuHamburguer.style.opacity = 1
    } 
  }
  
  function hiddenMenuWorked(menuImg){
    menuImg.addEventListener("click", handleHiddenMenu)
  }

  menuHamburguer.forEach(hiddenMenuWorked)

  const menuItem = document.querySelectorAll(".menu-item")
  function actualPageHandle(item){
    if(document.location.href.includes(item.href)){
      item.classList.add("linkAtivo")
    }
  }
  menuItem.forEach(actualPageHandle)
}

