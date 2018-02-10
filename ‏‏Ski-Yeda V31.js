(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"‏‏Ski_Yeda V31_atlas_", frames: [[0,4204,1471,827],[420,6795,300,300],[0,6874,258,310],[420,6503,492,290],[0,0,1623,4202],[722,6795,328,204],[0,5768,583,733],[585,5768,374,317],[1024,5033,323,317],[585,6087,369,276],[0,6503,418,369],[0,5033,694,733],[1200,5577,139,293],[696,5033,326,344],[961,5577,237,172],[956,6087,260,168],[696,5577,146,108],[1349,5033,147,107],[1349,5142,147,107],[696,5379,534,196],[961,5751,200,200],[1232,5352,194,200]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.background = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2copy = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21copy = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.boyStart = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.gate = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hitlogo = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.myboard = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.skiboysad = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.skiblades = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.skiboy = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.skihandles = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.skihandles2 = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.tram_green = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.tram_red = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.tram_yellow = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.trees = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.V = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.X = function() {
	this.spriteSheet = ss["‏‏Ski_Yeda V31_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.x_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("X", "bold 20px 'Arial'", "#006699");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 20;
	this.text.parent = this;
	this.text.setTransform(-0.5,-10.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(2,1,1).p("AiOiOIEdAAIAAEdIkdAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90CFDE").s().p("AiNCOIAAkbIEbAAIAAEbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.x_btn, new cjs.Rectangle(-15.2,-15.2,30.5,30.5), null);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tram_green();
	this.instance.parent = this;
	this.instance.setTransform(-1288.1,47.6,0.489,0.489);

	this.instance_1 = new lib.tram_red();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1145.1,38.6,0.489,0.489);

	this.instance_2 = new lib.tram_yellow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1002.1,29.6,0.489,0.489);

	this.instance_3 = new lib.tram_green();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-836.5,21.7,0.489,0.489);

	this.instance_4 = new lib.tram_red();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-693.5,12.7,0.489,0.489);

	this.instance_5 = new lib.tram_yellow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-550.5,3.7,0.489,0.489);

	this.instance_6 = new lib.tram_green();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-403.6,-3.5,0.489,0.489);

	this.instance_7 = new lib.tram_red();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-260.6,-12.5,0.489,0.489);

	this.instance_8 = new lib.tram_yellow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-117.6,-21.5,0.489,0.489);

	this.instance_9 = new lib.tram_green();
	this.instance_9.parent = this;
	this.instance_9.setTransform(37.8,-28.7,0.489,0.489);

	this.instance_10 = new lib.tram_red();
	this.instance_10.parent = this;
	this.instance_10.setTransform(180.8,-37.7,0.489,0.489);

	this.instance_11 = new lib.tram_yellow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(323.8,-46.7,0.489,0.489);

	this.instance_12 = new lib.tram_green();
	this.instance_12.parent = this;
	this.instance_12.setTransform(504.3,-54.9,0.489,0.489);

	this.instance_13 = new lib.tram_red();
	this.instance_13.parent = this;
	this.instance_13.setTransform(647.3,-63.9,0.489,0.489);

	this.instance_14 = new lib.tram_yellow();
	this.instance_14.parent = this;
	this.instance_14.setTransform(790.3,-72.9,0.489,0.489);

	this.instance_15 = new lib.tram_green();
	this.instance_15.parent = this;
	this.instance_15.setTransform(940.1,-81.6,0.489,0.489);

	this.instance_16 = new lib.tram_red();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1083.1,-90.6,0.489,0.489);

	this.instance_17 = new lib.tram_yellow();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1226.1,-99.6,0.489,0.489);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#404040").ss(2,1,1).p("EDK0gL1MmVnAXr");
	this.shape.setTransform(0,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1299,-101.3,2598.1,201.8);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tram_green();
	this.instance.parent = this;
	this.instance.setTransform(-1288.2,47.6,0.489,0.489);

	this.instance_1 = new lib.tram_red();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1145.2,38.6,0.489,0.489);

	this.instance_2 = new lib.tram_yellow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1002.2,29.6,0.489,0.489);

	this.instance_3 = new lib.tram_green();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-836.5,21.7,0.489,0.489);

	this.instance_4 = new lib.tram_red();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-693.5,12.7,0.489,0.489);

	this.instance_5 = new lib.tram_yellow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-550.5,3.7,0.489,0.489);

	this.instance_6 = new lib.tram_green();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-403.6,-3.5,0.489,0.489);

	this.instance_7 = new lib.tram_red();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-260.6,-12.5,0.489,0.489);

	this.instance_8 = new lib.tram_yellow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-117.6,-21.5,0.489,0.489);

	this.instance_9 = new lib.tram_green();
	this.instance_9.parent = this;
	this.instance_9.setTransform(37.7,-28.7,0.489,0.489);

	this.instance_10 = new lib.tram_red();
	this.instance_10.parent = this;
	this.instance_10.setTransform(180.7,-37.7,0.489,0.489);

	this.instance_11 = new lib.tram_yellow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(323.7,-46.7,0.489,0.489);

	this.instance_12 = new lib.tram_green();
	this.instance_12.parent = this;
	this.instance_12.setTransform(504.3,-54.9,0.489,0.489);

	this.instance_13 = new lib.tram_red();
	this.instance_13.parent = this;
	this.instance_13.setTransform(647.3,-63.9,0.489,0.489);

	this.instance_14 = new lib.tram_yellow();
	this.instance_14.parent = this;
	this.instance_14.setTransform(790.3,-72.9,0.489,0.489);

	this.instance_15 = new lib.tram_green();
	this.instance_15.parent = this;
	this.instance_15.setTransform(940.1,-81.6,0.489,0.489);

	this.instance_16 = new lib.tram_red();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1083.1,-90.6,0.489,0.489);

	this.instance_17 = new lib.tram_yellow();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1226.1,-99.6,0.489,0.489);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#404040").ss(2,1,1).p("EDK0gL1MmVnAXr");
	this.shape.setTransform(0,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1299,-101.3,2598.1,201.8);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap21copy();
	this.instance.parent = this;
	this.instance.setTransform(-479.6,-1241.8,0.591,0.591);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479.6,-1241.8,959.3,2483.6);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-92.6,-57.6,0.565,0.565);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.6,-57.6,185.3,115.3);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trees();
	this.instance.parent = this;
	this.instance.setTransform(-267,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-98,534,196);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-164,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-102,328,204);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skiboysad();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.236,0.236);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,163.9,173.1), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skiboy();
	this.instance.parent = this;
	this.instance.setTransform(107,113,0.343,0.343);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(107,113,111.8,117.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("התחל", "bold 18px 'Arial'", "#006699");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(65.9,11.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(1.5,1,1).p("AIrizIAAFnIxVAAIAAlng");
	this.shape.setTransform(67.8,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90CFDE").s().p("AoqC0IAAlnIRVAAIAAFng");
	this.shape_1.setTransform(67.8,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(11.3,1.5,113,38), null);


(lib.fruit1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-33,-33,0.22,0.22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fruit1, new cjs.Rectangle(-33,-33,66,66), null);


(lib.ramp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuXFNIAmgJQBbgYBCgmQAygcBGg7QBJg+AngpQAugxBah+QBTh0A6g3QBshoCfg4QCOgyCqgIQBWgDBpAFQA/AEB/ALICvAQIAAACIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAEIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAEIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAADIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAEIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAABI7Yihg");
	this.shape.setTransform(5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4597A0").s().p("AuiFgIgVgCIgtgEQADgIAJgGQANgJAUgFIBdgUQA5gMAcgJQAvgNAigUQAZgOAdgWIAwgpQBFg9AdgcQA1gyAkgtQAbggAwhFQAwhEAaghQA/hMBQg7QBQg8BaglQDChOEZAJQBXACCgAQIDYAUIAAABIAAACIAAADIAAACIgBACIAAADIAAACIAAADIAAACIgBADIAAABIgBAAIABADIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAEIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAEIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAEIAAAEIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAEIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAEIgBAFIAAAFIAAAFIgBAFIAAAEIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAAFIgBAFIAAAFIAAAFIgBAEIAAAFIgBAFIAAAFIgBAFIAAAFIAAAEIgBAFIAAAFIgBAFIAAAFIgBAEIAAABIAAADIAAACIAAACIgBADIAAACIAAACIAAADIAAACIgBADIAAACIAAACI8siqgAGensQiqAIiOAxQifA4htBoQg5A3hUB1QhaB+guAxQgmAohKA+QhGA7gyAdQhBAlhbAZIgnAJIbZChIAAgBIAAgFIABgFIAAgFIABgEIAAgFIAAgFIABgFIAAgFIABgEIAAgFIABgFIAAgFIABgFIAAgEIAAgFIABgFIAAgFIABgFIAAgEIABgFIAAgFIAAgFIABgFIAAgEIABgFIAAgFIABgFIAAgFIABgEIAAgFIAAgFIABgFIAAgFIABgEIAAgFIABgFIAAgFIAAgFIABgEIAAgFIABgFIAAgFIABgFIAAgEIABgFIAAgFIAAgFIABgFIAAgEIABgFIAAgFIABgFIAAgFIAAgFIABgEIAAgFIABgFIAAgFIABgFIAAgEIABgFIAAgFIAAgFIABgFIAAgEIABgFIAAgFIABgFIAAgFIAAgEIABgFIAAgFIABgFIAAgFIABgEIAAgFIAAgFIABgFIAAgFIABgEIAAgFIABgFIAAgFIABgFIAAgEIAAgFIABgFIAAgFIABgFIAAgEIABgFIAAgFIAAgFIABgFIAAgEIABgFIAAgFIABgFIAAgFIABgEIAAgFIAAgFIABgEIAAgFIABgEIAAgFIABgFIAAgFIAAgFIABgEIAAgFIABgFIAAgFIABgFIAAgEIABgFIAAgFIAAgFIABgFIAAgEIABgFIAAgFIABgFIAAgFIAAgEIABgFIAAgFIABgFIAAgFIABgEIAAgFIABgFIAAgFIAAgFIABgEIAAgFIABgFIAAgFIABgFIAAgFIAAgEIABgFIAAgFIABgFIAAgFIABgEIAAgFIABgFIAAgFIAAgFIABgEIAAgFIABgFIAAgFIABgFIAAgEIAAgFIABgFIAAgFIABgFIAAgEIABgFIAAgFIABgFIAAgFIAAgEIABgFIAAgFIABgFIAAgFIABgEIAAgFIAAgFIABgFIAAgFIABgEIAAgFIABgFIAAgFIABgFIAAgEIAAgFIABgFIAAgFIABgFIAAgEIABgFIAAgFIAAgFIABgFIAAgEIABgFIAAgFIABgFIAAgFIABgEIAAgFIAAgFIABgDIiwgQQh+gLhAgDQhAgDg5AAIhFABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ramp, new cjs.Rectangle(-99.7,-52.2,199.5,104.4), null);


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("שחקו שוב", "13px 'Arial'", "#006699");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 56;
	this.text.parent = this;
	this.text.setTransform(-0.3,-9.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(1.5,1,1).p("AkvhTIJfAAIAACnIpfAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkvBUIAAinIJfAAIAACng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.play_again_btn, new cjs.Rectangle(-31.4,-11.5,62.9,21), null);


(lib.pause_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("השהייה", "13px 'Arial'", "#006699");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 56;
	this.text.parent = this;
	this.text.setTransform(-1.7,-8.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(1.5,1,1).p("AkvhTIJfAAIAACnIpfAAg");
	this.shape.setTransform(-1.4,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90CFDE").s().p("AkvBUIAAinIJfAAIAACng");
	this.shape_1.setTransform(-1.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pause_btn, new cjs.Rectangle(-32.8,-10.4,62.9,21), null);


(lib.myBoard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("↑↓", "23px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 39;
	this.text.parent = this;
	this.text.setTransform(-29.5,-8.7);

	this.text_1 = new cjs.Text("נווט בעזרת\nמקשי החצים", "12px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 10;
	this.text_1.lineWidth = 71;
	this.text_1.parent = this;
	this.text_1.setTransform(20.5,-7.7);

	this.text_2 = new cjs.Text("והימנע מאלו שלא", "16px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 171;
	this.text_2.parent = this;
	this.text_2.setTransform(-0.5,-31.6);

	this.nameBox = new cjs.Text("", "20px 'Arial'");
	this.nameBox.name = "nameBox";
	this.nameBox.textAlign = "center";
	this.nameBox.lineHeight = 24;
	this.nameBox.lineWidth = 156;
	this.nameBox.parent = this;
	this.nameBox.setTransform(4,-54.9);

	this.text_3 = new cjs.Text("עבור רק ברמפות המכילות", "16px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 171;
	this.text_3.parent = this;
	this.text_3.setTransform(3.5,-71.8);

	this.instance = new lib.myboard();
	this.instance.parent = this;
	this.instance.setTransform(-103,-104,0.507,0.507);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_3},{t:this.nameBox},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.myBoard, new cjs.Rectangle(-103,-104,212,187.1), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-17.8,-13.3,0.097,0.097);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-17.8,-13.3,35.7,26.7), null);


(lib.HIT_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hitlogo();
	this.instance.parent = this;
	this.instance.setTransform(-66.7,-65.5,0.413,0.413);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.HIT_logo, new cjs.Rectangle(-66.7,-65.5,133.6,131.1), null);


(lib.HIT_link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה", "13px 'Arial'", "#009999");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 142;
	this.text.parent = this;
	this.text.setTransform(5.5,-10.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009999").ss(1,1,1).p("AKyAAI1jAA");
	this.shape.setTransform(5.2,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HIT_link, new cjs.Rectangle(-67.2,-12.5,145.7,35), null);


(lib.hide_wide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgnDgByMBOHAAAIAADlMhOHAAAg");
	this.shape.setTransform(307.2,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgnDABzIAAjlMBOHAAAIAADlg");
	this.shape_1.setTransform(307.2,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hide_wide, new cjs.Rectangle(56.2,1,502,25), null);


(lib.hide_small = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgnDgByMBOHAAAIAADlMhOHAAAg");
	this.shape.setTransform(157.2,13.5,0.4,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgnDABzIAAjlMBOHAAAIAADlg");
	this.shape_1.setTransform(157.2,13.5,0.4,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hide_small, new cjs.Rectangle(56.2,1,202,25), null);


(lib.gate_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("סיום", "20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 59;
	this.text.parent = this;
	this.text.setTransform(2.3,-74.8,1,1,10.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C00000").s().p("At6gMIARkmIbkDqIgQF7g");
	this.shape.setTransform(4.1,-60.2);

	this.instance = new lib.gate();
	this.instance.parent = this;
	this.instance.setTransform(-123,-104,0.657,0.657);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gate_1, new cjs.Rectangle(-123,-104,245.8,208.3), null);


(lib.end_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("סיום", "13px 'Arial'", "#006699");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 56;
	this.text.parent = this;
	this.text.setTransform(-0.3,-9.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(1.5,1,1).p("AkvhTIJfAAIAACnIpfAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkvBUIAAinIJfAAIAACng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.end_btn, new cjs.Rectangle(-31.4,-11.5,62.9,21), null);


(lib.continue_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("המשך", "13px 'Arial'", "#006699");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 56;
	this.text.parent = this;
	this.text.setTransform(-0.3,-9.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(1.5,1,1).p("AkvhTIJfAAIAACnIpfAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90CFDE").s().p("AkvBUIAAinIJfAAIAACng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.continue_btn, new cjs.Rectangle(-31.4,-11.5,62.9,21), null);


(lib.confetti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Ag4CgIAAk/IBxAAIAAE/g");
	this.shape.setTransform(656.8,221.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EgyUAC0IA5hiIEVChIg4BigEAtGgDyIA5hiIEWCgIg5Big");
	this.shape_1.setTransform(351.9,366.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0033").s().p("Ad2E8IEVihIA5BiIkVChgEgjDgE6IA5hiIEVCgIg5Big");
	this.shape_2.setTransform(224.4,160.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF33").s().p("AILRVIAAlAIBxAAIAAFAgEAh4gJHIAAlAIByAAIAAFAgEgjogMUIAAlAIBxAAIAAFAg");
	this.shape_3.setTransform(242.8,110.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AXbRTIA5hiIEVCgIg5BigEAiigJyIA4hiIEWCgIg5BigACCqmIgdhuIAdgIIBLgUIAFgBIBTE2IhYAXIgVAGgEgnvgPcIChkWIBiA5IigEWg");
	this.shape_4.setTransform(363,186.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF33FF").s().p("Egi/AOhIAAifIAAiiIByAAIAACiIAACfgAualvIBugdIBTE2IhuAdgEAgAgOCIBtgeIBTE3IhtAcg");
	this.shape_5.setTransform(277.4,197.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300FF").s().p("ADDbWIAAlAIByAAIAAFAgEgkkASxIA5hiIEWCgIg6BigA8E4SIBtgdIBTE2IhtAdgEAizgWVIAAlAIByAAIAAFAg");
	this.shape_6.setTransform(387.1,187.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.confetti, new cjs.Rectangle(0,0,674,400.6), null);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.boystart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skiblades();
	this.instance.parent = this;
	this.instance.setTransform(-94.8,-87.9,0.506,0.506);

	this.instance_1 = new lib.skihandles();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.5,-24.5,0.46,0.46);

	this.instance_2 = new lib.boyStart();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54.8,-97.6,0.257,0.257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.boystart, new cjs.Rectangle(-94.8,-97.6,190,188.7), null);


(lib.bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}
	this.frame_56 = function() {
		this.stop();
	}
	this.frame_64 = function() {
		this.stop();
	}
	this.frame_72 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8).call(this.frame_16).wait(8).call(this.frame_24).wait(8).call(this.frame_32).wait(8).call(this.frame_40).wait(8).call(this.frame_48).wait(8).call(this.frame_56).wait(8).call(this.frame_64).wait(8).call(this.frame_72).wait(8).call(this.frame_80).wait(9));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330099").ss(3,2,0,60,true).p("AAAuLQBBAAAtAtQAGAHAGAGIAAAAQAAABABABQAhApAAA3IAAXfQAAARgDAPQgBAFgBAEQgEANgFAMQgBACgBACQAAABgBABQgCADgCAEQgIAMgKAMQAAAAAAAAQgCACgCACQgCACgBABQgBABgBABQgGAGgGAFQAAAAgBABQgIAGgIAFQgDABgCACQghASgpAAQggAAgcgMQgFgCgGgDQgRgKgQgNQgCgCgCgCQgBgBgBgBQgBgBgBgCQgBgBgCgBQAAAAAAAAIgDgDQgIgKgIgMQAAgBgBgBQAAgBgBAAQgTgjAAgqIAA3fQAAglAPgfQALgXATgUQAugtBAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(89));

	// 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF00").s().p("AgTBaIgBgBIgHAAIgBAAIgDgBIgBAAIgEgBIAAAAIgDgBIgBAAIgBAAIgCAAIgBgBIgNgFIgEgDIgGgBIgEgDIgCgBIgBAAIgCgCIgOgIIgBgCIgFgCIAAgBIgCgBIgDgCIAAgBIgBAAIgBgDQgDgDgDgCIgDgCQAAgCgDgCIgGgHIgBgBIgCgBIAAgBIgBgCIgCgBIAAAAIAAgBIgBgBIAAgBIgBgBIgBgBIAAAAIgBgCIgBgCIAAAAIgBgCIgBgBIgBAAIAAgCIgBgCIgBgBIgBgBIgBgCIgBAAIAAgBIAAgBIgBgCIgCgCIgBgDIAAAAIgBgEIgBgBIgCgFIgBgCIAAAAIgDgRIgCgGIAAgBIgBgEIAAguIE3AAIAAAAIAAABIAAABIAAAAIAAACIAAAAIAAAiIgBAGIgCAMIgFAVIgBABIgBABIAAACQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAIgBAAIAAACIgBAAIgBABIAAACIAAAAIgBABIAAAAIgBABIABABIgBAAIgBACIAAABIgBAAIgBAEIgDAEIgBABIAAABIgBABQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCABIAAABIgBABIAAAAIgBABIgBACIgBABIgBABIgIAIQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABABAAIgBABIAAAAIgDACIgBABIgEAEIgBACIgBABIgCACIAAAAIgCABIAAABQgBAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIAAABQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABIgBABIgBAAIgCACIgBABIgBABIgEACIgCACIgDABIgKAGIAAABIgCAAIgDACIgBAAIgCABIgBAAIAAABIgBAAIgCABIgDABIAAABIgDABIgBABIAAgBIgBABIgCAAIgDABIgDABIAAAAIAAAAIgBAAIgBAAIgDABQgFAAgCABIAAAAIgDAAIgEABIgBABg");
	this.shape_1.setTransform(0,-62.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF00").s().p("AgFBcIgBAAIgHgBIAAAAIgDAAIgBAAIgEgBIgBAAIgDgCIgBABIAAAAIgCgBIgBAAIgOgEIgEgCIgGgCIgEgCIgCgBIgBAAIgDgBIgOgHIgBgCIgFgCIAAgBIgGgDIAAAAIAAAAIgCgDQgDgDgDgBIgDgCQAAgCgEgCIgGgFIgBgBIgCgCIAAAAIgBgCIgCAAIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIgBAAIAAgCIgBgBIgBAAIgBgCIgBgBIgBAAIAAgCIgBgBIgBgBIgCgDIgBAAIAAgBIgBAAIgBgDIgBgBIgCgDIAAAAIgCgEIAAgBIgEgGIgBAAIgFgOIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIAAAAIAAgBIgBgBIgBgCIAAgBIAAgtIABAAIAWgEIAKgCIAagEIAHgBIAEgBIAEAAIACgBIADAAIANgBIABgBIADAAIACAAIAFgBIACAAIAJgBIADAAIAHgBIACAAIADAAIAHgBIADAAIAIgBIAHAAIACAAIADAAIAIgBIAEAAIAGAAIACAAIACgBIADAAIACAAIADAAIABAAIADAAIAHAAIABAAIAnAAIABAAIAHAAIAAAAIAIAAIAGAAIACAAIAEABIACAAIACAAIACAAIACAAIADAAIADAAIACABIABAAIABAAIABAAIADAAIABAAIACAAIAGAAIAAABIABAAIAAABIgBAAIABACIAAAAIABAFIABADIAAAEIAAAAIABAEIAAAGIABADIAAACIAAAEIAAABIAAAGIAAACIAAACIAAACIAAABIgBAEIAAAEIAAACIgBADIAAADIAAABIAAAEIgBAEIgBABIAAABIgBACIAAABIABABIgBAAIAAACIAAAAIgBACIAAABIAAABIgBABIAAAAIAAABIAAABIgBAAIAAABIAAABIgBABIgBAEIgCADIgBACIAAABIgBABQAAABAAAAQAAAAAAABQgBAAABAAQAAABAAAAIgCABIAAACIAAABIgBABIgBABIAAABIgBACIAAAAIgGAJIgBABQAAAAAAAAQgBAAAAAAQAAAAAAABQABAAAAAAIgBABIAAAAIgBABIgCACIAAABIAAAAIgEAEIgBACIgBABIgBACIAAABIgBABIgBABIgCACIAAABIAAAAIgEACIgBACIgCACIgBABIgBABIgDACIgCADIgCABIgHAGIgCABIAAABIAAAAIgCAAIgDACIgBAAIgCABIgBAAIAAABIgBAAIgCABIgDABIgBAAIgDABIAAABIgBgBIgBABIgBAAIgEABIgDAAIAAABIAAgBIgBABIgBgBIgDACQgFgBgCACIgDAAIgEABIgBAAg");
	this.shape_2.setTransform(-0.3,-64.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF00").s().p("AAIBfIgBgBIgHAAIAAAAIgCgBIgBAAIgEgBIgBAAIgDgBIgDAAIgBgBIgOgCIgFgCIgGgBIgGgEIgBABIgCgCIgPgFIgBgCIgGgCIAAAAIgFgCIAAAAIgBgBIgCgBIgHgFIgCgBQgBgCgEgBIgGgFIgCgBIgCAAIAAgBIgBgBIgCgBIAAAAIgBgBIAAgBIgBgBIgBAAIgBgBIAAAAIgBgBIgBgBIAAAAIgBgBIgBgCIgBAAIgBgCIgBgBIgBAAIgBgBIgBgCIgBAAIAAAAIgCgCIgCgCIgBgDIgDgCIgEgFIgBgBIgBAAIgHgMIgCgBIAAgBIAAAAIgCgBIAAgBIAAgBIgBgBIAAAAIgBgBIAAAAIAAgBIgBgBIAAgvIABgBIASgHIAJgEIAWgIIACgBIAGgBIAFgCIADAAIACgBIADgBIAMgDIACAAIACgBIAGgCIALgBIADgBIAHgBIACgBIADAAIAHgCIALgCIAHAAIACgBIADAAIAGAAIAEgBIAHAAIACgBIACAAIADAAIACAAIAEgBIABAAIACAAIAAAAIAHAAIABAAIApAAIAEAAIADAAIAIABIAFAAIADAAIADAAIADABIABAAIACAAIAAAAIACAAIADAAIAAAAIADAAIACABIABAAIABAAIABAAIADABIABAAIACAAIAFAAIAAABIABAAIAAABIAAACIABABIACAEIAAACIABAEIAAAAIACAEIABAGIABACIAAACIABAEIAAABIAAAGIABACIgBABIABACIAAABIAAAEIAAADIAAACIAAAEIAAACIABABIgBAFIABAEIgBABIAAABIAAACIgBABIABACIAAAAIAAABIAAAAIgBACIAAACIAAABIAAAAIgBABIABABIgBABIAAABIAAABIgBAAIAAAFIgCACIAAACIAAABIgBABIAAAFIgBAAIAAACIgBAAIAAABIAAACIgBACIAAABIgBABIgBAEIgDAFIgBAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABIABAAIgCABIgBACIAAACIAAABIgDADIgBACIAAACIgBACIAAAAIgBACIgBABIgBACIAAABIgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBABIAAABIgBAAIgBADIgBABIgBABIgEAFIgCACIgFAGIAAABIgCABIAAABIgBAAIAAABIgBAAIgDABIgBAAIgDABIAAAAIgBABIgBAAIgCABIgDAAIgBABIgCAAIgBABIgBgBIgBABIgCAAIgDAAIgDABIgDAAIgCABQgFAAgDABIAAABIgCAAIgFAAIgBABg");
	this.shape_3.setTransform(-0.6,-67.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF00").s().p("AAUBhIgBgBIgHAAIAAAAIgDAAIgBAAIgEgBIgBAAIgDgBIgCAAIgBAAIgOgDIgFgBIgGgBIgHgDIgBABIgCgBIgPgFIgCgBIgFgCIAAAAIgGgCIAAAAIgBAAIgDgCIgGgDIgCgBQgCgCgEgBIgHgDIgBgBIgCgBIgBAAIgBgBIgCgBIAAAAIgBAAIAAgBIgBgBIgBAAIgBgBIAAAAIgBgBIgBgBIAAAAIgBgBIgBgBIgBAAIgBgBIgBgBIgBAAIgCgBIgBgBIAAAAIgBgBIgBAAIgCgCIgBgBIgCgCIgDgCIAAgBIgGgEIgBAAIgKgKIgCAAIAAgBIAAAAIgCAAIAAgBIgBAAIAAgBIAAAAIgBgBIgBAAIAAgCIgBgBIAAgxIABAAIAPgMIAHgFIAUgLIACgCIAGgCIAEgCQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIACgBIADgBIADgBIAKgEIACAAIAGgDIAKgDIADgBIAHgCIACgBIACgBIAHgCIADgBIAIgBIAHgBIACgBIADAAIAHgBIADAAIAHgCIACAAIACgBIADAAIACAAIAEgBIABAAIACAAIABAAIAHgBIABAAIApAAIAEABIADAAIAAAAIAHABIAFAAIADAAIADABIADAAIABAAIACABIAAgBIACABIADAAIAAAAIADABIACABIABAAIABAAIAAAAIADABIABAAIACABIAFAAIAAAAIABABIAAAAIABACIAAABIADAEIABACIABADIAAABIABAAIACADIACAFIABADIABACQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIABABQABABAAAEIAAACIAAACIABACIAAABIAAADIABADIABACIAAAEIABACIAAABIAAAEIABAFIAAABIAAABIAAACIAAABIABACIgBAAIABABIAAABIgBABIABACIAAAAIgBABIABAAIgBABIABABIgBABIAAADIAAABIAAADIgCAFIAAABIAAABIAAAEIgBABIAAACIAAABIAAABIAAABIAAACIAAABIgBABIgBAFIgCAFIAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABABIgBAAIAAAAIgBABIgBADIAAABIAAABIgCAFIgBABIAAACIgBACIAAAAIAAABIAAACIgBABIgBACIAAAAIAAABIgDADIAAACIgCADIAAABIgBABIgDAGIgCADIgEAHIAAAAIgCACIAAABIAAAAIAAAAIgCAAIgCABIgBAAIgDABIgBAAIgBAAIgBAAIgCABIgDABIgBAAIgCAAIgBABIgBAAIgBAAIgCAAIgEABIgDAAIgCAAIgDABQgEAAgDABIgDAAIgEAAIgBABg");
	this.shape_4.setTransform(-0.7,-69.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF00").s().p("AAfBjIgBAAIgHAAIgEgBIgBAAIgEAAIgDgBIgBABIgCgBIgBAAIgOgCIgEgBIgGgBIgFgBIgDAAIgDgBIgQgEIgBAAIgFgBIgBgBIgDgBIgDAAIAAgBIgEgBIgGgCIgDgBIgGgCIgHgCIgCgBIgCgBIgBAAIgBgBIgBAAIgBAAIgBgBIgBAAIAAAAIgBgBIgBgBIgCgBIgCgBIgCgBIgBAAIgBgBIgBAAIgBgBIgCgBIgBAAIgDgCIgBgBIgCgBIAAAAIgEgCIgBAAIgEgDIgCAAIgBAAIgMgIIgDAAIAAAAIAAAAIgCAAIAAAAIgBgBIAAAAIgBAAIgBgBIgBgCIAAgBIgBgBIAAgyIABAAIAAgBIAAAAIAMgPQACgFAEgCIACgBIACgDIAPgNIAFgDIAEgDIAEgCIABgBIACgBIALgHIACAAIACgBIABgBIAGgEIAJgDIACgBQADgCAEAAIABgCIADgBIAGgCIALgDQAEgCADABIACgBIACgBIAHgBIAEgBIAHgCIABAAIACAAIABgBIABAAIABAAIABAAIACgBIABAAIADgBIABAAIADAAIAHgBIABAAIApAAIABAAIAEABIADAAQADABAEAAIAEABIABAAIABAAIABAAIAAAAIAEABIACAAIABAAIACABIABgBIABABIADAAIAAABIADABIACAAIABAAIAAABIABAAIADABIABAAIACABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAAAAIABABIAAABIABACIABABIADAEIACACIABACIABABIADADIADAFIABACIABABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAIAAABIACAFIABABIAAADIAAABIABACIABACIABADIABACIAAADQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAIAAABIABAEIABAFIABABIAAACIAAABIAAABIABACIAAABIAAABIABADIAAAAIAAABIAAACIABABIAAAEIgBABIAAADIAAADIAAACIAAABIAAABIAAAEIAAABIAAACIAAABIAAABIAAABIAAACIAAACIAAABIAAAEIgBAGIgBABIAAACIAAABIgBAAIgBADIAAACIAAABIgBAFIAAACIgBABIAAADIAAABIgBACIAAABIgBACIAAABIgBADIgBADIAAAAIgBADIgBABIAAABIgCAEIAAADIgCADIgDAIIAAAAIgBACIAAACIgCAAIgDABIgBAAIgCAAIgBAAIgCABIgBAAIgBAAIgEABIgBAAIgCAAIgCAAIgBAAIgCAAIgEABIgDAAIgBABIAAgBIgBABIgBgBIgCABIgIAAIAAABIgCAAIgFAAg");
	this.shape_5.setTransform(-0.7,-72.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF00").s().p("AAoBlIgBAAIgGAAIgEAAIgCAAIgEgBIgCAAIgBAAIgDAAIgBAAIgZgCIgEgBIgEAAIgTgEIgBAAIgFgBIgCAAIgGgBIgEgBIgGgBIgDgBIgGgBIgIgCIgCgBIgCAAIgBAAIgBgBIgCAAIAAAAIgBAAIgBgBIgBAAIgBAAIgBgBIgBAAIgBAAIgCgBIgBAAIgBAAIgCgBIgBAAIgBAAIgBgBIgBAAIgBgBIgBAAIgDgBIgBgBIgDAAIAAgBIgDgBIgCAAIgGgCIgBAAIgPgFIgDAAIAAAAIgBAAIAAABIgCABIgBgBIgBAAIgBgBIAAAAIgCgCIAAgBIAAgBIAAg1IAAAAIAAgBIABAAIAIgSQACgGACgCIACgCIADgEIAKgOIACgCIAFgEIADgDIAEgEIABgBIADgBIALgJIACgBIABgBIAFgEIABgBIAIgEQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAHgDIABgCIACgBIAGgDIADgBIAIgDQAEgBADAAIACgCIACAAIAHgBIAEgBIAHgDIABAAIACgBIACgBIABAAIABAAIABAAIADgBIAAAAIADgBIABAAIACAAIAHgBIABAAIAqAAIABAAIAEABIADAAIAAAAQADACAEgBIAEABIABAAIABAAIAAAAIAAAAIAEABIACABIACAAIABAAIABAAIABABIADABIAAAAIADABIACABIABAAIABABIAAAAIADAAIABAAIACACQABAAAAAAQAAABABAAQAAAAABgBQAAAAABAAIAAAAIAAABIABABIABACIABABIAEAEIADABIABADIAAABIABAAIADACIAEAEIABADIACABQAAAAgBABQAAAAAAAAQAAABABAAQAAAAAAAAIABABIADAFIABABIABACIAAABIAAACIABADIADACIABABIAAAEQABABAAAAQAAABAAAAQABAAAAABQAAAAABAAIAAABIABADIACAGIAAAAIABACIAAACIABACIAAABIABACIAAAAIABACIABABIAAAAIAAABIAAABIABABIAAABIAAABIABACIAAABIgBABIABAEIAAADIAAACIAAACIABAEIAAABIAAACIAAABIAAABIAAACIAAABIABACIAAABIAAAFIAAAGIAAABIgBACIAAABIAAAAIAAAEIAAACIAAABIgBAFIAAADIAAABIAAACIAAAAIAAABIAAADIAAABIgBACIAAABIgBADIAAAEIgCADIAAABIAAABIgCAHIgBAEIgBAJIgBAAIAAADIAAABIgCAAIgDABIgBAAIgCAAIgBAAIgCAAIgBAAIgCABIgDAAIgBAAIgDAAIgCAAIgBAAIgCAAIgFABIgDAAIAAAAIgBAAIAAAAIgBAAIgCAAIgIABIgDAAIgEAAg");
	this.shape_6.setTransform(-0.5,-75.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF00").s().p("ABfBoIgBAAIguAAIgBAAIgGAAIgEgBIgBAAIgEAAIgDAAIgDAAIgBAAIgigCIgDAAIgQgBIgBAAIgHgBIgBAAIgCAAIgEAAIAAgBIgEAAIgIgBIgBAAIgIgBIgJAAIgBgBIgCAAIgCAAIgDAAIgBgBIgBAAIgBAAIgBAAIgBAAIgBAAIgBgBIgCAAIgBAAIgCAAIgBgBIgDAAIgCAAIgBAAIgBgBIgCAAIgCAAIgDgBIgEAAIgBAAIgGgBIgDAAIgQgDIgFAAIAAABIgBAAIAAAAIAAABIgBABIgBAAIgBAAIgBAAIgCgBIAAAAIgBgCIgBAAIAAgBIAAgBIAAg3IAAAAIAAgCIABAAIAFgXQABgGACgDIACgCIACgEIAEgKIAFgHIABgCIAFgFIADgEIADgEIABgBIACgCIAKgKIADAAIAAgCIACgBIAFgGIAIgFQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQADgDAEAAIABgDIADgBIAFgEIALgFQAEgCACABIACgCIADAAIAGgCIAEgBIAIgDIAAAAIACgBIABgBIACAAIABAAIABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBIABAAIADgBIABAAIADAAIABAAQAFAAACgBIABgBIAoAAIABABIAFABIACAAQADACAEgBIADACIABAAIACAAIABAAIAAAAIACABIADABIABAAIACABIABgBIAAABIADAAIAAABIADABIACABIABAAIABABIABAAQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIADABQAAAAAAABQAAAAABAAQAAAAAAAAQABgBAAAAIAAABIABABIABAAIABACIABABIAFAEIACABIACADIABAAIAAAAIAFACQABACADACIADACIABABQgBABAAAAQAAABAAAAQAAAAABAAQAAAAABAAIABABIACAEIACABIABACIAAACIABACIACABIACADIACABIAAAEQABAAAAABQAAAAABABQAAAAABAAQAAAAABAAIAAABIABAEIADAGIABABIAAACIACABIAAABIABACIABABIABADIAAACIABABIAAABIAAABIABABIABADIAAACIAAAEIABADIACABIAAABIgBABIACAFIAAABIABACIgBABIAAABIABACIABACIAAACIAAABIABAFIABAGIgBABIAAACIAAABIgBABIABADIAAACIAAACIAAAGIAAACIAAABIAAACIAAABIAAABIABADIAAABIAAACIAAABIgBAEIAAADIAAAAIAAAEIgBABIAAABIAAAFIAAADIAAAEIgBAKIgBABIAAACIAAAAIAAAAIAAABIAAAAIAAABIgBAAIgFAAIgCAAIgBAAIgDAAIgBAAIgBAAIgEABIgBAAIgCAAIgCAAIgCAAIgCAAIgFAAIgCAAIgDAAIgCAAIgJAAIAAABg");
	this.shape_7.setTransform(-0.3,-77.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#66FF00").ss(0.4,2,0,60,true).p("ACbAAIABAAAibAAIACAA");
	this.shape_8.setTransform(0,-64.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#330099").ss(0.4,2,0,60,true).p("ACcgBIAAADAibACIAAgD");
	this.shape_9.setTransform(0,-64);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AAAAFIAAgJ");
	this.shape_10.setTransform(-15.6,-70.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FF00").s().p("ACaCDIABAAIAAAEIgBgEgAicCDIACAAIgCAEgAiXBRIgBAAIgBAAIgBAAIgBgCIgBAAIAAgBIAAgBIAAgGIAAgKIAAgqIAAAAIAAgBIABAAIABgaIACgMIACgDIABgEIAEgMIAEgIIABgDIAEgFIADgFIADgEIABgCIACgCIADgEIAHgHIABgBIABgCIABgBIAEgFIABgCIAIgGQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQADgDAEgBIABgDIACgCQACgCADgCIADgCIAIgEQAEgCACABIACgCIACgBIAGgCIAEgBIAIgEIABAAIACgBIABgBIACAAIABAAIABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBIAAAAIAEgBIABAAIADgBIABAAQAGAAABgBIABAAIApAAIABAAIAEACIADAAIAAAAQACACAFgBIADACIABAAIABAAIAAAAIAAAAIADABIADABIACAAIABABIAAgBIABACIADAAIAAABIADABIACACIABAAIAAABIABAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAIABAAIADACQAAAAAAABQABAAAAAAQAAAAAAAAQABgBAAAAIAAACIAKAHIADABIACACIAAAAIABAAIAGABQABADADACIADABIACACQgBAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAGAFIABADIAAgBIABACIAAABIADACIAEACIABACIABADQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIAAAAIACAEQACAFAFAHIAFAIIACAFIANAmIABAGQAAADgCACIACAGIACANIABAIIAAAoIAAABIAAACIAAAAIAAABIAAAAIAAABIkvAAIAAABIgBAAIAAABIAAAAIgCACIAAAAIgBAAIgBAAg");
	this.shape_11.setTransform(0.1,-77.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},73).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(9));

	// 9
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#66FF00").ss(0.4,2,0,60,true).p("ACbAAIABAAAibAAIACAA");
	this.shape_12.setTransform(0,-46.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#330099").ss(0.4,2,0,60,true).p("ACcgBIAAADAibACIAAgD");
	this.shape_13.setTransform(0,-46);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AibgEIE3AAIAAAJIk3AAg");
	this.shape_14.setTransform(0,-52.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66FF00").s().p("ACbAhIABAAIAAAEIgBgEgAibAhIACAAIgCAEgAibgaIAAgKIE3AAIAAAKg");
	this.shape_15.setTransform(0,-49.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(87,219,0,0.859)").ss(0.9,2,0,60,true).p("AibgQIE3AAIAAAhIk3AAg");
	this.shape_16.setTransform(0,-54);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66FF00").s().p("AibARIAAghIE3AAIAAAhg");
	this.shape_17.setTransform(0,-54);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(73,182,0,0.714)").ss(0.7,2,0,60,true).p("AibgcIE3AAIAAA5Ik3AAg");
	this.shape_18.setTransform(0,-55.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66FF00").s().p("AibAdIAAg5IE3AAIAAA5g");
	this.shape_19.setTransform(0,-55.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(58,146,0,0.573)").ss(0.6,2,0,60,true).p("AicgoIE5AAIAABRIk5AAg");
	this.shape_20.setTransform(0,-56.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66FF00").s().p("AibApIAAhRIE3AAIAABRg");
	this.shape_21.setTransform(0,-56.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(44,109,0,0.427)").ss(0.5,2,0,60,true).p("Aicg1IE5AAIAABrIk5AAg");
	this.shape_22.setTransform(-0.1,-58.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66FF00").s().p("AicA2IAAhrIE5AAIAABrg");
	this.shape_23.setTransform(-0.1,-58.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(29,73,0,0.286)").ss(0.3,2,0,60,true).p("AichBIE5AAIAACDIk5AAg");
	this.shape_24.setTransform(-0.1,-59.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66FF00").s().p("AicBCIAAiDIE5AAIAACDg");
	this.shape_25.setTransform(-0.1,-59.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(15,36,0,0.141)").ss(0.2,2,0,60,true).p("AichNIE5AAIAACbIk5AAg");
	this.shape_26.setTransform(-0.1,-60.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#66FF00").s().p("AicBOIAAibIE5AAIAACbg");
	this.shape_27.setTransform(-0.1,-60.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#66FF00").s().p("AicBaIAAizIE5AAIAACzg");
	this.shape_28.setTransform(-0.1,-62.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},65).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_28}]},1).wait(17));

	// 8
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AibgEIE3AAIAAAJIk3AAg");
	this.shape_29.setTransform(0,-34.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#330099").ss(0.4,2,0,60,true).p("ACcgBIAAADAibACIAAgD");
	this.shape_30.setTransform(0,-28);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#66FF00").ss(0.4,2,0,60,true).p("ACbAAIABAAAibAAIACAA");
	this.shape_31.setTransform(0,-28.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#66FF00").s().p("ACbAhIABAAIAAAEIgBgEgAibAhIACAAIgCAEgAibgaIAAgKIE3AAIAAAKg");
	this.shape_32.setTransform(0,-31.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(87,219,0,0.859)").ss(0.9,2,0,60,true).p("AibgQIE3AAIAAAhIk3AAg");
	this.shape_33.setTransform(0,-36);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#66FF00").s().p("AibARIAAghIE3AAIAAAhg");
	this.shape_34.setTransform(0,-36);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(73,182,0,0.714)").ss(0.7,2,0,60,true).p("AibgcIE3AAIAAA5Ik3AAg");
	this.shape_35.setTransform(0,-37.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#66FF00").s().p("AibAdIAAg5IE3AAIAAA5g");
	this.shape_36.setTransform(0,-37.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(58,146,0,0.573)").ss(0.6,2,0,60,true).p("AicgoIE5AAIAABRIk5AAg");
	this.shape_37.setTransform(0,-38.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#66FF00").s().p("AibApIAAhRIE3AAIAABRg");
	this.shape_38.setTransform(0,-38.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(44,109,0,0.427)").ss(0.5,2,0,60,true).p("Aicg1IE5AAIAABrIk5AAg");
	this.shape_39.setTransform(0,-40.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#66FF00").s().p("AicA2IAAhrIE5AAIAABrg");
	this.shape_40.setTransform(0,-40.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(29,73,0,0.286)").ss(0.3,2,0,60,true).p("AichBIE5AAIAACDIk5AAg");
	this.shape_41.setTransform(0,-41.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#66FF00").s().p("AicBCIAAiDIE5AAIAACDg");
	this.shape_42.setTransform(0,-41.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(15,36,0,0.141)").ss(0.2,2,0,60,true).p("AichNIE5AAIAACbIk5AAg");
	this.shape_43.setTransform(0,-42.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#66FF00").s().p("AicBOIAAibIE5AAIAACbg");
	this.shape_44.setTransform(0,-42.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#66FF00").s().p("AicBaIAAizIE5AAIAACzg");
	this.shape_45.setTransform(-0.1,-44.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},57).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_45}]},1).wait(25));

	// 7
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AibgEIE3AAIAAAJIk3AAg");
	this.shape_46.setTransform(0,-16.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#330099").ss(0.4,2,0,60,true).p("ACcgBIAAADAibACIAAgD");
	this.shape_47.setTransform(0,-10);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#66FF00").ss(0.4,2,0,60,true).p("ACbAAIABAAAibAAIACAA");
	this.shape_48.setTransform(0,-10.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#66FF00").s().p("ACbAhIABAAIAAAEIgBgEgAibAhIACAAIgCAEgAibgaIAAgKIE3AAIAAAKg");
	this.shape_49.setTransform(0,-13.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(87,219,0,0.859)").ss(0.9,2,0,60,true).p("AibgQIE3AAIAAAhIk3AAg");
	this.shape_50.setTransform(0,-18);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#66FF00").s().p("AibARIAAghIE3AAIAAAhg");
	this.shape_51.setTransform(0,-18);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(73,182,0,0.714)").ss(0.7,2,0,60,true).p("AibgcIE3AAIAAA5Ik3AAg");
	this.shape_52.setTransform(0,-19.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#66FF00").s().p("AibAdIAAg5IE3AAIAAA5g");
	this.shape_53.setTransform(0,-19.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(58,146,0,0.573)").ss(0.6,2,0,60,true).p("AicgoIE5AAIAABRIk5AAg");
	this.shape_54.setTransform(0,-20.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#66FF00").s().p("AibApIAAhRIE3AAIAABRg");
	this.shape_55.setTransform(0,-20.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(44,109,0,0.427)").ss(0.5,2,0,60,true).p("Aicg1IE5AAIAABrIk5AAg");
	this.shape_56.setTransform(-0.1,-22.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#66FF00").s().p("AicA2IAAhrIE5AAIAABrg");
	this.shape_57.setTransform(-0.1,-22.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(29,73,0,0.286)").ss(0.3,2,0,60,true).p("AichBIE5AAIAACDIk5AAg");
	this.shape_58.setTransform(-0.1,-23.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#66FF00").s().p("AicBCIAAiDIE5AAIAACDg");
	this.shape_59.setTransform(-0.1,-23.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(15,36,0,0.141)").ss(0.2,2,0,60,true).p("AichNIE5AAIAACbIk5AAg");
	this.shape_60.setTransform(-0.1,-24.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#66FF00").s().p("AicBOIAAibIE5AAIAACbg");
	this.shape_61.setTransform(-0.1,-24.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#66FF00").s().p("AicBaIAAizIE5AAIAACzg");
	this.shape_62.setTransform(-0.1,-26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},49).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_62}]},1).wait(33));

	// 6
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#66FF00").ss(0.4,2,0,60,true).p("ACbAAIABAAAibAAIACAA");
	this.shape_63.setTransform(0,8.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#330099").ss(0.4,2,0,60,true).p("ACcgBIAAADAibACIAAgD");
	this.shape_64.setTransform(0,8.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AibgEIE3AAIAAAJIk3AAg");
	this.shape_65.setTransform(0,1.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#66FF00").s().p("ACbAhIABAAIAAAEIgBgEgAibAhIACAAIgCAEgAibgaIAAgKIE3AAIAAAKg");
	this.shape_66.setTransform(0,4.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(87,219,0,0.859)").ss(0.9,2,0,60,true).p("AibgQIE3AAIAAAZIAAAIIj4AAIg/AAIAAAAg");
	this.shape_67.setTransform(0,0.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AkugEIE3AAIj5AHIg+ACIAAgCg");
	this.shape_68.setTransform(14.7,1.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#66FF00").s().p("AibAQIAAAAIAAghIE3AAIAAAZIk3AAIE3AAIj4AIIg/AAIAAgIIAAAIIA/AAIg/ACgAhcAQID4gIIAAAIgAibAQg");
	this.shape_69.setTransform(0,0.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(73,182,0,0.714)").ss(0.7,2,0,60,true).p("AibgcIE3AAIAAAzIAAAGIjJAAIhuAAIAAAAg");
	this.shape_70.setTransform(0,-1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AkugEIE3AAIjKAFIhtAEIAAgEg");
	this.shape_71.setTransform(14.7,1.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#66FF00").s().p("AibAcIAAAAIAAg6IE3AAIAAAzIk3AAIE3AAIjJAHIhuAAIAAgHIAAAHIBuAAIhuADgAgtAcIDJgHIAAAHgAibAcg");
	this.shape_72.setTransform(0,-1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(58,146,0,0.573)").ss(0.6,2,0,60,true).p("AicgoIE5AAIAABNIAAAEIiNAAIirAAIgBAAg");
	this.shape_73.setTransform(0,-2.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AkugEIE3AAIiMAEIirAFIAAgFg");
	this.shape_74.setTransform(14.7,1.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#66FF00").s().p("AiaAnIgBAAIAAhSIE3AAIAABNIk2AAIE2AAIiMAFIiqAAIAAgFIAAAFICqAAIiqAFgAAQAnICMgFIAAAFgAiaAng");
	this.shape_75.setTransform(0,-2.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(44,109,0,0.427)").ss(0.5,2,0,60,true).p("Aicg1IE5AAIAABoIAAADIheAAIjZAAIgCAAg");
	this.shape_76.setTransform(-0.1,-4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AkugEIE3AAIhdADIjaAGIAAgGg");
	this.shape_77.setTransform(14.7,1.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#66FF00").s().p("AiaAyIgCAAIAAhqIE5AAIAABnIk3AAIE3AAIheADIjZAAIAAgDIAAADIDZAAIjZAHgAA/AyIBegDIAAADgAiaAyg");
	this.shape_78.setTransform(-0.1,-3.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(29,73,0,0.286)").ss(0.3,2,0,60,true).p("AichBIE5AAIAACCIAAABIgfAAIkYAAIgCAAg");
	this.shape_79.setTransform(-0.1,-5.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AkugEIE3AAIgfABIkYAIIAAgIg");
	this.shape_80.setTransform(14.7,1.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#66FF00").s().p("AiaA9IgCAAIAAiCIE5AAIAACBIk3AAIE3AAIgfABIkYAAIAAgBIAAABIEYAAIkYAJgAB+A9IAfgBIAAABgAiaA9g");
	this.shape_81.setTransform(-0.1,-5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(15,36,0,0.141)").ss(0.2,2,0,60,true).p("AichNIE5AAIAACbIk5AAg");
	this.shape_82.setTransform(-0.1,-6.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AkugEIE3AAIk3AJg");
	this.shape_83.setTransform(14.7,1.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#66FF00").s().p("AiaBJIE3AAIk3AKgAicBJIAAibIE5AAIAACbg");
	this.shape_84.setTransform(-0.1,-6.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#66FF00").s().p("ACcB8IABAAIAAAEIgBgEgAiaB8IACAAIgCAEgAiaBAIAAgKIE3AAIAAAKgAicA0IAAizIE5AAIAACzg");
	this.shape_85.setTransform(-0.1,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},41).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).wait(41));

	// 5
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#66FF00").ss(0.4,2,0,60,true).p("ACbAAIABAAAibAAIACAA");
	this.shape_86.setTransform(0,44.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#330099").ss(0.4,2,0,60,true).p("ACcgBIAAADAibACIAAgD");
	this.shape_87.setTransform(0,44.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AibgEIE3AAIAAAJIk3AAg");
	this.shape_88.setTransform(0,37.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#66FF00").s().p("ACbAhIABAAIAAAEIgBgEgAibAhIACAAIgCAEgAibgaIAAgKIE3AAIAAAKg");
	this.shape_89.setTransform(0,40.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(87,219,0,0.859)").ss(0.9,2,0,60,true).p("AibgQIE3AAIAAAhIk3AAg");
	this.shape_90.setTransform(0,33.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#66FF00").s().p("AibARIAAghIE3AAIAAAhg");
	this.shape_91.setTransform(0,33.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(73,182,0,0.714)").ss(0.7,2,0,60,true).p("AibgcIE3AAIAAA5Ik3AAg");
	this.shape_92.setTransform(0,29.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#66FF00").s().p("AibAdIAAg5IE3AAIAAA5g");
	this.shape_93.setTransform(0,29.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(58,146,0,0.573)").ss(0.6,2,0,60,true).p("AicgoIE5AAIAABSIk5AAg");
	this.shape_94.setTransform(0,25.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#66FF00").s().p("AibApIAAhRIE3AAIAABRg");
	this.shape_95.setTransform(0,25.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(44,109,0,0.427)").ss(0.5,2,0,60,true).p("Aicg1IE5AAIAABqIk5AAg");
	this.shape_96.setTransform(-0.1,21.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#66FF00").s().p("AicA2IAAhqIE5AAIAABqg");
	this.shape_97.setTransform(-0.1,21.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(29,73,0,0.286)").ss(0.3,2,0,60,true).p("AichBIE5AAIAACDIk5AAg");
	this.shape_98.setTransform(-0.1,17.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#66FF00").s().p("AicBCIAAiDIE5AAIAACDg");
	this.shape_99.setTransform(-0.1,17.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(15,36,0,0.141)").ss(0.2,2,0,60,true).p("AichNIE5AAIAACbIk5AAg");
	this.shape_100.setTransform(-0.1,13.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#66FF00").s().p("AicBOIAAibIE5AAIAACbg");
	this.shape_101.setTransform(-0.1,13.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#66FF00").s().p("AicBaIAAizIE5AAIAACzg");
	this.shape_102.setTransform(-0.1,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},33).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_102}]},1).wait(49));

	// 4
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#66FF00").ss(0.4,2,0,60,true).p("ACbAAIABAAAibAAIACAA");
	this.shape_103.setTransform(0,43.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#330099").ss(0.4,2,0,60,true).p("ACcgBIAAADAibACIAAgD");
	this.shape_104.setTransform(0,44);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AibgEIE3AAIAAAJIk3AAg");
	this.shape_105.setTransform(0,37.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#66FF00").s().p("ACbAhIABAAIAAAEIgBgEgAibAhIACAAIgCAEgAibgaIAAgKIE3AAIAAAKg");
	this.shape_106.setTransform(0,40.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("rgba(87,219,0,0.859)").ss(0.9,2,0,60,true).p("AibgQIE3AAIAAAhIk3AAg");
	this.shape_107.setTransform(0,36);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#66FF00").s().p("AibARIAAghIE3AAIAAAhg");
	this.shape_108.setTransform(0,36);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("rgba(73,182,0,0.714)").ss(0.7,2,0,60,true).p("AibgcIE3AAIAAA5Ik3AAg");
	this.shape_109.setTransform(0,34.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#66FF00").s().p("AibAdIAAg5IE3AAIAAA5g");
	this.shape_110.setTransform(0,34.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("rgba(58,146,0,0.573)").ss(0.6,2,0,60,true).p("AicgoIE5AAIAABRIk5AAg");
	this.shape_111.setTransform(0,33.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#66FF00").s().p("AibApIAAhRIE3AAIAABRg");
	this.shape_112.setTransform(0,33.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("rgba(44,109,0,0.427)").ss(0.5,2,0,60,true).p("Aicg1IE5AAIAABrIk5AAg");
	this.shape_113.setTransform(-0.1,31.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#66FF00").s().p("AicA2IAAhrIE5AAIAABrg");
	this.shape_114.setTransform(-0.1,31.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("rgba(29,73,0,0.286)").ss(0.3,2,0,60,true).p("AichBIE5AAIAACDIk5AAg");
	this.shape_115.setTransform(-0.1,30.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#66FF00").s().p("AicBCIAAiDIE5AAIAACDg");
	this.shape_116.setTransform(-0.1,30.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("rgba(15,36,0,0.141)").ss(0.2,2,0,60,true).p("AichNIE5AAIAACbIk5AAg");
	this.shape_117.setTransform(-0.1,29.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#66FF00").s().p("AicBOIAAibIE5AAIAACbg");
	this.shape_118.setTransform(-0.1,29.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#66FF00").s().p("AicBaIAAizIE5AAIAACzg");
	this.shape_119.setTransform(-0.1,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},25).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_119}]},1).wait(57));

	// 3
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#66FF00").ss(0.4,2,0,60,true).p("ACbAAIABAAAibAAIACAA");
	this.shape_120.setTransform(0,61.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#330099").ss(0.4,2,0,60,true).p("ACcgBIAAADAibACIAAgD");
	this.shape_121.setTransform(0,62);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AibgEIE3AAIAAAJIk3AAg");
	this.shape_122.setTransform(0,55.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#66FF00").s().p("ACbAhIABAAIAAAEIgBgEgAibAhIACAAIgCAEgAibgaIAAgKIE3AAIAAAKg");
	this.shape_123.setTransform(0,58.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("rgba(87,219,0,0.859)").ss(0.9,2,0,60,true).p("AibgQIE3AAIAAAhIk3AAg");
	this.shape_124.setTransform(0,54);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#66FF00").s().p("AibARIAAghIE3AAIAAAhg");
	this.shape_125.setTransform(0,54);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("rgba(73,182,0,0.714)").ss(0.7,2,0,60,true).p("AibgcIE3AAIAAA5Ik3AAg");
	this.shape_126.setTransform(0,52.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#66FF00").s().p("AibAdIAAg5IE3AAIAAA5g");
	this.shape_127.setTransform(0,52.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("rgba(58,146,0,0.573)").ss(0.6,2,0,60,true).p("AicgoIE5AAIAABRIk5AAg");
	this.shape_128.setTransform(0,51.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#66FF00").s().p("AibApIAAhRIE3AAIAABRg");
	this.shape_129.setTransform(0,51.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("rgba(44,109,0,0.427)").ss(0.5,2,0,60,true).p("Aicg1IE5AAIAABrIk5AAg");
	this.shape_130.setTransform(-0.1,49.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#66FF00").s().p("AicA2IAAhrIE5AAIAABrg");
	this.shape_131.setTransform(-0.1,49.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("rgba(29,73,0,0.286)").ss(0.3,2,0,60,true).p("AichBIE5AAIAACDIk5AAg");
	this.shape_132.setTransform(-0.1,48.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#66FF00").s().p("AicBCIAAiDIE5AAIAACDg");
	this.shape_133.setTransform(-0.1,48.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("rgba(15,36,0,0.141)").ss(0.2,2,0,60,true).p("AichNIE5AAIAACbIk5AAg");
	this.shape_134.setTransform(-0.1,47.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#66FF00").s().p("AicBOIAAibIE5AAIAACbg");
	this.shape_135.setTransform(-0.1,47.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#66FF00").s().p("AicBaIAAizIE5AAIAACzg");
	this.shape_136.setTransform(-0.1,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},17).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_136}]},1).wait(65));

	// 2
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#66FF00").ss(1,2,0,60,true).p("AibgEIE3AAIAAAJIk3AAg");
	this.shape_137.setTransform(0,73.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#66FF00").ss(0.4,2,0,60,true).p("ACbAAIABAAAibAAIACAA");
	this.shape_138.setTransform(0,79.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#330099").ss(0.4,2,0,60,true).p("ACcgBIAAADAibACIAAgD");
	this.shape_139.setTransform(0,80);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#66FF00").s().p("ACbAhIABAAIAAAEIgBgEgAibAhIACAAIgCAEgAibgaIAAgKIE3AAIAAAKg");
	this.shape_140.setTransform(0,76.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("rgba(87,219,0,0.859)").ss(0.9,2,0,60,true).p("AibgQIE3AAIAAAhIk3AAg");
	this.shape_141.setTransform(0,72);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#66FF00").s().p("AibARIAAghIE3AAIAAAhg");
	this.shape_142.setTransform(0,72);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("rgba(73,182,0,0.714)").ss(0.7,2,0,60,true).p("AibgcIE3AAIAAA5Ik3AAg");
	this.shape_143.setTransform(0,70.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#66FF00").s().p("AibAdIAAg5IE3AAIAAA5g");
	this.shape_144.setTransform(0,70.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("rgba(58,146,0,0.573)").ss(0.6,2,0,60,true).p("AicgoIE5AAIAABRIk5AAg");
	this.shape_145.setTransform(0,69.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#66FF00").s().p("AibApIAAhRIE3AAIAABRg");
	this.shape_146.setTransform(0,69.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("rgba(44,109,0,0.427)").ss(0.5,2,0,60,true).p("Aicg1IE5AAIAABrIk5AAg");
	this.shape_147.setTransform(-0.1,67.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#66FF00").s().p("AicA2IAAhrIE5AAIAABrg");
	this.shape_148.setTransform(-0.1,67.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("rgba(29,73,0,0.286)").ss(0.3,2,0,60,true).p("AichBIE5AAIAACDIk5AAg");
	this.shape_149.setTransform(-0.1,66.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#66FF00").s().p("AicBCIAAiDIE5AAIAACDg");
	this.shape_150.setTransform(-0.1,66.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("rgba(15,36,0,0.141)").ss(0.2,2,0,60,true).p("AichNIE5AAIAACbIk5AAg");
	this.shape_151.setTransform(-0.1,65.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#66FF00").s().p("AicBOIAAibIE5AAIAACbg");
	this.shape_152.setTransform(-0.1,65.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#66FF00").s().p("AicBaIAAizIE5AAIAACzg");
	this.shape_153.setTransform(-0.1,63.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137}]},9).to({state:[{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_144},{t:this.shape_143}]},1).to({state:[{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_152},{t:this.shape_151}]},1).to({state:[{t:this.shape_153}]},1).wait(73));

	// 1
	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#66FF00").s().p("AgJAKIAAgGIABgCIAAgBIAAgBIAAAAIABAAIAAgCIAAAAIAAgBIABgBIAAAAIABAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAAAIABgCIABAAIAAAAIADAAIAAAAIABAAIAAABIABAAIABACIABAAIAAAAIAAAAIAAABIABAAIAAABIAAAAIAAAAIABABIAAABIAAAAIABAAIAAABIAAABIAAABIABAAIAAABIAAAIg");
	this.shape_154.setTransform(0,90);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#66FF00").s().p("AAOAVIgBAAIgCAAIgHAAIgCAAIAAAAIgBAAIAAAAIgCgBIgDgBIgCAAIAAAAIgBAAIgEgBIAAgBIgCAAIAAAAIgBgBIAAAAIgBgBIAAAAIgBgBIAAgBIgBAAIAAgBIAAAAIAAAAIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAAAIgBgBIAAgBIAAAAIAAgBIgCgCIAAgBIAAgBIgGgFIAAgFIAIgEIABgBIACAAIACgBIABAAIACgBIAEgBIAAAAIACgBIACAAIACgBIACAAIAAgBIABAAIABAAIAFgBIACAAIABAAIAJAAIACAAIAEAAIADABIAAABIAAACIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAADIAAABIAAABIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIgBACIAAAAIAAABIAAABIgBABIgBABIABAAIgBAAIAAABIgBABIAAAAIAAABIAAABIgBABIAAABIgBABIgBACIgBABIAAABIAAAAIgBAAIAAABIgBAAIAAABIgBAAIgBAAIgBAAg");
	this.shape_155.setTransform(-0.2,88.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#66FF00").s().p("AAOAhIgFAAIgIAAIgCAAIgBAAIgBAAIgBgBIAAAAIgBAAIAAAAIgBAAIAAAAIgJgDIgCgBIgBAAIgBgBIgFgCIgBgBIgCAAIAAgBIAAAAIgBAAIgBgBIgCgCIAAAAIgBgCIgDgDIAAAAIgBAAIAAgBIAAAAIAAgBIgBAAIAAAAIAAgBIAAAAIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBgBIAAAAIAAgBIgBgBIAAAAIAAgBIgBgBIAAAAIAAAAIgCgFIAAgBIAAAAIAAgBIgFgOIAAgEIAHgBIAFgBIACAAIADgCIACAAIAGgBIACAAIAJgBIACAAIADgBIADAAIAGgBIACAAIAEAAIAIgBIAEAAIABgBIAPAAIACABIAEAAIACAAIACAAIAEABIAAABIABADIAAAFIAAABIAAABIAAADIAAACIAAACIAAABIgBAFIAAABIAAAAIgBAAIAAABIABABIAAAAIgBAAIAAABIAAABIgBAAIABAAIgBAAIAAABIAAAAIgBAAIAAACIgBABIAAABIAAAAIgBABIAAAAIgBABIAAAAIgCADIAAABIgBABIAAABIgBACIgBAAIAAABIgBAAIgBACIgBAAIAAABIgBACIgBAAIgBACIAAABIgBABIgDACIAAAAIgBAAIAAACIgBAAIAAABIgBAAIAAABIgBABIgBAAIgBAAIgBABIgBAAIAAAAIgBAAIAAAAIgCABIgBAAIgBAAg");
	this.shape_156.setTransform(-0.1,87.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#66FF00").s().p("AAQAsIgIAAIgLAAIgDAAIgCAAIgBAAIgBgBIgBAAIgBgBIAAABIAAAAIgBgBIAAAAIgNgEIgDgBIAAAAIgBgBIgIgDIAAgBIgCgBIAAgBIgBAAIgCgBIgBgCIgDgCIgBgBIgBgCIgCgCIAAgBIgCgBIAAgBIgBAAIAAgBIgBAAIAAgBIAAAAIgBAAIAAgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIgBgBIAAAAIAAAAIgBgCIAAAAIgBgCIgBgCIAAAAIAAgBIgBgBIAAAAIgBAAIgCgIIAAgCIAAgBIAAgBIgFgUIAAgDIASgCIAEAAIAEgBIAbgCIADAAIADgBIAQgBIACAAIAWgBIADAAIATAAIADAAIARABIABANIAAACIAAACIAAADIgBADIAAACIAAADIgBAGIAAABIAAABIgBAAIAAABIAAABIAAABIAAAAIgBABIAAABIgBABIABAAIgBAAIAAAAIAAAAIgBABIAAABIgCACIAAABIAAAAIgBABIAAABIAAAAIgBABIgBABIAAABIgEAFIAAABIgCABIAAABIgDADIAAABIgBABIAAAAIgBACIgCABIAAABIgCABIAAAAIgBABIgBABIgBACIgBABIgFADIAAAAIgBAAIgBACIAAAAIgBABIgBAAIAAAAIAAABIgCABIgBAAIgBABIgBAAIgBAAIgCAAIAAABIAAgBIgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABIgCAAIgCAAg");
	this.shape_157.setTransform(-0.1,86.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#66FF00").s().p("AAHA4IgNAAIgBgBIgEAAIgBAAIgCgBIAAAAIgDAAIgCgBIgCAAIAAgBIgIgCIgDgCIgEAAIgCgCIgCgBIAAABIgCgCIgIgEIgBgBIgEgCIAAAAIgBgBIgBgBIAAAAIgBgBIgBgBIgDgDIgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgEgDIAAgBIgBgBIgBgBIgBgBIAAgBIgBAAIAAgBIAAAAIgBgBIAAgBIgBgBIAAAAIAAgBIgBgBIgBAAIAAgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIgBgCIAAAAIgBgCIAAAAIAAgBIgBgCIgBgBIgCgKIgBgDIAAgBIgBgCIgDgaIAAgDIAZgBIADgBIAqgBIAEgBIADAAIAEAAIAYgBIADAAIA9gBIAEABIALAAIAAABIAAAAIAAABIAAAAIAAAHIABAEIAAAJIgBAEIAAAEIgBADIAAAEIgCAHIAAACIgBAAIgBACIABACIgBAAIAAAAIAAABIgBABIAAAAIAAABIgBAAIABABIgBAAIgBABIAAAAIAAABIgBACIgCACIAAABIAAABIgBAAIAAACIgBABIAAAAIgBABIAAAAIgBACIAAABIgBAAIgEAFQgCAAABABIAAAAIAAABIgCABIAAABIgDACIAAABIgBABIgBABIAAABIgBAAIAAABIgBABIgBABIgCAAIAAACIgBAAIgBABIgBABIAAAAIgCACIgBABIgCABIgGAEIAAABIgBAAIgCABIAAAAIgCABIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBAAIgBABIgBAAIgCAAIgCABIgBAAIgCABIgEAAIAAABIgBAAIgDAAIAAABIgLAAg");
	this.shape_158.setTransform(-0.1,85.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#66FF00").s().p("AAHBDIgRAAIgBAAIgGAAIAAAAIgCgBIgBAAIgDgBIgDgBIgCAAIAAgBIgKgDIgEgCIgEgBIgDgCIgCgBIAAABIgCgCIgKgFIgBgCIgFgCIAAgBIgBgBIgCgBIAAAAIAAgBIgBgBIgFgEIgCgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgEgFIgBgBIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAAAIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIAAgCIgBgBIgBAAIAAgCIgBgBIAAAAIAAgBIgBgBIAAgBIgBgBIgCgCIAAgBIgBgCIAAgBIAAgBIgBgCIgBgBIgCgNIgCgEIAAgBIgBgDIgCgiIAfgBIAEgBIA0gBIAEAAIAngBIADAAIBdAAIABABIAAAAIgBAAIAAACIABAAIAAAJIAAAEIAAAMIgBAFIgBAEIgBAEIAAAEIgCAJIAAADIgBAAIAAACIgBABIAAABIAAAAIAAABIgBAAIAAABIAAABIgBABIgBAAIABABIgBAAIgBABIAAABIAAABIgBAAIgBADIgCACIAAACIAAABIgBAAIgBACIgBABIAAABIAAAAIgCABIgBACIAAABIgBAAIgFAGQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAABAAIgBABIAAABIgCABIgBABIgDADIAAABIgBAAIgBADIAAAAIgCABIAAABIgCABIAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAIAAACIgBAAIgCABIgBABIAAABIgDACIgBABIgCABIgHAFIgBABIgBAAIgCABIgBAAIgCABIAAAAIAAABIgBAAIgBABIgCABIAAAAIgDAAIAAABIgBAAIAAAAIgBAAIgCABIgCABIgCAAIgDABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABIAAAAIgCAAIgEABIAAAAIgMAAg");
	this.shape_159.setTransform(0,84.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#66FF00").s().p("AAFBOIgUAAIgBAAIgGgBIAAAAIgDgBIgBAAIgEgBIAAAAIgCgBIgBABIgDgBIgBAAIgLgFIgDgCIgGgBIgDgCIgCgBIgBABIgCgCIgLgHIgCgCIgFgCIAAgBIgBgCIgCAAIAAgBIgBAAIgBgCIgGgGIgBgBQAAgCgEgCIgEgFIgBgBIgCgBIAAgBIgCgCIgBAAIAAgBIAAgBIgBgBIAAAAIgBgBIAAgBIgBAAIAAgBIgBgCIAAAAIAAgCIgBgBIgBgBIgBgBIgBgBIgBAAIAAgCIgCgCIAAgBIAAgBIgBgBIgBgCIgBgCIAAgBIgBgDIgBgBIgCgFIgBgBIAAAAIgCgOIgCgGIAAAAIgBgDIgBgpIEMgBIAAAAIABAAIgBAAIAAACIABABIAAAdIgBAGIgBAGIgBAEIgBAFIgCALIAAACIgBABIgBABIgBACIABABIgBAAIAAABIgBABIgBABIAAABIgBABIAAABIAAAAIgBAAIABABIgBAAIgBACIAAAAIAAABIgBAEIgDACIgBACIAAAAIgBABIgBADIgBABIAAABIgBABIAAABIgBAAIgBABIAAACIgBAAIgHAIQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIgBAAIAAABIgDACIgBABIgDADIgBABIgBABIgBADIAAAAIgCABIAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAIAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgBACIAAAAIgDACIgBABIgBAAIgCACIgCACIgDABQgFACgDADIgBABIgCAAIgBACIgBAAIgCABIgBAAIgBAAIAAAAIgCACIgCABIAAABIgDAAIAAABIgBAAIgBAAIgBAAIgDABIgCAAIAAABIAAgBIgBABIgCgBIgCABIgFABIgBABIgCAAIgEABIAAAAIgQAAg");
	this.shape_160.setTransform(0,83);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#66FF00").s().p("AgTBaIgBgBIgHAAIgBAAIgDgBIgBAAIgEgBIAAAAIgDgBIgBAAIgBAAIgCAAIgBgBIgNgFIgEgDIgGgBIgEgDIgCgBIgBAAIgCgCIgOgIIgBgCIgFgCIAAgBIgCgBIgDgCIAAgBIgBAAIgBgDQgDgDgDgCIgDgCQAAgCgDgCIgGgHIgBgBIgCgBIAAgBIgBgCIgCgBIAAAAIgBgBIAAgBIAAgBIgBgBIgBgBIAAgBIgBgBIgBgCIAAAAIgBgCIgBgBIgBAAIAAgCIgBgCIgBgBIgBgBIgBgCIgBAAIAAgBIAAgBIgBgCIgCgCIAAAAIgBgDIAAAAIgBgEIgBgBIAAgCIgCgDIgBgCIAAAAIgDgRIgCgGIAAgBIgBgEIAAguIE3AAIAAAAIAAABIAAABIAAAAIAAACIAAAAIAAAiIgBAGIgCAMIgFAVIgBABIgBABIAAACIgBACIAAAAIAAABIgBABIgBABIAAACIAAAAIgBABIAAAAIgBABIABABIgBAAIgBACIAAABIgBAAIgBAEIAAAAIgDAEIgBACIAAAAIgBABQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCABIAAABIgBABIAAABIgBAAIgBACIgBABIgBABIgIAIQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABABAAIgBABIAAAAIgDACIgBABIgEAEIgBACIgBABIgCACIAAAAIgCABIAAABIgDACIgBABQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABIgBABIgBABIgCABIgBABIgBABIgEACIgCACIgDABIgKAGIgBABIgBAAIgDACIgBAAIgCABIgBAAIAAABIgBAAIgCABIgDABIgBABIgCABIgBAAIAAAAIgBABIgCAAIgDABIgDABIAAAAIAAAAIgBAAIgBAAIgEABQgEgBgCACIAAAAIgDAAIgEABIgBABg");
	this.shape_161.setTransform(0,81.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).wait(81));

	// white
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("Ag8OAIgBgBIgBAAIgIgEIAAAAIgBAAQgRgKgQgNIgEgEIgCgCIgCgDIgCgCIgBAAIgDgEQgIgJgGgKIAAgBIgBgBIgCgCIgBgBQgTgjAAgqIAA3fQAAglAPgfQALgXATgTQAvguA/AAQBBAAAtAuQAuAuAABAIAAXfQAAARgDAPIgCAJQgEANgFALIgCAFIgBABIgEAIQgIAMgKALIgBABIgDAEIgDADIgCACIgMALIgBABIgQALIgFACQghATgpAAQggAAgcgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape_162).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-92.3,34.2,184.6);


(lib.fruit2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2copy();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-0.3,0.142,0.142,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fruit2, new cjs.Rectangle(-40.5,-35.3,81.2,70.7), null);


(lib.about_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אודות", "15px 'Arial'", "#006699");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 37;
	this.text.parent = this;
	this.text.setTransform(36.1,6.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(1.5,1,1).p("AilAAIFLAA");
	this.shape.setTransform(35.9,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AjjhVIHHAAIAACrInHAAg");
	this.shape_1.setTransform(35.2,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjiBWIAAirIHFAAIAACrg");
	this.shape_2.setTransform(35.2,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.about_btn, new cjs.Rectangle(11.4,4.9,47.5,23.6), null);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-963);

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,963);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479.6,-2204.8,959.3,4409.6);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-963);

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,963);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479.6,-2204.8,959.3,4409.6);


(lib.results_pg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.true8 = new lib.fruit2();
	this.true8.parent = this;
	this.true8.setTransform(57.7,83.9,0.872,0.872,30,0,0,0.1,-0.1);

	this.true7 = new lib.fruit1();
	this.true7.parent = this;
	this.true7.setTransform(158.8,85.4,0.788,0.788);

	this.true3 = new lib.fruit1();
	this.true3.parent = this;
	this.true3.setTransform(158.8,2.8,0.788,0.788);

	this.true4 = new lib.fruit2();
	this.true4.parent = this;
	this.true4.setTransform(57.7,4.1,0.872,0.872,30,0,0,0.1,-0.1);

	this.true10 = new lib.fruit2();
	this.true10.parent = this;
	this.true10.setTransform(249.9,172.7,0.872,0.872,30,0,0,0.1,-0.1);

	this.true6 = new lib.fruit2();
	this.true6.parent = this;
	this.true6.setTransform(249.9,86.9,0.872,0.872,30,0,0,0.1,-0.1);

	this.true9 = new lib.fruit1();
	this.true9.parent = this;
	this.true9.setTransform(356.9,166.8,0.788,0.788);

	this.true5 = new lib.fruit1();
	this.true5.parent = this;
	this.true5.setTransform(356.9,85.4,0.788,0.788);

	this.true1 = new lib.fruit1();
	this.true1.parent = this;
	this.true1.setTransform(356.9,2.8,0.788,0.788);

	this.true2 = new lib.fruit2();
	this.true2.parent = this;
	this.true2.setTransform(249.9,7,0.872,0.872,30,0,0,0.1,-0.1);

	this.wrong_items = new cjs.Text("", "18px 'Arial'", "#006699");
	this.wrong_items.name = "wrong_items";
	this.wrong_items.textAlign = "center";
	this.wrong_items.lineHeight = 22;
	this.wrong_items.lineWidth = 175;
	this.wrong_items.parent = this;
	this.wrong_items.setTransform(-201.7,-67.1);

	this.correct_items = new cjs.Text("", "18px 'Arial'", "#006699");
	this.correct_items.name = "correct_items";
	this.correct_items.textAlign = "center";
	this.correct_items.lineHeight = 22;
	this.correct_items.lineWidth = 188;
	this.correct_items.parent = this;
	this.correct_items.setTransform(199.8,-67.1);

	this.star8 = new cjs.Text("", "18px 'Arial'", "#FF0000");
	this.star8.name = "star8";
	this.star8.textAlign = "center";
	this.star8.lineHeight = 22;
	this.star8.lineWidth = 9;
	this.star8.parent = this;
	this.star8.setTransform(104.8,60.4);

	this.star4 = new cjs.Text("", "18px 'Arial'", "#FF0000");
	this.star4.name = "star4";
	this.star4.textAlign = "center";
	this.star4.lineHeight = 22;
	this.star4.lineWidth = 9;
	this.star4.parent = this;
	this.star4.setTransform(104.8,-21.2);

	this.star7 = new cjs.Text("", "18px 'Arial'", "#FF0000");
	this.star7.name = "star7";
	this.star7.textAlign = "center";
	this.star7.lineHeight = 22;
	this.star7.lineWidth = 9;
	this.star7.parent = this;
	this.star7.setTransform(177.2,60.4);

	this.star3 = new cjs.Text("", "18px 'Arial'", "#FF0000");
	this.star3.name = "star3";
	this.star3.textAlign = "center";
	this.star3.lineHeight = 22;
	this.star3.lineWidth = 9;
	this.star3.parent = this;
	this.star3.setTransform(177.2,-21.2);

	this.star10 = new cjs.Text("", "18px 'Arial'", "#FF0000");
	this.star10.name = "star10";
	this.star10.textAlign = "center";
	this.star10.lineHeight = 22;
	this.star10.lineWidth = 9;
	this.star10.parent = this;
	this.star10.setTransform(289.5,153.8);

	this.star6 = new cjs.Text("", "18px 'Arial'", "#FF0000");
	this.star6.name = "star6";
	this.star6.textAlign = "center";
	this.star6.lineHeight = 22;
	this.star6.lineWidth = 9;
	this.star6.parent = this;
	this.star6.setTransform(289.5,60.4);

	this.star2 = new cjs.Text("", "18px 'Arial'", "#FF0000");
	this.star2.name = "star2";
	this.star2.textAlign = "center";
	this.star2.lineHeight = 22;
	this.star2.lineWidth = 9;
	this.star2.parent = this;
	this.star2.setTransform(289.5,-21.2);

	this.star9 = new cjs.Text("", "18px 'Arial'", "#FF0000");
	this.star9.name = "star9";
	this.star9.textAlign = "center";
	this.star9.lineHeight = 22;
	this.star9.lineWidth = 9;
	this.star9.parent = this;
	this.star9.setTransform(376.6,153.8);

	this.star5 = new cjs.Text("", "18px 'Arial'", "#FF0000");
	this.star5.name = "star5";
	this.star5.textAlign = "center";
	this.star5.lineHeight = 22;
	this.star5.lineWidth = 9;
	this.star5.parent = this;
	this.star5.setTransform(376.6,60.4);

	this.star1 = new cjs.Text("", "18px 'Arial'", "#FF0000");
	this.star1.name = "star1";
	this.star1.textAlign = "center";
	this.star1.lineHeight = 22;
	this.star1.lineWidth = 9;
	this.star1.parent = this;
	this.star1.setTransform(376.6,-21.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(2,1,1).p("EBA7gV0IAAFcMAAAAmJEhA6gQYIAAlkMCB1AAAABZwYIAAlZABZwYMhCTAAAEBA7AV9MiB1AAAMAAAgmVABZVqMAAAgmCEBA7gQYMg/iAAA");
	this.shape.setTransform(-10.5,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhA6AV9MAAAgmUMBCTAAAMhCTAAAIAAllMCB1AAAIAAAIIAAFdMg/iAAAIAAlaIAAFaMA/iAAAMAAAAmIIAAAMgABZVpMAAAgmAgABZwXg");
	this.shape_1.setTransform(-10.5,69.4);

	this.end_btn = new lib.end_btn();
	this.end_btn.parent = this;
	this.end_btn.setTransform(-141.6,241.4,1,1,0,0,0,0,-1);

	this.play_again_btn = new lib.play_again_btn();
	this.play_again_btn.parent = this;
	this.play_again_btn.setTransform(85.9,241.4,1,1,0,0,0,0,-1);

	this.text = new cjs.Text("פריטים שלא הצלחתם בניסיון הראשון *", "14px 'Arial'", "#CC0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 266;
	this.text.parent = this;
	this.text.setTransform(-11.5,-117.9);

	this.text_1 = new cjs.Text(":הביצועים שלכם", "18px 'Arial'", "#006699");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 177;
	this.text_1.parent = this;
	this.text_1.setTransform(-20.6,-151.7);

	this.text_2 = new cjs.Text(":זמן", "18px 'Arial'", "#006699");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 55;
	this.text_2.parent = this;
	this.text_2.setTransform(-117,-201.5);

	this.your_time = new cjs.Text("", "18px 'Arial'", "#006699");
	this.your_time.name = "your_time";
	this.your_time.textAlign = "center";
	this.your_time.lineHeight = 22;
	this.your_time.lineWidth = 96;
	this.your_time.parent = this;
	this.your_time.setTransform(-159.1,-201.5);

	this.text_3 = new cjs.Text(":ציון", "18px 'Arial'", "#006699");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 22;
	this.text_3.lineWidth = 55;
	this.text_3.parent = this;
	this.text_3.setTransform(181.4,-201.5);

	this.your_grade = new cjs.Text("", "18px 'Arial'", "#006699");
	this.your_grade.name = "your_grade";
	this.your_grade.textAlign = "center";
	this.your_grade.lineHeight = 22;
	this.your_grade.lineWidth = 96;
	this.your_grade.parent = this;
	this.your_grade.setTransform(139.2,-201.5);

	this.you_finished_game = new cjs.Text("", "20px 'Arial'", "#006699");
	this.you_finished_game.name = "you_finished_game";
	this.you_finished_game.textAlign = "center";
	this.you_finished_game.lineHeight = 24;
	this.you_finished_game.lineWidth = 373;
	this.you_finished_game.parent = this;
	this.you_finished_game.setTransform(-7.4,-260.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(173,221,230,0.898)").s().p("EhK/Ar3MAAAhXtMCV/AAAMAAABXtg");
	this.shape_2.setTransform(0.4,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.you_finished_game},{t:this.your_grade},{t:this.text_3},{t:this.your_time},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.play_again_btn},{t:this.end_btn},{t:this.shape_1},{t:this.shape},{t:this.star1},{t:this.star5},{t:this.star9},{t:this.star2},{t:this.star6},{t:this.star10},{t:this.star3},{t:this.star7},{t:this.star4},{t:this.star8},{t:this.correct_items},{t:this.wrong_items},{t:this.true2},{t:this.true1},{t:this.true5},{t:this.true9},{t:this.true6},{t:this.true10},{t:this.true4},{t:this.true3},{t:this.true7},{t:this.true8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.results_pg, new cjs.Rectangle(-479.6,-280.5,960,561.4), null);


(lib.pause_pg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text + cont_btn
	this.continue_btn = new lib.continue_btn();
	this.continue_btn.parent = this;
	this.continue_btn.setTransform(12.4,63.8,2.069,2.069,0,0,0,-0.1,0.1);

	this.text = new cjs.Text("המשחק בהשהייה", "45px 'Arial'", "#006699");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 380;
	this.text.parent = this;
	this.text.setTransform(21.5,-56.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.continue_btn}]}).wait(649));

	// snow
	this.instance = new lib.Tween14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-2429.2);

	this.instance_1 = new lib.Tween15("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1826.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},120).to({state:[{t:this.instance_1}]},528).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1641.1},120).to({_off:true,x:0,y:1826.7},528).wait(1));

	// background+skis
	this.instance_2 = new lib.skihandles2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-383,84,0.82,1);

	this.instance_3 = new lib.skiblades();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-335,31,0.68,0.755);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4DDE6").s().p("EhK7ArrMAAAhXVMCV3AAAMAAABXVg");

	this.continue_btn_1 = new lib.continue_btn();
	this.continue_btn_1.parent = this;
	this.continue_btn_1.setTransform(12.4,63.8,2.069,2.069,0,0,0,-0.1,0.1);

	this.text_1 = new cjs.Text("המשחק בהשהייה", "bold 45px 'Arial'", "#006699");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 52;
	this.text_1.lineWidth = 380;
	this.text_1.parent = this;
	this.text_1.setTransform(26.5,-56.7);

	this.instance_4 = new lib.Bitmap19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-440,17.8,0.613,0.665,-6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADDDE6").s().p("EhK7ArrMAAAhXVMCV3AAAMAAABXVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.shape_1},{t:this.instance_4},{t:this.text_1},{t:this.continue_btn_1}]},648).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-4634,959.7,4913.6);


(lib.treesMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1092.6,501.4,0.821,0.821,0,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,regY:0,scaleX:0.55,scaleY:0.55,x:-144.2,y:91.9},161).to({_off:true},1).wait(152));

	// Layer 3
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(489.1,587.1,0.616,0.616);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-229.7,234.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},155).to({state:[{t:this.instance_2}]},158).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(155).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:-229.7,y:234.2},158).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(872.9,420.8,438.7,161);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startbtn = new lib.Symbol1();
	this.startbtn.parent = this;
	this.startbtn.setTransform(-80.8,9.7,0.737,0.605,0,0,0,52.5,17.1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, פירות, 1, ערי בירה, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(45.1,11.5,1.327,1.046,0,0,0,49.9,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-111,-0.5,223.3,24), null);


(lib.confetti_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.confetti();
	this.instance.parent = this;
	this.instance.setTransform(681.2,-294,0.256,0.284,0,-63.6,-50.6,337.5,200.3);

	this.instance_1 = new lib.confetti();
	this.instance_1.parent = this;
	this.instance_1.setTransform(722.2,-479.6,0.267,0.273,0,-125.4,-139.6,337.3,200.2);

	this.instance_2 = new lib.confetti();
	this.instance_2.parent = this;
	this.instance_2.setTransform(771.2,-558.6,0.267,0.273,0,-125.4,-139.6,337.2,199.9);

	this.instance_3 = new lib.confetti();
	this.instance_3.parent = this;
	this.instance_3.setTransform(610.9,-683.4,0.267,0.273,0,-125.4,-139.6,337.4,200.3);

	this.instance_4 = new lib.confetti();
	this.instance_4.parent = this;
	this.instance_4.setTransform(563.2,-211.3,0.238,0.299,0,-99.4,-105.2,337.4,200);

	this.instance_5 = new lib.confetti();
	this.instance_5.parent = this;
	this.instance_5.setTransform(372.9,-174.1,0.265,0.275,0,-56.2,-42.1,337.4,200.1);

	this.instance_6 = new lib.confetti();
	this.instance_6.parent = this;
	this.instance_6.setTransform(585.8,-378.4,0.265,0.275,0,-56.2,-42.1,337.5,199.9);

	this.instance_7 = new lib.confetti();
	this.instance_7.parent = this;
	this.instance_7.setTransform(430.7,-460.5,0.25,0.289,0,-111.6,-123.2,337.1,200.2);

	this.instance_8 = new lib.confetti();
	this.instance_8.parent = this;
	this.instance_8.setTransform(567.3,-520.8,0.265,0.275,0,-56.2,-42.1,337.8,199.9);

	this.instance_9 = new lib.confetti();
	this.instance_9.parent = this;
	this.instance_9.setTransform(256,-365.4,0.237,0.299,0,-81.6,-76.3,337.9,200);

	this.instance_10 = new lib.confetti();
	this.instance_10.parent = this;
	this.instance_10.setTransform(395.6,-343,0.281,0.353,0,-99.9,-106.2,337.5,200.1);

	this.instance_11 = new lib.confetti();
	this.instance_11.parent = this;
	this.instance_11.setTransform(225.9,-189,0.265,0.275,0,-56.2,-42.1,337.6,200.1);

	this.instance_12 = new lib.confetti();
	this.instance_12.parent = this;
	this.instance_12.setTransform(225.9,-189,0.265,0.275,0,-56.2,-42.1,337.6,200.1);

	this.instance_13 = new lib.confetti();
	this.instance_13.parent = this;
	this.instance_13.setTransform(464.7,-599.3,0.265,0.275,0,-56.2,-42.1,337.9,199.7);

	this.instance_14 = new lib.confetti();
	this.instance_14.parent = this;
	this.instance_14.setTransform(125,-400.4,0.235,0.301,0,-93.3,-95.4,337.2,200.4);

	this.instance_15 = new lib.confetti();
	this.instance_15.parent = this;
	this.instance_15.setTransform(271.4,-506.8,0.249,0.29,0,-69.4,-58.2,337.2,200.3);

	this.instance_16 = new lib.confetti();
	this.instance_16.parent = this;
	this.instance_16.setTransform(99.3,121.4,0.235,0.235,6.8,0,0,337.3,200.1);

	this.instance_17 = new lib.confetti();
	this.instance_17.parent = this;
	this.instance_17.setTransform(280.3,69.5,0.235,0.235,-68.2,0,0,337.3,199.9);

	this.instance_18 = new lib.confetti();
	this.instance_18.parent = this;
	this.instance_18.setTransform(368.1,69.5,0.235,0.235,-68.2,0,0,337.3,199.9);

	this.instance_19 = new lib.confetti();
	this.instance_19.parent = this;
	this.instance_19.setTransform(426.3,-97.2,0.235,0.235,-68.2,0,0,337.6,200.1);

	this.instance_20 = new lib.confetti();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-15,74.7,0.235,0.235,-37.7,0,0,337.7,199.8);

	this.instance_21 = new lib.confetti();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-112.8,-42.5,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_22 = new lib.confetti();
	this.instance_22.parent = this;
	this.instance_22.setTransform(143.2,17.9,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_23 = new lib.confetti();
	this.instance_23.parent = this;
	this.instance_23.setTransform(164.6,-126.5,0.235,0.235,-52.7,0,0,337.5,199.9);

	this.instance_24 = new lib.confetti();
	this.instance_24.parent = this;
	this.instance_24.setTransform(265.1,-57,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_25 = new lib.confetti();
	this.instance_25.parent = this;
	this.instance_25.setTransform(19.8,-207.5,0.235,0.235,-15,0,0,337.8,199.8);

	this.instance_26 = new lib.confetti();
	this.instance_26.parent = this;
	this.instance_26.setTransform(46.9,-100,0.277,0.277,-38.5,0,0,337.7,200);

	this.instance_27 = new lib.confetti();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-149.1,-151.9,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_28 = new lib.confetti();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-149.1,-151.9,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_29 = new lib.confetti();
	this.instance_29.parent = this;
	this.instance_29.setTransform(301.1,-162.9,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_30 = new lib.confetti();
	this.instance_30.parent = this;
	this.instance_30.setTransform(7.1,-314.5,0.235,0.235,-30,0,0,337.4,200.2);

	this.instance_31 = new lib.confetti();
	this.instance_31.parent = this;
	this.instance_31.setTransform(152.4,-258.2,0.235,0.235,0,0,0,337,200.2);

	this.instance_32 = new lib.confetti();
	this.instance_32.parent = this;
	this.instance_32.setTransform(894.5,54,0.235,0.235,-57.5,0,0,337.4,200.2);

	this.instance_33 = new lib.confetti();
	this.instance_33.parent = this;
	this.instance_33.setTransform(926.4,-131.6,0.235,0.235,-132.5,0,0,337.3,200.2);

	this.instance_34 = new lib.confetti();
	this.instance_34.parent = this;
	this.instance_34.setTransform(964.5,-210.6,0.235,0.235,-132.5,0,0,337.3,199.8);

	this.instance_35 = new lib.confetti();
	this.instance_35.parent = this;
	this.instance_35.setTransform(839.8,-335.4,0.235,0.235,-132.5,0,0,337.6,200.2);

	this.instance_36 = new lib.confetti();
	this.instance_36.parent = this;
	this.instance_36.setTransform(802.7,136.7,0.235,0.235,-102,0,0,337.5,199.8);

	this.instance_37 = new lib.confetti();
	this.instance_37.parent = this;
	this.instance_37.setTransform(654.7,173.9,0.235,0.235,-49.2,0,0,337.4,200.1);

	this.instance_38 = new lib.confetti();
	this.instance_38.parent = this;
	this.instance_38.setTransform(820.3,-30.4,0.235,0.235,-49.2,0,0,337.5,200);

	this.instance_39 = new lib.confetti();
	this.instance_39.parent = this;
	this.instance_39.setTransform(699.6,-112.5,0.235,0.235,-117,0,0,337.2,200);

	this.instance_40 = new lib.confetti();
	this.instance_40.parent = this;
	this.instance_40.setTransform(805.9,-172.8,0.235,0.235,-49.2,0,0,337.7,199.8);

	this.instance_41 = new lib.confetti();
	this.instance_41.parent = this;
	this.instance_41.setTransform(563.7,-17.4,0.235,0.235,-79.2,0,0,337.9,199.9);

	this.instance_42 = new lib.confetti();
	this.instance_42.parent = this;
	this.instance_42.setTransform(672.3,5,0.277,0.277,-102.7,0,0,337.5,200);

	this.instance_43 = new lib.confetti();
	this.instance_43.parent = this;
	this.instance_43.setTransform(540.4,159,0.235,0.235,-49.2,0,0,337.5,200);

	this.instance_44 = new lib.confetti();
	this.instance_44.parent = this;
	this.instance_44.setTransform(540.4,159,0.235,0.235,-49.2,0,0,337.5,200);

	this.instance_45 = new lib.confetti();
	this.instance_45.parent = this;
	this.instance_45.setTransform(726.2,-251.3,0.235,0.235,-49.2,0,0,337.9,199.7);

	this.instance_46 = new lib.confetti();
	this.instance_46.parent = this;
	this.instance_46.setTransform(461.8,-52.4,0.235,0.235,-94.2,0,0,337.2,200.3);

	this.instance_47 = new lib.confetti();
	this.instance_47.parent = this;
	this.instance_47.setTransform(575.7,-158.8,0.235,0.235,-64.2,0,0,337.2,200.3);

	this.instance_48 = new lib.confetti();
	this.instance_48.parent = this;
	this.instance_48.setTransform(337.1,516.1,0.235,0.235,6.8,0,0,337.3,200.1);

	this.instance_49 = new lib.confetti();
	this.instance_49.parent = this;
	this.instance_49.setTransform(518.1,464.1,0.235,0.235,-68.2,0,0,337.3,199.9);

	this.instance_50 = new lib.confetti();
	this.instance_50.parent = this;
	this.instance_50.setTransform(605.9,464.1,0.235,0.235,-68.2,0,0,337.3,199.9);

	this.instance_51 = new lib.confetti();
	this.instance_51.parent = this;
	this.instance_51.setTransform(664.1,297.5,0.235,0.235,-68.2,0,0,337.6,200.1);

	this.instance_52 = new lib.confetti();
	this.instance_52.parent = this;
	this.instance_52.setTransform(222.8,469.3,0.235,0.235,-37.7,0,0,337.7,199.8);

	this.instance_53 = new lib.confetti();
	this.instance_53.parent = this;
	this.instance_53.setTransform(125,352.2,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_54 = new lib.confetti();
	this.instance_54.parent = this;
	this.instance_54.setTransform(381,412.5,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_55 = new lib.confetti();
	this.instance_55.parent = this;
	this.instance_55.setTransform(402.4,268.2,0.235,0.235,-52.7,0,0,337.5,199.9);

	this.instance_56 = new lib.confetti();
	this.instance_56.parent = this;
	this.instance_56.setTransform(502.9,337.7,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_57 = new lib.confetti();
	this.instance_57.parent = this;
	this.instance_57.setTransform(257.6,187.1,0.235,0.235,-15,0,0,337.8,199.8);

	this.instance_58 = new lib.confetti();
	this.instance_58.parent = this;
	this.instance_58.setTransform(284.7,294.7,0.277,0.277,-38.5,0,0,337.7,200);

	this.instance_59 = new lib.confetti();
	this.instance_59.parent = this;
	this.instance_59.setTransform(88.7,242.7,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_60 = new lib.confetti();
	this.instance_60.parent = this;
	this.instance_60.setTransform(88.7,242.7,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_61 = new lib.confetti();
	this.instance_61.parent = this;
	this.instance_61.setTransform(538.9,231.8,0.235,0.235,15,0,0,337.6,199.8);

	this.instance_62 = new lib.confetti();
	this.instance_62.parent = this;
	this.instance_62.setTransform(244.9,80.2,0.235,0.235,-30,0,0,337.4,200.2);

	this.instance_63 = new lib.confetti();
	this.instance_63.parent = this;
	this.instance_63.setTransform(390.2,136.5,0.235,0.235,0,0,0,337,200.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.confetti_new, new cjs.Rectangle(-237.8,-773.4,1290.4,1345.5), null);


(lib.cable_cars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// NEW
	this.instance = new lib.Tween20("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-338,159.9);

	this.instance_1 = new lib.Tween21("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(996.1,83.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},719).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:996.1,y:83.1},719).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1637,58.5,2598.1,201.8);


(lib.backgroundMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.logo = new lib.logo_1();
	this.logo.parent = this;
	this.logo.setTransform(936.9,13.3);

	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(0,30,0.653,0.653);

	this.text = new cjs.Text("איך משחקים", "15px 'Arial'", "#006699");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 83;
	this.text.parent = this;
	this.text.setTransform(113.6,6.7);

	this.text_1 = new cjs.Text("סקי-ידע", "18px 'Arial'", "#006699");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 68;
	this.text_1.parent = this;
	this.text_1.setTransform(882.9,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text},{t:this.instance},{t:this.logo}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundMC, new cjs.Rectangle(0,0,960,569.7), null);


(lib.about_pg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skihandles2();
	this.instance.parent = this;
	this.instance.setTransform(-288,61,0.585,0.714);

	this.instance_1 = new lib.skiblades();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-254,23,0.485,0.539);

	this.HIT_link = new lib.HIT_link();
	this.HIT_link.parent = this;
	this.HIT_link.setTransform(-17.2,123.6);

	this.text = new cjs.Text("מכון טכנולוגי חולון", "13px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 102;
	this.text.parent = this;
	this.text.setTransform(12.4,130.1);

	this.HIT_logo = new lib.HIT_logo();
	this.HIT_logo.parent = this;
	this.HIT_logo.setTransform(105.2,124.9);

	this.x_btn = new lib.x_btn();
	this.x_btn.parent = this;
	this.x_btn.setTransform(-299.7,-186.3);

	this.text_1 = new cjs.Text(":פותח במסגרת פרויקט בקורסים\nסביבות לימוד אינטראקטיביות 1 & אנימציה, תשע\"ח", "18px 'Arial'", "#006699");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 400;
	this.text_1.parent = this;
	this.text_1.setTransform(-0.5,-23);

	this.text_2 = new cjs.Text("שיר בריקמן וניצן גרין", "20px 'Arial'", "#006699");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 187;
	this.text_2.parent = this;
	this.text_2.setTransform(-57.1,-75.5);

	this.text_3 = new cjs.Text(":אפיון ופיתוח", "20px 'Arial'", "#006699");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 115;
	this.text_3.parent = this;
	this.text_3.setTransform(67.9,-76.5);

	this.text_4 = new cjs.Text("סקי-ידע", "50px 'Arial'", "#006699");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 58;
	this.text_4.lineWidth = 178;
	this.text_4.parent = this;
	this.text_4.setTransform(-6.7,-144.3);

	this.text_5 = new cjs.Text("אודות", "18px 'Arial'", "#006699");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 22;
	this.text_5.lineWidth = 51;
	this.text_5.parent = this;
	this.text_5.setTransform(273.9,-199.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(2,1,1).p("EAwGgflIAAEZMhbugABEgwFAfsMAAAg65IAAgGEAwGgbMMAAAA64EgwBAfsMBgFAAAEgrogfrMBbuAAA");
	this.shape.setTransform(-6.2,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAwEAfsMhgFAAAIgEAAIAAAAMAAAg65IEdAAIAAgHIAAkXMBbuAAAIAAAGIAAEZMhbugABMBbuAABMAAAA64gEAwGgbMg");
	this.shape_1.setTransform(-6.2,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(173,221,230,0.8)").s().p("EhK7Ar1MAAAhXpMCV3AAAMAAABXpgEgxDga3MAAAA65IAAAAIAAARMBgLAAAIAAgRMAAAg64IAAkZIAAgGIAAgIMhgLAAAIAAABIEdAAIAAAHIAAEXIkdAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.x_btn},{t:this.HIT_logo},{t:this.text},{t:this.HIT_link},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.about_pg, new cjs.Rectangle(-479.6,-280.5,959.3,561), null);


(lib.skiBoyMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_90 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_147 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_211 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(61).call(this.frame_90).wait(57).call(this.frame_147).wait(64).call(this.frame_211).wait(1));

	// confetti
	this.instance = new lib.confetti_new();
	this.instance.parent = this;
	this.instance.setTransform(591.5,-245.2,1,1,0,0,0,368.5,286.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(157).to({_off:false},0).wait(1).to({regX:407.4,regY:-100.7,x:630.4,y:-618},0).wait(1).to({y:-604.1},0).wait(1).to({y:-590.2},0).wait(1).to({y:-576.3},0).wait(1).to({y:-562.4},0).wait(1).to({y:-548.5},0).wait(1).to({y:-534.6},0).wait(1).to({y:-520.7},0).wait(1).to({y:-506.8},0).wait(1).to({y:-492.9},0).wait(1).to({y:-479},0).wait(1).to({y:-465.1},0).wait(1).to({y:-451.2},0).wait(1).to({y:-437.3},0).wait(1).to({y:-423.4},0).wait(1).to({y:-409.5},0).wait(1).to({y:-395.6},0).wait(1).to({y:-381.7},0).wait(1).to({y:-367.8},0).wait(1).to({y:-353.9},0).wait(1).to({y:-340},0).wait(1).to({y:-326.1},0).wait(1).to({y:-312.2},0).wait(1).to({y:-298.3},0).wait(1).to({y:-284.4},0).wait(1).to({y:-270.5},0).wait(1).to({y:-256.6},0).wait(1).to({y:-242.7},0).wait(1).to({y:-228.8},0).wait(1).to({y:-214.9},0).wait(1).to({y:-201},0).wait(1).to({y:-187.1},0).wait(1).to({y:-173.2},0).wait(1).to({y:-159.3},0).wait(1).to({y:-145.4},0).wait(1).to({y:-131.5},0).wait(1).to({y:-117.5},0).wait(1).to({y:-103.6},0).wait(1).to({y:-89.8},0).wait(1).to({y:-75.9},0).wait(1).to({y:-62},0).wait(1).to({y:-48.1},0).wait(1).to({y:-34.2},0).wait(1).to({y:-20.3},0).wait(1).to({y:-6.4},0).wait(1).to({y:7.5},0).wait(1).to({y:21.4},0).wait(1).to({y:35.3},0).wait(1).to({y:49.2},0).wait(1).to({y:63.1},0).wait(1).to({y:77},0).wait(1).to({y:90.9},0).wait(1).to({y:104.8},0).wait(1).to({y:118.8},0).wait(1));

	// end
	this.instance_1 = new lib.Symbol1copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-0.1,1.46,1.46,0.3,0,0,146.8,160.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(148).to({_off:false},0).wait(1).to({regX:162.9,regY:171.9,x:38.5,y:30.7},0).wait(1).to({x:53.4,y:44.5},0).wait(1).to({x:68.3,y:58.3},0).wait(1).to({x:83.2,y:72.2},0).wait(1).to({x:98.1,y:86},0).wait(1).to({x:113,y:99.8},0).wait(1).to({x:127.9,y:113.6},0).wait(1).to({x:142.8,y:127.4},0).wait(1).to({x:157.7,y:141.3},0).wait(1).to({x:172.6,y:155.1},0).wait(1).to({x:187.6,y:168.9},0).wait(1).to({x:198.1,y:176.1},0).wait(1).to({x:208.7,y:183.4},0).wait(1).to({x:219.3,y:190.6},0).wait(1).to({x:229.9,y:197.9},0).wait(1).to({x:240.4,y:205.1},0).wait(1).to({x:251,y:212.4},0).wait(1).to({x:261.6,y:219.6},0).wait(1).to({x:272.1,y:226.9},0).wait(1).to({x:282.7,y:234.1},0).wait(1).to({x:293.3,y:241.4},0).wait(1).to({x:303.9,y:248.6},0).wait(1).to({x:314.5,y:255.8},0).wait(1).to({x:324,y:258},0).wait(1).to({x:333.5,y:260.1},0).wait(1).to({x:343.1,y:262.3},0).wait(1).to({x:352.6,y:264.5},0).wait(1).to({x:362.2,y:266.7},0).wait(1).to({x:371.7,y:268.9},0).wait(1).to({x:381.2,y:271},0).wait(1).to({x:390.8,y:273.2},0).wait(1).to({x:400.3,y:275.4},0).wait(1).to({x:409.9,y:277.6},0).wait(1).to({x:419.4,y:279.7},0).wait(1).to({x:428.9,y:279.2},0).wait(1).to({x:438.4,y:278.7},0).wait(1).to({x:448,y:278.2},0).wait(1).to({x:457.5,y:277.7},0).wait(1).to({x:467,y:277.1},0).wait(1).to({x:476.5,y:276.6},0).wait(1).to({x:486,y:276.1},0).wait(1).to({x:495.6,y:275.6},0).wait(1).to({x:505.1,y:275},0).wait(1).to({x:514.6,y:274.5},0).wait(1).to({x:524.1,y:274},0).wait(1).to({x:531.5,y:273.3},0).wait(1).to({x:538.9,y:272.6},0).wait(1).to({x:546.3,y:272},0).wait(1).to({x:553.6,y:271.3},0).wait(1).to({x:561,y:270.6},0).wait(1).to({x:568.4,y:269.9},0).wait(1).to({x:575.8,y:269.3},0).wait(1).to({x:583.2,y:268.6},0).wait(1).to({x:590.6,y:267.9},0).wait(1).to({x:598,y:267.2},0).wait(1).to({x:607.1,y:265.2},0).wait(1).to({x:616.3,y:263.1},0).wait(1).to({x:625.5,y:261.1},0).wait(1).to({x:634.7,y:259},0).wait(1).to({x:643.9,y:257},0).wait(1).to({x:653.1,y:254.9},0).wait(1).to({x:662.3,y:252.9},0).wait(1).to({x:671.5,y:250.8},0).wait(1));

	// gate
	this.instance_2 = new lib.gate_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(701,193,1,1,0,0,0,-0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(148).to({_off:false},0).wait(64));

	// wrong X
	this.instance_3 = new lib.X();
	this.instance_3.parent = this;
	this.instance_3.setTransform(166,-59,0.361,0.361);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({_off:true},49).wait(64));

	// wrong
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9.9,8.5,1,1,0,0,0,81.9,86.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.skiboysad();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-72,-78,0.236,0.236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},99).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).wait(1).to({rotation:-1.1,x:13.9,y:4.3},0).wait(1).to({rotation:-2.2,x:17.9,y:0.1},0).wait(1).to({rotation:-3.3,x:21.8,y:-4.2},0).wait(1).to({rotation:-4.4,x:25.7,y:-8.5},0).wait(1).to({rotation:-5.4,x:29.7,y:-12.8},0).wait(1).to({rotation:-6.5,x:33.6,y:-17},0).wait(1).to({rotation:-7.6,x:37.6,y:-21.3},0).wait(1).to({rotation:-8.7,x:41.5,y:-25.5},0).wait(1).to({rotation:-9.8,x:45.5,y:-29.8},0).wait(1).to({rotation:-10.9,x:49.4,y:-34.1},0).wait(1).to({rotation:-12,x:53.4,y:-38.4},0).wait(1).to({rotation:-13.1,x:57.4,y:-42.6},0).wait(1).to({rotation:-14.2,x:61.3,y:-46.9},0).wait(1).to({rotation:-15.3,x:65.2,y:-51.1},0).wait(1).to({rotation:-16.3,x:69.2,y:-55.4},0).wait(1).to({rotation:-17.4,x:73.1,y:-59.7},0).wait(1).to({rotation:-18.5,x:77.1,y:-63.9},0).wait(1).to({rotation:-19.6,x:81.1,y:-68.2},0).wait(1).to({rotation:-20.7,x:85,y:-72.5},0).wait(1).to({rotation:-19.6,x:83.7,y:-67.7},0).wait(1).to({rotation:-18.4,x:82.5,y:-62.9},0).wait(1).to({rotation:-17.3,x:81.3,y:-58.1},0).wait(1).to({rotation:-16.2,x:80.1,y:-53.3},0).wait(1).to({rotation:-15,x:78.8,y:-48.5},0).wait(1).to({rotation:-13.9,x:77.6,y:-43.8},0).wait(1).to({rotation:-12.8,x:76.4,y:-38.9},0).wait(1).to({rotation:-11.6,x:75.1,y:-34.2},0).wait(1).to({rotation:-10.5,x:73.9,y:-29.4},0).wait(1).to({rotation:-9.4,x:72.7,y:-24.6},0).wait(1).to({rotation:-8.3,x:71.4,y:-19.8},0).wait(1).to({rotation:-7.1,x:70.2,y:-15},0).wait(1).to({rotation:-6,x:68.9,y:-10.2},0).wait(1).to({rotation:-4.9,x:67.7,y:-5.5},0).wait(1).to({rotation:-3.7,x:66.5,y:-0.7},0).wait(1).to({rotation:-2.6,x:65.2,y:4.1},0).wait(1).to({rotation:-1.5,x:64,y:8.9},0).wait(1).to({rotation:-0.3,x:62.8,y:13.7},0).wait(1).to({rotation:-0.3,x:57.5,y:13.2},0).wait(1).to({x:52.1,y:12.6},0).wait(1).to({x:46.8,y:12},0).wait(1).to({x:41.5,y:11.5},0).wait(1).to({x:36.2,y:10.9},0).wait(1).to({x:30.8,y:10.3},0).wait(1).to({x:25.5,y:9.8},0).wait(1).to({x:20.2,y:9.2},0).wait(1).to({x:14.8,y:8.6},0).wait(1).to({x:9.5,y:8.1},0).to({_off:true},1).wait(65));

	// correct V
	this.instance_6 = new lib.V();
	this.instance_6.parent = this;
	this.instance_6.setTransform(135,-70,0.42,0.42);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({_off:true},46).wait(121));

	// correct
	this.instance_7 = new lib.Symbol1copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.1,0.2,1.46,1.46,0.3,0,0,152.7,159.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({_off:false},0).wait(1).to({regX:162.9,regY:171.9,rotation:-7.7,x:20.9,y:10.7},0).wait(1).to({rotation:-15.7,x:26.8,y:2.1},0).wait(1).to({rotation:-23.7,x:32.3,y:-6.7},0).wait(1).to({rotation:-31.7,x:37.5,y:-15.8},0).wait(1).to({rotation:-39.7,x:42.2,y:-25},0).wait(1).to({rotation:-47.7,x:46.3,y:-34.3},0).wait(1).to({rotation:-55.7,x:50.1,y:-43.8},0).wait(1).to({rotation:-63.7,x:53.4,y:-53.1},0).wait(1).to({rotation:-71.7,x:56.1,y:-62.3},0).wait(1).to({rotation:-79.7,x:58.5,y:-71.4},0).wait(1).to({rotation:-87.7,x:56,y:-72.5},0).wait(1).to({rotation:-95.7,x:53,y:-73.4},0).wait(1).to({rotation:-103.7,x:49.7,y:-73.9},0).wait(1).to({rotation:-111.7,x:46.2,y:-74.1},0).wait(1).to({rotation:-119.7,x:42.4,y:-73.9},0).wait(1).to({rotation:-127.7,x:38.4,y:-73.2},0).wait(1).to({rotation:-135.7,x:34.3,y:-72.1},0).wait(1).to({rotation:-143.7,x:30.1,y:-70.5},0).wait(1).to({rotation:-151.7,x:26,y:-68.4},0).wait(1).to({rotation:-159.7,x:22,y:-66},0).wait(1).to({rotation:-167.7,x:18.1,y:-63},0).wait(1).to({rotation:-175.7,x:14.5,y:-59.7},0).wait(1).to({rotation:-183.7,x:11,y:-56},0).wait(1).to({rotation:-191.7,x:7.9,y:-51.9},0).wait(1).to({rotation:-199.7,x:5.2,y:-47.5},0).wait(1).to({rotation:-207.7,x:2.9,y:-42.8},0).wait(1).to({rotation:-215.7,x:1,y:-38},0).wait(1).to({rotation:-223.7,x:-0.5,y:-33},0).wait(1).to({rotation:-231.7,x:-1.5,y:-28},0).wait(1).to({rotation:-239.7,x:-2,y:-23},0).wait(1).to({rotation:-247.7,x:-2.1,y:-18.1},0).wait(1).to({rotation:-255.7,x:-1.8,y:-13.3},0).wait(1).to({rotation:-263.7,x:-0.9,y:-8.7},0).wait(1).to({rotation:-271.7,x:0.3,y:-4.4},0).wait(1).to({rotation:-279.7,x:1.8,y:-0.2},0).wait(1).to({rotation:-287.7,x:3.7,y:3.4},0).wait(1).to({rotation:-295.7,x:5.7,y:6.7},0).wait(1).to({rotation:-303.7,x:8.1,y:9.6},0).wait(1).to({rotation:-311.7,x:10.6,y:12.1},0).wait(1).to({rotation:-319.7,x:13.1,y:14.1},0).wait(1).to({rotation:-327.7,x:15.7,y:15.6},0).wait(1).to({rotation:-335.7,x:18.2,y:16.7},0).wait(1).to({rotation:-343.7,x:20.5,y:17.4},0).wait(1).to({rotation:-351.7,x:22.8,y:17.5},0).wait(1).to({rotation:-359.7,x:24.7,y:17.3},0).to({_off:true},1).wait(121));

	// sway
	this.instance_8 = new lib.Symbol1copy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.1,0,1.46,1.46,0.5,0,0,154.6,164.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:162.9,regY:171.9,rotation:0.7,x:12.1,y:10.7},0).wait(2).to({rotation:1.3,x:12,y:10.9},0).wait(1).to({rotation:1.9,x:11.9,y:11},0).wait(1).to({rotation:2.5,x:11.7,y:11.2},0).wait(1).to({rotation:3.1,y:11.3},0).wait(1).to({rotation:3.7,x:11.5,y:11.4},0).wait(1).to({rotation:4.3,x:11.4,y:11.5},0).wait(1).to({rotation:5,x:11.3,y:11.6},0).wait(1).to({rotation:5.7,x:11.1,y:11.8},0).wait(1).to({rotation:6.4,x:11,y:11.9},0).wait(1).to({rotation:7.1,x:10.9,y:12},0).wait(1).to({rotation:7.9,x:10.7,y:12.2},0).wait(1).to({rotation:8.6,x:10.5,y:12.3},0).wait(1).to({rotation:8.1,x:10.6,y:12.2},0).wait(1).to({rotation:7.6,x:10.7,y:12.1},0).wait(1).to({rotation:7.1,x:10.9},0).wait(1).to({rotation:6.6,y:12},0).wait(1).to({rotation:6.2,x:11,y:11.8},0).wait(1).to({rotation:5.7,x:11.1},0).wait(1).to({rotation:5.2,x:11.2,y:11.7},0).wait(1).to({rotation:4.7,x:11.4,y:11.6},0).wait(1).to({rotation:4.1,x:11.5,y:11.5},0).wait(1).to({rotation:3.5,x:11.6,y:11.3},0).wait(1).to({rotation:2.9,x:11.7,y:11.2},0).wait(1).to({rotation:2.3,x:11.8,y:11.1},0).wait(1).to({rotation:1.7,x:11.9,y:10.9},0).wait(1).to({rotation:1,x:12},0).wait(1).to({rotation:0.4,x:12.2,y:10.7},0).to({_off:true},1).wait(182));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-76,164.8,173.6);


// stage content:
(lib.SkiYedaV31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		init();
		var selfHome = this;
		
		var stageW = parseInt(canvas.style.width); //רוחב הבמה
		var stageH = parseInt(canvas.style.height); //אורך הבמה
		
		//מאזין ללחיצת כפתור במקלדת - להזזת הגולש
		window.addEventListener("keydown", handlekeypress);
		
		var rnd = 0; //משמש להגרלת אובייקט
		var lastRnd; //משתנה לשמירת האובייקט האחרון שהוגרל
		var selected; //משמש לשמירת האובייקט המוגרל כמשתנה גלובלי
		var gameNum = 0; //מספר המשחק, נגזר מהתא הראשון במערך, כאשר התא הראשון (0) הוא פירות והתא השני (1) הוא ערי בירה
		var hit = false; //משתנה עזר למפגש של הגולש עם הרמפה. כאשר המשתנה הוא "שקר" - ניתן לבדוק פגיעה, כאשר הוא "אמת" לא ניתן
		
		/*משתנה שמשמש לבדוק אם אנחנו בתוך משחק או לפני בחירת משחק
		בתחילת ההרצה, המשתנה הוא "שקר"
		כשהלומד יבחר משחק וילחץ על כפתור "התחל" המשתנה יהפוך ל "אמת"*/
		var startbtnClicked = false;
		
		//מערך האובייקטים. להלן סדר המאפיינים שמקבל כל אובייקט במערך
		//תא 0: תמונה/טקסט - כאשר 1 לתמונה ו-0 לטקסט
		//תא 1: קריאה לתמונה הדינמית/לטקסט
		//תא 2: שם האובייקט
		//תא 3: האם האובייקט נכון או לא - כאשר 0 לתשובה שגויה, 1 לתשובה נכונה
		//תא 4: מספר הפעמים שהאובייקט הופיע במשחק, מתחיל מ-0
		//תא 5: האם האובייקט כבר זוהה נכונה/טרם זוהה - מתחיל מ-0 ומשתנה ל-1 לאחר זיהוי האובייקט
		
		var items = [
			[
				[1, lib.fruit1, "תות", 1, 0, 0],
				//[1, lib.fruit2, "בננה", 1, 0, 0],
				//[0, "מלפפון", "מלפפון", 0, 0, 0],
				[0, "חסה", "חסה", 0, 0, 0],
				//[0, "אבטיח", "אבטיח", 1, 0, 0],
				//[0, "פטל", "פטל", 1, 0, 0],
				//[0, "ענבים", "ענבים", 1, 0, 0],
				//[0, "משמש", "משמש", 1, 0, 0],
				//[0, "תפוז", "תפוז", 1, 0, 0],
				//[0, "תפוח", "תפוח", 1, 0, 0],
				//[0, "אגס", "אגס", 1, 0, 0],
				//[0, "מלון", "מלון", 1, 0, 0],
			],
			[
				[0, "לונדון", "לונדון", 1, 0, 0],
				[0, "תל אביב", "תל אביב", 0, 0, 0],
				[0, "פריז", "פריז", 1, 0, 0]
			]
		];
		
		//משתנה עזר לכיוון התנועה של הרמפה
		var direction = -5;
		//משתנה עזר לתנועה של הגולש
		var boyMove = 4;
		
		var timer; //משתנה ליצירת אינטרוול של טיימר
		var seconds = 0; //מונה שניות עבור הטיימר
		var minutes = 0; //מונה דקות עבור הטיימר
		
		var resultTimer; //משתנה ליצירת טיימר להופעת מסך המשוב
		var grade = 0; //משתנה גלובלי לחישוב הציון
		
		//יצירת טיקר
		createjs.Ticker.addEventListener("tick", tick);
		//השהיית הטיקר. בתחילת ההרצה הוא מושהה כי אנחנו עדיין לא בתוך משחק
		createjs.Ticker.paused = true;
		
		//מערך שמשמש להצגת הנושאים בתוך תיבת הטקסט
		var subjects = ["", "פירות", "ערי בירה"];
		/*משתנה שיעזור לברר איזה ערך מסומן בכל פעם בקומבו בוקס
		עם הפתיחה מופיע הערך הראשון ולכן הערך ההתחלתי הוא 0*/
		var mychoice = 0;
		
		var playerCorrectAns = 0; //מונה לתשובות הנכונות של השחקן
		var gameCorrectAns = 0; //משתנה לספירת התשובות הנכונות הקיימות במשחק
		var correctAnsArray = []; //יצירת מערך לשמירת התשובות הנכונות
		var falseAns = 0; //משתנה לספירת זיהויים שגויים של השחקן
		
		var bar; //משתנה ליצירת בר התקדמות
		var barFrames = [0, 1, 9, 17, 25, 33, 41, 49, 57, 65, 73]; //מערך עזר לאנימציות של בר ההתקדמות
		
		
		
		//הוספת פונט מגוגל פונטס
		WebFontConfig = {
			google: {
				families: ['Assistant']
			}
		};
		
		(function () {
			var wf = document.createElement('script');
			wf.src = ('https' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
			wf.type = 'text/javascript';
			wf.async = true;
			var s = document.getElementsByTagName('script')[0];
		
			s.parentNode.insertBefore(wf, s);
		})();
		
		//פונקציה להוספת סאונד
		function init() {
			createjs.Sound.registerSound("https://nitzangreen.github.io/Ski/sounds/_true.mp3", "true");
			createjs.Sound.registerSound("https://nitzangreen.github.io/Ski/sounds/_false.mp3", "false");
			createjs.Sound.registerSound("https://nitzangreen.github.io/Ski/sounds/end.mp3, "end");
		}
		
		/*
		פונקציה שרצה בתחילת ההרצה ומביאה לבמה את כל האלמנטים ההתחלתיים:
		תמונת רקע, קומבו-בוקס, רכבל, סרגל עליון וכו'*/
		runFunc();
		function runFunc() {
			// הבאת תמונת רקע + סרגל עליון לבמה
			var backgroundMC = new lib.backgroundMC();
			backgroundMC.name = "backgroundMC";
			stage.addChildAt(backgroundMC, 0);
		
			// האזנה ללחיצה על לוגו המשחק - קריאה לפונקציה שמרפרשת את הדפדפן
			backgroundMC.logo.addEventListener("click", reloadFunc);
				
			// הבאת כפתור "אודות" לבמה
			var about_btn = new lib.about_btn();
			about_btn.cursor = "pointer";
			about_btn.name = "about_btn";
			stage.addChildAt(about_btn, 1);
		
			//יצירת כותרת עם שם המנגנון
			var myTitle = new createjs.Text();
			myTitle.x = 430;
			myTitle.y = 220;
			myTitle.color = "#0F4250";
			myTitle.font = "50px Assistant";
			myTitle.text = "סקי-ידע";
			myTitle.name = "myTitle";
			stage.addChild(myTitle);
		
			//יצירת דמות ילד בכניסה למשחק
			var boystart = new lib.boystart();
			stage.addChildAt(boystart, 2);
			boystart.x = 210;
			boystart.y = 320;
			boystart.name = "boystart";
		
			//יצירת הרכבל
			var cable_cars = new lib.cable_cars();
			stage.addChildAt(cable_cars, 3);
			cable_cars.x = 1.55;
			cable_cars.y = -8.65;
			cable_cars.gotoAndPlay(0);
			cable_cars.name = "cable_cars";
		
			//תיבת טקסט דינאמית שבתוכה תופיע כותרת המשחק אחרי בחירה של הלומד
			var gameTitle = new createjs.Text();
			gameTitle.x = 450;
			gameTitle.y = 3;
			gameTitle.color = "#006699";
			gameTitle.font = "20px Assistant";
			gameTitle.name = "gameTitle";
			stage.addChild(gameTitle);
		
			//הוספת הקומבו-בוקס לבמה
			var forcombo = new lib.forcomb();
			forcombo.x = 500;
			forcombo.y = 300;
			stage.addChildAt(forcombo, 4);
			forcombo.name = "forcombo";
		
			//הגדרות עבור כפתור "התחל" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.alpha = 0.3;
		
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
			//בעת שינוי ערך בקומבו-בוקס
			function mycb_change(evt) {
				gameTitle.text = ""; //ניקוי הבחירה הקודמת
				//שימרת הערך שנבחר בקומבו
				console.log(evt.currentTarget.value);
				mychoice = evt.currentTarget.value;
				//אם נבחר הערך הראשון - "בחר נושא
				if (mychoice == 0) {
					//ניטרול כפתור "התחל
					forcombo.startbtn.alpha = 0.3;
					forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
				} else if (mychoice == 1) {
					//אם בחר משחק ראשון, נאפשר לחיצה ונגדיר משתנה 'מספר משחק'=0=פירות
					forcombo.startbtn.alpha = 1;
					gameNum = 0;
					forcombo.startbtn.addEventListener("click", startGame); //קריאה לפונקציה שמתחילה משחק
					startbtnClicked = true; // משתנה שמגדיר שכבר התחיל משחק, לכן אם המשתמש פותח את דף "אודות" וסוגר אותו הקומבו-בוקס לא תופיע שוב
				} else {
					//אם בחר משחק שני, נאפשר לחיצה ונגדיר משתנה 'מספר משחק'=1=ערי בירה
					forcombo.startbtn.alpha = 1;
					gameNum = 1;
					forcombo.startbtn.addEventListener("click", startGame); //קריאה לפונקציה שמתחילה משחק
					startbtnClicked = true; // משתנה שמגדיר שכבר התחיל משחק, לכן אם המשתמש פותח את דף "אודות" וסוגר אותו הקומבו-בוקס לא תופיע שוב
				}
			}
		
			//כאילו-קישור "אודות" מעלה את דף אודות
			about_btn.addEventListener("click", aboutFunc);
		
			function aboutFunc() {
				var about_pg = new lib.about_pg();
				stage.addChildAt(about_pg, 7);
				about_pg.x = 479.65;
				about_pg.y = 310.45;
				about_pg.name = "about_pg";
		
				//הוספת מאזין לכפתור סגירת חלון אודות	
				about_pg.x_btn.addEventListener("click", closeAboutFunc);
		
				//הוספת מאזינים לקישורים לפקוטלה טל"מ
				about_pg.HIT_link.addEventListener("click", HIT_link);
				about_pg.HIT_logo.addEventListener("click", HIT_link);
		
				// אם אנחנו לפני בחירת משחק, צריך לעלים את הקומבו בוקס+הילד
				if (startbtnClicked == false) {
					boystart.visible = false; // העלמת הילד מאחורי
					forcombo.x = -1500; // הזזת הקומבו-בוקס הצידה
				}
				//אם אנחנו אחרי בחירת משחק
				if (startbtnClicked == true) {
					//"boy".visible = false; // ניסיון להעלמת הילד הגולש.....
				}
			}
		
		
			//פונקציה לפתיחת קישור לדף של הפקולטה טל"מ
			function HIT_link() {
				window.open("http://www.hit.ac.il/telem/overview");
			}
		
			// סגירת דף אודות
			function closeAboutFunc() {
				//העלמת דף אודות
				stage.removeChild(stage.getChildByName("about_pg"));
		
				// אם אנחנו לפני בחירת משחק, צריך להחזיר את הקומבו-בוקס + הילד
				if (startbtnClicked == false) {
					boystart.visible = true;
					forcombo.x = 500;
				}
			}
		}
		
		function startGame() {
		
			stage.removeChild(stage.getChildByName("forcombo")); //העלמת תיבת הבחירה של המשחק
			stage.removeChild(stage.getChildByName("boystart")); //העלמת דמות הילד שמופיע בעת בחירת המשחק
			stage.removeChild(stage.getChildByName("cable_cars")); //העלמת הרכבל שמופיע בעת בחירת המשחק
			stage.removeChild(stage.getChildByName("myTitle")); //העלמת כותרת שם המנגנון
		
			createBoy(); // קריאה לפונקציה שיוצרת דמות הילד הגולש 
			createRamp(); // קריאה לפונקציה שיוצרת רמפות 
			createBoard(); //קריאה לפונקציה שיוצרת לוח הוראות
		
			// הוספת שם המשחק בכותרת למעלה
			stage.getChildByName("gameTitle").text = "זיהוי " + subjects[mychoice];
		
			//קריאה לכפתור השהייה לבמה
			var pause = new lib.pause_btn();
			stage.addChild(pause);
			pause.x = 210;
			pause.y = 17;
			pause.name = "pause";
			pause.cursor = "pointer";
		
			// האזנה ללחיצה על כפתור השהייה והפעלת פונקציית השהייה
			pause.addEventListener("click", PauseFunc);
		
			//קריאה לעצים שיתחילו לזוז
			var trees = new lib.treesMC();
			stage.addChildAt(trees, 4);
			trees.x = 0;
			trees.y = 0;
			trees.name = "trees";
			trees.gotoAndPlay(1);
		
			bar = new lib.bar(); //הוספת בר ההתקדמות לבמה
			bar.x = 25;
			bar.y = 130;
			stage.addChildAt(bar, 5);
			bar.name = "bar";
		
		
			timer = setInterval(function () { //פונקציה אנונימית שרצה בכל שניה וסופרת זמן
				seconds++;
				if (seconds == 60) {
					seconds = 0;
					minutes++;
				}
			}, 1000);
		}
		
		
		countAns(); //קריאה לפונקציה הסופרת את מספר התשובות הנכונות במשחק
		function countAns() { //פונקציה לספירת מספר התשובות הנכונות הקיימות במשחק
			for (i = 0; i < items[gameNum].length; i++) { //לולאה לספירת מספר התשובות הנכונות הקיימות במשחק
				if (items[gameNum][i][3] == 1) {
					gameCorrectAns++;
					//	correctAnsArray[correctAnsArray.length] = [ //הוספת התשובה הנכונה למערך התשובות הנכונות
					//[items[gameNum][i][1]], //שמירת האוביקט - תמונה/טקסט
					//	[items[gameNum][i][4]] //שמירת מספר הפעמים שהאוביקט הופיע על הבמה
		
					correctAnsArray[correctAnsArray.length] = (items[gameNum][i][4]); //שמירת מספר הפעמים שהאוביקט הופיע על הבמה			
				}
			}
		}
		
		//פונקציה שיוצרת את הרמפה ומגרילה אובייקט על גבי הרמפה
		function createRamp() {
		
			createjs.Ticker.paused = false;
			hit = false; //מאפשר פגיעה של הגולש ברמפה
		
			var rampY = Math.floor(Math.random() * 200 + 150); //הגרלת מיקום רנדומלי של הרמפה
		
			var myRamp = new lib.ramp(); //יצירת הרמפה
			myRamp.x = 960;
			myRamp.y = rampY;
			myRamp.name = "ramp";
		
			rnd = Math.floor((Math.random() * items[gameNum].length) + 1); //הגרלת מספר בין 1 לכמות האובייקטים שיש במשחק
			//התאים במערך מתחילים מ0, המספר שהוגרל מתחיל מ1 ולכן צריך להפחית אחד
			//אם הוגרל המספר 1, רוצים לפנות לתא מספר 0	
			selected = rnd - 1; //האובייקט המוגרל
		
			if (playerCorrectAns < gameCorrectAns) { //הרמפה תוגרל רק במידה ועדיין יש פריטים שלא נענו
				if (items[gameNum][selected][5] == 0 && lastRnd != items[gameNum][selected][1]) { //בדיקה שהאובייקט שהוגרל טרם נענה נכונה
					//if (items[gameNum][selected][5] == 0) { //בדיקה שהאובייקט שהוגרל טרם נענה נכונה
					if (items[gameNum][selected][0] == 0) {
						//במידה ומדובר באובייקט טקסט - יצירת תיבת טקסט והצגת הטקסט בתוכה, על גבי הרמפה
						//פנייה למערך האובייקטים => מספר המשחק => הפריט שהוגרל => התא השני שבו קיים הטקסט
		
						var myText = new createjs.Text();
						myText.color = "#000000";
						myText.font = "20px Assistant";
						myText.x += 10;
						myText.y -= 10;
						myText.text = items[gameNum][selected][1];
		
						stage.addChildAt(myRamp, 4);
						stage.getChildByName("ramp").addChild(myText);
						lastRnd = items[gameNum][selected][1];
		
					} else {
						//במידה ומדובר באובייקט תמונה - יצירת משתנה שקורא לתמונה מהספרייה דרך המערך, ומיקומה על גבי הרמפה		
		
						var myItem = new(items[gameNum][selected][1]); //פנייה לתא במערך שמייבא את התמונה מהספרייה
						myItem.x += 25;
						myItem.y += 2;
		
						stage.addChildAt(myRamp, 4);
						stage.getChildByName("ramp").addChild(myItem);
						lastRnd = items[gameNum][selected][1];
					}
				} else { //במידה והפריט כבר נענה נכונה - הגרלת פריט חדש
					createRamp();
				}
			}
		
			if (playerCorrectAns == gameCorrectAns) { //במידה וכל התשובות הנכונות זוהו, מעבר לפונקציית סיום משחק
				endGame();
			}
		}
		
		//פונקציית טיקר להזזת הרמפה
		function tick() {
			//במידה והטיקר לא במצב מושהה
			if (createjs.Ticker.paused == false) {
		
				var movingRamp = stage.getChildByName("ramp");
				movingRamp.x += direction;
			}
		
			//במידה ויוצאים מגבולות הבמה, להפעיל מחדש את הפונקציה שמגרילה רמפה
			if (movingRamp.x < -200) {
		
				if (items[gameNum][selected][3] == 1 && items[gameNum][selected][5] == 0) {
					falseAns++
				}
		
				stage.removeChild(movingRamp);
				createRamp();
			}
		}
		
		// הוספת הילד הגולש לבמה 
		function createBoy() {
			var boy = new lib.skiBoyMC();
			stage.addChildAt(boy, 3);
			boy.x = 110;
			boy.y = 320;
			boy.name = "boy";
			boy.gotoAndPlay(0);
		}
		
		//הוספת לוח הוראות לבמה
		function createBoard() {
			var myBoard = new lib.myBoard();
			stage.addChildAt(myBoard, 3);
			myBoard.x = 850;
			myBoard.y = 140;
			myBoard.nameBox.text = subjects[mychoice];
			myBoard.name = "myBoard";
		
		}
		
		//בכל לחיצת כפתור חץ למעלה/למטה
		function handlekeypress(e) {
		
			var movingRamp = stage.getChildByName("ramp");
			var movingBoy = stage.getChildByName("boy");
		
			//הוצאת הטיקר מההשהיה
			createjs.Ticker.paused = false;
		
			//לחיצה על למטה - הגולש יירד
			if (e.keyCode == 38) {
				if (movingBoy.y >= 140) {
					movingBoy.y -= boyMove;
				}
			}
			//לחיצה על למעלה - הגולש יעלה
			if (e.keyCode == 40) {
				if (movingBoy.y <= 470) {
					movingBoy.y += boyMove;
				}
			}
		
			if (movingBoy.y < movingRamp.y) { //רק אם הגולש נמצא בקו של הרמפה נבדוק פגיעה
				if (intersect(movingBoy, movingRamp) && items[gameNum][selected][3] == 1 && hit == false) //פונקציה המגדירה מה קורה במקרה של זיהוי נכון של רמפה
				{
					movingBoy.gotoAndPlay(45); //הפעלת אנימציית הסלטה של הגולש
					var instance = createjs.Sound.play("true");
					items[gameNum][selected][4] += 1; //העלאת מספר ההופעות של האובייקט על הבמה באחד
					hit = true; //כאשר המשתנה הוא "אמת" לא ניתן לבצע פגיעה - מונע מהגולש לפגוע ברמפה בלופים
					items[gameNum][selected][5] = 1; //עדכון מאפיין האובייקט על כך שהאובייקט נענה נכונה ולא צריך להופיע יותר
					playerCorrectAns++; //העלאת מונה התשובות הנכונות ב-1
		
					for (i = 0; i <= gameCorrectAns; i++) {
						if (i == playerCorrectAns) {
							bar.gotoAndPlay(barFrames[i]);
						}
					}
				}
		
				if (intersect(movingBoy, movingRamp) && items[gameNum][selected][3] == 0 && hit == false) { //פונקציה המגדירה מה קורה במקרה של מעבר דרך רמפה שגויה
		
					//כאן צריך להוסיף הפעלת אנימציה של תשובה שגויה + סאונד שגוי
					hit = true; //כאשר המשתנה הוא "אמת" לא ניתן לבצע פגיעה - מונע מהגולש לפגוע ברמפה בלופים
					movingBoy.gotoAndPlay(100); //הפעלת אנימצייה של הגולש עצוב
					falseAns++; //העלאת מונה הזיהויים השגויים ב-1
					var instance = createjs.Sound.play("false");
		
				}
			}
		
		}
		
		
		// פונקציה שמעלה את דף "המשחק בהשהייה" , עוצרת את האנימציה ואת הטיקר
		function PauseFunc() {
			var pause_pg = new lib.pause_pg();
			stage.addChild(pause_pg);
			pause_pg.x = 479.65;
			pause_pg.y = 310.45;
			pause_pg.name = "pause_pg";
		
			//הוספת מאזין לכפתור המשך
			pause_pg.continue_btn.addEventListener("click", continueGameFunc);
		
			//הסתרת כפתור השהייה בזמן שהמסך פתוח
			var hide_small = new lib.hide_small();
			stage.addChild(hide_small);
			hide_small.x = 95;
			hide_small.y = 2;
			hide_small.name = "hide_small";
		
			clearInterval(timer); //הפסקת האינטרוול של הזמן כדי שהטיימר יעצור
			stage.removeChild(stage.getChildByName("ramp")); //מחיקת הרמפה הקיימת על המסך
		
			//עצירת הטיקר / אינטרבאל כך שתופסק הגרלת אובייקטים מהמערך
			createjs.Ticker.paused = true;
		}
		
		//פונקציה לחזרה למשחק, הפעלה מחדש של המשחק
		function continueGameFunc() {
			stage.removeChild(stage.getChildByName("pause_pg")); //הסרת כל דף "המשחק בהשהייה
			stage.removeChild(stage.getChildByName("hide_small")); // מחיקת המלבן שמסתיר את כפתור השהייה
		
			createjs.Ticker.paused = false; // החזרת הטיקר לפעולה כדי שהרמפות יחזרו
			createRamp(); // קריאה מחדש לפונקציה שיוצרת רמפות
		
			timer = setInterval(function () { //הפעלה מחדש של אינטרוול הטיימר
				seconds++;
				if (seconds == 60) {
					seconds = 0;
					minutes++;
				}
			}, 1000);
		}
		
		
		//במקרה של מפגש בין הגולש לבין הרמפה
		function intersect(obj1, obj2) {
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
			if (obj1.x + (obj1W.width / 2) <= obj2.x - (obj2W.width / 2)) {
				return false;
			} else if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
				return false;
			} else if (obj1.x - (obj1W.width / 2) > obj2.x + (obj2W.width / 2)) {
				return false;
			} else if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
				return false;
			}
			return true;
		}
		
		function endGame() { //פונקציה שתופעל לאחר זיהוי מלא של כל הרמפות הנכונות
			stage.removeChild(stage.getChildByName("trees")); //הסרת העצים מהבמה
			
			//מיקום הילד הגולש על הבמה כך שלא יברח למטה
			stage.getChildByName("boy").x = 110;
			stage.getChildByName("boy").y = 220;
			stage.getChildByName("boy").gotoAndPlay(148); // מעבר לפריים שמציג שער "סיום"
			var instance = createjs.Sound.play("end");
		
			resultTimer = setTimeout(resultsFunc, 4000); //טיימר להפעלת פונקציית המשוב
		}
		
		function resultsFunc() { //פונקציה להצגת המשוב המסכם והמאבחן
		
			clearInterval(timer); //הפסקת האינטרוול של הזמן כדי שהטיימר יעצור	
			createjs.Ticker.paused = true; // עצירת הטיקר כדי שיפסיקו לבוא רמפות
			stage.removeChild(stage.getChildByName("ramp")); // העלמת הרמפה האחרונה שעל הבמה
			stage.removeChild(stage.getChildByName("bar")); // מחיקת בר ההקתדמות
			stage.removeChild(stage.getChildByName("myBoard")); //מחיקת הלוח עם ההנחיות
			stage.removeChild(stage.getChildByName("boy")); //מחיקת הגולש מהמסך
		
			// הסתרת כפתור השהייה ושם המשחק
			var hide_wide = new lib.hide_wide();
			stage.addChild(hide_wide);
			hide_wide.x = 95;
			hide_wide.y = 2;
			hide_wide.name = "hide_wide";
		
			// קריאה לדף המשוב/תוצאות	
			var results_pg = new lib.results_pg();
			stage.addChildAt(results_pg,6);
			results_pg.x = 479.65;
			results_pg.y = 310.45;
			results_pg.name = "results_pg";
		
			//הזנת כותרת המשחק
			results_pg.you_finished_game.text = "סיימתם את המשחק זיהוי " + subjects[mychoice];
		
			if (minutes == 0) { //הזנת זמן המשחק
				results_pg.your_time.text = "00:" + seconds;
			} else {
				if (seconds < 10) {
					results_pg.your_time.text = minutes + ":0" + seconds;
				} else {
					results_pg.your_time.text = minutes + ":" + seconds;
				}
			}
		
			grade = 100 * (1 - (falseAns / (items[gameNum].length))); //נוסחה לחישוב הציון
			results_pg.your_grade.text = parseInt(grade); //הזנת הציון
		
			results_pg.correct_items.text = subjects[mychoice]; //הזנת כותרת אובייקטים נכונים
			results_pg.wrong_items.text = "לא " + subjects[mychoice]; //הזנת כותרת אובייקטים לא נכונים
		
			for (i = 0; i <= correctAnsArray.length; i++) { //לולאה הבודקת אילו מן האובייקטים זוהו בניסיון הראשון ואילו לא
				if (correctAnsArray[i] > 1) { //בודק האם האובייקט נכון והופיע יותר מפעם אחת על המסך
					results_pg.star([i] - 1).text = "*"; //הוספת כוכבית
				}
			}
		
			results_pg.play_again_btn.addEventListener('click', playAgain); // כפתור שחק שוב
			results_pg.end_btn.addEventListener('click', reloadFunc); // כפתור סיים משחק
		}
		
		function playAgain() { //פונקציה שמפעילה את אותו המשחק פעם נוספת
			stage.removeChild(stage.getChildByName("results_pg")); //מחיקת דף המשוב מהמסך
			stage.removeChild(stage.getChildByName("hide_wide")); //מחיקת המלבן שמסתיר את כפתור השהייה ושם המשחק
			stage.removeChild(stage.getChildByName("hide_small")); // מחיקת המלבן שמסתיר את כפתור השהייה, אם הופיע
		
			for (i = 0; i < items[gameNum].length; i++) { //איפוס ערכי כלל האובייקטים
				items[gameNum][i][4] = 0; //איפוס הערך שסופר כמה פעמים הופיע האובייקט על המסך
				items[gameNum][i][5] = 0; //איפוס הערך שבודק אם האובייקט זוהה כבר או לא
			}
		
			gameCorrectAns = 0; //איפוס המשתנה שסופר את מספר התשובות הנכונות במשחק
			playerCorrectAns = 0; //איפוס המשתנה שסופר את מספר התשובות הנכונות של השחקן
			lastRnd = ""; //איפוס האובייקט האחרון שהוגרל
			countAns(); //ספירה מחדש של מספר התשובות הנכונות במשחק
			rnd = 0; //איפוס ההגרלה
			selected = 0; //איפוס האובייקט המוגרל
			seconds = 0; //איפוס השניות בטיימר
			minutes = 0; //איפוס הדקות בטיימר
			falseAns = 0; //איפוס השגיאות של השחקן
			grade = 0; //איפוס הציון
		
			startGame(); //הפעלת הפונקציה שמתחילה את המשחק
		
			timer = setInterval(function () { //הפעלה מחדש של אינטרוול הטיימר
				seconds++;
				if (seconds == 60) {
					seconds = 0;
					minutes++;
				}
			}, 1000);
		
			bar.gotoAndStop(0); // איפוס בר ההתקדמות
		
		}
		
		//function backToStart() { //פונקציה המסיימת את המשחק ומחזירה למסך הראשי של בחירת משחק
		//	//העלמת כל האלמנטים מהמסך כדי לנקות את הבמה לחלוטין
		//	stage.removeChild(stage.getChildByName("results_pg"));
		//	stage.removeChild(stage.getChildByName("hide_wide"));
		//	stage.removeChild(stage.getChildByName("hide_small"));
		//	stage.removeChild(stage.getChildByName("backgroundMC"));
		//	stage.removeChild(stage.getChildByName("about_btn"));
		//	stage.removeChild(stage.getChildByName("myTitle"));
		//	stage.removeChild(stage.getChildByName("boystart"));
		//	stage.removeChild(stage.getChildByName("cable_cars"));
		//	stage.removeChild(stage.getChildByName("gameTitle"));
		//	stage.removeChild(stage.getChildByName("forcombo"));
		
		
		//	for (i = 0; i < items[gameNum].length; i++) { //איפוס ערכי כלל האובייקטים
		//		items[gameNum][i][4] = 0; //איפוס הערך שסופר כמה פעמים הופיע האובייקט על המסך
		//		items[gameNum][i][5] = 0; //איפוס הערך שבודק אם האובייקט זוהה כבר או לא
		//	}
		
		//	gameCorrectAns = 0; //איפוס המשתנה שסופר את מספר התשובות הנכונות במשחק
		//	playerCorrectAns = 0; //איפוס המשתנה שסופר את מספר התשובות הנכונות של השחקן
		//	lastRnd = ""; //איפוס האובייקט האחרון שהוגרל
		//	countAns(); //ספירה מחדש של מספר התשובות הנכונות במשחק
		//	rnd = 0; //איפוס ההגרלה
		//	selected = 0; //איפוס האובייקט המוגרל
		//	seconds = 0; //איפוס השניות בטיימר
		//	minutes = 0; //איפוס הדקות בטיימר
		//	falseAns = 0; //איפוס השגיאות של השחקן
		//	grade = 0; //איפוס הציון
		//	gameNum = 0; //איפוס בחירת מספר משחק
		//	startbtnClicked = false; //משתנה שקובע שאנחנו לפני משחק ולא במהלך משחק
		//	mychoice = 0; //איפוס בחירת המשתמש בקומבו בוקס בהתחלה
		//	correctAnsArray = []; //איפוס מערך התשובות הנכונות במשחק
		
		////	runFunc(); //הרצת פונקציית תחילת משחק
		//reloadFunc();
		//}
		
		// פונקציה שמרפרשת את הדפדפן וככה מאפסת את כל המשתנים ומחזירה את הלומד למסך ההתחלה
		function reloadFunc() {
			location.reload();
		}
		playSound("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// DO NOT DELETE
	this.about_pg = new lib.about_pg();
	this.about_pg.parent = this;
	this.about_pg.setTransform(-31.6,15.8,0.008,0.008);

	this.timeline.addTween(cjs.Tween.get(this.about_pg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(444.4,308.5,8,4.7);
// library properties:
lib.properties = {
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/‏‏Ski_Yeda V31_atlas_.png", id:"‏‏Ski_Yeda V31_atlas_"},
		{src:"sounds/end.mp3", id:"end"},
		{src:"sounds/_false.mp3", id:"_false"},
		{src:"sounds/_true.mp3", id:"_true"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js", id:"an.ComboBox"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
