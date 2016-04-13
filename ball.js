// ===========
// BALL STUFF
// ===========

function Ball(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

var g_ball = new Ball({
    cx: 450, cy: 515,
    radius: 10,
    xVel: -3, 
		yVel: -8,
    color1: 'red', color2: 'yellow'
});

var grd, rN;

Ball.prototype.update = function () {
    // Remember my previous position
    var prevX = this.cx;
    var prevY = this.cy;
    
    // Compute my provisional new position (barring collisions)
    var nextX = prevX + this.xVel;
    var nextY = prevY + this.yVel;

    // Bounce off the paddles
    if (g_paddle1.collidesWith(prevX, prevY, nextX, nextY, this.radius) )
    {
				var gpx = g_paddle1.cx
				if(nextX < gpx - 12) {
					if(this.xVel < 0) {
						if(this.xVel > -10) this.xVel -= 1.3; 
						if(this.xVel <= -4) this.yVel * 0.5;
					}
					else this.xVel *= -0.5;
				}
        else if(nextX > gpx + 12) {
					if(this.xVel > 0) {
						if(this.xVel < 10) this.xVel += 1.3; 
						if(this.xVel >= 4) this.yVel * 0.5;
					}
					else this.xVel *= -0.5;
				}

        if(this.yVel<20) this.yVel *= -1.015;
    }

		// Bounce off the bricks
    if (collideWhichBrick(allBricks[0],prevX, prevY, nextX, nextY, this.radius) ||
			collideWhichBrick(allBricks[1],prevX, prevY, nextX, nextY, this.radius) ||
			collideWhichBrick(allBricks[2],prevX, prevY, nextX, nextY, this.radius) ||
			collideWhichBrick(allBricks[3],prevX, prevY, nextX, nextY, this.radius) )
    {
				this.yVel *= -1;
        hitBrick.color= g_canvas.style.backgroundColor;
				hitBrick.active = false;
				updateScore();
    }

    // Bounce off top and bottom edges
    if (nextY < 0) 
			  this.yVel *= -1;
    
		if (nextY > g_canvas.height) {
			  this.reset();
				updateLives();
		}
    
    // Bounce off left and right edges
    if (nextX < 0 || nextX > g_canvas.width)    
			this.xVel *= -1;
    
    
    // Reset if we fall off the left or right edges
    // ...by more than some arbitrary `margin`
    var margin = 4 * this.radius;
    if (nextX < -margin || 
        nextX > g_canvas.width + margin) {
        this.reset();
    }

    this.cx += this.xVel;
    this.cy += this.yVel;
};

Ball.prototype.reset = function () {
    this.cx = 600;
    this.cy = 220;
    this.xVel = -3;
    this.yVel = 8;
};

Ball.prototype.render = function (ctx) {
    grd = ctx.createRadialGradient(this.cx, this.cy, this.radius/(this.cy/2), this.cx, this.cy, this.radius/1.1);
    	grd.addColorStop(0, this.color1);
	grd.addColorStop(1, this.color2);
    ctx.fillStyle = grd;
    fillCircle(ctx, this.cx, this.cy, this.radius);
};

function fillCircle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
}
