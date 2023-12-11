let ss = [];
let d;

// let posSistema;
// let noiseTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (let i = 0; i < 2; i++) {
    let p = new Sistema();
    ss.push(p);
  }

  d = new Mosca(windowWidth / 2, windowHeight / 2, 200);
  // posSistema = createVector(random(width), random(height));
  // noiseTime = random(100);
  // p = new Sistema();
  // s = new Sistema();
  // d = new Sistema();
  // background(0);
}

function draw() {
  // background(200, 175, 150, 70);
  background(0, 70);

  for (let i = 0; i < ss.length; i++) {
    if (ss[i].estaMuerto) {
      ss.splice(i, 1);
      print("esta muerto");
      let p = new Sistema();
      ss.push(p);
    }
  }

  for (let i = 0; i < ss.length; i++) {
    ss[i].update();
    ss[i].display();
  }

  // push();
  // translate(posSistema.x, posSistema.y);

  // s.update();
  // s.display();
  // d.update();
  // d.display();
  // pop();
}
