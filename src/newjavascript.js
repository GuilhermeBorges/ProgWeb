
function init() {
    var l = [];

//    l[0]="a";
//    l[1]="a";
//    l[2]="a";
//    l[3]="a";
//    for(var i=0;i < l.length;i++)
//        console.out(l[i]);


//    var ete = new ET(1,2,3,4,5);
//    ete.draw();
    var g = new Game(2, 3, 5);
    g.start_game();
    setInterval(g.loop,200);
    //responsavel por inicializar o jogo com o tamanho definido
//
//    var board = []; // matrix creates the board game. This matrix cover the entire screen
//    var boardWidth; // matrix size
//    var boardHeight;
//    var lives;


////creating the
//    for (var i = 0; i < et_row; i++)
//        board[i] = new array(et_per_row);
//
//
//    //construct screen (board)
//    var g = Game();
//    /*
//     * Game loop will be responsible for verify if the game over, collisoins and movement the objects.
//     * Thus, we are calling the game loop every 20 milliseconds to create a turn in the game.
//     * Each 5 turns the ETs moves.
//     * Each 2 turns the laser moves.
//     * Each 1 turn the player moves.
//     * render the screen
//     * obs: All the ETs will move according to the matrix position, since they walk in restrict way.
//     * However the lasers will walk in pixels, being the game responsable for verify if they have collided with something (player or an ET).
//     */
//
//    setInterval(g.loop(), 20); //The end game will be treated inside the loop, redirecting the screen to an gameover screen :)
//



}



