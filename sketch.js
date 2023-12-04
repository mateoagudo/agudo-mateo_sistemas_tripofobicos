// let ps = [];
let p;
let s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // p = new Particula(windowWidth / 2, windowHeight / 2);
  // ps.push(p);
  p = new Sistema();
  s = new Sistema();
}

function draw() {
  background(200, 175, 150);
  // for (let i = 0; i < ps.length; i++) {
  //   ps[i].display();
  //   ps[i].update();
  //   print("funciona");
  // }
  p.display();
  p.update();
  s.display();
  s.update();
}
