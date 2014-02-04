/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Player(velX, xPosition, yPosition, leftCorner, rightConer, nlives)
{
    this.vx = velx; //velocity in pixels
    this.x = xposition; //left conner
    this.y = yposition; //upper conner
    //this.sprite = image; //image
    this.alive = true;
    this.lives = nlives;// number of lives
    this.points = 0;

    this.draw = function() {
    }; // draw the player
    this.shoot = function() {
           laser.push(new laser());
    }; //it will shoot everytime the player press space
    this.move = function() {
        if ("left") {
            this.x = this.x * vx;
        }
        if ("right") {
            this.x = this.vx * (-1 * this.vx);
        }
        if("space"){
            this.shoot();   
        }
    }; // walk with the player (just in x plane)
    this.die = function() {
    }; // when a player is shooted it loses a life and run the death animation, then the reanimation animation.
}


