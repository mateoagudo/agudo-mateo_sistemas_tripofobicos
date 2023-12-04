// let ps = [];
let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // p = new Particula(windowWidth / 2, windowHeight / 2);
  // ps.push(p);
  p = new Sistema();
}

function draw() {
  background(255);
  // for (let i = 0; i < ps.length; i++) {
  //   ps[i].display();
  //   ps[i].update();
  //   print("funciona");
  // }
  p.display();
  p.update();
}
