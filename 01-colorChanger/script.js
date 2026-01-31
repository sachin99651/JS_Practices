const btn = document.querySelectorAll('.button')
const body = document.querySelector('body')

btn.forEach((button)=>{
  button.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id; 
});
})