/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Game(screenSizeX, screenSizeY, lives)
{
//probably this vector should be global
    this.laser = []; //Array that represents the lasers in the screen.
    this.player; //The prayer :P
    this.ets = []; //ets
    this.et_row;// number of ets in each row
    this.et_per_row; // number of ets per row
    /**
     * functions to create initialize the game
     */
    this.create_screen = function() {


    };//create the screen based on the matrix's size.
    this.create_ets = function() {
        for (var i = 0; i < et_row; i++)
            ets[i] = new array(et_per_row);
        for (var i = 0; i < et_row; i++)
            for (var j = 0; j < et_per_row; j++)
                ets[i][j] = new ET(velX, velY, j * 25, i * 15);//considerating that every et has dimension of 20x10 pixels
    };//create the ets according to the number of ets passed through the initialization.
    this.start_game = function() {
        create_ets();

        this.player = new Player();

        setInterval(Game.loop, 30);
    };// create the screen, the ETs (create_ets) and the player.


    /**
     * 
     * functions to handle collisions
     */
    var collisions = function() {
    };//See in with part of the matrix they are and verify if there is something inside it, if it's a player it will loose a life, if is an ET it will die. A laser can also colide with another laser and then both should be removed.

    /**
     * Functions to control the game
     */

//Move functions
    var move_ets = function() {
        for (var i = 0; i < et_row; i++)
            for (var j = 0; j < et_per_row; j++)
                ets[i][j].move();

    };//It is needed to verify the boarders, in order to change the xspeed direction
    var move_player = function() {
        this.player.move();
    };
    var move_lasers = function() {
        for (var i = 0; i < this.laser.length; i++)
            this.laser.move();
    }; //For each laser in the array we will walk with then (pixel by pixel)
    var move = function() {
    }; //For every round, move the objects
//game over function
    var game_status = function() {
        for (var i = 0; i < et_row; i++)
                if(this.ets[i].length)
                            //end game
                if(!this.player.alive)
                            //end game
    };//Verify if all the ETs have died, if the player lost all his lifes or if the ETs reached the earth.


    /**Function responsible, respectively, for:
     * Verify if the game is over (game_status)
     * if so, change to a winner or looser screen
     * Moviments the objects
     * Check collisions
     */
    var loop = function() {
    };

    /**
     * class constructor
     */

    this.startgame();
}
