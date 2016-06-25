var Mandelbrot = (function(){
	var w = 1200;
	var h =  600;
	
	
	var API = {};	
	
	API.complexcomp = function (){
		var c = math.complex(2,0.51);
		console.log("Complex num:"+c);
		console.log("modulus: "+math.norm(c));
	};

	API.plot = function (){
		var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
		var z = 0;
		var scale = 120;
		var rounds = 40;
		
			r = 0;
			g = 0;
			b = 0;
			for(c_re=-200;c_re<=200;c_re++){
			    for(c_im=-200;c_im<=0;c_im++){
			        var c = math.complex(c_re*0.01,c_im*0.01);
			        for(t=0;t<=rounds;t++){
			            z = math.add(math.square(z),c);
			            if(!isFinite(z.im) || !isFinite(z.re)){
			            	break;
			            }
			        }
					if (isFinite(math.norm(z))){
			            svg.append("rect")
			            .attr("x",(c.re)*scale+(w/2))
			            .attr("y",(c.im)*(-1)*scale+(h/2))
			            .attr("width",1).attr("height",1).attr("fill",d3.rgb(r,g,b));					
			            svg.append("rect")
			            .attr("x",(c.re)*scale+(w/2))
			            .attr("y",(c.im)*scale+(h/2))
			            .attr("width",1).attr("height",1).attr("fill",d3.rgb(r,g,b));			            
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
