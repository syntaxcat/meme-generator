'use strict';

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 };

var gImgs = [ { id: 0, url: 'images/4.jpg', keywords: [ 'funny', 'cat' ] } ];

var gMeme = {
	selectedImgId: 0,
	selectedLineIdx: 0,
	lines: [
		{
			txt: 'blabla',
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
