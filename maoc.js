function maoc(canvas, numPoints, multipler, bgcolour='#3333cc', fgcolour='#ff66ff') {
	ctx = canvas.getContext('2d');

	width = 900;
	height = width;
	radius = width/2 - 3;

	canvas.width = width;
	canvas.height = height;

//	ctx.fillStyle = '#0066ff';
//	ctx.fillRect(0, 0, width, height);

	ctx.fillStyle = bgcolour;
	drawCircle(width/2, height/2, radius, true);
	points = getPoints(numPoints);

//	ctx.fillStyle = '#aaaaaa';
//	drawPoints(points);

	ctx.strokeStyle = fgcolour;
	drawLines(points, multipler);
}

function getPoints(p) {
	var phi = 2 * Math.PI / p;
	var points = [];
	var i;
	for(i = 0; i < p; i++) {
		x = width/2 + radius * Math.sin(i * phi);
		y = height/2 - radius * Math.cos(i * phi);
		points.push([x, y]);
	}
	return points;
}

function drawPoints(points) {
	var i;
	for(i = 0; i < points.length; i++) {
		drawCircle(points[i][0], points[i][1], 1, true);
	}
}

function drawLines(points, m) {
	var i;
	for(i = 0; i < points.length; i ++) {
		var q = (i * m ) % points.length;
		drawLine(points[i], points[q]);
	}
}

function drawCircle(x, y, r, fill=false) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	if(fill) {
		ctx.fill();
	}else{
		ctx.stroke();
	}
}

function drawLine(start, end) {
		ctx.beginPath();
		ctx.moveTo(start[0], start[1]);
		ctx.lineTo(end[0], end[1]);
		ctx.stroke();
}
