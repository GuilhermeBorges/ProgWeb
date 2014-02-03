/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.

  
 */

function ET() 
{
    var vx = velx; //velocity in pixels
    var vy = vely; // velocity in pixels
    var x = xposition; //left conner
    var y = yposition; //upper conner
    var sprite = image; //image
    var alive = true;
    var shooter = false;
    var specie = normal;
    
    var draw = function(){}; // draw the et in the screen
    var shoot = function(){}; //randonize option that will shoot a laser. According to hte level this chance increase. It can return a laser
    var move = function(){}; // walk with this ET.
    var die = function(){}; // when a shooter dies, the et right above it will become a shooter. also it will change the alive status of this. Death animation

}
