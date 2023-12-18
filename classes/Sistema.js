class Sistema {
  constructor() {
    this.posSistema = createVector(random(width), random(height));
    this.noiseTimeX = random(500, 700);
    this.noiseTimeY = random(100);
    this.tiempoDeVidaSistema = Math.ceil(random(500, 800));
    this.estaMuerto = false;

    //Agregar particulas
    this.p = new Particula();
  }

  update() {
    // Aumentar el tiempo
    this.noiseTimeX += 0.001;
    this.noiseTimeY += 0.0008;

    //Actualizar posicion
    this.posSistema.x = map(
      noise(this.noiseTimeX),
      0,
      1,
      0 - width * 0.1,
      width * 1.1
    );
    this.posSistema.y = map(noise(this.noiseTimeY), 0, 1, 0, height);

    //Sacar particulas muertas
    this.tiempoDeVidaSistema -= 1;
    if (this.tiempoDeVidaSistema <= 0) {
      this.estaMuerto = true;
    }
  }

  display() {
    push();
    translate(this.posSistema.x, this.posSistema.y);
    this.p.update();
    this.p.display();
    pop();
  }
}
