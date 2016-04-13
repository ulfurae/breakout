// ================
// VARIABLES STUFF
// ================

var g_canvas = document.getElementById("mainScreen");
var g_ctx = g_canvas.getContext("2d");
var livesTxt = document.getElementById("txt1");
var hitTxt = document.getElementById("txt2");
var startBtn = document.getElementById("btnStart");

// background style
g_canvas.style.background = 'black';

// livesTxt style
livesTxt.style.fontFamily = 'Helvetica';
livesTxt.style.fontSize = "40px";
livesTxt.style.fontWeight = 'bold';
livesTxt.style.color = 'white';

// hitTxt style
hitTxt.style.fontFamily = 'Helvetica';
hitTxt.style.fontSize = "60px";
hitTxt.style.fontWeight = 'bold';
hitTxt.style.color = 'cyan';

// startBtn style
startBtn.style.fontFamily = 'Helvetica';
startBtn.style.fontSize = "35px";
startBtn.style.color = 'white';
startBtn.style.background = 'green';
startBtn.style.border = '0';
startBtn.style.outline = '0';
startBtn.style.borderRadius = '10px';
