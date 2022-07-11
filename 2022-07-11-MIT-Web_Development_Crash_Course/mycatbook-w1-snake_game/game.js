const gameBoard = document.getElementById("game-board");
const GAME_OVER = false;

// let newElement = document.createElement("div");
// newElement.classList.add("snake");
// newElement.style.gridRowStart = 3;
// newElement.style.gridColumnStart = 4;
// gameBoard.appendChild(newElement);

const main = () => {
    update(); //done
    draw(); //done
    isGameOver(); //done
    // demo();
};

let gameloop = setInterval(main, 1000 / SNAKE_SPEED); // start the game

function update() {
    gameBoard.innerHTML = ""; // before updating, clear the content of gameboard.
    updateSnake();
    updateFood();
}

function draw() {
    drawSnake();
    drawFood();
}

function isGameOver() {
    if (snakeOnBoundary() || snakeEatItself()) {
        // GAME_OVER = true;
        alert("GAME OVER!");
        clearInterval(gameloop);
    }
}

function demo() {
    console.log("(x: " + snake[0].x + ", y:" + snake[0].y + ")");
    console.log("snakeOnBoundary: " + snakeOnBoundary());
    console.log("snakeEatItself: " + snakeEatItself());
}
