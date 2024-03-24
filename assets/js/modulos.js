class Animal {
  constructor(name, edad, img, comentarios, sonido) {
    this._name = name;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }
  get name() {
    return this._name;
  }
  get edad() {
    return this._edad;
  }
  get img() {
    return this._img;
  }
  get comentarios() {
    return this._comentarios;
  }
  set comentarios(comentarios) {
    this._comentarios = comentarios;
  }
  get sonido() {
    return this._sonido;
  }
  set edad(edad) {
    this._edad = edad;
  }
}

class Leon extends Animal {
  constructor(name, edad, img, comentarios, sonido) {
    super(name, edad, img, comentarios, sonido);
  }
  rugir = () => this.sonido;
}

class Lobo extends Animal {
  constructor(name, edad, img, comentarios, sonido) {
    super(name, edad, img, comentarios, sonido);
  }
   aullar = () => this.sonido;
}

class Oso extends Animal {
  constructor(name, edad, img, comentarios, sonido) {
    super(name, edad, img, comentarios, sonido);
  }
  grunir = () => this.sonido;
}

class Serpiente extends Animal {
  constructor(name, edad, img, comentarios, sonido) {
    super(name, edad, img, comentarios, sonido);
  }
  sisear = () => this.sonido;
}

class Aguila extends Animal {
  constructor(name, edad, img, comentarios, sonido) {
    super(name, edad, img, comentarios, sonido);
  }
  chillar = () => this.sonido;
}


export { Aguila, Serpiente, Oso, Lobo, Leon };
