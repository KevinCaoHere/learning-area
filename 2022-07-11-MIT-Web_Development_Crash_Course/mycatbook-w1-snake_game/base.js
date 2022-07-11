let GRID_SIZE = 21;

function updateFoodPosition() {
    food.x = Math.floor(Math.random() * GRID_SIZE + 1);
    food.y = Math.floor(Math.random() * GRID_SIZE + 1);
}

