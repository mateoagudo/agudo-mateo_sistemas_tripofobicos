class Mosca {
  constructor(_x, _y, _diam) {
    this.pos = createVector(_x, _y);
    this.diam = _diam;

    this.vel = createVector(2, 0);
    this.vel.rotate(random(360));
    this.velRotacion = 0;

    this.noiseTime = random(100);
    this.tiempoDeVidaMosca = Math.ceil(random(350, 600));
    // this.tiempoDeMuerteMosca = 5;
    // this.estaMuriendo = false;
    this.moscaMuerta = false;
    this.colorMosca = color(150, 200, 25);
  }
  update() {
    this.noiseTime += 0.1;
    this.velRotacion = map(noise(this.noiseTime), 0, 1, -15, 15);
    this.vel.rotate(this.velRotacion);
    this.pos.add(this.vel);

    this.tiempoDeVidaMosca -= 1;
    if (this.tiempoDeVidaMosca <= 0) {
      this.moscaMuerta = true;
      fill(225, 25, 25);
      noStroke();
      circle(this.pos.x, this.pos.y, this.diam * 1.8);
    }
  }

  display() {
    fill(this.colorMosca);
    stroke(100);
    strokeWeight(2);
    circle(this.pos.x, this.pos.y, this.diam);
  }
}
