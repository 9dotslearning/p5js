// colors from Leigh Prather, https://stock.adobe.com/295758061/
let colors;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  background(242);
  colors = [color(238, 5, 242),
             color(56, 5, 242),
             color(104, 242, 5),
             color(234, 242, 5),
             color(242, 25, 5),
             color(242, 242, 242),
           ];
}

function draw() {
  noStroke();
  let whichColor = floor(random(colors.length));
  fill(colors[whichColor]);
  ellipse(random(32), random(height), random(32));
}
