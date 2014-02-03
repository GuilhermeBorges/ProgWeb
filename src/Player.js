/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Player() 
{
    var vx = velx; //velocity in pixels
    var x = xposition; //left conner
    var y = yposition; //upper conner
    var sprite = image; //image
    var alive = true;
    var lives = nlives;
    var points = 0;
    
    var draw = function(){}; // draw the player
    var shoot = function(){}; //it will shoot everytime the player press space
    var move = function(){}; // walk with the player (just in x plane)
    var die = function(){}; // when a player is shooted it loses a life and run the death animation, then the reanimation animation.
}


