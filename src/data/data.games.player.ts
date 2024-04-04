interface Jugador {
  id: string;
  nombre: string;
  correo: string;
  password: string;
  telefono: string;
  juegos: Juego[];
}

interface Juego {
  id: string;
  nombre: string;
  descripcion: string;
  monto: number;
  cantidadMaxJugadores: number;
  jugadoresDisponibles: JugadorDisponible[];
}

interface JugadorDisponible {
  jugadorId: string;
  rol: string | null;
  numero: number | null;
}