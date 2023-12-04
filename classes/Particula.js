class Particula {
  constructor(_x, _y, _diamInicial, _color, _trazo) {
    this.pos = createVector(_x, _y);
    this.color = _color;
    this.trazo = _trazo;
    this.diamInicial = _diamInicial;
    this.diam = this.diamInicial;
    // this.diam = 0;
    this.angPos = 0;
    this.diamPos = 0;
    this.NPPrimeraFila = 5;
    this.NPSegundaFila = 9;
    this.NPTerceraFila = 13;
    this.NPCuartaFila = 18;
    this.NPQuintaFila = 23;
    this.NPSextaFila = 28;
    this.contador = 1;
    this.tiempoDeVidaInicial = this.diamInicial;
    this.tiempoDeVida = this.tiempoDeVidaInicial;
    this.noiseTimeMosca = random(100);
    this.mosca = random() < 0.01 ? true : false;
  }

  update() {
    // this.tiempoDeVida -= 1;
    // if (this.tiempoDeVida <= 0) {
    // } else {
    //   this.diam = map(
    //     this.tiempoDeVida,
    //     0,
    //     this.tiempoDeVidaInicial,
    //     this.diamInicial,
    //     0
    //   );
    // }

    //Aumentar el contador
    this.contador += 1;
    //Primer grupo de particulas. Angulo de 0°
    if (this.contador <= this.NPPrimeraFila) {
      this.angPos += 90;
      this.diamPos = this.diamInicial * 1.1;
      this.diam = this.diamInicial * 0.65;
      //Segundo grupo de particulas. Angulo de 45°
    } else if (this.contador <= this.NPSegundaFila) {
      this.angPos = 45 + (this.contador - 6) * 90;
      //   this.angPos = 45;
      //   this.angPos += 90;
      //Tercer grupo de particulas. Angulo de 22.5°
    } else if (this.contador <= this.NPTerceraFila) {
      this.angPos = 22.5 + (this.contador - 10) * 90;
      this.diamPos = this.diamInicial * 1.65;
      this.diam = this.diamInicial * 0.5;
      //Cuarto grupo de particulas. Angulo de 22.5°
    } else if (this.contador <= this.NPCuartaFila) {
      this.angPos = 67.5 + (this.contador - 14) * 90;
      //Quinto grupo de particulas. Angulo de 22.5°
    } else if (this.contador <= this.NPQuintaFila) {
      this.angPos = 0 + (this.contador - 14) * 90;
      this.diamPos = this.diamInicial * 1.85;
      this.diam = this.diamInicial * 0.35;
      //Sexto grupo de particulas. Angulo de 22.5°
    } else if (this.contador <= this.NPSextaFila) {
      this.angPos = 45 + (this.contador - 14) * 90;
    }

    if (this.mosca) {
      this.noiseTimeMosca += 0.001;
      this.pos.x = map(noise(this.noiseTimeMosca), 0, 1, 0, width);
      this.pos.y = map(noise(this.noiseTimeMosca + 10), 0, 1, 0, height);
      // this.m = new Mosca(this.pos.x, this.pos.y, this.diamInicial);
      // this.m.update();
      // this.m.display();
    }
  }

  display() {
    fill(this.color);
    stroke(this.trazo);
    strokeWeight(6);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angPos);
    translate(this.diamPos, 0);
    circle(0, 0, this.diam);
    pop();
  }
}
