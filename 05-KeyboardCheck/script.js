const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  if(e.key===' '){
    insert.innerHTML=`<h1>Pressed key is Space</h1>
    <h1>Key Code is ${e.keyCode}</h1>`
  }else{ 
  insert.innerHTML=`<h1>Pressed key is : ${e.key}</h1>
  <h1>Key Code is ${e.keyCode}</h1>`
  }

})

