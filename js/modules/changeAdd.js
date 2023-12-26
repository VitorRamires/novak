export default function changeAdicionais(){
  const btnAdicional = document.querySelectorAll(".btn-adicional")
  const adicionais = document.querySelectorAll(".adicionais article")

  function handleChangeFrame(index){
    btnAdicional.forEach(item=>{
      item.classList.remove('activeBar')
    })
    adicionais.forEach(item=>{
      item.classList.remove('changeAdd')
    })

    btnAdicional[index].classList.add('activeBar')
    adicionais[index].classList.add('changeAdd')
  }

  btnAdicional.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
      handleChangeFrame(index)
    })
  })
}
