
var grid;

function init() {
	"use strict";
	/*global Ruler, document, window*/

	var canvas = document.getElementById('ruler'),
		ruler;

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	ruler = new Ruler("ruler");

	ruler.render('#aaa', 'pixels', 100);

	window.onresize = function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;		
		ruler.render('#aaa', 'pixels', 100);
	}

	grid = new Grid('grid');
	grid.render("#ddd", 1, 10, 10);

	Selector('container');

	PanMe('grid');
}


window.onload = init;
