'use strict';

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 };

// var gImgs = [];
// var gImgId = 0;

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
	{ id: 10, url: 'images/1.jpg', keywords: [ 'funny' ] },
	{ id: 11, url: 'images/1.jpg', keywords: [ 'funny' ] },
	{ id: 12, url: 'images/1.jpg', keywords: [ 'funny' ] },
	{ id: 13, url: 'images/1.jpg', keywords: [ 'funny' ] },
	{ id: 14, url: 'images/1.jpg', keywords: [ 'funny' ] },
	{ id: 15, url: 'images/1.jpg', keywords: [ 'funny' ] },
	{ id: 16, url: 'images/1.jpg', keywords: [ 'funny' ] },
	{ id: 17, url: 'images/1.jpg', keywords: [ 'funny' ] },
	{ id: 18, url: 'images/1.jpg', keywords: [ 'funny' ] }
];

var gMeme = {
	selectedImgId: 1,
	selectedLineIdx: 0,
	lines: [
		{
			txt: '',
			size: 20,
			align: 'left',
			color: 'red'
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
	getMeme().lines[0].txt = newValue;
}

function setColor(color) {
	gMeme.lines[0].color = color;
	const memeLine = gMeme.lines[gMeme.selectedLineIdx];
	memeLine.color = color;
}

function setFontSize(diff) {
	gMeme.lines[0].size += diff;
	const memeLine = gMeme.lines[gMeme.selectedLineIdx];
	memeLine.size += diff;
	console.log(gMeme.lines[0].size);
}

function switchLine() {
	gMeme.selectedLineIdx = gMeme.selectedLineIdx === 0 ? 1 : 0;
}

function setMeme(imgId) {
	gMeme.selectedImgId = imgId;
}

function createLine() {
	gMeme.lines.push({
		txt: 'I sometimes eat Falafel',
		size: 20,
		align: 'left',
		color: 'red',
		x: 50,
		y: 150
	});
}

function switchLine() {
	gMeme.selectedLineIdx = gMeme.selectedLineIdx === 0 ? 1 : 0;
}

// function getGImgs() {
// 	return gImgs;
// }

// function createGImgs(length) {
// 	gImgs = [];
// 	for (var i = 1; i < length + 1; i++) {
// 		var img = { id: i, url: `img/${i}.jpg` };
// 		gImgs.push(img);
// 	}
// }

// function getImg(id) {
//     return gImgs[id]
// }

// function getImgs() {
//     const imgs = gImgs;
//     console.log('imgs', gImgs);
//     return imgs;
// }
