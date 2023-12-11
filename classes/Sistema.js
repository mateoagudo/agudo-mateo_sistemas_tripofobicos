class Sistema {
  constructor() {
    this.posSistema = createVector(random(width), random(height));
    this.noiseTimeX = random(200, 300);
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
      //   noFill();
      //   stroke(255, 50);
      //   strokeWeight(10);
      //   circle(this.posSistema.x, this.posSistema.y, 10);
    }
  }

  display() {
    push();
    translate(this.posSistema.x, this.posSistema.y);
    this.p.update();
    this.p.display();
    pop();

    // for (let i = 0; i < this.ps.length; i++) {
    //     this.ps[i].display();
    //     this.ps[i].update();
    //   }
  }
}
