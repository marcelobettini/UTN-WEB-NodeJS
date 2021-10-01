const DIRECCIONES = {
  IZQUIERDA: "IZQUIERDA",
  DERECHA: "DERECHA",
  ARRIBA: "ARRIBA",
  ABAJO: "ABAJO",
};

function mover(direccion) {
  switch (direccion) {
    case DIRECCIONES.IZQUIERDA:
      return `mover hacia la ${direccion}`;

    case DIRECCIONES.DERECHA:
      return `mover hacia la ${direccion}`;
    case DIRECCIONES.ARRIBA:
      return `mover hacia ${direccion}`;
    case DIRECCIONES.ABAJO:
      return `mover hacia ${direccion}`;
    default:
      return `Qué dirección escribiste, gato?`;
  }
}

console.log(mover(DIRECCIONES.ABAJO));
console.log(mover("ABAJO")); //esto también funciona, aunque quizá no debería

// Con Symbol en vez de un string, nos aseguramos de que se llame a la función
// únicamente con el valor deseado

const DIRECTIONS = {
  LEFT: Symbol("LEFT"),
  RIGHT: Symbol("RIGHT"),
  UP: Symbol("UP"),
  DOWN: Symbol("DOWN"),
};

function move(direction) {
  switch (direction) {
    case DIRECTIONS.LEFT:
      return "move to the LEFT";
    case DIRECTIONS.RIGHT:
      return "move to the RIGHT";
    case DIRECTIONS.UP:
      return "move UP";
    case DIRECTIONS.DOWN:
      return "move DOWN";
    default:
      return `Invalid direction, you moron!`;
  }
}

console.log(move(DIRECTIONS.RIGHT));
console.log(move('RIGHT')) //INVALID DIRECTION, YOU MORON!

//Por qué devolvemos el string en vez de interpolar la variable? Porque 
// Symbol no se puede convertir a string
