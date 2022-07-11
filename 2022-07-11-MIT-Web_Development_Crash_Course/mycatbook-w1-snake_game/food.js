let food = { x: 6, y: 7 };

function updateFood() {
    if (snakeEatFood()) {
        updateFoodPosition();
        snakeGrow();
    }
}

function drawFood() {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement); 
}
