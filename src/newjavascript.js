
function init() {
    //responsavel por inicializar o jogo com o tamanho definido
   
    var board = []; // matrix creates the board game. This matrix cover the entire screen
    var boardWidth; // matrix size
    var boardHeight;
    //construct screen (board)
    var g = Game(board, lives, et_row, et_per_row);
    /*
     * Game loop will be responsible for verify if the game over, collisoins and movement the objects.
     * Thus, we are calling the game loop every 20 milliseconds to create a turn in the game.
     * Each 5 turns the ETs moves.
     * Each 2 turns the laser moves.
     * Each 1 turn the player moves.
     * render the screen
     * obs: All the ETs will move according to the matrix position, since they walk in restrict way.
     * However the lasers will walk in pixels, being the game responsable for verify if they have collided with something (player or an ET).
     */
    
    setInterval(g.loop(),20); //The end game will be treated inside the loop, redirecting the screen to an gameover screen :)
    
    
    var ctx = document.getElementById('canvas').getContext('2d');

    for (var i = 0; i < boardHeight; i++) {
        matrix[i] = new Array(boardWidth);
    }


}



