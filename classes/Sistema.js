class Sistema {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.diamInicial = random(50, 100);
    this.diam = 0;
    this.tiempoDeVidaInicial = this.diamInicial;
    this.tiempoDeVida = this.tiempoDeVidaInicial;
    // this.diamInicial = random(50, 100);
    // this.angPos = 0;
    // this.NPPrimeraFila = 5;
    // this.NPSegundaFila = 9;
    // this.NPTerceraFila = 13;
    // this.NPCuartaFila = 18;
    // this.NPQuintaFila = 23;
    // this.NPSextaFila = 28;
    // this.diamPos = 0;
    // this.contador = 1;
    // this.noiseTime = random(0, 100);
    this.ps = [];
  }

  update() {
    this.tiempoDeVida -= 1;
    if (this.tiempoDeVida <= 0) {
    } else {
      this.diam = map(
        this.tiempoDeVida,
        0,
        this.tiempoDeVidaInicial,
        this.diamInicial,
        0
      );
    }
    // // 0. Aumentar el contador
    // this.contador += 1;

    // //1. Actualizar posicion

    // //Primer grupo de particulas. Angulo de 0°
    // if (this.contador <= this.NPPrimeraFila) {
    //   this.angPos += 90;
    //   this.diamPos = this.diamInicial * 1.05;
    //   this.diam = this.diamInicial * 0.65;

    //   //Segundo grupo de particulas. Angulo de 45°
    // } else if (this.contador <= this.NPSegundaFila) {
    //   this.angPos = 45 + (this.contador - 6) * 90;
    //   //   this.angPos = 45;
    //   //   this.angPos += 90;

    //   //Tercer grupo de particulas. Angulo de 22.5°
    // } else if (this.contador <= this.NPTerceraFila) {
    //   this.angPos = 22.5 + (this.contador - 10) * 90;
    //   this.diamPos = this.diamInicial * 1.6;
    //   this.diam = this.diamInicial * 0.5;

    //   //Cuarto grupo de particulas. Angulo de 22.5°
    // } else if (this.contador <= this.NPCuartaFila) {
    //   this.angPos = 67.5 + (this.contador - 14) * 90;

    //   //Quinto grupo de particulas. Angulo de 22.5°
    // } else if (this.contador <= this.NPQuintaFila) {
    //   this.angPos = 0 + (this.contador - 14) * 90;
    //   this.diamPos = this.diamInicial * 1.8;
    //   this.diam = this.diamInicial * 0.35;

    //   //Sexto grupo de particulas. Angulo de 22.5°
    // } else if (this.contador <= this.NPSextaFila) {
    //   this.angPos = 45 + (this.contador - 14) * 90;
    // }

    // 2. Agregar particulas
    this.p = new Particula(this.pos.x, this.pos.y, this.diam, this.diamInicial);
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
