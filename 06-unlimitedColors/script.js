const start=document.querySelector('#start')
const stop=document.querySelector('#stop')

const randomColor=()=>{
  const hex='0123456789ABCDEF'
  let color='#'
  for (let i = 0; i < 6; i++) {
    color+=hex[Math.floor(Math.random()*16)]  
  }
  return color
}

const bgColor=()=>{
  document.body.style.backgroundColor=randomColor()
}

let interval

const startChangingColor=()=>{
  if(!interval){
  interval=setInterval(bgColor,800)
  }
}

const stopChangingColor=()=>{
  clearInterval(interval)
  interval=null
}

start.addEventListener('click',startChangingColor)
stop.addEventListener('click',stopChangingColor)