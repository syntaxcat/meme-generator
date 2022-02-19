'use strict';

const gTouchEvs = [ 'touchstart', 'touchmove', 'touchend' ];

var gStartPos;
var gIsDrag = false;

function addMouseListeners() {
	canvas.addEventListener('mousemove', onMove);
	canvas.addEventListener('mousedown', onDown);
	canvas.addEventListener('mouseup', onUp);
}

function addTouchListeners() {
	canvas.addEventListener('touchmove', onMove);
	canvas.addEventListener('touchstart', onDown);
	canvas.addEventListener('touchend', onUp);
}

function onDown(ev) {
	ev.preventDefault();
	const pos = getEvPos(ev);
	gIsDrag = true;
	gStartPos = pos;
	canvas.style.cursor = 'grabbing';
}

function onMove(ev) {
	if (gIsDrag) {
		const pos = getEvPos(ev);
		const dx = pos.x - gStartPos.x;
		const dy = pos.y - gStartPos.y;
		moveLine(dx, dy);
		gStartPos = pos;
		renderMeme();
	}
}

function onUp() {
	gIsDrag = false;
	canvas.style.cursor = 'grab';
}

function getEvPos(ev) {
	var pos = {
		// x: ev.offsetX,
		y: ev.offsetY
	};
	if (gTouchEvs.includes(ev.type)) {
		ev.preventDefault();
		ev = ev.changedTouches[0];
		pos = {
			x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
			y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
		};
	}
	return pos;
}
