// ===========
// MAIN STUFF
// ===========

var allBricks = new Array(4);

function setupGame() {

		var g_bricks = new Array(12); 
		var g_bricks2 = new Array(12);
		var g_bricks3 = new Array(12); 
		var g_bricks4 = new Array(12);

		var i = 0;
		while(i < g_bricks.length) {
			g_bricks[i] = new Brick();
			g_bricks2[i] = new Brick( { color: 'green' });
			g_bricks3[i] = new Brick( { color: 'grey' });
			g_bricks4[i] = new Brick( { color: 'yellow' });
			i++;
		}

		allBricks[0] = g_bricks;
		allBricks[1] = g_bricks2;
		allBricks[2] = g_bricks3;
		allBricks[3] = g_bricks4;
		
		updateSimulation();
    renderSimulation(g_ctx);

}

setupGame();

startBtn.onclick = startGame;

var intervalID;

function startGame() {

	  startBtn.hidden = true;
		g_canvas.style.cursor = 'none';
		hitScore = -1;
    updateScore();
		lives = 6;
    updateLives();
		hitTxt.innerHTML = '';

		// Start render and update
    intervalID = window.setInterval(mainIter, 16.666);
}

function mainIter() {
    if (!requestedQuit()) {
        updateSimulation();
        renderSimulation(g_ctx);
    } else {
        window.clearInterval(intervalID);
    }
        
}

var lives, hitScore;

function updateLives() {
    
	lives --;
	livesTxt.innerHTML = 'lives: ' + lives.toString();

 	if(lives==0) gameEnd('lose');

}

function updateScore() {

		hitScore++;
		//hitTxt.innerHTML = hitScore.toString();

		if(hitScore==48) gameEnd('win');
}

function gameEnd(status) {

		if (status=='win') {
				hitTxt.innerHTML = 'Wohoo! You won!'
				startBtn.innerHTML = 'PLAY AGAIN'
		}
		else if (status=='lose') {
				hitTxt.innerHTML = 'Oh no! You lost..'
				startBtn.innerHTML = 'TRY AGAIN'
		}

		startBtn.onclick = resetGame;
		startBtn.hidden = false;

		
		g_canvas.style.cursor = 'auto';
		
		window.clearInterval(intervalID);
}

function resetGame() {

		setupGame();
		startGame();
		g_ball.reset(); 
}

