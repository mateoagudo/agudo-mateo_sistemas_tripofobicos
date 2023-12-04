class Mosca {
  constructor(_x, _y, _diamInicial) {
    this.pos = createVector(_x, _y);
    this.diamInicial = _diamInicial;
    this.diam = this.diamInicial;
    this.noiseTime = random(100);
  }
  update() {
    this.noiseTime += 0.1;

    this.pos.x = map(noise(this.noiseTime, 0, 1, 0, width));
    this.pos.y = map(noise(this.noiseTime + 10, 0, 1, 0, height));
  }

  display() {
    fill(0);
    stroke(100);
    strokeWeight(6);
    circle(this.pos.x, this.pos.y, this.diam);
  }
}
