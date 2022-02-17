'use strict';

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 };

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

var gMeme = {
	selectedImgId: 1,
	selectedLineIdx: 0,
	lines: [
		{
			txt: '',
			size: 20,
			align: 'left',
			color: '#168aad'
		}
	]
};

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
	//TODO:MAX-SIZE and MIN-SIZE ALLOWED
	// if (gMeme.lines[gMeme.selectedLineIdx].size === 50) return;
	// if (gMeme.lines[gMeme.selectedLineIdx].size === 10) return;
	gMeme.lines[gMeme.selectedLineIdx].size += diff;
	console.log(gMeme.lines[gMeme.selectedLineIdx].size);
}

function createLine() {
	gMeme.selectedLineIdx = 1;
	gMeme.lines.push({
		txt: '',
		size: 20,
		align: 'left',
		color: '#168aad'
	});
}

function deleteLine() {
	if (gMeme.lines.length === 1) {
		getCurrLine().txt = '';
	} else {
		gMeme.lines.splice(gMeme.selectedLineIdx, 1);
	}
}

function switchLine() {
	gMeme.selectedLineIdx = gMeme.selectedLineIdx === 0 ? 1 : 0;
}

function setMeme(imgId) {
	gMeme.selectedImgId = imgId;
}

function getCurrLine() {
	return gMeme.lines[gMeme.selectedLineIdx];
}

function getEvPos(ev) {
	var pos = {
		x: ev.offsetX,
		y: ev.offsetY
	};
	// if (gTouchEvs.includes(ev.type)) {
	// 	ev.preventDefault();
	// 	ev = ev.changedTouches[0];
	// 	pos = {
	// 		x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
	// 		y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
	// 	};
	// }
	return pos;
}
