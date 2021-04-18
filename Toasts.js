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
	this.shape_7.graphics.f("#8395A0").s().p("AjeEGQglAAgbgaQgagbAAglIAAlXQAAglAagbQAbgaAlAAIIXAAIAAILg");
	this.shape_7.setTransform(32.85,26.175);

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
	this.shape_1.setTransform(13.033,95.1943,0.9998,0.9998,-14.4702);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1EFE1").s().p("AAOANQgLgDgCgDQgBgGgEgCIgCgDIgCgBIgBAAQgLgDgCgDQAAgBAAAAQAAgBABAAQAAAAABAAQABAAABAAIAFABQAbAHAJARQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAgBAAIgGgBg");
	this.shape_2.setTransform(17.401,89.4504,0.9998,0.9998,-14.4702);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#53463C").s().p("Ag2AWQgUgbAKgUQAJgUAfgBQAbgBAcANQAdANAHASQAIATgdAPQgGAEgngGQgbgFACAXQgMAAgSgZg");
	this.shape_3.setTransform(13.7695,91.6901,0.9998,0.9998,-14.4702);

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
	this.shape_12.setTransform(143.9852,40.8976,0.9998,0.9998,-14.4702);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EABE83").s().p("AgLANQgGgEAAgIQgBgGAGgGQAFgGAHAAQAGAAAGAFQAFAEABAIQAAAGgFAGQgEAGgIAAIgBAAQgGAAgFgFg");
	this.shape_13.setTransform(143.0812,57.6005,0.9998,0.9998,-14.4702);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EABE83").s().p("AgLANQgFgEgBgIQAAgHAFgFQAFgGAHAAQAHgBAFAGQAFAFABAHQAAAGgFAGQgFAFgHABIgBAAQgGAAgFgFg");
	this.shape_14.setTransform(131.3864,87.2077,0.9998,0.9998,-14.4702);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EABE83").s().p("AgLANQgFgEgBgIQgBgHAGgFQAEgGAIAAQAGgBAGAGQAGAFAAAHQAAAGgEAGQgGAFgHABIgBAAQgGAAgFgFg");
	this.shape_15.setTransform(136.7118,79.5347,0.9998,0.9998,-14.4702);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{rotation:-14.4707,x:124.601,y:81.2512}},{t:this.shape_23,p:{rotation:-14.4707,x:58.9297,y:35.6177}},{t:this.shape_22,p:{rotation:-14.4707,x:48.5331,y:35.7112}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{rotation:-14.4707,x:76.6429,y:66.1064}},{t:this.shape_16,p:{rotation:-14.4707,x:135.3656,y:66.3372}},{t:this.shape_15,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.4702,x:136.7118,y:79.5347}},{t:this.shape_14,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.4702,x:131.3864,y:87.2077}},{t:this.shape_13,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.4702,x:143.0812,y:57.6005}},{t:this.shape_12,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.4702,x:143.9852,y:40.8976}},{t:this.shape_11,p:{rotation:-14.4707,x:78.3166,y:63.1742}},{t:this.shape_10,p:{rotation:-14.4707,x:103.7444,y:31.8465}},{t:this.shape_9,p:{rotation:-14.4707,x:127.4171,y:38.5431}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{rotation:-14.4707,x:141.234,y:72.0559}},{t:this.shape_3,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.4702,x:13.7695,y:91.6901}},{t:this.shape_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.4702,x:17.401,y:89.4504}},{t:this.shape_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.4702,x:13.033,y:95.1943}}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_24,p:{rotation:0,x:116.7746,y:78.5757}},{t:this.shape_23,p:{rotation:0,x:64.5883,y:17.9777}},{t:this.shape_22,p:{rotation:0,x:54.4979,y:15.4702}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{rotation:0,x:74.1213,y:51.9265}},{t:this.shape_16,p:{rotation:0,x:130.925,y:66.8243}},{t:this.shape_15,p:{scaleX:1,scaleY:1,rotation:0,x:128.95,y:79.9502}},{t:this.shape_14,p:{scaleX:1,scaleY:1,rotation:0,x:121.875,y:86.0502}},{t:this.shape_13,p:{scaleX:1,scaleY:1,rotation:0,x:140.6002,y:60.3}},{t:this.shape_12,p:{scaleX:1,scaleY:1,rotation:0,x:145.65,y:44.35}},{t:this.shape_11,p:{rotation:0,x:76.4746,y:49.5054}},{t:this.shape_10,p:{rotation:0,x:108.925,y:25.525}},{t:this.shape_9,p:{rotation:0,x:130.174,y:37.925}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{rotation:0,x:135.1783,y:73.8283}},{t:this.shape_3,p:{scaleX:1,scaleY:1,rotation:0,x:6.8491,y:60.9964}},{t:this.shape_2,p:{scaleX:1,scaleY:1,rotation:0,x:10.9257,y:59.735}},{t:this.shape_1,p:{scaleX:1,scaleY:1,rotation:0,x:5.26,y:64.206}}]},7).wait(32));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{rotation:0,x:116.7746,y:78.5757}},{t:this.shape_24,p:{rotation:0,x:64.5883,y:17.9777}},{t:this.shape_23,p:{rotation:0,x:54.4979,y:15.4702}},{t:this.shape_22,p:{regX:0.5,regY:-16.7,scaleX:1.0968,scaleY:1.2116,rotation:-14.999,x:149.2,y:104.5}},{t:this.shape_21},{t:this.shape_20,p:{regX:1.4,scaleX:1.2805,scaleY:1.2329,rotation:16.9038,x:313.65,y:100.35}},{t:this.shape_19},{t:this.shape_18,p:{scaleX:1.1152,scaleY:1.1152,rotation:-9.2106,x:338.5023,y:125.4001}},{t:this.shape_17,p:{rotation:0,x:74.1213,y:51.9265}},{t:this.shape_16,p:{rotation:0,x:130.925,y:66.8243}},{t:this.shape_15,p:{rotation:0,x:128.95,y:79.9502}},{t:this.shape_14,p:{rotation:0,x:121.875,y:86.0502}},{t:this.shape_13,p:{rotation:0,x:140.6002,y:60.3}},{t:this.shape_12,p:{rotation:0,x:145.65,y:44.35}},{t:this.shape_11,p:{rotation:0,x:76.4746,y:49.5054}},{t:this.shape_10,p:{rotation:0,x:108.925,y:25.525}},{t:this.shape_9,p:{rotation:0,x:130.174,y:37.925}},{t:this.shape_8,p:{regX:-16.5,regY:14.8,rotation:-59.9996,x:338.45,y:63.25}},{t:this.shape_7},{t:this.shape_6,p:{y:88.3108}},{t:this.shape_5},{t:this.shape_4,p:{y:71.7483}},{t:this.shape_3,p:{rotation:0,x:135.1783,y:73.8283}},{t:this.shape_2,p:{rotation:0,x:6.8491,y:60.9964}},{t:this.shape_1,p:{rotation:0,x:10.9257,y:59.735}},{t:this.shape,p:{rotation:0,x:5.26,y:64.206}}]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_25,p:{rotation:-9.951,x:120.3461,y:75.5642}},{t:this.shape_24,p:{rotation:-9.951,x:58.4732,y:24.896}},{t:this.shape_23,p:{rotation:-24.9497,x:43.6867,y:24.5883}},{t:this.shape_22,p:{regX:0.2,regY:-17,scaleX:1.1577,scaleY:1.1577,rotation:6.5068,x:150.3,y:104.8}},{t:this.shape_29},{t:this.shape_20,p:{regX:0.6,scaleX:1.1237,scaleY:1.1873,rotation:-8.9429,x:310.3,y:101.75}},{t:this.shape_18,p:{scaleX:1.1424,scaleY:1.1424,rotation:7.1862,x:333.889,y:124.6682}},{t:this.shape_17,p:{rotation:-9.951,x:73.7293,y:56.6867}},{t:this.shape_16,p:{rotation:-9.951,x:132.2528,y:61.5444}},{t:this.shape_15,p:{rotation:-9.9497,x:132.5674,y:74.8143}},{t:this.shape_14,p:{rotation:-9.9497,x:126.6531,y:82.0446}},{t:this.shape_13,p:{rotation:-9.9497,x:140.6467,y:53.4478}},{t:this.shape_12,p:{rotation:-9.9497,x:142.8646,y:36.866}},{t:this.shape_11,p:{rotation:-9.951,x:75.6289,y:53.8954}},{t:this.shape_10,p:{rotation:-9.951,x:103.4471,y:24.6681}},{t:this.shape_9,p:{rotation:-54.9495,x:122.0024,y:28.8167}},{t:this.shape_8,p:{regX:0,regY:0,rotation:0,x:354.9115,y:48.5}},{t:this.shape_7},{t:this.shape_6,p:{y:86.9608}},{t:this.shape_28},{t:this.shape_4,p:{y:70.8483}},{t:this.shape_3,p:{rotation:-9.951,x:137.6525,y:67.7079}},{t:this.shape_2,p:{rotation:-9.9497,x:9.0344,y:77.2426}},{t:this.shape_1,p:{rotation:-9.9497,x:12.8315,y:75.2959}},{t:this.shape,p:{rotation:-9.9497,x:8.0238,y:80.6783}}]},5).wait(5));

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
	this.instance.setTransform(477.35,382.3,0.9999,0.9999,6.7062,0,0,2.5,3.6);
	this.instance._off = true;

	this.instance_1 = new lib.Toasts_Eat("synched",0);
	this.instance_1.setTransform(502,698.15,0.9999,0.9999,91.177,0,0,21.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},406).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(406).to({_off:false},0).wait(1).to({regX:20.9,regY:20.5,rotation:7.8608,x:494.65,y:385.35},0).wait(1).to({rotation:9.0145,x:495.75,y:369.5},0).wait(1).to({rotation:10.1681,x:496.8,y:353.65},0).wait(1).to({rotation:11.3218,x:497.9,y:337.8},0).wait(1).to({rotation:12.4754,x:498.95,y:321.85},0).wait(1).to({rotation:13.6291,x:500,y:305.95},0).wait(1).to({rotation:14.7827,x:501.05,y:290.1},0).wait(1).to({rotation:15.9364,x:502.1,y:274.2},0).wait(1).to({rotation:17.09,x:503.15,y:258.3},0).wait(1).to({rotation:18.2437,x:504.2,y:242.35},0).wait(1).to({rotation:19.3973,x:505.2,y:226.45},0).wait(1).to({rotation:20.551,x:506.2,y:210.5},0).wait(1).to({rotation:21.7046,x:507.2,y:194.6},0).wait(1).to({rotation:21.8339,x:507.25,y:194.1},0).wait(1).to({rotation:21.9631,x:507.2,y:193.65},0).wait(1).to({rotation:22.0924,x:507.15,y:193.25},0).wait(1).to({rotation:22.2217,x:507.1,y:192.8},0).wait(1).to({rotation:22.3509,x:507.05,y:192.4},0).wait(1).to({rotation:22.4802,x:507,y:192},0).wait(1).to({rotation:22.6095,x:506.95,y:191.5},0).wait(1).to({rotation:22.7388,y:191.1},0).wait(1).to({rotation:22.868,x:506.9,y:190.65},0).wait(1).to({rotation:22.9973,y:190.2},0).wait(1).to({rotation:23.1266,x:506.8,y:189.8},0).wait(1).to({rotation:23.2558,y:189.4},0).wait(1).to({rotation:23.3851,x:506.75,y:188.95},0).wait(1).to({rotation:23.5144,x:506.7,y:188.5},0).wait(1).to({rotation:23.6436,y:188.1},0).wait(1).to({rotation:23.7729,x:506.6,y:187.6},0).wait(1).to({rotation:23.9022,y:187.2},0).wait(1).to({rotation:24.0315,x:506.55,y:186.75},0).wait(1).to({rotation:24.1607,x:506.5,y:186.35},0).wait(1).to({rotation:24.29,x:506.45,y:185.9},0).wait(1).to({rotation:24.4193,x:506.5,y:185.45},0).wait(1).to({rotation:24.5485,x:506.4,y:185.05},0).wait(1).to({rotation:24.6778,y:184.6},0).wait(1).to({rotation:24.8071,x:506.3,y:184.15},0).wait(1).to({rotation:24.9363,y:183.75},0).wait(1).to({rotation:25.0656,x:506.25,y:183.3},0).wait(1).to({rotation:25.1949,x:506.15,y:182.85},0).wait(1).to({rotation:25.3242,x:506.2,y:182.45},0).wait(1).to({rotation:25.4534,x:506.1,y:182},0).wait(1).to({rotation:25.5827,y:181.55},0).wait(1).to({rotation:25.712,x:506.05,y:181.1},0).wait(1).to({rotation:25.8412,x:506,y:180.7},0).wait(1).to({rotation:25.9705,x:505.95,y:180.3},0).wait(1).to({rotation:26.0998,y:179.8},0).wait(1).to({rotation:26.229,x:505.9,y:179.4},0).wait(1).to({rotation:26.3583,x:505.85,y:178.95},0).wait(1).to({rotation:26.4876,x:505.8,y:178.5},0).wait(1).to({rotation:26.6169,x:505.75,y:178.05},0).wait(1).to({rotation:26.7461,y:177.65},0).wait(1).to({rotation:26.8754,x:505.7,y:177.25},0).wait(1).to({rotation:27.0047,x:505.65,y:176.8},0).wait(1).to({rotation:27.1339,x:505.6,y:176.35},0).wait(1).to({rotation:27.2632,y:175.85},0).wait(1).to({rotation:27.3925,x:505.5,y:175.45},0).wait(1).to({rotation:27.5217,x:505.55,y:175.05},0).wait(1).to({rotation:27.651,x:505.45,y:174.6},0).wait(1).to({rotation:27.7803,y:174.2},0).wait(1).to({rotation:27.9096,x:505.35,y:173.75},0).wait(1).to({rotation:28.0388,x:505.3,y:173.25},0).wait(1).to({rotation:28.1681,x:505.25,y:172.8},0).wait(1).to({rotation:28.2974,y:172.4},0).wait(1).to({rotation:28.4266,y:172},0).wait(1).to({rotation:28.5559,x:505.15,y:171.55},0).wait(1).to({rotation:28.6852,y:171.15},0).wait(1).to({rotation:28.8144,x:505.05,y:170.65},0).wait(1).to({rotation:28.9437,x:505.1,y:170.2},0).wait(1).to({rotation:29.073,x:505,y:169.75},0).wait(1).to({rotation:29.2023,y:169.35},0).wait(1).to({rotation:29.3315,x:504.9,y:168.9},0).wait(1).to({rotation:29.4608,y:168.5},0).wait(1).to({rotation:29.5901,x:504.85,y:168},0).wait(1).to({rotation:29.7193,x:504.8,y:167.6},0).wait(1).to({rotation:29.8486,x:504.75,y:167.2},0).wait(1).to({rotation:29.9779,x:504.7,y:166.7},0).wait(1).to({rotation:30.1071,y:166.3},0).wait(1).to({rotation:30.2364,x:504.65,y:165.8},0).wait(1).to({rotation:30.3657,y:165.4},0).wait(1).to({rotation:30.4949,x:504.55,y:164.95},0).wait(1).to({rotation:30.6242,y:164.55},0).wait(1).to({rotation:30.7535,x:504.45,y:164.1},0).wait(1).to({rotation:30.8828,x:504.5,y:163.7},0).wait(1).to({rotation:31.012,x:504.4,y:163.15},0).wait(1).to({rotation:31.1413,x:504.35,y:162.75},0).wait(1).to({rotation:31.2706,x:504.3,y:162.3},0).wait(1).to({rotation:31.3998,x:504.25,y:161.9},0).wait(1).to({rotation:31.5291,y:161.45},0).wait(1).to({rotation:31.6584,x:504.2,y:161},0).wait(1).to({rotation:31.7876,x:504.15,y:160.55},0).wait(1).to({rotation:31.9169,x:504.1,y:160.15},0).wait(1).to({rotation:32.0462,x:504.05,y:159.65},0).wait(1).to({rotation:32.1755,y:159.25},0).wait(1).to({rotation:32.3047,x:504,y:158.75},0).wait(1).to({rotation:32.434,x:503.95,y:158.35},0).wait(1).to({rotation:32.5633,x:503.9,y:157.9},0).wait(1).to({rotation:32.6925,y:157.5},0).wait(1).to({rotation:32.8218,x:503.8,y:157.05},0).wait(1).to({rotation:32.9511,y:156.6},0).wait(1).to({rotation:33.0803,x:503.7,y:156.15},0).wait(1).to({rotation:33.2096,y:155.7},0).wait(1).to({rotation:33.3389,x:503.65,y:155.25},0).wait(1).to({rotation:33.4682,y:154.8},0).wait(1).to({rotation:33.5974,x:503.55,y:154.35},0).wait(1).to({rotation:33.7267,y:153.95},0).wait(1).to({rotation:33.856,x:503.5,y:153.5},0).wait(1).to({rotation:33.9852,y:153.1},0).wait(1).to({rotation:34.1145,x:503.4,y:152.6},0).wait(1).to({rotation:34.2438,x:503.3,y:152.15},0).wait(1).to({rotation:34.373,x:503.35,y:151.7},0).wait(1).to({rotation:34.5023,x:503.25,y:151.3},0).wait(1).to({rotation:34.6316,y:150.85},0).wait(1).to({rotation:34.7609,x:503.15,y:150.4},0).wait(1).to({rotation:34.8901,x:503.2,y:149.95},0).wait(1).to({rotation:35.0194,x:503.1,y:149.55},0).wait(1).to({rotation:35.1487,y:149.1},0).wait(1).to({rotation:35.2779,x:503,y:148.65},0).wait(1).to({rotation:35.4072,y:148.15},0).wait(1).to({rotation:35.5365,x:502.95,y:147.75},0).wait(1).to({rotation:35.6657,x:502.9,y:147.3},0).wait(1).to({rotation:35.795,x:502.85,y:146.85},0).wait(1).to({rotation:35.9243,x:502.75,y:146.4},0).wait(1).to({rotation:36.0536,x:502.8,y:145.95},0).wait(1).to({rotation:36.1828,x:502.7,y:145.55},0).wait(1).to({rotation:36.3121,y:145.05},0).wait(1).to({rotation:36.4414,x:502.6,y:144.65},0).wait(1).to({rotation:36.5706,x:502.65,y:144.2},0).wait(1).to({rotation:36.6999,x:502.55,y:143.75},0).wait(7).to({rotation:44.2729,x:502.25,y:224.3},0).wait(1).to({rotation:51.8458,x:501.95,y:304.35},0).wait(1).to({rotation:59.4188,x:501.65,y:384.05},0).wait(1).to({rotation:66.9917,x:501.45,y:463.2},0).wait(1).to({rotation:74.5647,x:501.4,y:542.05},0).wait(1).to({rotation:82.1376,x:501.55,y:620.45},0).wait(1).to({rotation:89.7106,x:501.9,y:698.5},0).wait(77).to({_off:true},1).wait(35));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:926.25,y:107.4},0).wait(1).to({x:925.35},0).wait(1).to({x:924.5},0).wait(1).to({x:923.6},0).wait(1).to({x:922.75},0).wait(1).to({x:921.85},0).wait(1).to({x:921},0).wait(1).to({x:920.1},0).wait(1).to({x:919.25},0).wait(1).to({x:918.35},0).wait(1).to({x:917.5},0).wait(1).to({x:916.6},0).wait(1).to({x:915.75},0).wait(1).to({x:914.85},0).wait(1).to({x:914},0).wait(1).to({x:913.1},0).wait(1).to({x:912.25},0).wait(1).to({x:911.35},0).wait(1).to({x:910.45},0).wait(1).to({x:909.6},0).wait(1).to({x:908.7},0).wait(1).to({x:907.85},0).wait(1).to({x:906.95},0).wait(1).to({x:906.1},0).wait(1).to({x:905.2},0).wait(1).to({x:904.35},0).wait(1).to({x:903.45},0).wait(1).to({x:902.6},0).wait(1).to({x:901.7},0).wait(1).to({x:900.85},0).wait(1).to({x:899.95},0).wait(1).to({x:899.1},0).wait(1).to({x:898.2},0).wait(1).to({x:897.35},0).wait(1).to({x:896.45},0).wait(1).to({x:895.55},0).wait(1).to({x:894.7},0).wait(1).to({x:893.8},0).wait(1).to({x:892.95},0).wait(1).to({x:892.05},0).wait(1).to({x:891.2},0).wait(1).to({x:890.3},0).wait(1).to({x:889.45},0).wait(1).to({x:888.55},0).wait(1).to({x:887.7},0).wait(1).to({x:886.8},0).wait(1).to({x:885.95},0).wait(1).to({x:885.1},0).wait(1).to({x:884.25},0).wait(1).to({x:883.35},0).wait(1).to({x:882.5},0).wait(1).to({x:881.6},0).wait(1).to({x:880.7},0).wait(1).to({x:879.85},0).wait(1).to({x:878.95},0).wait(1).to({x:878.1},0).wait(1).to({x:877.2},0).wait(1).to({x:876.35},0).wait(1).to({x:875.45},0).wait(1).to({x:874.6},0).wait(1).to({x:873.7},0).wait(1).to({x:872.85},0).wait(1).to({x:871.95},0).wait(1).to({x:871.1},0).wait(1).to({x:870.2},0).wait(1).to({x:869.35},0).wait(1).to({x:868.45},0).wait(1).to({x:867.6},0).wait(1).to({x:866.7},0).wait(1).to({x:865.8},0).wait(1).to({x:864.95},0).wait(1).to({x:864.05},0).wait(1).to({x:863.2},0).wait(1).to({x:862.3},0).wait(1).to({x:861.45},0).wait(1).to({x:860.55},0).wait(1).to({x:859.7},0).wait(1).to({x:858.8},0).wait(1).to({x:857.95},0).wait(1).to({x:857.05},0).wait(1).to({x:856.2},0).wait(1).to({x:855.3},0).wait(1).to({x:854.45},0).wait(1).to({x:853.55},0).wait(1).to({x:852.7},0).wait(1).to({x:851.8},0).wait(1).to({x:850.9},0).wait(1).to({x:850.05},0).wait(1).to({x:849.15},0).wait(1).to({x:848.3},0).wait(1).to({x:847.4},0).wait(1).to({x:846.55},0).wait(1).to({x:845.65},0).wait(1).to({x:844.8},0).wait(1).to({x:843.9},0).wait(1).to({x:843.05},0).wait(1).to({x:842.15},0).wait(1).to({x:841.3},0).wait(1).to({x:840.4},0).wait(1).to({x:839.55},0).wait(1).to({x:838.65},0).wait(1).to({x:837.8},0).wait(1).to({x:836.9},0).wait(1).to({x:836},0).wait(1).to({x:835.15},0).wait(1).to({x:834.25},0).wait(1).to({x:833.4},0).wait(1).to({x:832.5},0).wait(1).to({x:831.65},0).wait(1).to({x:830.75},0).wait(1).to({x:829.9},0).wait(1).to({x:829},0).wait(1).to({x:828.15},0).wait(1).to({x:827.25},0).wait(1).to({x:826.4},0).wait(1).to({x:825.5},0).wait(1).to({x:824.65},0).wait(1).to({x:823.75},0).wait(1).to({x:822.9},0).wait(1).to({x:822},0).wait(1).to({x:821.1},0).wait(1).to({x:820.25},0).wait(1).to({x:819.35},0).wait(1).to({x:818.5},0).wait(1).to({x:817.6},0).wait(1).to({x:816.75},0).wait(1).to({x:815.85},0).wait(1).to({x:815},0).wait(1).to({x:814.1},0).wait(1).to({x:813.25},0).wait(1).to({x:812.35},0).wait(1).to({x:811.5},0).wait(1).to({x:810.6},0).wait(1).to({x:809.75},0).wait(1).to({x:808.85},0).wait(1).to({x:808},0).wait(1).to({x:807.1},0).wait(1).to({x:806.25},0).wait(1).to({x:805.35},0).wait(1).to({x:804.45},0).wait(1).to({x:803.6},0).wait(1).to({x:802.7},0).wait(1).to({x:801.85},0).wait(1).to({x:800.95},0).wait(1).to({x:800.1},0).wait(1).to({x:799.2},0).wait(1).to({x:798.35},0).wait(1).to({x:797.45},0).wait(1).to({x:796.6},0).wait(1).to({x:795.7},0).wait(1).to({x:794.85},0).wait(1).to({x:793.95},0).wait(1).to({x:793.1},0).wait(1).to({x:792.2},0).wait(1).to({x:791.35},0).wait(1).to({x:790.45},0).wait(1).to({x:789.55},0).wait(1).to({x:788.7},0).wait(1).to({x:787.8},0).wait(1).to({x:786.95},0).wait(1).to({x:786.05},0).wait(1).to({x:785.2},0).wait(1).to({x:784.3},0).wait(1).to({x:783.45},0).wait(1).to({x:782.55},0).wait(1).to({x:781.7},0).wait(1).to({x:780.8},0).wait(1).to({x:779.95},0).wait(1).to({x:779.05},0).wait(1).to({x:778.2},0).wait(1).to({x:777.3},0).wait(1).to({x:776.45},0).wait(1).to({x:775.55},0).wait(1).to({x:774.65},0).wait(1).to({x:773.8},0).wait(1).to({x:772.9},0).wait(1).to({x:772.05},0).wait(1).to({x:771.15},0).wait(1).to({x:770.3},0).wait(1).to({x:769.4},0).wait(1).to({x:768.55},0).wait(1).to({x:767.65},0).wait(1).to({x:766.8},0).wait(1).to({x:765.9},0).wait(1).to({x:765.05},0).wait(1).to({x:764.15},0).wait(1).to({x:763.3},0).wait(1).to({x:762.4},0).wait(1).to({x:761.55},0).wait(1).to({x:760.65},0).wait(1).to({x:759.75},0).wait(1).to({x:758.9},0).wait(1).to({x:758},0).wait(1).to({x:757.15},0).wait(1).to({x:756.25},0).wait(1).to({x:755.4},0).wait(1).to({x:754.5},0).wait(1).to({x:753.65},0).wait(1).to({x:752.75},0).wait(1).to({x:751.9},0).wait(1).to({x:751},0).wait(1).to({x:750.15},0).wait(1).to({x:749.25},0).wait(1).to({x:748.4},0).wait(1).to({x:747.5},0).wait(1).to({x:746.65},0).wait(1).to({x:745.75},0).wait(1).to({x:744.85},0).wait(1).to({x:744},0).wait(1).to({x:743.1},0).wait(1).to({x:742.25},0).wait(1).to({x:741.35},0).wait(1).to({x:740.5},0).wait(1).to({x:739.6},0).wait(1).to({x:738.75},0).wait(1).to({x:737.85},0).wait(1).to({x:737},0).wait(1).to({x:736.1},0).wait(1).to({x:735.25},0).wait(1).to({x:734.35},0).wait(1).to({x:733.5},0).wait(1).to({x:732.6},0).wait(1).to({x:731.75},0).wait(1).to({x:730.85},0).wait(1).to({x:729.95},0).wait(1).to({x:729.1},0).wait(1).to({x:728.2},0).wait(1).to({x:727.35},0).wait(1).to({x:726.45},0).wait(1).to({x:725.6},0).wait(1).to({x:724.7},0).wait(1).to({x:723.85},0).wait(1).to({x:722.95},0).wait(1).to({x:722.1},0).wait(1).to({x:721.2},0).wait(1).to({x:720.35},0).wait(1).to({x:719.45},0).wait(1).to({x:718.6},0).wait(1).to({x:717.7},0).wait(1).to({x:716.85},0).wait(1).to({x:715.95},0).wait(1).to({x:715.05},0).wait(1).to({x:714.2},0).wait(1).to({x:713.3},0).wait(1).to({x:712.45},0).wait(1).to({x:711.55},0).wait(1).to({x:710.7},0).wait(1).to({x:709.8},0).wait(1).to({x:708.95},0).wait(1).to({x:708.05},0).wait(1).to({x:707.2},0).wait(1).to({x:706.3},0).wait(1).to({x:705.45},0).wait(1).to({x:704.55},0).wait(1).to({x:703.7},0).wait(1).to({x:702.8},0).wait(1).to({x:701.95},0).wait(1).to({x:701.05},0).wait(1).to({x:700.2},0).wait(1).to({x:699.3},0).wait(1).to({x:698.4},0).wait(1).to({x:697.55},0).wait(1).to({x:696.65},0).wait(1).to({x:695.8},0).wait(1).to({x:694.9},0).wait(1).to({x:694.05},0).wait(1).to({x:693.15},0).wait(1).to({x:692.3},0).wait(1).to({x:691.4},0).wait(1).to({x:690.55},0).wait(1).to({x:689.65},0).wait(1).to({x:688.8},0).wait(1).to({x:687.9},0).wait(1).to({x:687.05},0).wait(1).to({x:686.15},0).wait(1).to({x:685.3},0).wait(1).to({x:684.4},0).wait(1).to({x:683.5},0).wait(1).to({x:682.65},0).wait(1).to({x:681.75},0).wait(1).to({x:680.9},0).wait(1).to({x:680},0).wait(1).to({x:679.15},0).wait(1).to({x:678.25},0).wait(1).to({x:677.4},0).wait(1).to({x:676.5},0).wait(1).to({x:675.65},0).wait(1).to({x:674.75},0).wait(1).to({x:673.9},0).wait(1).to({x:673},0).wait(1).to({x:672.15},0).wait(1).to({x:671.25},0).wait(1).to({x:670.4},0).wait(1).to({x:669.5},0).wait(1).to({x:668.6},0).wait(1).to({x:667.75},0).wait(1).to({x:666.85},0).wait(1).to({x:666},0).wait(1).to({x:665.1},0).wait(1).to({x:664.25},0).wait(1).to({x:663.35},0).wait(1).to({x:662.5},0).wait(1).to({x:661.6},0).wait(1).to({x:660.75},0).wait(1).to({x:659.85},0).wait(1).to({x:659},0).wait(1).to({x:658.1},0).wait(1).to({x:657.25},0).wait(1).to({x:656.35},0).wait(1).to({x:655.5},0).wait(1).to({x:654.6},0).wait(1).to({x:653.7},0).wait(1).to({x:652.85},0).wait(1).to({x:651.95},0).wait(1).to({x:651.1},0).wait(1).to({x:650.2},0).wait(1).to({x:649.35},0).wait(1).to({x:648.45},0).wait(1).to({x:647.6},0).wait(1).to({x:646.7},0).wait(1).to({x:645.85},0).wait(1).to({x:644.95},0).wait(1).to({x:644.1},0).wait(1).to({x:643.2},0).wait(1).to({x:642.35},0).wait(1).to({x:641.45},0).wait(1).to({x:640.6},0).wait(1).to({x:639.7},0).wait(1).to({x:638.8},0).wait(1).to({x:637.95},0).wait(1).to({x:637.05},0).wait(1).to({x:636.2},0).wait(1).to({x:635.3},0).wait(1).to({x:634.45},0).wait(1).to({x:633.55},0).wait(1).to({x:632.7},0).wait(1).to({x:631.8},0).wait(1).to({x:630.95},0).wait(1).to({x:630.05},0).wait(1).to({x:629.2},0).wait(1).to({x:628.3},0).wait(1).to({x:627.45},0).wait(1).to({x:626.55},0).wait(1).to({x:625.7},0).wait(1).to({x:624.8},0).wait(1).to({x:623.9},0).wait(1).to({x:623.05},0).wait(1).to({x:622.15},0).wait(1).to({x:621.3},0).wait(1).to({x:620.4},0).wait(1).to({x:619.55},0).wait(1).to({x:618.65},0).wait(1).to({x:617.8},0).wait(1).to({x:616.9},0).wait(1).to({x:616.05},0).wait(1).to({x:615.15},0).wait(1).to({x:614.3},0).wait(1).to({x:613.4},0).wait(1).to({x:612.55},0).wait(1).to({x:611.65},0).wait(1).to({x:610.8},0).wait(1).to({x:609.9},0).wait(1).to({x:609},0).wait(1).to({x:608.15},0).wait(1).to({x:607.25},0).wait(1).to({x:606.4},0).wait(1).to({x:605.5},0).wait(1).to({x:604.65},0).wait(1).to({x:603.75},0).wait(1).to({x:602.9},0).wait(1).to({x:602},0).wait(1).to({x:601.15},0).wait(1).to({x:600.25},0).wait(1).to({x:599.4},0).wait(1).to({x:598.5},0).wait(1).to({x:597.65},0).wait(1).to({x:596.75},0).wait(1).to({x:595.9},0).wait(1).to({x:595},0).wait(1).to({x:594.15},0).wait(1).to({x:593.25},0).wait(1).to({x:592.35},0).wait(1).to({x:591.5},0).wait(1).to({x:590.6},0).wait(1).to({x:589.75},0).wait(1).to({x:588.85},0).wait(1).to({x:588},0).wait(1).to({x:587.1},0).wait(1).to({x:586.25},0).wait(1).to({x:585.35},0).wait(1).to({x:584.5},0).wait(1).to({x:583.6},0).wait(1).to({x:582.75},0).wait(1).to({x:581.85},0).wait(1).to({x:581},0).wait(1).to({x:580.1},0).wait(1).to({x:579.25},0).wait(1).to({x:578.35},0).wait(1).to({x:577.45},0).wait(1).to({x:576.6},0).wait(1).to({x:575.7},0).wait(1).to({x:574.85},0).wait(1).to({x:573.95},0).wait(1).to({x:573.1},0).wait(1).to({x:572.2},0).wait(1).to({x:571.35},0).wait(1).to({x:570.45},0).wait(1).to({x:569.6},0).wait(1).to({x:568.7},0).wait(1).to({x:567.85},0).wait(1).to({x:566.95},0).wait(1).to({x:566.1},0).wait(1).to({x:565.2},0).wait(1).to({x:564.35},0).wait(1).to({x:563.45},0).wait(1).to({x:562.55},0).wait(1).to({x:561.7},0).wait(1).to({x:560.8},0).wait(1).to({x:559.95},0).wait(1).to({x:559.05},0).wait(1).to({x:558.2},0).wait(1).to({x:557.3},0).wait(1).to({x:556.45},0).wait(1).to({x:555.55},0).wait(1).to({x:554.7},0).wait(1).to({x:553.8},0).wait(1).to({x:552.95},0).wait(1).to({x:552.05},0).wait(1).to({x:551.2},0).wait(1).to({x:550.3},0).wait(1).to({x:549.45},0).wait(1).to({x:548.55},0).wait(1).to({x:547.65},0).wait(1).to({x:546.8},0).wait(1).to({x:545.9},0).wait(1).to({x:545.05},0).wait(1).to({x:544.15},0).wait(1).to({x:543.3},0).wait(1).to({x:542.4},0).wait(1).to({x:541.55},0).wait(1).to({x:540.65},0).wait(1).to({x:539.8},0).wait(1).to({x:538.9},0).wait(1).to({x:538.05},0).wait(1).to({x:537.15},0).wait(1).to({x:536.3},0).wait(1).to({x:535.4},0).wait(1).to({x:534.55},0).wait(1).to({x:533.65},0).wait(1).to({x:532.75},0).wait(1).to({x:531.9},0).wait(1).to({x:531},0).wait(1).to({x:530.15},0).wait(1).to({x:529.25},0).wait(1).to({x:528.4},0).wait(1).to({x:527.5},0).wait(1).to({x:526.65},0).wait(1).to({x:525.75},0).wait(1).to({x:524.9},0).wait(1).to({x:524},0).wait(1).to({x:523.15},0).wait(1).to({x:522.25},0).wait(1).to({x:521.4},0).wait(1).to({x:520.5},0).wait(1).to({x:519.65},0).wait(1).to({x:518.75},0).wait(1).to({x:517.85},0).wait(1).to({x:517},0).wait(1).to({x:516.1},0).wait(1).to({x:515.25},0).wait(1).to({x:514.35},0).wait(1).to({x:513.5},0).wait(1).to({x:512.6},0).wait(1).to({x:511.75},0).wait(1).to({x:510.85},0).wait(1).to({x:510},0).wait(1).to({x:509.1},0).wait(1).to({x:508.25},0).wait(1).to({x:507.35},0).wait(1).to({x:506.5},0).wait(1).to({x:505.6},0).wait(1).to({x:504.75},0).wait(1).to({x:503.85},0).wait(1).to({x:502.95},0).wait(1).to({x:502.1},0).wait(1).to({x:501.2},0).wait(1).to({x:500.35},0).wait(1).to({x:499.45},0).wait(1).to({x:498.6},0).wait(1).to({x:497.7},0).wait(1).to({x:496.85},0).wait(1).to({x:495.95},0).wait(1).to({x:495.1},0).wait(1).to({x:494.2},0).wait(1).to({x:493.35},0).wait(1).to({x:492.45},0).wait(1).to({x:491.6},0).wait(1).to({x:490.7},0).wait(1).to({x:489.85},0).wait(1).to({x:488.95},0).wait(1).to({x:488.05},0).wait(1).to({x:487.2},0).wait(1).to({x:486.3},0).wait(1).to({x:485.45},0).wait(1).to({x:484.55},0).wait(1).to({x:483.7},0).wait(1).to({x:482.8},0).wait(1).to({x:481.95},0).wait(1).to({x:481.05},0).wait(1).to({x:480.2},0).wait(1).to({x:479.3},0).wait(1).to({x:478.45},0).wait(1).to({x:477.55},0).wait(1).to({x:476.7},0).wait(1).to({x:475.8},0).wait(1).to({x:474.95},0).wait(1).to({x:474.05},0).wait(1).to({x:473.2},0).wait(1).to({x:472.3},0).wait(1).to({x:471.4},0).wait(1).to({x:470.55},0).wait(1).to({x:469.65},0).wait(1).to({x:468.8},0).wait(1).to({x:467.9},0).wait(1).to({x:467.05},0).wait(1).to({x:466.15},0).wait(1).to({x:465.3},0).wait(1).to({x:464.4},0).wait(1).to({x:463.55},0).wait(1).to({x:462.65},0).wait(1).to({x:461.8},0).wait(1).to({x:460.9},0).wait(1).to({x:460.05},0).wait(1).to({x:459.15},0).wait(1).to({x:458.3},0).wait(1).to({x:457.4},0).wait(1).to({x:456.5},0).wait(1).to({x:455.65},0).wait(1).to({x:454.75},0).wait(1).to({x:453.9},0).wait(1).to({x:453},0).wait(1).to({x:452.15},0).wait(1).to({x:451.25},0).wait(1).to({x:450.4},0).wait(1).to({x:449.5},0).wait(1).to({x:448.65},0).wait(1).to({x:447.75},0).wait(1).to({x:446.9},0).wait(1).to({x:446},0).wait(1).to({x:445.15},0).wait(1).to({x:444.25},0).wait(1).to({x:443.4},0).wait(1).to({x:442.5},0).wait(1).to({x:441.6},0).wait(1).to({x:440.75},0).wait(1).to({x:439.85},0).wait(1).to({x:439},0).wait(1).to({x:438.1},0).wait(1).to({x:437.25},0).wait(1).to({x:436.35},0).wait(1).to({x:435.5},0).wait(1).to({x:434.6},0).wait(1).to({x:433.75},0).wait(1).to({x:432.85},0).wait(1).to({x:432},0).wait(1).to({x:431.1},0).wait(1).to({x:430.25},0).wait(1).to({x:429.35},0).wait(1).to({x:428.5},0).wait(1).to({x:427.6},0).wait(1).to({x:426.7},0).wait(1).to({x:425.85},0).wait(1).to({x:424.95},0).wait(1).to({x:424.1},0).wait(1).to({x:423.2},0).wait(1).to({x:422.35},0).wait(1).to({x:421.45},0).wait(1).to({x:420.6},0).wait(1).to({x:419.7},0).wait(1).to({x:418.85},0).wait(1).to({x:417.95},0).wait(1).to({x:417.1},0).wait(1).to({x:416.2},0).wait(1).to({x:415.35},0).wait(1).to({x:414.45},0).wait(1).to({x:413.6},0).wait(1).to({x:412.7},0).wait(1).to({x:411.8},0).wait(1).to({x:410.95},0).wait(1).to({x:410.05},0).wait(1).to({x:409.2},0).wait(1).to({x:408.3},0).wait(1).to({x:407.45},0).wait(1).to({x:406.55},0).wait(1).to({x:405.7},0).wait(1).to({x:404.8},0).wait(1).to({x:403.95},0).wait(1).to({x:403.05},0).wait(1).to({x:402.2},0).wait(1).to({x:401.3},0).wait(1).to({x:400.45},0).wait(1).to({x:399.55},0).wait(1).to({x:398.7},0).wait(1).to({x:397.8},0).wait(1).to({x:396.9},0).wait(1).to({x:396.05},0).wait(1).to({x:395.15},0).wait(1).to({x:394.3},0).wait(1).to({x:393.4},0).wait(1).to({x:392.55},0).wait(1).to({x:391.65},0).wait(1).to({x:390.8},0).wait(1).to({x:389.9},0).wait(1).to({x:389.05},0).wait(1).to({x:388.15},0).wait(1).to({x:387.3},0).wait(1).to({x:386.4},0).wait(1).to({x:385.55},0).wait(1).to({x:384.65},0).wait(1).to({x:383.8},0).wait(1).to({x:382.9},0).wait(1).to({x:382},0).wait(1).to({x:381.15},0).wait(1).to({x:380.25},0).wait(1).to({x:379.4},0).wait(1).to({x:378.5},0).wait(1).to({x:377.65},0).wait(1).to({x:376.75},0).wait(1).to({x:375.9},0).wait(1).to({x:375},0).wait(1).to({x:374.15},0).wait(1).to({x:373.25},0).wait(1).to({x:372.4},0).wait(1).to({x:371.5},0).wait(1).to({x:370.65},0).wait(1).to({x:369.75},0).wait(1).to({x:368.9},0).wait(1).to({x:368},0).wait(1).to({x:367.15},0).wait(1).to({x:366.25},0).wait(1).to({x:365.35},0).wait(1).to({x:364.5},0).wait(1).to({x:363.6},0).wait(1).to({x:362.75},0).wait(1).to({x:361.85},0).wait(1).to({x:361},0).wait(1).to({x:360.1},0).wait(1).to({x:359.25},0).wait(1).to({x:358.35},0).wait(1).to({x:357.5},0).wait(1).to({x:356.6},0).wait(1).to({x:355.75},0).wait(1).to({x:354.85},0).wait(1).to({x:354},0).wait(1).to({x:353.1},0).wait(1).to({x:352.25},0).wait(1).to({x:351.35},0).wait(1).to({x:350.45},0).wait(1).to({x:349.6},0).wait(1).to({x:348.7},0).wait(1).to({x:347.85},0).wait(1).to({x:346.95},0).wait(1).to({x:346.1},0).wait(1).to({x:345.2},0).wait(1).to({x:344.35},0).wait(1).to({x:343.45},0).wait(1).to({x:342.6},0).wait(1).to({x:341.7},0).wait(1).to({x:340.85},0).wait(1).to({x:339.95},0).wait(1).to({x:339.1},0).wait(1).to({x:338.2},0).wait(1).to({x:337.35},0).wait(1).to({x:336.45},0).wait(1).to({x:335.55},0).wait(1).to({x:334.7},0).wait(1).to({x:333.8},0).wait(1).to({x:332.95},0).wait(1).to({x:332.05},0).wait(1).to({x:331.2},0).wait(1).to({x:330.3},0).wait(1).to({x:329.45},0).wait(1).to({x:328.55},0).wait(1).to({x:327.7},0).wait(1).to({x:326.8},0).wait(1).to({x:325.95},0).wait(1).to({x:325.05},0).wait(1).to({x:324.2},0).wait(1).to({x:323.3},0).wait(1).to({x:322.45},0).wait(1).to({x:321.55},0).wait(1).to({x:320.65},0).wait(1).to({x:319.8},0).wait(1).to({x:318.9},0).wait(1).to({x:318.05},0).wait(1).to({x:317.15},0).wait(1).to({x:316.3},0).wait(1).to({x:315.4},0).wait(1).to({x:314.55},0).wait(1).to({x:313.65},0).wait(1).to({x:312.8},0).wait(1).to({x:311.9},0).wait(1).to({x:311.05},0).wait(1).to({x:310.15},0).wait(1).to({x:309.3},0).wait(1).to({x:308.4},0).wait(1).to({x:307.55},0).wait(1).to({x:306.65},0).wait(1).to({x:305.75},0).wait(1).to({x:304.9},0).wait(1).to({x:304},0).wait(1).to({x:303.15},0).wait(1).to({x:302.25},0).wait(1).to({x:301.4},0).wait(1).to({x:300.5},0).wait(1).to({x:299.65},0).wait(1).to({x:298.75},0).wait(1).to({x:297.9},0).wait(1).to({x:297},0).wait(1).to({x:296.15},0).wait(1).to({x:295.25},0).wait(1).to({x:294.4},0).wait(1).to({x:293.5},0).wait(1).to({x:292.65},0).wait(1).to({x:291.75},0).wait(1).to({x:290.85},0).wait(1).to({x:290},0).wait(1).to({x:289.1},0).wait(1).to({x:288.25},0).wait(1).to({x:287.35},0).wait(1).to({x:286.5},0).wait(1).to({x:285.6},0).wait(1).to({x:284.75},0).wait(1).to({x:283.85},0).wait(1).to({x:283},0).wait(1).to({x:282.1},0).wait(1).to({x:281.25},0).wait(1).to({x:280.35},0).wait(1).to({x:279.5},0).wait(1).to({x:278.6},0).wait(1).to({x:277.75},0).wait(1).to({x:276.85},0).wait(1).to({x:275.95},0).wait(1).to({x:275.1},0).wait(1).to({x:274.2},0).wait(1).to({x:273.35},0).wait(1).to({x:272.45},0).wait(1).to({x:271.6},0).wait(1).to({x:270.7},0).wait(1).to({x:269.85},0).wait(1).to({x:268.95},0).wait(1).to({x:268.1},0).wait(1).to({x:267.2},0).wait(1).to({x:266.35},0).wait(1).to({x:265.45},0).wait(1).to({x:264.6},0).wait(1).to({x:263.7},0).wait(1).to({x:262.85},0).wait(1).to({x:261.95},0).wait(1).to({x:261.1},0).wait(1).to({x:260.2},0).wait(1).to({x:259.3},0).wait(1).to({x:258.45},0).wait(1).to({x:257.55},0).wait(1).to({x:256.7},0).wait(1).to({x:255.8},0).wait(1).to({x:254.95},0).wait(1).to({x:254.05},0).wait(1).to({x:253.2},0).wait(1).to({x:252.3},0).wait(1).to({x:251.45},0).wait(1).to({x:250.55},0).wait(1).to({x:249.7},0).wait(1).to({x:248.8},0).wait(1).to({x:247.95},0).wait(1).to({x:247.05},0).wait(1).to({x:246.2},0).wait(1).to({x:245.3},0).wait(1).to({x:244.4},0).wait(1).to({x:243.55},0).wait(1).to({x:242.65},0).wait(1).to({x:241.8},0).wait(1).to({x:240.9},0).wait(1).to({x:240.05},0).wait(1).to({x:239.15},0).wait(1).to({x:238.3},0).wait(1).to({x:237.4},0).wait(1).to({x:236.55},0).wait(1).to({x:235.65},0).wait(1).to({x:234.8},0).wait(1).to({x:233.9},0).wait(1).to({x:233.05},0).wait(1).to({x:232.15},0).wait(1).to({x:231.3},0).wait(1).to({x:230.4},0).wait(1).to({x:229.5},0).wait(1).to({x:228.65},0).wait(1).to({x:227.75},0).wait(1).to({x:226.9},0).wait(1).to({x:226},0).wait(1).to({x:225.15},0).wait(1).to({x:224.25},0).wait(1).to({x:223.4},0).wait(1).to({x:222.5},0).wait(1).to({x:221.65},0).wait(1).to({x:220.75},0).wait(1).to({x:219.9},0).wait(1).to({x:219},0).wait(1).to({x:218.15},0).wait(1).to({x:217.25},0).wait(1).to({x:216.4},0).wait(1).to({x:215.5},0).wait(1).to({x:214.6},0).wait(1).to({x:213.75},0).wait(1).to({x:212.85},0).wait(1).to({x:212},0).wait(1).to({x:211.1},0).wait(1).to({x:210.25},0).wait(1).to({x:209.35},0).wait(1).to({x:208.5},0).wait(1).to({x:207.6},0).wait(1).to({x:206.75},0).wait(1).to({x:205.85},0).wait(1).to({x:205},0).wait(1).to({x:204.1},0).wait(1).to({x:203.25},0).wait(1).to({x:202.35},0).wait(1).to({x:201.5},0).wait(1).to({x:200.6},0).wait(1).to({x:199.7},0).wait(1).to({x:198.85},0).wait(1).to({x:197.95},0).wait(1).to({x:197.1},0).wait(1).to({x:196.2},0).wait(1).to({x:195.35},0).wait(1).to({x:194.45},0).wait(1).to({x:193.6},0).wait(1).to({x:192.7},0).wait(1).to({x:191.85},0).wait(1).to({x:190.95},0).wait(1).to({x:190.1},0).wait(1).to({x:189.2},0).wait(1).to({x:188.35},0).wait(1).to({x:187.45},0).wait(1).to({x:186.6},0).wait(1).to({x:185.7},0).wait(1).to({x:184.8},0).wait(1).to({x:183.95},0).wait(1).to({x:183.05},0).wait(1).to({x:182.2},0).wait(1).to({x:181.3},0).wait(1).to({x:180.45},0).wait(1).to({x:179.55},0).wait(1).to({x:178.7},0).wait(1).to({x:177.8},0).wait(1).to({x:176.95},0).wait(1).to({x:176.05},0).wait(1).to({x:175.2},0).wait(1).to({x:174.3},0).wait(1).to({x:173.45},0).wait(1).to({x:172.55},0).wait(1).to({x:171.7},0).wait(1).to({x:170.8},0).wait(1).to({x:169.9},0).wait(1).to({x:169.05},0).wait(1).to({x:168.15},0).wait(1).to({x:167.3},0).wait(1).to({x:166.4},0).wait(1).to({x:165.55},0).wait(1).to({x:164.65},0).wait(1).to({x:163.8},0).wait(1).to({x:162.9},0).wait(1).to({x:162.05},0).wait(1).to({x:161.15},0).wait(1).to({x:160.3},0).wait(1).to({x:159.4},0).wait(1).to({x:158.55},0).wait(1).to({x:157.65},0).wait(1).to({x:156.8},0).wait(1).to({x:155.9},0).wait(1).to({x:155},0).wait(1).to({x:154.15},0).wait(1).to({x:153.25},0).wait(1).to({x:152.4},0).wait(1).to({x:151.5},0).wait(1).to({x:150.65},0).wait(1).to({x:149.75},0).wait(1).to({x:148.9},0).wait(1).to({x:148},0).wait(1).to({x:147.15},0).wait(1).to({x:146.25},0).wait(1).to({x:145.4},0).wait(1).to({x:144.5},0).wait(1).to({x:143.65},0).wait(1).to({x:142.75},0).wait(1).to({x:141.9},0).wait(1).to({x:141},0).wait(1).to({x:140.15},0).wait(1).to({x:139.25},0).wait(1).to({x:138.35},0).wait(1).to({x:137.5},0).wait(1).to({x:136.6},0).wait(1).to({x:135.75},0).wait(1).to({x:134.85},0).wait(1).to({x:134},0).wait(1).to({x:133.1},0).wait(1).to({x:132.25},0).wait(1).to({x:131.35},0).wait(1).to({x:130.5},0).wait(1).to({x:129.6},0).wait(1).to({x:128.75},0).wait(1).to({x:127.85},0).wait(1).to({x:127},0).wait(1).to({x:126.1},0).wait(1).to({x:125.25},0).wait(1).to({x:124.35},0).wait(1).to({x:123.45},0).wait(1).to({x:122.6},0).wait(1).to({x:121.7},0).wait(1).to({x:120.85},0).wait(1).to({x:119.95},0).wait(1).to({x:119.1},0).wait(1).to({x:118.2},0).wait(1).to({x:117.35},0).wait(1).to({x:116.45},0).wait(1).to({x:115.6},0).wait(1).to({x:114.7},0).wait(1).to({x:113.85},0).wait(1).to({x:112.95},0).wait(1).to({x:112.1},0).wait(1).to({x:111.2},0).wait(1).to({x:110.35},0).wait(1).to({x:109.45},0).wait(1).to({x:108.55},0).wait(1).to({x:107.7},0).wait(1).to({x:106.8},0).wait(1).to({x:105.95},0).wait(1).to({x:105.05},0).wait(1).to({x:104.2},0).wait(1).to({x:103.3},0).wait(1).to({x:102.45},0).wait(1).to({x:101.55},0).wait(1).to({x:100.7},0).wait(1).to({x:99.8},0).wait(1).to({x:98.95},0).wait(1).to({x:98.05},0).wait(1).to({x:97.2},0).wait(1).to({x:96.3},0).wait(1).to({x:95.45},0).wait(1).to({x:94.55},0).wait(1).to({x:93.65},0).wait(1).to({x:92.8},0).wait(1).to({x:91.9},0).wait(1).to({x:91.05},0).wait(1).to({x:90.15},0).wait(1).to({x:89.3},0).wait(1).to({x:88.4},0).wait(1).to({x:87.55},0).wait(1).to({x:86.65},0).wait(1).to({x:85.8},0).wait(1).to({x:84.9},0).wait(1).to({x:84.05},0).wait(1).to({x:83.15},0).wait(1).to({x:82.3},0).wait(1).to({x:81.4},0).wait(1).to({x:80.55},0).wait(1).to({x:79.65},0).wait(1).to({x:78.75},0).wait(1).to({x:77.9},0).wait(1).to({x:77},0).wait(1).to({x:76.15},0).wait(1).to({x:75.25},0).wait(1).to({x:74.4},0).wait(1).to({x:73.5},0).wait(1).to({x:72.65},0).wait(1).to({x:71.75},0).wait(1).to({x:70.9},0).wait(1).to({x:70},0).wait(1).to({x:69.15},0).wait(1).to({x:68.25},0).wait(1).to({x:67.4},0).wait(1).to({x:66.5},0).wait(1).to({x:65.65},0).wait(1).to({x:64.75},0).wait(1).to({x:63.85},0).wait(1).to({x:63},0).wait(1).to({x:62.1},0).wait(1).to({x:61.25},0).wait(1).to({x:60.35},0).wait(1).to({x:59.5},0).wait(1).to({x:58.6},0).wait(1).to({x:57.75},0).wait(1).to({x:56.85},0).wait(1).to({x:56},0).wait(1).to({x:55.1},0).wait(1).to({x:54.25},0).wait(1).to({x:53.35},0).wait(1).to({x:52.5},0).wait(1).to({x:51.6},0).wait(1).to({x:50.75},0).wait(1).to({x:49.85},0).wait(1).to({x:48.95},0).wait(1).to({x:48.1},0).wait(1).to({x:47.2},0).wait(1).to({x:46.35},0).wait(1).to({x:45.45},0).wait(1).to({x:44.6},0).wait(1).to({x:43.7},0).wait(1).to({x:42.85},0).wait(1).to({x:41.95},0).wait(1).to({x:41.1},0).wait(1).to({x:40.2},0).wait(1).to({x:39.35},0).wait(1).to({x:38.45},0).wait(1).to({x:37.6},0).wait(1).to({x:36.7},0).wait(1).to({x:35.85},0).wait(1).to({x:34.95},0).wait(1).to({x:34.1},0).wait(1).to({x:33.2},0).wait(1).to({x:32.3},0).wait(1).to({x:31.45},0).wait(1).to({x:30.55},0).wait(1).to({x:29.7},0).wait(1).to({x:28.8},0).wait(1).to({x:27.95},0).wait(1).to({x:27.05},0).wait(1).to({x:26.2},0).wait(1).to({x:25.3},0).wait(1).to({x:24.45},0).wait(1).to({x:23.55},0).wait(1).to({x:22.7},0).wait(1).to({x:21.8},0).wait(1).to({x:20.95},0).wait(1).to({x:20.05},0).wait(1).to({x:19.2},0).wait(1).to({x:18.3},0).wait(1).to({x:17.4},0).wait(1).to({x:16.55},0).wait(1).to({x:15.65},0).wait(1).to({x:14.8},0).wait(1).to({x:13.9},0).wait(1).to({x:13.05},0).wait(1).to({x:12.15},0).wait(1).to({x:11.3},0).wait(1).to({x:10.4},0).wait(1).to({x:9.55},0).wait(1).to({x:8.65},0).wait(1).to({x:7.8},0).wait(1).to({x:6.9},0).wait(1).to({x:6.05},0).wait(1).to({x:5.15},0).wait(1).to({x:4.3},0).wait(1).to({x:3.4},0).wait(1).to({x:2.5},0).wait(1).to({x:1.65},0).wait(1).to({x:0.75},0).wait(1).to({x:-0.1},0).wait(1).to({x:-1},0).wait(1).to({x:-1.85},0).wait(1).to({x:-2.75},0).wait(1).to({x:-3.6},0).wait(1).to({x:-4.5},0).wait(1).to({x:-5.35},0).wait(1).to({x:-6.25},0).wait(1).to({x:-7.1},0).wait(1).to({x:-8},0).wait(1).to({x:-8.85},0).wait(1).to({x:-9.75},0).wait(1).to({x:-10.6},0).wait(1).to({x:-11.5},0).wait(1).to({x:-12.4},0).wait(1).to({x:-13.25},0).wait(1).to({x:-14.15},0).wait(1).to({x:-15},0).wait(1).to({x:-15.9},0).wait(1).to({x:-16.75},0).wait(1).to({x:-17.65},0).wait(1).to({x:-18.5},0).wait(1).to({x:-19.4},0).wait(1).to({x:-20.25},0).wait(1).to({x:-21.15},0).wait(1).to({x:-22},0).wait(1).to({x:-22.9},0).wait(1).to({x:-23.75},0).wait(1).to({x:-24.65},0).wait(1).to({x:-25.5},0).wait(1).to({x:-26.4},0).wait(1).to({x:-27.3},0).wait(1).to({x:-28.15},0).wait(1).to({x:-29.05},0).wait(1).to({x:-29.9},0).wait(1).to({x:-30.8},0).wait(1).to({x:-31.65},0).wait(1).to({x:-32.55},0).wait(1).to({x:-33.4},0).wait(1).to({x:-34.3},0).wait(1).to({x:-35.15},0).wait(1).to({x:-36.05},0).wait(1).to({x:-36.9},0).wait(1).to({x:-37.8},0).wait(1).to({x:-38.65},0).wait(1).to({x:-39.55},0).wait(1).to({x:-40.4},0).wait(1).to({x:-41.3},0).wait(1).to({x:-42.2},0).wait(1).to({x:-43.05},0).wait(1).to({x:-43.95},0).wait(1).to({x:-44.8},0).wait(1).to({x:-45.7},0).wait(1).to({x:-46.55},0).wait(1).to({x:-47.45},0).wait(1).to({x:-48.3},0).wait(1).to({x:-49.2},0).wait(1).to({x:-50.05},0).wait(1).to({x:-50.95},0).wait(1).to({x:-51.8},0).wait(1).to({x:-52.7},0).wait(1).to({x:-53.55},0).wait(1).to({x:-54.45},0).wait(1).to({x:-55.3},0).wait(1).to({x:-56.2},0).wait(1).to({x:-57.1},0).wait(1).to({x:-57.95},0).wait(1).to({x:-58.85},0).wait(1).to({x:-59.7},0).wait(1).to({x:-60.6},0).wait(1).to({x:-61.45},0).wait(1).to({x:-62.35},0).wait(1).to({x:-63.2},0).wait(1).to({x:-64.1},0).wait(1).to({x:-64.95},0).wait(1).to({x:-65.85},0).wait(1).to({x:-66.7},0).wait(1).to({x:-67.6},0).wait(1).to({x:-68.45},0).wait(1).to({x:-69.35},0).wait(1).to({x:-70.2},0).wait(1).to({x:-71.1},0).wait(1).to({x:-71.95},0).wait(1).to({x:-72.85},0).wait(1).to({x:-73.75},0).wait(1).to({x:-74.6},0).wait(1).to({x:-75.5},0).wait(1).to({x:-76.35},0).wait(1).to({x:-77.25},0).wait(1).to({x:-78.1},0).wait(1).to({x:-79},0).wait(1).to({x:-79.85},0).wait(1).to({x:-80.75},0).wait(1).to({x:-81.6},0).wait(1).to({x:-82.5},0).wait(1).to({x:-83.35},0).wait(1).to({x:-84.25},0).wait(1).to({x:-85.1},0).wait(1).to({x:-86},0).wait(1).to({x:-86.85},0).wait(1).to({x:-87.75},0).wait(1).to({x:-88.65},0).wait(1).to({x:-89.5},0).wait(1).to({x:-90.4},0).wait(1).to({x:-91.25},0).wait(1).to({x:-92.15},0).wait(1).to({x:-93},0).wait(1).to({x:-93.9},0).wait(1).to({x:-94.75},0).wait(1).to({x:-95.65},0).wait(1).to({x:-96.5},0).wait(1).to({x:-97.4},0).wait(1).to({x:-98.25},0).wait(1).to({x:-99.15},0).wait(1).to({x:-100},0).wait(1).to({x:-100.9},0).wait(1).to({x:-101.75},0).wait(1).to({x:-102.65},0).wait(1).to({x:-103.55},0).wait(1).to({x:-104.4},0).wait(1).to({x:-105.3},0).wait(1).to({x:-106.15},0).wait(1).to({x:-107.05},0).wait(1).to({x:-107.9},0).wait(1).to({x:-108.8},0).wait(1).to({x:-109.65},0).wait(1).to({x:-110.55},0).wait(1).to({x:-111.4},0).wait(1).to({x:-112.3},0).wait(1).to({x:-113.15},0).wait(1).to({x:-114.05},0).wait(1).to({x:-114.9},0).wait(1).to({x:-115.8},0).wait(1).to({x:-116.65},0).wait(1).to({x:-117.55},0).wait(1).to({x:-118.45},0).wait(1).to({x:-119.3},0).wait(1).to({x:-120.2},0).wait(1).to({x:-121.05},0).wait(1).to({x:-121.95},0).wait(1).to({x:-122.8},0).wait(1).to({x:-123.7},0).wait(1).to({x:-124.55},0).wait(1).to({x:-125.45},0).wait(1).to({x:-126.3},0).wait(1).to({x:-127.2},0).wait(1).to({x:-128.05},0).wait(1).to({x:-128.95},0).wait(1).to({x:-129.8},0).wait(1).to({x:-130.7},0).wait(1).to({x:-131.55},0).wait(1).to({x:-132.45},0).wait(1).to({x:-133.35},0).wait(1).to({x:-134.2},0).wait(1).to({x:-135.1},0).wait(1).to({x:-135.95},0).wait(1).to({x:-136.85},0).wait(1).to({x:-137.7},0).wait(1).to({x:-138.6},0).wait(1).to({x:-139.45},0).wait(1).to({x:-140.35},0).wait(1).to({x:-141.2},0).wait(1).to({x:-142.1},0).wait(1).to({x:-142.95},0).wait(1).to({x:-143.85},0).wait(1).to({x:-144.7},0).wait(1).to({x:-145.6},0).wait(1).to({x:-146.45},0).wait(1).to({x:-147.35},0).wait(1).to({x:-148.25},0).wait(1).to({x:-149.1},0).wait(1).to({x:-150},0).wait(1).to({x:-150.85},0).wait(1).to({x:-151.75},0).wait(1).to({x:-152.6},0).wait(1).to({x:-153.5},0).wait(1).to({x:-154.35},0).wait(1).to({x:-155.25},0).wait(1).to({x:-156.1},0).wait(1).to({x:-157},0).wait(1).to({x:-157.85},0).wait(1).to({x:-158.75},0).wait(1).to({x:-159.6},0).wait(1).to({x:-160.5},0).wait(1).to({x:-161.35},0).wait(1).to({x:-162.25},0).wait(1).to({x:-163.15},0).wait(1).to({x:-164},0).wait(1).to({x:-164.9},0).wait(1).to({x:-165.75},0).wait(1).to({x:-166.65},0).wait(1).to({x:-167.5},0).wait(1).to({x:-168.4},0).wait(1).to({x:-169.25},0).wait(1).to({x:-170.15},0).wait(1).to({x:-171},0).wait(1).to({x:-171.9},0).wait(1).to({x:-172.75},0).wait(1).to({x:-173.65},0).wait(1).to({x:-174.5},0).wait(1).to({x:-175.4},0).wait(1).to({x:-176.25},0).wait(1).to({x:-177.15},0).wait(1).to({x:-178.05},0).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2B3B3").s().p("ABcNaIAAjnIBMABIAAozIBeACIAAivIA/ACIAACdIA5ACIABl7IBbgBIBeA0IBjADIgBHRIBXADIAAjYIAoABIAABZIA7ACIAAivIAlABIAAhLIAgABIAAAoIAmABIAAA0IAvACIgBCLIApBRIAADCIArANIAADlIBNABIgCkHIAcgJIAAoSIAzAAIAqg4IBwAAIAAA3IB8AAIAAC0IBPABIAAOIgAVIFzIAQABIAAhAIgQAAgAGBFMIAQAAIAAg6IgQAAgADOEjIAQABIABg6IgRgBgAJVC7IAQABIAAg6IgQgBgADOC7IARAAIAAg5IgRgBgAHwC4IAAg6IgRAAIAAA6IARAAgAGlC2IASAAIAAg6IgRAAgAMGC1IARAAIAAg5IgRgBgAGaC1IgBg5IgQgBIAAA6IARAAgAVUCsIAQAAIAAg/IgPgBgATbCZIAQAAIAAg/IgQgBgAHgA4IAQABIAAg5IgQgBgAHDA3IAQABIAAg5IgQgBgAGmA2IARABIAAg5IgRgBgAGJA2IARAAIAAg5IgRAAgAInABIARAAIAAg5IgQAAgATFhAIAWACIABhdIgXAAgAUmhAIAXAAIAAhcIgXgBgAWghXIAQAAIAAg/IgQAAgAV9hYIAQAAIAAg/IgQgBgAVahZIAQAAIAAg/IgPAAgAJdifIARAAIAAg6IgQAAgAJBigIAQAAIAAg5IgQgBgAIkihIARABIAAg6IgRgBgAIHiiIARABIAAg6IgRAAgA4/NaIAAnbIBIAAIAAjxIBOAAIACtoIAyABIBJhcICAADIAABXIB1ADIAAh8IBUgFIAsAtIAAB0IBZACIgBEEIBQAEIgBH6IBCACIAAEIIBHAAIABoOIBLACIAAhQIB6ADIBEA3IAAA0IBAACIAADfIA4BMIAABhIBSACIgBF6IA7AAIAADogAl0KcIASAAIAAg6IgRAAgAkIJHIARABIABg6IgSgBgAnNI9IASAAIAAg6IgSAAgAsHI3IAAiBIgkgBIAACCIAkAAgAtbH8IAVAAIAAhGIgVgBgAuNH8IAVAAIAAhGIgVgBgAu8H8IAVAAIAAhGIgVgBgAkIHfIASAAIAAg5IgSgBgAnNGmIASABIAAg6IgSgBgAyeGFIAbAAIAAhpIgbgBgAzWGFIAaAAIAAhpIgagBgA19F6IAAiTIgmgBIAACTIAmABgAkIFlIASABIAAg6IgSAAgAo0FHIASABIAAg7IgSAAgApTFGIASABIAAg6IgSgBgApyFFIASABIAAg6IgRAAgAnMEQIASAAIAAg6IgSgBgAvpD/IAaABIAAhpIgagBgAwhD/IAaABIAAhpIgagBgAxfD/IAcABIABhoIgdgBgAs0D8IAcgCIAAhaIgcgBgApBCwIATABIAAg7IgSAAgAozAOIASABIAAg5IgRgBgApSANIASABIAAg5IgSgBgApxAMIASABIAAg5IgSAAgAmdgfIARABIABg6IgSgBgAoyhIIASAAIAAg5IgSgBgAxKhIIAcAAIAAhpIgcAAgApShJIASABIAAg6IgSgBgApxhJIASAAIAAg6IgSAAgA0ihnIAcABIABhpIgcgBgA1YhnIAbABIAAhpIgbgBgA10nHIApABIAAiYIgpgBgAycnOIAoABIAAiYIgogCgAvEn0IAcABIAAhpIgcAAgAwCn1IAdAAIAAhoIgdgBgAw/n3IAcABIAAhpIgcAAg");
	this.shape_2.setTransform(188.25,214.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCE8FD").s().p("ABcWeMAAAgs7IXkAAMAAAAs7gA4/WeMAAAgs7IXGAAMAAAAs7g");
	this.shape_3.setTransform(188.2715,156.35,0.9972,1);

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


(lib.breds_together = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.breds_together, new cjs.Rectangle(2.5,0,63.099999999999994,47.9), null);


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

	this.instance_2 = new lib.breds_together();
	this.instance_2.setTransform(480.45,378.6,1,1,0,0,0,32.8,23.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},79).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).wait(1).to({y:383.7},0).wait(1).to({y:388.85},0).wait(1).to({y:394.05},0).wait(1).to({y:395.7},0).wait(323));

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
		playSound("Mainmusic_mixdown2");
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

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({scaleX:0.9962,scaleY:0.9962,x:639.1458,y:359.9323},0).wait(1).to({scaleX:0.9925,scaleY:0.9925,x:638.2917,y:359.8646},0).wait(1).to({scaleX:0.9887,scaleY:0.9887,x:637.4375,y:359.7969},0).wait(1).to({scaleX:0.985,scaleY:0.985,x:636.5833,y:359.7292},0).wait(1).to({scaleX:0.9812,scaleY:0.9812,x:635.7292,y:359.6615},0).wait(1).to({scaleX:0.9774,scaleY:0.9774,x:634.875,y:359.5938},0).wait(1).to({scaleX:0.9737,scaleY:0.9737,x:634.0208,y:359.526},0).wait(1).to({scaleX:0.9699,scaleY:0.9699,x:633.1667,y:359.4583},0).wait(1).to({scaleX:0.9661,scaleY:0.9661,x:632.3125,y:359.3906},0).wait(1).to({scaleX:0.9624,scaleY:0.9624,x:631.4583,y:359.3229},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:630.6042,y:359.2552},0).wait(1).to({scaleX:0.9549,scaleY:0.9549,x:629.75,y:359.1875},0).wait(1).to({scaleX:0.9511,scaleY:0.9511,x:628.8958,y:359.1198},0).wait(1).to({scaleX:0.9473,scaleY:0.9473,x:628.0417,y:359.0521},0).wait(1).to({scaleX:0.9436,scaleY:0.9436,x:627.1875,y:358.9844},0).wait(1).to({scaleX:0.9398,scaleY:0.9398,x:626.3333,y:358.9167},0).wait(1).to({scaleX:0.9361,scaleY:0.9361,x:625.4792,y:358.849},0).wait(1).to({scaleX:0.9323,scaleY:0.9323,x:624.625,y:358.7813},0).wait(1).to({scaleX:0.9285,scaleY:0.9285,x:623.7708,y:358.7135},0).wait(1).to({scaleX:0.9248,scaleY:0.9248,x:622.9167,y:358.6458},0).wait(1).to({scaleX:0.921,scaleY:0.921,x:622.0625,y:358.5781},0).wait(1).to({scaleX:0.9173,scaleY:0.9173,x:621.2083,y:358.5104},0).wait(1).to({scaleX:0.9135,scaleY:0.9135,x:620.3542,y:358.4427},0).wait(1).to({scaleX:0.9097,scaleY:0.9097,x:619.5,y:358.375},0).wait(1).to({scaleX:0.906,scaleY:0.906,x:618.6458,y:358.3073},0).wait(1).to({scaleX:0.9022,scaleY:0.9022,x:617.7917,y:358.2396},0).wait(1).to({scaleX:0.8984,scaleY:0.8984,x:616.9375,y:358.1719},0).wait(1).to({scaleX:0.8947,scaleY:0.8947,x:616.0833,y:358.1042},0).wait(1).to({scaleX:0.8909,scaleY:0.8909,x:615.2292,y:358.0365},0).wait(1).to({scaleX:0.8872,scaleY:0.8872,x:614.375,y:357.9688},0).wait(1).to({scaleX:0.8834,scaleY:0.8834,x:613.5208,y:357.901},0).wait(1).to({scaleX:0.8796,scaleY:0.8796,x:612.6667,y:357.8333},0).wait(1).to({scaleX:0.8759,scaleY:0.8759,x:611.8125,y:357.7656},0).wait(1).to({scaleX:0.8721,scaleY:0.8721,x:610.9583,y:357.6979},0).wait(1).to({scaleX:0.8684,scaleY:0.8684,x:610.1042,y:357.6302},0).wait(1).to({scaleX:0.8646,scaleY:0.8646,x:609.25,y:357.5625},0).wait(1).to({scaleX:0.8608,scaleY:0.8608,x:608.3958,y:357.4948},0).wait(1).to({scaleX:0.8571,scaleY:0.8571,x:607.5417,y:357.4271},0).wait(1).to({scaleX:0.8533,scaleY:0.8533,x:606.6875,y:357.3594},0).wait(1).to({scaleX:0.8495,scaleY:0.8495,x:605.8333,y:357.2917},0).wait(1).to({scaleX:0.8458,scaleY:0.8458,x:604.9792,y:357.224},0).wait(1).to({scaleX:0.842,scaleY:0.842,x:604.125,y:357.1563},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,x:603.2708,y:357.0885},0).wait(1).to({scaleX:0.8345,scaleY:0.8345,x:602.4167,y:357.0208},0).wait(1).to({scaleX:0.8307,scaleY:0.8307,x:601.5625,y:356.9531},0).wait(1).to({scaleX:0.827,scaleY:0.827,x:600.7083,y:356.8854},0).wait(1).to({scaleX:0.8232,scaleY:0.8232,x:599.8542,y:356.8177},0).wait(1).to({scaleX:0.8195,scaleY:0.8195,x:599,y:356.75},0).wait(1).to({regX:0.6,regY:0.6,scaleX:0.3231,scaleY:0.3231,x:547.9,y:349.95},0).wait(48).to({regX:0},0).wait(1).to({regY:0,scaleX:0.3224,scaleY:0.3224,x:547.4244,y:349.9229},0).wait(1).to({scaleX:0.3216,scaleY:0.3216,x:546.9487,y:350.0958},0).wait(1).to({scaleX:0.3208,scaleY:0.3208,x:546.4731,y:350.2687},0).wait(1).to({scaleX:0.3201,scaleY:0.3201,x:545.9974,y:350.4416},0).wait(1).to({scaleX:0.3193,scaleY:0.3193,x:545.5218,y:350.6145},0).wait(1).to({scaleX:0.3186,scaleY:0.3186,x:545.0462,y:350.7874},0).wait(1).to({scaleX:0.3178,scaleY:0.3178,x:544.5705,y:350.9603},0).wait(1).to({scaleX:0.317,scaleY:0.317,x:544.0949,y:351.1331},0).wait(1).to({scaleX:0.3163,scaleY:0.3163,x:543.6192,y:351.306},0).wait(1).to({scaleX:0.3155,scaleY:0.3155,x:543.1436,y:351.4789},0).wait(1).to({scaleX:0.3147,scaleY:0.3147,x:542.6679,y:351.6518},0).wait(1).to({scaleX:0.314,scaleY:0.314,x:542.1923,y:351.8247},0).wait(1).to({scaleX:0.3132,scaleY:0.3132,x:541.7167,y:351.9976},0).wait(1).to({scaleX:0.3125,scaleY:0.3125,x:541.241,y:352.1705},0).wait(1).to({scaleX:0.3117,scaleY:0.3117,x:540.7654,y:352.3434},0).wait(1).to({scaleX:0.3109,scaleY:0.3109,x:540.2897,y:352.5163},0).wait(1).to({scaleX:0.3102,scaleY:0.3102,x:539.8141,y:352.6892},0).wait(1).to({scaleX:0.3094,scaleY:0.3094,x:539.3385,y:352.8621},0).wait(1).to({scaleX:0.3086,scaleY:0.3086,x:538.8628,y:353.035},0).wait(1).to({scaleX:0.3079,scaleY:0.3079,x:538.3872,y:353.2079},0).wait(1).to({scaleX:0.3071,scaleY:0.3071,x:537.9115,y:353.3808},0).wait(1).to({scaleX:0.3064,scaleY:0.3064,x:537.4359,y:353.5537},0).wait(1).to({scaleX:0.3056,scaleY:0.3056,x:536.9603,y:353.7265},0).wait(1).to({scaleX:0.3048,scaleY:0.3048,x:536.4846,y:353.8994},0).wait(1).to({scaleX:0.3041,scaleY:0.3041,x:536.009,y:354.0723},0).wait(1).to({scaleX:0.3033,scaleY:0.3033,x:535.5333,y:354.2452},0).wait(1).to({scaleX:0.3025,scaleY:0.3025,x:535.0577,y:354.4181},0).wait(1).to({scaleX:0.3018,scaleY:0.3018,x:534.5821,y:354.591},0).wait(1).to({scaleX:0.301,scaleY:0.301,x:534.1064,y:354.7639},0).wait(1).to({scaleX:0.3003,scaleY:0.3003,x:533.6308,y:354.9368},0).wait(1).to({scaleX:0.2995,scaleY:0.2995,x:533.1551,y:355.1097},0).wait(1).to({scaleX:0.2987,scaleY:0.2987,x:532.6795,y:355.2826},0).wait(1).to({scaleX:0.298,scaleY:0.298,x:532.2038,y:355.4555},0).wait(1).to({scaleX:0.2972,scaleY:0.2972,x:531.7282,y:355.6284},0).wait(1).to({scaleX:0.2964,scaleY:0.2964,x:531.2526,y:355.8013},0).wait(1).to({scaleX:0.2957,scaleY:0.2957,x:530.7769,y:355.9742},0).wait(1).to({scaleX:0.2949,scaleY:0.2949,x:530.3013,y:356.1471},0).wait(1).to({scaleX:0.2942,scaleY:0.2942,x:529.8256,y:356.32},0).wait(1).to({scaleX:0.2934,scaleY:0.2934,x:529.35,y:356.4928},0).wait(1).to({scaleX:0.2926,scaleY:0.2926,x:528.8744,y:356.6657},0).wait(1).to({scaleX:0.2919,scaleY:0.2919,x:528.3987,y:356.8386},0).wait(1).to({scaleX:0.2911,scaleY:0.2911,x:527.9231,y:357.0115},0).wait(1).to({scaleX:0.2903,scaleY:0.2903,x:527.4474,y:357.1844},0).wait(1).to({scaleX:0.2896,scaleY:0.2896,x:526.9718,y:357.3573},0).wait(1).to({scaleX:0.2888,scaleY:0.2888,x:526.4962,y:357.5302},0).wait(1).to({scaleX:0.2881,scaleY:0.2881,x:526.0205,y:357.7031},0).wait(1).to({scaleX:0.2873,scaleY:0.2873,x:525.5449,y:357.876},0).wait(1).to({scaleX:0.2865,scaleY:0.2865,x:525.0692,y:358.0489},0).wait(1).to({scaleX:0.2858,scaleY:0.2858,x:524.5936,y:358.2218},0).wait(1).to({scaleX:0.285,scaleY:0.285,x:524.1179,y:358.3947},0).wait(1).to({scaleX:0.2842,scaleY:0.2842,x:523.6423,y:358.5676},0).wait(1).to({scaleX:0.2835,scaleY:0.2835,x:523.1667,y:358.7405},0).wait(1).to({scaleX:0.2827,scaleY:0.2827,x:522.691,y:358.9134},0).wait(1).to({scaleX:0.282,scaleY:0.282,x:522.2154,y:359.0862},0).wait(1).to({scaleX:0.2812,scaleY:0.2812,x:521.7397,y:359.2591},0).wait(1).to({scaleX:0.2804,scaleY:0.2804,x:521.2641,y:359.432},0).wait(1).to({scaleX:0.2797,scaleY:0.2797,x:520.7885,y:359.6049},0).wait(1).to({scaleX:0.2789,scaleY:0.2789,x:520.3128,y:359.7778},0).wait(1).to({scaleX:0.2781,scaleY:0.2781,x:519.8372,y:359.9507},0).wait(1).to({scaleX:0.2774,scaleY:0.2774,x:519.3615,y:360.1236},0).wait(1).to({scaleX:0.2766,scaleY:0.2766,x:518.8859,y:360.2965},0).wait(1).to({scaleX:0.2759,scaleY:0.2759,x:518.4103,y:360.4694},0).wait(1).to({scaleX:0.2751,scaleY:0.2751,x:517.9346,y:360.6423},0).wait(1).to({scaleX:0.2743,scaleY:0.2743,x:517.459,y:360.8152},0).wait(1).to({scaleX:0.2736,scaleY:0.2736,x:516.9833,y:360.9881},0).wait(1).to({scaleX:0.2728,scaleY:0.2728,x:516.5077,y:361.161},0).wait(1).to({scaleX:0.272,scaleY:0.272,x:516.0321,y:361.3339},0).wait(1).to({scaleX:0.2713,scaleY:0.2713,x:515.5564,y:361.5068},0).wait(1).to({scaleX:0.2705,scaleY:0.2705,x:515.0808,y:361.6796},0).wait(1).to({scaleX:0.2698,scaleY:0.2698,x:514.6051,y:361.8525},0).wait(1).to({scaleX:0.269,scaleY:0.269,x:514.1295,y:362.0254},0).wait(1).to({scaleX:0.2682,scaleY:0.2682,x:513.6538,y:362.1983},0).wait(1).to({scaleX:0.2675,scaleY:0.2675,x:513.1782,y:362.3712},0).wait(1).to({scaleX:0.2667,scaleY:0.2667,x:512.7026,y:362.5441},0).wait(1).to({scaleX:0.2659,scaleY:0.2659,x:512.2269,y:362.717},0).wait(1).to({scaleX:0.2652,scaleY:0.2652,x:511.7513,y:362.8899},0).wait(1).to({scaleX:0.2644,scaleY:0.2644,x:511.2756,y:363.0628},0).wait(1).to({scaleX:0.2637,scaleY:0.2637,x:510.8,y:363.2357},0).wait(1).to({scaleX:0.9933,scaleY:0.9933,x:640,y:360,visible:true},0).wait(1).to({scaleX:0.9902,scaleY:0.9902,y:360.0002},0).wait(1).to({scaleX:0.9872,scaleY:0.9872,y:360.0003},0).wait(1).to({scaleX:0.9841,scaleY:0.9841,y:360.0005},0).wait(1).to({scaleX:0.9811,scaleY:0.9811,y:360.0006},0).wait(1).to({scaleX:0.978,scaleY:0.978,y:360.0008},0).wait(1).to({scaleX:0.975,scaleY:0.975,y:360.0009},0).wait(1).to({scaleX:0.9719,scaleY:0.9719,y:360.0011},0).wait(1).to({scaleX:0.9689,scaleY:0.9689,y:360.0012},0).wait(1).to({scaleX:0.9658,scaleY:0.9658,y:360.0014},0).wait(1).to({scaleX:0.9628,scaleY:0.9628,y:360.0015},0).wait(1).to({scaleX:0.9597,scaleY:0.9597,y:360.0017},0).wait(1).to({scaleX:0.9567,scaleY:0.9567,y:360.0018},0).wait(1).to({scaleX:0.9536,scaleY:0.9536,y:360.002},0).wait(1).to({scaleX:0.9506,scaleY:0.9506,y:360.0021},0).wait(1).to({scaleX:0.9475,scaleY:0.9475,y:360.0023},0).wait(1).to({scaleX:0.9445,scaleY:0.9445,y:360.0024},0).wait(1).to({scaleX:0.9414,scaleY:0.9414,y:360.0026},0).wait(1).to({scaleX:0.9384,scaleY:0.9384,y:360.0027},0).wait(1).to({scaleX:0.9353,scaleY:0.9353,y:360.0029},0).wait(1).to({scaleX:0.9323,scaleY:0.9323,y:360.003},0).wait(1).to({scaleX:0.9292,scaleY:0.9292,y:360.0032},0).wait(1).to({scaleX:0.9262,scaleY:0.9262,y:360.0034},0).wait(1).to({scaleX:0.9231,scaleY:0.9231,y:360.0035},0).wait(1).to({scaleX:0.9201,scaleY:0.9201,y:360.0037},0).wait(1).to({scaleX:0.917,scaleY:0.917,y:360.0038},0).wait(1).to({scaleX:0.914,scaleY:0.914,y:360.004},0).wait(1).to({scaleX:0.9109,scaleY:0.9109,y:360.0041},0).wait(1).to({scaleX:0.9079,scaleY:0.9079,y:360.0043},0).wait(1).to({scaleX:0.9048,scaleY:0.9048,y:360.0044},0).wait(1).to({scaleX:0.9018,scaleY:0.9018,y:360.0046},0).wait(1).to({scaleX:0.8987,scaleY:0.8987,y:360.0047},0).wait(1).to({scaleX:0.8957,scaleY:0.8957,y:360.0049},0).wait(1).to({scaleX:0.8926,scaleY:0.8926,y:360.005},0).wait(1).to({scaleX:0.8896,scaleY:0.8896,y:360.0052},0).wait(1).to({scaleX:0.8865,scaleY:0.8865,y:360.0053},0).wait(1).to({scaleX:0.8835,scaleY:0.8835,y:360.0055},0).wait(1).to({scaleX:0.8804,scaleY:0.8804,y:360.0056},0).wait(1).to({scaleX:0.8774,scaleY:0.8774,y:360.0058},0).wait(1).to({scaleX:0.8743,scaleY:0.8743,y:360.0059},0).wait(1).to({scaleX:0.8713,scaleY:0.8713,y:360.0061},0).wait(1).to({scaleX:0.8682,scaleY:0.8682,y:360.0063},0).wait(1).to({scaleX:0.8652,scaleY:0.8652,y:360.0064},0).wait(1).to({scaleX:0.8621,scaleY:0.8621,y:360.0066},0).wait(1).to({scaleX:0.8591,scaleY:0.8591,y:360.0067},0).wait(1).to({scaleX:0.856,scaleY:0.856,y:360.0069},0).wait(1).to({scaleX:0.853,scaleY:0.853,y:360.007},0).wait(1).to({scaleX:0.8499,scaleY:0.8499,y:360.0072},0).wait(1).to({scaleX:0.8469,scaleY:0.8469,y:360.0073},0).wait(1).to({scaleX:0.8438,scaleY:0.8438,y:360.0075},0).wait(1).to({scaleX:0.8407,scaleY:0.8407,y:360.0076},0).wait(1).to({scaleX:0.8377,scaleY:0.8377,y:360.0078},0).wait(1).to({scaleX:0.8346,scaleY:0.8346,y:360.0079},0).wait(1).to({scaleX:0.8316,scaleY:0.8316,y:360.0081},0).wait(1).to({scaleX:0.8285,scaleY:0.8285,y:360.0082},0).wait(1).to({scaleX:0.8255,scaleY:0.8255,y:360.0084},0).wait(1).to({scaleX:0.8224,scaleY:0.8224,y:360.0085},0).wait(1).to({scaleX:0.8194,scaleY:0.8194,y:360.0087},0).wait(1).to({scaleX:0.8163,scaleY:0.8163,y:360.0088},0).wait(1).to({scaleX:0.8133,scaleY:0.8133,y:360.009},0).wait(1).to({scaleX:0.8102,scaleY:0.8102,y:360.0092},0).wait(1).to({scaleX:0.8072,scaleY:0.8072,y:360.0093},0).wait(1).to({scaleX:0.8041,scaleY:0.8041,y:360.0095},0).wait(1).to({scaleX:0.8011,scaleY:0.8011,y:360.0096},0).wait(1).to({scaleX:0.798,scaleY:0.798,y:360.0098},0).wait(1).to({scaleX:0.795,scaleY:0.795,y:360.0099},0).wait(1).to({scaleX:0.7919,scaleY:0.7919,y:360.0101},0).wait(1).to({scaleX:0.7889,scaleY:0.7889,y:360.0102},0).wait(1).to({scaleX:0.7858,scaleY:0.7858,y:360.0104},0).wait(1).to({scaleX:0.7828,scaleY:0.7828,y:360.0105},0).wait(1).to({scaleX:0.7797,scaleY:0.7797,y:360.0107},0).wait(1).to({scaleX:0.7767,scaleY:0.7767,y:360.0108},0).wait(1).to({scaleX:0.7736,scaleY:0.7736,y:360.011},0).wait(1).to({scaleX:0.7706,scaleY:0.7706,y:360.0111},0).wait(1).to({scaleX:0.7675,scaleY:0.7675,y:360.0113},0).wait(1).to({scaleX:0.7645,scaleY:0.7645,y:360.0114},0).wait(1).to({scaleX:0.7614,scaleY:0.7614,y:360.0116},0).wait(1).to({regX:0.6,regY:0.6,scaleX:0.4752,scaleY:0.4752,x:903.3,y:224.75},0).wait(1).to({regX:0,regY:0,scaleX:0.4739,scaleY:0.4739,x:903.0239,y:224.2856},0).wait(1).to({scaleX:0.4727,scaleY:0.4727,x:903.0477,y:224.1213},0).wait(1).to({scaleX:0.4714,scaleY:0.4714,x:903.0716,y:223.957},0).wait(1).to({scaleX:0.4701,scaleY:0.4701,x:903.0955,y:223.7926},0).wait(1).to({scaleX:0.4689,scaleY:0.4689,x:903.1193,y:223.6283},0).wait(1).to({scaleX:0.4676,scaleY:0.4676,x:903.1432,y:223.4639},0).wait(1).to({scaleX:0.4663,scaleY:0.4663,x:903.1671,y:223.2996},0).wait(1).to({scaleX:0.4651,scaleY:0.4651,x:903.1909,y:223.1352},0).wait(1).to({scaleX:0.4638,scaleY:0.4638,x:903.2148,y:222.9709},0).wait(1).to({scaleX:0.4625,scaleY:0.4625,x:903.2387,y:222.8066},0).wait(1).to({scaleX:0.4613,scaleY:0.4613,x:903.2625,y:222.6422},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:903.2864,y:222.4779},0).wait(1).to({scaleX:0.4587,scaleY:0.4587,x:903.3103,y:222.3135},0).wait(1).to({scaleX:0.4575,scaleY:0.4575,x:903.3341,y:222.1492},0).wait(1).to({scaleX:0.4562,scaleY:0.4562,x:903.358,y:221.9848},0).wait(1).to({scaleX:0.4549,scaleY:0.4549,x:903.3819,y:221.8205},0).wait(1).to({scaleX:0.4537,scaleY:0.4537,x:903.4057,y:221.6561},0).wait(1).to({scaleX:0.4524,scaleY:0.4524,x:903.4296,y:221.4918},0).wait(1).to({scaleX:0.4511,scaleY:0.4511,x:903.4535,y:221.3275},0).wait(1).to({scaleX:0.4499,scaleY:0.4499,x:903.4773,y:221.1631},0).wait(1).to({scaleX:0.4486,scaleY:0.4486,x:903.5012,y:220.9988},0).wait(1).to({scaleX:0.4473,scaleY:0.4473,x:903.5251,y:220.8344},0).wait(1).to({scaleX:0.4461,scaleY:0.4461,x:903.5489,y:220.6701},0).wait(1).to({scaleX:0.4448,scaleY:0.4448,x:903.5728,y:220.5057},0).wait(1).to({scaleX:0.4435,scaleY:0.4435,x:903.5967,y:220.3414},0).wait(1).to({scaleX:0.4423,scaleY:0.4423,x:903.6205,y:220.177},0).wait(1).to({scaleX:0.441,scaleY:0.441,x:903.6444,y:220.0127},0).wait(1).to({scaleX:0.4397,scaleY:0.4397,x:903.6683,y:219.8484},0).wait(1).to({scaleX:0.4385,scaleY:0.4385,x:903.6921,y:219.684},0).wait(1).to({scaleX:0.4372,scaleY:0.4372,x:903.716,y:219.5197},0).wait(1).to({scaleX:0.4359,scaleY:0.4359,x:903.7399,y:219.3553},0).wait(1).to({scaleX:0.4347,scaleY:0.4347,x:903.7637,y:219.191},0).wait(1).to({scaleX:0.4334,scaleY:0.4334,x:903.7876,y:219.0266},0).wait(1).to({scaleX:0.4321,scaleY:0.4321,x:903.8115,y:218.8623},0).wait(1).to({scaleX:0.4309,scaleY:0.4309,x:903.8353,y:218.698},0).wait(1).to({scaleX:0.4296,scaleY:0.4296,x:903.8592,y:218.5336},0).wait(1).to({scaleX:0.4283,scaleY:0.4283,x:903.8831,y:218.3693},0).wait(1).to({scaleX:0.4271,scaleY:0.4271,x:903.907,y:218.2049},0).wait(1).to({scaleX:0.4258,scaleY:0.4258,x:903.9308,y:218.0406},0).wait(1).to({scaleX:0.4245,scaleY:0.4245,x:903.9547,y:217.8762},0).wait(1).to({scaleX:0.4233,scaleY:0.4233,x:903.9786,y:217.7119},0).wait(1).to({scaleX:0.422,scaleY:0.422,x:904.0024,y:217.5475},0).wait(1).to({scaleX:0.4207,scaleY:0.4207,x:904.0263,y:217.3832},0).wait(1).to({scaleX:0.4195,scaleY:0.4195,x:904.0502,y:217.2189},0).wait(1).to({scaleX:0.4182,scaleY:0.4182,x:904.074,y:217.0545},0).wait(1).to({scaleX:0.4169,scaleY:0.4169,x:904.0979,y:216.8902},0).wait(1).to({scaleX:0.4157,scaleY:0.4157,x:904.1218,y:216.7258},0).wait(1).to({scaleX:0.4144,scaleY:0.4144,x:904.1456,y:216.5615},0).wait(1).to({scaleX:0.4131,scaleY:0.4131,x:904.1695,y:216.3971},0).wait(1).to({scaleX:0.4119,scaleY:0.4119,x:904.1934,y:216.2328},0).wait(1).to({scaleX:0.4106,scaleY:0.4106,x:904.2172,y:216.0684},0).wait(1).to({scaleX:0.4093,scaleY:0.4093,x:904.2411,y:215.9041},0).wait(1).to({scaleX:0.4081,scaleY:0.4081,x:904.265,y:215.7398},0).wait(1).to({scaleX:0.4068,scaleY:0.4068,x:904.2888,y:215.5754},0).wait(1).to({scaleX:0.4055,scaleY:0.4055,x:904.3127,y:215.4111},0).wait(1).to({scaleX:0.4043,scaleY:0.4043,x:904.3366,y:215.2467},0).wait(1).to({scaleX:0.403,scaleY:0.403,x:904.3604,y:215.0824},0).wait(1).to({scaleX:0.4017,scaleY:0.4017,x:904.3843,y:214.918},0).wait(1).to({scaleX:0.4005,scaleY:0.4005,x:904.4082,y:214.7537},0).wait(1).to({scaleX:0.3992,scaleY:0.3992,x:904.432,y:214.5894},0).wait(1).to({scaleX:0.3979,scaleY:0.3979,x:904.4559,y:214.425},0).wait(1).to({scaleX:0.3967,scaleY:0.3967,x:904.4798,y:214.2607},0).wait(1).to({scaleX:0.3954,scaleY:0.3954,x:904.5036,y:214.0963},0).wait(1).to({scaleX:0.3941,scaleY:0.3941,x:904.5275,y:213.932},0).wait(1).to({scaleX:0.3929,scaleY:0.3929,x:904.5514,y:213.7676},0).wait(1).to({scaleX:0.3916,scaleY:0.3916,x:904.5752,y:213.6033},0).wait(1).to({scaleX:0.3903,scaleY:0.3903,x:904.5991,y:213.4389},0).wait(1).to({scaleX:0.3891,scaleY:0.3891,x:904.623,y:213.2746},0).wait(1).to({scaleX:0.3878,scaleY:0.3878,x:904.6468,y:213.1103},0).wait(1).to({scaleX:0.3865,scaleY:0.3865,x:904.6707,y:212.9459},0).wait(1).to({scaleX:0.3853,scaleY:0.3853,x:904.6946,y:212.7816},0).wait(1).to({scaleX:0.384,scaleY:0.384,x:904.7184,y:212.6172},0).wait(1).to({scaleX:0.3827,scaleY:0.3827,x:904.7423,y:212.4529},0).wait(1).to({scaleX:0.3815,scaleY:0.3815,x:904.7662,y:212.2885},0).wait(1).to({scaleX:0.3802,scaleY:0.3802,x:904.79,y:212.1242},0).wait(1).to({scaleX:0.3789,scaleY:0.3789,x:904.8139,y:211.9598},0).wait(1).to({scaleX:0.3777,scaleY:0.3777,x:904.8378,y:211.7955},0).wait(1).to({scaleX:0.3764,scaleY:0.3764,x:904.8616,y:211.6312},0).wait(1).to({scaleX:0.3751,scaleY:0.3751,x:904.8855,y:211.4668},0).wait(1).to({scaleX:0.3739,scaleY:0.3739,x:904.9094,y:211.3025},0).wait(1).to({scaleX:0.3726,scaleY:0.3726,x:904.9332,y:211.1381},0).wait(1).to({scaleX:0.3713,scaleY:0.3713,x:904.9571,y:210.9738},0).wait(1).to({scaleX:0.3701,scaleY:0.3701,x:904.981,y:210.8094},0).wait(1).to({scaleX:0.3688,scaleY:0.3688,x:905.0049,y:210.6451},0).wait(1).to({scaleX:0.3675,scaleY:0.3675,x:905.0287,y:210.4808},0).wait(1).to({scaleX:0.3663,scaleY:0.3663,x:905.0526,y:210.3164},0).wait(1).to({scaleX:0.365,scaleY:0.365,x:905.0765,y:210.1521},0).wait(1).to({scaleX:0.3637,scaleY:0.3637,x:905.1003,y:209.9877},0).wait(1).to({scaleX:0.3625,scaleY:0.3625,x:905.1242,y:209.8234},0).wait(1).to({scaleX:0.3612,scaleY:0.3612,x:905.1481,y:209.659},0).wait(1).to({scaleX:0.3599,scaleY:0.3599,x:905.1719,y:209.4947},0).wait(1).to({scaleX:0.3587,scaleY:0.3587,x:905.1958,y:209.3303},0).wait(1).to({scaleX:0.3574,scaleY:0.3574,x:905.2197,y:209.166},0).wait(1).to({scaleX:0.3561,scaleY:0.3561,x:905.2435,y:209.0017},0).wait(1).to({scaleX:0.3549,scaleY:0.3549,x:905.2674,y:208.8373},0).wait(1).to({scaleX:0.3536,scaleY:0.3536,x:905.2913,y:208.673},0).wait(1).to({scaleX:0.3523,scaleY:0.3523,x:905.3151,y:208.5086},0).wait(1).to({scaleX:0.3511,scaleY:0.3511,x:905.339,y:208.3443},0).wait(1).to({scaleX:0.3498,scaleY:0.3498,x:905.3629,y:208.1799},0).wait(1).to({scaleX:0.3485,scaleY:0.3485,x:905.3867,y:208.0156},0).wait(1).to({scaleX:0.3473,scaleY:0.3473,x:905.4106,y:207.8512},0).wait(1).to({scaleX:0.346,scaleY:0.346,x:905.4345,y:207.6869},0).wait(1).to({scaleX:0.3447,scaleY:0.3447,x:905.4583,y:207.5226},0).wait(1).to({scaleX:0.3435,scaleY:0.3435,x:905.4822,y:207.3582},0).wait(1).to({scaleX:0.3422,scaleY:0.3422,x:905.5061,y:207.1939},0).wait(1).to({scaleX:0.3409,scaleY:0.3409,x:905.5299,y:207.0295},0).wait(1).to({scaleX:0.3397,scaleY:0.3397,x:905.5538,y:206.8652},0).wait(1).to({scaleX:0.3384,scaleY:0.3384,x:905.5777,y:206.7008},0).wait(1).to({scaleX:0.3371,scaleY:0.3371,x:905.6015,y:206.5365},0).wait(1).to({scaleX:0.3359,scaleY:0.3359,x:905.6254,y:206.3721},0).wait(1).to({scaleX:0.3346,scaleY:0.3346,x:905.6493,y:206.2078},0).wait(1).to({scaleX:0.3333,scaleY:0.3333,x:905.6731,y:206.0435},0).wait(1).to({scaleX:0.3321,scaleY:0.3321,x:905.697,y:205.8791},0).wait(1).to({scaleX:0.3308,scaleY:0.3308,x:905.7209,y:205.7148},0).wait(1).to({scaleX:0.3295,scaleY:0.3295,x:905.7447,y:205.5504},0).wait(1).to({scaleX:0.3283,scaleY:0.3283,x:905.7686,y:205.3861},0).wait(1).to({scaleX:0.327,scaleY:0.327,x:905.7925,y:205.2217},0).wait(1).to({scaleX:0.3257,scaleY:0.3257,x:905.8163,y:205.0574},0).wait(1).to({scaleX:0.3245,scaleY:0.3245,x:905.8402,y:204.8931},0).wait(1).to({scaleX:0.3232,scaleY:0.3232,x:905.8641,y:204.7287},0).wait(1).to({scaleX:0.3219,scaleY:0.3219,x:905.8879,y:204.5644},0).wait(1).to({scaleX:0.3207,scaleY:0.3207,x:905.9118,y:204.4},0).wait(1).to({scaleX:0.3194,scaleY:0.3194,x:905.9357,y:204.2357},0).wait(30).to({regY:0.6,scaleX:0.3231,scaleY:0.3231,x:547.9,y:349.95,visible:false},0).wait(1).to({regY:0,y:349.75},0).wait(12).to({regY:0.6,y:349.95},0).wait(1).to({regY:0,y:349.75},0).wait(11).to({scaleX:0.1826,scaleY:0.1826,x:481.65,y:174.9843},0).wait(59).to({regY:0.6,y:175.1},0).wait(1).to({regY:0,scaleX:1,scaleY:1,x:640,y:359.4504},0).wait(169).to({_off:true},1).wait(11));

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

	this.timeline.addTween(cjs.Tween.get(this.toastfly1).wait(406).to({regX:341.1,regY:233.4,scaleX:3.0948,scaleY:3.0948,x:0.05,y:0.05},0).wait(1).to({regX:502.4,regY:417.2,scaleX:1,scaleY:1,x:161.35,y:183.85},0).wait(219).to({regX:-0.2,regY:-0.7,x:0,y:-0.05},0).to({_off:true},35).wait(11));

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
	this.Window.setTransform(1153.5,234,1,1,0,0,0,1153.5,234);
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
		{src:"sounds/clock_mixdown.mp3?1618771899658", id:"clock_mixdown"},
		{src:"sounds/ding.mp3?1618771899658", id:"ding"},
		{src:"sounds/eating_mixdown.mp3?1618771899658", id:"eating_mixdown"},
		{src:"sounds/KitchenToasterLoading_01.mp3?1618771899658", id:"KitchenToasterLoading_01"},
		{src:"sounds/Mainmusic_mixdown2.mp3?1618771899658", id:"Mainmusic_mixdown2"},
		{src:"sounds/Woosh.mp3?1618771899658", id:"Woosh"}
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