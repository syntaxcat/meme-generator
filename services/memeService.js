'use strict';

var gMeme;

var gImgs = [
	{ id: 1, url: 'images/1.jpg', keywords: [ 'funny' ] },
	{ id: 2, url: 'images/2.jpg', keywords: [ 'funny' ] },
	{ id: 3, url: 'images/3.jpg', keywords: [ 'funny' ] },
	{ id: 4, url: 'images/4.jpg', keywords: [ 'funny' ] },
	{ id: 5, url: 'images/5.jpg', keywords: [ 'funny' ] },
	{ id: 6, url: 'images/6.jpg', keywords: [ 'funny' ] },
	{ id: 7, url: 'images/7.jpg', keywords: [ 'funny' ] },
	{ id: 8, url: 'images/8.jpg', keywords: [ 'funny' ] },
	{ id: 9, url: 'images/9.jpg', keywords: [ 'funny' ] },
	{ id: 10, url: 'images/10.jpg', keywords: [ 'funny' ] },
	{ id: 11, url: 'images/11.jpg', keywords: [ 'funny' ] },
	{ id: 12, url: 'images/12.jpg', keywords: [ 'funny' ] },
	{ id: 13, url: 'images/13.jpg', keywords: [ 'funny' ] },
	{ id: 14, url: 'images/14.jpg', keywords: [ 'funny' ] },
	{ id: 15, url: 'images/15.jpg', keywords: [ 'funny' ] },
	{ id: 16, url: 'images/16.jpg', keywords: [ 'funny' ] },
	{ id: 17, url: 'images/17.jpg', keywords: [ 'funny' ] },
	{ id: 18, url: 'images/18.jpg', keywords: [ 'funny' ] }
];

function getImgs() {
	return gImgs;
}

function getMeme() {
	return gMeme;
}

function setLineTxt(newValue) {
	gMeme.lines[gMeme.selectedLineIdx].txt = newValue;
}

function setColor(color) {
	gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function setFontSize(diff) {
	gMeme.lines[gMeme.selectedLineIdx].size += diff;
}

function createLine() {
	let y;
	if (gMeme.lines.length >= 2) {
		y = 240;
	} else {
		y = 440;
	}
	gMeme.lines.push({
		txt: '',
		size: 40,
		color: '#ffffff',
		y: y,
		x: 20,
		font: 'IMPACT'
	});
	gMeme.selectedLineIdx++;
}

function deleteLine() {
	if (gMeme.lines.length === 1) {
		getCurrLine().txt = '';
	} else {
		gMeme.lines.splice(gMeme.selectedLineIdx, 1);
		gMeme.selectedLineIdx = 0;
	}
}

function switchLine() {
	if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
		gMeme.selectedLineIdx = 0;
	} else {
		gMeme.selectedLineIdx++;
	}
}

function setMeme(imgId) {
	gMeme = {
		selectedImgId: imgId,
		selectedLineIdx: 0,
		lines: [
			{
				txt: '',
				size: 40,
				color: '#ffffff',
				y: 20,
				x: 20,
				font: 'IMPACT'
			}
		]
	};
}

function getCurrLine() {
	return gMeme.lines[gMeme.selectedLineIdx];
}

function setTextAlign(align, textWidth) {
	let x = 0;

	if (align === 'left') {
		x = 20;
	} else if (align === 'right') {
		x = 500 - textWidth - 20;
	} else {
		x = 250 - textWidth / 2;
	}

	gMeme.lines[gMeme.selectedLineIdx].x = x;
}

function moveLineDown() {
	gMeme.lines[gMeme.selectedLineIdx].y -= 20;
}

function moveLineUp() {
	gMeme.lines[gMeme.selectedLineIdx].y += 20;
}

function changeFontFamily(font) {
	gMeme.lines[gMeme.selectedLineIdx].font = font;
}

function moveLine(dx, dy) {
	var currLine = gMeme.lines[gMeme.selectedLineIdx];
	currLine.x += dx;
	currLine.y += dy;
}
