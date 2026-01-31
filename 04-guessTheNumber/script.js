let randomNumber = parseInt(Math.random()*100+1)
const Input = document.querySelector('#guessField')
const Submit = document.querySelector('#subt')
const prevGuess = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let LastGuess = []
let guessCount = 1
playGame = true
const p=document.createElement('p')

if(playGame){
  Submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess=parseInt(Input.value)
    validateGuess(guess)
  })
}

const validateGuess=(guess)=>{
  if (isNaN(guess)) {
    alert('enter a valid Number')
  }else if(guess<1){
    alert('The number is less than 1, Enter the number between 1 - 100.')
  }else if(guess>100){
    alert('The number is greater than 100, Enter the number between 1 - 100.')
  }else{
    LastGuess.push(guess)
    if(guessCount===11){
      displayGuess(guess)
      displayMessage(`💔 Game Over the number is ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

const checkGuess=(guess)=>{
  if(guess===randomNumber){
    displayMessage(`🎊Congrats, You guessed it right 🎉`)
  }else if(guess<randomNumber){
    displayMessage(`Your entered number is too low👇`)
  }else if(guess>randomNumber){
    displayMessage(`Your entered number is too high👆`)
  }
}

const displayGuess=(guess)=>{
  Input.value=''
  prevGuess.innerHTML+=`${guess}, `
  guessCount++
  remaining.innerHTML=`${11-guessCount}`
}

const displayMessage=(message)=>{
  lowOrHigh.innerHTML=`<h2>${message}</h2>`
}

const endGame=()=>{
  Input.value=''
  Input.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id='newGame'>Start New Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}

const newGame = () =>{ 
  const NewGamebtn=document.getElementById('newGame')
  NewGamebtn.addEventListener('click',()=>{
    randomNumber = parseInt(Math.random()*100+1)
    LastGuess=[]
    guessCount=1
    prevGuess.innerHTML=``
    remaining.innerHTML=`${11-guessCount}`
    Input.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
  })

}