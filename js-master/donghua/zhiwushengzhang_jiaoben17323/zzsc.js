window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	//Lets resize the canvas to occupy the full page
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	//Some variables
	var length, divergence, reduction, line_width, start_points = [];
	
	init();
	
	function init()
	{
		//filling the canvas white
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, W, H);
		
		//Lets draw the trunk of the tree
		//lets randomise the variables
		//length of the trunk - 100-150
		length = 100 + Math.round(Math.random()*50);
		//angle at which branches will diverge - 10-60
		divergence = 10 + Math.round(Math.random()*50);
		//Every branch will be 0.75times of the previous one - 0.5-0.75
		//with 2 decimal points
		reduction = Math.round(50 + Math.random()*20)/100;
		//width of the branch/trunk
		line_width = 10;
		
		//This is the end point of the trunk, from where branches will diverge
		var trunk = {x: W/2, y: length+50, angle: 90};
		//It becomes the start point for branches
		start_points = []; //empty the start points on every init();
		start_points.push(trunk);
		
		//Y coordinates go positive downwards, hence they are inverted by deducting it
		//from the canvas height = H
		ctx.beginPath();
		ctx.moveTo(trunk.x, H-50);
		ctx.lineTo(trunk.x, H-trunk.y);
		ctx.strokeStyle = "brown";
		ctx.lineWidth = line_width;
		ctx.stroke();
		
		branches();
	}
	
	//Lets draw the branches now
	function branches()
	{
		//reducing line_width and length
		length = length * reduction;
		line_width = line_width * reduction;
		ctx.lineWidth = line_width;
		
		var new_start_points = [];
		ctx.beginPath();
		for(var i = 0; i < start_points.length; i++)
		{
			var sp = start_points[i];
			//2 branches will come out of every start point. Hence there will be
			//2 end points. There is a difference in the divergence.
			var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length);
			var ep2 = get_endpoint(sp.x, sp.y, sp.angle-divergence, length);
			
			//drawing the branches now
			ctx.moveTo(sp.x, H-sp.y);
			ctx.lineTo(ep1.x, H-ep1.y);
			ctx.moveTo(sp.x, H-sp.y);
			ctx.lineTo(ep2.x, H-ep2.y);
			
			//Time to make this function recursive to draw more branches
			ep1.angle = sp.angle+divergence;
			ep2.angle = sp.angle-divergence;
			
			new_start_points.push(ep1);
			new_start_points.push(ep2);
		}
		//Lets add some more color
		if(length < 10) ctx.strokeStyle = "green";
		else ctx.strokeStyle = "brown";
		ctx.stroke();
		start_points = new_start_points;
		//recursive call - only if length is more than 2.
		//Else it will fall in an long loop
		if(length > 2) setTimeout(branches, 50);
		else setTimeout(init, 500);
	}
	
	function get_endpoint(x, y, a, length)
	{
		//This function will calculate the end points based on simple vectors
		//http://physics.about.com/od/mathematics/a/VectorMath.htm
		//You can read about basic vectors from this link
		var epx = x + length * Math.cos(a*Math.PI/180);
		var epy = y + length * Math.sin(a*Math.PI/180);
		return {x: epx, y: epy};
	}
	
	
	
}