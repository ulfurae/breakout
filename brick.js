// ============
// BRICK STUFF
// ============

function Brick(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

Brick.prototype.halfWidth = 39;
Brick.prototype.halfHeight = 10;
Brick.prototype.color = 'pink';
Brick.prototype.active = true;

Brick.prototype.build = function (ctx) {
    
    ctx.fillStyle = this.color;
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);
};

Brick.prototype.collidesWithY = function (prevY, nextY, r) {

    var paddleEdge = this.cy;
		var bos = r/2;
    // Check Y coords
    if ((nextY - r < paddleEdge+bos && prevY - r >= paddleEdge+bos) ||
        (nextY + r > paddleEdge-bos && prevY + r <= paddleEdge-bos)) {

						hitBrick = this;
            return true;
        
    }
    // It's a miss!
    return false;
};

var hitBrick;
function collideWhichBrick(bricks, prevX, prevY, nextX, nextY, r) {

		var brick = new Brick();
		var newX = (prevX+nextX)/2;
		var offset = r;
		var i = 0;
	  while (i < bricks.length) {
			if (newX+offset >  i*80 && newX-offset <=  i*80+80) {
				if(bricks[i].active) {
					brick = bricks[i];
					break;
				}
			}
			i++;
		}
		
		if (brick.collidesWithY(prevY, nextY, r) && brick.active) 
			return true;

		return false;
}

function buildBricks(ctx, bricks, yPos) {

		var i = 0;
		while(i < bricks.length) {
				
				bricks[i].cx = (i*80) + 40;
				bricks[i].cy = 80 + yPos;
				bricks[i].build(g_ctx);
				i++;
		}
}
