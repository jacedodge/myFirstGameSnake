import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection, snakeBody} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

//Game Timer and main setup
function main (currentTime) {
if (gameOver){
    alert(snakeBody.length)
   if (confirm('Press okay to restart')) {
       window.location ='/'
   }
   return
}

window.requestAnimationFrame(main)
const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 
if (secondsSinceLastRender < 1 / snakeSpeed) return
lastRenderTime = currentTime

update()
draw()

}

//Kicks off the function
window.requestAnimationFrame(main)

//Function that handles positioning
function update() {
updateSnake()
updateFood()
checkDeath()
}

//Function that handles drawing the sprites
function draw() {
gameBoard.innerHTML = ''
drawSnake(gameBoard)
drawFood(gameBoard)
}

//Game over setup
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}