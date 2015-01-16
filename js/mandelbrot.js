var Mandelbrot = (function(){
	var w = 400;
	var h =  400;

	var API = {};	
	
	API.plot = function (){

		var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
		var mandelset = [];
		var z = 0;
		var scale = 100;
		var rounds = 3500;
		for(c_re=-200;c_re<=200;c_re++){
		    for(c_im=-200;c_im<=200;c_im++){
		        var c = math.complex(c_re*0.01,c_im*0.01);
		        for(t=0;t<=rounds;t++){
		            z = math.add(math.square(z),c);
		        }
		        if (math.norm(z) <= 2){
		            mandelset.push(z);
		            svg.append("rect")
		            .attr("x",(z.re)*scale+(w/2))
		            .attr("y",(z.im)*scale+(h/2))
		            .attr("width",1).attr("height",1).attr("fill","black");
		        }
		        z = 0;
		    }
		}
	};

	API.noise = function (){	
		console.log("noise loaded");
		var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
		for(x=(w/2)*-1;x<=w/2;x++){
			for(y=(h/2)*-1;y<=w/2;y++){
				r = math.random(0,255);
				g = math.random(0,255);
				b = math.random(0,255);
				svg.append("rect")
				.attr("x",x+(w/2))
				.attr("y",y+(h/2))
				.attr("width",1).attr("height",1).attr("fill",d3.rgb(r,g,b));
			}
		}
		console.log("noise ended");
	};
	return API;
})();