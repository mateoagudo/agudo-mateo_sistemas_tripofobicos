let ss = [];
let sistemamoscas = [];
let sonidos = [];

function preload() {
  soundFormats("wav", "mp3", "ogg");
  sonidoMosco = loadSound("sonidos/0");
  sonidoMuerteDeMosco = loadSound("sonidos/1");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(presionado);
  angleMode(DEGREES);
  for (let i = 0; i < 2; i++) {
    let p = new Sistema();
    ss.push(p);
  }
}

function draw() {
  // background(200, 175, 150, 70);
  background(0, 70);

  for (let i = 0; i < ss.length; i++) {
    if (ss[i].estaMuerto) {
      ss.splice(i, 1);
      print("esta muerto");
      let p = new Sistema();
      ss.push(p);
    }
  }

  for (let i = 0; i < ss.length; i++) {
    ss[i].update();
    ss[i].display();
  }

  for (let i = 0; i < sistemamoscas.length; i++) {
    if (sistemamoscas[i].moscaMuerta) {
      sistemamoscas.splice(i, 1);

      sonidoMuerteDeMosco.play();
      sonidos[0].stop();
    } else {
      sistemamoscas[i].update();
      sistemamoscas[i].display();
      // print("funciona");
    }
  }
}

function presionado() {
  let indiceSistema = Math.floor(random(ss.length));
  let indicePosicion = Math.floor(random(ss[indiceSistema].p.pos.length));
  let posicionParticula = ss[indiceSistema].p.pos[indicePosicion];
  let posicionSistema = ss[indiceSistema].posSistema;
  let posicionMosca = posicionParticula.add(posicionSistema);

  let x = posicionMosca.x;
  let y = posicionMosca.y;

  let indiceTamano = Math.floor(random(ss[indiceSistema].p.diam.length));
  let tamanoParticula = ss[indiceSistema].p.diam[indicePosicion];

  let d = new Mosca(x, y, tamanoParticula);
  sistemamoscas.push(d);
  sonidoMosco.play();
  sonidos.push(sonidoMosco);

  // for (let i = 0; i < sistemamoscas.length; i++) {
  //   if (sistemamoscas[i].moscaMuerta) {
  //     sonidosMosco.stop();
  //   } else {
  //     sonidoMosco.play();
  //   }
  // }
}
