// ==================
// UPDATE SIMULATION
// ==================

function updateSimulation() {
    if (shouldSkipUpdate()) return;

    g_ball.update();
    
    g_paddle1.update();
}


// ==================
// RENDER SIMULATION
// ==================

function renderSimulation(ctx) {
    clearCanvas(ctx);
    
		buildBricks(g_ctx, allBricks[0], 0);
		buildBricks(g_ctx, allBricks[1], 22);
		buildBricks(g_ctx, allBricks[2], 44);
		buildBricks(g_ctx, allBricks[3], 66);

    g_ball.render(ctx);
    
    g_paddle1.render(ctx);
}

function clearCanvas(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
