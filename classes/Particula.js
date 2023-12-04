class Particula {
  constructor(_x, _y, _diamInicial) {
    this.pos = createVector(_x, _y);
    this.diamInicial = _diamInicial;
    this.diam = this.diamInicial;
    this.angPos = 0;
    this.diamPos = 0;
    this.NPPrimeraFila = 5;
    this.NPSegundaFila = 9;
    this.NPTerceraFila = 13;
    this.NPCuartaFila = 18;
    this.NPQuintaFila = 23;
    this.NPSextaFila = 28;
    this.contador = 1;
    // this.tiempoDeVidaInicial = this.diamInicial;
    // this.tiempoDeVida = this.tiempoDeVidaInicial;
  }

  update() {
    this.contador += 1;
    //Primer grupo de particulas. Angulo de 0°
    if (this.contador <= this.NPPrimeraFila) {
      this.angPos += 90;
      this.diamPos = this.diamInicial * 1.05;
      this.diam = this.diamInicial * 0.65;
      //Segundo grupo de particulas. Angulo de 45°
    } else if (this.contador <= this.NPSegundaFila) {
      this.angPos = 45 + (this.contador - 6) * 90;
      //   this.angPos = 45;
      //   this.angPos += 90;
      //Tercer grupo de particulas. Angulo de 22.5°
    } else if (this.contador <= this.NPTerceraFila) {
      this.angPos = 22.5 + (this.contador - 10) * 90;
      this.diamPos = this.diamInicial * 1.6;
      this.diam = this.diamInicial * 0.5;
      //Cuarto grupo de particulas. Angulo de 22.5°
    } else if (this.contador <= this.NPCuartaFila) {
      this.angPos = 67.5 + (this.contador - 14) * 90;
      //Quinto grupo de particulas. Angulo de 22.5°
    } else if (this.contador <= this.NPQuintaFila) {
      this.angPos = 0 + (this.contador - 14) * 90;
      this.diamPos = this.diamInicial * 1.8;
      this.diam = this.diamInicial * 0.35;
      //Sexto grupo de particulas. Angulo de 22.5°
    } else if (this.contador <= this.NPSextaFila) {
      this.angPos = 45 + (this.contador - 14) * 90;
    }
  }

  display() {
    fill(0);
    stroke(255, 20, 20);
    strokeWeight(6);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angPos);
    translate(this.diamPos, 0);
    circle(0, 0, this.diam);
    pop();
  }
}
