export type BloqueInfo = {
  id: string;
  titulo: string;
  iconName: string;
  colorKey: "terracotta" | "mediterranean" | "amber";
  parrafos: string[];
};

export const bloquesInfo: BloqueInfo[] = [
  {
    id: "quien",
    titulo: "Quién está detrás",
    iconName: "heart",
    colorKey: "terracotta",
    parrafos: [
      "Sillera World es la app nacida de Silleraviajera, un proyecto creado para ayudar a personas con movilidad reducida a viajar con más información, más confianza y menos barreras. Detrás de este espacio hay experiencia real, búsqueda constante de recursos útiles y la intención de hacer que organizar un viaje sea más fácil, más claro y más accesible.",
    ],
  },
  {
    id: "privacidad",
    titulo: "Privacidad",
    iconName: "lock",
    colorKey: "mediterranean",
    parrafos: [
      "En SilleraViajera nos tomamos la privacidad en serio. Si en algún momento esta app recoge datos personales, se utilizarán únicamente para ofrecer un mejor servicio, mejorar la experiencia de uso o gestionar las funciones que lo requieran. No se compartirán datos personales con terceros, salvo en los casos necesarios para el funcionamiento del servicio o cuando exista obligación legal.",
      "Te recomendamos revisar esta información de vez en cuando, ya que podrá actualizarse si se incorporan nuevas funciones o cambios en la app.",
    ],
  },
  {
    id: "aviso",
    titulo: "Aviso importante",
    iconName: "alert-triangle",
    colorKey: "amber",
    parrafos: [
      "La información incluida en esta app está pensada para ayudarte y orientarte, pero algunas condiciones pueden cambiar con el tiempo. Horarios, servicios, accesibilidad, precios, asistencia, condiciones de transporte o características de hoteles y espacios pueden modificarse sin previo aviso por parte de terceros.",
      "Por eso, siempre recomendamos confirmar directamente con la empresa, alojamiento, transporte o lugar correspondiente antes de realizar tu viaje o tu reserva.",
    ],
  },
];
