function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function getVector(index, total) {
  var r = 1000;
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke('white');
  strokeWeight(2);
  let total = 100;
  for (let i = 0 ; i < total; i++) {
    //const a = getVector(i, total);
    const b = getVector(i, total);
    line(mouseX-width/2, mouseY-height/2, b.x, b.y);
  }
  
  //stroke('white');
  //noFill();
  //ellipse(0, 0, windowWidth+175);
}
