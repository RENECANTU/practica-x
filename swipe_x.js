(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.mc_rosa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC00FF").s().p("Eg4PBkAMAAAjH/MBwfAAAMAAADH/g");
	this.shape.setTransform(360,640);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rosa, new cjs.Rectangle(0,0,720,1280), null);


(lib.mc_naranja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("Eg4PBkAMAAAjH/MBwfAAAMAAADH/g");
	this.shape.setTransform(360,640);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_naranja, new cjs.Rectangle(0,0,720,1280), null);


(lib.mc_azul = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("Eg4PBkAMAAAjH/MBwfAAAMAAADH/g");
	this.shape.setTransform(360,640);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_azul, new cjs.Rectangle(0,0,720,1280), null);


(lib.btn_null = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AzDTEMAAAgmHMAmHAAAMAAAAmHg");
	this.shape.setTransform(0.025,0.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-122,244.1,244.1);


(lib.mc_verde = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sensibles
	this.instance = new lib.btn_null();
	this.instance.setTransform(484,998.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_null(), 3);

	this.instance_1 = new lib.btn_null();
	this.instance_1.setTransform(227.95,998.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn_null(), 3);

	this.instance_2 = new lib.btn_null();
	this.instance_2.setTransform(484,754.15);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.btn_null(), 3);

	this.instance_3 = new lib.btn_null();
	this.instance_3.setTransform(227.95,754.15);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.btn_null(), 3);

	this.instance_4 = new lib.btn_null();
	this.instance_4.setTransform(484,542.1);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.btn_null(), 3);

	this.instance_5 = new lib.btn_null();
	this.instance_5.setTransform(227.95,542.1);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.btn_null(), 3);

	this.instance_6 = new lib.btn_null();
	this.instance_6.setTransform(484,298.05);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.btn_null(), 3);

	this.instance_7 = new lib.btn_null();
	this.instance_7.setTransform(227.95,298.05);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.btn_null(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// galeria
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("EAIHBAvQkrksAAmmQAAmmErkrQErksGmAAQGnAAErEsQErErAAGmQAAGmkrEsQkrEqmnAAQmmAAkrkqgEgepBAvQkrksAAmmQAAmmErkrQErksGnAAQGmAAErEsQErErAAGmQAAGmkrEsQkrEqmmAAQmnAAkrkqgAIHduQkrkrAAmmQAAmnErkrQErkrGmAAQGnAAErErQErErAAGnQAAGmkrErQkrErmnAAQmmAAkrkrgA+pduQkrkrAAmmQAAmnErkrQErkrGnAAQGmAAErErQErErAAGnQAAGmkrErQkrErmmAAQmnAAkrkrgAIHl6QkrkrAAmnQAAmmErkrQErkrGmAAQGnAAErErQErErAAGmQAAGnkrErQkrErmnAAQmmAAkrkrgA+pl6QkrkrAAmnQAAmmErkrQErkrGnAAQGmAAErErQErErAAGmQAAGnkrErQkrErmmAAQmnAAkrkrgEAIHgqKQkrkrAAmnQAAmnErkrQErkrGmAAQGnAAErErQErErAAGnQAAGnkrErQkrErmnAAQmmAAkrkrgEgepgqKQkrkrAAmnQAAmnErkrQErkrGnAAQGmAAErErQErErAAGnQAAGnkrErQkrErmmAAQmnAAkrkrg");
	this.shape.setTransform(360.025,640);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fondo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,0,0.149)").s().p("Eg4PBkAMAAAjH/MBwfAAAMAAADH/g");
	this.shape_1.setTransform(360,640);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_verde, new cjs.Rectangle(0,0,720,1280), null);


(lib.pages = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.mc_azul = new lib.mc_azul();
	this.mc_azul.name = "mc_azul";
	this.mc_azul.setTransform(2160,0);

	this.mc_rosa = new lib.mc_rosa();
	this.mc_rosa.name = "mc_rosa";
	this.mc_rosa.setTransform(1440,0);

	this.mc_naranja = new lib.mc_naranja();
	this.mc_naranja.name = "mc_naranja";
	this.mc_naranja.setTransform(720,0);

	this.mc_verde = new lib.mc_verde();
	this.mc_verde.name = "mc_verde";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_verde},{t:this.mc_naranja},{t:this.mc_rosa},{t:this.mc_azul}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pages, new cjs.Rectangle(0,0,2880,1280), null);


// stage content:
(lib.swipe_x = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var that = this;
		var pages;
		
		that.start = function()
		{
		createjs.Touch.enable(true);
		stage.mouseMoveOutside = true;
		
		pages = that.pages;
		pages.dragTolerance = 10;
		pages.index = 0;
		pages.transitionDelay = 350;
		pages.transitionEase = createjs.Ease.quintOut;
		pages.on("mousedown", that.mouseDownHandler);
		}
		
		that.mouseDownHandler = function(e)
		{
		e.currentTarget.pressedX = e.currentTarget.x;
		e.currentTarget.pressed = true;
		e.currentTarget.offsetX = (e.stageX / stage.scaleX) - e.currentTarget.x;
		e.currentTarget.on("pressmove", that.pressMoveHandler);
		stage.on("stagemouseup", that.stageMouseUpHandler);
		};
		
		that.pressMoveHandler = function(e)
		{
			e.currentTarget.dragDistance = pages.x - e.currentTarget.pressedX;
			e.currentTarget.x = (e.stageX / stage.scaleX) - e.currentTarget.offsetX;
		};
		
		that.stageMouseUpHandler = function(e)
		{
			if (pages.pressed && Math.abs(pages.dragDistance) > pages.dragTolerance)
			{
				if (pages.dragDistance > 0)
					pages.index--;
				else
					pages.index++;
		
				pages.index = Math.min(Math.max(0, pages.index), pages.children.length - 1);
			}
		
			createjs.Tween.get(pages).to({x:-pages.index * (canvas.width / stage.scaleX)}, pages.transitionDelay, pages.transitionEase);
			pages.off("pressmove", that.pressMoveHandler);
			stage.off("stagemouseup", that.stageMouseUpHandler);
			pages.pressed = false;
		};
		
		setTimeout(that.start, 0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// swipe
	this.pages = new lib.pages();
	this.pages.name = "pages";

	this.timeline.addTween(cjs.Tween.get(this.pages).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(360,640,2520,640);
// library properties:
lib.properties = {
	id: '3886C1EC642144FEAE8875111DDA5837',
	width: 720,
	height: 1280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3886C1EC642144FEAE8875111DDA5837'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;