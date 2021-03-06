// ===============
// EVENTS & STUFF
// ===============

var g_keys = [];

function handleKeydown(evt) {
    g_keys[evt.keyCode] = true;
}

function handleKeyup(evt) {
    g_keys[evt.keyCode] = false;
}

document.addEventListener('mousemove', function(e) {

    	g_paddle1.cx = e.clientX;
});

// Inspects, and then clears, a key's state
// This allows a keypress to be "one-shot" e.g. for toggles
// ..until the auto-repeat kicks in, that is.
function eatKey(keyCode) {
    var isDown = g_keys[keyCode];
    g_keys[keyCode] = false;
    return isDown;
}

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);

var KEY_BACKGROUND = 'B'.charCodeAt(0);

var KEY_PAUSE = 'P'.charCodeAt(0);
var KEY_STEP  = 'O'.charCodeAt(0);
var g_isUpdatePaused = false;

function shouldSkipUpdate() {
    if (eatKey(KEY_PAUSE)) 
        g_isUpdatePaused = !g_isUpdatePaused;
    
		if (eatKey(KEY_BACKGROUND)) 
        changeBackground();

    return g_isUpdatePaused && !eatKey(KEY_STEP);    
}

var nc = 0;

// change background color
function changeBackground() {

		var nColor;
		if (nc==0) nColor = 'blue';
		if (nc==1) nColor = 'orange';
		if (nc==2) nColor = 'brown';
		if (nc==3) nColor = 'black';
		nc++;
		if(nc==4) nc=0;
		
		g_canvas.style.backgroundColor = nColor;
		var i = 0; var k;
		while(i < allBricks.length) {	
				k = 0;
				while(k < allBricks[i].length) {
			
						if(allBricks[i][k].active==false)
								allBricks[i][k].color = nColor;
						k++;
				} 
				i++;
		}
}

// Simple voluntary quit mechanism
var KEY_QUIT = 'Q'.charCodeAt(0);
function requestedQuit() {
    return g_keys[KEY_QUIT];
}
