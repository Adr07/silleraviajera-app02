export type Ambito = "internacional" | "nacional";

export type HotelDestino = {
  id: string;
  nombre: string;
  pais: string;
  imagen?: string | null;
  ambito: Ambito;
  verificado: boolean;
};

export type HotelEntry = {
  id: string;
  nombre: string;
  destinoId: string;
  verificado?: boolean;
  imagen: string | null;
  descripcion: string;
  estrellas: number;
  precio: string;
  accesibilidad: string[];
  videoId?: string | null;
  videoUrl?: string | null;
  bookingUrl?: string | null;
  infoEmailSubject: string;
  ambito: Ambito;
};

export type Destino = { id: string; nombre: string; pais: string; publicada?: boolean };

export type SeccionId =
  | "que-ver"
  | "museos"
  | "teatros"
  | "conciertos-festivales"
  | "donde-comer"
  | "hoteles"
  | "taxis-adaptados"
  | "aparcamiento-pmr"
  | "banos-accesibles"
  | "como-llegar";

export type LugarQueVer = {
  nombre: string;
  transporte?: string[];
  web?: string;
  detalle?: string;
  reservasEmail?: string;
  verificado?: boolean;
  tipo?: "ver" | "hacer";
};

export type ItemAccesible = {
  nombre: string;
  detalle?: string;
  web?: string;
  reservasEmail?: string;
  verificado?: boolean;
};

export type ItemAparcamiento = {
  texto: string;
  verificado?: boolean;
};

export type TaxiAdaptado = {
  empresa: string;
  web?: string;
  telefono?: string;
  verificado?: boolean;
  nota?: string;
};

export type AlojamientoGuia = {
  id: string;
  nombre: string;
  verificado?: boolean;
  descripcion: string;
  imagen?: string | null;
  estrellas: number;
  precio: string;
  accesibilidad: string[];
  videoId: string | null;
  videoUrl: string | null;
  reservarUrl: string;
  infoEmailSubject: string;
};

export type Tab = "activos" | "proximos";

export type Viaje = {
  id: number;
  destino: string;
  pais: string;
  fechaInicio: string;
  fechaFin: string;
  estado: Tab;
  imagen: string;
  notas: string;
  plazasTotales: number;
  plazasDisponibles: number;
  pasajerosEnCola: number;
  reservaUrl?: string;
};
