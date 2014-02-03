/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 
 */

function Game()
{
//probably this vector should be global
var laser = []; //Array that represents the lazers in the screen.
var player = new Player(); //The prayer :P


/**
 * functions to create initialize the game
*/ 
var create_screen = function(){};//create the screen based on the matrix's size.
var create_ets = function () {};//create the ets according to the number of ets passed through the initialization.
var start_game = function () {};// create the screen, the ETs (create_ets) and the gamer.


/**
 * functions to handle collisions
*/
var collisions = function(){};//See in with part of the matrix they are and verify if there is something inside it, if it's a player it will loose a life, if is an ET it will die. A laser can also colide with another laser and then both should be removed.

/**
 * Functions to control the game
*/

//Move functions
var move_ets = function(){};//It is needed to verify the boarders, in order to change the xspeed direction
var move_player = function(){};
var move_lasers = function(){}; //For each laser in the array we will walk with then (pixel by pixel)
var move = function(){}; //For every round, move the objects
//game over function
var game_status = function(){};//Verify if all the ETs have died, if the player lost all his lifes or if the ETs reached the earth.


/**Function responsible, respectively, for:
    * Verify if the game is over (game_status)
        * if so, change to a winner or looser screen
    * Moviments the objects
    * Check collisions
*/
var loop = function(){};

/**
 * class constructor
*/

this.startgame();
}
