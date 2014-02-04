/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Laser(velY, xPosition, yPosition)
{
    this.vY = velY; // velocity in pixels
    this.x = xPosition; //left conner
    this.y = yPosition; //upper conner
    //  this.sprite = image; //image
    this.alive = true;

    this.draw = function() {
    }; // draw the shoot in the screen
    this.move = function() {
        this.y = this.y * this.vY;
    }; // walk with this laser.
    this.die = function() {
        this.alive = false;
    }; //Animiation when dies, remove it from the list
}