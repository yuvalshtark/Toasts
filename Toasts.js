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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiwCxQhJhKAAhnQAAhmBJhKQBKhJBmAAQBoAABJBJQBJBKAABmQAABnhJBKQhJBJhoAAQhmAAhKhJg");
	this.shape_1.setTransform(62,37.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.text = new cjs.Text("Play", "bold 31px 'Calibri'", "#FFFFFF");
	this.text.lineHeight = 40;
	this.text.lineWidth = 192;
	this.text.parent = this;
	this.text.setTransform(100.5,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99B44B").s().p("AwaFfIAAq9MAg1AAAIAAK9g");
	this.shape_2.setTransform(105.1,35.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.5,95.9);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80).to({_off:false},0).wait(1).to({regX:1.4,regY:1.4,scaleX:0.9987,scaleY:0.9987,x:508.35,y:419.25},0).wait(559));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EBF6FC").s().p("A5/XBIAAg/MAz/AAAIAAA/gA5/VOIAAhAMAz/AAAIAABAgA5/TaIAAg/MAz/AAAIAAA/gA5/RnIAAhAMAz/AAAIAABAgA5/P0IAAg/MAz/AAAIAAA/gA5/OBIAAhAMAz/AAAIAABAgA5/MNIAAg/MAz/AAAIAAA/gA5/KaIAAhAMAz/AAAIAABAgA5/ImIAAg/MAz/AAAIAAA/gA5/G0IAAhBMAz/AAAIAABBgA5/FAIAAg/MAz/AAAIAAA/gA5/DNIAAhAMAz/AAAIAABAgA5/BZIAAg/MAz/AAAIAAA/gA5/gZIAAhAMAz/AAAIAABAgA5/iMIAAhAMAz/AAAIAABAgA5/j/IAAhAMAz/AAAIAABAgA5/lzIAAg/MAz/AAAIAAA/gA5/nmIAAhAMAz/AAAIAABAgA5/paIAAg/MAz/AAAIAAA/gA5/rNIAAhAMAz/AAAIAABAgA5/tAIAAg/MAz/AAAIAAA/gA5/uzIAAhAMAz/AAAIAABAgA5/wmIAAhAMAz/AAAIAABAgA5/yaIAAhAMAz/AAAIAABAgA5/0OIAAg/MAz/AAAIAAA/gA5/2AIAAhAMAz/AAAIAABAg");
	this.shape.setTransform(166.425,147.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,332.9,294.6), null);


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
	this.shape_18.setTransform(335.9231,125.9029,1.1152,1.1152);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EABE83").s().p("AVBF6Qg8gHgzBNIgSgUQgRgPjWgHQjJgGkLAFQqaAMgjAvIgCAEQgdhDgsgDQgqgCgoA5IgDgCQgXgIgPANQgZgzgkgHQgigGgjAkIAAgDQgBgsAEhCIABgUIgBgBQAEgfgegwQgTgdgZgdQgbgcgPgIQgDgBgQgDQgTgCgIACQg1ALgbAIQjkA/kMAJQg5AChPgMQhegOhIgcQjGhNAviOQAmh2COhXQBgg7Cfg0QApgNBRgeQBIgaAygKQBWgPBHgDQBxgDAuAgQANAKAdASQAdATAOAKQBPA5BqA0QCWBICkAqQCBAiCrAWQCHAREiASQE4ATEQgmIBRgPQC9glBYAHQCaANACB9IAAAcQAABRgKCAIgQDSQghgsgqACQgpADgnAvQgIgFgKAAQgjgEgSAhQgwhdg9gGg");
	this.shape_19.setTransform(176.4242,67.758);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EABE83").s().p("AgWCfQgLgUgIg2QgJhGgIgbQgQg8gjgqQAzhNA7AHQA9AGAwBdQgQAdgMCFQgJBsgnABIgEAAQgkAAgQgbg");
	this.shape_20.setTransform(307.3384,123.3985,1.1941,1.1941,8.6928);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EABE83").s().p("AgQCnQgsgFgFiHIACijQAkgkAhAHQAkAHAYAzQgQAPgIAxQgDASgFBMQgJB0glAAIgEAAg");
	this.shape_21.setTransform(135.55,108.2,1.1191,1.1191,14.9986,0,0,2.6,-14);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EABE83").s().p("Ag1ArIgGhiQgFgwgNgJQApg6AoADQAsADAdBCQgLASgGAuQgDAagFA6QgLBtgsAJIgFAAQgmAAgHh9g");
	this.shape_22.setTransform(149.95,124.4232);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:149.95,y:124.4232}},{t:this.shape_21,p:{regX:2.6,regY:-14,scaleX:1.1191,scaleY:1.1191,rotation:14.9986,x:135.55,y:108.2}},{t:this.shape_20,p:{scaleX:1.1941,scaleY:1.1941,rotation:8.6928,x:307.3384,y:123.3985}},{t:this.shape_19},{t:this.shape_18,p:{scaleX:1.1152,scaleY:1.1152,rotation:0,x:335.9231,y:125.9029}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{regX:-16.5,regY:14.8,rotation:-59.9996,x:338.45,y:63.25}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_27},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{regX:0.2,regY:-17,scaleX:1.1577,scaleY:1.1577,rotation:6.5068,x:150.3,y:104.8}},{t:this.shape_21,p:{regX:0,regY:0,scaleX:1.1527,scaleY:1.1527,rotation:-7.4953,x:134.354,y:124.2139}},{t:this.shape_20,p:{scaleX:1.1237,scaleY:1.1237,rotation:-8.9435,x:312.8355,y:122.1795}},{t:this.shape_19},{t:this.shape_18,p:{scaleX:1.1424,scaleY:1.1424,rotation:7.1862,x:333.889,y:124.6682}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{regX:0,regY:0,rotation:0,x:354.9115,y:48.5}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,372.8,145.9);


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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E38231").s().p("Egv2AGCQiWAAAAiWIAAnXQAAiWCWAAMBftAAAQCWAAAACWIAAHXQAACWiWAAg");
	this.shape_1.setTransform(734.625,477.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E38231").s().p("Egv2AGCQiWAAAAiWIAAnXQAAiWCWAAMBftAAAQCWAAAACWIAAHXQAACWiWAAg");
	this.shape_2.setTransform(734.625,308.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3300").s().p("Eg2zAVLIAAv+MBtnAAAIAAP+gEg2zgFMIAAv+MBtnAAAIAAP+g");
	this.shape_3.setTransform(732.375,394.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(60));

	// toaster
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("EgTrAhHMAAAhCNMAnYAAAMAAABCNg");
	this.shape_4.setTransform(425.8,397.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("Egt8AhHMAAAhCNMBb5AAAMAAABCNg");
	this.shape_5.setTransform(845.925,397.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(60));

	// Electirc
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACjHBQtYgeqjiAQkEgxoGh0QnMhflEgPQhfgEgZgCQhDgHgygQQg8gVgrgoQgwgtgMg4QgQhIAthIQArhEBJgiQA/gdBWgHQA8gEBfAGQGBAbJ0CIQFPBKCoAjQEgA7DaAgQGAA3HiAPQEmAJJBgEQWRgJJKAAQBoAAA4AHQBYALA/AgQBJAnAmBKQApBOgcBIQgfBShqAjQhNAah7ACIz/AUQnbAHlvAAQmoAAkXgKg");
	this.shape_6.setTransform(57.9729,375.704);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(60));

	// Background
	this.instance = new lib.Upview_Table("synched",0);
	this.instance.setTransform(708.15,376.1,1,1,0,0,0,648.1,366.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

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
	this.instance.setTransform(477.3,382.4,0.9999,0.9999,6.7062,0,0,4.3,4.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(406).to({_off:false},0).wait(1).to({regX:20.9,regY:20.5,rotation:7.8608,x:493.05,y:384.05},0).wait(1).to({rotation:9.0145,x:494.2,y:368.15},0).wait(1).to({rotation:10.1681,x:495.25,y:352.25},0).wait(1).to({rotation:11.3218,x:496.4,y:336.35},0).wait(1).to({rotation:12.4754,x:497.4,y:320.4},0).wait(1).to({rotation:13.6291,x:498.5,y:304.5},0).wait(1).to({rotation:14.7827,x:499.6,y:288.6},0).wait(1).to({rotation:15.9364,x:500.65,y:272.65},0).wait(1).to({rotation:17.09,x:501.75,y:256.75},0).wait(1).to({rotation:18.2437,x:502.85,y:240.75},0).wait(1).to({rotation:19.3973,x:503.85,y:224.85},0).wait(1).to({rotation:20.551,x:504.9,y:208.85},0).wait(1).to({rotation:21.7046,x:505.95,y:192.9},0).wait(1).to({rotation:21.8339,x:506,y:192.45},0).wait(1).to({rotation:21.9631,x:505.95,y:191.95},0).wait(1).to({rotation:22.0924,x:505.9,y:191.55},0).wait(1).to({rotation:22.2217,x:505.85,y:191.1},0).wait(1).to({rotation:22.3509,y:190.7},0).wait(1).to({rotation:22.4802,x:505.75,y:190.3},0).wait(1).to({rotation:22.6095,y:189.8},0).wait(1).to({rotation:22.7388,x:505.7,y:189.4},0).wait(1).to({rotation:22.868,y:188.95},0).wait(1).to({rotation:22.9973,x:505.65,y:188.5},0).wait(1).to({rotation:23.1266,x:505.6,y:188.1},0).wait(1).to({rotation:23.2558,x:505.55,y:187.65},0).wait(1).to({rotation:23.3851,y:187.2},0).wait(1).to({rotation:23.5144,x:505.45,y:186.8},0).wait(1).to({rotation:23.6436,x:505.5,y:186.4},0).wait(1).to({rotation:23.7729,x:505.45,y:185.85},0).wait(1).to({rotation:23.9022,x:505.4,y:185.45},0).wait(1).to({rotation:24.0315,y:185},0).wait(1).to({rotation:24.1607,x:505.3,y:184.6},0).wait(1).to({rotation:24.29,y:184.2},0).wait(1).to({rotation:24.4193,y:183.7},0).wait(1).to({rotation:24.5485,x:505.25,y:183.3},0).wait(1).to({rotation:24.6778,x:505.2,y:182.85},0).wait(1).to({rotation:24.8071,x:505.15,y:182.4},0).wait(1).to({rotation:24.9363,x:505.1,y:182},0).wait(1).to({rotation:25.0656,y:181.5},0).wait(1).to({rotation:25.1949,x:505,y:181.1},0).wait(1).to({rotation:25.3242,x:505.05,y:180.7},0).wait(1).to({rotation:25.4534,x:504.95,y:180.25},0).wait(1).to({rotation:25.5827,y:179.8},0).wait(1).to({rotation:25.712,y:179.35},0).wait(1).to({rotation:25.8412,x:504.85,y:178.9},0).wait(1).to({rotation:25.9705,y:178.5},0).wait(1).to({rotation:26.0998,x:504.8,y:178.05},0).wait(1).to({rotation:26.229,y:177.65},0).wait(1).to({rotation:26.3583,x:504.7,y:177.2},0).wait(1).to({rotation:26.4876,y:176.7},0).wait(1).to({rotation:26.6169,x:504.65,y:176.25},0).wait(1).to({rotation:26.7461,y:175.85},0).wait(1).to({rotation:26.8754,x:504.6,y:175.45},0).wait(1).to({rotation:27.0047,x:504.55,y:175},0).wait(1).to({rotation:27.1339,x:504.5,y:174.55},0).wait(1).to({rotation:27.2632,y:174.05},0).wait(1).to({rotation:27.3925,x:504.45,y:173.65},0).wait(1).to({rotation:27.5217,y:173.25},0).wait(1).to({rotation:27.651,x:504.4,y:172.8},0).wait(1).to({rotation:27.7803,x:504.35,y:172.35},0).wait(1).to({rotation:27.9096,x:504.3,y:171.9},0).wait(1).to({rotation:28.0388,x:504.25,y:171.45},0).wait(1).to({rotation:28.1681,x:504.2,y:171},0).wait(1).to({rotation:28.2974,y:170.6},0).wait(1).to({rotation:28.4266,y:170.2},0).wait(1).to({rotation:28.5559,x:504.1,y:169.7},0).wait(1).to({rotation:28.6852,y:169.3},0).wait(1).to({rotation:28.8144,x:504,y:168.8},0).wait(1).to({rotation:28.9437,x:504.05,y:168.4},0).wait(1).to({rotation:29.073,x:504,y:167.95},0).wait(1).to({rotation:29.2023,x:503.95,y:167.55},0).wait(1).to({rotation:29.3315,x:503.9,y:167.05},0).wait(1).to({rotation:29.4608,x:503.85,y:166.65},0).wait(1).to({rotation:29.5901,y:166.15},0).wait(1).to({rotation:29.7193,x:503.8,y:165.75},0).wait(1).to({rotation:29.8486,x:503.75,y:165.35},0).wait(1).to({rotation:29.9779,x:503.7,y:164.85},0).wait(1).to({rotation:30.1071,y:164.45},0).wait(1).to({rotation:30.2364,x:503.65,y:163.95},0).wait(1).to({rotation:30.3657,y:163.55},0).wait(1).to({rotation:30.4949,x:503.6,y:163.1},0).wait(1).to({rotation:30.6242,x:503.55,y:162.7},0).wait(1).to({rotation:30.7535,x:503.5,y:162.2},0).wait(1).to({rotation:30.8828,y:161.8},0).wait(1).to({rotation:31.012,x:503.45,y:161.3},0).wait(1).to({rotation:31.1413,x:503.4,y:160.9},0).wait(1).to({rotation:31.2706,x:503.35,y:160.45},0).wait(1).to({rotation:31.3998,x:503.3,y:160.05},0).wait(1).to({rotation:31.5291,y:159.55},0).wait(1).to({rotation:31.6584,x:503.25,y:159.1},0).wait(1).to({rotation:31.7876,x:503.2,y:158.65},0).wait(1).to({rotation:31.9169,x:503.15,y:158.25},0).wait(1).to({rotation:32.0462,x:503.1,y:157.8},0).wait(1).to({rotation:32.1755,x:503.15,y:157.4},0).wait(1).to({rotation:32.3047,x:503.05,y:156.85},0).wait(1).to({rotation:32.434,y:156.45},0).wait(1).to({rotation:32.5633,x:502.95,y:156},0).wait(1).to({rotation:32.6925,x:503,y:155.6},0).wait(1).to({rotation:32.8218,x:502.9,y:155.15},0).wait(1).to({rotation:32.9511,y:154.7},0).wait(1).to({rotation:33.0803,x:502.8,y:154.2},0).wait(1).to({rotation:33.2096,y:153.8},0).wait(1).to({rotation:33.3389,x:502.75,y:153.35},0).wait(1).to({rotation:33.4682,y:152.9},0).wait(1).to({rotation:33.5974,x:502.7,y:152.45},0).wait(1).to({rotation:33.7267,x:502.65,y:152.05},0).wait(1).to({rotation:33.856,y:151.6},0).wait(1).to({rotation:33.9852,x:502.6,y:151.15},0).wait(1).to({rotation:34.1145,x:502.55,y:150.65},0).wait(1).to({rotation:34.2438,x:502.45,y:150.25},0).wait(1).to({rotation:34.373,x:502.5,y:149.8},0).wait(1).to({rotation:34.5023,x:502.4,y:149.4},0).wait(1).to({rotation:34.6316,y:148.95},0).wait(1).to({rotation:34.7609,x:502.3,y:148.45},0).wait(1).to({rotation:34.8901,x:502.35,y:148},0).wait(1).to({rotation:35.0194,x:502.3,y:147.6},0).wait(1).to({rotation:35.1487,x:502.25,y:147.15},0).wait(1).to({rotation:35.2779,x:502.2,y:146.7},0).wait(1).to({rotation:35.4072,x:502.15,y:146.25},0).wait(1).to({rotation:35.5365,y:145.85},0).wait(1).to({rotation:35.6657,x:502.1,y:145.35},0).wait(1).to({rotation:35.795,x:502.05,y:144.9},0).wait(1).to({rotation:35.9243,x:501.95,y:144.45},0).wait(1).to({rotation:36.0536,x:502,y:144},0).wait(1).to({rotation:36.1828,x:501.9,y:143.6},0).wait(1).to({rotation:36.3121,y:143.1},0).wait(1).to({rotation:36.4414,x:501.85,y:142.7},0).wait(1).to({rotation:36.5706,y:142.2},0).wait(1).to({rotation:36.6999,x:501.8,y:141.8},0).wait(7).to({rotation:44.2729,x:501.75,y:222.25},0).wait(1).to({rotation:51.8458,x:501.7,y:302.25},0).wait(1).to({rotation:59.4188,y:381.9},0).wait(1).to({rotation:66.9917,x:501.75,y:461.15},0).wait(1).to({rotation:74.5647,x:502,y:540},0).wait(1).to({rotation:82.1376,x:502.4,y:618.5},0).wait(1).to({rotation:89.7106,x:503,y:696.7},0).wait(44));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(406).to({_off:false},0).wait(1).to({regX:20.9,regY:20.5,rotation:5.5527,x:476.35,y:381.2},0).wait(1).to({rotation:4.399,x:477.05,y:364.6},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:3.2454,x:477.65,y:347.95},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:2.0918,x:478.3,y:331.3},0).wait(1).to({rotation:0.9381,x:478.85,y:314.65},0).wait(1).to({rotation:-0.2155,x:479.5,y:297.95},0).wait(1).to({rotation:-1.3691,x:480.1,y:281.3},0).wait(1).to({rotation:-2.5227,x:480.7,y:264.65},0).wait(1).to({rotation:-3.6764,x:481.2,y:247.95},0).wait(1).to({rotation:-4.83,x:481.8,y:231.25},0).wait(1).to({rotation:-5.9836,x:482.4,y:214.55},0).wait(1).to({rotation:-7.1372,x:482.95,y:197.85},0).wait(1).to({rotation:-8.2909,x:483.5,y:181.2},0).wait(1).to({rotation:-8.4201,x:483.4,y:180.65},0).wait(1).to({rotation:-8.5494,x:483.35,y:180.05},0).wait(1).to({rotation:-8.6786,x:483.3,y:179.5},0).wait(1).to({rotation:-8.8079,y:178.95},0).wait(1).to({rotation:-8.9371,x:483.25,y:178.45},0).wait(1).to({rotation:-9.0664,x:483.2,y:177.9},0).wait(1).to({rotation:-9.1956,x:483.15,y:177.35},0).wait(1).to({rotation:-9.3249,x:483.05,y:176.8},0).wait(1).to({rotation:-9.4541,x:483,y:176.2},0).wait(1).to({rotation:-9.5834,x:482.95,y:175.65},0).wait(1).to({rotation:-9.7127,x:482.9,y:175.15},0).wait(1).to({rotation:-9.8419,y:174.65},0).wait(1).to({rotation:-9.9712,x:482.85,y:174.1},0).wait(1).to({rotation:-10.1004,x:482.75,y:173.55},0).wait(1).to({rotation:-10.2297,x:482.7,y:172.95},0).wait(1).to({rotation:-10.3589,y:172.4},0).wait(1).to({rotation:-10.4882,x:482.65,y:171.9},0).wait(1).to({rotation:-10.6174,x:482.6,y:171.35},0).wait(1).to({rotation:-10.7467,x:482.5,y:170.8},0).wait(1).to({rotation:-10.8759,x:482.45,y:170.25},0).wait(1).to({rotation:-11.0052,x:482.4,y:169.65},0).wait(1).to({rotation:-11.1344,x:482.35,y:169.1},0).wait(1).to({rotation:-11.2637,x:482.3,y:168.6},0).wait(1).to({rotation:-11.393,y:168.05},0).wait(1).to({rotation:-11.5222,x:482.2,y:167.55},0).wait(1).to({rotation:-11.6515,x:482.15,y:166.95},0).wait(1).to({rotation:-11.7807,x:482.1,y:166.4},0).wait(1).to({rotation:-11.91,y:165.85},0).wait(1).to({rotation:-12.0392,x:482,y:165.35},0).wait(1).to({rotation:-12.1685,x:481.95,y:164.8},0).wait(1).to({rotation:-12.2977,x:481.85,y:164.25},0).wait(1).to({rotation:-12.427,y:163.65},0).wait(1).to({rotation:-12.5562,x:481.8,y:163.1},0).wait(1).to({rotation:-12.6855,x:481.75,y:162.6},0).wait(1).to({rotation:-12.8147,x:481.7,y:162.05},0).wait(1).to({rotation:-12.944,x:481.65,y:161.45},0).wait(1).to({rotation:-13.0733,x:481.6,y:160.9},0).wait(1).to({rotation:-13.2025,x:481.55,y:160.4},0).wait(1).to({rotation:-13.3318,x:481.5,y:159.85},0).wait(1).to({rotation:-13.461,x:481.4,y:159.35},0).wait(1).to({rotation:-13.5903,x:481.35,y:158.75},0).wait(1).to({rotation:-13.7195,x:481.3,y:158.2},0).wait(1).to({rotation:-13.8488,x:481.25,y:157.65},0).wait(1).to({rotation:-13.978,y:157.1},0).wait(1).to({rotation:-14.1073,x:481.15,y:156.6},0).wait(1).to({rotation:-14.2365,x:481.1,y:156},0).wait(1).to({rotation:-14.3658,x:481.05,y:155.45},0).wait(1).to({rotation:-14.495,y:154.9},0).wait(1).to({rotation:-14.6243,x:480.9,y:154.35},0).wait(1).to({rotation:-14.7535,x:480.85,y:153.8},0).wait(1).to({rotation:-14.8828,x:480.8,y:153.3},0).wait(1).to({rotation:-15.0121,y:152.75},0).wait(1).to({rotation:-15.1413,x:480.7,y:152.2},0).wait(1).to({rotation:-15.2706,x:480.65,y:151.6},0).wait(1).to({rotation:-15.3998,y:151.05},0).wait(1).to({rotation:-15.5291,x:480.6,y:150.55},0).wait(1).to({rotation:-15.6583,x:480.5,y:150},0).wait(1).to({rotation:-15.7876,x:480.45,y:149.4},0).wait(1).to({rotation:-15.9168,x:480.4,y:148.85},0).wait(1).to({rotation:-16.0461,x:480.35,y:148.3},0).wait(1).to({rotation:-16.1753,x:480.25,y:147.8},0).wait(1).to({rotation:-16.3046,x:480.2,y:147.25},0).wait(1).to({rotation:-16.4338,y:146.7},0).wait(1).to({rotation:-16.5631,x:480.15,y:146.15},0).wait(1).to({rotation:-16.6924,x:480.05,y:145.6},0).wait(1).to({rotation:-16.8216,x:480,y:145},0).wait(1).to({rotation:-16.9509,y:144.5},0).wait(1).to({rotation:-17.0801,x:479.85,y:143.95},0).wait(1).to({rotation:-17.2094,x:479.8,y:143.4},0).wait(1).to({rotation:-17.3386,x:479.75,y:142.8},0).wait(1).to({rotation:-17.4679,y:142.3},0).wait(1).to({rotation:-17.5971,x:479.65,y:141.75},0).wait(1).to({rotation:-17.7264,x:479.6,y:141.2},0).wait(1).to({rotation:-17.8556,x:479.55,y:140.65},0).wait(1).to({rotation:-17.9849,x:479.5,y:140.1},0).wait(1).to({rotation:-18.1141,x:479.4,y:139.55},0).wait(1).to({rotation:-18.2434,x:479.35,y:138.95},0).wait(1).to({rotation:-18.3727,x:479.3,y:138.45},0).wait(1).to({rotation:-18.5019,x:479.25,y:137.9},0).wait(1).to({rotation:-18.6312,x:479.2,y:137.3},0).wait(1).to({rotation:-18.7604,x:479.15,y:136.8},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-18.8897,x:479.05,y:136.25},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-19.0189,y:135.75},0).wait(1).to({rotation:-19.1482,x:478.95,y:135.15},0).wait(1).to({rotation:-19.2774,x:478.85,y:134.6},0).wait(1).to({rotation:-19.4067,x:478.8,y:134.05},0).wait(1).to({rotation:-19.5359,y:133.45},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-19.6652,x:478.75,y:132.95},0).wait(1).to({rotation:-19.7944,x:478.65,y:132.4},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-19.9237,y:131.85},0).wait(1).to({rotation:-20.053,x:478.6,y:131.3},0).wait(1).to({rotation:-20.1822,x:478.45,y:130.75},0).wait(1).to({rotation:-20.3115,x:478.4,y:130.2},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-20.4407,y:129.65},0).wait(1).to({rotation:-20.57,x:478.3,y:129.1},0).wait(1).to({rotation:-20.6992,x:478.25,y:128.5},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-20.8285,x:478.2,y:127.95},0).wait(1).to({rotation:-20.9577,x:478.15,y:127.45},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-21.087,x:478.05,y:126.9},0).wait(1).to({rotation:-21.2162,x:478,y:126.35},0).wait(1).to({rotation:-21.3455,x:477.9,y:125.8},0).wait(1).to({rotation:-21.4747,y:125.2},0).wait(1).to({rotation:-21.604,x:477.85,y:124.65},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-21.7333,x:477.75,y:124.15},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:-21.8625,x:477.7,y:123.55},0).wait(1).to({rotation:-21.9918,x:477.6,y:123.05},0).wait(1).to({rotation:-22.121,x:477.55,y:122.5},0).wait(1).to({rotation:-22.2503,x:477.5,y:121.9},0).wait(1).to({rotation:-22.3795,x:477.4,y:121.4},0).wait(1).to({rotation:-22.5088,y:120.85},0).wait(1).to({rotation:-22.638,x:477.35,y:120.25},0).wait(1).to({rotation:-22.7673,x:477.25,y:119.7},0).wait(1).to({rotation:-22.8965,x:477.15,y:119.15},0).wait(1).to({rotation:-23.0258,y:118.65},0).wait(1).to({rotation:-23.155,x:477.05,y:118.1},0).wait(1).to({rotation:-23.2843,x:477,y:117.5},0).wait(7).to({rotation:-29.2443,x:476.35,y:190.2},0).wait(1).to({rotation:-35.2044,x:475.3,y:262.8},0).wait(1).to({rotation:-41.1644,x:474.1,y:335.45},0).wait(1).to({rotation:-47.1245,x:472.5,y:408.05},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,rotation:-53.0845,x:470.7,y:480.65},0).wait(1).to({rotation:-59.0446,x:468.5,y:553.4},0).wait(1).to({rotation:-65.0046,x:466.1,y:626.15},0).wait(1).to({rotation:-70.9647,x:463.4,y:699.1},0).wait(45));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance}]},76).wait(564));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance}]},80).to({state:[]},455).wait(102));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(548).to({_off:false},0).wait(1).to({regX:186.4,regY:73.7,x:1378.6,y:673.55},0).wait(1).to({x:1360.7},0).wait(1).to({x:1342.8},0).wait(1).to({x:1324.9},0).wait(1).to({x:1307},0).wait(1).to({x:1289.1},0).wait(1).to({x:1271.2},0).wait(1).to({x:1253.3},0).wait(1).to({x:1235.4},0).wait(1).to({x:1217.5},0).wait(1).to({x:1199.6},0).wait(1).to({x:1181.7},0).wait(1).to({x:1163.8},0).wait(1).to({x:1145.9},0).wait(1).to({x:1128},0).wait(1).to({x:1110.1},0).wait(1).to({x:1092.15},0).wait(1).to({x:1074.25},0).wait(1).to({x:1056.35},0).wait(1).to({x:1038.45},0).wait(1).to({x:1020.55},0).wait(1).to({x:1002.65},0).wait(1).to({x:984.75},0).wait(1).to({x:966.85},0).wait(1).to({x:948.95},0).wait(1).to({x:931.05},0).wait(1).to({x:913.15},0).wait(1).to({x:895.25},0).wait(1).to({x:877.35},0).wait(1).to({x:859.45},0).wait(1).to({x:841.55},0).wait(1).to({x:823.65},0).wait(1).to({x:805.75},0).wait(1).to({x:787.8},0).wait(1).to({x:769.9},0).wait(1).to({x:752},0).wait(1).to({x:734.1},0).wait(1).to({x:716.2},0).wait(1).to({x:698.3},0).wait(1).to({x:680.4},0).wait(1).to({x:662.5},0).wait(1).to({x:644.6},0).wait(1).to({x:626.7},0).wait(1).to({x:608.8},0).wait(1).to({x:590.9},0).wait(1).to({x:573},0).wait(1).to({x:555.1},0).wait(1).to({x:537.2},0).wait(1).to({x:519.3},0).wait(1).to({x:501.4},0).wait(1).to({x:483.45},0).wait(1).to({x:465.55},0).wait(1).to({x:447.65},0).wait(1).to({x:429.75},0).wait(1).to({x:411.85},0).wait(1).to({x:393.95},0).wait(1).to({x:376.05},0).wait(1).to({x:358.15},0).wait(1).to({x:340.25},0).wait(1).to({x:322.35},0).wait(1).to({x:304.45},0).wait(1).to({x:286.55},0).wait(1).to({x:268.65},0).wait(1).to({x:250.75},0).wait(1).to({x:232.85},0).wait(1).to({x:214.95},0).wait(1).to({x:197.05},0).wait(1).to({x:179.1},0).wait(1).to({x:161.2},0).wait(1).to({x:143.3},0).wait(1).to({x:125.4},0).wait(1).to({x:107.55},0).wait(1).to({x:89.65},0).wait(1).to({x:71.75},0).wait(1).to({x:53.85},0).wait(1).to({x:35.95},0).wait(1).to({x:18.05},0).wait(1).to({x:0.15},0).wait(1).to({x:-17.75},0).wait(1).to({x:-35.65},0).wait(1).to({x:-53.55},0).wait(1).to({x:-71.45},0).wait(1).to({x:-89.35},0).wait(1).to({x:-107.25},0).wait(1).to({x:-125.15},0).wait(1).to({x:-143.1},0).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},253).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2}]},238).wait(149));

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
	this.replay.setTransform(229.75,269);
	new cjs.ButtonHelper(this.replay, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.StartPlay}]}).to({state:[]},1).to({state:[{t:this.replay}]},638).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(640));

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

	// Layer_1
	this.instance = new lib.CompoundPath();
	this.instance.setTransform(186.9,156.9,1,1,0,0,0,166.4,147.3);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B3B3").s().p("ABcNaIAAjnIBMABIAAozIBeACIAAivIA/ACIAACdIA5ACIABl7IBbgBIBeA0IBjADIgBHRIBXADIAAjYIAoABIAABZIA7ACIAAivIAlABIAAhLIAgABIAAAoIAmABIAAA0IAvACIgBCLIApBRIAADCIArANIAADlIBNABIgCkHIAcgJIAAoSIAzAAIAqg4IBwAAIAAA3IB8AAIAAC0IBPABIAAOIgAVIFzIAQABIAAhAIgQAAgAGBFMIAQAAIAAg6IgQAAgADOEjIAQABIABg6IgRgBgAJVC7IAQABIAAg6IgQgBgADOC7IARAAIAAg5IgRgBgAHwC4IAAg6IgRAAIAAA6IARAAgAGlC2IASAAIAAg6IgRAAgAMGC1IARAAIAAg5IgRgBgAGaC1IgBg5IgQgBIAAA6IARAAgAVUCsIAQAAIAAg/IgPgBgATbCZIAQAAIAAg/IgQgBgAHgA4IAQABIAAg5IgQgBgAHDA3IAQABIAAg5IgQgBgAGmA2IARABIAAg5IgRgBgAGJA2IARAAIAAg5IgRAAgAInABIARAAIAAg5IgQAAgATFhAIAWACIABhdIgXAAgAUmhAIAXAAIAAhcIgXgBgAWghXIAQAAIAAg/IgQAAgAV9hYIAQAAIAAg/IgQgBgAVahZIAQAAIAAg/IgPAAgAJdifIARAAIAAg6IgQAAgAJBigIAQAAIAAg5IgQgBgAIkihIARABIAAg6IgRgBgAIHiiIARABIAAg6IgRAAgA4/NaIAAnbIBIAAIAAjxIBOAAIACtoIAyABIBJhcICAADIAABXIB1ADIAAh8IBUgFIAsAtIAAB0IBZACIgBEEIBQAEIgBH6IBCACIAAEIIBHAAIABoOIBLACIAAhQIB6ADIBEA3IAAA0IBAACIAADfIA4BMIAABhIBSACIgBF6IA7AAIAADogAl0KcIASAAIAAg6IgRAAgAkIJHIARABIABg6IgSgBgAnNI9IASAAIAAg6IgSAAgAsHI3IAAiBIgkgBIAACCIAkAAgAtbH8IAVAAIAAhGIgVgBgAuNH8IAVAAIAAhGIgVgBgAu8H8IAVAAIAAhGIgVgBgAkIHfIASAAIAAg5IgSgBgAnNGmIASABIAAg6IgSgBgAyeGFIAbAAIAAhpIgbgBgAzWGFIAaAAIAAhpIgagBgA19F6IAAiTIgmgBIAACTIAmABgAkIFlIASABIAAg6IgSAAgAo0FHIASABIAAg7IgSAAgApTFGIASABIAAg6IgSgBgApyFFIASABIAAg6IgRAAgAnMEQIASAAIAAg6IgSgBgAvpD/IAaABIAAhpIgagBgAwhD/IAaABIAAhpIgagBgAxfD/IAcABIABhoIgdgBgAs0D8IAcgCIAAhaIgcgBgApBCwIATABIAAg7IgSAAgAozAOIASABIAAg5IgRgBgApSANIASABIAAg5IgSgBgApxAMIASABIAAg5IgSAAgAmdgfIARABIABg6IgSgBgAoyhIIASAAIAAg5IgSgBgAxKhIIAcAAIAAhpIgcAAgApShJIASABIAAg6IgSgBgApxhJIASAAIAAg6IgSAAgA0ihnIAcABIABhpIgcgBgA1YhnIAbABIAAhpIgbgBgA10nHIApABIAAiYIgpgBgAycnOIAoABIAAiYIgogCgAvEn0IAcABIAAhpIgcAAgAwCn1IAdAAIAAhoIgdgBgAw/n3IAcABIAAhpIgcAAg");
	this.shape.setTransform(188.25,214.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiFCjQgPAKgTABQg+AUg5gbQg6gcARgtQh6A0hlgUQgogHgZgRQgXgQAAgRQgLhCBPgZQBGgWBSAUQgIgtAvgWQAwgVAwAiQASgmA2gJQA0gJAJAeIAAAMIAFABQApgNAnAEQAsAFAXAaQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAzAAAeAZQAhAcgSAuQAzgZA/ANQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgqgKgZgdQgDAagwAGQgyAGgWghQgWA/hFAMQgPACgPAAQgwAAgrgcg");
	this.shape_1.setTransform(273.1211,152.976);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglAKIgBgDQgKAEgLAAQg0AAgJgSQgFgNARgKQASgKAYAAQAkAAAJARQAbgRAqAAQAjAAAVANQASALAAAQQAAAQgTAMQgTANgaAAQhQAAgPgfg");
	this.shape_2.setTransform(306.35,108.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdCdQgogJgVgWQgXgYALgcQh6A0hlgUQgogIgZgRQgXgQAAgQQgLhBBYgYQBOgWBTAVQgIgtAwgVQAwgWAwAjQAuhIBxAGQAvACAhASQAjAUADAdQAjgkA7ACQA2ADAdAdIAADzQghALgvgMQg4gOgHgoQgcAXgxAEQguAEgdgOQgaAggsAMQgVAFgVAAQgSAAgTgEg");
	this.shape_3.setTransform(306.6839,54.2149);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhOAKQgJgSAdgQQAbgQAmAAQAjAAAUANQATAMAAAPQAAAQgTAMQgUANgZAAQhQAAgPgfg");
	this.shape_4.setTransform(150.117,70.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkSC/QhZgCgrhBIAAjLQApgWAzAAQA3ABAdAfQAJgeAggCQAdgCARAQQgTgwAigdQAegaAzAAQAygBAeAZQAhAdgSAuQAzgaA/AOQBAAOAAAmQA6gPA0AMQA6ANALApQAIAagXAWQgWAWgoALQhgAahXgvQARAcgJAYQgKAYgiALQgjAKgmgJQgpgKgZgdQgDAagwAGQgyAGgWgiQgcBOhZAAIgEAAg");
	this.shape_5.setTransform(238.1938,104.6009);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmvDPQgzgCgggWIAAj4QApgWA1gBQA3AAAlAYQAPgOAZgHQAZgHAbADQgDg5BWgIQBRgIAfAeQALglAvgVQAwgUBBAEQBlAHAeA2QAcA0g3AxQATgQAeAAQAcgBAaAMQAZAMAHARQAHASgVARQBDgBAsAOQAyAQgBAeQgBAZglANQglANg6gIQgRAphBAOQhAAOg4gYQgGAVgcANQgcANgjgCQgigBgYgPQgYgPgBgVQg+AchPgEQgzgDgsgQQgqgQgbgaQANAkgnAcQgkAZg1AAIgLAAg");
	this.shape_6.setTransform(79.801,62.6812);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABzCOQhDgbAUgwQh5AzhmgTQgngIgZgRQgXgQAAgRQgMhBBQgZQBFgXBSAUQgIgtAugVQAxgWAvAjQATgmA1gJQA1gKAJAeIAAEQQghAPghAAQggAAgggNg");
	this.shape_7.setTransform(151.5773,106.3617);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCE8FD").s().p("ABcWeMAAAgs7IXkAAMAAAAs7gA4/WeMAAAgs7IXGAAMAAAAs7g");
	this.shape_8.setTransform(188.25,156.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2B3B3").s().p("ABJWxMAAAgthIYKAAMAAAAthgA5SWxMAAAgthIXsAAMAAAAthg");
	this.shape_9.setTransform(186.325,158.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0D6C1").s().p("A9GBgIAAi/MA6NAAAIAAC/g");
	this.shape_10.setTransform(186.325,325.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0D6C1").s().p("A7PYvMAAAgxdMA2fAAAMAAAAxdg");
	this.shape_11.setTransform(186.325,158.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Window, new cjs.Rectangle(0,0,372.7,335), null);


(lib.Fire_Blur = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FireMovie1();
	this.instance.setTransform(28.2,20.9,1,1,0,0,0,28.2,20.9);
	this.instance.filters = [new cjs.BlurFilter(31, 31, 3)];
	this.instance.cache(-2,-2,61,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:28.3,x:28.3},0).wait(1).to({regX:28.2,x:28.2},0).wait(1).to({regY:21,y:21},0).wait(2).to({regX:28.3,regY:20.9,x:28.3,y:20.9},0).wait(1).to({regX:28.2,regY:21,x:28.2,y:21},0).wait(1).to({regY:20.9,y:20.9},0).wait(2).to({regY:21,y:21},0).wait(2).to({regY:20.9,y:20.9},0).wait(1).to({regY:21,y:21},0).wait(1).to({regY:20.9,y:20.9},0).wait(1).to({regY:21,y:21},0).wait(1).to({regY:20.9,y:20.9},0).wait(1).to({regY:21,y:21},0).wait(1).to({regY:20.9,y:20.9},0).wait(9).to({regX:28.3,x:28.3},0).wait(1).to({regX:28.2,x:28.2},0).wait(1).to({regX:28.3,x:28.3},0).wait(30).to({regX:28.2,x:28.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-84,232,217);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(640));

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
	this.instance = new lib.Fire_Blur();
	this.instance.setTransform(661.3,376.55,14.4235,14.4235,0,0,0,28.8,21.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(176).to({_off:false},0).wait(77));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.FireMovie = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Fire_Blur();
	this.instance.setTransform(28.2,20.9,1,1,0,0,0,28.2,20.9);
	this.instance.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance.cache(-86,-86,236,221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FireMovie, new cjs.Rectangle(-48,-48,160,145), null);


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
	this.instance = new lib.Fire_Blur();
	this.instance.setTransform(-156,37.7,1,1,0,0,0,28.2,20.9);
	this.instance.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance.cache(-86,-86,236,221);

	this.instance_1 = new lib.FireMovie();
	this.instance_1.setTransform(-157.75,37.7,1,1,0,0,0,28.2,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},17).wait(1));

	// Smoke
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiBAsQAAgEgCgMQgBgKABgGIAFgJIALgQQACgFADACQgDAJABAIQACANAAACQgBAEgEAHIgKAQIgDACIgBgBgABxAaQAAgEgDgJQgEgJACgEIAEgKIABgIQACgHAGgIIAGgJQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQADAEgDAHIgEALQgBADACAFIACAGIACAGQAAAEgEAFIgLARQAAABgBABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgBg");
	this.shape.setTransform(-155.1307,12.3607);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AiEBOIACgJIAEgHIAGgQIABgKQAAgHgCgDIgEgFIgBgGIAAgeIADgHQAHgRANgQIABABQAAAFgFAKIAAALIABAZQADACACAEIAAARIgFALIgBAHIgEAGIgBAFIgFALIgMASgAACBDIAAgGQAAgQABgDQABgFAFgIIAKgQIACgCQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQgDADgBAHIAAAVQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgLASQgCADgCABQgEAAgBgDgABqA5IADgHQAIgSgFgRIgHgsQgCgOADgIIAOgYQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIgCAKQAAAKACAJIACAVIAEAPIACANQAAALgDAHIgEAKIgQAaIgBACg");
	this.shape_1.setTransform(-155.85,8.9775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgHB9IABgTQACgSAEgMIAEgUIACgHIACgKQAAgDgDgDIgFgFQgFgIACgNIADgIIAMgXQAEgDABABQgCAIAAAHQAAAHABADIAHAIQAFAEAAAGIgJAdIgFASIgEAjQgBAFgEAEIgKASgAiIBfQAIgigBgRIgDgRIgBgUIAAgTQAAghACgIQADgOAKgTQgGgDABgJQABgGAEgFIAHgLQADgFADABQgBADADAEQADAFAAACQAAACgCADIgDAGIgEAKQgCAFgCAOIgBAbQAAAgACAOIACAXQAAAHgDAWQgBAIgDAHIgNAWIgDADIgBAAIgCAAgABkBWQACgGgBgIIgBgOIAAgtIADgNIAEgMQAHgJACgGIABgLQABgNgDgIIgEgKQgDgGABgEQAAgEAEgGIAKgPQABgBABgBQAAgBABAAQAAAAABAAQAAAAAAABQABAKAFAKIACABIABAWQABAJgCAHQgCAHgKANQgFALABAUIAAAqIAAAMQgCAGgGAIIgJAOgAAwgBIgDgRIABgOIABgHIgDgMQgBgFACgFQABgDADgFIAGgIQAFgJADABIACASQADABgCAHQgEAMADAMIABAHIgDAIIgNAUg");
	this.shape_2.setTransform(-155.5333,2.8475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgFB0QABgKAFgMIAEgIIAAgJIAAgLIgDgJIAAgJIgCgMQgBgJAFgLIALgQIACgEQABAAAAAAQABgBAAAAQABAAAAAAQABABAAAAQgEAHADAUIADAPIABARQABAGgCAEIgDAIIgGALIgBAGIgEAIIgLASgABgA7QgCgDABgGIAEgJIABgFIAFgMIAFgIIACgGIAFgIQAEgIgCgQQgDgCgBgGIgBgMIACgJIAFgJIAJgPIACgCQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQgDAIABAIIABAHQABAFADACIAAALQABAGgBAFIgNAZIgFAJIgDALIgCAFQgCADAAACQAAADAFAFIgPAYIgDAAQgDAAgBgDgAiCAeIgFgPIAAgJIgCgYQAAgJACgFIAHgLIAHgTIAAgHIADgOIAFgMIAOgTIACAAQgEAJgBAKIgBAIIgCALIgMAYQgCAJAAAFIADAVIAAAJIAEAIIABADIgCAFIgOAWgAAvADIgBgDQgBgMAMgUIALgQQACgFACACQAAAEgEAGQgFALADAKIgPAZIgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_3.setTransform(-156.2167,-0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgIBlQAFgQgBgSIAAgOQACgGADgFIARgaIADABQgGAGgBALIAAATQAAAIgCAHQAAAGgDAFIgGALIgGALgAAnA2IADgcIACgLQADgHAGgIIAOgTIADABQgKAMgBAeIgBAHIgEAHIgKAQgABsAtQACgGAAgHIgCgRIgEghIAAgMQACgFAGgMQAGgLABgHIABgIIAEgIIAKgPQACgFACACQABAGgEAPIgBAFIgEAHIgGALQgDAGACARIAFAdQACAQgDAIIgPAZgAiKANQADgGABgHIABgNIAKgfIAFgKIAFgIIACgIIAQgYQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABIgCAJIgDAHIgHAKIgFAMIgGAWIgBAOQgBAFgFAJIgLARIgCACIgBABIgCgBg");
	this.shape_4.setTransform(-155.9969,-5.5058);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgIBLQgBgIADgFIANgYQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQgDAIADAHIgPAYgAArAkQgCgGAHgMIAMgSIADAAQgCADAAAHIgEAJIgMASgAiEgVQgBgNACgIIAPgXIADgFQAEgCADACQgHAIgBAHIAAAHIgDAGIgNAVgABrgeIADgMIADgEQAIgQAKgMIADABIgHALIgCAHIgOAYIgCABIgBAAIgBAAg");
	this.shape_5.setTransform(-156.0643,-7.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.9,-31.2,162.7,145);


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

	this.actionFrames = [0,1,79,255,374,407,591,639];
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
		this.StartPlay = undefined;
		playSound("Mainmusic_mixdown");
	}
	this.frame_79 = function() {
		playSound("KitchenToasterLoading_01");
	}
	this.frame_255 = function() {
		playSound("clock_mixdown");
	}
	this.frame_374 = function() {
		playSound("ding");
	}
	this.frame_407 = function() {
		playSound("Woosh");
	}
	this.frame_591 = function() {
		playSound("eating_mixdown");
	}
	this.frame_639 = function() {
		this.replay = this.Buttons.replay;
		this.___loopingOver___ = true;
		var self=this;
		self.stop();
		
		self.replay.addEventListener("click",PlayAgain);
		
		function PlayAgain() 
		{
				self.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(78).call(this.frame_79).wait(176).call(this.frame_255).wait(119).call(this.frame_374).wait(33).call(this.frame_407).wait(184).call(this.frame_591).wait(48).call(this.frame_639).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({scaleX:0.9962,scaleY:0.9962,x:639.1458,y:359.9323},0).wait(1).to({scaleX:0.9925,scaleY:0.9925,x:638.2917,y:359.8646},0).wait(1).to({scaleX:0.9887,scaleY:0.9887,x:637.4375,y:359.7969},0).wait(1).to({scaleX:0.985,scaleY:0.985,x:636.5833,y:359.7292},0).wait(1).to({scaleX:0.9812,scaleY:0.9812,x:635.7292,y:359.6615},0).wait(1).to({scaleX:0.9774,scaleY:0.9774,x:634.875,y:359.5938},0).wait(1).to({scaleX:0.9737,scaleY:0.9737,x:634.0208,y:359.526},0).wait(1).to({scaleX:0.9699,scaleY:0.9699,x:633.1667,y:359.4583},0).wait(1).to({scaleX:0.9661,scaleY:0.9661,x:632.3125,y:359.3906},0).wait(1).to({scaleX:0.9624,scaleY:0.9624,x:631.4583,y:359.3229},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:630.6042,y:359.2552},0).wait(1).to({scaleX:0.9549,scaleY:0.9549,x:629.75,y:359.1875},0).wait(1).to({scaleX:0.9511,scaleY:0.9511,x:628.8958,y:359.1198},0).wait(1).to({scaleX:0.9473,scaleY:0.9473,x:628.0417,y:359.0521},0).wait(1).to({scaleX:0.9436,scaleY:0.9436,x:627.1875,y:358.9844},0).wait(1).to({scaleX:0.9398,scaleY:0.9398,x:626.3333,y:358.9167},0).wait(1).to({scaleX:0.9361,scaleY:0.9361,x:625.4792,y:358.849},0).wait(1).to({scaleX:0.9323,scaleY:0.9323,x:624.625,y:358.7813},0).wait(1).to({scaleX:0.9285,scaleY:0.9285,x:623.7708,y:358.7135},0).wait(1).to({scaleX:0.9248,scaleY:0.9248,x:622.9167,y:358.6458},0).wait(1).to({scaleX:0.921,scaleY:0.921,x:622.0625,y:358.5781},0).wait(1).to({scaleX:0.9173,scaleY:0.9173,x:621.2083,y:358.5104},0).wait(1).to({scaleX:0.9135,scaleY:0.9135,x:620.3542,y:358.4427},0).wait(1).to({scaleX:0.9097,scaleY:0.9097,x:619.5,y:358.375},0).wait(1).to({scaleX:0.906,scaleY:0.906,x:618.6458,y:358.3073},0).wait(1).to({scaleX:0.9022,scaleY:0.9022,x:617.7917,y:358.2396},0).wait(1).to({scaleX:0.8984,scaleY:0.8984,x:616.9375,y:358.1719},0).wait(1).to({scaleX:0.8947,scaleY:0.8947,x:616.0833,y:358.1042},0).wait(1).to({scaleX:0.8909,scaleY:0.8909,x:615.2292,y:358.0365},0).wait(1).to({scaleX:0.8872,scaleY:0.8872,x:614.375,y:357.9688},0).wait(1).to({scaleX:0.8834,scaleY:0.8834,x:613.5208,y:357.901},0).wait(1).to({scaleX:0.8796,scaleY:0.8796,x:612.6667,y:357.8333},0).wait(1).to({scaleX:0.8759,scaleY:0.8759,x:611.8125,y:357.7656},0).wait(1).to({scaleX:0.8721,scaleY:0.8721,x:610.9583,y:357.6979},0).wait(1).to({scaleX:0.8684,scaleY:0.8684,x:610.1042,y:357.6302},0).wait(1).to({scaleX:0.8646,scaleY:0.8646,x:609.25,y:357.5625},0).wait(1).to({scaleX:0.8608,scaleY:0.8608,x:608.3958,y:357.4948},0).wait(1).to({scaleX:0.8571,scaleY:0.8571,x:607.5417,y:357.4271},0).wait(1).to({scaleX:0.8533,scaleY:0.8533,x:606.6875,y:357.3594},0).wait(1).to({scaleX:0.8495,scaleY:0.8495,x:605.8333,y:357.2917},0).wait(1).to({scaleX:0.8458,scaleY:0.8458,x:604.9792,y:357.224},0).wait(1).to({scaleX:0.842,scaleY:0.842,x:604.125,y:357.1563},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,x:603.2708,y:357.0885},0).wait(1).to({scaleX:0.8345,scaleY:0.8345,x:602.4167,y:357.0208},0).wait(1).to({scaleX:0.8307,scaleY:0.8307,x:601.5625,y:356.9531},0).wait(1).to({scaleX:0.827,scaleY:0.827,x:600.7083,y:356.8854},0).wait(1).to({scaleX:0.8232,scaleY:0.8232,x:599.8542,y:356.8177},0).wait(1).to({scaleX:0.8195,scaleY:0.8195,x:599,y:356.75},0).wait(1).to({regX:0.6,regY:0.6,scaleX:0.3231,scaleY:0.3231,x:547.9,y:349.95},0).wait(48).to({regX:0},0).wait(1).to({regY:0,scaleX:0.3224,scaleY:0.3224,x:547.4244,y:349.9229},0).wait(1).to({scaleX:0.3216,scaleY:0.3216,x:546.9487,y:350.0958},0).wait(1).to({scaleX:0.3208,scaleY:0.3208,x:546.4731,y:350.2687},0).wait(1).to({scaleX:0.3201,scaleY:0.3201,x:545.9974,y:350.4416},0).wait(1).to({scaleX:0.3193,scaleY:0.3193,x:545.5218,y:350.6145},0).wait(1).to({scaleX:0.3186,scaleY:0.3186,x:545.0462,y:350.7874},0).wait(1).to({scaleX:0.3178,scaleY:0.3178,x:544.5705,y:350.9603},0).wait(1).to({scaleX:0.317,scaleY:0.317,x:544.0949,y:351.1331},0).wait(1).to({scaleX:0.3163,scaleY:0.3163,x:543.6192,y:351.306},0).wait(1).to({scaleX:0.3155,scaleY:0.3155,x:543.1436,y:351.4789},0).wait(1).to({scaleX:0.3147,scaleY:0.3147,x:542.6679,y:351.6518},0).wait(1).to({scaleX:0.314,scaleY:0.314,x:542.1923,y:351.8247},0).wait(1).to({scaleX:0.3132,scaleY:0.3132,x:541.7167,y:351.9976},0).wait(1).to({scaleX:0.3125,scaleY:0.3125,x:541.241,y:352.1705},0).wait(1).to({scaleX:0.3117,scaleY:0.3117,x:540.7654,y:352.3434},0).wait(1).to({scaleX:0.3109,scaleY:0.3109,x:540.2897,y:352.5163},0).wait(1).to({scaleX:0.3102,scaleY:0.3102,x:539.8141,y:352.6892},0).wait(1).to({scaleX:0.3094,scaleY:0.3094,x:539.3385,y:352.8621},0).wait(1).to({scaleX:0.3086,scaleY:0.3086,x:538.8628,y:353.035},0).wait(1).to({scaleX:0.3079,scaleY:0.3079,x:538.3872,y:353.2079},0).wait(1).to({scaleX:0.3071,scaleY:0.3071,x:537.9115,y:353.3808},0).wait(1).to({scaleX:0.3064,scaleY:0.3064,x:537.4359,y:353.5537},0).wait(1).to({scaleX:0.3056,scaleY:0.3056,x:536.9603,y:353.7265},0).wait(1).to({scaleX:0.3048,scaleY:0.3048,x:536.4846,y:353.8994},0).wait(1).to({scaleX:0.3041,scaleY:0.3041,x:536.009,y:354.0723},0).wait(1).to({scaleX:0.3033,scaleY:0.3033,x:535.5333,y:354.2452},0).wait(1).to({scaleX:0.3025,scaleY:0.3025,x:535.0577,y:354.4181},0).wait(1).to({scaleX:0.3018,scaleY:0.3018,x:534.5821,y:354.591},0).wait(1).to({scaleX:0.301,scaleY:0.301,x:534.1064,y:354.7639},0).wait(1).to({scaleX:0.3003,scaleY:0.3003,x:533.6308,y:354.9368},0).wait(1).to({scaleX:0.2995,scaleY:0.2995,x:533.1551,y:355.1097},0).wait(1).to({scaleX:0.2987,scaleY:0.2987,x:532.6795,y:355.2826},0).wait(1).to({scaleX:0.298,scaleY:0.298,x:532.2038,y:355.4555},0).wait(1).to({scaleX:0.2972,scaleY:0.2972,x:531.7282,y:355.6284},0).wait(1).to({scaleX:0.2964,scaleY:0.2964,x:531.2526,y:355.8013},0).wait(1).to({scaleX:0.2957,scaleY:0.2957,x:530.7769,y:355.9742},0).wait(1).to({scaleX:0.2949,scaleY:0.2949,x:530.3013,y:356.1471},0).wait(1).to({scaleX:0.2942,scaleY:0.2942,x:529.8256,y:356.32},0).wait(1).to({scaleX:0.2934,scaleY:0.2934,x:529.35,y:356.4928},0).wait(1).to({scaleX:0.2926,scaleY:0.2926,x:528.8744,y:356.6657},0).wait(1).to({scaleX:0.2919,scaleY:0.2919,x:528.3987,y:356.8386},0).wait(1).to({scaleX:0.2911,scaleY:0.2911,x:527.9231,y:357.0115},0).wait(1).to({scaleX:0.2903,scaleY:0.2903,x:527.4474,y:357.1844},0).wait(1).to({scaleX:0.2896,scaleY:0.2896,x:526.9718,y:357.3573},0).wait(1).to({scaleX:0.2888,scaleY:0.2888,x:526.4962,y:357.5302},0).wait(1).to({scaleX:0.2881,scaleY:0.2881,x:526.0205,y:357.7031},0).wait(1).to({scaleX:0.2873,scaleY:0.2873,x:525.5449,y:357.876},0).wait(1).to({scaleX:0.2865,scaleY:0.2865,x:525.0692,y:358.0489},0).wait(1).to({scaleX:0.2858,scaleY:0.2858,x:524.5936,y:358.2218},0).wait(1).to({scaleX:0.285,scaleY:0.285,x:524.1179,y:358.3947},0).wait(1).to({scaleX:0.2842,scaleY:0.2842,x:523.6423,y:358.5676},0).wait(1).to({scaleX:0.2835,scaleY:0.2835,x:523.1667,y:358.7405},0).wait(1).to({scaleX:0.2827,scaleY:0.2827,x:522.691,y:358.9134},0).wait(1).to({scaleX:0.282,scaleY:0.282,x:522.2154,y:359.0862},0).wait(1).to({scaleX:0.2812,scaleY:0.2812,x:521.7397,y:359.2591},0).wait(1).to({scaleX:0.2804,scaleY:0.2804,x:521.2641,y:359.432},0).wait(1).to({scaleX:0.2797,scaleY:0.2797,x:520.7885,y:359.6049},0).wait(1).to({scaleX:0.2789,scaleY:0.2789,x:520.3128,y:359.7778},0).wait(1).to({scaleX:0.2781,scaleY:0.2781,x:519.8372,y:359.9507},0).wait(1).to({scaleX:0.2774,scaleY:0.2774,x:519.3615,y:360.1236},0).wait(1).to({scaleX:0.2766,scaleY:0.2766,x:518.8859,y:360.2965},0).wait(1).to({scaleX:0.2759,scaleY:0.2759,x:518.4103,y:360.4694},0).wait(1).to({scaleX:0.2751,scaleY:0.2751,x:517.9346,y:360.6423},0).wait(1).to({scaleX:0.2743,scaleY:0.2743,x:517.459,y:360.8152},0).wait(1).to({scaleX:0.2736,scaleY:0.2736,x:516.9833,y:360.9881},0).wait(1).to({scaleX:0.2728,scaleY:0.2728,x:516.5077,y:361.161},0).wait(1).to({scaleX:0.272,scaleY:0.272,x:516.0321,y:361.3339},0).wait(1).to({scaleX:0.2713,scaleY:0.2713,x:515.5564,y:361.5068},0).wait(1).to({scaleX:0.2705,scaleY:0.2705,x:515.0808,y:361.6796},0).wait(1).to({scaleX:0.2698,scaleY:0.2698,x:514.6051,y:361.8525},0).wait(1).to({scaleX:0.269,scaleY:0.269,x:514.1295,y:362.0254},0).wait(1).to({scaleX:0.2682,scaleY:0.2682,x:513.6538,y:362.1983},0).wait(1).to({scaleX:0.2675,scaleY:0.2675,x:513.1782,y:362.3712},0).wait(1).to({scaleX:0.2667,scaleY:0.2667,x:512.7026,y:362.5441},0).wait(1).to({scaleX:0.2659,scaleY:0.2659,x:512.2269,y:362.717},0).wait(1).to({scaleX:0.2652,scaleY:0.2652,x:511.7513,y:362.8899},0).wait(1).to({scaleX:0.2644,scaleY:0.2644,x:511.2756,y:363.0628},0).wait(1).to({scaleX:0.2637,scaleY:0.2637,x:510.8,y:363.2357},0).wait(1).to({scaleX:0.9933,scaleY:0.9933,x:640,y:360,visible:true},0).wait(1).to({scaleX:0.9902,scaleY:0.9902,y:360.0002},0).wait(1).to({scaleX:0.9872,scaleY:0.9872,y:360.0003},0).wait(1).to({scaleX:0.9841,scaleY:0.9841,y:360.0005},0).wait(1).to({scaleX:0.9811,scaleY:0.9811,y:360.0006},0).wait(1).to({scaleX:0.978,scaleY:0.978,y:360.0008},0).wait(1).to({scaleX:0.975,scaleY:0.975,y:360.0009},0).wait(1).to({scaleX:0.9719,scaleY:0.9719,y:360.0011},0).wait(1).to({scaleX:0.9689,scaleY:0.9689,y:360.0012},0).wait(1).to({scaleX:0.9658,scaleY:0.9658,y:360.0014},0).wait(1).to({scaleX:0.9628,scaleY:0.9628,y:360.0015},0).wait(1).to({scaleX:0.9597,scaleY:0.9597,y:360.0017},0).wait(1).to({scaleX:0.9567,scaleY:0.9567,y:360.0018},0).wait(1).to({scaleX:0.9536,scaleY:0.9536,y:360.002},0).wait(1).to({scaleX:0.9506,scaleY:0.9506,y:360.0021},0).wait(1).to({scaleX:0.9475,scaleY:0.9475,y:360.0023},0).wait(1).to({scaleX:0.9445,scaleY:0.9445,y:360.0024},0).wait(1).to({scaleX:0.9414,scaleY:0.9414,y:360.0026},0).wait(1).to({scaleX:0.9384,scaleY:0.9384,y:360.0027},0).wait(1).to({scaleX:0.9353,scaleY:0.9353,y:360.0029},0).wait(1).to({scaleX:0.9323,scaleY:0.9323,y:360.003},0).wait(1).to({scaleX:0.9292,scaleY:0.9292,y:360.0032},0).wait(1).to({scaleX:0.9262,scaleY:0.9262,y:360.0034},0).wait(1).to({scaleX:0.9231,scaleY:0.9231,y:360.0035},0).wait(1).to({scaleX:0.9201,scaleY:0.9201,y:360.0037},0).wait(1).to({scaleX:0.917,scaleY:0.917,y:360.0038},0).wait(1).to({scaleX:0.914,scaleY:0.914,y:360.004},0).wait(1).to({scaleX:0.9109,scaleY:0.9109,y:360.0041},0).wait(1).to({scaleX:0.9079,scaleY:0.9079,y:360.0043},0).wait(1).to({scaleX:0.9048,scaleY:0.9048,y:360.0044},0).wait(1).to({scaleX:0.9018,scaleY:0.9018,y:360.0046},0).wait(1).to({scaleX:0.8987,scaleY:0.8987,y:360.0047},0).wait(1).to({scaleX:0.8957,scaleY:0.8957,y:360.0049},0).wait(1).to({scaleX:0.8926,scaleY:0.8926,y:360.005},0).wait(1).to({scaleX:0.8896,scaleY:0.8896,y:360.0052},0).wait(1).to({scaleX:0.8865,scaleY:0.8865,y:360.0053},0).wait(1).to({scaleX:0.8835,scaleY:0.8835,y:360.0055},0).wait(1).to({scaleX:0.8804,scaleY:0.8804,y:360.0056},0).wait(1).to({scaleX:0.8774,scaleY:0.8774,y:360.0058},0).wait(1).to({scaleX:0.8743,scaleY:0.8743,y:360.0059},0).wait(1).to({scaleX:0.8713,scaleY:0.8713,y:360.0061},0).wait(1).to({scaleX:0.8682,scaleY:0.8682,y:360.0063},0).wait(1).to({scaleX:0.8652,scaleY:0.8652,y:360.0064},0).wait(1).to({scaleX:0.8621,scaleY:0.8621,y:360.0066},0).wait(1).to({scaleX:0.8591,scaleY:0.8591,y:360.0067},0).wait(1).to({scaleX:0.856,scaleY:0.856,y:360.0069},0).wait(1).to({scaleX:0.853,scaleY:0.853,y:360.007},0).wait(1).to({scaleX:0.8499,scaleY:0.8499,y:360.0072},0).wait(1).to({scaleX:0.8469,scaleY:0.8469,y:360.0073},0).wait(1).to({scaleX:0.8438,scaleY:0.8438,y:360.0075},0).wait(1).to({scaleX:0.8407,scaleY:0.8407,y:360.0076},0).wait(1).to({scaleX:0.8377,scaleY:0.8377,y:360.0078},0).wait(1).to({scaleX:0.8346,scaleY:0.8346,y:360.0079},0).wait(1).to({scaleX:0.8316,scaleY:0.8316,y:360.0081},0).wait(1).to({scaleX:0.8285,scaleY:0.8285,y:360.0082},0).wait(1).to({scaleX:0.8255,scaleY:0.8255,y:360.0084},0).wait(1).to({scaleX:0.8224,scaleY:0.8224,y:360.0085},0).wait(1).to({scaleX:0.8194,scaleY:0.8194,y:360.0087},0).wait(1).to({scaleX:0.8163,scaleY:0.8163,y:360.0088},0).wait(1).to({scaleX:0.8133,scaleY:0.8133,y:360.009},0).wait(1).to({scaleX:0.8102,scaleY:0.8102,y:360.0092},0).wait(1).to({scaleX:0.8072,scaleY:0.8072,y:360.0093},0).wait(1).to({scaleX:0.8041,scaleY:0.8041,y:360.0095},0).wait(1).to({scaleX:0.8011,scaleY:0.8011,y:360.0096},0).wait(1).to({scaleX:0.798,scaleY:0.798,y:360.0098},0).wait(1).to({scaleX:0.795,scaleY:0.795,y:360.0099},0).wait(1).to({scaleX:0.7919,scaleY:0.7919,y:360.0101},0).wait(1).to({scaleX:0.7889,scaleY:0.7889,y:360.0102},0).wait(1).to({scaleX:0.7858,scaleY:0.7858,y:360.0104},0).wait(1).to({scaleX:0.7828,scaleY:0.7828,y:360.0105},0).wait(1).to({scaleX:0.7797,scaleY:0.7797,y:360.0107},0).wait(1).to({scaleX:0.7767,scaleY:0.7767,y:360.0108},0).wait(1).to({scaleX:0.7736,scaleY:0.7736,y:360.011},0).wait(1).to({scaleX:0.7706,scaleY:0.7706,y:360.0111},0).wait(1).to({scaleX:0.7675,scaleY:0.7675,y:360.0113},0).wait(1).to({scaleX:0.7645,scaleY:0.7645,y:360.0114},0).wait(1).to({scaleX:0.7614,scaleY:0.7614,y:360.0116},0).wait(1).to({regX:0.6,regY:0.6,scaleX:0.4752,scaleY:0.4752,x:903.3,y:224.75},0).wait(1).to({regX:0,regY:0,scaleX:0.474,scaleY:0.474,x:903.0229,y:224.2921},0).wait(1).to({scaleX:0.4728,scaleY:0.4728,x:903.0459,y:224.1341},0).wait(1).to({scaleX:0.4715,scaleY:0.4715,x:903.0688,y:223.9762},0).wait(1).to({scaleX:0.4703,scaleY:0.4703,x:903.0917,y:223.8183},0).wait(1).to({scaleX:0.4691,scaleY:0.4691,x:903.1147,y:223.6604},0).wait(1).to({scaleX:0.4679,scaleY:0.4679,x:903.1376,y:223.5024},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:903.1605,y:223.3445},0).wait(1).to({scaleX:0.4655,scaleY:0.4655,x:903.1835,y:223.1866},0).wait(1).to({scaleX:0.4642,scaleY:0.4642,x:903.2064,y:223.0287},0).wait(1).to({scaleX:0.463,scaleY:0.463,x:903.2293,y:222.8707},0).wait(1).to({scaleX:0.4618,scaleY:0.4618,x:903.2523,y:222.7128},0).wait(1).to({scaleX:0.4606,scaleY:0.4606,x:903.2752,y:222.5549},0).wait(1).to({scaleX:0.4594,scaleY:0.4594,x:903.2981,y:222.397},0).wait(1).to({scaleX:0.4581,scaleY:0.4581,x:903.3211,y:222.2391},0).wait(1).to({scaleX:0.4569,scaleY:0.4569,x:903.344,y:222.0811},0).wait(1).to({scaleX:0.4557,scaleY:0.4557,x:903.367,y:221.9232},0).wait(1).to({scaleX:0.4545,scaleY:0.4545,x:903.3899,y:221.7653},0).wait(1).to({scaleX:0.4533,scaleY:0.4533,x:903.4128,y:221.6074},0).wait(1).to({scaleX:0.4521,scaleY:0.4521,x:903.4358,y:221.4494},0).wait(1).to({scaleX:0.4508,scaleY:0.4508,x:903.4587,y:221.2915},0).wait(1).to({scaleX:0.4496,scaleY:0.4496,x:903.4816,y:221.1336},0).wait(1).to({scaleX:0.4484,scaleY:0.4484,x:903.5046,y:220.9757},0).wait(1).to({scaleX:0.4472,scaleY:0.4472,x:903.5275,y:220.8177},0).wait(1).to({scaleX:0.446,scaleY:0.446,x:903.5504,y:220.6598},0).wait(1).to({scaleX:0.4448,scaleY:0.4448,x:903.5734,y:220.5019},0).wait(1).to({scaleX:0.4435,scaleY:0.4435,x:903.5963,y:220.344},0).wait(1).to({scaleX:0.4423,scaleY:0.4423,x:903.6192,y:220.186},0).wait(1).to({scaleX:0.4411,scaleY:0.4411,x:903.6422,y:220.0281},0).wait(1).to({scaleX:0.4399,scaleY:0.4399,x:903.6651,y:219.8702},0).wait(1).to({scaleX:0.4387,scaleY:0.4387,x:903.688,y:219.7123},0).wait(1).to({scaleX:0.4375,scaleY:0.4375,x:903.711,y:219.5543},0).wait(1).to({scaleX:0.4362,scaleY:0.4362,x:903.7339,y:219.3964},0).wait(1).to({scaleX:0.435,scaleY:0.435,x:903.7568,y:219.2385},0).wait(1).to({scaleX:0.4338,scaleY:0.4338,x:903.7798,y:219.0806},0).wait(1).to({scaleX:0.4326,scaleY:0.4326,x:903.8027,y:218.9226},0).wait(1).to({scaleX:0.4314,scaleY:0.4314,x:903.8257,y:218.7647},0).wait(1).to({scaleX:0.4302,scaleY:0.4302,x:903.8486,y:218.6068},0).wait(1).to({scaleX:0.4289,scaleY:0.4289,x:903.8715,y:218.4489},0).wait(1).to({scaleX:0.4277,scaleY:0.4277,x:903.8945,y:218.2909},0).wait(1).to({scaleX:0.4265,scaleY:0.4265,x:903.9174,y:218.133},0).wait(1).to({scaleX:0.4253,scaleY:0.4253,x:903.9403,y:217.9751},0).wait(1).to({scaleX:0.4241,scaleY:0.4241,x:903.9633,y:217.8172},0).wait(1).to({scaleX:0.4229,scaleY:0.4229,x:903.9862,y:217.6592},0).wait(1).to({scaleX:0.4216,scaleY:0.4216,x:904.0091,y:217.5013},0).wait(1).to({scaleX:0.4204,scaleY:0.4204,x:904.0321,y:217.3434},0).wait(1).to({scaleX:0.4192,scaleY:0.4192,x:904.055,y:217.1855},0).wait(1).to({scaleX:0.418,scaleY:0.418,x:904.0779,y:217.0275},0).wait(1).to({scaleX:0.4168,scaleY:0.4168,x:904.1009,y:216.8696},0).wait(1).to({scaleX:0.4155,scaleY:0.4155,x:904.1238,y:216.7117},0).wait(1).to({scaleX:0.4143,scaleY:0.4143,x:904.1467,y:216.5538},0).wait(1).to({scaleX:0.4131,scaleY:0.4131,x:904.1697,y:216.3959},0).wait(1).to({scaleX:0.4119,scaleY:0.4119,x:904.1926,y:216.2379},0).wait(1).to({scaleX:0.4107,scaleY:0.4107,x:904.2155,y:216.08},0).wait(1).to({scaleX:0.4095,scaleY:0.4095,x:904.2385,y:215.9221},0).wait(1).to({scaleX:0.4082,scaleY:0.4082,x:904.2614,y:215.7642},0).wait(1).to({scaleX:0.407,scaleY:0.407,x:904.2844,y:215.6062},0).wait(1).to({scaleX:0.4058,scaleY:0.4058,x:904.3073,y:215.4483},0).wait(1).to({scaleX:0.4046,scaleY:0.4046,x:904.3302,y:215.2904},0).wait(1).to({scaleX:0.4034,scaleY:0.4034,x:904.3532,y:215.1325},0).wait(1).to({scaleX:0.4022,scaleY:0.4022,x:904.3761,y:214.9745},0).wait(1).to({scaleX:0.4009,scaleY:0.4009,x:904.399,y:214.8166},0).wait(1).to({scaleX:0.3997,scaleY:0.3997,x:904.422,y:214.6587},0).wait(1).to({scaleX:0.3985,scaleY:0.3985,x:904.4449,y:214.5008},0).wait(1).to({scaleX:0.3973,scaleY:0.3973,x:904.4678,y:214.3428},0).wait(1).to({scaleX:0.3961,scaleY:0.3961,x:904.4908,y:214.1849},0).wait(1).to({scaleX:0.3949,scaleY:0.3949,x:904.5137,y:214.027},0).wait(1).to({scaleX:0.3936,scaleY:0.3936,x:904.5366,y:213.8691},0).wait(1).to({scaleX:0.3924,scaleY:0.3924,x:904.5596,y:213.7111},0).wait(1).to({scaleX:0.3912,scaleY:0.3912,x:904.5825,y:213.5532},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:904.6054,y:213.3953},0).wait(1).to({scaleX:0.3888,scaleY:0.3888,x:904.6284,y:213.2374},0).wait(1).to({scaleX:0.3876,scaleY:0.3876,x:904.6513,y:213.0794},0).wait(1).to({scaleX:0.3863,scaleY:0.3863,x:904.6742,y:212.9215},0).wait(1).to({scaleX:0.3851,scaleY:0.3851,x:904.6972,y:212.7636},0).wait(1).to({scaleX:0.3839,scaleY:0.3839,x:904.7201,y:212.6057},0).wait(1).to({scaleX:0.3827,scaleY:0.3827,x:904.7431,y:212.4477},0).wait(1).to({scaleX:0.3815,scaleY:0.3815,x:904.766,y:212.2898},0).wait(1).to({scaleX:0.3803,scaleY:0.3803,x:904.7889,y:212.1319},0).wait(1).to({scaleX:0.379,scaleY:0.379,x:904.8119,y:211.974},0).wait(1).to({scaleX:0.3778,scaleY:0.3778,x:904.8348,y:211.816},0).wait(1).to({scaleX:0.3766,scaleY:0.3766,x:904.8577,y:211.6581},0).wait(1).to({scaleX:0.3754,scaleY:0.3754,x:904.8807,y:211.5002},0).wait(1).to({scaleX:0.3742,scaleY:0.3742,x:904.9036,y:211.3423},0).wait(1).to({scaleX:0.373,scaleY:0.373,x:904.9265,y:211.1843},0).wait(1).to({scaleX:0.3717,scaleY:0.3717,x:904.9495,y:211.0264},0).wait(1).to({scaleX:0.3705,scaleY:0.3705,x:904.9724,y:210.8685},0).wait(1).to({scaleX:0.3693,scaleY:0.3693,x:904.9953,y:210.7106},0).wait(1).to({scaleX:0.3681,scaleY:0.3681,x:905.0183,y:210.5527},0).wait(1).to({scaleX:0.3669,scaleY:0.3669,x:905.0412,y:210.3947},0).wait(1).to({scaleX:0.3656,scaleY:0.3656,x:905.0641,y:210.2368},0).wait(1).to({scaleX:0.3644,scaleY:0.3644,x:905.0871,y:210.0789},0).wait(1).to({scaleX:0.3632,scaleY:0.3632,x:905.11,y:209.921},0).wait(1).to({scaleX:0.362,scaleY:0.362,x:905.133,y:209.763},0).wait(1).to({scaleX:0.3608,scaleY:0.3608,x:905.1559,y:209.6051},0).wait(1).to({scaleX:0.3596,scaleY:0.3596,x:905.1788,y:209.4472},0).wait(1).to({scaleX:0.3583,scaleY:0.3583,x:905.2018,y:209.2893},0).wait(1).to({scaleX:0.3571,scaleY:0.3571,x:905.2247,y:209.1313},0).wait(1).to({scaleX:0.3559,scaleY:0.3559,x:905.2476,y:208.9734},0).wait(1).to({scaleX:0.3547,scaleY:0.3547,x:905.2706,y:208.8155},0).wait(1).to({scaleX:0.3535,scaleY:0.3535,x:905.2935,y:208.6576},0).wait(1).to({scaleX:0.3523,scaleY:0.3523,x:905.3164,y:208.4996},0).wait(1).to({scaleX:0.351,scaleY:0.351,x:905.3394,y:208.3417},0).wait(1).to({scaleX:0.3498,scaleY:0.3498,x:905.3623,y:208.1838},0).wait(1).to({scaleX:0.3486,scaleY:0.3486,x:905.3852,y:208.0259},0).wait(1).to({scaleX:0.3474,scaleY:0.3474,x:905.4082,y:207.8679},0).wait(1).to({scaleX:0.3462,scaleY:0.3462,x:905.4311,y:207.71},0).wait(1).to({scaleX:0.345,scaleY:0.345,x:905.454,y:207.5521},0).wait(1).to({scaleX:0.3437,scaleY:0.3437,x:905.477,y:207.3942},0).wait(1).to({scaleX:0.3425,scaleY:0.3425,x:905.4999,y:207.2362},0).wait(1).to({scaleX:0.3413,scaleY:0.3413,x:905.5228,y:207.0783},0).wait(1).to({scaleX:0.3401,scaleY:0.3401,x:905.5458,y:206.9204},0).wait(1).to({scaleX:0.3389,scaleY:0.3389,x:905.5687,y:206.7625},0).wait(1).to({scaleX:0.3377,scaleY:0.3377,x:905.5917,y:206.6045},0).wait(1).to({scaleX:0.3364,scaleY:0.3364,x:905.6146,y:206.4466},0).wait(1).to({scaleX:0.3352,scaleY:0.3352,x:905.6375,y:206.2887},0).wait(1).to({scaleX:0.334,scaleY:0.334,x:905.6605,y:206.1308},0).wait(1).to({scaleX:0.3328,scaleY:0.3328,x:905.6834,y:205.9728},0).wait(1).to({scaleX:0.3316,scaleY:0.3316,x:905.7063,y:205.8149},0).wait(1).to({scaleX:0.3304,scaleY:0.3304,x:905.7293,y:205.657},0).wait(1).to({scaleX:0.3291,scaleY:0.3291,x:905.7522,y:205.4991},0).wait(1).to({scaleX:0.3279,scaleY:0.3279,x:905.7751,y:205.3411},0).wait(1).to({scaleX:0.3267,scaleY:0.3267,x:905.7981,y:205.1832},0).wait(1).to({scaleX:0.3255,scaleY:0.3255,x:905.821,y:205.0253},0).wait(1).to({scaleX:0.3243,scaleY:0.3243,x:905.8439,y:204.8674},0).wait(1).to({scaleX:0.323,scaleY:0.323,x:905.8669,y:204.7095},0).wait(1).to({scaleX:0.3218,scaleY:0.3218,x:905.8898,y:204.5515},0).wait(1).to({scaleX:0.3206,scaleY:0.3206,x:905.9127,y:204.3936},0).wait(1).to({scaleX:0.3194,scaleY:0.3194,x:905.9357,y:204.2357},0).wait(25).to({regY:0.6,scaleX:0.3231,scaleY:0.3231,x:547.9,y:349.95,visible:false},0).wait(1).to({regY:0,y:349.75},0).wait(12).to({regY:0.6,y:349.95},0).wait(1).to({regY:0,y:349.75},0).wait(11).to({scaleX:0.1826,scaleY:0.1826,x:481.65,y:174.9843},0).wait(59).to({regY:0.6,y:175.1},0).wait(1).to({regY:0,scaleX:1,scaleY:1,x:640,y:359.4504},0).wait(149));

	// Buttons_obj_
	this.Buttons = new lib.Scene_1_Buttons();
	this.Buttons.name = "Buttons";
	this.Buttons.setTransform(312.1,324.4,1,1,0,0,0,312.1,324.4);
	this.Buttons.depth = 0;
	this.Buttons.isAttachedToCamera = 0
	this.Buttons.isAttachedToMask = 0
	this.Buttons.layerDepth = 0
	this.Buttons.layerIndex = 0
	this.Buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Buttons).wait(1).to({regX:312.4,regY:324.5,scaleX:1.0038,scaleY:1.0038,x:311.95,y:324.35},0).wait(638).to({regX:311.9,regY:323.7,scaleX:1,scaleY:1,x:312.1},0).wait(1));

	// Dog_obj_
	this.Dog = new lib.Scene_1_Dog();
	this.Dog.name = "Dog";
	this.Dog.depth = 0;
	this.Dog.isAttachedToCamera = 0
	this.Dog.isAttachedToMask = 0
	this.Dog.layerDepth = 0
	this.Dog.layerIndex = 1
	this.Dog.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Dog).wait(548).to({regX:-0.2,regY:-0.7,y:-0.05},0).wait(1).to({regX:626.7,regY:673.6,x:626.85,y:674.2},0).wait(85).to({_off:true},1).wait(5));

	// Fire_Upview_obj_
	this.Fire_Upview = new lib.Scene_1_Fire_Upview();
	this.Fire_Upview.name = "Fire_Upview";
	this.Fire_Upview.depth = 0;
	this.Fire_Upview.isAttachedToCamera = 0
	this.Fire_Upview.isAttachedToMask = 0
	this.Fire_Upview.layerDepth = 0
	this.Fire_Upview.layerIndex = 2
	this.Fire_Upview.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Fire_Upview).wait(176).to({regX:4.2,regY:2.4,scaleX:1.0068,scaleY:1.0068,x:-0.05},0).to({_off:true},77).wait(387));

	// up_view_obj_
	this.up_view = new lib.Scene_1_up_view();
	this.up_view.name = "up_view";
	this.up_view.depth = 0;
	this.up_view.isAttachedToCamera = 0
	this.up_view.isAttachedToMask = 0
	this.up_view.layerDepth = 0
	this.up_view.layerIndex = 3
	this.up_view.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.up_view).wait(176).to({regX:4.2,regY:2.4,scaleX:1.0068,scaleY:1.0068,x:-0.05},0).to({_off:true},77).wait(387));

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

	this.timeline.addTween(cjs.Tween.get(this.Clock).wait(253).to({regX:1026,regY:139,scaleX:2.1045,scaleY:2.1045,x:898.95,y:180.25},0).wait(238).to({regX:898.6,regY:179.5,scaleX:1,scaleY:1,x:898.8,y:180.15},0).wait(149));

	// Hand_obj_
	this.Hand = new lib.Scene_1_Hand();
	this.Hand.name = "Hand";
	this.Hand.depth = 0;
	this.Hand.isAttachedToCamera = 0
	this.Hand.isAttachedToMask = 0
	this.Hand.layerDepth = 0
	this.Hand.layerIndex = 5
	this.Hand.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Hand).wait(58).to({regX:340.9,regY:233.4,scaleX:3.0948,scaleY:3.0948,y:0.05},0).wait(38).to({_off:true},1).wait(543));

	// Button_obj_
	this.Button = new lib.Scene_1_Button();
	this.Button.name = "Button";
	this.Button.depth = 0;
	this.Button.isAttachedToCamera = 0
	this.Button.isAttachedToMask = 0
	this.Button.layerDepth = 0
	this.Button.layerIndex = 6
	this.Button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(80).to({regX:340.9,regY:233.4,scaleX:3.0948,scaleY:3.0948,y:0.05},0).wait(560));

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

	this.timeline.addTween(cjs.Tween.get(this.Toaster).wait(80).to({regX:496.4,regY:365.3,scaleX:3.0948,scaleY:3.0948,x:481.25,y:408.25},0).wait(455).to({regX:481.1,regY:407.6,scaleX:1,scaleY:1,x:481.3},0).to({_off:true},102).wait(3));

	// Smoke_and_Fire_obj_
	this.Smoke_and_Fire = new lib.Scene_1_Smoke_and_Fire();
	this.Smoke_and_Fire.name = "Smoke_and_Fire";
	this.Smoke_and_Fire.depth = 0;
	this.Smoke_and_Fire.isAttachedToCamera = 0
	this.Smoke_and_Fire.isAttachedToMask = 0
	this.Smoke_and_Fire.layerDepth = 0
	this.Smoke_and_Fire.layerIndex = 8
	this.Smoke_and_Fire.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Smoke_and_Fire).wait(98).to({regX:341.2,regY:233.8,scaleX:3.1021,scaleY:3.1021,x:0.2,y:-0.1},0).wait(308).to({regX:341.1,regY:233.4,scaleX:3.0948,scaleY:3.0948,x:0.05,y:0.05},0).wait(25).to({regX:364.8,regY:109.2,scaleX:5.4773,scaleY:5.4773,x:0.3,y:0},0).to({_off:true},161).wait(48));

	// toastfly1_obj_
	this.toastfly1 = new lib.Scene_1_toastfly1();
	this.toastfly1.name = "toastfly1";
	this.toastfly1.depth = 0;
	this.toastfly1.isAttachedToCamera = 0
	this.toastfly1.isAttachedToMask = 0
	this.toastfly1.layerDepth = 0
	this.toastfly1.layerIndex = 9
	this.toastfly1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.toastfly1).wait(406).to({regX:341.1,regY:233.4,scaleX:3.0948,scaleY:3.0948,x:0.05,y:0.05},0).wait(1).to({regX:501,regY:415.4,scaleX:1,scaleY:1,x:159.95,y:182.05},0).wait(184).to({_off:true},1).wait(48));

	// toastfly_2_obj_
	this.toastfly_2 = new lib.Scene_1_toastfly_2();
	this.toastfly_2.name = "toastfly_2";
	this.toastfly_2.depth = 0;
	this.toastfly_2.isAttachedToCamera = 0
	this.toastfly_2.isAttachedToMask = 0
	this.toastfly_2.layerDepth = 0
	this.toastfly_2.layerIndex = 10
	this.toastfly_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.toastfly_2).wait(406).to({regX:341.1,regY:233.4,scaleX:3.0948,scaleY:3.0948,x:0.05,y:0.05},0).wait(1).to({regX:472.2,regY:408,scaleX:1,scaleY:1,x:131.15,y:174.65},0).wait(186).to({_off:true},1).wait(46));

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

	this.timeline.addTween(cjs.Tween.get(this.Toaster_2).wait(76).to({regX:496.4,regY:365.3,scaleX:3.0948,scaleY:3.0948,x:481.25,y:408.25},0).wait(564));

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

	this.timeline.addTween(cjs.Tween.get(this.Toasts).wait(79).to({regX:496.2,regY:355.8,scaleX:3.0948,scaleY:3.0948,x:480.65,y:378.85},0).wait(1).to({regX:480.5,regY:387.2,scaleX:1,scaleY:1,x:464.85,y:410.1},0).wait(325).to({_off:true},1).wait(234));

	// Window_obj_
	this.Window = new lib.Scene_1_Window();
	this.Window.name = "Window";
	this.Window.setTransform(657.5,234,1,1,0,0,0,657.5,234);
	this.Window.depth = 0;
	this.Window.isAttachedToCamera = 0
	this.Window.isAttachedToMask = 0
	this.Window.layerDepth = 0
	this.Window.layerIndex = 13
	this.Window.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Window).wait(640));

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

	this.timeline.addTween(cjs.Tween.get(this.Background).wait(640));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(298.5,354,1204.1,372.20000000000005);
// library properties:
lib.properties = {
	id: '1EBC320EB81D403F9D0B19E7404B5A6B',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/clock_mixdown.mp3?1617441428480", id:"clock_mixdown"},
		{src:"sounds/ding.mp3?1617441428480", id:"ding"},
		{src:"sounds/eating_mixdown.mp3?1617441428480", id:"eating_mixdown"},
		{src:"sounds/KitchenToasterLoading_01.mp3?1617441428480", id:"KitchenToasterLoading_01"},
		{src:"sounds/Mainmusic_mixdown.mp3?1617441428480", id:"Mainmusic_mixdown"},
		{src:"sounds/Woosh.mp3?1617441428480", id:"Woosh"}
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