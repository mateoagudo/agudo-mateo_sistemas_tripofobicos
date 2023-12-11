class Mosca {
  constructor(_x, _y, _diamInicial) {
    this.pos = createVector(_x, _y);
    this.diamInicial = _diamInicial;
    this.diam = this.diamInicial;
    this.noiseTime = random(100);
    this.tiempoDeVidaMosca = random(50, 100);
    this.moscaMuerta = false;
  }
  update() {
    this.noiseTime += 0.1;

    this.pos.x = map(noise(this.noiseTime, 0, 1, 0, width));
    this.pos.y = map(noise(this.noiseTime + 10, 0, 1, 0, height));

    this.tiempoDeVidaMosca -= 1;
    if (this.tiempoDeVidaMosca <= 0) {
      this.moscaMuerta = true;
    }
  }

  display() {
    fill(255);
    circle(this.pos.x, this.pos.y, this.diam);
  }
}
