var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.height = window.innerHeight;
c.width = window.innerWidth;
var letters = "ɒdɔbɘʇǫʜiႱʞlmnoqpɿƨƚƚuvwxyzAᙠƆᗡƎᖷᎮHIᐴႱᐴ⅃MИOꟼỌЯƧTUVWXYƸ1234567890アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンッ".split("")
var font_size = 10;
var columns = c.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++) {
	drops[x] = 1;
}

function init_rect() {
	var line_no = 0;
	while (line_no * font_size <= c.height) {
		line_no += 1;
		ctx.fillStyle = "#0";
		ctx.font = font_size + "px";
		for (var i = 0; i < drops.length; i++) {
			var text = letters[Math.floor(Math.random() * letters.length)];
			ctx.fillText(text, i * font_size, drops[i] * font_size);
			if (drops[i] * font_size > c.height && Math.random() > 0.99) {
				drops[i] = 0;
			}
			drops[i]++;
		}
	}
}

function draw() {
	ctx.fillStyle = "rgba(0,0,0,0.1)";
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = "#0f0";
	ctx.font = font_size + "px";
	for (var i = 0; i < drops.length; i++) {
		var text = letters[Math.floor(Math.random() * letters.length)];
		ctx.fillText(text, i * font_size, drops[i] * font_size);
		if (drops[i] * font_size > c.height && Math.random() > 0.99) {
			drops[i] = 0;
		}
		drops[i]++;
	}
}
window.onresize = function() {
	c.height = window.innerHeight;
	c.width = window.innerWidth;
}
init_rect()
setInterval(draw, 1000 / 15);