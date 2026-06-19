import type { Destino, Ambito } from "./types";

export const destinosInternacionales: Destino[] = [
  { id: "amsterdam", nombre: "Ámsterdam", pais: "Países Bajos", publicada: true },
  { id: "berlin", nombre: "Berlín", pais: "Alemania", publicada: true },
  { id: "brujas", nombre: "Brujas", pais: "Bélgica", publicada: true },
  { id: "edimburgo", nombre: "Edimburgo", pais: "Reino Unido", publicada: true },
  { id: "gante", nombre: "Gante", pais: "Bélgica", publicada: true },
  { id: "londres", nombre: "Londres", pais: "Reino Unido", publicada: true },
  { id: "munich", nombre: "Múnich", pais: "Alemania", publicada: true },
  { id: "oslo", nombre: "Oslo", pais: "Noruega", publicada: true },
  { id: "roma", nombre: "Roma", pais: "Italia", publicada: true },
  { id: "tromso", nombre: "Tromsø", pais: "Noruega", publicada: true },
];

export const destinosNacionales: Destino[] = [
  { id: "madrid", nombre: "Madrid", pais: "España", publicada: true },
  { id: "barcelona", nombre: "Barcelona", pais: "España", publicada: true },
  { id: "valencia", nombre: "Valencia", pais: "España", publicada: true },
  { id: "valladolid", nombre: "Valladolid", pais: "España", publicada: true },
  { id: "vitoria", nombre: "Vitoria", pais: "España", publicada: true },
  { id: "pamplona", nombre: "Pamplona", pais: "España", publicada: true },
  { id: "cordoba", nombre: "Córdoba", pais: "España", publicada: true },
  { id: "girona", nombre: "Girona", pais: "España", publicada: true },
];

export function getDestinos(ambito: Ambito): Destino[] {
  return ambito === "internacional" ? destinosInternacionales : destinosNacionales;
}

export function getDestino(ambito: Ambito, id: string): Destino | undefined {
  return getDestinos(ambito).find((d) => d.id === id);
}
