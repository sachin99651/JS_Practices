const clock=document.querySelector('#clock')
setInterval(()=>{
let date = new Date()
clock.innerHTML=`<h2>${date.toLocaleTimeString()}</h2>`
},1000)