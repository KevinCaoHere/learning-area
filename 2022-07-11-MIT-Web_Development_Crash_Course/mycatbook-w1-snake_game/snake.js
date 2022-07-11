// sure data
let snake = [
    { x: 3, y: 5 },
    { x: 3, y: 4 },
    { x: 3, y: 3 }
];

const SNAKE_SPEED = 5;
const SANKE_EAT_FOOD = false;
const SNAKE_ON_BOUNDARY = false;
const SNAKE_EAT_ITSELF = false;

//usure data

function updateSnake() {
    snake.pop();

    let inputNewDirection = getInputDirection();

    let newSnakeBody = { ...snake[0] }; //copy the object
    newSnakeBody.x += inputNewDirection.x;
    newSnakeBody.y += inputNewDirection.y;
    snake.unshift(newSnakeBody);

    // new snake head = snake head + new direction
    // pop the last snake body
}

function snakeEatFood() {
    for (let i = 0; i < snake.length; i++) {
        if (food.x == snake[i].x && food.y == snake[i].y) {
            // SANKE_EAT_FOOD = true;
            return true;
        }
    }
}

function snakeGrow() {
    snake.push({ ...snake[snake.length - 1] });
}

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        const segment = snake[i];
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    }
}

function snakeOnBoundary() {
    if (
        snake[0].x < 0 ||
        snake[0].y < 0 ||
        snake[0].x > GRID_SIZE ||
        snake[0].y > GRID_SIZE
    ) {
        // SNAKE_ON_BOUNDARY = true;
        return true;
    }
}

function snakeEatItself() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            // SNAKE_EAT_ITSELF = true;
            return true;
        }
    }
    return false;
}
