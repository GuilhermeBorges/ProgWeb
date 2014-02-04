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
var lasers = []; //Array that represents the lazers in the screen.
var player = new Player(); //The prayer :P
var ets = [];//All the ets
var board = board_parameter//the board passed by the funcitions input
var n_ets = 0;//number of alive ets
var final_position = 10;// Y position to check if the ets reached the earth
/**
 * functions to create initialize the game
*/ 
var create_screen = function(){

};//create the screen based on the matrix's size.
var create_ets = function (et_row , et_per_row) {
	var posX = 1;//start drawing position
	var posY = 1;//start drawing position

	for (var i = 0; i < et_row; i++) {
		ets[i] = new Array(et_per_row);
		for (var j = 0; j < et_per_row; j++) {
			ets[i][j] = new ET(); //creating the et in that position
		}
	}

	n_ets = et_row * et_per_row; //variable used to control the number of alive ets

};//create the ets according to the number of ets passed through the initialization.

var start_game = function () {
	create_screen();
	create_ets();
};// create the screen, the ETs (create_ets) and the gamer.

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

//It is needed to verify the boarders, in order to change the xspeed direction
var move_ets = function(){};
var move_player = function(){};
var move_lasers = function(){}; //For each laser in the array we will walk with then (pixel by pixel)
var move = function(){}; //For every round, move the objects
//game over function

//Verify if any of the alives ets reached the earth, return true if so
var verify_ets_end = function(ets, final_position){};
var game_status = function(){
	if(player.lives == 0)
		return 2;//loose
	if(n_ets == 0)
		return 1;//win
	if(verify_ets_end(ets, final_position))
		return 2;//loose, ets arrived on the earth
	return -1;//Game has not ended

};//Verify if all the ETs have died, if the player lost all his lifes or if the ETs reached the earth. 1 for win, 2 for loose, -1 for not over.

//Update the screen, drawing everything
var update = function(){
	//drawing the ets
	for (var i = 0; i < ets.length; i++) {
		for (var j = 0; j < ets[i].length; j++) {
			if(ets[i][j].alive)
			{
				ets[i][j].draw();//draw the ET
			}
		}
	}

	//drawing the player
	if(player.alive)
		{
			player.draw();
		}
	else
		{
			//player death animation
		}

	//drawing the lasers
	for (var i = 0; i < lasers.length; i++) {
		lasers[i].draw();
	};

};

    /**Function responsible, respectively, for:
     * Verify if the game is over (game_status)
     * if so, change to a winner or looser screen
     * Moviments the objects
     * Check collisions
     */
    var loop = function() {
    };
/**Function responsible, respectively, for:
    * Verify if the game is over (game_status)
        * if so, change to a winner or looser screen
    * Moviments the objects
    * Check collisions
*/
var loop = function(){
	if(game_status())//if not ended
		{
			move();
			collisions();
			update();//Update the screen, drawing everything
		}
	else
		if(game_status() == 1)
			{
				//You won.
			}
		else
			{
				//You loose.
			}

};

    /**
     * class constructor
     */

    this.startgame();
startgame();

}
