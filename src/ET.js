/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ET(velX, velY, xPosition, yPosition, leftCorner, rightConer)
{
    this.vx = velX; //velocity in pixels
    this.vy = velY; // velocity in pixels
    this.x = xPosition; //left conner
    this.y = yPosition; //upper conner
    this.size_x=100;
    this.size_y=25;
    // var sprite = image; //image
    this.alive = true;
    this.shooter = false;
    // var specie = normal;

    this.draw = function() {
        var ctx = document.getElementById('canvas').getContext('2d');

        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size_x,  this.size_y);
        ctx.fillStyle = 'green';
        ctx.fill();

    }; // draw the et in the screen
    this.shoot = function(laser) {
        laser.push(new laser());
    }; //randonize option that will shoot a laser. According to hte level this chance increase. It can return a laser
    this.move = function() {
        if ((this.x + this.vx) > leftCorner && (this.x + this.vx) < rightConer) //check the borders
            this.x = this.x + this.vx; // move et
        else {
            this.y = this.y + this.vy;  // change the line
            this.vx = this.vx * -1; // change the velocity
        }
    }; // walk with this ET.
    this.die = function() {
        this.alive = false;
    }; // when a shooter dies, the et right above it will become a shooter. also it will change the alive status of this. Death animation

}
;
