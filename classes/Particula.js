class Particula {
  constructor() {
    this.pos = [];
    this.diam = [];
    this.diamInicial = random(50, 75);
    this.diamPrimeraFila = this.diamInicial;
    this.rotSegundaFila = 0;
    this.rotTerceraFila = 0;
    this.rotCuartaFila = 0;

    this.relleno = color(30, random(5, 25), 5);
    this.trazo = color(225, random(50, 200), 25);

    this.tiempoDeVidaInicial = this.diamInicial;
    this.tiempoDeVida = this.tiempoDeVidaInicial;
  }

  update() {
    this.tiempoDeVida -= 1;
    if (this.tiempoDeVida <= 0) {
    } else {
      this.diamPrimeraFila = map(
        this.tiempoDeVida,
        0,
        this.tiempoDeVidaInicial,
        this.diamInicial,
        0
      );
    }

    this.rotSegundaFila += 0.8;
    this.rotTerceraFila -= 0.5;
    this.rotCuartaFila += 0.3;

    this.pos = [];
    this.diam = [];

    //Primera Fila
    this.diamPrimeraFila;
    this.posPrimeraFila = createVector(0, 0);
    this.pos.push(this.posPrimeraFila);
    this.diam.push(this.diamPrimeraFila);

    //Segunda Fila
    for (let i = 0; i < 8; i++) {
      this.diamSegundaFila = this.diamPrimeraFila * 0.65;
      this.posSegundaFila = createVector(this.diamPrimeraFila * 1.05, 0);
      this.posSegundaFila.rotate((360 / 8) * i + this.rotSegundaFila);
      this.pos.push(this.posSegundaFila);
      this.diam.push(this.diamSegundaFila);
    }

    //Tercera Fila
    for (let i = 0; i < 16; i++) {
      this.diamTerceraFila = this.diamPrimeraFila * 0.5;
      this.posTerceraFila = createVector(this.diamPrimeraFila * 1.8, 0);
      this.posTerceraFila.rotate((360 / 16) * i + this.rotTerceraFila);
      this.pos.push(this.posTerceraFila);
      this.diam.push(this.diamTerceraFila);
    }

    // Cuarta Fila
    for (let i = 0; i < 24; i++) {
      this.diamCuartaFila = this.diamPrimeraFila * 0.3;
      this.posCuartaFila = createVector(this.diamPrimeraFila * 2.35, 0);
      this.posCuartaFila.rotate((360 / 24) * i + this.rotCuartaFila);
      this.pos.push(this.posCuartaFila);
      this.diam.push(this.diamCuartaFila);
    }
  }

  display() {
    for (let i = 0; i < this.pos.length; i++) {
      fill(this.relleno);
      stroke(this.trazo);
      strokeWeight(3);
      circle(this.pos[i].x, this.pos[i].y, this.diam[i]);
    }
  }
}
