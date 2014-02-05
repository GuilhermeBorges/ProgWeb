/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Game(screenSizeX, screenSizeY, lives)
{
    var ctx = document.getElementById('canvas').getContext('2d');


//probably this vector should be global
    this.laser = []; //Array that represents the lasers in the screen.
    this.player; //The prayer :P
    this.ets = []; //ets
    this.et_row = 5;// number of ets in each row
    this.et_per_row = 5; // number of ets per row
    this.et_left = [0, 0];// auxililiar variable to help the et flows
    this.et_right = [this.et_row, this.et_per_row];// auxililiar variable to help the et flows
    /**
     * functions to create initialize the game
     */
    this.create_screen = function() {


    };//create the screen based on the matrix's size.
    this.create_ets = function() {
        for (var i = 0; i < this.et_row; i++)
            this.ets[i] = new Array(this.et_per_row);
        for (var i = 0; i < this.et_row; i++)
            for (var j = 0; j < this.et_per_row; j++)
//                this.ets[i][j] = new ET(5, 20, j * 20, i * 150, 0, 500);//considerating that every et has dimension of 20x10 pixels
                this.ets[i][j] = new ET(15, 20, j * 150, i * 50, 0, 1150);//considerating that every et has dimension of 20x10 pixels
    };//create the ets according to the number of ets passed through the initialization.
    this.start_game = function() {
        this.create_ets();

//        this.player = new Player();
        var self = this;
        this.intervalID = setInterval(
                function() {
                    self.loop();
                },
                30);
    };// create the screen, the ETs (create_ets) and the player.


    /**
     * 
     * functions to handle collisions
     */
    this.collisions = function() {
    };//See in with part of the matrix they are and verify if there is something inside it, if it's a player it will loose a life, if is an ET it will die. A laser can also colide with another laser and then both should be removed.

    /**
     * Functions to control the game
     */

//Move functions
    this.muda_vel_ets = function() {
        for (var i = 0; i < this.et_row; i++)
            for (var j = 0; j < this.et_per_row; j++) {
                this.ets[i][j].vx *= -1;
                this.ets[i][j].y = this.ets[i][j].y + this.ets[i][j].vy;
            }
    }
    ;
    this.move_ets = function() {
        var aux = false;


        for (var i = 0; i < this.et_row; i++)
            for (var j = 0; j < this.et_per_row; j++)
                if(this.ets[i][j].move())
                {
                    aux = true;
                }
            
            
       if(aux)
           this.muda_vel_ets();
//        for (var i = 0; i < this.et_row; i++)
//            for (var j = 0; j < this.et_per_row; j++)
//                if (this.ets[i][j].move())
//                {
//                    if(i=== this.et_right[0] && j === this.et_right[1])
//                    {
//                        for(var k = i+1; k < this.et_row;k++)
//                            for(var l = j+1; l < this.et_per_row; l++)
//                                this.ets[k][j].move();
//                    }
//                    
//                    if(i=== this.et_left[0] && j === this.et_left[1])
//                    {
//                        for(var k = i+1; k < this.et_row;k++)
//                            for(var l = j+1; l < this.et_per_row; l++)
//                                this.ets[k][j].move();
//                    }
//                    
//                    if (this.ets[i][j].vx < 0) {
//                       this.ets[i][j].x -= this.ets[i][j].vx;
//                    }
//                    this.muda_vel_ets();
//                }



    }
    ;//It is needed to verify the boarders, in order to change the xspeed direction
//    this.move_ets = function() {
//
//        for (var i = 0; i < this.et_row; i++)
//            for (var j = 0; j < this.et_per_row; j++)
//                if (this.ets[i][j].move() &&
//                        ((i === this.et_right[0] && j === this.et_right[1])/*primeiro a direita*/ ||
//                                (i === this.et_left[0] && j === this.et_left[1]))) {
//
//                    if ((i === this.et_left[0] && j === this.et_left[1]))
//                        this.ets[i][j].x -= this.ets[i][j].vx;
//                    for (var i = 0; i < this.et_row; i++)
//                        for (var j = 0; j < this.et_per_row; j++) {
//                            this.ets[i][j].vx *= -1;
//                            this.ets[i][j].y = this.ets[i][j].y + this.ets[i][j].vy;
//                        }
////                    break;
//                }
//
//
//    };//It is needed to verify the boarders, in order to change the xspeed direction
//    var move_player = function() {
//        this.player.move();
//    };
//    var move_lasers = function() {
//        for (var i = 0; i < this.laser.length; i++)
//            this.laser.move();
//    }; //For each laser in the array we will walk with then (pixel by pixel)
//    var move = function() {
//    }; //For every round, move the objects
////game over function
//    var game_status = function() {
//        for (var i = 0; i < et_row; i++)
//                if(this.ets[i].length)
//                            //end game
//                if(!this.player.alive)
//                            //end game
//    };//Verify if all the ETs have died, if the player lost all his lifes or if the ETs reached the earth.


    /**Function responsible, respectively, for:
     * Verify if the game is over (game_status)
     * if so, change to a winner or looser screen
     * Moviments the objects
     * Check collisions
     */

//Draw all the game objects    
    this.draw_game = function() {

        //Drawing the ets
        ctx.rect(0, 0, 1150, 1150);
        ctx.fillStyle = 'black';
        ctx.fill();

//        alert("a");
        for (var i = 0; i < this.et_row; i++)
            for (var j = 0; j < this.et_per_row; j++) {
                this.ets[i][j].draw();
//            alert(j);    
            }
//        alert("b");
    };


    this.loop = function() {
        this.move_ets();
        this.draw_game();
//        alert("loop");

    };

    /**
     * class constructor
     */

}
;
