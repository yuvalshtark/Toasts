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


(lib.Upview_Table = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C3B9A4").s().p("EhlRA5NMAAAhyZMDKjAAAMAAAByZg");
	this.shape.setTransform(648.175,366.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1296.4,732.2);


(lib.Up_Bred_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E38231").s().p("Egv2AGCQiWAAAAiWIAAnXQAAiWCWAAMBftAAAQCWAAAACWIAAHXQAACWiWAAg");
	this.shape.setTransform(321.325,34.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({y:35.575},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,642.7,78.2);


(lib.Start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99B44B").s().p("AiPimIEfCmIkfCng");
	this.shape.setTransform(65.675,36.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99B44B").s().p("Aifi3IE/C3Ik/C4g");
	this.shape_1.setTransform(61.6,36.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiwCxQhJhKAAhnQAAhmBJhKQBKhJBmAAQBoAABJBJQBJBKAABmQAABnhJBKQhJBJhoAAQhmAAhKhJg");
	this.shape_2.setTransform(62,37.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjCDDQhRhQAAhzQAAhxBRhSQBRhQBxAAQByAABRBQQBRBSAABxQAABzhRBQQhRBRhyAAQhxAAhRhRg");
	this.shape_3.setTransform(57.525,37.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer_1
	this.text = new cjs.Text("Play", "bold 31px 'Calibri'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 57;
	this.text.parent = this;
	this.text.setTransform(128.75,22.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99B44B").s().p("AwaFfIAAq9MAg1AAAIAAK9g");
	this.shape_4.setTransform(105.1,35.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#99B44B").s().p("AyIGDIAAsFMAkRAAAIAAMFg");
	this.shape_5.setTransform(105.15,35.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.text,p:{scaleX:1,scaleY:1,x:128.75,y:22.45}}]}).to({state:[{t:this.shape_5},{t:this.text,p:{scaleX:1.1047,scaleY:1.1047,x:131.2464,y:21.1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-3.6,232.20000000000002,77.39999999999999);


(lib.Scene_1_Hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hand
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D6B4").s().p("ANuFWQubjNtak6QhAgXgkgmQgkgmAKgfIACgEQAOgfA5gFQA5gFBCAYQMvErNvDCQBDAPAzAkQAyAlADAkQAEAlgtAPQgXAIgdAAQgcAAghgHg");
	this.shape.setTransform(866.3976,376.2758);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8D6B4").s().p("AOmGBIgPgDQj4g0j2hIQjdg/jshUQkFhfjOhGQjohVjehNIgMgEQg8gXglgiIgJgJQgggiAIgcIABgEQAMgjA/gEIAHAAQA7gDBCAWIAjAMQDXBJDgBSQC6BBDpBXQDnBRDXA+QDiBCDlAwIAUAEQA8AQAwAfIATAOQAlAdAGAeQABAIAAAGQgEAcgoANIgHACQgXAHgcAAQgcAAgigHg");
	this.shape_1.setTransform(835.9841,364.5505);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8D6B4").s().p("APdGsIgQgDQkGgzkIhWQjehFkDhqQkoh7i/hFQj5hjjphNIgNgEQhBgWgogiIgLgKQgkgjAGgcIABgFQAJgmBHgDIAGAAQBCgCBEAVIAlALQDiBJDxBgQCuBBEMB0QD6BnDXBEQDyBPDxAwIAVAEQBBAPA0AfIAVANQAqAeAHAeQACAIAAAHQgBAegsAOIgIACQgZAHgfAAQgdAAgkgHg");
	this.shape_2.setTransform(805.5571,352.81);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8D6B4").s().p("AQVHYIgRgDQkUgzkZhjQjhhMkZiAQlLiXixhFQkKhwj0hMIgNgEQhGgXgsgiIgLgJQgpgmAEgbIABgFQAGgpBNgDIAHAAQBHgBBHAUIAoALQDsBIECBvQCiBAEvCSQEOB7DYBLQEBBbD8AxIAXAEQBGAOA3AfIAYANQAtAeAKAeQADAIAAAIQABAggwAOIgJADQgbAHghAAQgfAAglgGg");
	this.shape_3.setTransform(775.1323,341.0855);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8D6B4").s().p("ARNIDIgSgDQkigykrhxQjihSkxiWQlti0iihDQkch/j+hLIgPgEQhKgXgwgiIgMgJQgtgnACgbIAAgGQAEgsBUgCIAHAAQBNAABJASIAqALQD3BIESB9QCYBBFQCuQEjCRDYBQQEQBpEJAwIAYAFQBKAOA7AdIAaAOQAyAeAMAeQAEAJAAAIQACAigzAPIgJACQgeAIgkAAQggAAgmgGg");
	this.shape_4.setTransform(744.6972,329.3073);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8D6B4").s().p("ASEIuIgTgDQkwgyk8h9QjlhalHirQmQjRiUhBQksiNkJhLIgPgEQhQgWgzgiIgNgKQgygoABgbIAAgGQAAgwBbgBIAIAAQBSABBMARQAWAFAWAGQECBGEjCMQCMBBFzDLQE2CmDZBXQEfB1EVAxIAZAFQBPANA/AdIAcAOQA2AeAOAfQAFAIABAJQAEAkg4APIgJADQggAIgoAAQghAAgngGg");
	this.shape_5.setTransform(714.2625,317.5591);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8D6B4").s().p("ASoJXQk+gylNiLQjnhglejBQmzjtiFhBQlGifkbhKQhhgZg4gpQg3gqgBgbQgJg7BwACQBzADBiAZQENBGEzCbQCBBAGVDoQFLC8DZBdQE7CIEuAvQBnAQBNAoQBNAnAFAoQAGAohFAQQgjAJgsAAQgqAAgzgIg");
	this.shape_6.setTransform(683.7904,305.8031);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8D6B4").s().p("ATMIhIgYgEQkbgrkshjIhLgaQh0gqiSg/IlDiTIgTgJIlQieQiThGhHgcIhfgoQkWhtjzg/QgYgFgVgHQhDgWgrggIgNgKQgrgjAAgYQgJg1BYgEIAZgBQBRADBJAOQAfAFAeAIQDeA3D5BjQA4AXA4AZQBEAcCIBEIFECfIAJAFQC5BYCSBDQB5A2BjAkIBqAmQEJBWD8AlQAoAGAlAKQA6APAvAYQAVALAQAKQAqAdAFAdQACAMgEAJQgKAZgyAMIgFABQgiAIgpAAQggAAgmgFg");
	this.shape_7.setTransform(682.4181,311.5547);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8D6B4").s().p("ATZHnIgYgEQkcgrkyhSIhMgWQh1gkiTg2QiPg5i1hFIgUgIQjMhQiGg3QiTg9hJgXIhhgjQkahej1g9QgYgGgVgHQhDgWgsgfIgOgKQgrglgBgXQgIg2BZgEIAZAAQBTACBJAPIA+ANQDfA2D+BUIBxAqQBFAXCIA8QCAA3DGBRIAJAFQC8BKCQA7QB6AtBkAfIBrAgQEMBHD9AkQApAGAlAKQA7APAwAYQAVAKAQALQArAcAGAdQACAMgEAKQgJAZgzAMIgFABQghAIgpAAQgiAAgmgFg");
	this.shape_8.setTransform(681.0282,317.3343);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8D6B4").s().p("ATlGtIgYgDQkdgrk3hCIhNgSQh2geiTgtQiOgxi5g4IgUgGQjPhCiFgvQiTg1hMgSIhhgdQkghPj2g8QgYgGgWgHQhEgWgsgfIgOgKQgsglAAgYQgIg1BZgEIAaAAQBTACBKAPIA/ANQDhA1ECBGIByAiQBHATCHA0QCAAvDIBCIAJAFQC/A7CPAzQB7AmBkAZIBsAaQERA5D9AjQApAFAmAJQA7APAxAYQAVAKARALQAsAdAGAdQACALgDAKQgJAagzANIgGABQghAHgpAAQghAAgogFg");
	this.shape_9.setTransform(679.6693,323.0843);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8D6B4").s().p("ATyF0IgZgEQkegqk8gyIhOgOQh3gYiUgkQiMgpi9grIgTgEQjTg0iFgoQiSgrhOgNIhjgYQkjhAj4g7IgvgNQhFgWgtgfIgNgKQgtglgBgYQgIg2BbgDIAaAAQBUACBLAPIBAAOQDiAzEHA3IBzAcQBJAOCGAsQCAAoDKAzIAJADQDCAuCNAqQB8AfBlATIBsAVQEVAqD/AhQApAFAmAJQA8APAyAYQAVAKARALQAsAcAHAdQADAMgDAKQgIAag0ANIgFABQgiAIgpAAQgiAAgogFg");
	this.shape_10.setTransform(678.2869,328.8468);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8D6B4").s().p("AT+E5IgZgDQkfgqlCghIhOgLQh4gRiVgbQiLgijAgdIgTgDQjVgliFggQiSgkhRgIIhjgSQkpgwj5g6QgZgGgWgHQhGgWgtgfIgOgLQguglAAgYIAAAAQgIg2BcgDIAaAAQBVADBLAPIBBANQDjAzEMAoIB0AWQBLAICFAkQCAAgDNAlIAIADQDFAfCMAiQB8AXBmAOIBtAOQEZAdD/AeQAqAFAnAJQA9APAyAYQAWAKARALQAtAcAHAdQAEALgDALQgHAbg1ANIgFABQghAIgqAAQgjAAgpgGg");
	this.shape_11.setTransform(676.9374,334.6019);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8D6B4").s().p("AULEAIgagEQkggplHgRIhPgHQh5gLiWgSQiKgbjDgOIgUgDQjXgWiFgYQiRgbhUgDIhkgOQktgfj7g6QgZgGgXgHQhGgVguggIgPgKQgtgmgBgYQgIg3BegDIAaAAQBWADBMAQIBBAOQDlAwEQAaIB1AQQBNADCEAcQB/AYDQAWIAIADQDJARCKAbQB9AOBnAIIBtAJQEdANEAAdQArAFAmAJQA+AOAzAYQAWAKARALQAuAcAIAdQAEAMgDAKQgGAcg1ANIgGABQghAJgqAAQgjAAgpgGg");
	this.shape_12.setTransform(675.5668,340.3591);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8D6B4").s().p("AUYDGIgagEQkigolMgBIhPgDQh6gFiXgJQiJgTjGgBIgUgBQjbgIiEgQQiRgThWACQg0gDgxgFQkygRj8g4QgZgFgYgHQhHgWgvggIgOgKQgugmgBgZQgJg3BggCIAaAAQBXADBNARIBCANQDmAvEUAMQA6AFA8ADQBQgBCDAUQB/AQDSAHIAIACQDLADCJATQB+AHBoADQA4ABA2ACQEhgBEBAaQAqAFAoAJQA+AOA0AXQAWALASAKQAtAdAKAcQAEAMgDAKQgFAdg2AOIgFABQgiAIgrAAQgjAAgpgGg");
	this.shape_13.setTransform(674.1883,346.1091);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8D6B4").s().p("AUkCMIgagDQkjgplSAQIhQABQh7ABiXAAQiHgLjKAMIgUAAQjdAHiEgIQiRgKhZAHQg0gBgygCQk3gCj9g4QgagFgXgHQhIgWgwgfIgOgKQgvgmgBgZIAAAAQgIg4BggBIAbAAQBXADBOARIBDANQDoAuEZgDQA5ACA+AAQBRgGCCAMQB/AIDUgHIAIABQDPgMCHALQB+AABpgDIBvgDQElgPEBAaQAsAEAnAIQBAAOA0AYQAWAJASALQAvAcAKAdQAEALgCALQgEAeg3ANIgGABQgiAIgqAAQgkAAgqgGg");
	this.shape_14.setTransform(672.8352,351.8643);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8D6B4").s().p("A0iBfQgagGgYgHQhJgWgvgfIgPgLQgwglgBgZIAAgBQgIg3BigCIAbABQBYADBOARIBEAOQDpAsEegSQA6AAA+gEQBTgLCBAEQB/AADXgWIAHABQDSgaCGADQB/gJBpgIQA5gFA3gDQEpgeECAYQAsADAoAJQBAAOA1AXQAXAKASALQAvAdALAcQAEALgBAKQgEAfg4AOIgFABQg/APhdgNIgagEQkkgolXAgIhRAEIkUARQiGgDjNAZIgVACQjfAViEAAQiQgChcANQg1ACgyAAQg+ADg9AAQjzAAjMgsg");
	this.shape_15.setTransform(671.4634,359.0007);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8D6B4").s().p("A0tCcQgagFgYgHQhKgWgwggIgPgLQgwgmgBgZIAAgBQgJg3BjgBIAcAAQBZAEBPASQAiAHAiAGQDrAqEiggQA6gEA/gGQBVgPCBgFQB+gHDZgmIAHABQDVgpCFgFIDqgeQA5gIA3gGQEtgsEDAWQAsADApAJQBBANA2AYQAWAKATALQAvAcAMAcQAFAMgCALQgCAfg5ANIgFABQhAAQhdgOIgbgEQklgmldAvIhRAIIkWAgQiEAEjRAoIgVADQjiAkiDAHQiRAHheARQg1AFgyADQhwAKhoAAQjCAAingjg");
	this.shape_16.setTransform(670.1087,364.4927);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8D6B4").s().p("A04DYQgagFgYgHQhLgWgxggIgPgLQgxgngBgZIAAAAQgJg5BlgBIAbABQBaAEBQASQAiAHAjAGQDtAqEmgvQA7gHA/gKQBXgUCAgMQB+gPDcg0IAGAAQDZg4CDgMIDrgtQA6gLA2gIQEyg6EEAUQAsADApAIQBDAOA2AXQAWAKATALQAwAcANAdQAFALgBALQgCAgg5AOIgFACQhBAPhegOIgcgDQklgnliA/IhSANQh+ATiaAbQiDAMjVA1IgUAEQjlAziDAPQiQAQhhAWQg1AHgzAFQiUAViHAAQigAAiMgdg");
	this.shape_17.setTransform(668.7541,370.0481);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8D6B4").s().p("A1DEUQgagFgYgHQhMgWgxggIgQgLQgxgngBgaIAAAAQgJg5BmgBIAcABQBbAEBQATQAjAHAjAGQDuApEqg+QA8gKA/gOQBZgZB/gVQB+gWDfhDIAGAAQDbhGCCgUQCBghBsgZQA6gOA3gLQE2hJEEASQAtADAqAJQBDANA2AXQAXAKAUALQAwAcANAcQAGAMgBALQgBAhg6AOIgFACQhBAPhfgOIgcgEQkmgmloBQIhSAQQh/AbibAjQiCATjYBDIgVAFQjnBBiDAXQiQAZhjAbQg2AKgzAIQixAgidAAQiHAAh5gYg");
	this.shape_18.setTransform(667.3942,375.6461);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8D6B4").s().p("A1OFOQgagFgZgHQhMgVgyghQgJgFgHgGQgygngBgZIAAgBQgIg5BmAAIAcAAQBcAEBRATQAjAIAkAGQDvAnEwhMQA7gNBBgRQBageB/gdQB9gfDhhRIAGgBQDfhUCAgdQCBgnBtggQA7gRA3gNQE6hYEFARQAtADAqAIQBEANA4AXQAXAKATALQAyAcANAcQAGAMAAALQgBAig6AOIgGACQhBAPhggOIgcgEQkngmluBgIhTAVQiAAgibAtQiBAajbBRIgVAGQjqBQiDAfQiPAhhmAgQg3ANgzAKQjHAtitAAQh2AAhqgVg");
	this.shape_19.setTransform(666.0444,381.3059);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8D6B4").s().p("A1ZGKQgagFgZgHQhOgWgyggIgQgMQgzgngBgaIAAgBQgIg5BoAAIAcABQBdAEBRAUQAkAIAkAFQDxAmE0hbQA8gPBBgWQBcgiB+glQB9gnDjhfIAHgCQDhhjB/gkQCCgwBtglQA8gUA3gQQE+hmEGAPQAtADArAIQBFAMA4AYQAXAJAUAMQAyAcAOAbQAHAMgBAMQABAig7APIgGABQhBAQhigPIgcgEQkogllzBwQgpALgrAOQiBAmicA2Qh/AijfBeIgVAIQjtBeiCAnQiPAphpAmQg3AQg0AMQjaA7i8AAQhmAAhegSg");
	this.shape_20.setTransform(664.6697,386.9654);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8D6B4").s().p("A1jHFQgbgFgagHQhOgWgzggIgQgLQgzgogBgaIAAgBQgJg6BqABIAcABQBeAEBSAUQAkAIAlAGQDyAkE4hpQA8gTBCgZQBfgnB8gtQB9gvDmhuIAGgCQDkhxB+gtQCCg3BvgrQA7gXA4gSQFCh1EHANQAuADArAHQBFANA5AXQAXAKAVALQAyAcAPAcQAHAMAAALQABAjg7APIgGACQhCAQhigPIgdgEQkpgll5CAQgpANgrAQQiCAtidA/Qh+AqjiBqIgVAJQjwBtiCAvQiOAyhrArQg4ASg0APQjrBIjGAAQhcAAhTgPg");
	this.shape_21.setTransform(663.3441,392.6451);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8D6B4").s().p("A1uH/QgcgEgZgHQhPgWg0ghIgQgLQg0gogBgaIAAgBQgJg6BrABIAdABQBeAEBTAVQAkAIAmAFQDzAjE9h4QA8gVBDgcQBhgtB7g1QB9g3Doh8IAGgDQDoh/B8g1QCDg/BvgwQA8gaA4gWQFGiDEHAMQAvACArAHQBHANA5AXQAYAKAUALQAzAcAQAcQAHALABAMQACAkg8APIgGABQhDARhjgQIgdgDQkrgll9CRIhVAgQiDAzieBIQh9AyjlB4IgVAKQjyB8iCA2QiPA7htAwQg5AVg0ARQj5BXjOAAQhTAAhMgOg");
	this.shape_22.setTransform(661.9933,398.3306);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F8D6B4").s().p("A15I6QgcgFgagHQhQgVg0ghIgQgLQg1gpgBgaIAAgBQgJg6BtABIAcABQBgAFBTAUQAlAJAmAFQD1AiFBiHQA9gYBDggIDehuQB8g/DriLIAFgEQDriNB7g9QCDhHBwg2QA9gdA4gYQFKiREIAJQAvACAsAIQBHAMA6AXQAYAKAVALQAzAcARAbQAIAMAAAMQADAkg9AQIgFABQhEARhkgQIgdgEQksgkmDChQgpARgsATQiEA6ifBRQh7A5jpCGIgVAMQj1CJiCA/Ij+B4Qg5AYg1AUQkGBljXAAQhKAAhFgMg");
	this.shape_23.setTransform(660.6226,404.0323);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8D6B4").s().p("A2EJ0QgcgEgagHQhRgWg1ghIgQgLQg1gpgBgaIAAgBQgJg7BtACIAdABQBgAFBVAVQAkAJAnAFQD3AgFFiVQA9gcBEgjQBlg2B6hFQB8hHDtiaIAFgEQDuicB6hFQCEhOBxg8QA9ggA4gaQFPigEIAIQAvABAtAHQBIAMA6AXQAZAKAVALQA0AcARAcQAIAMABALQAEAlg+AQIgGACQhDAQhlgPIgegEQktgkmICxIhWAoQiFBAifBaQh7BBjsCTIgVANQj4CYiCBHQiNBMhzA5Qg5Acg1AVQkSB1jeAAQhEAAg/gLg");
	this.shape_24.setTransform(659.278,409.7582);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F8D6B4").s().p("A2PKvQgcgFgbgHQhRgVg1ghIgRgLQg2gqgBgaIAAgBQgJg7BvACIAdABQBhAFBVAVQAlAKAnAEQD4AfFKikQA+geBEgnQBng7B5hNQB8hODvipIAGgFQDwiqB4hNQCFhWByhBQA9gkA5gdQFTiuEJAGQAwABAtAIQBIALA8AXQAYAKAWALQA0AcASAbQAIAMACAMQAEAmg+AQIgGACQhEARhmgRIgegEQkugjmODCQgqAUgsAXQiGBGigBjQh6BJjvChIgWAOQj6CniBBOQiNBVh2A/Qg6Aeg1AYQkeCEjkAAQg+AAg5gKg");
	this.shape_25.setTransform(657.9348,415.4732);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8D6B4").s().p("A3RLeQhhgZg4gpQg3gqgBgbQgJg7BwACQBzADBiAZQESBIGDjPQCchTDIiNQB8hXDxi3QD4i9B4hWQDOiSChhZQGVjfEpAvQBnAQBNAnQBNAoAFAnQAGAphFAQQhFARhngRQk4gxmoDcQipBYjWCQQh9BUkEC6Qj9C2iBBWQjSCLijBRQknCUjqAAQhXAAhOgVg");
	this.shape_26.setTransform(656.5904,421.1991);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8D6B4").s().p("A1GNEQhegPg6giQg4gjgDgaQgOg4BrgIQBugIBfAQQEMArFdjoQCNheCxiZQBuhdDVjFQDbjLBqhcQC2ieCRhjQFuj6EfARQBjAGBNAfQBNAeAJAlQAJAnhBAVQg/AXhkgHQkugSl/D4QiZBji/CdQhvBbjmDKQjgDEhzBdQi7CYiUBcQkyDAj4AAQgwAAgvgHg");
	this.shape_27.setTransform(669.3542,431.9465);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8D6B4").s().p("Ay6OpQhcgFg6gbQg6gcgFgYQgTg1BlgSQBpgSBdAFQEFAOE4kBQB+hoCaikQBghlC5jSQC9jZBdhjQCfipCBhuQFFkUEWgMQBggFBNAWQBMAWAMAiQANAkg8AbQg7AchgAEQkjANlXEUQiIBuioCpQhiBjjIDYQjDDThlBlQikCkiFBoQk3DzkHAAIgegBg");
	this.shape_28.setTransform(682.0837,442.7024);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8D6B4").s().p("AzDQAQg7gVgIgXQgYgwBggdQBkgdBbgFQD+gOESkbQBvhyCEiwQBShsCcjgQCgjlBPhrQCIi1Bxh4QEekuELgqQBcgPBNANQBMANAQAgQAQAhg3AhQg2AhhcAOQkZAskvExQh4B5iQC2QhUBqirDnQimDhhWBtQiOCxh1ByQkjEdkMAOIgmACQhBAAgugQg");
	this.shape_29.setTransform(694.8403,453.402);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8D6B4").s().p("Aw2R3Qg8gOgLgVQgdgtBbgnQBfgoBYgPQD3grDtk0QBgh9Bui7QBEhzCAjtQCCjzBChxQBwjBBhiDQD2lJEBhHQBZgZBNAEQBMAEATAeQAUAegzAnQgxAmhZAZQkOBLkGFNQhoCEh5DDQhGBxiOD2QiIDvhJB1Qh3C9hmB+Qj9E4kFAsQgvAIgoAAQghAAgbgFg");
	this.shape_30.setTransform(707.5712,464.1439);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F8D6B4").s().p("AuqTuQg8gHgNgUQgigqBWgxQBYgyBWgaQDxhHDIlOQBQiGBXjHQA3h7Bjj6QBlkBA0h4QBZjMBSiOQDNliD3hlQBWgjBNgFQBMgFAWAbQAXAcgtAsQgtAshWAjQkDBpjdFqQhYCPhhDQQg5B5hwEEQhsD+g7B8QhfDKhXCIQjXFUj+BLQhHAVg2AAIgWgBg");
	this.shape_31.setTransform(720.3073,474.8526);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8D6B4").s().p("AtqVTQgngmBRg8QBUg9BTgkQDqhkCilnQBCiQBAjSQApiCBHkHQBHkPAnh/QBCjYBBiYQCml9DtiCQBSguBNgOQBMgOAZAZQAbAagpAxQgnAyhTAtQj5CIi0GGQhICbhKDcQgrCAhSEUQhPEMgtCEQhJDWhHCTQixFvj3BpQhTAjg+ACIgEAAQg7AAgPgSg");
	this.shape_32.setTransform(733.0403,485.5494);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F8D6B4").s().p("ArgXSQgsgiBLhGQBPhIBRguQDjiAB9mBQAyibAqjeQAbiJAqkUQAqkcAZiGQArjkAxijQB+mXDjigQBPg3BMgXQBMgXAdAWQAeAYgkA3QgiA3hPA3QjvCniMGiQg4CmgyDpQgdCIg0EiQg0EbgdCLQgyDjg4CeQiLGLjwCGQhRAug/AJQgTACgPAAQgjAAgMgMg");
	this.shape_33.setTransform(745.7968,496.2872);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8D6B4").s().p("ApXZQQgxgeBGhRQBJhSBPg4QDdidBXmaQAjilAUjpQAMiRAOkhQAOkqALiNQATjwAiitQBVmxDZi9QBMhCBMggQBMggAgAUQAhAVgeA8QgeA9hMBCQjkDGhjG+QgoCxgaD2QgQCPgXExQgXEpgQCTQgbDvgoCqQhlGljpClQhOA4hAAQQgfAHgVAAQgXAAgKgJg");
	this.shape_34.setTransform(758.5279,507.0975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8D6B4").s().p("AnObPQg2gbBBhbQBEhdBNhCQDWi5Axm0QAUiwgDj0QgBiYgPkvQgPk3gCiUQgEj7ASi4QAtnMDOjaQBIhMBNgpQBLgpAkASQAlASgaBCQgZBChIBMQjaDlg7HbQgXC8gDECQgCCXAHFAQAGE3gCCbQgFD8gZC0Qg+HBjiDDQhMBChBAXQgnANgYAAQgRAAgJgGg");
	this.shape_35.setTransform(771.2906,517.8923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},58).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(64).to({_off:false},0).wait(3).to({_off:true},1).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E06362").s().p("AgsATQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgeQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAIBZAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAABIAAAeQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(509.25,400.3,0.9986,0.9986,0,0,0,1.7,1.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80).to({_off:false},0).wait(1).to({regX:1.4,regY:1.4,scaleX:0.9987,scaleY:0.9987,x:508.35,y:419.25},0).wait(580));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Toasts_Eat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CF7254").s().p("AgyBeIgEgDQgHgDgBgHQgCgGADgGIBaicQADgGAHgBQAGgCAHADIADADQAGADACAHQACAGgDAGIhaCcQgEAGgGABIgFABQgEAAgDgCg");
	this.shape.setTransform(25.95,23.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF7254").s().p("AgzBeIgEgDQgFgDgCgHQgCgGADgGIBEh1IAAAAQADAAACgCQADgBABgCQADgBADgFIAEgLQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQADgHAAgIQAEgGAGgBQAGgCAGADIAEADQAHADABAHQACAGgEAGIhZCcQgDAGgHABIgFABQgEAAgEgCg");
	this.shape_1.setTransform(18.15,18.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E89F61").s().p("AiJAgQgNgDgKgJQgLgKgCgNIgEgXQgDgTADgSIAKAIIAhAaQAcASARgLQAQgLgEgeIgDgXQgBgNAEgJQAGADAGAIIALANQAKALAOAEQAHADAIgBQAIgCAEgGQADgFAAgMIgBhEIAkAOQAUAIAHgKQACgDAAgIIABgPQAkgCAeAWQAkAaAHArIAEAXQACAOgGANQgGAMgMAHIAYCOIklAxg");
	this.shape_2.setTransform(21.0984,20.6415);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFC38F").s().p("AigAmQgLgCgKgIQgRgMgEgVIgFgaQgEgaAGgYIAGADQAKAGAOALQgDARADATIAEAXQACANAKAKQAKAKAOACIAYCQIEkgxIgYiPQAMgGAHgNQAGgNgCgOIgEgWQgHgsgkgZQgfgWgkACQABgTgDgLQAxgHAoAcQAqAeAJAzIAEAbQAEAVgNASQgHAKgKAFIAcCmIlWA5g");
	this.shape_3.setTransform(20.9403,20.4584);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,40.9);


(lib.Toasts_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CF7254").s().p("AgyBeIgEgDQgHgDgBgHQgCgGADgGIBaicQADgGAHgBQAGgCAHADIADADQAGADACAHQACAGgDAGIhaCcQgEAGgGABIgFABQgEAAgDgCg");
	this.shape.setTransform(25.95,23.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF7254").s().p("AgzBeIgEgDQgFgDgCgHQgCgGADgGIBaicQAEgGAGgBQAGgCAGADIAEADQAHADABAHQACAGgEAGIhZCcQgDAGgHABIgFABQgEAAgEgCg");
	this.shape_1.setTransform(18.15,18.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E89F61").s().p("AiJAgQgNgDgKgJQgLgKgCgNIgEgXQgHgsAagkQAZgkAsgHICNgXQArgIAkAaQAkAaAHArIAEAXQACAOgGANQgGAMgMAHIAYCOIklAxg");
	this.shape_2.setTransform(21.0996,20.641);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFC38F").s().p("Ai0BvQgSgMgEgWIgEgaQgIgzAdgpQAegqAzgIIClgcQAzgIAqAdQAqAeAIAzIAEAaQAEAVgMASQgNARgVAEIk0AzIgKABQgPAAgNgKg");
	this.shape_3.setTransform(20.8882,12.152);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFC38F").s().p("Ai/hhIFVg5IAqD7IlVA5g");
	this.shape_4.setTransform(22.675,25.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Toasts_1, new cjs.Rectangle(0,0,41.9,40.9), null);


(lib.Toaster = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EFC38F").s().p("AgTAUQgJgIABgMQgBgLAJgIQAJgIAKAAQAMAAAIAIQAJAIAAALQAAAMgJAIQgIAIgMAAQgKAAgJgIg");
	this.shape.setTransform(31.7,48.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E06362").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAJgIAKAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgKAAgJgIg");
	this.shape_1.setTransform(22.975,48.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243040").s().p("AgTCqIAAlTIAnAAIAAFTg");
	this.shape_2.setTransform(72.875,26.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A9B8BE").s().p("AgsBSIgegaQgDgCACgEIByiDQADgDADADIAeAaQADADgCADIhyCDQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape_3.setTransform(37.425,29.2193);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A9B8BE").s().p("Ag6BiIgegaQgDgCACgEICOijQADgDADACIAeAbQADADgDACIiNCkIgDACIgDgCg");
	this.shape_4.setTransform(29.2182,23.1181);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#718085").s().p("AATEGQgkAAgbgaQgagbAAglIAAlXQAAglAagbQAbgaAkAAIA0AAIAAILg");
	this.shape_5.setTransform(7.075,26.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A9B8BE").s().p("AhhEGIAAoLICiAAQAOAAAJAKQAKAKAAANIAAHJQAAANgKAKQgJAKgOAAg");
	this.shape_6.setTransform(72.325,26.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8395A0").s().p("AjeEGQglAAgagaQgbgbAAglIAAlXQAAglAbgbQAagaAlAAIIWAAIAAILg");
	this.shape_7.setTransform(31.25,26.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Toaster, new cjs.Rectangle(0,0,82.2,52.4), null);


(lib.Dog_Eat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B8926F").s().p("AiyBrQCag2BqhtQBShUAGgwQAbAmg5BWQgdAtg8BCQhWBihzArg");
	this.shape.setTransform(339.65,60.2,1,1,-59.9996,0,0,-16.5,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({regY:14.9,rotation:-30,x:339.75,y:60.3},0).wait(6).to({regY:14.8,rotation:-59.9996,x:339.65,y:60.2},0).wait(6).to({regY:14.9,rotation:-30,x:339.75,y:60.3},0).wait(6).to({regY:14.8,rotation:-59.9996,x:339.65,y:60.2},0).wait(6).to({regY:14.9,rotation:-30,x:339.75,y:60.3},0).wait(7));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A231F").s().p("AgNANQgFgBAAgDQACgNAIgFQAIgGAPAFQABABABAAQABAAAAABQABAAAAABQAAAAgBABQAAABAAAAQgBAAAAAAQgBABgBgBQAAAAgBAAQgLgDgFADQgGAEgBAMQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_1.setTransform(13.0341,95.1962,0.9999,0.9999,-14.4706);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1EFE1").s().p("AAOANQgLgDgCgDQgBgGgEgCIgCgDIgCgBIgBAAQgLgDgCgDQAAgBAAAAQAAgBABAAQAAAAABAAQABAAABAAIAFABQAbAHAJARQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAgBAAIgGgBg");
	this.shape_2.setTransform(17.4022,89.4521,0.9999,0.9999,-14.4706);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#53463C").s().p("Ag2AWQgUgbAKgUQAJgUAfgBQAbgBAcANQAdANAHASQAIATgdAPQgGAEgngGQgbgFACAXQgMAAgSgZg");
	this.shape_3.setTransform(13.7707,91.6918,0.9999,0.9999,-14.4706);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EABE83").s().p("AgXAbQgLgKgBgPQAAgOAJgLQAKgLAPgBQAOAAALAJQALAKABAPQABAOgKALQgKALgPABIgCAAQgNAAgKgJg");
	this.shape_4.setTransform(141.234,72.0559,1,1,-14.4707);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B8926F").s().p("AhEAgQgogMAMgdQAHgTAqgIQAggFAaACIAfABQAWADASAQQAiAcghASQgbAOgpAAQg3AAgcgJg");
	this.shape_5.setTransform(224.2529,71.7483);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B8926F").s().p("AhpBZQgUgTgZhRQgIgdgCgQQgDgXAFgYIACgMQCCAiCqAWQAlAsgkA8QglA9hGAIQgaACgVAAQhDAAgdgbg");
	this.shape_6.setTransform(180.3375,62.6485);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B8926F").s().p("AhuBjQg+gggLg1QgKg1AzgwQApgmBQAHQBLAGA3AmQA8AqAJAOQAWAfgqAsQgrAvhVAMQgZAEgVAAQg2AAgogVg");
	this.shape_7.setTransform(200.4672,88.3108);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B8926F").s().p("AgpBRQiUglgahsQC8glBYAHQCZANACB8IAAAdQhFAYhJAAQg5AAg6gPg");
	this.shape_8.setTransform(325.4,63.1655);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8926F").s().p("AgZEGQg8gyghhCQgdg5gQhWQgOhJALhJIANhQQANg3AUgQQAMgJAyAZQA+AfAEABQARAEAxAEQAlADAYAMQArAVgHAwQgEAYgcA9QgXAygKAyQgIAtgBA9QgBBkgRAiQgNAagYAAQgbAAgogjg");
	this.shape_9.setTransform(127.4171,38.5431,1,1,-14.4707);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8A6D54").s().p("AgXBrIgMABQgVgdgggYQgcgWgjgQQCIhnAbgNQAngRAfgJQAXgGAvgJQgOAuABBhQABBZgXAxQhAgghMgCg");
	this.shape_10.setTransform(103.7444,31.8465,1,1,-14.4707);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#53463C").s().p("AgGAjQgbgHgJgRQgIgOAIgPQAJgPATgDQAOgCAPAGIgMgGQAvAOgDAjQgDAcgcAAQgKAAgMgEg");
	this.shape_11.setTransform(78.3166,63.1742,1,1,-14.4707);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#545473").s().p("AgLAOQgFgGgBgHQgBgHAFgFQAGgFAHgBQAGgBAGAGQAFAEABAIQABAGgGAGQgEAGgIAAIgBAAQgGAAgFgEg");
	this.shape_12.setTransform(143.9903,40.8967,0.9999,0.9999,-14.4706);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EABE83").s().p("AgLANQgGgEAAgIQgBgGAGgGQAFgGAHAAQAGAAAGAFQAFAEABAIQAAAGgFAGQgEAGgIAAIgBAAQgGAAgFgFg");
	this.shape_13.setTransform(143.0864,57.6002,0.9999,0.9999,-14.4706);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EABE83").s().p("AgLANQgFgEgBgIQAAgHAFgFQAFgGAHAAQAHgBAFAGQAFAFABAHQAAAGgFAGQgFAFgHABIgBAAQgGAAgFgFg");
	this.shape_14.setTransform(131.3914,87.2084,0.9999,0.9999,-14.4706);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EABE83").s().p("AgLANQgFgEgBgIQgBgHAGgFQAEgGAIAAQAGgBAGAGQAGAFAAAHQAAAGgEAGQgGAFgHABIgBAAQgGAAgFgFg");
	this.shape_15.setTransform(136.717,79.5351,0.9999,0.9999,-14.4706);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C2F48").s().p("AikDnQgdgpgNgdQBdguBRiDQBaiXgViCQAhAAA0ASQA4AVAdACQgQEChqCOQhGBdiFA9IguhDg");
	this.shape_16.setTransform(135.3656,66.3372,1,1,-14.4707);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8926F").s().p("Ag+DDQjPgZgwiBQgXg9A6hBQAzg4BGgYQAcgJBhgOQBhgNAQAEQBPATAjARQA1AbAoA3QAvBBgHA8QgIBChEAmQg2AehVAMQgwAHgwAAQglAAgmgEg");
	this.shape_17.setTransform(76.6429,66.1064,1,1,-14.4707);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EABE83").s().p("AghCaQgQgNgCgrQgBgUAFhDQAGh3gkgTQAogvAogDQApgDAiAsQgEBFAAAwQAABjgMAtQgPA1gfAAQgUAAgdgYg");
	this.shape_18.setTransform(335.9231,125.9029,1.1152,1.1152);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EABE83").s().p("AgWCfQgLgUgIg2QgJhGgIgbQgQg8gjgqQAzhNA7AHQA9AGAwBdQgQAdgMCFQgJBsgnABIgEAAQgkAAgQgbg");
	this.shape_19.setTransform(307.3384,123.3985,1.1941,1.1941,8.6928);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EABE83").s().p("AhGCzQgvgSAhiTIAziwQAvgdAkARQAkASAMA/QgXALgWAzQgIASgdBRQgmBxgmAAQgFAAgFgCg");
	this.shape_20.setTransform(135.5,108.15,1,1,0,0,0,6.3,-14.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EABE83").s().p("Ag1ArIgGhiQgFgwgNgJQApg6AoADQAsADAdBCQgLASgGAuQgDAagFA6QgLBtgsAJIgFAAQgmAAgHh9g");
	this.shape_21.setTransform(149.95,124.4232);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B8926F").s().p("AirA8QAAg0AMgzQAXhkA8gKQAcgEBeAdQAkALAhAcQAoAiASAsQg8gliDBIQg2AegqAkQgqAlgKAbQgGg7ABgjg");
	this.shape_22.setTransform(48.5331,35.7112,1,1,-14.4707);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8A6D54").s().p("AirBKQAAgtAHgfQALgrASgqQAbg8AZgGQATgEAzApQAaAVAmAiQAZAUAfAiQApAuAJAIIAEgEQANACgCAJQgeADgwAOQg6APgUAEQhDAGghAIQg7ANgZAlIgDhQg");
	this.shape_23.setTransform(58.9297,35.6177,1,1,-14.4707);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3F342D").s().p("Ag1ALQAUgeAYgRQAVgQAOADQAKACAeAPQgPAggpAdQgrAggTgSIgHAHQgOgGAUghg");
	this.shape_24.setTransform(124.601,81.2512,1,1,-14.4707);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2D8B4").s().p("AgEgCQgBgHADgHQACARAFAQQgHgKgCgJg");
	this.shape_25.setTransform(12.875,97.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EABE83").s().p("AUfFXQg8gHgzBNIgSgUQgQgPjXgHQjJgGkLAFQqaAMgjAvIgCAEQgdhDgsgDQgqgCgoA5IgDgCQgXgIgPANQgZgzgjgHQgjgGgjAkIAAgDQgBgkADgzIACgXIABgUIgCgBQAFgfgegwIgMgSIgFgGIBRAAIgSgNIgXgNIAKggQgLACgFADQg1AZgaAPQiaBVi0BAIk+BSQhhALhQgIQg4gFgqgNQg+gUgcgmQgJgMgGgOQgHgQgCgRQgCgSACgTQALh8B9h6QBWhTCahdQAngYBMgzQBFgsAygXQBXgnBJgVQB1giA4AUIAzAPQAjAKARAHQBRAcBlAVIAgB6IAAhsIAjAQIBGAeIAJAEIgWAiQBSAeBXAWQCBAiCrAWQCHAREiASQE3ATERgmIBRgPQC8glBZAHQCaANACB9IAAAdQgBBQgKCAIgQDSQghgsgpACQgpADgoAvQgIgFgKAAQgigEgSAhQgwhdg+gGgAm0CcIAZAAIAAgGg");
	this.shape_26.setTransform(179.7679,71.2946);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EABE83").s().p("AVGF9Qg7gHg0BNIgSgUQgQgPjXgHQjIgGkMAFQqZAMgkAvIgCAEQgdhDgsgDQgpgCgpA5IgCgCQgXgIgQANQgYgzgkgHQgigGgkAkIAAgDQAAgkACgzIACgXIABgUIgCgBQAFgfgegwIgMgRQgPgVgRgUIgTgSIARgdQgKAAgGABQg5ALgeAIQj2A/kgAJQg+AChVgMQhlgOhPgcQg0gTgmgYQg2gigTgsQgFgOgDgPQgCgQACgRQACgSAHgSQAqh2CYhXQBog7Crg0QAtgNBWgeQBPgaA2gKQBcgPBNgDQB5gDAyAgQAOAKAgASQAfATAPAKQBUA5BzA0IBHAeIAJAEIgXAiQBSAeBXAWQCAAiCsAWQCHAREiASQE4ATEQgmIBRgPQC8glBZAHQCaANACB8IAAAdQgBBRgKCAIgPDSQgigsgpACQgpADgoAvQgHgFgLAAQgigEgSAhQgwhdg+gGg");
	this.shape_27.setTransform(175.85,67.458);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2D8B4").s().p("AgBgDQAAgIADgFQgCARACAQQgEgLABgJg");
	this.shape_28.setTransform(4.4729,66.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E27676").s().p("AgnAxQgTgbASg5QAJgfAOgIQARAsAxAhIgJAFQgQAKgMAUQgDAFgBATQgBAMgNABIgBAAQgNAAgTgag");
	this.shape_29.setTransform(7.2555,78.1914);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{rotation:-14.4707,x:124.601,y:81.2512}},{t:this.shape_23,p:{rotation:-14.4707,x:58.9297,y:35.6177}},{t:this.shape_22,p:{rotation:-14.4707,x:48.5331,y:35.7112}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{rotation:-14.4707,x:76.6429,y:66.1064}},{t:this.shape_16,p:{rotation:-14.4707,x:135.3656,y:66.3372}},{t:this.shape_15,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.4706,x:136.717,y:79.5351}},{t:this.shape_14,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.4706,x:131.3914,y:87.2084}},{t:this.shape_13,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.4706,x:143.0864,y:57.6002}},{t:this.shape_12,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.4706,x:143.9903,y:40.8967}},{t:this.shape_11,p:{rotation:-14.4707,x:78.3166,y:63.1742}},{t:this.shape_10,p:{rotation:-14.4707,x:103.7444,y:31.8465}},{t:this.shape_9,p:{rotation:-14.4707,x:127.4171,y:38.5431}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{rotation:-14.4707,x:141.234,y:72.0559}},{t:this.shape_3,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.4706,x:13.7707,y:91.6918}},{t:this.shape_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.4706,x:17.4022,y:89.4521}},{t:this.shape_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.4706,x:13.0341,y:95.1962}}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_24,p:{rotation:0,x:116.7746,y:78.5757}},{t:this.shape_23,p:{rotation:0,x:64.5883,y:17.9777}},{t:this.shape_22,p:{rotation:0,x:54.4979,y:15.4702}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{rotation:0,x:74.1213,y:51.9265}},{t:this.shape_16,p:{rotation:0,x:130.925,y:66.8243}},{t:this.shape_15,p:{scaleX:1,scaleY:1,rotation:0,x:128.95,y:79.9502}},{t:this.shape_14,p:{scaleX:1,scaleY:1,rotation:0,x:121.875,y:86.0502}},{t:this.shape_13,p:{scaleX:1,scaleY:1,rotation:0,x:140.6002,y:60.3}},{t:this.shape_12,p:{scaleX:1,scaleY:1,rotation:0,x:145.65,y:44.35}},{t:this.shape_11,p:{rotation:0,x:76.4746,y:49.5054}},{t:this.shape_10,p:{rotation:0,x:108.925,y:25.525}},{t:this.shape_9,p:{rotation:0,x:130.174,y:37.925}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{rotation:0,x:135.1783,y:73.8283}},{t:this.shape_3,p:{scaleX:1,scaleY:1,rotation:0,x:6.8491,y:60.9964}},{t:this.shape_2,p:{scaleX:1,scaleY:1,rotation:0,x:10.9257,y:59.735}},{t:this.shape_1,p:{scaleX:1,scaleY:1,rotation:0,x:5.26,y:64.206}}]},7).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,355.6,145.9);


(lib.Dog = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A231F").s().p("AgNANQgFgBAAgDQACgNAIgFQAIgGAPAFQABABABAAQABAAAAABQABAAAAABQAAAAgBABQAAABAAAAQgBAAAAAAQgBABgBgBQAAAAgBAAQgLgDgFADQgGAEgBAMQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape.setTransform(5.26,64.206);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1EFE1").s().p("AAOANQgLgDgCgDQgBgGgEgCIgCgDIgCgBIgBAAQgLgDgCgDQAAgBAAAAQAAgBABAAQAAAAABAAQABAAABAAIAFABQAbAHAJARQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAgBAAIgGgBg");
	this.shape_1.setTransform(10.9257,59.735);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#53463C").s().p("Ag2AWQgUgbAKgUQAJgUAfgBQAbgBAcANQAdANAHASQAIATgdAPQgGAEgngGQgbgFACAXQgMAAgSgZg");
	this.shape_2.setTransform(6.8491,60.9964);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EABE83").s().p("AgXAbQgLgKgBgPQAAgOAJgLQAKgLAPgBQAOAAALAJQALAKABAPQABAOgKALQgKALgPABIgCAAQgNAAgKgJg");
	this.shape_3.setTransform(135.1783,73.8283);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B8926F").s().p("AhEAgQgogMAMgdQAHgTAqgIQAggFAaACIAfABQAWADASAQQAiAcghASQgbAOgpAAQg3AAgcgJg");
	this.shape_4.setTransform(224.2529,71.7483);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B8926F").s().p("AhpBZQgUgTgZhRQgIgdgCgQQgDgXAFgYIACgMQCCAiCqAWQAlAsgkA8QglA9hGAIQgaACgVAAQhDAAgdgbg");
	this.shape_5.setTransform(180.3375,62.6485);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B8926F").s().p("AhuBjQg+gggLg1QgKg1AzgwQApgmBQAHQBLAGA3AmQA8AqAJAOQAWAfgqAsQgrAvhVAMQgZAEgVAAQg2AAgogVg");
	this.shape_6.setTransform(200.4672,88.3108);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B8926F").s().p("AgpBRQiUglgahsQC8glBYAHQCZANACB8IAAAdQhFAYhJAAQg5AAg6gPg");
	this.shape_7.setTransform(325.4,63.1655);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B8926F").s().p("AiyBrQCag2BqhtQBShUAGgwQAbAmg5BWQgdAtg8BCQhWBihzArg");
	this.shape_8.setTransform(338.45,63.25,1,1,-59.9996,0,0,-16.5,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8926F").s().p("AgZEGQg8gyghhCQgdg5gQhWQgOhJALhJIANhQQANg3AUgQQAMgJAyAZQA+AfAEABQARAEAxAEQAlADAYAMQArAVgHAwQgEAYgcA9QgXAygKAyQgIAtgBA9QgBBkgRAiQgNAagYAAQgbAAgogjg");
	this.shape_9.setTransform(130.174,37.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8A6D54").s().p("AgXBrIgMABQgVgdgggYQgcgWgjgQQCIhnAbgNQAngRAfgJQAXgGAvgJQgOAuABBhQABBZgXAxQhAgghMgCg");
	this.shape_10.setTransform(108.925,25.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#53463C").s().p("AgGAjQgbgHgJgRQgIgOAIgPQAJgPATgDQAOgCAPAGIgMgGQAvAOgDAjQgDAcgcAAQgKAAgMgEg");
	this.shape_11.setTransform(76.4746,49.5054);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#545473").s().p("AgLAOQgFgGgBgHQgBgHAFgFQAGgFAHgBQAGgBAGAGQAFAEABAIQABAGgGAGQgEAGgIAAIgBAAQgGAAgFgEg");
	this.shape_12.setTransform(145.65,44.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EABE83").s().p("AgLANQgGgEAAgIQgBgGAGgGQAFgGAHAAQAGAAAGAFQAFAEABAIQAAAGgFAGQgEAGgIAAIgBAAQgGAAgFgFg");
	this.shape_13.setTransform(140.6002,60.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EABE83").s().p("AgLANQgFgEgBgIQAAgHAFgFQAFgGAHAAQAHgBAFAGQAFAFABAHQAAAGgFAGQgFAFgHABIgBAAQgGAAgFgFg");
	this.shape_14.setTransform(121.875,86.0502);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EABE83").s().p("AgLANQgFgEgBgIQgBgHAGgFQAEgGAIAAQAGgBAGAGQAGAFAAAHQAAAGgEAGQgGAFgHABIgBAAQgGAAgFgFg");
	this.shape_15.setTransform(128.95,79.9502);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C2F48").s().p("AikDnQgdgpgNgdQBdguBRiDQBaiXgViCQAhAAA0ASQA4AVAdACQgQEChqCOQhGBdiFA9IguhDg");
	this.shape_16.setTransform(130.925,66.8243);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8926F").s().p("Ag+DDQjPgZgwiBQgXg9A6hBQAzg4BGgYQAcgJBhgOQBhgNAQAEQBPATAjARQA1AbAoA3QAvBBgHA8QgIBChEAmQg2AehVAMQgwAHgwAAQglAAgmgEg");
	this.shape_17.setTransform(74.1213,51.9265);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EABE83").s().p("AghCaQgQgNgCgrQgBgUAFhDQAGh3gkgTQAogvAogDQApgDAiAsQgEBFAAAwQAABjgMAtQgPA1gfAAQgUAAgdgYg");
	this.shape_18.setTransform(338.5023,125.4001,1.1152,1.1152,-9.2106);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EABE83").s().p("AVBF6Qg8gHgzBNIgSgUQgRgPjWgHQjJgGkLAFQqaAMgjAvIgCAEQgdhDgsgDQgqgCgoA5IgDgCQgXgIgPANQgZgzgkgHQgigGgjAkIAAgDQgBgsAEhCIABgUIgBgBQAEgfgegwQgTgdgZgdQgbgcgPgIQgDgBgQgDQgTgCgIACQg1ALgbAIQjkA/kMAJQg5AChPgMQhegOhIgcQjGhNAviOQAmh2COhXQBgg7Cfg0QApgNBRgeQBIgaAygKQBWgPBHgDQBxgDAuAgQANAKAdASQAdATAOAKQBPA5BqA0QCWBICkAqQCBAiCrAWQCHAREiASQE4ATEQgmIBRgPQC9glBYAHQCaANACB9IAAAcQAABRgKCAIgQDSQghgsgqACQgpADgnAvQgIgFgKAAQgjgEgSAhQgwhdg9gGg");
	this.shape_19.setTransform(176.4242,67.758);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EABE83").s().p("AgWCfQgLgUgIg2QgJhGgIgbQgQg8gjgqQAzhNA7AHQA9AGAwBdQgQAdgMCFQgJBsgnABIgEAAQgkAAgQgbg");
	this.shape_20.setTransform(313.65,100.35,1.2805,1.2329,16.9038,0,0,1.4,-18.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EABE83").s().p("AgLCrQgsgFgGiHIADijQAlgmAbAAQAggBAYAyQgRAPgGA0QgDAUgDBPQgCBAgHAaQgKAkgVAAIgEAAg");
	this.shape_21.setTransform(135.9,104.45,1.2913,1.4122,29.9971,0,0,1.2,-16.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EABE83").s().p("Ag1ArIgGhiQgFgwgNgJQApg6AoADQAsADAdBCQgLASgGAuQgDAagFA6QgLBtgsAJIgFAAQgmAAgHh9g");
	this.shape_22.setTransform(149.2,104.5,1.0968,1.2116,-14.999,0,0,0.5,-16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8926F").s().p("AirA8QAAg0AMgzQAXhkA8gKQAcgEBeAdQAkALAhAcQAoAiASAsQg8gliDBIQg2AegqAkQgqAlgKAbQgGg7ABgjg");
	this.shape_23.setTransform(54.4979,15.4702);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8A6D54").s().p("AirBKQAAgtAHgfQALgrASgqQAbg8AZgGQATgEAzApQAaAVAmAiQAZAUAfAiQApAuAJAIIAEgEQANACgCAJQgeADgwAOQg6APgUAEQhDAGghAIQg7ANgZAlIgDhQg");
	this.shape_24.setTransform(64.5883,17.9777);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3F342D").s().p("Ag1ALQAUgeAYgRQAVgQAOADQAKACAeAPQgPAggpAdQgrAggTgSIgHAHQgOgGAUghg");
	this.shape_25.setTransform(116.7746,78.5757);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2D8B4").s().p("AAHAxIgBAAQgSgCgWgXIgCgBQgYgYABgVQACgWAegDQAUgCAOAGQAPgCAMAIQASAKAGAXQAFAWgMAPQgLAQgaAAIgHAAg");
	this.shape_26.setTransform(10.2094,67.9413);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E27676").s().p("Ag2AzQgTgcARg4QAOgsAWABQAVAXATACIAIAGQAdAXAIASQgbAFgNAIQgQAKgMAUQgDAFgBATQAAAMgOACIgBAAQgOAAgSgag");
	this.shape_27.setTransform(8.8055,78.0395);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B8926F").s().p("AhsBeQgUgTgZhRQgIgdgCgQQgDgXAFgYIAEgWQCqAtCGARQAlAsgnA+QgoA/hGAIQgaACgVAAQhDAAgdgbg");
	this.shape_28.setTransform(180.5769,61.5352,1,1,-4.9958);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EABE83").s().p("AgQCnQgsgFgFiHIACijQAkgkAhAHQAkAHAYAzQgQAPgIAxQgDASgFBMQgJB0glAAIgEAAg");
	this.shape_29.setTransform(134.354,124.2139,1.1527,1.1527,-7.4953);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EABE83").s().p("AU5FyQg8gGgzBNIgSgUQgRgQjXhKQjXhJnNA3QnMA3ggBZIgCADQgdhCgsgDQgqgDgoA6IgDgCQgXgJgPAOQgZgzgkgHQgigHgjAkIAAgDQgBgrAEhCIABgVIgBgBQAEgegdgvQAMgOAKgRQgSgVgVgTQgegZgPgHIgUgCQgTAAgIADQgzARgaAKQjdBXkJAkQg5AIhPgDQhVgEhFgRIgQgEQgbgHgXgJIgKgFQgUgIgPgJIgDgBQgOgJgLgJIgCgBIgNgLIgCgCQgXgagJgeIgBgCQgEgPAAgPQgBgVAFgXQAah4CDhlQBahGCZhDQAngRBNgnQBGghAxgPQBTgYBHgKQBwgQAwAcIAuAXQAfAQAPAJQBUAwBuApQAtAQAtANIgeBUQgeBWgJAjIgTBPQgLAzgJAcIgKAfIADgGQAKgaATg7QATg3AMgdQALgbAXguQAag0AJgVIAPghQBoApBuAdQCBAiCZgCQCZgBEtARQEtARCRACQCRABA/gLQC9glBYAHQCaAMACB+IAAAbQAABRgKCAIgQDSQghgsgqADQgpADgnAvQgIgFgKgBQgjgDgSAgQgwhdg9gGg");
	this.shape_30.setTransform(177.2182,68.5489);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E27676").s().p("AgLATQgPgXgFgvQAMAJAOAJIACABQAPAJATAIIgCALQgCAHAEAbQADARgLAEIgDABQgLAAgUghg");
	this.shape_31.setTransform(15.9731,91.7244);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2D8B4").s().p("AgDgCQAAgHACgGQABAPADAOIABACQgFgJgCgJg");
	this.shape_32.setTransform(7.5526,77.9125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{rotation:0,x:116.7746,y:78.5757}},{t:this.shape_24,p:{rotation:0,x:64.5883,y:17.9777}},{t:this.shape_23,p:{rotation:0,x:54.4979,y:15.4702}},{t:this.shape_22,p:{regX:0.5,regY:-16.7,scaleX:1.0968,scaleY:1.2116,rotation:-14.999,x:149.2,y:104.5}},{t:this.shape_21},{t:this.shape_20,p:{regX:1.4,scaleX:1.2805,scaleY:1.2329,rotation:16.9038,x:313.65,y:100.35}},{t:this.shape_19},{t:this.shape_18,p:{scaleX:1.1152,scaleY:1.1152,rotation:-9.2106,x:338.5023,y:125.4001}},{t:this.shape_17,p:{rotation:0,x:74.1213,y:51.9265}},{t:this.shape_16,p:{rotation:0,x:130.925,y:66.8243}},{t:this.shape_15,p:{rotation:0,x:128.95,y:79.9502}},{t:this.shape_14,p:{rotation:0,x:121.875,y:86.0502}},{t:this.shape_13,p:{rotation:0,x:140.6002,y:60.3}},{t:this.shape_12,p:{rotation:0,x:145.65,y:44.35}},{t:this.shape_11,p:{rotation:0,x:76.4746,y:49.5054}},{t:this.shape_10,p:{rotation:0,x:108.925,y:25.525}},{t:this.shape_9,p:{rotation:0,x:130.174,y:37.925}},{t:this.shape_8,p:{regX:-16.5,regY:14.8,rotation:-59.9996,x:338.45,y:63.25}},{t:this.shape_7},{t:this.shape_6,p:{y:88.3108}},{t:this.shape_5},{t:this.shape_4,p:{y:71.7483}},{t:this.shape_3,p:{rotation:0,x:135.1783,y:73.8283}},{t:this.shape_2,p:{rotation:0,x:6.8491,y:60.9964}},{t:this.shape_1,p:{rotation:0,x:10.9257,y:59.735}},{t:this.shape,p:{rotation:0,x:5.26,y:64.206}}]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_25,p:{rotation:-9.951,x:120.3461,y:75.5642}},{t:this.shape_24,p:{rotation:-9.951,x:58.4732,y:24.896}},{t:this.shape_23,p:{rotation:-24.9497,x:43.6867,y:24.5883}},{t:this.shape_22,p:{regX:0.2,regY:-17,scaleX:1.1577,scaleY:1.1577,rotation:6.5068,x:150.3,y:104.8}},{t:this.shape_29},{t:this.shape_20,p:{regX:0.6,scaleX:1.1237,scaleY:1.1873,rotation:-8.9429,x:310.3,y:101.75}},{t:this.shape_18,p:{scaleX:1.1424,scaleY:1.1424,rotation:7.1862,x:333.889,y:124.6682}},{t:this.shape_17,p:{rotation:-9.951,x:73.7293,y:56.6867}},{t:this.shape_16,p:{rotation:-9.951,x:132.2528,y:61.5444}},{t:this.shape_15,p:{rotation:-9.9494,x:132.5714,y:74.8167}},{t:this.shape_14,p:{rotation:-9.9494,x:126.6569,y:82.0473}},{t:this.shape_13,p:{rotation:-9.9494,x:140.651,y:53.4496}},{t:this.shape_12,p:{rotation:-9.9494,x:142.869,y:36.8674}},{t:this.shape_11,p:{rotation:-9.951,x:75.6289,y:53.8954}},{t:this.shape_10,p:{rotation:-9.951,x:103.4471,y:24.6681}},{t:this.shape_9,p:{rotation:-54.9495,x:122.0024,y:28.8167}},{t:this.shape_8,p:{regX:0,regY:0,rotation:0,x:354.9115,y:48.5}},{t:this.shape_7},{t:this.shape_6,p:{y:86.9608}},{t:this.shape_28},{t:this.shape_4,p:{y:70.8483}},{t:this.shape_3,p:{rotation:-9.951,x:137.6525,y:67.7079}},{t:this.shape_2,p:{rotation:-9.9494,x:9.0346,y:77.2444}},{t:this.shape_1,p:{rotation:-9.9494,x:12.8319,y:75.2977}},{t:this.shape,p:{rotation:-9.9494,x:8.024,y:80.6802}}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,372.8,145.1);


(lib.ClockMoving = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Circle
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#584658","#3C303B"],[0,1],-4,0,4,0).s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape.setTransform(74.9,72.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(168));

	// Hours
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#584658","#3C303B"],[0,1],0.3,2,-0.4,-0.9).s().p("AiWAjIEmhNIAHAdIkrA4g");
	this.shape_1.setTransform(74.4,73,1,1,0,0,0,14.6,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(119).to({rotation:13.2657,y:73.05},0).wait(49));

	// Main
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#584658","#3C303B"],[0,1],-2,0.2,0.9,-0.3).s().p("Ag0jhIAIgCIBhHBIgdAGg");
	this.shape_2.setTransform(74.45,70.8,1,1,0,0,0,3.2,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(119).to({regX:3.3,regY:21.2,rotation:12.4037,x:74.5},0).wait(49));

	// Seconds
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE745F").s().p("AhBDgQgEgBgBgDQgCgEABgDIB/m0IARAFIgBAAIh+G0QgBADgDACIgEABIgDAAg");
	this.shape_3.setTransform(75.5,72.9,1,1,90,0,0,6.2,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(29).to({rotation:115.5003,x:75.45,y:72.95},0).wait(30).to({regX:6.3,rotation:135,x:75.4,y:73},0).wait(30).to({rotation:150,x:75.45,y:72.95},0).wait(30).to({regX:6.1,regY:-22.2,scaleX:0.9999,scaleY:0.9999,rotation:164.2499,x:75.65,y:73},0).wait(49));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#584658").s().p("AggAqIAAgWQAAgXAgAAQASAAAAgLQAAgNgSAAQgHAAgEADQgFADAAAFIgQAAQAAgMAKgHQAJgGANAAQANAAAJAGQALAHAAAOQAAAYghAAQgRAAAAAKIAAAHIAyAAIAAAPg");
	this.shape_4.setTransform(122.075,44.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#584658").s().p("AgIAqIAAgWQAAgXAgAAQASAAAAgLQAAgNgSAAQgQAAgCALIgOAAQABgMAIgHQAJgGANAAQAOAAAJAGQAMAHAAAOQgBAYghAAQgRAAgBAKIAAAHIA0AAIAAAPgAg4AqIAAgNIAMAAIAAg3IgMAAIAAgOIAcAAIAABFIALAAIAAANg");
	this.shape_5.setTransform(73.9,16.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#584658").s().p("AAFApIAAgNIANAAIAAg2IgNAAIAAgOIAcAAIAABEIAMAAIAAANgAgrApIAAgNIAMAAIAAg2IgNAAIAAgOIAdAAIAABEIALAAIAAANg");
	this.shape_6.setTransform(46.025,25.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#584658").s().p("AgGAGIAAgLQAAglAdAAQAeAAAAAlIAAALQAAAlgeAAQgdAAAAglgAAJgFIAAALQAAAWAOAAQAPAAAAgWIAAgLQAAgWgPgBQgOAAAAAXgAg0ApIAAgNIANAAIAAg2IgNAAIAAgOIAcAAIAABEIALAAIAAANg");
	this.shape_7.setTransform(26.275,44.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#584658").s().p("AgWAlQgLgGAAgNIAQAAQAAAFAGAEQAFACAGAAQAIAAAFgDQAGgEAAgHIAAgMQgGAJgNAAQgNAAgJgGQgLgGAAgOQAAgNALgIQAKgHAMAAQAOAAAJAHQALAIAAANIAAAeQAAANgKAHQgJAHgOAAQgOAAgJgGgAgMgYQgGADAAAHQAAAGAGAEQAFAEAHAAQAIAAAFgEQAGgEAAgGQAAgOgTAAQgHAAgFAEg");
	this.shape_8.setTransform(16.475,73.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#584658").s().p("AAAArQgOAAgKgGQgLgHAAgOQABgMAMgEQgKgGAAgLQAAgMAKgGQAJgHANAAQAOAAAKAHQAKAGAAAMQAAAMgLAEQANAEAAANQAAAOgLAHQgKAGgNAAIgCAAgAgSARQAAAFAFADQAFAEAIAAQAJAAAFgEQAFgDAAgFQAAgMgTAAQgSAAAAAMgAgMgZQgFADABAFQAAALAQAAQARAAAAgLQABgFgFgEQgFgDgIAAQgHAAgFAEg");
	this.shape_9.setTransform(24.125,100.0768);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#584658").s().p("AgXApIAhhCIgoAAIAAgPIA8AAIABAIIgkBJg");
	this.shape_10.setTransform(44.575,121.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#584658").s().p("AgWAkQgLgIAAgNIAAgeQAAgNAKgHQAKgHANAAQAOAAAJAGQAKAGAAANIgPAAQAAgLgSAAQgHAAgFADQgGAEAAAHIAAAMQAGgJAMAAQAOAAAJAGQALAGAAAOQAAANgLAIQgJAHgOAAQgNAAgJgHgAgMAFQgGAEAAAGQABAOARAAQAIAAAFgEQAGgDAAgHQAAgGgGgEQgFgEgIAAQgHAAgFAEg");
	this.shape_11.setTransform(73.175,129.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#584658").s().p("AggAQIAPAAQAAALASAAQAGAAAFgDQAGgEAAgGQAAgMgSAAIgeAAIAAgqIA6AAIAAAOIgrAAIAAAPIAPAAQAOgBAJAHQAKAFAAAOQAAANgKAHQgJAIgNAAQghAAAAgag");
	this.shape_12.setTransform(101.975,121.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#584658").s().p("AAKApIAAgQIgrAAIgBgPIAkgyIAYAAIAAAzIAJAAIAAAOIgJAAIAAAQgAgRALIAbAAIAAgmg");
	this.shape_13.setTransform(121.625,101.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#584658").s().p("AgWAlQgLgHAAgNIAQAAQAAAGAGADQAGADAFAAQAHAAAFgDQAGgEAAgGQAAgLgRAAIgMAAIAAgLIALAAQARAAAAgKQAAgLgRAAQgQAAAAAKIgQAAQAAgMALgHQAJgFAMAAQANAAAJAGQAKAHAAAMQAAANgLADQAGABAEAFQADAFAAAFQAAAOgLAHQgJAFgOAAQgNAAgJgFg");
	this.shape_14.setTransform(130.075,73.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#584658").s().p("AgTApIAAgNIANAAIAAg2IgNAAIAAgOIAbAAIAABEIAMAAIAAANg");
	this.shape_15.setTransform(102.6,24.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#584658","#3C303B"],[0,1],-73.1,0,73.2,0).s().p("AkcKiQiDg3hlhlQhmhmg3iDQg6iIAAiVQAAiUA6iHQA3iEBmhlQBlhlCDg4QCIg5CUgBQCVABCIA5QCDA4BlBlQBmBlA3CEQA6CHAACUQAACVg6CIQg3CDhmBmQhlBliDA3QiIA6iVAAQiUAAiIg6gAnbncQjGDGAAEWQAAEXDGDFQDFDGEWgBQEXABDFjGQDGjFAAkXQAAkWjGjGQjFjFkXAAQkWAAjFDFg");
	this.shape_16.setTransform(73.175,73.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F1EED4").s().p("AkNJ/Qh8g1hghfQhhhhg1h9Qg2iAAAiNQAAiMA2iBQA1h8BhhgQDMjMEdAAQEfAADMDMQBfBgA1B8QA3CBAACMQAAEfjLDMQhgBfh9A1QiBA3iNAAQiMAAiBg3g");
	this.shape_17.setTransform(73.15,73.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(168));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.4,146.3);


(lib.ClockEnd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Circle
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#584658","#3C303B"],[0,1],-4,0,4,0).s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape.setTransform(74.9,72.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Hours
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#584658","#3C303B"],[0,1],0.3,2,-0.4,-0.9).s().p("AiWAjIEmhNIAHAdIkrA4g");
	this.shape_1.setTransform(74.4,73.05,1,1,13.2657,0,0,14.6,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Main
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#584658","#3C303B"],[0,1],-2,0.2,0.9,-0.3).s().p("Ag0jhIAIgCIBhHBIgdAGg");
	this.shape_2.setTransform(74.5,70.8,1,1,12.4037,0,0,3.3,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Seconds
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE745F").s().p("AhBDgQgEgBgBgDQgCgEABgDIB/m0IARAFIgBAAIh+G0QgBADgDACIgEABIgDAAg");
	this.shape_3.setTransform(75.65,73,0.9999,0.9999,164.2499,0,0,6.1,-22.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#584658").s().p("AggAqIAAgWQAAgXAgAAQASAAAAgLQAAgNgSAAQgHAAgEADQgFADAAAFIgQAAQAAgMAKgHQAJgGANAAQANAAAJAGQALAHAAAOQAAAYghAAQgRAAAAAKIAAAHIAyAAIAAAPg");
	this.shape_4.setTransform(122.075,44.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#584658").s().p("AgIAqIAAgWQAAgXAgAAQASAAAAgLQAAgNgSAAQgQAAgCALIgOAAQABgMAIgHQAJgGANAAQAOAAAJAGQAMAHAAAOQgBAYghAAQgRAAgBAKIAAAHIA0AAIAAAPgAg4AqIAAgNIAMAAIAAg3IgMAAIAAgOIAcAAIAABFIALAAIAAANg");
	this.shape_5.setTransform(73.9,16.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#584658").s().p("AAFApIAAgNIANAAIAAg2IgNAAIAAgOIAcAAIAABEIAMAAIAAANgAgrApIAAgNIAMAAIAAg2IgNAAIAAgOIAdAAIAABEIALAAIAAANg");
	this.shape_6.setTransform(46.025,25.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#584658").s().p("AgGAGIAAgLQAAglAdAAQAeAAAAAlIAAALQAAAlgeAAQgdAAAAglgAAJgFIAAALQAAAWAOAAQAPAAAAgWIAAgLQAAgWgPgBQgOAAAAAXgAg0ApIAAgNIANAAIAAg2IgNAAIAAgOIAcAAIAABEIALAAIAAANg");
	this.shape_7.setTransform(26.275,44.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#584658").s().p("AgWAlQgLgGAAgNIAQAAQAAAFAGAEQAFACAGAAQAIAAAFgDQAGgEAAgHIAAgMQgGAJgNAAQgNAAgJgGQgLgGAAgOQAAgNALgIQAKgHAMAAQAOAAAJAHQALAIAAANIAAAeQAAANgKAHQgJAHgOAAQgOAAgJgGgAgMgYQgGADAAAHQAAAGAGAEQAFAEAHAAQAIAAAFgEQAGgEAAgGQAAgOgTAAQgHAAgFAEg");
	this.shape_8.setTransform(16.475,73.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#584658").s().p("AAAArQgOAAgKgGQgLgHAAgOQABgMAMgEQgKgGAAgLQAAgMAKgGQAJgHANAAQAOAAAKAHQAKAGAAAMQAAAMgLAEQANAEAAANQAAAOgLAHQgKAGgNAAIgCAAgAgSARQAAAFAFADQAFAEAIAAQAJAAAFgEQAFgDAAgFQAAgMgTAAQgSAAAAAMgAgMgZQgFADABAFQAAALAQAAQARAAAAgLQABgFgFgEQgFgDgIAAQgHAAgFAEg");
	this.shape_9.setTransform(24.125,100.0768);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#584658").s().p("AgXApIAhhCIgoAAIAAgPIA8AAIABAIIgkBJg");
	this.shape_10.setTransform(44.575,121.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#584658").s().p("AgWAkQgLgIAAgNIAAgeQAAgNAKgHQAKgHANAAQAOAAAJAGQAKAGAAANIgPAAQAAgLgSAAQgHAAgFADQgGAEAAAHIAAAMQAGgJAMAAQAOAAAJAGQALAGAAAOQAAANgLAIQgJAHgOAAQgNAAgJgHgAgMAFQgGAEAAAGQABAOARAAQAIAAAFgEQAGgDAAgHQAAgGgGgEQgFgEgIAAQgHAAgFAEg");
	this.shape_11.setTransform(73.175,129.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#584658").s().p("AggAQIAPAAQAAALASAAQAGAAAFgDQAGgEAAgGQAAgMgSAAIgeAAIAAgqIA6AAIAAAOIgrAAIAAAPIAPAAQAOgBAJAHQAKAFAAAOQAAANgKAHQgJAIgNAAQghAAAAgag");
	this.shape_12.setTransform(101.975,121.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#584658").s().p("AAKApIAAgQIgrAAIgBgPIAkgyIAYAAIAAAzIAJAAIAAAOIgJAAIAAAQgAgRALIAbAAIAAgmg");
	this.shape_13.setTransform(121.625,101.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#584658").s().p("AgWAlQgLgHAAgNIAQAAQAAAGAGADQAGADAFAAQAHAAAFgDQAGgEAAgGQAAgLgRAAIgMAAIAAgLIALAAQARAAAAgKQAAgLgRAAQgQAAAAAKIgQAAQAAgMALgHQAJgFAMAAQANAAAJAGQAKAHAAAMQAAANgLADQAGABAEAFQADAFAAAFQAAAOgLAHQgJAFgOAAQgNAAgJgFg");
	this.shape_14.setTransform(130.075,73.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#584658").s().p("AgTApIAAgNIANAAIAAg2IgNAAIAAgOIAbAAIAABEIAMAAIAAANg");
	this.shape_15.setTransform(102.6,24.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#584658","#3C303B"],[0,1],-73.1,0,73.2,0).s().p("AkcKiQiDg3hlhlQhmhmg3iDQg6iIAAiVQAAiUA6iHQA3iEBmhlQBlhlCDg4QCIg5CUgBQCVABCIA5QCDA4BlBlQBmBlA3CEQA6CHAACUQAACVg6CIQg3CDhmBmQhlBliDA3QiIA6iVAAQiUAAiIg6gAnbncQjGDGAAEWQAAEXDGDFQDFDGEWgBQEXABDFjGQDGjFAAkXQAAkWjGjGQjFjFkXAAQkWAAjFDFg");
	this.shape_16.setTransform(73.175,73.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F1EED4").s().p("AkNJ/Qh8g1hghfQhhhhg1h9Qg2iAAAiNQAAiMA2iBQA1h8BhhgQDMjMEdAAQEfAADMDMQBfBgA1B8QA3CBAACMQAAEfjLDMQhgBfh9A1QiBA3iNAAQiMAAiBg3g");
	this.shape_17.setTransform(73.15,73.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClockEnd, new cjs.Rectangle(0,0,146.4,146.3), null);


(lib.Clock = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#584658","#3C303B"],[0,1],-4,0,4,0).s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPAAQAQAAANAMQALAMAAAPQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape.setTransform(75.15,73.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#584658","#3C303B"],[0,1],-2,0.2,0.9,-0.3).s().p("Ag0jhIAIgCIBhHBIgdAGg");
	this.shape_1.setTransform(72.1,51.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#584658").s().p("AggAqIAAgWQAAgXAgAAQASAAAAgLQAAgNgSAAQgHAAgEADQgFADAAAFIgQAAQAAgMAKgHQAJgGANAAQANAAAJAGQALAHAAAOQAAAYghAAQgRAAAAAKIAAAHIAyAAIAAAPg");
	this.shape_2.setTransform(122.075,44.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#584658").s().p("AgIAqIAAgWQAAgXAgAAQASAAAAgLQAAgNgSAAQgQAAgCALIgOAAQABgMAIgHQAJgGANAAQAOAAAJAGQAMAHAAAOQgBAYghAAQgRAAgBAKIAAAHIA0AAIAAAPgAg4AqIAAgNIAMAAIAAg3IgMAAIAAgOIAcAAIAABFIALAAIAAANg");
	this.shape_3.setTransform(73.15,16.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#584658").s().p("AAFApIAAgNIANAAIAAg2IgNAAIAAgOIAcAAIAABEIAMAAIAAANgAgrApIAAgNIAMAAIAAg2IgNAAIAAgOIAdAAIAABEIALAAIAAANg");
	this.shape_4.setTransform(46.025,25.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#584658").s().p("AgGAGIAAgLQAAglAdAAQAeAAAAAlIAAALQAAAlgeAAQgdAAAAglgAAJgFIAAALQAAAWAOAAQAPAAAAgWIAAgLQAAgWgPgBQgOAAAAAXgAg0ApIAAgNIANAAIAAg2IgNAAIAAgOIAcAAIAABEIALAAIAAANg");
	this.shape_5.setTransform(26.275,44.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#584658").s().p("AgWAlQgLgGAAgNIAQAAQAAAFAGAEQAFACAGAAQAIAAAFgDQAGgEAAgHIAAgMQgGAJgNAAQgNAAgJgGQgLgGAAgOQAAgNALgIQAKgHAMAAQAOAAAJAHQALAIAAANIAAAeQAAANgKAHQgJAHgOAAQgOAAgJgGgAgMgYQgGADAAAHQAAAGAGAEQAFAEAHAAQAIAAAFgEQAGgEAAgGQAAgOgTAAQgHAAgFAEg");
	this.shape_6.setTransform(16.475,73.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#584658").s().p("AAAArQgOAAgKgGQgLgHAAgOQABgMAMgEQgKgGAAgLQAAgMAKgGQAJgHANAAQAOAAAKAHQAKAGAAAMQAAAMgLAEQANAEAAANQAAAOgLAHQgKAGgNAAIgCAAgAgSARQAAAFAFADQAFAEAIAAQAJAAAFgEQAFgDAAgFQAAgMgTAAQgSAAAAAMgAgMgZQgFADABAFQAAALAQAAQARAAAAgLQABgFgFgEQgFgDgIAAQgHAAgFAEg");
	this.shape_7.setTransform(24.125,100.0768);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#584658").s().p("AgXApIAhhCIgoAAIAAgPIA8AAIABAIIgkBJg");
	this.shape_8.setTransform(44.575,121.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#584658").s().p("AgWAkQgLgIAAgNIAAgeQAAgNAKgHQAKgHANAAQAOAAAJAGQAKAGAAANIgPAAQAAgLgSAAQgHAAgFADQgGAEAAAHIAAAMQAGgJAMAAQAOAAAJAGQALAGAAAOQAAANgLAIQgJAHgOAAQgNAAgJgHgAgMAFQgGAEAAAGQABAOARAAQAIAAAFgEQAGgDAAgHQAAgGgGgEQgFgEgIAAQgHAAgFAEg");
	this.shape_9.setTransform(73.175,129.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#584658").s().p("AggAQIAPAAQAAALASAAQAGAAAFgDQAGgEAAgGQAAgMgSAAIgeAAIAAgqIA6AAIAAAOIgrAAIAAAPIAPAAQAOgBAJAHQAKAFAAAOQAAANgKAHQgJAIgNAAQghAAAAgag");
	this.shape_10.setTransform(101.975,121.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#584658").s().p("AAKApIAAgQIgrAAIgBgPIAkgyIAYAAIAAAzIAJAAIAAAOIgJAAIAAAQgAgRALIAbAAIAAgmg");
	this.shape_11.setTransform(121.625,101.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#584658").s().p("AgWAlQgLgHAAgNIAQAAQAAAGAGADQAGADAFAAQAHAAAFgDQAGgEAAgGQAAgLgRAAIgMAAIAAgLIALAAQARAAAAgKQAAgLgRAAQgQAAAAAKIgQAAQAAgMALgHQAJgFAMAAQANAAAJAGQAKAHAAAMQAAANgLADQAGABAEAFQADAFAAAFQAAAOgLAHQgJAFgOAAQgNAAgJgFg");
	this.shape_12.setTransform(130.075,73.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#584658").s().p("AgTApIAAgNIANAAIAAg2IgNAAIAAgOIAbAAIAABEIAMAAIAAANg");
	this.shape_13.setTransform(102.6,24.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DE745F").s().p("AhBDgQgEgBgBgDQgCgEABgDIB/m0IARAFIgBAAIh+G0QgBADgDACIgEABIgDAAg");
	this.shape_14.setTransform(67.6929,98.72);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#584658","#3C303B"],[0,1],-73.1,0,73.2,0).s().p("AkcKiQiDg3hlhlQhmhmg3iDQg6iIAAiVQAAiUA6iHQA3iEBmhlQBlhlCDg4QCIg5CUgBQCVABCIA5QCDA4BlBlQBmBlA3CEQA6CHAACUQAACVg6CIQg3CDhmBmQhlBliDA3QiIA6iVAAQiUAAiIg6gAnbncQjGDGAAEWQAAEXDGDFQDFDGEWgBQEXABDFjGQDGjFAAkXQAAkWjGjGQjFjFkXAAQkWAAjFDFg");
	this.shape_15.setTransform(73.175,73.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#584658","#3C303B"],[0,1],0.3,2,-0.4,-0.9).s().p("AiWAjIEmhNIAHAdIkrA4g");
	this.shape_16.setTransform(60.675,75.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F1EED4").s().p("AkNJ/Qh8g1hghfQhhhhg1h9Qg2iAAAiNQAAiMA2iBQA1h8BhhgQDMjMEdAAQEfAADMDMQBfBgA1B8QA3CBAACMQAAEfjLDMQhgBfh9A1QiBA3iNAAQiMAAiBg3g");
	this.shape_17.setTransform(73.15,73.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Clock, new cjs.Rectangle(0,0,146.4,146.3), null);


(lib.Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F3F3").s().p("AicGIQhGgDg1gOQgjgJgLgSQgHgMAAgZQgDh4AHhBQADgZAGgnIAKg+QAaivgRirQgCgWAFgKQADgIAIgDQAJgEAGAEQAJAFABAUQAJCdgIBkQgFBGgVCLQgPB9AKBUQACAPAFAFQAGAHASADQBgAPC7gHQDCgIBaAMQAVACAFAMQACAGgEAHQgEAHgHACQgHADgUgBQhJgGhaAAQg3ABhrAEQhAACgmAAIgWAAg");
	this.shape.setTransform(658.1133,583.2125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAwQgIAAAAgIIAAhPQAAgEACgCQADgCADAAIBbAAQAEAAACACQACADAAADIAABPQAAAIgIAAg");
	this.shape_1.setTransform(630.15,545.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D9D9").s().p("AhaBlQgDAAgEgDQgDgDAAgEIAAi1QAAgEADgDQAEgDADAAIC0AAQAFAAACADQADADAAAEIAAC1QAAAEgDADQgCADgFAAg");
	this.shape_2.setTransform(630.15,545.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99B44B").s().p("AAhAzQgmABgQgDQgXgEgfgiQgWgYgJgSQAJgHAygKQA3gLATAIQAWAJAbAkQAcAjADAaQghgEgpAAg");
	this.shape_3.setTransform(1377.325,574.923);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99B44B").s().p("AhJBAQgMhEAHgcQAJghAwgjQA3grALgPQAWAXANA2QARBAgQAzQgRA2g3AkQgvAfgyAEQAaglgLg6g");
	this.shape_4.setTransform(1375.8188,556.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E5346").s().p("AhSC5QAHhXAFgqQAJg7APgtQAPgwAaghQAggrAzgMIAFAWQgbAGgTAQQgZAUgLAeQgGAVgEAqQgEA0ALA0QAGAjAZBJg");
	this.shape_5.setTransform(1362.225,589.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99B44B").s().p("AAlBJQhCAIgcgPQgmgWgag6IgSg2IBJgHQBNgFAaAMQAdANAeAsQAcApAQAvQg0gJgzAFg");
	this.shape_6.setTransform(1334.825,573.8742);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#99B44B").s().p("AAfBgQg1gSg4g1Qg7g3gegNQAkgfAogPQAmgPAeAEQByAOBNClQgrANgXAFQgUAFgRAAQgTAAgPgGg");
	this.shape_7.setTransform(1339.925,552.4166);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#99B44B").s().p("AhYA1QADgCAXgsQATgnAggNQAhgPAkADQATACAMAEQgLAWgPAXQgfAugbAKQgZAIgbAAQgUAAgVgFg");
	this.shape_8.setTransform(1339.95,586.8484);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#99B44B").s().p("AhGBSQgRgzAIgnQAHgnAjgvQAXgdAngpIAiBEQAVApACAeQAEAxgpA7QgkA1gtAdIgihTg");
	this.shape_9.setTransform(1360.074,544);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E5346").s().p("Ag5EFQASg2AGgcQAIgngEgoQgLhfgCgjQgEg1AGgiQAGglAVgiQAOgbAngtIASAOQgkAqgQAaQgRAfgGAiQgOBNAiCHQAPA5AGBpg");
	this.shape_10.setTransform(1353.15,581.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7398CA").s().p("AiMC7QgjgfgTgpQgTgqAAgwIAAjTIGrAAIAADTQABAwgVAqQgTApgiAfg");
	this.shape_11.setTransform(1356.4,626.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("AgtN+QgUgQAAgXIAA6uQAAgXAUgQQATgQAaAAQAcAAASAQQAUAQAAAXIAAauQAAAXgUAQQgSARgcAAQgaAAgTgRg");
	this.shape_12.setTransform(1564.7,891.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E6E6").s().p("AgtN/QgUgQAAgXIAA6uQAAgXAUgQQATgRAaAAQAcAAASARQAUAQAAAXIAAauQAAAXgUAQQgSAQgcAAQgaAAgTgQg");
	this.shape_13.setTransform(1564.7,582.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E6E6").s().p("AscDMIAAmXIY5AAIAAGXg");
	this.shape_14.setTransform(1708.325,387.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#606060").s().p("A8OaeMAAAg07MA4dAAAMAAAA07g");
	this.shape_15.setTransform(1708.325,915.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#606060").s().p("EgcOAiDMAAAhDcQAAgRAMgMQAMgMASAAMA3JAAAQASAAAMAMQAMAMAAARMAAABDcg");
	this.shape_16.setTransform(1708.325,514.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A7AEBB").s().p("AkLIjIGwxrIBnAoImqRpg");
	this.shape_17.setTransform(40.45,279.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EBC249").s().p("AkUJtIFv0DIC6AtIltUAg");
	this.shape_18.setTransform(64.75,272.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DD7737").s().p("AhKIGIgKwKICRgBIAYQLg");
	this.shape_19.setTransform(96.075,286.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#95AA67").s().p("Ag9KhIga0+ICHgDIAoVBg");
	this.shape_20.setTransform(110.35,271.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CDD7C5").s().p("AhsIdIgbw5IDXANIA4Qsg");
	this.shape_21.setTransform(129.95,284.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#95AA67").s().p("AiEoLIBsgHICdQdIhsAHg");
	this.shape_22.setTransform(169.175,285.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#91A1CE").s().p("Ah4o3ICrgEIBGRyIirAFg");
	this.shape_23.setTransform(149.5,281.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#60676B").s().p("Ah9CeIgsk7IFTAAIgsE7g");
	this.shape_24.setTransform(449.225,323.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6B9744").s().p("AglBTIANgjQAdhRAhgxQgFAVgOAoIgkBog");
	this.shape_25.setTransform(466.3,299.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6B9744").s().p("AAsB0IgqhQIgfhBQgcg8gLgaQAKAMAWAhIAjA1QAOAYAgA9QAMAXAMAZg");
	this.shape_26.setTransform(429.8,296.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6B9744").s().p("AggC7IAWieQADgYANhFQANhHAOgzQgBARgFAxIgKBNQgGAxgIBMIgKBpg");
	this.shape_27.setTransform(455.725,289.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6B9744").s().p("AgaCKIAaipQAQhNALgdQgBAYgIBCIgJBFIgRB0g");
	this.shape_28.setTransform(459.575,294.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6B9744").s().p("AAWCJIgehzQgFgSgNgyQgPg9gEgdQAGAMAQAkQAOAiAIAXQALAkAQA2IAVBOg");
	this.shape_29.setTransform(435.8,294.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6B9744").s().p("AgkB3IAmiRQAWhCANgaQgEAagMA0IgPA7IgYBkg");
	this.shape_30.setTransform(465.125,296.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6B9744").s().p("AAlCgIhDjXQgVhDgJglQAJAOATArQASAnAKAbQAMAgAZBKIAcBag");
	this.shape_31.setTransform(431.625,292.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6B9744").s().p("AAmDdIgVhdIgujMQgYhkgIgsQAMAYASA2QAQAuANAtQAPAzAWBiIAbB7g");
	this.shape_32.setTransform(438.875,285.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6B9744").s().p("AAiDiIgWhgQgKgugLgwIgZhxQgVhlgIguQANAdASAzQAWA/AIAeQARA8AVBaQANA5APBGg");
	this.shape_33.setTransform(435.575,285.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6B9744").s().p("AgJD4IgEjRQgBg2ABhGQABhaAFhIQAEAWAEBCQAFA2ACAwQAEBNAABaIACCKg");
	this.shape_34.setTransform(448.9625,283.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6B9744").s().p("AAFC7IgNieIgHhdQgFhEgBg2QAFAVAHAtQAJA0ABAZQAGApAHBUIAIBpg");
	this.shape_35.setTransform(445.825,289.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6B9744").s().p("AARDwIgZjLQgGgogJhPQgMhrgEgxQAJAdAMA3QANA6AGApQAMBFALBdQAIA5AIBMg");
	this.shape_36.setTransform(442.775,284.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6B9744").s().p("AggD2IALiFQANh+AGgtIAQhkQAMg+AHgZQgBA3gIBpQgEA6gGBAIgUDRg");
	this.shape_37.setTransform(453.375,283.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6B9744").s().p("AghDLIAOhwQAMhRAJg5QAHgqAJgpQAKgxAGgXQgFA1gLBPIgkERg");
	this.shape_38.setTransform(458.9,287.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6B9744").s().p("AhFDgQAHgiAXhZQAahjARg2QAMgnAUg1QAXg7ALgUQgIAngbBrIgeBvIgwC+g");
	this.shape_39.setTransform(465.175,285.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D8E3E0").s().p("Ah7BvIAJjdIDmAAIAIDdg");
	this.shape_40.setTransform(390.075,295.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4BA695").s().p("AAJG5QgdABgVgVQgVgWAAgeIAUotQABghATgbQATgbAdgNIAAh1QgIAAgFgEQgFgGAAgIQAAgGAFgGQAGgGAHAAIAlAAIgYFUQgHB7gBBiQgBDdAXBkg");
	this.shape_41.setTransform(383.125,294.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#63AE9D").s().p("AgrASQgHAAgFgFQgGgGAAgHQAAgGAFgGQAGgFAHAAIBXAAQAHAAAGAFQAFAGAAAGQAAAIgFAEQgGAGgHAAg");
	this.shape_42.setTransform(390.075,252.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#63AE9D").s().p("AgrB5IAAjyIBXAAIAADyg");
	this.shape_43.setTransform(390.075,264.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#63AE9D").s().p("Ag8FxQgeABgVgVQgVgWAAgeIAUotQABghAUgbQASgbAegNQAKgEAPgDQAIgCAKAAQAVABAXAIQATAJAPAOQAgAgACAtIAVItQAAAegVAWQgWAVgdgBg");
	this.shape_44.setTransform(390.1,301.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C87B3B").s().p("AgeAaIAAgzIA9AAIAAAzg");
	this.shape_45.setTransform(390.075,247.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CFA28D").s().p("AlLAZQgeAAgZgOQgZgMgMgXINPAAQgIAOgNAKQgdAZgqAAg");
	this.shape_46.setTransform(230.125,336.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CFA28D").s().p("Ag7A4QgKgGgCgLQgCgKAIgJIBEhQIBFABQAAAHgFAFIhTBiQgHAIgNACIgFAAQgJAAgJgFg");
	this.shape_47.setTransform(254.129,325.89);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CFA28D").s().p("Ag7A4QgKgGgCgLQgCgKAHgJIBFhQIBFAAQgBAHgFAGIhTBiQgHAIgMACIgFAAQgKAAgIgFg");
	this.shape_48.setTransform(239.9278,325.89);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CFA28D").s().p("Ag7A4QgKgGgCgLQgCgKAHgJIBFhQIBFAAQAAAHgFAGIhUBiQgHAIgMACIgFAAQgKAAgIgFg");
	this.shape_49.setTransform(223.7278,325.89);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CFA28D").s().p("Ag7A4QgKgGgCgLQgCgKAIgJIBEhQIBFAAQgBAIgEAFIhTBiQgIAIgMACIgFAAQgKAAgIgFg");
	this.shape_50.setTransform(207.629,325.89);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#ECBDA1").s().p("AlLBhQgegBgZgOQgZgNgMgXQgJgRAAgRQAAgrAmggQAmggA0gBIJhAAIAHABQAzADAjAeQAjAgAAAqQAAARgJARQgIAPgNALQgdAZgqAAg");
	this.shape_51.setTransform(230.125,329.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C87B3B").s().p("AgeAaIAAgzIA9AAIAAAzg");
	this.shape_52.setTransform(358.725,247.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D8E3E0").s().p("Ah7BvIAIjdIDmAAIAJDdg");
	this.shape_53.setTransform(358.725,295.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2B677B").s().p("AAJG5QgdABgVgVQgVgVAAgfIAVotQABghATgbQASgbAdgNIAAh1QgIAAgFgEQgFgGAAgIQAAgHAFgFQAFgGAIAAIAlAAIgMCSIgIB0IgEBOQgHCFAABYQgDDZAYBog");
	this.shape_54.setTransform(351.725,294.55);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#265A76").s().p("AgrB5IAAjyIBXAAIAADyg");
	this.shape_55.setTransform(358.7,264.45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#265A76").s().p("Ag8FxQgeAAgUgVQgWgVAAgeIAVotQABghATgcQASgaAegNQANgFANgCIARgBQAXAAAVAIQASAIAQAPQAhAfACAuIAUItQAAAegVAVQgVAVgeAAg");
	this.shape_56.setTransform(358.7,301.775);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#265A76").s().p("AgrASQgIAAgEgFQgGgGAAgHQAAgGAGgGQAEgFAIAAIBXAAQAHAAAGAFQAFAGAAAGQAAAIgGAEQgEAGgIAAg");
	this.shape_57.setTransform(358.7,252.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#243040").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_58.setTransform(328.825,301.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#243040").s().p("AgEAFQgCgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgCAAgCgCg");
	this.shape_59.setTransform(325.5,300.45);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#243040").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_60.setTransform(322.075,301.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B2BBBC").s().p("AgEBfQgEgEAAgFIgGirQAAgFAEgDQADgEAFAAQAEAAAEADQADAEABAFIAFCqQAAAFgDAEQgEAEgFAAIgBAAQgDAAgDgDg");
	this.shape_61.setTransform(329.2281,327.5031);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B2BBBC").s().p("AgCBiQgFAAgDgEQgEgDAAgGIAGiqQAAgFAEgEQADgDAEAAQAFAAAEAEQADADAAAFIgGCrQAAAFgDAEQgDADgEAAIgBAAg");
	this.shape_62.setTransform(322.3281,327.5031);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E06362").s().p("AglAjQgMAAgKgJQgKgJAAgOQAAgMAKgKQAKgJAMAAQAlgNAlANQAOAAAJAJQAKAKAAAMQAAAOgKAJQgJAJgOAAg");
	this.shape_63.setTransform(325.5,302.5125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E06362").s().p("AgtASQgIAAgFgFQgGgGABgHQgBgGAGgGQAFgFAIAAIBcAAQAHAAAFAFQAGAGAAAGQAAAHgGAGQgFAFgHAAg");
	this.shape_64.setTransform(325.55,309.375);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B2BBBC").s().p("AgxALIAIgVIBTAAIAIAVg");
	this.shape_65.setTransform(325.5,311.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3C4344").s().p("AgmBKQgLAAgIgIQgIgIABgLIAHh4QAWAYAjAAQAkAAAWgYIAHB4QABALgIAIQgIAIgLAAg");
	this.shape_66.setTransform(325.575,331.675);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DBE9EC").s().p("AgmB8QgLAAgIgIQgIgIABgLIAMjNQAAgGAFgEQAEgFAGAAIBLAAQAGAAAEAFQAFAEAAAGIAMDNQABALgIAIQgIAIgLAAg");
	this.shape_67.setTransform(325.575,326.575);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#BCC7CA").s().p("AgwCMQgOAAgKgJQgKgJABgMIAPjoQAAgIAGgEQAFgFAIAAIBfAAQAIAAAFAFQAGAEAAAIIAPDoQABAMgKAJQgKAJgOAAg");
	this.shape_68.setTransform(325.5783,326.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#242E39").s().p("AguAPIAAgdIBdAAIAAAdg");
	this.shape_69.setTransform(325.575,306.25);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#243040").s().p("AgEAFQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgGAGAAQAHAAAAAGQAAAHgHAAQgBAAgDgCg");
	this.shape_70.setTransform(307.45,301.525);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#243040").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAAAgHg");
	this.shape_71.setTransform(304.125,300.45);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#243040").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_72.setTransform(300.725,301.525);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B2BBBC").s().p("AgFBfQgDgEAAgFIgGirQAAgFADgDQAEgEAFAAQAEAAAEADQADAEAAAFIAGCqQAAAGgEADQgDAEgFAAIgBAAQgDAAgEgDg");
	this.shape_73.setTransform(307.8719,327.5031);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B2BBBC").s().p("AgCBiQgFAAgEgEQgDgEAAgFIAGiqQAAgFADgEQAEgDAEAAQAFAAADAEQAEADAAAFIgGCrQAAAFgDAEQgEADgDAAIgBAAg");
	this.shape_74.setTransform(300.9719,327.5031);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6DA5BD").s().p("AgkAkQgOgBgJgIQgKgKAAgNQAAgNAKgKQAJgJAOAAQAkgNAlANQAOAAAJAJQAKAKAAANQAAANgKAKQgJAIgOABg");
	this.shape_75.setTransform(304.125,302.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6DA5BD").s().p("AguASQgHAAgFgFQgGgGAAgHQAAgGAGgGQAFgFAHAAIBdAAQAHAAAFAFQAFAGABAGQgBAHgFAGQgFAFgHAAg");
	this.shape_76.setTransform(304.2,309.375);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B2BBBC").s().p("AgxALIAIgVIBTAAIAIAVg");
	this.shape_77.setTransform(304.15,311.725);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C5D3D5").s().p("AgmBKQgLAAgIgIQgIgIABgLIAHh4QAWAYAjAAQAkAAAWgYIAHB4QABALgIAIQgIAIgLAAg");
	this.shape_78.setTransform(304.204,331.675);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DBE9EC").s().p("AgmB8QgMAAgHgIQgIgIABgLIAMjNQAAgGAFgEQAEgFAGAAIBKAAQAHAAAEAFQAFAEAAAGIAMDNQABALgIAIQgIAIgLAAg");
	this.shape_79.setTransform(304.204,326.575);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BCC7CA").s().p("AgxCMQgOAAgJgJQgKgJABgMIAOjoQABgIAGgEQAFgFAIAAIBeAAQAIAAAGAFQAGAFAAAHIAPDoQABAMgKAJQgKAJgOAAg");
	this.shape_80.setTransform(304.2283,326.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#242E39").s().p("AguAPIAAgdIBdAAIAAAdg");
	this.shape_81.setTransform(304.2,306.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C3B9A3").s().p("EgvdACGQgkiIAkiDMBe6AAAQAlCCglCJg");
	this.shape_82.setTransform(305.675,351.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CCCCCC").s().p("AB9BwQgIAAAAgIIAAgcIn3idQgDgBgBgDQgCgEABgCIAFgOQACgHAHABQLOB9AUALQAPAJAJAOQAHANAAAMIAAAfQAAAIgIAAg");
	this.shape_83.setTransform(1070.53,587.1868);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CCCCCC").s().p("AiADZQgJAAAAgHIAAmjQAAgIAJAAIEBAAQAJAAAAAIIAAGjQAAAHgJAAg");
	this.shape_84.setTransform(1096,623.05);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CCCCCC").s().p("Ai4gyIiYAAQgCgWABgOQADgbATgQQA0guB2ATQAsAGCMApQD1BHA3ASIgDC3g");
	this.shape_85.setTransform(1051.0929,619.9223);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8D8D8E").s().p("Ah1AgIAAg/IDrAAIAAA/g");
	this.shape_86.setTransform(1095.7,600.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A5A5A5").s().p("AgRARIAAggIAjAAIAAAgg");
	this.shape_87.setTransform(1027.175,616.25);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8D8D8E").s().p("Ag/ARIAAggIB/AAIAAAgg");
	this.shape_88.setTransform(1025.025,616.25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#5C5B5C").s().p("AgcB0QmIgFh0hvQgrgrgRgxIgGgXQAOAJALADQB6AkCgARQCOAQCZABQCagBCOgQQChgRB6gkQAQgEAIgGQgPBAgzAxQh0BvmGAFIgeAAIgdAAg");
	this.shape_89.setTransform(380.575,627.85);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BA5C39").s().p("AiEBXQg1gJgWgSIgFgFQABgMAFgIQAfgoA+gdQAVgJBZgfQAsgQAugCQAwgCArAOQASAGARAJQgPAigiAeQgZAUgoAZQhGAthSADIgQABQgeAAghgGg");
	this.shape_90.setTransform(360,611.8586);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BA5C39").s().p("AiEBXQg2gJgUgRIgGgGQAAgMAGgIQAfgoA+gdQAVgJBYgfQAtgQAugCQAwgCArAOQAWAIANAHQgPAigiAeQgYAUgpAaQhGAshSAEIgNAAQggAAgigGg");
	this.shape_91.setTransform(402.85,613.0257);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#9C4B2C").s().p("Ah7B0Qg1gJgVgRQgSgQgJgZQgKgbAMgRQAfgoA+gcQAVgKBZgeQAsgQAugCQAwgCArAOQAcAJATANQAbATgHAUQgOAmgkAgQgZAYgtAcQhGAshSAEIgNAAQggAAgjgGg");
	this.shape_92.setTransform(361.6459,614.8007);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9C4B2C").s().p("Ah7B0Qg1gJgVgRQgSgQgJgZQgKgbAMgRQAfgoA+gcQAUgJBZgfQAtgQAugCQAwgCArAOQAdAJASAOQAbASgHAUQgOAmgkAgQgZAYgtAcQhIAthQADIgOAAQgfAAgjgGg");
	this.shape_93.setTransform(404.4959,615.9507);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5C5B5C").s().p("AgugKQijg4jagaQAHgiAigZQAkgbAygCQDOAgDBBhQCkBSClCGQhEAIgqAJQiph+jDhCg");
	this.shape_94.setTransform(290.6,596.45);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B2B2B2").s().p("AoYANQg9gPgFgLQgGgPBMgLQBdgNCggIQCJgGCKAAIAJABQCMgBCGAHQChAGBdAOQBMALgGAPQgFALg9APQjYA2lBAAQlAAAjYg2g");
	this.shape_95.setTransform(380.6,617.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BD7467").s().p("AAZApQg3gMgJgBQgRgBg2AHIgzAGQgDgJAmgaQAkgZAggNQAigPAuABQArABAoAOQASAGAoAZQgHARgYAOQgTALgYAGQgFABgIAAQgSAAghgHg");
	this.shape_96.setTransform(163.939,600.8393);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#969C84").s().p("AkXB4IgrgMQidgsiGhUQgcgRgMgbQgLgbAFgcIA2AJQEmAsE3AAQE4AAEmgsIA1gJQAJAqgdAjQgKAMgRAMQiFBTicArIgrAMg");
	this.shape_97.setTransform(137.3162,634);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DD7737").s().p("AAiCWQhSgCh9gcQiOgig1gpQgjgcgKhCQgKhBAUgjIABgDQAqA9BQAsQBAAlBiAbQCCAmCVAQQCmARBbgXQgHAWgQALQgKAGgcANQg0AghkAEIirgDg");
	this.shape_98.setTransform(119.2944,616.85);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E5963B").s().p("AAfCkQhSgBh+gdQiOgig0goQgjgcgKhHQgIhDARgdQAIgFARgJIAfgRQAdATAsATIBjAqQB6A4BUAWQA7APBzAjQBqAbBxACQgGAagSAMQgLAHgfAQQg0AfhlAEIiqgDg");
	this.shape_99.setTransform(119.6361,615.425);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9F5049").s().p("AiwBoIhCgEQghhEgEgxQgEgwAYgmIAHAPIAOAyIB2ALIAyAjICJgFIDVgUQgKAPgXAmQgTAhgIAJIhTANQjIANhqAAIgHAAg");
	this.shape_100.setTransform(165.5709,618.8259);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B45948").s().p("Ak6CtQg+iAAqhJQAkg8CNhAQA6gaA+AEQBAAEAzAjIArAsQAhAiAgAJQATAGA9gSQAcgIAkAFQAlAFgaALQgYALgTAOIgXAQQgPAHgTASIggAjQgGAHggAuQgYAjgQAHQhtAMh4AIQhjAHg5AAQgoAAgUgDg");
	this.shape_101.setTransform(172.8102,611.5874);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7F9558").s().p("AAABiQhTgVghANIhSATIANgtIBCgdIBGgZIgzgVQgjgSgQgUQgRgUgRgpIAdgrQANAWAMAOQAOAPAdAWIgQg9IALgeIBhB0IA+AxQA8AvBJBFIgLA+Qhfg0hdgWg");
	this.shape_102.setTransform(66.125,596.65);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#619F4E").s().p("AgaBGIACAAIABAAQAGgBgOhFQgOhHAbgNIAIgDIADAAQATgCAQAVIABABQAEAFAEAIQgMgHgLABQgGABgGADQgWALAHA0QAEAcAKAwIgSAFQgFgHgEgLg");
	this.shape_103.setTransform(120.5717,593.0663);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#619F4E").s().p("AgmAOIAAgBQAQgZAQgEIACgBIAJABIAHADIAGADQANAKAIAQQgHgEgFgBQgFgCgEABQgKABgIAHQgRgHgVADg");
	this.shape_104.setTransform(141.525,599.3417);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#66A551").s().p("AhyBUIhBg+QgngjgSgUQgfgiAHgtQAHgtAjAOQAYAJAkAoQAiAlAUAEQAeAGAFgOQAEgPgXgfQgXgeACgWQADgUAagIQATgFAMAhQANAmANAFQAKAEgDgUIgKgwQgQhNAbgNQAigRAXAwQAWAugLAvQgJAmAQAFQANADAMgQIAHgzQAFgpAdABQAkAAADAXQACATgVAqQgXAvgEAPQgHAWAQADQAIABAJgQIASglQANgbALgMQAPgSARAFQAlAKAFA4QAGA4goAfQgiAbgFBeQgDAvAEAqIjiA0g");
	this.shape_105.setTransform(120.1005,611.714);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#96B64C").s().p("AgPAPIABABQgDgIgGgHIAHgHQAHgLAKgBQAKgBAHAJQAIAKgCANQgHgKgLABQgJACgIAKIgCADg");
	this.shape_106.setTransform(125.8961,586.145);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#96B64C").s().p("Ag0AEQABgPASgIQAWgKAPgCQAugFADAxQgLgYghADQgQADgUAIQgUAJAAAUQgHgRACgLg");
	this.shape_107.setTransform(113.0609,581.0773);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#96B64C").s().p("Ag9A+IgEAAIAFgJIABgJQACgOgFgbQgFgaABgLQADgTAYgGIAKgCQAhgDAfARQAhATAAAeQgLgUgdgLQgagLgaADIgKABQgdAHACAfQACATAGAqIgIgBg");
	this.shape_108.setTransform(139.0927,584.6958);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#9BBC51").s().p("AlbA4QgMg6ATgjQASgiAnANQALAEASATQAaAcAPALQARAOAKABQANABAOgTQAIgJgZgSQgigYgHgLQgFgIACgQQADgOAGgIQAPgUASAIQAKAEAaASQAJAEgFgKQgLgSgFgMQgZgzAigQQAtgUAXAOQAXAPgEAwQgEAtAWgFQASgEAVgdQARgXAQARQARARgPAdQgQAeAdADQAeADAJgfQADgJgIg6QgFgmAfgIQAvgKAlAcQAqAggeAwQgfAzAFAQQAEAPAigLQAXgHAcgQQAVgIAKAMQAIAJgVASQgYASAKAUQAGAPALACQAFACAQgDQAvgKgCAUQgCALgZAoQgaApgcAZQgZAWg/AVIg5AQg");
	this.shape_109.setTransform(124.3431,598.9118);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B2B2B2").s().p("AgdE/QgLgLAAgTIAApBQAAgpAoAAQApAAAAApIAAJBQAAATgLALQgMALgSAAQgRAAgMgLg");
	this.shape_110.setTransform(1153.025,741.825);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CEC2B5").s().p("Agfd0MAAAg7oIA/AAMAAAA7og");
	this.shape_111.setTransform(884.125,863.15);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CEC2B5").s().p("AgodTMAAAg6lIBRAAMAAAA6lg");
	this.shape_112.setTransform(1111.175,859.475);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CEC2B5").s().p("AgpdTMAAAg6lIBTAAMAAAA6lg");
	this.shape_113.setTransform(1461.2,859.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#CEC2B5").s().p("AgodTMAAAg6lIBRAAMAAAA6lg");
	this.shape_114.setTransform(1193.875,859.475);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E9E2D5").s().p("Egt5ADAIAAl/MBb0AAAIAAF/g");
	this.shape_115.setTransform(1171.15,1066.15);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C3B9A3").s().p("EgvdACGQgkiJAkiCMBe7AAAQAkCCgkCJg");
	this.shape_116.setTransform(1169.375,658.575);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B2B2B2").s().p("AkgApQgpAAAAgpQAAgoApAAIJBAAQATAAALALQALAMAAARQAAASgLALQgLAMgTAAg");
	this.shape_117.setTransform(1310.725,709.675);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B2B2B2").s().p("AkgApQgpAAAAgpQAAgoApAAIJBAAQATAAALAMQALALAAARQAAASgLAMQgLALgTAAg");
	this.shape_118.setTransform(1310.725,795.525);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B2B2B2").s().p("AgdE/QgLgMAAgRIAApCQAAgpAoAAQApAAAAApIAAJCQAAASgLALQgMALgSAAQgRAAgMgLg");
	this.shape_119.setTransform(1231.475,925.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CEC2B5").s().p("AxoApIAAhRMAjRAAAIAABRg");
	this.shape_120.setTransform(1310.725,853.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#CEC2B5").s().p("AxoApIAAhRMAjRAAAIAABRg");
	this.shape_121.setTransform(1310.725,760.325);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E4DEC8").s().p("EgtXAfVMAAAg+pMBavAAAMAAAA+pg");
	this.shape_122.setTransform(1174.625,846.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#858186").s().p("AtaNJQgXgXAAggIAA4jQAAggAXgXQAXgXAgAAIZHAAQAgAAAXAXQAXAXAAAgIAAB5QtLCInfJ0QilDWhoD7QhHCsgXB/QggAAgXgXg");
	this.shape_123.setTransform(443.9,879.85);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B2B2B2").s().p("AnnAtQgnAAgLgcQgDgJAAgIQAAgHADgJQAFgNANgHQANgIATAAIPPAAQAYAAAPANQAPAMAAATQAAAUgPAMQgPANgYAAg");
	this.shape_124.setTransform(444.35,770.875);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B2B2B2").s().p("AgdE/QgLgLAAgTIAApBQAAgpAoAAQApAAAAApIAAJBQAAATgLALQgMALgSAAQgRAAgMgLg");
	this.shape_125.setTransform(269.025,741.825);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B2B2B2").s().p("AkgApQgSAAgMgMQgMgLAAgSQAAgRAMgMQAMgLASAAIJBAAQApAAAAAoQAAApgpAAg");
	this.shape_126.setTransform(114.05,710.675);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B2B2B2").s().p("AkgApQgSAAgMgLQgMgMAAgSQAAgRAMgLQAMgMASAAIJBAAQApAAAAAoQAAApgpAAg");
	this.shape_127.setTransform(114.05,796.525);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B2B2B2").s().p("AgdE/QgLgMAAgRIAApCQAAgpAoAAQApAAAAApIAAJCQAAASgLALQgMAMgSgBQgRABgMgMg");
	this.shape_128.setTransform(193.325,926.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CEC2B5").s().p("AxoApIAAhSMAjRAAAIAABSg");
	this.shape_129.setTransform(114.05,854.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CEC2B5").s().p("AgodTMAAAg6lIBRAAMAAAA6lg");
	this.shape_130.setTransform(227.175,859.475);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CEC2B5").s().p("AxoApIAAhRMAjRAAAIAABRg");
	this.shape_131.setTransform(114.05,761.325);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#9E9D9D").s().p("A1ZAfIAAg9MAqzAAAIAAA9g");
	this.shape_132.setTransform(443.9,642.125);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CEC2B5").s().p("AgpdTMAAAg6lIBSAAMAAAA6lg");
	this.shape_133.setTransform(577.2,859.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CEC2B5").s().p("AgodTMAAAg6lIBRAAMAAAA6lg");
	this.shape_134.setTransform(309.875,859.475);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#B2B2B2").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghg");
	this.shape_135.setTransform(528.95,705.825);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B2B2B2").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAuAAAiAhQAhAhAAAuQAAAvghAhQgiAhguAAQguAAghghg");
	this.shape_136.setTransform(497.85,705.825);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B2B2B2").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAuAAAiAhQAhAhAAAuQAAAvghAhQgiAhguAAQguAAghghg");
	this.shape_137.setTransform(447.2,705.825);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#B2B2B2").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghg");
	this.shape_138.setTransform(416.1,705.825);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B2B2B2").s().p("AhsBtQgtgtAAhAQAAg+AtguQAugtA+AAQBAAAAtAtQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape_139.setTransform(362.975,705.825);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B2B2B2").s().p("A0TApIAAhSMAomAAAIAABSg");
	this.shape_140.setTransform(443.9,744.15);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D8DADA").s().p("A0TGBIAAsBMAomAAAIAAMBg");
	this.shape_141.setTransform(443.9,710.45);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#777379").s().p("AsjNgQggAAgXgXQgXgXAAggIAA4jQAAggAXgXQAXgXAgAAIZHAAQAgAAAXAXQAXAXAAAgIAAYjQAAAggXAXQgXAXggAAg");
	this.shape_142.setTransform(443.9,879.85);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D8DADA").s().p("A0TZ9MAAAgz5MAomAAAMAAAAz5g");
	this.shape_143.setTransform(443.9,842.675);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E9E2D5").s().p("EhFGADAIAAl/MCKNAAAIAAF/g");
	this.shape_144.setTransform(442.575,1066.15);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#C3B9A3").s().p("EhGTACGQg2iJA2iCMCMnAAAQA2CCg2CJg");
	this.shape_145.setTransform(452.7,658.575);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#B2B2B2").s().p("AkgApQgpAAAAgpQAAgoApAAIJBAAQATAAALALQALAMAAARQAAASgLALQgLAMgTAAg");
	this.shape_146.setTransform(771.725,710.675);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#B2B2B2").s().p("AkgApQgpAAAAgpQAAgoApAAIJBAAQATAAALAMQALALAAARQAAASgLAMQgLALgTAAg");
	this.shape_147.setTransform(771.725,796.525);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#B2B2B2").s().p("AgdE/QgLgMAAgRIAApCQAAgpAoAAQApAAAAApIAAJCQAAASgLALQgMAMgSgBQgRABgMgMg");
	this.shape_148.setTransform(692.475,926.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CEC2B5").s().p("AxoApIAAhSMAjRAAAIAABSg");
	this.shape_149.setTransform(771.725,854.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CEC2B5").s().p("AgodTMAAAg6lIBSAAMAAAA6lg");
	this.shape_150.setTransform(658.6,859.475);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CEC2B5").s().p("AxoApIAAhRMAjRAAAIAABRg");
	this.shape_151.setTransform(771.725,761.325);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E4DEC8").s().p("EhFGAfVMAAAg+pMCKNAAAMAAAA+pg");
	this.shape_152.setTransform(442.575,846.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FEFBF8").s().p("EiV6BUYMAAAiovMEr1AAAMAAACovg");
	this.shape_153.setTransform(960.5,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(0,0,1920,1085.3), null);


(lib.FireMovie1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,0,0,0.239)").s().p("AjHCVQhTg+AAhXQAAhWBTg9QBTg9B0gBQB1ABBTA9QBSA9ABBWQgBBXhSA+QhTA8h1ABQh0gBhTg8g");
	this.shape.setTransform(28.25,20.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FireMovie1, new cjs.Rectangle(0,0,56.5,41.9), null);


(lib.Clouds = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape.setTransform(1522.5211,36.526);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_1.setTransform(1537.7711,117.426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_2.setTransform(1684.7211,65.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_3.setTransform(1706.1211,151.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAKIgBgDQgKAEgLAAQg0AAgJgSQgFgNARgKQASgKAYAAQAkAAAJARQAbgRAqAAQAjAAAVANQASALAAAQQAAAQgTAMQgTANgaAAQhQAAgPgfg");
	this.shape_4.setTransform(1739.35,106.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhOAKQgJgSAdgQQAbgQAmAAQAjAAAUANQATAMAAAPQAAAQgTAMQgUANgZAAQhQAAgPgfg");
	this.shape_5.setTransform(1583.117,68.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_6.setTransform(1151.0211,36.526);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_7.setTransform(1166.2711,117.426);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_8.setTransform(1313.2211,65.176);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_9.setTransform(1334.6211,151.176);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAKIgBgDQgKAEgLAAQg0AAgJgSQgFgNARgKQASgKAYAAQAkAAAJARQAbgRAqAAQAjAAAVANQASALAAAQQAAAQgTAMQgTANgaAAQhQAAgPgfg");
	this.shape_10.setTransform(1367.85,106.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhOAKQgJgSAdgQQAbgQAmAAQAjAAAUANQATAMAAAPQAAAQgTAMQgUANgZAAQhQAAgPgfg");
	this.shape_11.setTransform(1211.617,68.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_12.setTransform(767.8711,36.526);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_13.setTransform(783.1211,117.426);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_14.setTransform(930.0711,65.176);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_15.setTransform(951.4711,151.176);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglAKIgBgDQgKAEgLAAQg0AAgJgSQgFgNARgKQASgKAYAAQAkAAAJARQAbgRAqAAQAjAAAVANQASALAAAQQAAAQgTAMQgTANgaAAQhQAAgPgfg");
	this.shape_16.setTransform(984.7,106.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhOAKQgJgSAdgQQAbgQAmAAQAjAAAUANQATAMAAAPQAAAQgTAMQgUANgZAAQhQAAgPgfg");
	this.shape_17.setTransform(828.467,68.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_18.setTransform(419.5711,36.526);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_19.setTransform(434.8211,117.426);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_20.setTransform(581.7711,65.176);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_21.setTransform(603.1711,151.176);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglAKIgBgDQgKAEgLAAQg0AAgJgSQgFgNARgKQASgKAYAAQAkAAAJARQAbgRAqAAQAjAAAVANQASALAAAQQAAAQgTAMQgTANgaAAQhQAAgPgfg");
	this.shape_22.setTransform(636.4,106.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhOAKQgJgSAdgQQAbgQAmAAQAjAAAUANQATAMAAAPQAAAQgTAMQgUANgZAAQhQAAgPgfg");
	this.shape_23.setTransform(480.167,68.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_24.setTransform(64.0211,19.126);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_25.setTransform(79.2711,100.026);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_26.setTransform(226.2211,47.776);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_27.setTransform(247.6211,133.776);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AglAKIgBgDQgKAEgLAAQg0AAgJgSQgFgNARgKQASgKAYAAQAkAAAJARQAbgRAqAAQAjAAAVANQASALAAAQQAAAQgTAMQgTANgaAAQhQAAgPgfg");
	this.shape_28.setTransform(280.85,89.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhOAKQgJgSAdgQQAbgQAmAAQAjAAAUANQATAMAAAPQAAAQgTAMQgUANgZAAQhQAAgPgfg");
	this.shape_29.setTransform(124.617,51.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Clouds, new cjs.Rectangle(0,0,1770.2,170.3), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.UpView = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjXJOIAAybIGvAAIAASbg");
	this.shape.setTransform(1161.575,386.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// Bred
	this.instance = new lib.Up_Bred_1();
	this.instance.setTransform(729.05,478.8,1,1,0,0,0,321.3,34.6);

	this.instance_1 = new lib.Up_Bred_1();
	this.instance_1.setTransform(729.05,308.95,1,1,0,0,0,321.3,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("Eg2zAVLIAAv+MBtnAAAIAAP+gEg2zgFMIAAv+MBtnAAAIAAP+g");
	this.shape_1.setTransform(732.375,394.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.instance}]}).wait(60));

	// toaster
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EgTrAhHMAAAhCNMAnYAAAMAAABCNg");
	this.shape_2.setTransform(425.8,397.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("Egt8AhHMAAAhCNMBb5AAAMAAABCNg");
	this.shape_3.setTransform(845.925,397.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(60));

	// Electirc
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACjHBQtYgeqjiAQkEgxoGh0QnMhflEgPQhfgEgZgCQhDgHgygQQg8gVgrgoQgwgtgMg4QgQhIAthIQArhEBJgiQA/gdBWgHQA8gEBfAGQGBAbJ0CIQFPBKCoAjQEgA7DaAgQGAA3HiAPQEmAJJBgEQWRgJJKAAQBoAAA4AHQBYALA/AgQBJAnAmBKQApBOgcBIQgfBShqAjQhNAah7ACIz/AUQnbAHlvAAQmoAAkXgKg");
	this.shape_4.setTransform(57.9729,375.704);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(60));

	// Background
	this.instance_2 = new lib.Upview_Table("synched",0);
	this.instance_2.setTransform(708.15,376.1,1,1,0,0,0,648.1,366.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.5,10,1631.9,732.2);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Toasts_1();
	this.instance.setTransform(41.85,23.4,1,1,8.4825,0,0,20.9,20.5);

	this.instance_1 = new lib.Toasts_1();
	this.instance_1.setTransform(41,28.6,1,1,8.4825,0,0,38.6,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(2.5,0,63.099999999999994,47.9), null);


(lib.Scene_1_up_view = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// up_view
	this.instance = new lib.UpView("synched",0);
	this.instance.setTransform(648.1,368.1,1,1,0,0,0,714.1,384.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(176).to({_off:false},0).wait(77));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Toasts = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Toasts
	this.instance = new lib.Toasts_1();
	this.instance.setTransform(489.5,378.1,1,1,8.4825,0,0,20.9,20.5);

	this.instance_1 = new lib.Toasts_1();
	this.instance_1.setTransform(488.65,383.3,1,1,8.4825,0,0,38.6,21.9);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(480.45,378.6,1,1,0,0,0,32.8,23.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},79).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).wait(1).to({y:383.7},0).wait(1).to({y:388.85},0).wait(1).to({y:394.05},0).wait(1).to({y:395.7},0).wait(323));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_toastfly1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// toastfly1
	this.instance = new lib.Toasts_1();
	this.instance.setTransform(477.3,382.35,0.9999,0.9999,6.7062,0,0,2.7,3.8);
	this.instance._off = true;

	this.instance_1 = new lib.Toasts_Eat("synched",0);
	this.instance_1.setTransform(502,698.15,0.9999,0.9999,91.177,0,0,21.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},406).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(406).to({_off:false},0).wait(1).to({regX:20.9,regY:20.5,rotation:7.8608,x:494.5,y:385.2},0).wait(1).to({rotation:9.0145,x:495.6,y:369.35},0).wait(1).to({rotation:10.1681,x:496.65,y:353.5},0).wait(1).to({rotation:11.3218,x:497.75,y:337.6},0).wait(1).to({rotation:12.4754,x:498.75,y:321.7},0).wait(1).to({rotation:13.6291,x:499.8,y:305.8},0).wait(1).to({rotation:14.7827,x:500.85,y:289.95},0).wait(1).to({rotation:15.9364,x:501.9,y:274.05},0).wait(1).to({rotation:17.09,x:502.95,y:258.15},0).wait(1).to({rotation:18.2437,x:504,y:242.2},0).wait(1).to({rotation:19.3973,x:505.05,y:226.3},0).wait(1).to({rotation:20.551,x:506.05,y:210.35},0).wait(1).to({rotation:21.7046,x:507.05,y:194.4},0).wait(1).to({rotation:21.8339,y:193.9},0).wait(1).to({rotation:21.9631,y:193.45},0).wait(1).to({rotation:22.0924,x:506.95,y:193.05},0).wait(1).to({rotation:22.2217,y:192.6},0).wait(1).to({rotation:22.3509,x:506.9,y:192.2},0).wait(1).to({rotation:22.4802,x:506.85,y:191.8},0).wait(1).to({rotation:22.6095,x:506.8,y:191.35},0).wait(1).to({rotation:22.7388,y:190.9},0).wait(1).to({rotation:22.868,x:506.75,y:190.45},0).wait(1).to({rotation:22.9973,y:190},0).wait(1).to({rotation:23.1266,x:506.65,y:189.6},0).wait(1).to({rotation:23.2558,x:506.6,y:189.2},0).wait(1).to({rotation:23.3851,y:188.75},0).wait(1).to({rotation:23.5144,x:506.5,y:188.3},0).wait(1).to({rotation:23.6436,x:506.55,y:187.9},0).wait(1).to({rotation:23.7729,x:506.45,y:187.4},0).wait(1).to({rotation:23.9022,y:187},0).wait(1).to({rotation:24.0315,x:506.4,y:186.55},0).wait(1).to({rotation:24.1607,x:506.35,y:186.15},0).wait(1).to({rotation:24.29,x:506.3,y:185.7},0).wait(1).to({rotation:24.4193,x:506.35,y:185.25},0).wait(1).to({rotation:24.5485,x:506.25,y:184.85},0).wait(1).to({rotation:24.6778,y:184.4},0).wait(1).to({rotation:24.8071,x:506.15,y:183.95},0).wait(1).to({rotation:24.9363,x:506.1,y:183.55},0).wait(1).to({rotation:25.0656,y:183.1},0).wait(1).to({rotation:25.1949,x:506,y:182.65},0).wait(1).to({rotation:25.3242,x:506.05,y:182.25},0).wait(1).to({rotation:25.4534,x:505.95,y:181.8},0).wait(1).to({rotation:25.5827,y:181.35},0).wait(1).to({rotation:25.712,x:505.9,y:180.9},0).wait(1).to({rotation:25.8412,x:505.85,y:180.5},0).wait(1).to({rotation:25.9705,x:505.8,y:180.1},0).wait(1).to({rotation:26.0998,y:179.6},0).wait(1).to({rotation:26.229,x:505.75,y:179.2},0).wait(1).to({rotation:26.3583,x:505.7,y:178.75},0).wait(1).to({rotation:26.4876,x:505.65,y:178.3},0).wait(1).to({rotation:26.6169,y:177.85},0).wait(1).to({rotation:26.7461,x:505.6,y:177.45},0).wait(1).to({rotation:26.8754,x:505.55,y:177.05},0).wait(1).to({rotation:27.0047,x:505.5,y:176.55},0).wait(1).to({rotation:27.1339,x:505.45,y:176.15},0).wait(1).to({rotation:27.2632,y:175.65},0).wait(1).to({rotation:27.3925,x:505.35,y:175.25},0).wait(1).to({rotation:27.5217,x:505.4,y:174.85},0).wait(1).to({rotation:27.651,x:505.3,y:174.4},0).wait(1).to({rotation:27.7803,y:174},0).wait(1).to({rotation:27.9096,x:505.2,y:173.5},0).wait(1).to({rotation:28.0388,y:173.05},0).wait(1).to({rotation:28.1681,x:505.1,y:172.6},0).wait(1).to({rotation:28.2974,x:505.15,y:172.2},0).wait(1).to({rotation:28.4266,x:505.1,y:171.8},0).wait(1).to({rotation:28.5559,x:505,y:171.35},0).wait(1).to({rotation:28.6852,y:170.95},0).wait(1).to({rotation:28.8144,x:504.9,y:170.4},0).wait(1).to({rotation:28.9437,x:504.95,y:170},0).wait(1).to({rotation:29.073,x:504.85,y:169.55},0).wait(1).to({rotation:29.2023,y:169.15},0).wait(1).to({rotation:29.3315,x:504.75,y:168.7},0).wait(1).to({rotation:29.4608,y:168.3},0).wait(1).to({rotation:29.5901,x:504.7,y:167.8},0).wait(1).to({rotation:29.7193,y:167.35},0).wait(1).to({rotation:29.8486,x:504.6,y:166.95},0).wait(1).to({rotation:29.9779,y:166.5},0).wait(1).to({rotation:30.1071,x:504.55,y:166.1},0).wait(1).to({rotation:30.2364,y:165.6},0).wait(1).to({rotation:30.3657,x:504.5,y:165.2},0).wait(1).to({rotation:30.4949,x:504.4,y:164.75},0).wait(1).to({rotation:30.6242,y:164.35},0).wait(1).to({rotation:30.7535,x:504.3,y:163.85},0).wait(1).to({rotation:30.8828,x:504.35,y:163.45},0).wait(1).to({rotation:31.012,x:504.25,y:162.95},0).wait(1).to({rotation:31.1413,y:162.55},0).wait(1).to({rotation:31.2706,x:504.15,y:162.1},0).wait(1).to({rotation:31.3998,y:161.7},0).wait(1).to({rotation:31.5291,x:504.1,y:161.25},0).wait(1).to({rotation:31.6584,y:160.75},0).wait(1).to({rotation:31.7876,x:504,y:160.3},0).wait(1).to({rotation:31.9169,y:159.9},0).wait(1).to({rotation:32.0462,x:503.9,y:159.45},0).wait(1).to({rotation:32.1755,x:503.95,y:159.05},0).wait(1).to({rotation:32.3047,x:503.85,y:158.55},0).wait(1).to({rotation:32.434,x:503.8,y:158.15},0).wait(1).to({rotation:32.5633,x:503.75,y:157.7},0).wait(1).to({rotation:32.6925,y:157.25},0).wait(1).to({rotation:32.8218,x:503.7,y:156.8},0).wait(1).to({rotation:32.9511,x:503.65,y:156.35},0).wait(1).to({rotation:33.0803,x:503.6,y:155.9},0).wait(1).to({rotation:33.2096,x:503.55,y:155.5},0).wait(1).to({rotation:33.3389,y:155.05},0).wait(1).to({rotation:33.4682,x:503.5,y:154.6},0).wait(1).to({rotation:33.5974,x:503.45,y:154.15},0).wait(1).to({rotation:33.7267,x:503.4,y:153.75},0).wait(1).to({rotation:33.856,y:153.25},0).wait(1).to({rotation:33.9852,x:503.35,y:152.85},0).wait(1).to({rotation:34.1145,x:503.3,y:152.35},0).wait(1).to({rotation:34.2438,x:503.2,y:151.95},0).wait(1).to({rotation:34.373,y:151.5},0).wait(1).to({rotation:34.5023,x:503.15,y:151.1},0).wait(1).to({rotation:34.6316,x:503.1,y:150.65},0).wait(1).to({rotation:34.7609,x:503.05,y:150.2},0).wait(1).to({rotation:34.8901,y:149.7},0).wait(1).to({rotation:35.0194,x:503,y:149.3},0).wait(1).to({rotation:35.1487,x:502.95,y:148.85},0).wait(1).to({rotation:35.2779,x:502.9,y:148.4},0).wait(1).to({rotation:35.4072,x:502.85,y:147.95},0).wait(1).to({rotation:35.5365,y:147.55},0).wait(1).to({rotation:35.6657,x:502.8,y:147.1},0).wait(1).to({rotation:35.795,x:502.75,y:146.65},0).wait(1).to({rotation:35.9243,x:502.65,y:146.2},0).wait(1).to({rotation:36.0536,x:502.7,y:145.7},0).wait(1).to({rotation:36.1828,x:502.6,y:145.3},0).wait(1).to({rotation:36.3121,x:502.55,y:144.8},0).wait(1).to({rotation:36.4414,x:502.5,y:144.4},0).wait(1).to({rotation:36.5706,y:143.95},0).wait(1).to({rotation:36.6999,x:502.45,y:143.55},0).wait(7).to({rotation:44.2729,x:502.15,y:224.05},0).wait(1).to({rotation:51.8458,x:501.9,y:304.1},0).wait(1).to({rotation:59.4188,x:501.65,y:383.8},0).wait(1).to({rotation:66.9917,x:501.45,y:462.95},0).wait(1).to({rotation:74.5647,x:501.4,y:541.8},0).wait(1).to({rotation:82.1376,x:501.6,y:620.2},0).wait(1).to({rotation:89.7106,x:502,y:698.3},0).wait(77).to({_off:true},1).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_toastfly_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// toastfly_2
	this.instance = new lib.Toasts_1();
	this.instance.setTransform(457.05,378.15,0.9998,0.9998,6.7056,0,0,0,3.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(406).to({_off:false},0).wait(1).to({regX:20.9,regY:20.5,rotation:5.5527,x:476.35,y:381.2},0).wait(1).to({rotation:4.399,x:477.05,y:364.6},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:3.2454,x:477.65,y:347.95},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:2.0918,x:478.3,y:331.3},0).wait(1).to({rotation:0.9381,x:478.85,y:314.65},0).wait(1).to({rotation:-0.2155,x:479.5,y:297.95},0).wait(1).to({rotation:-1.3691,x:480.1,y:281.3},0).wait(1).to({rotation:-2.5227,x:480.7,y:264.65},0).wait(1).to({rotation:-3.6764,x:481.2,y:247.95},0).wait(1).to({rotation:-4.83,x:481.8,y:231.25},0).wait(1).to({rotation:-5.9836,x:482.4,y:214.55},0).wait(1).to({rotation:-7.1372,x:482.95,y:197.85},0).wait(1).to({rotation:-8.2909,x:483.5,y:181.2},0).wait(1).to({rotation:-8.4201,x:483.4,y:180.65},0).wait(1).to({rotation:-8.5494,x:483.35,y:180.05},0).wait(1).to({rotation:-8.6786,x:483.3,y:179.5},0).wait(1).to({rotation:-8.8079,y:178.95},0).wait(1).to({rotation:-8.9371,x:483.25,y:178.45},0).wait(1).to({rotation:-9.0664,x:483.2,y:177.9},0).wait(1).to({rotation:-9.1956,x:483.15,y:177.35},0).wait(1).to({rotation:-9.3249,x:483.05,y:176.8},0).wait(1).to({rotation:-9.4541,x:483,y:176.2},0).wait(1).to({rotation:-9.5834,x:482.95,y:175.65},0).wait(1).to({rotation:-9.7127,x:482.9,y:175.15},0).wait(1).to({rotation:-9.8419,y:174.65},0).wait(1).to({rotation:-9.9712,x:482.85,y:174.1},0).wait(1).to({rotation:-10.1004,x:482.75,y:173.55},0).wait(1).to({rotation:-10.2297,x:482.7,y:172.95},0).wait(1).to({rotation:-10.3589,y:172.4},0).wait(1).to({rotation:-10.4882,x:482.65,y:171.9},0).wait(1).to({rotation:-10.6174,x:482.6,y:171.35},0).wait(1).to({rotation:-10.7467,x:482.5,y:170.8},0).wait(1).to({rotation:-10.8759,x:482.45,y:170.25},0).wait(1).to({rotation:-11.0052,x:482.4,y:169.65},0).wait(1).to({rotation:-11.1344,x:482.35,y:169.1},0).wait(1).to({rotation:-11.2637,x:482.3,y:168.6},0).wait(1).to({rotation:-11.393,y:168.05},0).wait(1).to({rotation:-11.5222,x:482.2,y:167.55},0).wait(1).to({rotation:-11.6515,x:482.15,y:166.95},0).wait(1).to({rotation:-11.7807,x:482.1,y:166.4},0).wait(1).to({rotation:-11.91,y:165.85},0).wait(1).to({rotation:-12.0392,x:482,y:165.35},0).wait(1).to({rotation:-12.1685,x:481.95,y:164.8},0).wait(1).to({rotation:-12.2977,x:481.85,y:164.25},0).wait(1).to({rotation:-12.427,y:163.65},0).wait(1).to({rotation:-12.5562,x:481.8,y:163.1},0).wait(1).to({rotation:-12.6855,x:481.75,y:162.6},0).wait(1).to({rotation:-12.8147,x:481.7,y:162.05},0).wait(1).to({rotation:-12.944,x:481.65,y:161.45},0).wait(1).to({rotation:-13.0733,x:481.6,y:160.9},0).wait(1).to({rotation:-13.2025,x:481.55,y:160.4},0).wait(1).to({rotation:-13.3318,x:481.5,y:159.85},0).wait(1).to({rotation:-13.461,x:481.4,y:159.35},0).wait(1).to({rotation:-13.5903,x:481.35,y:158.75},0).wait(1).to({rotation:-13.7195,x:481.3,y:158.2},0).wait(1).to({rotation:-13.8488,x:481.25,y:157.65},0).wait(1).to({rotation:-13.978,y:157.1},0).wait(1).to({rotation:-14.1073,x:481.15,y:156.6},0).wait(1).to({rotation:-14.2365,x:481.1,y:156},0).wait(1).to({rotation:-14.3658,x:481.05,y:155.45},0).wait(1).to({rotation:-14.495,y:154.9},0).wait(1).to({rotation:-14.6243,x:480.9,y:154.35},0).wait(1).to({rotation:-14.7535,x:480.85,y:153.8},0).wait(1).to({rotation:-14.8828,x:480.8,y:153.3},0).wait(1).to({rotation:-15.0121,y:152.75},0).wait(1).to({rotation:-15.1413,x:480.7,y:152.2},0).wait(1).to({rotation:-15.2706,x:480.65,y:151.6},0).wait(1).to({rotation:-15.3998,y:151.05},0).wait(1).to({rotation:-15.5291,x:480.6,y:150.55},0).wait(1).to({rotation:-15.6583,x:480.5,y:150},0).wait(1).to({rotation:-15.7876,x:480.45,y:149.4},0).wait(1).to({rotation:-15.9168,x:480.4,y:148.85},0).wait(1).to({rotation:-16.0461,x:480.35,y:148.3},0).wait(1).to({rotation:-16.1753,x:480.25,y:147.8},0).wait(1).to({rotation:-16.3046,x:480.2,y:147.25},0).wait(1).to({rotation:-16.4338,y:146.7},0).wait(1).to({rotation:-16.5631,x:480.15,y:146.15},0).wait(1).to({rotation:-16.6924,x:480.05,y:145.6},0).wait(1).to({rotation:-16.8216,x:480,y:145},0).wait(1).to({rotation:-16.9509,y:144.5},0).wait(1).to({rotation:-17.0801,x:479.85,y:143.95},0).wait(1).to({rotation:-17.2094,x:479.8,y:143.4},0).wait(1).to({rotation:-17.3386,x:479.75,y:142.8},0).wait(1).to({rotation:-17.4679,y:142.3},0).wait(1).to({rotation:-17.5971,x:479.65,y:141.75},0).wait(1).to({rotation:-17.7264,x:479.6,y:141.2},0).wait(1).to({rotation:-17.8556,x:479.55,y:140.65},0).wait(1).to({rotation:-17.9849,x:479.5,y:140.1},0).wait(1).to({rotation:-18.1141,x:479.4,y:139.55},0).wait(1).to({rotation:-18.2434,x:479.35,y:138.95},0).wait(1).to({rotation:-18.3727,x:479.3,y:138.45},0).wait(1).to({rotation:-18.5019,x:479.25,y:137.9},0).wait(1).to({rotation:-18.6312,x:479.2,y:137.3},0).wait(1).to({rotation:-18.7604,x:479.15,y:136.8},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-18.8897,x:479.05,y:136.25},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-19.0189,y:135.75},0).wait(1).to({rotation:-19.1482,x:478.95,y:135.15},0).wait(1).to({rotation:-19.2774,x:478.85,y:134.6},0).wait(1).to({rotation:-19.4067,x:478.8,y:134.05},0).wait(1).to({rotation:-19.5359,y:133.45},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-19.6652,x:478.75,y:132.95},0).wait(1).to({rotation:-19.7944,x:478.65,y:132.4},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-19.9237,y:131.85},0).wait(1).to({rotation:-20.053,x:478.6,y:131.3},0).wait(1).to({rotation:-20.1822,x:478.45,y:130.75},0).wait(1).to({rotation:-20.3115,x:478.4,y:130.2},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-20.4407,y:129.65},0).wait(1).to({rotation:-20.57,x:478.3,y:129.1},0).wait(1).to({rotation:-20.6992,x:478.25,y:128.5},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-20.8285,x:478.2,y:127.95},0).wait(1).to({rotation:-20.9577,x:478.15,y:127.45},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-21.087,x:478.05,y:126.9},0).wait(1).to({rotation:-21.2162,x:478,y:126.35},0).wait(1).to({rotation:-21.3455,x:477.9,y:125.8},0).wait(1).to({rotation:-21.4747,y:125.2},0).wait(1).to({rotation:-21.604,x:477.85,y:124.65},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-21.7333,x:477.75,y:124.15},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-21.8625,x:477.7,y:123.55},0).wait(1).to({rotation:-21.9918,x:477.6,y:123.05},0).wait(1).to({rotation:-22.121,x:477.55,y:122.5},0).wait(1).to({rotation:-22.2503,x:477.5,y:121.9},0).wait(1).to({rotation:-22.3795,x:477.4,y:121.4},0).wait(1).to({rotation:-22.5088,y:120.85},0).wait(1).to({rotation:-22.638,x:477.35,y:120.25},0).wait(1).to({rotation:-22.7673,x:477.25,y:119.7},0).wait(1).to({rotation:-22.8965,x:477.15,y:119.15},0).wait(1).to({rotation:-23.0258,y:118.65},0).wait(1).to({rotation:-23.155,x:477.05,y:118.1},0).wait(1).to({rotation:-23.2843,x:477,y:117.5},0).wait(7).to({rotation:-29.2443,x:476.35,y:190.2},0).wait(1).to({rotation:-35.2044,x:475.3,y:262.8},0).wait(1).to({rotation:-41.1644,x:474.1,y:335.45},0).wait(1).to({rotation:-47.1245,x:472.5,y:408.05},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,rotation:-53.0845,x:470.7,y:480.65},0).wait(1).to({rotation:-59.0446,x:468.5,y:553.4},0).wait(1).to({rotation:-65.0046,x:466.1,y:626.15},0).wait(1).to({rotation:-70.9647,x:463.4,y:699.1},0).wait(112));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Toaster_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Toaster_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E06362").s().p("AgsATQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgeQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAIBZAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAABIAAAeQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(508.65,400,0.9988,0.9988,0,0,0,1.2,1.3);

	this.instance = new lib.Toaster();
	this.instance.setTransform(481.25,408.2,0.8177,0.8177,0,0,0,41.1,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance}]},76).wait(585));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Toaster = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Toaster
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E06362").s().p("AgsATQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgeQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAIBZAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAABIAAAeQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(508.65,400,0.9988,0.9988,0,0,0,1.2,1.3);

	this.instance = new lib.Toaster();
	this.instance.setTransform(481.25,408.2,0.8177,0.8177,0,0,0,41.1,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance}]},80).to({state:[]},455).wait(122));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Dog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Dog
	this.instance = new lib.Dog();
	this.instance.setTransform(1396.7,672.5,0.6602,0.6602,0,0,0,186.6,72);
	this.instance._off = true;

	this.instance_1 = new lib.Dog_Eat();
	this.instance_1.setTransform(603.65,672.4,0.6651,0.6651,0,0,0,174.1,73.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},549).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(549).to({_off:false},0).wait(1).to({regX:186.4,regY:73.4,x:1386.05,y:673.35},0).wait(1).to({x:1375.6},0).wait(1).to({x:1365.15,y:673.3},0).wait(1).to({x:1354.7},0).wait(1).to({x:1344.25},0).wait(1).to({x:1333.8,y:673.25},0).wait(1).to({x:1323.35},0).wait(1).to({x:1312.9},0).wait(1).to({x:1302.45,y:673.2},0).wait(1).to({x:1292},0).wait(1).to({x:1281.55},0).wait(1).to({x:1271.1,y:673.15},0).wait(1).to({x:1260.65},0).wait(1).to({x:1250.2},0).wait(1).to({x:1239.75,y:673.1},0).wait(1).to({x:1229.3},0).wait(1).to({x:1218.85},0).wait(1).to({x:1208.4,y:673.05},0).wait(1).to({x:1197.95},0).wait(1).to({x:1187.5},0).wait(1).to({x:1177.05,y:673},0).wait(1).to({x:1166.6},0).wait(1).to({x:1156.15},0).wait(1).to({x:1145.65,y:672.95},0).wait(1).to({x:1135.2},0).wait(1).to({x:1124.75},0).wait(1).to({x:1114.3,y:672.9},0).wait(1).to({x:1103.85},0).wait(1).to({x:1093.4},0).wait(1).to({x:1082.95,y:672.85},0).wait(1).to({x:1072.5},0).wait(1).to({x:1062.05},0).wait(1).to({x:1051.6,y:672.8},0).wait(1).to({x:1041.15},0).wait(1).to({x:1030.7},0).wait(1).to({x:1020.25,y:672.75},0).wait(1).to({x:1009.8},0).wait(1).to({x:999.35},0).wait(1).to({x:988.9,y:672.7},0).wait(1).to({x:978.45},0).wait(1).to({x:968},0).wait(1).to({x:957.55,y:672.65},0).wait(1).to({x:947.1},0).wait(1).to({x:936.65},0).wait(1).to({x:926.2,y:672.6},0).wait(1).to({x:915.75},0).wait(1).to({x:905.3},0).wait(1).to({x:894.85,y:672.55},0).wait(1).to({x:884.35},0).wait(1).to({x:873.9},0).wait(1).to({x:863.45,y:672.5},0).wait(1).to({x:853},0).wait(1).to({x:842.55},0).wait(1).to({x:832.1,y:672.45},0).wait(1).to({x:821.65},0).wait(1).to({x:811.2},0).wait(1).to({x:800.75,y:672.4},0).wait(1).to({x:790.3},0).wait(1).to({x:779.85},0).wait(1).to({x:769.4,y:672.35},0).wait(1).to({x:758.95},0).wait(1).to({x:748.5},0).wait(1).to({x:738.05,y:672.3},0).wait(1).to({x:727.6},0).wait(1).to({x:717.15},0).wait(1).to({x:706.7,y:672.25},0).wait(1).to({x:696.25},0).wait(1).to({x:685.8},0).wait(1).to({x:675.35,y:672.2},0).wait(1).to({x:664.9},0).wait(1).to({x:654.45},0).wait(1).to({x:644,y:672.15},0).wait(1).to({x:633.55},0).wait(1).to({x:623.05},0).wait(1).to({x:612.6,y:672.1},0).wait(1).to({_off:true},1).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Clock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Clock
	this.instance = new lib.Clock();
	this.instance.setTransform(898.9,180.2,0.5755,0.5755,0,0,0,73.2,73.2);

	this.instance_1 = new lib.ClockMoving();
	this.instance_1.setTransform(898.85,180.05,0.5744,0.5744,0,0,0,73.2,73.2);

	this.instance_2 = new lib.ClockEnd();
	this.instance_2.setTransform(899.55,183.9,0.6177,0.6177,0,0,0,73.7,73.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},253).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2}]},238).wait(170));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Buttons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Buttons
	this.StartPlay = new lib.Start();
	this.StartPlay.name = "StartPlay";
	this.StartPlay.setTransform(269.95,322.7,1,1,0,0,0,105.1,46.3);
	new cjs.ButtonHelper(this.StartPlay, 0, 1, 1);

	this.replay = new lib.Start();
	this.replay.name = "replay";
	this.replay.setTransform(194.85,269);
	new cjs.ButtonHelper(this.replay, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.StartPlay}]}).to({state:[]},2).to({state:[{t:this.replay}]},657).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Background
	this.instance = new lib.Background();
	this.instance.setTransform(0,720.05,0.6634,0.6634,0,0,0,0,1085.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(661));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Window = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBF6FC").s().p("A5/XBIAAhAMAz/AAAIAABAgA5/VOIAAhAMAz/AAAIAABAgA5/TbIAAhAMAz/AAAIAABAgA5/RnIAAg/MAz/AAAIAAA/gA5/P0IAAhAMAz/AAAIAABAgA5/OAIAAg/MAz/AAAIAAA/gA5/MNIAAg/MAz/AAAIAAA/gA5/KaIAAg/MAz/AAAIAAA/gA5/ImIAAg/MAz/AAAIAAA/gA5/GzIAAhAMAz/AAAIAABAgA5/FAIAAhAMAz/AAAIAABAgA5/DNIAAhAMAz/AAAIAABAgA5/BaIAAhAMAz/AAAIAABAgA5/gZIAAg/MAz/AAAIAAA/gA5/iMIAAhAMAz/AAAIAABAgA5/kAIAAg/MAz/AAAIAAA/gA5/lzIAAhAMAz/AAAIAABAgA5/nmIAAg/MAz/AAAIAAA/gA5/pZIAAhAMAz/AAAIAABAgA5/rNIAAhAMAz/AAAIAABAgA5/tAIAAhAMAz/AAAIAABAgA5/u0IAAg/MAz/AAAIAAA/gA5/wmIAAhAMAz/AAAIAABAgA5/yaIAAg/MAz/AAAIAAA/gA5/0OIAAg/MAz/AAAIAAA/gA5/2BIAAg/MAz/AAAIAAA/g");
	this.shape.setTransform(185.525,155.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1262));

	// Layer_8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0D6C1").s().p("Ah5XFMAAAguJIDzAAMAAAAuJg");
	this.shape_1.setTransform(186.8,156.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1262));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A48XBMAAAguBMAx5AAAMAAAAuBg");
	mask.setTransform(188.475,156.925);

	// Clouds
	this.instance = new lib.Clouds();
	this.instance.setTransform(927.15,107.45,1,1,0,0,0,885.1,85.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:926.25,y:107.4},0).wait(1).to({x:925.4},0).wait(1).to({x:924.55},0).wait(1).to({x:923.7},0).wait(1).to({x:922.8},0).wait(1).to({x:921.95},0).wait(1).to({x:921.1},0).wait(1).to({x:920.25},0).wait(1).to({x:919.4},0).wait(1).to({x:918.5},0).wait(1).to({x:917.65},0).wait(1).to({x:916.8},0).wait(1).to({x:915.95},0).wait(1).to({x:915.1},0).wait(1).to({x:914.2},0).wait(1).to({x:913.35},0).wait(1).to({x:912.5},0).wait(1).to({x:911.65},0).wait(1).to({x:910.8},0).wait(1).to({x:909.9},0).wait(1).to({x:909.05},0).wait(1).to({x:908.2},0).wait(1).to({x:907.35},0).wait(1).to({x:906.5},0).wait(1).to({x:905.6},0).wait(1).to({x:904.75},0).wait(1).to({x:903.9},0).wait(1).to({x:903.05},0).wait(1).to({x:902.2},0).wait(1).to({x:901.3},0).wait(1).to({x:900.45},0).wait(1).to({x:899.6},0).wait(1).to({x:898.75},0).wait(1).to({x:897.85},0).wait(1).to({x:897},0).wait(1).to({x:896.15},0).wait(1).to({x:895.3},0).wait(1).to({x:894.45},0).wait(1).to({x:893.55},0).wait(1).to({x:892.7},0).wait(1).to({x:891.85},0).wait(1).to({x:891},0).wait(1).to({x:890.15},0).wait(1).to({x:889.25},0).wait(1).to({x:888.4},0).wait(1).to({x:887.55},0).wait(1).to({x:886.7},0).wait(1).to({x:885.85},0).wait(1).to({x:885},0).wait(1).to({x:884.15},0).wait(1).to({x:883.3},0).wait(1).to({x:882.45},0).wait(1).to({x:881.6},0).wait(1).to({x:880.7},0).wait(1).to({x:879.85},0).wait(1).to({x:879},0).wait(1).to({x:878.15},0).wait(1).to({x:877.3},0).wait(1).to({x:876.4},0).wait(1).to({x:875.55},0).wait(1).to({x:874.7},0).wait(1).to({x:873.85},0).wait(1).to({x:873},0).wait(1).to({x:872.1},0).wait(1).to({x:871.25},0).wait(1).to({x:870.4},0).wait(1).to({x:869.55},0).wait(1).to({x:868.65},0).wait(1).to({x:867.8},0).wait(1).to({x:866.95},0).wait(1).to({x:866.1},0).wait(1).to({x:865.25},0).wait(1).to({x:864.35},0).wait(1).to({x:863.5},0).wait(1).to({x:862.65},0).wait(1).to({x:861.8},0).wait(1).to({x:860.95},0).wait(1).to({x:860.05},0).wait(1).to({x:859.2},0).wait(1).to({x:858.35},0).wait(1).to({x:857.5},0).wait(1).to({x:856.65},0).wait(1).to({x:855.75},0).wait(1).to({x:854.9},0).wait(1).to({x:854.05},0).wait(1).to({x:853.2},0).wait(1).to({x:852.35},0).wait(1).to({x:851.45},0).wait(1).to({x:850.6},0).wait(1).to({x:849.75},0).wait(1).to({x:848.9},0).wait(1).to({x:848.05},0).wait(1).to({x:847.15},0).wait(1).to({x:846.3},0).wait(1).to({x:845.45},0).wait(1).to({x:844.6},0).wait(1).to({x:843.7},0).wait(1).to({x:842.85},0).wait(1).to({x:842},0).wait(1).to({x:841.15},0).wait(1).to({x:840.3},0).wait(1).to({x:839.4},0).wait(1).to({x:838.55},0).wait(1).to({x:837.7},0).wait(1).to({x:836.85},0).wait(1).to({x:836},0).wait(1).to({x:835.1},0).wait(1).to({x:834.25},0).wait(1).to({x:833.4},0).wait(1).to({x:832.55},0).wait(1).to({x:831.7},0).wait(1).to({x:830.8},0).wait(1).to({x:829.95},0).wait(1).to({x:829.1},0).wait(1).to({x:828.25},0).wait(1).to({x:827.4},0).wait(1).to({x:826.5},0).wait(1).to({x:825.65},0).wait(1).to({x:824.8},0).wait(1).to({x:823.95},0).wait(1).to({x:823.1},0).wait(1).to({x:822.2},0).wait(1).to({x:821.35},0).wait(1).to({x:820.5},0).wait(1).to({x:819.65},0).wait(1).to({x:818.8},0).wait(1).to({x:817.9},0).wait(1).to({x:817.05},0).wait(1).to({x:816.2},0).wait(1).to({x:815.35},0).wait(1).to({x:814.45},0).wait(1).to({x:813.6},0).wait(1).to({x:812.75},0).wait(1).to({x:811.9},0).wait(1).to({x:811.05},0).wait(1).to({x:810.15},0).wait(1).to({x:809.3},0).wait(1).to({x:808.45},0).wait(1).to({x:807.6},0).wait(1).to({x:806.75},0).wait(1).to({x:805.85},0).wait(1).to({x:805},0).wait(1).to({x:804.15},0).wait(1).to({x:803.3},0).wait(1).to({x:802.45},0).wait(1).to({x:801.55},0).wait(1).to({x:800.7},0).wait(1).to({x:799.85},0).wait(1).to({x:799},0).wait(1).to({x:798.15},0).wait(1).to({x:797.25},0).wait(1).to({x:796.4},0).wait(1).to({x:795.55},0).wait(1).to({x:794.7},0).wait(1).to({x:793.85},0).wait(1).to({x:792.95},0).wait(1).to({x:792.1},0).wait(1).to({x:791.25},0).wait(1).to({x:790.4},0).wait(1).to({x:789.55},0).wait(1).to({x:788.65},0).wait(1).to({x:787.8},0).wait(1).to({x:786.95},0).wait(1).to({x:786.1},0).wait(1).to({x:785.2},0).wait(1).to({x:784.35},0).wait(1).to({x:783.5},0).wait(1).to({x:782.65},0).wait(1).to({x:781.8},0).wait(1).to({x:780.9},0).wait(1).to({x:780.05},0).wait(1).to({x:779.2},0).wait(1).to({x:778.35},0).wait(1).to({x:777.5},0).wait(1).to({x:776.6},0).wait(1).to({x:775.75},0).wait(1).to({x:774.9},0).wait(1).to({x:774.05},0).wait(1).to({x:773.2},0).wait(1).to({x:772.3},0).wait(1).to({x:771.45},0).wait(1).to({x:770.6},0).wait(1).to({x:769.75},0).wait(1).to({x:768.9},0).wait(1).to({x:768},0).wait(1).to({x:767.15},0).wait(1).to({x:766.3},0).wait(1).to({x:765.45},0).wait(1).to({x:764.6},0).wait(1).to({x:763.7},0).wait(1).to({x:762.85},0).wait(1).to({x:762},0).wait(1).to({x:761.15},0).wait(1).to({x:760.25},0).wait(1).to({x:759.4},0).wait(1).to({x:758.55},0).wait(1).to({x:757.7},0).wait(1).to({x:756.85},0).wait(1).to({x:755.95},0).wait(1).to({x:755.1},0).wait(1).to({x:754.25},0).wait(1).to({x:753.4},0).wait(1).to({x:752.55},0).wait(1).to({x:751.65},0).wait(1).to({x:750.8},0).wait(1).to({x:749.95},0).wait(1).to({x:749.1},0).wait(1).to({x:748.25},0).wait(1).to({x:747.35},0).wait(1).to({x:746.5},0).wait(1).to({x:745.65},0).wait(1).to({x:744.8},0).wait(1).to({x:743.95},0).wait(1).to({x:743.05},0).wait(1).to({x:742.2},0).wait(1).to({x:741.35},0).wait(1).to({x:740.5},0).wait(1).to({x:739.65},0).wait(1).to({x:738.75},0).wait(1).to({x:737.9},0).wait(1).to({x:737.05},0).wait(1).to({x:736.2},0).wait(1).to({x:735.35},0).wait(1).to({x:734.45},0).wait(1).to({x:733.6},0).wait(1).to({x:732.75},0).wait(1).to({x:731.9},0).wait(1).to({x:731},0).wait(1).to({x:730.15},0).wait(1).to({x:729.3},0).wait(1).to({x:728.45},0).wait(1).to({x:727.6},0).wait(1).to({x:726.7},0).wait(1).to({x:725.85},0).wait(1).to({x:725},0).wait(1).to({x:724.15},0).wait(1).to({x:723.3},0).wait(1).to({x:722.4},0).wait(1).to({x:721.55},0).wait(1).to({x:720.7},0).wait(1).to({x:719.85},0).wait(1).to({x:719},0).wait(1).to({x:718.1},0).wait(1).to({x:717.25},0).wait(1).to({x:716.4},0).wait(1).to({x:715.55},0).wait(1).to({x:714.7},0).wait(1).to({x:713.8},0).wait(1).to({x:712.95},0).wait(1).to({x:712.1},0).wait(1).to({x:711.25},0).wait(1).to({x:710.4},0).wait(1).to({x:709.5},0).wait(1).to({x:708.65},0).wait(1).to({x:707.8},0).wait(1).to({x:706.95},0).wait(1).to({x:706.1},0).wait(1).to({x:705.2},0).wait(1).to({x:704.35},0).wait(1).to({x:703.5},0).wait(1).to({x:702.65},0).wait(1).to({x:701.75},0).wait(1).to({x:700.9},0).wait(1).to({x:700.05},0).wait(1).to({x:699.2},0).wait(1).to({x:698.35},0).wait(1).to({x:697.45},0).wait(1).to({x:696.6},0).wait(1).to({x:695.75},0).wait(1).to({x:694.9},0).wait(1).to({x:694.05},0).wait(1).to({x:693.15},0).wait(1).to({x:692.3},0).wait(1).to({x:691.45},0).wait(1).to({x:690.6},0).wait(1).to({x:689.75},0).wait(1).to({x:688.85},0).wait(1).to({x:688},0).wait(1).to({x:687.15},0).wait(1).to({x:686.3},0).wait(1).to({x:685.45},0).wait(1).to({x:684.55},0).wait(1).to({x:683.7},0).wait(1).to({x:682.85},0).wait(1).to({x:682},0).wait(1).to({x:681.15},0).wait(1).to({x:680.25},0).wait(1).to({x:679.4},0).wait(1).to({x:678.55},0).wait(1).to({x:677.7},0).wait(1).to({x:676.8},0).wait(1).to({x:675.95},0).wait(1).to({x:675.1},0).wait(1).to({x:674.25},0).wait(1).to({x:673.4},0).wait(1).to({x:672.5},0).wait(1).to({x:671.65},0).wait(1).to({x:670.8},0).wait(1).to({x:669.95},0).wait(1).to({x:669.1},0).wait(1).to({x:668.2},0).wait(1).to({x:667.35},0).wait(1).to({x:666.5},0).wait(1).to({x:665.65},0).wait(1).to({x:664.8},0).wait(1).to({x:663.9},0).wait(1).to({x:663.05},0).wait(1).to({x:662.2},0).wait(1).to({x:661.35},0).wait(1).to({x:660.5},0).wait(1).to({x:659.6},0).wait(1).to({x:658.75},0).wait(1).to({x:657.9},0).wait(1).to({x:657.05},0).wait(1).to({x:656.2},0).wait(1).to({x:655.3},0).wait(1).to({x:654.45},0).wait(1).to({x:653.6},0).wait(1).to({x:652.75},0).wait(1).to({x:651.9},0).wait(1).to({x:651},0).wait(1).to({x:650.15},0).wait(1).to({x:649.3},0).wait(1).to({x:648.45},0).wait(1).to({x:647.55},0).wait(1).to({x:646.7},0).wait(1).to({x:645.85},0).wait(1).to({x:645},0).wait(1).to({x:644.15},0).wait(1).to({x:643.25},0).wait(1).to({x:642.4},0).wait(1).to({x:641.55},0).wait(1).to({x:640.7},0).wait(1).to({x:639.85},0).wait(1).to({x:638.95},0).wait(1).to({x:638.1},0).wait(1).to({x:637.25},0).wait(1).to({x:636.4},0).wait(1).to({x:635.55},0).wait(1).to({x:634.65},0).wait(1).to({x:633.8},0).wait(1).to({x:632.95},0).wait(1).to({x:632.1},0).wait(1).to({x:631.25},0).wait(1).to({x:630.35},0).wait(1).to({x:629.5},0).wait(1).to({x:628.65},0).wait(1).to({x:627.8},0).wait(1).to({x:626.95},0).wait(1).to({x:626.05},0).wait(1).to({x:625.2},0).wait(1).to({x:624.35},0).wait(1).to({x:623.5},0).wait(1).to({x:622.65},0).wait(1).to({x:621.75},0).wait(1).to({x:620.9},0).wait(1).to({x:620.05},0).wait(1).to({x:619.2},0).wait(1).to({x:618.3},0).wait(1).to({x:617.45},0).wait(1).to({x:616.6},0).wait(1).to({x:615.75},0).wait(1).to({x:614.9},0).wait(1).to({x:614},0).wait(1).to({x:613.15},0).wait(1).to({x:612.3},0).wait(1).to({x:611.45},0).wait(1).to({x:610.6},0).wait(1).to({x:609.7},0).wait(1).to({x:608.85},0).wait(1).to({x:608},0).wait(1).to({x:607.15},0).wait(1).to({x:606.3},0).wait(1).to({x:605.4},0).wait(1).to({x:604.55},0).wait(1).to({x:603.7},0).wait(1).to({x:602.85},0).wait(1).to({x:602},0).wait(1).to({x:601.1},0).wait(1).to({x:600.25},0).wait(1).to({x:599.4},0).wait(1).to({x:598.55},0).wait(1).to({x:597.7},0).wait(1).to({x:596.8},0).wait(1).to({x:595.95},0).wait(1).to({x:595.1},0).wait(1).to({x:594.25},0).wait(1).to({x:593.35},0).wait(1).to({x:592.5},0).wait(1).to({x:591.65},0).wait(1).to({x:590.8},0).wait(1).to({x:589.95},0).wait(1).to({x:589.05},0).wait(1).to({x:588.2},0).wait(1).to({x:587.35},0).wait(1).to({x:586.5},0).wait(1).to({x:585.65},0).wait(1).to({x:584.75},0).wait(1).to({x:583.9},0).wait(1).to({x:583.05},0).wait(1).to({x:582.2},0).wait(1).to({x:581.35},0).wait(1).to({x:580.45},0).wait(1).to({x:579.6},0).wait(1).to({x:578.75},0).wait(1).to({x:577.9},0).wait(1).to({x:577.05},0).wait(1).to({x:576.15},0).wait(1).to({x:575.3},0).wait(1).to({x:574.45},0).wait(1).to({x:573.6},0).wait(1).to({x:572.75},0).wait(1).to({x:571.85},0).wait(1).to({x:571},0).wait(1).to({x:570.15},0).wait(1).to({x:569.3},0).wait(1).to({x:568.45},0).wait(1).to({x:567.55},0).wait(1).to({x:566.7},0).wait(1).to({x:565.85},0).wait(1).to({x:565},0).wait(1).to({x:564.1},0).wait(1).to({x:563.25},0).wait(1).to({x:562.4},0).wait(1).to({x:561.55},0).wait(1).to({x:560.7},0).wait(1).to({x:559.8},0).wait(1).to({x:558.95},0).wait(1).to({x:558.1},0).wait(1).to({x:557.25},0).wait(1).to({x:556.4},0).wait(1).to({x:555.5},0).wait(1).to({x:554.65},0).wait(1).to({x:553.8},0).wait(1).to({x:552.95},0).wait(1).to({x:552.1},0).wait(1).to({x:551.2},0).wait(1).to({x:550.35},0).wait(1).to({x:549.5},0).wait(1).to({x:548.65},0).wait(1).to({x:547.8},0).wait(1).to({x:546.9},0).wait(1).to({x:546.05},0).wait(1).to({x:545.2},0).wait(1).to({x:544.35},0).wait(1).to({x:543.5},0).wait(1).to({x:542.6},0).wait(1).to({x:541.75},0).wait(1).to({x:540.9},0).wait(1).to({x:540.05},0).wait(1).to({x:539.2},0).wait(1).to({x:538.3},0).wait(1).to({x:537.45},0).wait(1).to({x:536.6},0).wait(1).to({x:535.75},0).wait(1).to({x:534.85},0).wait(1).to({x:534},0).wait(1).to({x:533.15},0).wait(1).to({x:532.3},0).wait(1).to({x:531.45},0).wait(1).to({x:530.55},0).wait(1).to({x:529.7},0).wait(1).to({x:528.85},0).wait(1).to({x:528},0).wait(1).to({x:527.15},0).wait(1).to({x:526.25},0).wait(1).to({x:525.4},0).wait(1).to({x:524.55},0).wait(1).to({x:523.7},0).wait(1).to({x:522.85},0).wait(1).to({x:521.95},0).wait(1).to({x:521.1},0).wait(1).to({x:520.25},0).wait(1).to({x:519.4},0).wait(1).to({x:518.55},0).wait(1).to({x:517.65},0).wait(1).to({x:516.8},0).wait(1).to({x:515.95},0).wait(1).to({x:515.1},0).wait(1).to({x:514.25},0).wait(1).to({x:513.35},0).wait(1).to({x:512.5},0).wait(1).to({x:511.65},0).wait(1).to({x:510.8},0).wait(1).to({x:509.9},0).wait(1).to({x:509.05},0).wait(1).to({x:508.2},0).wait(1).to({x:507.35},0).wait(1).to({x:506.5},0).wait(1).to({x:505.6},0).wait(1).to({x:504.75},0).wait(1).to({x:503.9},0).wait(1).to({x:503.05},0).wait(1).to({x:502.2},0).wait(1).to({x:501.3},0).wait(1).to({x:500.45},0).wait(1).to({x:499.6},0).wait(1).to({x:498.75},0).wait(1).to({x:497.9},0).wait(1).to({x:497},0).wait(1).to({x:496.15},0).wait(1).to({x:495.3},0).wait(1).to({x:494.45},0).wait(1).to({x:493.6},0).wait(1).to({x:492.7},0).wait(1).to({x:491.85},0).wait(1).to({x:491},0).wait(1).to({x:490.15},0).wait(1).to({x:489.3},0).wait(1).to({x:488.4},0).wait(1).to({x:487.55},0).wait(1).to({x:486.7},0).wait(1).to({x:485.85},0).wait(1).to({x:485},0).wait(1).to({x:484.1},0).wait(1).to({x:483.25},0).wait(1).to({x:482.4},0).wait(1).to({x:481.55},0).wait(1).to({x:480.65},0).wait(1).to({x:479.8},0).wait(1).to({x:478.95},0).wait(1).to({x:478.1},0).wait(1).to({x:477.25},0).wait(1).to({x:476.35},0).wait(1).to({x:475.5},0).wait(1).to({x:474.65},0).wait(1).to({x:473.8},0).wait(1).to({x:472.95},0).wait(1).to({x:472.05},0).wait(1).to({x:471.2},0).wait(1).to({x:470.35},0).wait(1).to({x:469.5},0).wait(1).to({x:468.65},0).wait(1).to({x:467.75},0).wait(1).to({x:466.9},0).wait(1).to({x:466.05},0).wait(1).to({x:465.2},0).wait(1).to({x:464.35},0).wait(1).to({x:463.45},0).wait(1).to({x:462.6},0).wait(1).to({x:461.75},0).wait(1).to({x:460.9},0).wait(1).to({x:460.05},0).wait(1).to({x:459.15},0).wait(1).to({x:458.3},0).wait(1).to({x:457.45},0).wait(1).to({x:456.6},0).wait(1).to({x:455.75},0).wait(1).to({x:454.85},0).wait(1).to({x:454},0).wait(1).to({x:453.15},0).wait(1).to({x:452.3},0).wait(1).to({x:451.4},0).wait(1).to({x:450.55},0).wait(1).to({x:449.7},0).wait(1).to({x:448.85},0).wait(1).to({x:448},0).wait(1).to({x:447.1},0).wait(1).to({x:446.25},0).wait(1).to({x:445.4},0).wait(1).to({x:444.55},0).wait(1).to({x:443.7},0).wait(1).to({x:442.8},0).wait(1).to({x:441.95},0).wait(1).to({x:441.1},0).wait(1).to({x:440.25},0).wait(1).to({x:439.4},0).wait(1).to({x:438.5},0).wait(1).to({x:437.65},0).wait(1).to({x:436.8},0).wait(1).to({x:435.95},0).wait(1).to({x:435.1},0).wait(1).to({x:434.2},0).wait(1).to({x:433.35},0).wait(1).to({x:432.5},0).wait(1).to({x:431.65},0).wait(1).to({x:430.8},0).wait(1).to({x:429.9},0).wait(1).to({x:429.05},0).wait(1).to({x:428.2},0).wait(1).to({x:427.35},0).wait(1).to({x:426.45},0).wait(1).to({x:425.6},0).wait(1).to({x:424.75},0).wait(1).to({x:423.9},0).wait(1).to({x:423.05},0).wait(1).to({x:422.15},0).wait(1).to({x:421.3},0).wait(1).to({x:420.45},0).wait(1).to({x:419.6},0).wait(1).to({x:418.75},0).wait(1).to({x:417.85},0).wait(1).to({x:417},0).wait(1).to({x:416.15},0).wait(1).to({x:415.3},0).wait(1).to({x:414.45},0).wait(1).to({x:413.55},0).wait(1).to({x:412.7},0).wait(1).to({x:411.85},0).wait(1).to({x:411},0).wait(1).to({x:410.15},0).wait(1).to({x:409.25},0).wait(1).to({x:408.4},0).wait(1).to({x:407.55},0).wait(1).to({x:406.7},0).wait(1).to({x:405.85},0).wait(1).to({x:404.95},0).wait(1).to({x:404.1},0).wait(1).to({x:403.25},0).wait(1).to({x:402.4},0).wait(1).to({x:401.55},0).wait(1).to({x:400.65},0).wait(1).to({x:399.8},0).wait(1).to({x:398.95},0).wait(1).to({x:398.1},0).wait(1).to({x:397.2},0).wait(1).to({x:396.35},0).wait(1).to({x:395.5},0).wait(1).to({x:394.65},0).wait(1).to({x:393.8},0).wait(1).to({x:392.9},0).wait(1).to({x:392.05},0).wait(1).to({x:391.2},0).wait(1).to({x:390.35},0).wait(1).to({x:389.5},0).wait(1).to({x:388.6},0).wait(1).to({x:387.75},0).wait(1).to({x:386.9},0).wait(1).to({x:386.05},0).wait(1).to({x:385.2},0).wait(1).to({x:384.3},0).wait(1).to({x:383.45},0).wait(1).to({x:382.6},0).wait(1).to({x:381.75},0).wait(1).to({x:380.9},0).wait(1).to({x:380},0).wait(1).to({x:379.15},0).wait(1).to({x:378.3},0).wait(1).to({x:377.45},0).wait(1).to({x:376.6},0).wait(1).to({x:375.7},0).wait(1).to({x:374.85},0).wait(1).to({x:374},0).wait(1).to({x:373.15},0).wait(1).to({x:372.3},0).wait(1).to({x:371.4},0).wait(1).to({x:370.55},0).wait(1).to({x:369.7},0).wait(1).to({x:368.85},0).wait(1).to({x:367.95},0).wait(1).to({x:367.1},0).wait(1).to({x:366.25},0).wait(1).to({x:365.4},0).wait(1).to({x:364.55},0).wait(1).to({x:363.65},0).wait(1).to({x:362.8},0).wait(1).to({x:361.95},0).wait(1).to({x:361.1},0).wait(1).to({x:360.25},0).wait(1).to({x:359.35},0).wait(1).to({x:358.5},0).wait(1).to({x:357.65},0).wait(1).to({x:356.8},0).wait(1).to({x:355.95},0).wait(1).to({x:355.05},0).wait(1).to({x:354.2},0).wait(1).to({x:353.35},0).wait(1).to({x:352.5},0).wait(1).to({x:351.65},0).wait(1).to({x:350.75},0).wait(1).to({x:349.9},0).wait(1).to({x:349.05},0).wait(1).to({x:348.2},0).wait(1).to({x:347.35},0).wait(1).to({x:346.45},0).wait(1).to({x:345.6},0).wait(1).to({x:344.75},0).wait(1).to({x:343.9},0).wait(1).to({x:343},0).wait(1).to({x:342.15},0).wait(1).to({x:341.3},0).wait(1).to({x:340.45},0).wait(1).to({x:339.6},0).wait(1).to({x:338.7},0).wait(1).to({x:337.85},0).wait(1).to({x:337},0).wait(1).to({x:336.15},0).wait(1).to({x:335.3},0).wait(1).to({x:334.4},0).wait(1).to({x:333.55},0).wait(1).to({x:332.7},0).wait(1).to({x:331.85},0).wait(1).to({x:331},0).wait(1).to({x:330.1},0).wait(1).to({x:329.25},0).wait(1).to({x:328.4},0).wait(1).to({x:327.55},0).wait(1).to({x:326.7},0).wait(1).to({x:325.8},0).wait(1).to({x:324.95},0).wait(1).to({x:324.1},0).wait(1).to({x:323.25},0).wait(1).to({x:322.4},0).wait(1).to({x:321.5},0).wait(1).to({x:320.65},0).wait(1).to({x:319.8},0).wait(1).to({x:318.95},0).wait(1).to({x:318.1},0).wait(1).to({x:317.2},0).wait(1).to({x:316.35},0).wait(1).to({x:315.5},0).wait(1).to({x:314.65},0).wait(1).to({x:313.75},0).wait(1).to({x:312.9},0).wait(1).to({x:312.05},0).wait(1).to({x:311.2},0).wait(1).to({x:310.35},0).wait(1).to({x:309.45},0).wait(1).to({x:308.6},0).wait(1).to({x:307.75},0).wait(1).to({x:306.9},0).wait(1).to({x:306.05},0).wait(1).to({x:305.15},0).wait(1).to({x:304.3},0).wait(1).to({x:303.45},0).wait(1).to({x:302.6},0).wait(1).to({x:301.75},0).wait(1).to({x:300.85},0).wait(1).to({x:300},0).wait(1).to({x:299.15},0).wait(1).to({x:298.3},0).wait(1).to({x:297.45},0).wait(1).to({x:296.55},0).wait(1).to({x:295.7},0).wait(1).to({x:294.85},0).wait(1).to({x:294},0).wait(1).to({x:293.15},0).wait(1).to({x:292.25},0).wait(1).to({x:291.4},0).wait(1).to({x:290.55},0).wait(1).to({x:289.7},0).wait(1).to({x:288.85},0).wait(1).to({x:287.95},0).wait(1).to({x:287.1},0).wait(1).to({x:286.25},0).wait(1).to({x:285.4},0).wait(1).to({x:284.5},0).wait(1).to({x:283.65},0).wait(1).to({x:282.8},0).wait(1).to({x:281.95},0).wait(1).to({x:281.1},0).wait(1).to({x:280.2},0).wait(1).to({x:279.35},0).wait(1).to({x:278.5},0).wait(1).to({x:277.65},0).wait(1).to({x:276.8},0).wait(1).to({x:275.9},0).wait(1).to({x:275.05},0).wait(1).to({x:274.2},0).wait(1).to({x:273.35},0).wait(1).to({x:272.5},0).wait(1).to({x:271.6},0).wait(1).to({x:270.75},0).wait(1).to({x:269.9},0).wait(1).to({x:269.05},0).wait(1).to({x:268.2},0).wait(1).to({x:267.3},0).wait(1).to({x:266.45},0).wait(1).to({x:265.6},0).wait(1).to({x:264.75},0).wait(1).to({x:263.9},0).wait(1).to({x:263},0).wait(1).to({x:262.15},0).wait(1).to({x:261.3},0).wait(1).to({x:260.45},0).wait(1).to({x:259.55},0).wait(1).to({x:258.7},0).wait(1).to({x:257.85},0).wait(1).to({x:257},0).wait(1).to({x:256.15},0).wait(1).to({x:255.25},0).wait(1).to({x:254.4},0).wait(1).to({x:253.55},0).wait(1).to({x:252.7},0).wait(1).to({x:251.85},0).wait(1).to({x:250.95},0).wait(1).to({x:250.1},0).wait(1).to({x:249.25},0).wait(1).to({x:248.4},0).wait(1).to({x:247.55},0).wait(1).to({x:246.65},0).wait(1).to({x:245.8},0).wait(1).to({x:244.95},0).wait(1).to({x:244.1},0).wait(1).to({x:243.25},0).wait(1).to({x:242.35},0).wait(1).to({x:241.5},0).wait(1).to({x:240.65},0).wait(1).to({x:239.8},0).wait(1).to({x:238.95},0).wait(1).to({x:238.05},0).wait(1).to({x:237.2},0).wait(1).to({x:236.35},0).wait(1).to({x:235.5},0).wait(1).to({x:234.65},0).wait(1).to({x:233.75},0).wait(1).to({x:232.9},0).wait(1).to({x:232.05},0).wait(1).to({x:231.2},0).wait(1).to({x:230.3},0).wait(1).to({x:229.45},0).wait(1).to({x:228.6},0).wait(1).to({x:227.75},0).wait(1).to({x:226.9},0).wait(1).to({x:226},0).wait(1).to({x:225.15},0).wait(1).to({x:224.3},0).wait(1).to({x:223.45},0).wait(1).to({x:222.6},0).wait(1).to({x:221.7},0).wait(1).to({x:220.85},0).wait(1).to({x:220},0).wait(1).to({x:219.15},0).wait(1).to({x:218.3},0).wait(1).to({x:217.4},0).wait(1).to({x:216.55},0).wait(1).to({x:215.7},0).wait(1).to({x:214.85},0).wait(1).to({x:214},0).wait(1).to({x:213.1},0).wait(1).to({x:212.25},0).wait(1).to({x:211.4},0).wait(1).to({x:210.55},0).wait(1).to({x:209.7},0).wait(1).to({x:208.8},0).wait(1).to({x:207.95},0).wait(1).to({x:207.1},0).wait(1).to({x:206.25},0).wait(1).to({x:205.4},0).wait(1).to({x:204.5},0).wait(1).to({x:203.65},0).wait(1).to({x:202.8},0).wait(1).to({x:201.95},0).wait(1).to({x:201.05},0).wait(1).to({x:200.2},0).wait(1).to({x:199.35},0).wait(1).to({x:198.5},0).wait(1).to({x:197.65},0).wait(1).to({x:196.75},0).wait(1).to({x:195.9},0).wait(1).to({x:195.05},0).wait(1).to({x:194.2},0).wait(1).to({x:193.35},0).wait(1).to({x:192.45},0).wait(1).to({x:191.6},0).wait(1).to({x:190.75},0).wait(1).to({x:189.9},0).wait(1).to({x:189.05},0).wait(1).to({x:188.15},0).wait(1).to({x:187.3},0).wait(1).to({x:186.45},0).wait(1).to({x:185.6},0).wait(1).to({x:184.75},0).wait(1).to({x:183.85},0).wait(1).to({x:183},0).wait(1).to({x:182.15},0).wait(1).to({x:181.3},0).wait(1).to({x:180.45},0).wait(1).to({x:179.55},0).wait(1).to({x:178.7},0).wait(1).to({x:177.85},0).wait(1).to({x:177},0).wait(1).to({x:176.1},0).wait(1).to({x:175.25},0).wait(1).to({x:174.4},0).wait(1).to({x:173.55},0).wait(1).to({x:172.7},0).wait(1).to({x:171.8},0).wait(1).to({x:170.95},0).wait(1).to({x:170.1},0).wait(1).to({x:169.25},0).wait(1).to({x:168.4},0).wait(1).to({x:167.5},0).wait(1).to({x:166.65},0).wait(1).to({x:165.8},0).wait(1).to({x:164.95},0).wait(1).to({x:164.1},0).wait(1).to({x:163.2},0).wait(1).to({x:162.35},0).wait(1).to({x:161.5},0).wait(1).to({x:160.65},0).wait(1).to({x:159.8},0).wait(1).to({x:158.9},0).wait(1).to({x:158.05},0).wait(1).to({x:157.2},0).wait(1).to({x:156.35},0).wait(1).to({x:155.5},0).wait(1).to({x:154.6},0).wait(1).to({x:153.75},0).wait(1).to({x:152.9},0).wait(1).to({x:152.05},0).wait(1).to({x:151.2},0).wait(1).to({x:150.3},0).wait(1).to({x:149.45},0).wait(1).to({x:148.6},0).wait(1).to({x:147.75},0).wait(1).to({x:146.85},0).wait(1).to({x:146},0).wait(1).to({x:145.15},0).wait(1).to({x:144.3},0).wait(1).to({x:143.45},0).wait(1).to({x:142.55},0).wait(1).to({x:141.7},0).wait(1).to({x:140.85},0).wait(1).to({x:140},0).wait(1).to({x:139.15},0).wait(1).to({x:138.25},0).wait(1).to({x:137.4},0).wait(1).to({x:136.55},0).wait(1).to({x:135.7},0).wait(1).to({x:134.85},0).wait(1).to({x:133.95},0).wait(1).to({x:133.1},0).wait(1).to({x:132.25},0).wait(1).to({x:131.4},0).wait(1).to({x:130.55},0).wait(1).to({x:129.65},0).wait(1).to({x:128.8},0).wait(1).to({x:127.95},0).wait(1).to({x:127.1},0).wait(1).to({x:126.25},0).wait(1).to({x:125.35},0).wait(1).to({x:124.5},0).wait(1).to({x:123.65},0).wait(1).to({x:122.8},0).wait(1).to({x:121.95},0).wait(1).to({x:121.05},0).wait(1).to({x:120.2},0).wait(1).to({x:119.35},0).wait(1).to({x:118.5},0).wait(1).to({x:117.6},0).wait(1).to({x:116.75},0).wait(1).to({x:115.9},0).wait(1).to({x:115.05},0).wait(1).to({x:114.2},0).wait(1).to({x:113.3},0).wait(1).to({x:112.45},0).wait(1).to({x:111.6},0).wait(1).to({x:110.75},0).wait(1).to({x:109.9},0).wait(1).to({x:109},0).wait(1).to({x:108.15},0).wait(1).to({x:107.3},0).wait(1).to({x:106.45},0).wait(1).to({x:105.6},0).wait(1).to({x:104.7},0).wait(1).to({x:103.85},0).wait(1).to({x:103},0).wait(1).to({x:102.15},0).wait(1).to({x:101.3},0).wait(1).to({x:100.4},0).wait(1).to({x:99.55},0).wait(1).to({x:98.7},0).wait(1).to({x:97.85},0).wait(1).to({x:97},0).wait(1).to({x:96.1},0).wait(1).to({x:95.25},0).wait(1).to({x:94.4},0).wait(1).to({x:93.55},0).wait(1).to({x:92.65},0).wait(1).to({x:91.8},0).wait(1).to({x:90.95},0).wait(1).to({x:90.1},0).wait(1).to({x:89.25},0).wait(1).to({x:88.35},0).wait(1).to({x:87.5},0).wait(1).to({x:86.65},0).wait(1).to({x:85.8},0).wait(1).to({x:84.95},0).wait(1).to({x:84.05},0).wait(1).to({x:83.2},0).wait(1).to({x:82.35},0).wait(1).to({x:81.5},0).wait(1).to({x:80.65},0).wait(1).to({x:79.75},0).wait(1).to({x:78.9},0).wait(1).to({x:78.05},0).wait(1).to({x:77.2},0).wait(1).to({x:76.35},0).wait(1).to({x:75.45},0).wait(1).to({x:74.6},0).wait(1).to({x:73.75},0).wait(1).to({x:72.9},0).wait(1).to({x:72.05},0).wait(1).to({x:71.15},0).wait(1).to({x:70.3},0).wait(1).to({x:69.45},0).wait(1).to({x:68.6},0).wait(1).to({x:67.75},0).wait(1).to({x:66.85},0).wait(1).to({x:66},0).wait(1).to({x:65.15},0).wait(1).to({x:64.3},0).wait(1).to({x:63.4},0).wait(1).to({x:62.55},0).wait(1).to({x:61.7},0).wait(1).to({x:60.85},0).wait(1).to({x:60},0).wait(1).to({x:59.1},0).wait(1).to({x:58.25},0).wait(1).to({x:57.4},0).wait(1).to({x:56.55},0).wait(1).to({x:55.7},0).wait(1).to({x:54.8},0).wait(1).to({x:53.95},0).wait(1).to({x:53.1},0).wait(1).to({x:52.25},0).wait(1).to({x:51.4},0).wait(1).to({x:50.5},0).wait(1).to({x:49.65},0).wait(1).to({x:48.8},0).wait(1).to({x:47.95},0).wait(1).to({x:47.1},0).wait(1).to({x:46.2},0).wait(1).to({x:45.35},0).wait(1).to({x:44.5},0).wait(1).to({x:43.65},0).wait(1).to({x:42.8},0).wait(1).to({x:41.9},0).wait(1).to({x:41.05},0).wait(1).to({x:40.2},0).wait(1).to({x:39.35},0).wait(1).to({x:38.5},0).wait(1).to({x:37.6},0).wait(1).to({x:36.75},0).wait(1).to({x:35.9},0).wait(1).to({x:35.05},0).wait(1).to({x:34.15},0).wait(1).to({x:33.3},0).wait(1).to({x:32.45},0).wait(1).to({x:31.6},0).wait(1).to({x:30.75},0).wait(1).to({x:29.85},0).wait(1).to({x:29},0).wait(1).to({x:28.15},0).wait(1).to({x:27.3},0).wait(1).to({x:26.45},0).wait(1).to({x:25.55},0).wait(1).to({x:24.7},0).wait(1).to({x:23.85},0).wait(1).to({x:23},0).wait(1).to({x:22.15},0).wait(1).to({x:21.25},0).wait(1).to({x:20.4},0).wait(1).to({x:19.55},0).wait(1).to({x:18.7},0).wait(1).to({x:17.85},0).wait(1).to({x:16.95},0).wait(1).to({x:16.1},0).wait(1).to({x:15.25},0).wait(1).to({x:14.4},0).wait(1).to({x:13.55},0).wait(1).to({x:12.65},0).wait(1).to({x:11.8},0).wait(1).to({x:10.95},0).wait(1).to({x:10.1},0).wait(1).to({x:9.2},0).wait(1).to({x:8.35},0).wait(1).to({x:7.5},0).wait(1).to({x:6.65},0).wait(1).to({x:5.8},0).wait(1).to({x:4.9},0).wait(1).to({x:4.05},0).wait(1).to({x:3.2},0).wait(1).to({x:2.35},0).wait(1).to({x:1.5},0).wait(1).to({x:0.6},0).wait(1).to({x:-0.25},0).wait(1).to({x:-1.1},0).wait(1).to({x:-1.95},0).wait(1).to({x:-2.8},0).wait(1).to({x:-3.7},0).wait(1).to({x:-4.55},0).wait(1).to({x:-5.4},0).wait(1).to({x:-6.25},0).wait(1).to({x:-7.1},0).wait(1).to({x:-8},0).wait(1).to({x:-8.85},0).wait(1).to({x:-9.7},0).wait(1).to({x:-10.55},0).wait(1).to({x:-11.4},0).wait(1).to({x:-12.3},0).wait(1).to({x:-13.15},0).wait(1).to({x:-14},0).wait(1).to({x:-14.85},0).wait(1).to({x:-15.7},0).wait(1).to({x:-16.6},0).wait(1).to({x:-17.45},0).wait(1).to({x:-18.3},0).wait(1).to({x:-19.15},0).wait(1).to({x:-20.05},0).wait(1).to({x:-20.9},0).wait(1).to({x:-21.75},0).wait(1).to({x:-22.6},0).wait(1).to({x:-23.45},0).wait(1).to({x:-24.35},0).wait(1).to({x:-25.2},0).wait(1).to({x:-26.05},0).wait(1).to({x:-26.9},0).wait(1).to({x:-27.75},0).wait(1).to({x:-28.65},0).wait(1).to({x:-29.5},0).wait(1).to({x:-30.35},0).wait(1).to({x:-31.2},0).wait(1).to({x:-32.05},0).wait(1).to({x:-32.95},0).wait(1).to({x:-33.8},0).wait(1).to({x:-34.65},0).wait(1).to({x:-35.5},0).wait(1).to({x:-36.35},0).wait(1).to({x:-37.25},0).wait(1).to({x:-38.1},0).wait(1).to({x:-38.95},0).wait(1).to({x:-39.8},0).wait(1).to({x:-40.65},0).wait(1).to({x:-41.55},0).wait(1).to({x:-42.4},0).wait(1).to({x:-43.25},0).wait(1).to({x:-44.1},0).wait(1).to({x:-44.95},0).wait(1).to({x:-45.85},0).wait(1).to({x:-46.7},0).wait(1).to({x:-47.55},0).wait(1).to({x:-48.4},0).wait(1).to({x:-49.3},0).wait(1).to({x:-50.15},0).wait(1).to({x:-51},0).wait(1).to({x:-51.85},0).wait(1).to({x:-52.7},0).wait(1).to({x:-53.6},0).wait(1).to({x:-54.45},0).wait(1).to({x:-55.3},0).wait(1).to({x:-56.15},0).wait(1).to({x:-57},0).wait(1).to({x:-57.9},0).wait(1).to({x:-58.75},0).wait(1).to({x:-59.6},0).wait(1).to({x:-60.45},0).wait(1).to({x:-61.3},0).wait(1).to({x:-62.2},0).wait(1).to({x:-63.05},0).wait(1).to({x:-63.9},0).wait(1).to({x:-64.75},0).wait(1).to({x:-65.6},0).wait(1).to({x:-66.5},0).wait(1).to({x:-67.35},0).wait(1).to({x:-68.2},0).wait(1).to({x:-69.05},0).wait(1).to({x:-69.9},0).wait(1).to({x:-70.8},0).wait(1).to({x:-71.65},0).wait(1).to({x:-72.5},0).wait(1).to({x:-73.35},0).wait(1).to({x:-74.25},0).wait(1).to({x:-75.1},0).wait(1).to({x:-75.95},0).wait(1).to({x:-76.8},0).wait(1).to({x:-77.65},0).wait(1).to({x:-78.55},0).wait(1).to({x:-79.4},0).wait(1).to({x:-80.25},0).wait(1).to({x:-81.1},0).wait(1).to({x:-81.95},0).wait(1).to({x:-82.85},0).wait(1).to({x:-83.7},0).wait(1).to({x:-84.55},0).wait(1).to({x:-85.4},0).wait(1).to({x:-86.25},0).wait(1).to({x:-87.15},0).wait(1).to({x:-88},0).wait(1).to({x:-88.85},0).wait(1).to({x:-89.7},0).wait(1).to({x:-90.55},0).wait(1).to({x:-91.45},0).wait(1).to({x:-92.3},0).wait(1).to({x:-93.15},0).wait(1).to({x:-94},0).wait(1).to({x:-94.85},0).wait(1).to({x:-95.75},0).wait(1).to({x:-96.6},0).wait(1).to({x:-97.45},0).wait(1).to({x:-98.3},0).wait(1).to({x:-99.15},0).wait(1).to({x:-100.05},0).wait(1).to({x:-100.9},0).wait(1).to({x:-101.75},0).wait(1).to({x:-102.6},0).wait(1).to({x:-103.5},0).wait(1).to({x:-104.35},0).wait(1).to({x:-105.2},0).wait(1).to({x:-106.05},0).wait(1).to({x:-106.9},0).wait(1).to({x:-107.8},0).wait(1).to({x:-108.65},0).wait(1).to({x:-109.5},0).wait(1).to({x:-110.35},0).wait(1).to({x:-111.2},0).wait(1).to({x:-112.1},0).wait(1).to({x:-112.95},0).wait(1).to({x:-113.8},0).wait(1).to({x:-114.65},0).wait(1).to({x:-115.5},0).wait(1).to({x:-116.4},0).wait(1).to({x:-117.25},0).wait(1).to({x:-118.1},0).wait(1).to({x:-118.95},0).wait(1).to({x:-119.8},0).wait(1).to({x:-120.7},0).wait(1).to({x:-121.55},0).wait(1).to({x:-122.4},0).wait(1).to({x:-123.25},0).wait(1).to({x:-124.1},0).wait(1).to({x:-125},0).wait(1).to({x:-125.85},0).wait(1).to({x:-126.7},0).wait(1).to({x:-127.55},0).wait(1).to({x:-128.4},0).wait(1).to({x:-129.3},0).wait(1).to({x:-130.15},0).wait(1).to({x:-131},0).wait(1).to({x:-131.85},0).wait(1).to({x:-132.75},0).wait(1).to({x:-133.6},0).wait(1).to({x:-134.45},0).wait(1).to({x:-135.3},0).wait(1).to({x:-136.15},0).wait(1).to({x:-137.05},0).wait(1).to({x:-137.9},0).wait(1).to({x:-138.75},0).wait(1).to({x:-139.6},0).wait(1).to({x:-140.45},0).wait(1).to({x:-141.35},0).wait(1).to({x:-142.2},0).wait(1).to({x:-143.05},0).wait(1).to({x:-143.9},0).wait(1).to({x:-144.75},0).wait(1).to({x:-145.65},0).wait(1).to({x:-146.5},0).wait(1).to({x:-147.35},0).wait(1).to({x:-148.2},0).wait(1).to({x:-149.05},0).wait(1).to({x:-149.95},0).wait(1).to({x:-150.8},0).wait(1).to({x:-151.65},0).wait(1).to({x:-152.5},0).wait(1).to({x:-153.35},0).wait(1).to({x:-154.25},0).wait(1).to({x:-155.1},0).wait(1).to({x:-155.95},0).wait(1).to({x:-156.8},0).wait(1).to({x:-157.7},0).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2B3B3").s().p("ABcNaIAAjnIBMABIAAozIBeACIAAivIA/ACIAACdIA5ACIABl7IBbgBIBeA0IBjADIgBHRIBXADIAAjYIAoABIAABZIA7ACIAAivIAlABIAAhLIAgABIAAAoIAmABIAAA0IAvACIgBCLIApBRIAADCIArANIAADlIBNABIgCkHIAcgJIAAoSIAzAAIAqg4IBwAAIAAA3IB8AAIAAC0IBPABIAAOIgAVIFzIAQABIAAhAIgQAAgAGBFMIAQAAIAAg6IgQAAgADOEjIAQABIABg6IgRgBgAJVC7IAQABIAAg6IgQgBgADOC7IARAAIAAg5IgRgBgAHwC4IAAg6IgRAAIAAA6IARAAgAGlC2IASAAIAAg6IgRAAgAMGC1IARAAIAAg5IgRgBgAGaC1IgBg5IgQgBIAAA6IARAAgAVUCsIAQAAIAAg/IgPgBgATbCZIAQAAIAAg/IgQgBgAHgA4IAQABIAAg5IgQgBgAHDA3IAQABIAAg5IgQgBgAGmA2IARABIAAg5IgRgBgAGJA2IARAAIAAg5IgRAAgAInABIARAAIAAg5IgQAAgATFhAIAWACIABhdIgXAAgAUmhAIAXAAIAAhcIgXgBgAWghXIAQAAIAAg/IgQAAgAV9hYIAQAAIAAg/IgQgBgAVahZIAQAAIAAg/IgPAAgAJdifIARAAIAAg6IgQAAgAJBigIAQAAIAAg5IgQgBgAIkihIARABIAAg6IgRgBgAIHiiIARABIAAg6IgRAAgA4/NaIAAnbIBIAAIAAjxIBOAAIACtoIAyABIBJhcICAADIAABXIB1ADIAAh8IBUgFIAsAtIAAB0IBZACIgBEEIBQAEIgBH6IBCACIAAEIIBHAAIABoOIBLACIAAhQIB6ADIBEA3IAAA0IBAACIAADfIA4BMIAABhIBSACIgBF6IA7AAIAADogAl0KcIASAAIAAg6IgRAAgAkIJHIARABIABg6IgSgBgAnNI9IASAAIAAg6IgSAAgAsHI3IAAiBIgkgBIAACCIAkAAgAtbH8IAVAAIAAhGIgVgBgAuNH8IAVAAIAAhGIgVgBgAu8H8IAVAAIAAhGIgVgBgAkIHfIASAAIAAg5IgSgBgAnNGmIASABIAAg6IgSgBgAyeGFIAbAAIAAhpIgbgBgAzWGFIAaAAIAAhpIgagBgA19F6IAAiTIgmgBIAACTIAmABgAkIFlIASABIAAg6IgSAAgAo0FHIASABIAAg7IgSAAgApTFGIASABIAAg6IgSgBgApyFFIASABIAAg6IgRAAgAnMEQIASAAIAAg6IgSgBgAvpD/IAaABIAAhpIgagBgAwhD/IAaABIAAhpIgagBgAxfD/IAcABIABhoIgdgBgAs0D8IAcgCIAAhaIgcgBgApBCwIATABIAAg7IgSAAgAozAOIASABIAAg5IgRgBgApSANIASABIAAg5IgSgBgApxAMIASABIAAg5IgSAAgAmdgfIARABIABg6IgSgBgAoyhIIASAAIAAg5IgSgBgAxKhIIAcAAIAAhpIgcAAgApShJIASABIAAg6IgSgBgApxhJIASAAIAAg6IgSAAgA0ihnIAcABIABhpIgcgBgA1YhnIAbABIAAhpIgbgBgA10nHIApABIAAiYIgpgBgAycnOIAoABIAAiYIgogCgAvEn0IAcABIAAhpIgcAAgAwCn1IAdAAIAAhoIgdgBgAw/n3IAcABIAAhpIgcAAg");
	this.shape_2.setTransform(188.25,214.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCE8FD").s().p("ABcWeMAAAgs7IXkAAMAAAAs7gA4/WeMAAAgs7IXGAAMAAAAs7g");
	this.shape_3.setTransform(188.25,156.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2B3B3").s().p("ABJWxMAAAgthIYKAAMAAAAthgA5SWxMAAAgthIXsAAMAAAAthg");
	this.shape_4.setTransform(186.325,158.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0D6C1").s().p("A9GBgIAAi/MA6NAAAIAAC/g");
	this.shape_5.setTransform(186.325,325.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0D6C1").s().p("A7PYvMAAAgxdMA2fAAAMAAAAxdg");
	this.shape_6.setTransform(186.325,158.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33CC99").s().p("A5/XBMAAAguBMAz/AAAMAAAAuBg");
	this.shape_7.setTransform(186.95,156.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1262));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372.7,335);


(lib.Smoke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fire
	this.instance = new lib.FireMovie1();
	this.instance.setTransform(-157.2,28.4,1,1,0,0,0,28.2,20.9);
	this.instance.filters = [new cjs.BlurFilter(61, 61, 1)];
	this.instance.cache(-2,-2,61,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:21,y:28.5},0).wait(2).to({regX:28.3,regY:20.9,x:-157.1,y:28.4},0).wait(2).to({regX:28.2,x:-157.2},0).wait(3).to({regY:21,y:28.5},0).wait(2).to({regX:28.3,regY:20.9,x:-157.1,y:28.4},0).wait(2).to({regX:28.2,x:-157.2},0).wait(2).to({regY:21,y:28.5},0).wait(2).to({regY:20.9,y:28.4},0).wait(2));

	// Smoke
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.498)").s().p("AiBAsQAAgEgCgMQgBgKABgGIAFgJIALgQQACgFADACQgDAJABAIQACANAAACQgBAEgEAHIgKAQIgDACIgBgBgABxAaQAAgEgDgJQgEgJACgEIAEgKIABgIQACgHAGgIIAGgJQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQADAEgDAHIgEALQgBADACAFIACAGIACAGQAAAEgEAFIgLARQAAABgBABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgBg");
	this.shape.setTransform(-155.1307,12.3607);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,204,0.498)").s().p("AiEBOIACgJIAEgHIAGgQIABgKQAAgHgCgDIgEgFIgBgGIAAgeIADgHQAFgLAHgLIAIgLIABABIgDAKIgCAFIAAALIABAZQADACACAEIAAARIgFALIgBAHIgEAGIgBAFIgFALIgMASgAACBDIAAgGQAAgQABgDQABgFAFgIIAKgQIACgCQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQgDADgBAHIAAAVQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgLASQgCADgCABQgEAAgBgDgABqA5IADgHQAIgSgFgRIgHgsQgBgJAAgGIACgHIAOgYQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIgCAKQAAAKACAJIACAVIAEAPIACANQAAALgDAHIgEAKIgQAaIgBACg");
	this.shape_1.setTransform(-155.85,8.9775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.498)").s().p("AgHB9IABgTQACgSAEgMIAEgUIACgHIACgKQAAgDgDgDIgFgFQgFgIACgNIADgIIAMgXQAEgDABABQgCAIAAAHQAAAHABADIAHAIQAFAEAAAGIgJAdIgFASIgEAjQgBAFgEAEIgKASgAiIBfQAIgigBgRIgDgRIgBgUIAAgTQAAghACgIQADgOAKgTQgGgDABgJQABgGAEgFIAHgLQADgFADABQgBADADAEQADAFAAACQAAACgCADIgDAGIgEAKQgCAFgCAOIgBAbQAAAgACAOIACAXQAAAHgDAWQgBAIgDAHIgNAWIgDADIgBAAIgCAAgABkBWQACgGgBgIIgBgOIAAgtIADgNIAEgMQAHgJACgGIABgLQABgNgDgIIgEgKQgDgGABgEQAAgEAEgGIAKgPQABgBABgBQAAgBABAAQAAAAABAAQAAAAAAABQABAKAFAKIACABIABAWQABAJgCAHQgCAHgKANQgFALABAUIAAAqIAAAMQgCAGgGAIIgJAOgAAwgBIgDgRIABgOIABgHIgDgMQgBgFACgFQABgDADgFIAGgIQAFgJADABIACASQADABgCAHQgEAMADAMIABAHIgDAIIgNAUg");
	this.shape_2.setTransform(-155.5333,2.8475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.498)").s().p("AgFB0QABgKAFgMIAEgIIAAgJIAAgLIgDgJIAAgJIgCgMQgBgJAFgLIALgQIACgEQABAAAAAAQABgBAAAAQABAAAAAAQABABAAAAQgEAHADAUIADAPIABARQABAGgCAEIgDAIIgGALIgBAGIgEAIIgLASgABgA7QgCgDABgGIAEgJIABgFIAFgMIAFgIIACgGIAFgIQAEgIgCgQQgDgCgBgGIgBgMIACgJIAFgJIAJgPIACgCQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQgDAIABAIIABAHQABAFADACIAAALQABAGgBAFIgNAZIgFAJIgDALIgCAFQgCADAAACQAAADAFAFIgPAYIgDAAQgDAAgBgDgAiCAeIgFgPIAAgJIgCgYQAAgJACgFIAHgLIAHgTIAAgHIADgOIAFgMIAOgTIACAAQgEAJgBAKIgBAIIgCALIgMAYQgCAJAAAFIADAVIAAAJIAEAIIABADIgCAFIgOAWgAAvADIgBgDQgBgMAMgUIALgQQACgFACACQAAAEgEAGQgFALADAKIgPAZIgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_3.setTransform(-156.2167,-0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(204,204,204,0.498)").s().p("AgIBlQAFgQgBgSIAAgOQACgGADgFIARgaIADABQgGAGgBALIAAATQAAAIgCAHQAAAGgDAFIgGALIgGALgAAnA2IADgcIACgLQADgHAGgIIAOgTIADABQgKAMgBAeIgBAHIgEAHIgKAQgABsAtQACgGAAgHIgCgRIgEghIAAgMQACgFAGgMQAGgLABgHIABgIIAEgIIAKgPQACgFACACQABAGgEAPIgBAFIgEAHIgGALQgDAGACARIAFAdQACAQgDAIIgPAZgAiKANQADgGABgHIABgNIAKgfIAFgKIAFgIIACgIIAQgYQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABIgCAJIgDAHIgHAKIgFAMIgGAWIgBAOQgBAFgFAJIgLARIgCACIgBABIgCgBg");
	this.shape_4.setTransform(-155.9969,-5.5058);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(204,204,204,0.498)").s().p("AgIBLQgBgIADgFIANgYQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQgDAIADAHIgPAYgAArAkQgCgGAHgMIAMgSIADAAQgCADAAAHIgEAJIgMASgAiEgVQgBgNACgIIAPgXIADgFQAEgCADACQgHAIgBAHIAAAHIgDAGIgNAVgABrgeIADgMIADgEQAIgQAKgMIADABIgHALIgCAHIgOAYIgCABIgBAAIgBAAg");
	this.shape_5.setTransform(-156.0643,-7.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,-54.5,189,173);


(lib.Scene_1_Window = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Window
	this.instance = new lib.Window();
	this.instance.setTransform(657.5,234.1,0.6891,0.6891,0,0,0,186.3,167.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(661));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Smoke_and_Fire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Smoke_and_Fire
	this.instance = new lib.Smoke();
	this.instance.setTransform(482.85,367.25,1,1,0,0,0,-155.1,12.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98).to({_off:false},0).wait(308).to({regX:-154.3,regY:13.2,scaleX:0.9997,scaleY:0.9997,y:367.35},0).to({_off:true},25).wait(161));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Fire_Upview = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fire_Upview
	this.instance = new lib.Smoke();
	this.instance.setTransform(663.25,589.1,12.5667,12.5667,0,0,0,-156.7,28.6);
	this.instance.compositeOperation = "lighten";

	this.instance_1 = new lib.Smoke();
	this.instance_1.setTransform(663.1,376,12.5675,12.5675,0,0,0,-156.7,28.6);
	this.instance_1.compositeOperation = "lighten";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},176).wait(77));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.Toasts = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,78,255,374,403,626,659,671];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.StartPlay = this.Buttons.StartPlay;
		var self=this;
		self.stop();
		
		self.StartPlay.addEventListener("click",StartPlay);
		
		function StartPlay() 
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		playSound("Mainmusic_mixdown");
	}
	this.frame_2 = function() {
		this.StartPlay = undefined;
	}
	this.frame_78 = function() {
		playSound("KitchenToasterLoading_01");
	}
	this.frame_255 = function() {
		playSound("clock_mixdown");
	}
	this.frame_374 = function() {
		playSound("ding");
	}
	this.frame_403 = function() {
		playSound("Woosh");
	}
	this.frame_626 = function() {
		playSound("eating_mixdown");
	}
	this.frame_659 = function() {
		this.replay = this.Buttons.replay;
		var self=this;
		self.stop();
		
		self.replay.addEventListener("click",PlayAgain);
		
		function PlayAgain() 
		{
				self.gotoAndPlay(1);
		}
	}
	this.frame_671 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(76).call(this.frame_78).wait(177).call(this.frame_255).wait(119).call(this.frame_374).wait(29).call(this.frame_403).wait(223).call(this.frame_626).wait(33).call(this.frame_659).wait(12).call(this.frame_671).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({scaleX:0.9962,scaleY:0.9962,x:639.1458,y:359.9323},0).wait(1).to({scaleX:0.9925,scaleY:0.9925,x:638.2917,y:359.8646},0).wait(1).to({scaleX:0.9887,scaleY:0.9887,x:637.4375,y:359.7969},0).wait(1).to({scaleX:0.985,scaleY:0.985,x:636.5833,y:359.7292},0).wait(1).to({scaleX:0.9812,scaleY:0.9812,x:635.7292,y:359.6615},0).wait(1).to({scaleX:0.9774,scaleY:0.9774,x:634.875,y:359.5938},0).wait(1).to({scaleX:0.9737,scaleY:0.9737,x:634.0208,y:359.526},0).wait(1).to({scaleX:0.9699,scaleY:0.9699,x:633.1667,y:359.4583},0).wait(1).to({scaleX:0.9661,scaleY:0.9661,x:632.3125,y:359.3906},0).wait(1).to({scaleX:0.9624,scaleY:0.9624,x:631.4583,y:359.3229},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:630.6042,y:359.2552},0).wait(1).to({scaleX:0.9549,scaleY:0.9549,x:629.75,y:359.1875},0).wait(1).to({scaleX:0.9511,scaleY:0.9511,x:628.8958,y:359.1198},0).wait(1).to({scaleX:0.9473,scaleY:0.9473,x:628.0417,y:359.0521},0).wait(1).to({scaleX:0.9436,scaleY:0.9436,x:627.1875,y:358.9844},0).wait(1).to({scaleX:0.9398,scaleY:0.9398,x:626.3333,y:358.9167},0).wait(1).to({scaleX:0.9361,scaleY:0.9361,x:625.4792,y:358.849},0).wait(1).to({scaleX:0.9323,scaleY:0.9323,x:624.625,y:358.7813},0).wait(1).to({scaleX:0.9285,scaleY:0.9285,x:623.7708,y:358.7135},0).wait(1).to({scaleX:0.9248,scaleY:0.9248,x:622.9167,y:358.6458},0).wait(1).to({scaleX:0.921,scaleY:0.921,x:622.0625,y:358.5781},0).wait(1).to({scaleX:0.9173,scaleY:0.9173,x:621.2083,y:358.5104},0).wait(1).to({scaleX:0.9135,scaleY:0.9135,x:620.3542,y:358.4427},0).wait(1).to({scaleX:0.9097,scaleY:0.9097,x:619.5,y:358.375},0).wait(1).to({scaleX:0.906,scaleY:0.906,x:618.6458,y:358.3073},0).wait(1).to({scaleX:0.9022,scaleY:0.9022,x:617.7917,y:358.2396},0).wait(1).to({scaleX:0.8984,scaleY:0.8984,x:616.9375,y:358.1719},0).wait(1).to({scaleX:0.8947,scaleY:0.8947,x:616.0833,y:358.1042},0).wait(1).to({scaleX:0.8909,scaleY:0.8909,x:615.2292,y:358.0365},0).wait(1).to({scaleX:0.8872,scaleY:0.8872,x:614.375,y:357.9688},0).wait(1).to({scaleX:0.8834,scaleY:0.8834,x:613.5208,y:357.901},0).wait(1).to({scaleX:0.8796,scaleY:0.8796,x:612.6667,y:357.8333},0).wait(1).to({scaleX:0.8759,scaleY:0.8759,x:611.8125,y:357.7656},0).wait(1).to({scaleX:0.8721,scaleY:0.8721,x:610.9583,y:357.6979},0).wait(1).to({scaleX:0.8684,scaleY:0.8684,x:610.1042,y:357.6302},0).wait(1).to({scaleX:0.8646,scaleY:0.8646,x:609.25,y:357.5625},0).wait(1).to({scaleX:0.8608,scaleY:0.8608,x:608.3958,y:357.4948},0).wait(1).to({scaleX:0.8571,scaleY:0.8571,x:607.5417,y:357.4271},0).wait(1).to({scaleX:0.8533,scaleY:0.8533,x:606.6875,y:357.3594},0).wait(1).to({scaleX:0.8495,scaleY:0.8495,x:605.8333,y:357.2917},0).wait(1).to({scaleX:0.8458,scaleY:0.8458,x:604.9792,y:357.224},0).wait(1).to({scaleX:0.842,scaleY:0.842,x:604.125,y:357.1563},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,x:603.2708,y:357.0885},0).wait(1).to({scaleX:0.8345,scaleY:0.8345,x:602.4167,y:357.0208},0).wait(1).to({scaleX:0.8307,scaleY:0.8307,x:601.5625,y:356.9531},0).wait(1).to({scaleX:0.827,scaleY:0.827,x:600.7083,y:356.8854},0).wait(1).to({scaleX:0.8232,scaleY:0.8232,x:599.8542,y:356.8177},0).wait(1).to({scaleX:0.8195,scaleY:0.8195,x:599,y:356.75},0).wait(1).to({regX:0.6,regY:0.6,scaleX:0.3231,scaleY:0.3231,x:547.9,y:349.95},0).wait(48).to({regX:0},0).wait(1).to({regY:0,scaleX:0.3224,scaleY:0.3224,x:547.4244,y:349.9229},0).wait(1).to({scaleX:0.3216,scaleY:0.3216,x:546.9487,y:350.0958},0).wait(1).to({scaleX:0.3208,scaleY:0.3208,x:546.4731,y:350.2687},0).wait(1).to({scaleX:0.3201,scaleY:0.3201,x:545.9974,y:350.4416},0).wait(1).to({scaleX:0.3193,scaleY:0.3193,x:545.5218,y:350.6145},0).wait(1).to({scaleX:0.3186,scaleY:0.3186,x:545.0462,y:350.7874},0).wait(1).to({scaleX:0.3178,scaleY:0.3178,x:544.5705,y:350.9603},0).wait(1).to({scaleX:0.317,scaleY:0.317,x:544.0949,y:351.1331},0).wait(1).to({scaleX:0.3163,scaleY:0.3163,x:543.6192,y:351.306},0).wait(1).to({scaleX:0.3155,scaleY:0.3155,x:543.1436,y:351.4789},0).wait(1).to({scaleX:0.3147,scaleY:0.3147,x:542.6679,y:351.6518},0).wait(1).to({scaleX:0.314,scaleY:0.314,x:542.1923,y:351.8247},0).wait(1).to({scaleX:0.3132,scaleY:0.3132,x:541.7167,y:351.9976},0).wait(1).to({scaleX:0.3125,scaleY:0.3125,x:541.241,y:352.1705},0).wait(1).to({scaleX:0.3117,scaleY:0.3117,x:540.7654,y:352.3434},0).wait(1).to({scaleX:0.3109,scaleY:0.3109,x:540.2897,y:352.5163},0).wait(1).to({scaleX:0.3102,scaleY:0.3102,x:539.8141,y:352.6892},0).wait(1).to({scaleX:0.3094,scaleY:0.3094,x:539.3385,y:352.8621},0).wait(1).to({scaleX:0.3086,scaleY:0.3086,x:538.8628,y:353.035},0).wait(1).to({scaleX:0.3079,scaleY:0.3079,x:538.3872,y:353.2079},0).wait(1).to({scaleX:0.3071,scaleY:0.3071,x:537.9115,y:353.3808},0).wait(1).to({scaleX:0.3064,scaleY:0.3064,x:537.4359,y:353.5537},0).wait(1).to({scaleX:0.3056,scaleY:0.3056,x:536.9603,y:353.7265},0).wait(1).to({scaleX:0.3048,scaleY:0.3048,x:536.4846,y:353.8994},0).wait(1).to({scaleX:0.3041,scaleY:0.3041,x:536.009,y:354.0723},0).wait(1).to({scaleX:0.3033,scaleY:0.3033,x:535.5333,y:354.2452},0).wait(1).to({scaleX:0.3025,scaleY:0.3025,x:535.0577,y:354.4181},0).wait(1).to({scaleX:0.3018,scaleY:0.3018,x:534.5821,y:354.591},0).wait(1).to({scaleX:0.301,scaleY:0.301,x:534.1064,y:354.7639},0).wait(1).to({scaleX:0.3003,scaleY:0.3003,x:533.6308,y:354.9368},0).wait(1).to({scaleX:0.2995,scaleY:0.2995,x:533.1551,y:355.1097},0).wait(1).to({scaleX:0.2987,scaleY:0.2987,x:532.6795,y:355.2826},0).wait(1).to({scaleX:0.298,scaleY:0.298,x:532.2038,y:355.4555},0).wait(1).to({scaleX:0.2972,scaleY:0.2972,x:531.7282,y:355.6284},0).wait(1).to({scaleX:0.2964,scaleY:0.2964,x:531.2526,y:355.8013},0).wait(1).to({scaleX:0.2957,scaleY:0.2957,x:530.7769,y:355.9742},0).wait(1).to({scaleX:0.2949,scaleY:0.2949,x:530.3013,y:356.1471},0).wait(1).to({scaleX:0.2942,scaleY:0.2942,x:529.8256,y:356.32},0).wait(1).to({scaleX:0.2934,scaleY:0.2934,x:529.35,y:356.4928},0).wait(1).to({scaleX:0.2926,scaleY:0.2926,x:528.8744,y:356.6657},0).wait(1).to({scaleX:0.2919,scaleY:0.2919,x:528.3987,y:356.8386},0).wait(1).to({scaleX:0.2911,scaleY:0.2911,x:527.9231,y:357.0115},0).wait(1).to({scaleX:0.2903,scaleY:0.2903,x:527.4474,y:357.1844},0).wait(1).to({scaleX:0.2896,scaleY:0.2896,x:526.9718,y:357.3573},0).wait(1).to({scaleX:0.2888,scaleY:0.2888,x:526.4962,y:357.5302},0).wait(1).to({scaleX:0.2881,scaleY:0.2881,x:526.0205,y:357.7031},0).wait(1).to({scaleX:0.2873,scaleY:0.2873,x:525.5449,y:357.876},0).wait(1).to({scaleX:0.2865,scaleY:0.2865,x:525.0692,y:358.0489},0).wait(1).to({scaleX:0.2858,scaleY:0.2858,x:524.5936,y:358.2218},0).wait(1).to({scaleX:0.285,scaleY:0.285,x:524.1179,y:358.3947},0).wait(1).to({scaleX:0.2842,scaleY:0.2842,x:523.6423,y:358.5676},0).wait(1).to({scaleX:0.2835,scaleY:0.2835,x:523.1667,y:358.7405},0).wait(1).to({scaleX:0.2827,scaleY:0.2827,x:522.691,y:358.9134},0).wait(1).to({scaleX:0.282,scaleY:0.282,x:522.2154,y:359.0862},0).wait(1).to({scaleX:0.2812,scaleY:0.2812,x:521.7397,y:359.2591},0).wait(1).to({scaleX:0.2804,scaleY:0.2804,x:521.2641,y:359.432},0).wait(1).to({scaleX:0.2797,scaleY:0.2797,x:520.7885,y:359.6049},0).wait(1).to({scaleX:0.2789,scaleY:0.2789,x:520.3128,y:359.7778},0).wait(1).to({scaleX:0.2781,scaleY:0.2781,x:519.8372,y:359.9507},0).wait(1).to({scaleX:0.2774,scaleY:0.2774,x:519.3615,y:360.1236},0).wait(1).to({scaleX:0.2766,scaleY:0.2766,x:518.8859,y:360.2965},0).wait(1).to({scaleX:0.2759,scaleY:0.2759,x:518.4103,y:360.4694},0).wait(1).to({scaleX:0.2751,scaleY:0.2751,x:517.9346,y:360.6423},0).wait(1).to({scaleX:0.2743,scaleY:0.2743,x:517.459,y:360.8152},0).wait(1).to({scaleX:0.2736,scaleY:0.2736,x:516.9833,y:360.9881},0).wait(1).to({scaleX:0.2728,scaleY:0.2728,x:516.5077,y:361.161},0).wait(1).to({scaleX:0.272,scaleY:0.272,x:516.0321,y:361.3339},0).wait(1).to({scaleX:0.2713,scaleY:0.2713,x:515.5564,y:361.5068},0).wait(1).to({scaleX:0.2705,scaleY:0.2705,x:515.0808,y:361.6796},0).wait(1).to({scaleX:0.2698,scaleY:0.2698,x:514.6051,y:361.8525},0).wait(1).to({scaleX:0.269,scaleY:0.269,x:514.1295,y:362.0254},0).wait(1).to({scaleX:0.2682,scaleY:0.2682,x:513.6538,y:362.1983},0).wait(1).to({scaleX:0.2675,scaleY:0.2675,x:513.1782,y:362.3712},0).wait(1).to({scaleX:0.2667,scaleY:0.2667,x:512.7026,y:362.5441},0).wait(1).to({scaleX:0.2659,scaleY:0.2659,x:512.2269,y:362.717},0).wait(1).to({scaleX:0.2652,scaleY:0.2652,x:511.7513,y:362.8899},0).wait(1).to({scaleX:0.2644,scaleY:0.2644,x:511.2756,y:363.0628},0).wait(1).to({scaleX:0.2637,scaleY:0.2637,x:510.8,y:363.2357},0).wait(1).to({scaleX:0.9933,scaleY:0.9933,x:640,y:360,visible:true},0).wait(1).to({scaleX:0.9902,scaleY:0.9902,y:360.0002},0).wait(1).to({scaleX:0.9872,scaleY:0.9872,y:360.0003},0).wait(1).to({scaleX:0.9841,scaleY:0.9841,y:360.0005},0).wait(1).to({scaleX:0.9811,scaleY:0.9811,y:360.0006},0).wait(1).to({scaleX:0.978,scaleY:0.978,y:360.0008},0).wait(1).to({scaleX:0.975,scaleY:0.975,y:360.0009},0).wait(1).to({scaleX:0.9719,scaleY:0.9719,y:360.0011},0).wait(1).to({scaleX:0.9689,scaleY:0.9689,y:360.0012},0).wait(1).to({scaleX:0.9658,scaleY:0.9658,y:360.0014},0).wait(1).to({scaleX:0.9628,scaleY:0.9628,y:360.0015},0).wait(1).to({scaleX:0.9597,scaleY:0.9597,y:360.0017},0).wait(1).to({scaleX:0.9567,scaleY:0.9567,y:360.0018},0).wait(1).to({scaleX:0.9536,scaleY:0.9536,y:360.002},0).wait(1).to({scaleX:0.9506,scaleY:0.9506,y:360.0021},0).wait(1).to({scaleX:0.9475,scaleY:0.9475,y:360.0023},0).wait(1).to({scaleX:0.9445,scaleY:0.9445,y:360.0024},0).wait(1).to({scaleX:0.9414,scaleY:0.9414,y:360.0026},0).wait(1).to({scaleX:0.9384,scaleY:0.9384,y:360.0027},0).wait(1).to({scaleX:0.9353,scaleY:0.9353,y:360.0029},0).wait(1).to({scaleX:0.9323,scaleY:0.9323,y:360.003},0).wait(1).to({scaleX:0.9292,scaleY:0.9292,y:360.0032},0).wait(1).to({scaleX:0.9262,scaleY:0.9262,y:360.0034},0).wait(1).to({scaleX:0.9231,scaleY:0.9231,y:360.0035},0).wait(1).to({scaleX:0.9201,scaleY:0.9201,y:360.0037},0).wait(1).to({scaleX:0.917,scaleY:0.917,y:360.0038},0).wait(1).to({scaleX:0.914,scaleY:0.914,y:360.004},0).wait(1).to({scaleX:0.9109,scaleY:0.9109,y:360.0041},0).wait(1).to({scaleX:0.9079,scaleY:0.9079,y:360.0043},0).wait(1).to({scaleX:0.9048,scaleY:0.9048,y:360.0044},0).wait(1).to({scaleX:0.9018,scaleY:0.9018,y:360.0046},0).wait(1).to({scaleX:0.8987,scaleY:0.8987,y:360.0047},0).wait(1).to({scaleX:0.8957,scaleY:0.8957,y:360.0049},0).wait(1).to({scaleX:0.8926,scaleY:0.8926,y:360.005},0).wait(1).to({scaleX:0.8896,scaleY:0.8896,y:360.0052},0).wait(1).to({scaleX:0.8865,scaleY:0.8865,y:360.0053},0).wait(1).to({scaleX:0.8835,scaleY:0.8835,y:360.0055},0).wait(1).to({scaleX:0.8804,scaleY:0.8804,y:360.0056},0).wait(1).to({scaleX:0.8774,scaleY:0.8774,y:360.0058},0).wait(1).to({scaleX:0.8743,scaleY:0.8743,y:360.0059},0).wait(1).to({scaleX:0.8713,scaleY:0.8713,y:360.0061},0).wait(1).to({scaleX:0.8682,scaleY:0.8682,y:360.0063},0).wait(1).to({scaleX:0.8652,scaleY:0.8652,y:360.0064},0).wait(1).to({scaleX:0.8621,scaleY:0.8621,y:360.0066},0).wait(1).to({scaleX:0.8591,scaleY:0.8591,y:360.0067},0).wait(1).to({scaleX:0.856,scaleY:0.856,y:360.0069},0).wait(1).to({scaleX:0.853,scaleY:0.853,y:360.007},0).wait(1).to({scaleX:0.8499,scaleY:0.8499,y:360.0072},0).wait(1).to({scaleX:0.8469,scaleY:0.8469,y:360.0073},0).wait(1).to({scaleX:0.8438,scaleY:0.8438,y:360.0075},0).wait(1).to({scaleX:0.8407,scaleY:0.8407,y:360.0076},0).wait(1).to({scaleX:0.8377,scaleY:0.8377,y:360.0078},0).wait(1).to({scaleX:0.8346,scaleY:0.8346,y:360.0079},0).wait(1).to({scaleX:0.8316,scaleY:0.8316,y:360.0081},0).wait(1).to({scaleX:0.8285,scaleY:0.8285,y:360.0082},0).wait(1).to({scaleX:0.8255,scaleY:0.8255,y:360.0084},0).wait(1).to({scaleX:0.8224,scaleY:0.8224,y:360.0085},0).wait(1).to({scaleX:0.8194,scaleY:0.8194,y:360.0087},0).wait(1).to({scaleX:0.8163,scaleY:0.8163,y:360.0088},0).wait(1).to({scaleX:0.8133,scaleY:0.8133,y:360.009},0).wait(1).to({scaleX:0.8102,scaleY:0.8102,y:360.0092},0).wait(1).to({scaleX:0.8072,scaleY:0.8072,y:360.0093},0).wait(1).to({scaleX:0.8041,scaleY:0.8041,y:360.0095},0).wait(1).to({scaleX:0.8011,scaleY:0.8011,y:360.0096},0).wait(1).to({scaleX:0.798,scaleY:0.798,y:360.0098},0).wait(1).to({scaleX:0.795,scaleY:0.795,y:360.0099},0).wait(1).to({scaleX:0.7919,scaleY:0.7919,y:360.0101},0).wait(1).to({scaleX:0.7889,scaleY:0.7889,y:360.0102},0).wait(1).to({scaleX:0.7858,scaleY:0.7858,y:360.0104},0).wait(1).to({scaleX:0.7828,scaleY:0.7828,y:360.0105},0).wait(1).to({scaleX:0.7797,scaleY:0.7797,y:360.0107},0).wait(1).to({scaleX:0.7767,scaleY:0.7767,y:360.0108},0).wait(1).to({scaleX:0.7736,scaleY:0.7736,y:360.011},0).wait(1).to({scaleX:0.7706,scaleY:0.7706,y:360.0111},0).wait(1).to({scaleX:0.7675,scaleY:0.7675,y:360.0113},0).wait(1).to({scaleX:0.7645,scaleY:0.7645,y:360.0114},0).wait(1).to({scaleX:0.7614,scaleY:0.7614,y:360.0116},0).wait(1).to({regX:0.6,regY:0.6,scaleX:0.4752,scaleY:0.4752,x:903.3,y:224.75},0).wait(1).to({regX:0,regY:0,scaleX:0.474,scaleY:0.474,x:903.0229,y:224.2921},0).wait(1).to({scaleX:0.4728,scaleY:0.4728,x:903.0459,y:224.1341},0).wait(1).to({scaleX:0.4715,scaleY:0.4715,x:903.0688,y:223.9762},0).wait(1).to({scaleX:0.4703,scaleY:0.4703,x:903.0917,y:223.8183},0).wait(1).to({scaleX:0.4691,scaleY:0.4691,x:903.1147,y:223.6604},0).wait(1).to({scaleX:0.4679,scaleY:0.4679,x:903.1376,y:223.5024},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:903.1605,y:223.3445},0).wait(1).to({scaleX:0.4655,scaleY:0.4655,x:903.1835,y:223.1866},0).wait(1).to({scaleX:0.4642,scaleY:0.4642,x:903.2064,y:223.0287},0).wait(1).to({scaleX:0.463,scaleY:0.463,x:903.2293,y:222.8707},0).wait(1).to({scaleX:0.4618,scaleY:0.4618,x:903.2523,y:222.7128},0).wait(1).to({scaleX:0.4606,scaleY:0.4606,x:903.2752,y:222.5549},0).wait(1).to({scaleX:0.4594,scaleY:0.4594,x:903.2981,y:222.397},0).wait(1).to({scaleX:0.4581,scaleY:0.4581,x:903.3211,y:222.2391},0).wait(1).to({scaleX:0.4569,scaleY:0.4569,x:903.344,y:222.0811},0).wait(1).to({scaleX:0.4557,scaleY:0.4557,x:903.367,y:221.9232},0).wait(1).to({scaleX:0.4545,scaleY:0.4545,x:903.3899,y:221.7653},0).wait(1).to({scaleX:0.4533,scaleY:0.4533,x:903.4128,y:221.6074},0).wait(1).to({scaleX:0.4521,scaleY:0.4521,x:903.4358,y:221.4494},0).wait(1).to({scaleX:0.4508,scaleY:0.4508,x:903.4587,y:221.2915},0).wait(1).to({scaleX:0.4496,scaleY:0.4496,x:903.4816,y:221.1336},0).wait(1).to({scaleX:0.4484,scaleY:0.4484,x:903.5046,y:220.9757},0).wait(1).to({scaleX:0.4472,scaleY:0.4472,x:903.5275,y:220.8177},0).wait(1).to({scaleX:0.446,scaleY:0.446,x:903.5504,y:220.6598},0).wait(1).to({scaleX:0.4448,scaleY:0.4448,x:903.5734,y:220.5019},0).wait(1).to({scaleX:0.4435,scaleY:0.4435,x:903.5963,y:220.344},0).wait(1).to({scaleX:0.4423,scaleY:0.4423,x:903.6192,y:220.186},0).wait(1).to({scaleX:0.4411,scaleY:0.4411,x:903.6422,y:220.0281},0).wait(1).to({scaleX:0.4399,scaleY:0.4399,x:903.6651,y:219.8702},0).wait(1).to({scaleX:0.4387,scaleY:0.4387,x:903.688,y:219.7123},0).wait(1).to({scaleX:0.4375,scaleY:0.4375,x:903.711,y:219.5543},0).wait(1).to({scaleX:0.4362,scaleY:0.4362,x:903.7339,y:219.3964},0).wait(1).to({scaleX:0.435,scaleY:0.435,x:903.7568,y:219.2385},0).wait(1).to({scaleX:0.4338,scaleY:0.4338,x:903.7798,y:219.0806},0).wait(1).to({scaleX:0.4326,scaleY:0.4326,x:903.8027,y:218.9226},0).wait(1).to({scaleX:0.4314,scaleY:0.4314,x:903.8257,y:218.7647},0).wait(1).to({scaleX:0.4302,scaleY:0.4302,x:903.8486,y:218.6068},0).wait(1).to({scaleX:0.4289,scaleY:0.4289,x:903.8715,y:218.4489},0).wait(1).to({scaleX:0.4277,scaleY:0.4277,x:903.8945,y:218.2909},0).wait(1).to({scaleX:0.4265,scaleY:0.4265,x:903.9174,y:218.133},0).wait(1).to({scaleX:0.4253,scaleY:0.4253,x:903.9403,y:217.9751},0).wait(1).to({scaleX:0.4241,scaleY:0.4241,x:903.9633,y:217.8172},0).wait(1).to({scaleX:0.4229,scaleY:0.4229,x:903.9862,y:217.6592},0).wait(1).to({scaleX:0.4216,scaleY:0.4216,x:904.0091,y:217.5013},0).wait(1).to({scaleX:0.4204,scaleY:0.4204,x:904.0321,y:217.3434},0).wait(1).to({scaleX:0.4192,scaleY:0.4192,x:904.055,y:217.1855},0).wait(1).to({scaleX:0.418,scaleY:0.418,x:904.0779,y:217.0275},0).wait(1).to({scaleX:0.4168,scaleY:0.4168,x:904.1009,y:216.8696},0).wait(1).to({scaleX:0.4155,scaleY:0.4155,x:904.1238,y:216.7117},0).wait(1).to({scaleX:0.4143,scaleY:0.4143,x:904.1467,y:216.5538},0).wait(1).to({scaleX:0.4131,scaleY:0.4131,x:904.1697,y:216.3959},0).wait(1).to({scaleX:0.4119,scaleY:0.4119,x:904.1926,y:216.2379},0).wait(1).to({scaleX:0.4107,scaleY:0.4107,x:904.2155,y:216.08},0).wait(1).to({scaleX:0.4095,scaleY:0.4095,x:904.2385,y:215.9221},0).wait(1).to({scaleX:0.4082,scaleY:0.4082,x:904.2614,y:215.7642},0).wait(1).to({scaleX:0.407,scaleY:0.407,x:904.2844,y:215.6062},0).wait(1).to({scaleX:0.4058,scaleY:0.4058,x:904.3073,y:215.4483},0).wait(1).to({scaleX:0.4046,scaleY:0.4046,x:904.3302,y:215.2904},0).wait(1).to({scaleX:0.4034,scaleY:0.4034,x:904.3532,y:215.1325},0).wait(1).to({scaleX:0.4022,scaleY:0.4022,x:904.3761,y:214.9745},0).wait(1).to({scaleX:0.4009,scaleY:0.4009,x:904.399,y:214.8166},0).wait(1).to({scaleX:0.3997,scaleY:0.3997,x:904.422,y:214.6587},0).wait(1).to({scaleX:0.3985,scaleY:0.3985,x:904.4449,y:214.5008},0).wait(1).to({scaleX:0.3973,scaleY:0.3973,x:904.4678,y:214.3428},0).wait(1).to({scaleX:0.3961,scaleY:0.3961,x:904.4908,y:214.1849},0).wait(1).to({scaleX:0.3949,scaleY:0.3949,x:904.5137,y:214.027},0).wait(1).to({scaleX:0.3936,scaleY:0.3936,x:904.5366,y:213.8691},0).wait(1).to({scaleX:0.3924,scaleY:0.3924,x:904.5596,y:213.7111},0).wait(1).to({scaleX:0.3912,scaleY:0.3912,x:904.5825,y:213.5532},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:904.6054,y:213.3953},0).wait(1).to({scaleX:0.3888,scaleY:0.3888,x:904.6284,y:213.2374},0).wait(1).to({scaleX:0.3876,scaleY:0.3876,x:904.6513,y:213.0794},0).wait(1).to({scaleX:0.3863,scaleY:0.3863,x:904.6742,y:212.9215},0).wait(1).to({scaleX:0.3851,scaleY:0.3851,x:904.6972,y:212.7636},0).wait(1).to({scaleX:0.3839,scaleY:0.3839,x:904.7201,y:212.6057},0).wait(1).to({scaleX:0.3827,scaleY:0.3827,x:904.7431,y:212.4477},0).wait(1).to({scaleX:0.3815,scaleY:0.3815,x:904.766,y:212.2898},0).wait(1).to({scaleX:0.3803,scaleY:0.3803,x:904.7889,y:212.1319},0).wait(1).to({scaleX:0.379,scaleY:0.379,x:904.8119,y:211.974},0).wait(1).to({scaleX:0.3778,scaleY:0.3778,x:904.8348,y:211.816},0).wait(1).to({scaleX:0.3766,scaleY:0.3766,x:904.8577,y:211.6581},0).wait(1).to({scaleX:0.3754,scaleY:0.3754,x:904.8807,y:211.5002},0).wait(1).to({scaleX:0.3742,scaleY:0.3742,x:904.9036,y:211.3423},0).wait(1).to({scaleX:0.373,scaleY:0.373,x:904.9265,y:211.1843},0).wait(1).to({scaleX:0.3717,scaleY:0.3717,x:904.9495,y:211.0264},0).wait(1).to({scaleX:0.3705,scaleY:0.3705,x:904.9724,y:210.8685},0).wait(1).to({scaleX:0.3693,scaleY:0.3693,x:904.9953,y:210.7106},0).wait(1).to({scaleX:0.3681,scaleY:0.3681,x:905.0183,y:210.5527},0).wait(1).to({scaleX:0.3669,scaleY:0.3669,x:905.0412,y:210.3947},0).wait(1).to({scaleX:0.3656,scaleY:0.3656,x:905.0641,y:210.2368},0).wait(1).to({scaleX:0.3644,scaleY:0.3644,x:905.0871,y:210.0789},0).wait(1).to({scaleX:0.3632,scaleY:0.3632,x:905.11,y:209.921},0).wait(1).to({scaleX:0.362,scaleY:0.362,x:905.133,y:209.763},0).wait(1).to({scaleX:0.3608,scaleY:0.3608,x:905.1559,y:209.6051},0).wait(1).to({scaleX:0.3596,scaleY:0.3596,x:905.1788,y:209.4472},0).wait(1).to({scaleX:0.3583,scaleY:0.3583,x:905.2018,y:209.2893},0).wait(1).to({scaleX:0.3571,scaleY:0.3571,x:905.2247,y:209.1313},0).wait(1).to({scaleX:0.3559,scaleY:0.3559,x:905.2476,y:208.9734},0).wait(1).to({scaleX:0.3547,scaleY:0.3547,x:905.2706,y:208.8155},0).wait(1).to({scaleX:0.3535,scaleY:0.3535,x:905.2935,y:208.6576},0).wait(1).to({scaleX:0.3523,scaleY:0.3523,x:905.3164,y:208.4996},0).wait(1).to({scaleX:0.351,scaleY:0.351,x:905.3394,y:208.3417},0).wait(1).to({scaleX:0.3498,scaleY:0.3498,x:905.3623,y:208.1838},0).wait(1).to({scaleX:0.3486,scaleY:0.3486,x:905.3852,y:208.0259},0).wait(1).to({scaleX:0.3474,scaleY:0.3474,x:905.4082,y:207.8679},0).wait(1).to({scaleX:0.3462,scaleY:0.3462,x:905.4311,y:207.71},0).wait(1).to({scaleX:0.345,scaleY:0.345,x:905.454,y:207.5521},0).wait(1).to({scaleX:0.3437,scaleY:0.3437,x:905.477,y:207.3942},0).wait(1).to({scaleX:0.3425,scaleY:0.3425,x:905.4999,y:207.2362},0).wait(1).to({scaleX:0.3413,scaleY:0.3413,x:905.5228,y:207.0783},0).wait(1).to({scaleX:0.3401,scaleY:0.3401,x:905.5458,y:206.9204},0).wait(1).to({scaleX:0.3389,scaleY:0.3389,x:905.5687,y:206.7625},0).wait(1).to({scaleX:0.3377,scaleY:0.3377,x:905.5917,y:206.6045},0).wait(1).to({scaleX:0.3364,scaleY:0.3364,x:905.6146,y:206.4466},0).wait(1).to({scaleX:0.3352,scaleY:0.3352,x:905.6375,y:206.2887},0).wait(1).to({scaleX:0.334,scaleY:0.334,x:905.6605,y:206.1308},0).wait(1).to({scaleX:0.3328,scaleY:0.3328,x:905.6834,y:205.9728},0).wait(1).to({scaleX:0.3316,scaleY:0.3316,x:905.7063,y:205.8149},0).wait(1).to({scaleX:0.3304,scaleY:0.3304,x:905.7293,y:205.657},0).wait(1).to({scaleX:0.3291,scaleY:0.3291,x:905.7522,y:205.4991},0).wait(1).to({scaleX:0.3279,scaleY:0.3279,x:905.7751,y:205.3411},0).wait(1).to({scaleX:0.3267,scaleY:0.3267,x:905.7981,y:205.1832},0).wait(1).to({scaleX:0.3255,scaleY:0.3255,x:905.821,y:205.0253},0).wait(1).to({scaleX:0.3243,scaleY:0.3243,x:905.8439,y:204.8674},0).wait(1).to({scaleX:0.323,scaleY:0.323,x:905.8669,y:204.7095},0).wait(1).to({scaleX:0.3218,scaleY:0.3218,x:905.8898,y:204.5515},0).wait(1).to({scaleX:0.3206,scaleY:0.3206,x:905.9127,y:204.3936},0).wait(1).to({scaleX:0.3194,scaleY:0.3194,x:905.9357,y:204.2357},0).wait(25).to({regY:0.6,scaleX:0.3231,scaleY:0.3231,x:547.9,y:349.95,visible:false},0).wait(1).to({regY:0,y:349.75},0).wait(12).to({regY:0.6,y:349.95},0).wait(1).to({regY:0,y:349.75},0).wait(11).to({scaleX:0.1826,scaleY:0.1826,x:481.65,y:174.9843},0).wait(59).to({regY:0.6,y:175.1},0).wait(1).to({regY:0,scaleX:1,scaleY:1,x:640,y:359.4504},0).wait(169).to({_off:true},1).wait(11));

	// Buttons_obj_
	this.Buttons = new lib.Scene_1_Buttons();
	this.Buttons.name = "Buttons";
	this.Buttons.setTransform(270,311.4,1,1,0,0,0,270,311.4);
	this.Buttons.depth = 0;
	this.Buttons.isAttachedToCamera = 0
	this.Buttons.isAttachedToMask = 0
	this.Buttons.layerDepth = 0
	this.Buttons.layerIndex = 0
	this.Buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Buttons).wait(2).to({regX:271.1,regY:311.8,scaleX:1.0076,scaleY:1.0076,y:311.5},0).wait(657).to({regX:269.8,regY:310.8,scaleX:1,scaleY:1,y:311.45},0).to({_off:true},2).wait(11));

	// Dog_obj_
	this.Dog = new lib.Scene_1_Dog();
	this.Dog.name = "Dog";
	this.Dog.depth = 0;
	this.Dog.isAttachedToCamera = 0
	this.Dog.isAttachedToMask = 0
	this.Dog.layerDepth = 0
	this.Dog.layerIndex = 1
	this.Dog.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Dog).wait(549).to({regX:-0.2,regY:-0.7,y:-0.05},0).wait(1).to({regX:1003.7,regY:672.8,x:1003.85,y:673.4},0).wait(76).to({regX:-0.2,regY:-0.7,x:0,y:-0.05},0).to({_off:true},35).wait(11));

	// Fire_Upview_obj_
	this.Fire_Upview = new lib.Scene_1_Fire_Upview();
	this.Fire_Upview.name = "Fire_Upview";
	this.Fire_Upview.depth = 0;
	this.Fire_Upview.isAttachedToCamera = 0
	this.Fire_Upview.isAttachedToMask = 0
	this.Fire_Upview.layerDepth = 0
	this.Fire_Upview.layerIndex = 2
	this.Fire_Upview.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Fire_Upview).wait(176).to({regX:4.2,regY:2.4,scaleX:1.0068,scaleY:1.0068,x:-0.05},0).to({_off:true},77).wait(419));

	// up_view_obj_
	this.up_view = new lib.Scene_1_up_view();
	this.up_view.name = "up_view";
	this.up_view.depth = 0;
	this.up_view.isAttachedToCamera = 0
	this.up_view.isAttachedToMask = 0
	this.up_view.layerDepth = 0
	this.up_view.layerIndex = 3
	this.up_view.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.up_view).wait(176).to({regX:4.2,regY:2.4,scaleX:1.0068,scaleY:1.0068,x:-0.05},0).to({_off:true},77).wait(419));

	// Clock_obj_
	this.Clock = new lib.Scene_1_Clock();
	this.Clock.name = "Clock";
	this.Clock.setTransform(898.9,180.2,1,1,0,0,0,898.9,180.2);
	this.Clock.depth = 0;
	this.Clock.isAttachedToCamera = 0
	this.Clock.isAttachedToMask = 0
	this.Clock.layerDepth = 0
	this.Clock.layerIndex = 4
	this.Clock.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Clock).wait(253).to({regX:1026,regY:139,scaleX:2.1045,scaleY:2.1045,x:898.95,y:180.25},0).wait(238).to({regX:898.6,regY:179.5,scaleX:1,scaleY:1,x:898.8,y:180.15},0).to({_off:true},170).wait(11));

	// Hand_obj_
	this.Hand = new lib.Scene_1_Hand();
	this.Hand.name = "Hand";
	this.Hand.depth = 0;
	this.Hand.isAttachedToCamera = 0
	this.Hand.isAttachedToMask = 0
	this.Hand.layerDepth = 0
	this.Hand.layerIndex = 5
	this.Hand.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Hand).wait(58).to({regX:340.9,regY:233.4,scaleX:3.0948,scaleY:3.0948,y:0.05},0).wait(38).to({_off:true},1).wait(575));

	// Button_obj_
	this.Button = new lib.Scene_1_Button();
	this.Button.name = "Button";
	this.Button.depth = 0;
	this.Button.isAttachedToCamera = 0
	this.Button.isAttachedToMask = 0
	this.Button.layerDepth = 0
	this.Button.layerIndex = 6
	this.Button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(80).to({regX:340.9,regY:233.4,scaleX:3.0948,scaleY:3.0948,y:0.05},0).wait(1).to({_off:true},580).wait(11));

	// Toaster_obj_
	this.Toaster = new lib.Scene_1_Toaster();
	this.Toaster.name = "Toaster";
	this.Toaster.setTransform(481.2,408.2,1,1,0,0,0,481.2,408.2);
	this.Toaster.depth = 0;
	this.Toaster.isAttachedToCamera = 0
	this.Toaster.isAttachedToMask = 0
	this.Toaster.layerDepth = 0
	this.Toaster.layerIndex = 7
	this.Toaster.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Toaster).wait(80).to({regX:496.4,regY:365.3,scaleX:3.0948,scaleY:3.0948,x:481.25,y:408.25},0).wait(455).to({regX:481.1,regY:407.6,scaleX:1,scaleY:1,x:481.3},0).to({_off:true},122).wait(15));

	// Smoke_and_Fire_obj_
	this.Smoke_and_Fire = new lib.Scene_1_Smoke_and_Fire();
	this.Smoke_and_Fire.name = "Smoke_and_Fire";
	this.Smoke_and_Fire.depth = 0;
	this.Smoke_and_Fire.isAttachedToCamera = 0
	this.Smoke_and_Fire.isAttachedToMask = 0
	this.Smoke_and_Fire.layerDepth = 0
	this.Smoke_and_Fire.layerIndex = 8
	this.Smoke_and_Fire.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Smoke_and_Fire).wait(98).to({regX:341.2,regY:233.8,scaleX:3.1021,scaleY:3.1021,x:0.2,y:-0.1},0).wait(308).to({regX:341.1,regY:233.4,scaleX:3.0948,scaleY:3.0948,x:0.05,y:0.05},0).wait(25).to({regX:364.8,regY:109.2,scaleX:5.4773,scaleY:5.4773,x:0.3,y:0},0).to({_off:true},161).wait(80));

	// toastfly1_obj_
	this.toastfly1 = new lib.Scene_1_toastfly1();
	this.toastfly1.name = "toastfly1";
	this.toastfly1.depth = 0;
	this.toastfly1.isAttachedToCamera = 0
	this.toastfly1.isAttachedToMask = 0
	this.toastfly1.layerDepth = 0
	this.toastfly1.layerIndex = 9
	this.toastfly1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.toastfly1).wait(406).to({regX:341.1,regY:233.4,scaleX:3.0948,scaleY:3.0948,x:0.05,y:0.05},0).wait(1).to({regX:502.2,regY:417,scaleX:1,scaleY:1,x:161.15,y:183.65},0).wait(219).to({regX:-0.2,regY:-0.7,x:0,y:-0.05},0).to({_off:true},35).wait(11));

	// toastfly_2_obj_
	this.toastfly_2 = new lib.Scene_1_toastfly_2();
	this.toastfly_2.name = "toastfly_2";
	this.toastfly_2.depth = 0;
	this.toastfly_2.isAttachedToCamera = 0
	this.toastfly_2.isAttachedToMask = 0
	this.toastfly_2.layerDepth = 0
	this.toastfly_2.layerIndex = 10
	this.toastfly_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.toastfly_2).wait(406).to({regX:341.1,regY:233.4,scaleX:3.0948,scaleY:3.0948,x:0.05,y:0.05},0).wait(1).to({regX:472.2,regY:408,scaleX:1,scaleY:1,x:131.15,y:174.65},0).wait(253).to({_off:true},1).wait(11));

	// Toaster_2_obj_
	this.Toaster_2 = new lib.Scene_1_Toaster_2();
	this.Toaster_2.name = "Toaster_2";
	this.Toaster_2.setTransform(481.2,408.2,1,1,0,0,0,481.2,408.2);
	this.Toaster_2.depth = 0;
	this.Toaster_2.isAttachedToCamera = 0
	this.Toaster_2.isAttachedToMask = 0
	this.Toaster_2.layerDepth = 0
	this.Toaster_2.layerIndex = 11
	this.Toaster_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Toaster_2).wait(76).to({regX:496.4,regY:365.3,scaleX:3.0948,scaleY:3.0948,x:481.25,y:408.25},0).to({_off:true},585).wait(11));

	// Toasts_obj_
	this.Toasts = new lib.Scene_1_Toasts();
	this.Toasts.name = "Toasts";
	this.Toasts.setTransform(480.4,378.7,1,1,0,0,0,480.4,378.7);
	this.Toasts.depth = 0;
	this.Toasts.isAttachedToCamera = 0
	this.Toasts.isAttachedToMask = 0
	this.Toasts.layerDepth = 0
	this.Toasts.layerIndex = 12
	this.Toasts.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Toasts).wait(79).to({regX:496.2,regY:355.8,scaleX:3.0948,scaleY:3.0948,x:480.65,y:378.85},0).wait(1).to({regX:480.5,regY:387.2,scaleX:1,scaleY:1,x:464.85,y:410.1},0).wait(325).to({_off:true},1).wait(266));

	// Window_obj_
	this.Window = new lib.Scene_1_Window();
	this.Window.name = "Window";
	this.Window.setTransform(1099.2,234,1,1,0,0,0,1099.2,234);
	this.Window.depth = 0;
	this.Window.isAttachedToCamera = 0
	this.Window.isAttachedToMask = 0
	this.Window.layerDepth = 0
	this.Window.layerIndex = 13
	this.Window.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Window).to({_off:true},661).wait(11));

	// Background_obj_
	this.Background = new lib.Scene_1_Background();
	this.Background.name = "Background";
	this.Background.setTransform(636.9,360,1,1,0,0,0,636.9,360);
	this.Background.depth = 0;
	this.Background.isAttachedToCamera = 0
	this.Background.isAttachedToMask = 0
	this.Background.layerDepth = 0
	this.Background.layerIndex = 14
	this.Background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Background).to({_off:true},661).wait(11));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
	this.shape.setTransform(640,360);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
	this.shape_1.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(672));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1778,886);
// library properties:
lib.properties = {
	id: '1EBC320EB81D403F9D0B19E7404B5A6B',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/clock_mixdown.mp3?1618068886818", id:"clock_mixdown"},
		{src:"sounds/ding.mp3?1618068886818", id:"ding"},
		{src:"sounds/eating_mixdown.mp3?1618068886818", id:"eating_mixdown"},
		{src:"sounds/KitchenToasterLoading_01.mp3?1618068886818", id:"KitchenToasterLoading_01"},
		{src:"sounds/Mainmusic_mixdown.mp3?1618068886818", id:"Mainmusic_mixdown"},
		{src:"sounds/Woosh.mp3?1618068886818", id:"Woosh"}
	],
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
an.compositions['1EBC320EB81D403F9D0B19E7404B5A6B'] = {
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
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