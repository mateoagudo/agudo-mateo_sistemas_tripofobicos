class Sistema {
  constructor() {
    background(235, 200, 180);

    this.pos = createVector(random(width), random(height));
    this.diamInicial = random(50, 100);
    this.color = color(30, random(5, 25), 5);
    this.trazo = color(random(175, 200), random(150, 200), 50);
    this.noiseTime = random(0, 100);
    this.ps = [];
    this.maximoDeParticulas = 28;
  }

  update() {
    //Actualizar posicion

    this.noiseTime += 0.0005;
    this.pos.x = map(noise(this.noiseTime), 0, 1, 0, width);
    this.pos.y = map(noise(this.noiseTime + 10), 0, 1, 0, height);

    //Agregar particulas
    // if (this.ps.length <= this.maximoDeParticulas) {
    // }
    this.p = new Particula(
      this.pos.x,
      this.pos.y,
      this.diamInicial,
      this.color,
      this.trazo
    );
    this.ps.push(this.p);
  }

  display() {
    // push();
    // translate(this.diamPos, 0);
    // rotate(this.angPos);
    // pop();
    for (let i = 0; i < this.ps.length; i++) {
      this.ps[i].display();
      this.ps[i].update();
    }
  }
}
