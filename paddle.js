// =============
// PADDLE STUFF
// =============

function Paddle(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

Paddle.prototype.halfWidth = 50;
Paddle.prototype.halfHeight = 10;
Paddle.prototype.color = 'black';

Paddle.prototype.update = function () {
    if (g_keys[this.GO_UP]) {
        if(this.cy > 0 + this.halfHeight)
        	this.cy -= 8;
    } else if (g_keys[this.GO_DOWN]) {
        if(this.cy < g_canvas.height - this.halfHeight)
        	this.cy += 8;
    } 

};

Paddle.prototype.render = function (ctx) {
    
		grd=ctx.createLinearGradient(this.cx-5,this.cx-5,this.halfWidth+this.cx,this.cx-5);
		grd.addColorStop(0,"pink");
		grd.addColorStop(1,"purple");
    ctx.fillStyle = grd;
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);
};

Paddle.prototype.collidesWith = function (prevX, prevY, nextX, nextY, r) {

    var paddleEdge = this.cy-r;
    // Check Y coords
    if ((nextY - r < paddleEdge && prevY - r >= paddleEdge) ||
        (nextY + r > paddleEdge && prevY + r <= paddleEdge)) {
        // Check X coords
        if (nextX + r >= this.cx - this.halfWidth &&
            nextX - r <= this.cx + this.halfWidth) {
            // It's a hit!
            return true;
        }
    }
    // It's a miss!
    return false;
};


var g_paddle1 = new Paddle({
    cx : 450,
    cy : 530,

    name: 'p1',
    color: 'green'
});


