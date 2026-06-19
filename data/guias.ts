import type { ImageSourcePropType } from "react-native";
import type {
  SeccionId,
  LugarQueVer,
  ItemAccesible,
  ItemAparcamiento,
  TaxiAdaptado,
  AlojamientoGuia,
} from "./types";

export const imagenPorSeccion: Record<SeccionId, ImageSourcePropType> = {
  "que-ver": require("@/assets/images/secciones/que-ver.jpg"),
  museos: require("@/assets/images/secciones/museos.jpg"),
  teatros: require("@/assets/images/secciones/teatros.jpg"),
  "conciertos-festivales": require("@/assets/images/secciones/teatros.jpg"),
  "donde-comer": require("@/assets/images/secciones/donde-comer.jpg"),
  hoteles: require("@/assets/images/secciones/hoteles.jpg"),
  "taxis-adaptados": require("@/assets/images/secciones/taxis-adaptados.webp"),
  "aparcamiento-pmr": require("@/assets/images/secciones/aparcamiento-pmr.jpg"),
  "banos-accesibles": require("@/assets/images/secciones/banos-accesibles.jpg"),
  "como-llegar": require("@/assets/images/secciones/como-llegar.jpg"),
};

export const seccionesIds: SeccionId[] = [
  "que-ver",
  "museos",
  "teatros",
  "conciertos-festivales",
  "donde-comer",
  "hoteles",
  "taxis-adaptados",
  "aparcamiento-pmr",
  "banos-accesibles",
  "como-llegar",
];

export const seccionLabel: Record<SeccionId, string> = {
  "que-ver": "Qué ver / Qué hacer",
  "museos": "Museos accesibles",
  "teatros": "Teatros",
  "conciertos-festivales": "Conciertos y festivales",
  "donde-comer": "Dónde comer",
  "hoteles": "Hoteles",
  "taxis-adaptados": "Taxis adaptados",
  "aparcamiento-pmr": "Aparcamiento PMR público",
  "banos-accesibles": "Baños accesibles",
  "como-llegar": "Cómo llegar",
};

export const mapasPorDestinoSeccion: Record<string, Partial<Record<SeccionId, string>>> = {
  madrid: {
    "que-ver": "https://www.google.com/maps/d/edit?mid=1GbUYnWEqvaokaOkDcCPuWqLfpio_XWA&usp=sharing",
    "donde-comer": "https://www.google.com/maps/d/edit?mid=153HgSp44RypVVuz_W6YYmg10Yo8IsjY&usp=sharing",
    "teatros": "https://www.google.com/maps/d/edit?mid=1an4GGgdv-LMPlBwJ359KyqhN5UvKH0w&usp=sharing",
  },
  barcelona: {
    "que-ver": "https://www.google.com/maps/d/edit?mid=1semwZwf6bOuNM5DMqQ8OFZfegtWkg_4&usp=sharing",
  },
};

export const queVerPorDestino: Record<string, LugarQueVer[]> = {
  madrid: [
    { nombre: "Puerta del Sol" },
    { nombre: "Plaza Mayor" },
    { nombre: "Gran Vía" },
    { nombre: "Palacio Real por fuera" },
    { nombre: "Catedral de la Almudena por fuera" },
    { nombre: "Plaza de Oriente" },
    { nombre: "Templo de Debod" },
    { nombre: "Parque del Retiro" },
    { nombre: "Fuente de Cibeles" },
    { nombre: "Paseo del Prado" },
  ],
  barcelona: [
    { nombre: "Visitar la Sagrada Familia" },
    { nombre: "Visitar el Hospital de Sant Pau" },
    { nombre: "Visitar Casa Batlló" },
    { nombre: "Visitar Casa Vicens" },
    { nombre: "Pasear por Las Ramblas de Barcelona" },
    { nombre: "Visitar el Liceu" },
    { nombre: "Visitar el Palau de la Música" },
    { nombre: "Recorrer el Barrio Gótico" },
    { nombre: "Visitar Montjuïc" },
    { nombre: "Visitar el Bosc de les Fades" },
    {
      nombre: "Rutas accesibles en handbike con Wheeling Barcelona",
      tipo: "hacer",
      web: "https://www.instagram.com/wheelingbarcelona",
      detalle: "Reservas a través de info@silleraviajera.com",
      reservasEmail: "info@silleraviajera.com",
    },
    { nombre: "Visitar el Museo de Cera", tipo: "hacer" },
    { nombre: "Visitar el Museo de las Ciencias", tipo: "hacer" },
    { nombre: "Visitar el MACBA", tipo: "hacer" },
  ],
  valencia: [],
  pamplona: [],
  vitoria: [],
  valladolid: [
    { nombre: "Visitar el Parque de Campo Grande" },
    { nombre: "Visitar la Catedral" },
    { nombre: "Visitar la Plaza Mayor" },
    { nombre: "Visitar la Universidad", verificado: false },
    { nombre: "Visitar el Museo Casa de Cervantes", verificado: false },
    { nombre: "Paseo en barco accesible por el Pisuerga", tipo: "hacer", web: "https://leyendadelpisuerga.com/" },
  ],
  cordoba: [
    { nombre: "Recorrer las calles del centro y del casco antiguo" },
    { nombre: "Visitar la Mezquita", web: "https://entradamezquitacordoba.org/ticket-mezquita-catedral/" },
    { nombre: "Visitar los Patios de Córdoba" },
    { nombre: "Visitar el Alcázar", web: "https://alcazarcordoba.com/en/" },
    { nombre: "Visitar la Caballeriza", web: "https://www.booking.com/attractions/es/prxpf7vuwdrh-equestrian-show-royal-stables-of-cordoba.es.html?aid=304142" },
    { nombre: "Visitar el Puente Romano" },
    { nombre: "Córdoba en 2 horas: free tour por lo mejor de la ciudad", web: "https://www.guruwalk.com/es/walks/63032-cordoba-en-2-horas-free-tour-por-lo-mejor-de-la-ciudad" },
  ],
  amsterdam: [],
  brujas: [],
  edimburgo: [],
  gante: [],
  berlin: [],
  munich: [],
  oslo: [],
  tromso: [
    { nombre: "En búsqueda de ballenas en barco", tipo: "hacer" },
    { nombre: "En búsqueda de auroras: la magia de la noche polar", tipo: "hacer" },
    { nombre: "Ruta por los fiordos en furgoneta", tipo: "hacer" },
    { nombre: "Ruta por Tromsø y puntos de interés en furgoneta", tipo: "hacer", verificado: false },
    { nombre: "Visita a tribu Sami y sus renos / paseo en reno", tipo: "hacer", verificado: false },
  ],
  roma: [],
  londres: [],
};

export const teatrosAccesiblesPorDestino: Record<string, ItemAccesible[]> = {
  madrid: [
    { nombre: "Teatro Lope de Vega", detalle: "Calle Gran Vía, 57 — 28013 Madrid" },
  ],
  barcelona: [
    { nombre: "Gran Teatre del Liceu", detalle: "La Rambla, 51–59 — 08002 Barcelona" },
    { nombre: "Palau de la Música Catalana", detalle: "C/ Palau de la Música, 4–6 — 08003 Barcelona" },
    { nombre: "Teatre Borràs", detalle: "Plaça d'Urquinaona, 9 — 08010 Barcelona", verificado: false },
    { nombre: "Teatre Aquitània", detalle: "Avinguda de Sarrià, 33 — 08029 Barcelona", verificado: false },
  ],
};

export const conciertosFestivalesPorDestino: Record<string, ItemAccesible[]> = {
  madrid: [],
  barcelona: [],
  valencia: [],
  valladolid: [],
  vitoria: [],
  pamplona: [],
  cordoba: [],
  girona: [
    {
      nombre: "Festival de la Porta Ferrada",
      detalle: "Sant Feliu de Guíxols (Costa Brava) — verano. Entradas en la web oficial.",
      web: "https://www.portaferrada.cat/es/",
    },
    {
      nombre: "Festival Jardins de Cap Roig",
      detalle: "Jardí Botànic de Cap Roig, Calella de Palafrugell — verano. Entradas por email.",
      web: "https://caproigfestival.com",
      reservasEmail: "ticketing@clippersmusic.org",
    },
    {
      nombre: "Festival Sons del Món",
      detalle: "Ciutadella de Roses — verano. Entradas en la web oficial.",
      web: "https://www.sonsdelmon.cat",
    },
  ],
};

export const museosAccesiblesPorDestino: Record<string, ItemAccesible[]> = {
  madrid: [
    { nombre: "Museo Reina Sofía", verificado: false },
    { nombre: "Museo Nacional del Prado", verificado: false },
    { nombre: "Museo Sorolla", verificado: false },
    { nombre: "Museo Thyssen", verificado: false },
    { nombre: "CaixaForum Madrid", verificado: false },
  ],
  barcelona: [
    { nombre: "Museo Marítimo de Barcelona" },
    { nombre: "Museo Nacional de Arte de Cataluña", verificado: false },
    { nombre: "Museo de Arte Contemporáneo", verificado: false },
    { nombre: "Museo de Historia de Barcelona", verificado: false },
    { nombre: "Museo de las Ciencias CosmoCaixa", verificado: false },
    { nombre: "CaixaForum Barcelona", verificado: false },
    { nombre: "Museo Moco Barcelona", verificado: false },
  ],
  valencia: [
    { nombre: "Museo de las Ciencias Príncipe Felipe" },
    { nombre: "CaixaForum Valencia" },
    { nombre: "Museo de Historia de Valencia", verificado: false },
    { nombre: "Museo Fallero de Valencia", verificado: false },
    { nombre: "Museo Arqueológico de la Almoina", verificado: false },
    { nombre: "Museo del Arroz", verificado: false },
  ],
  oslo: [
    { nombre: "Museo Munch" },
    { nombre: "Museo del Pueblo Noruego" },
    { nombre: "Centro Nobel de la Paz" },
    { nombre: "Museo de la Ciudad de Oslo", verificado: false },
    { nombre: "Museo del Fram", verificado: false },
    { nombre: "Museo Kon-Tiki", verificado: false },
    { nombre: "Museo de Barcos Vikingos", verificado: false },
  ],
};

export const restaurantesAccesiblesPorDestino: Record<string, ItemAccesible[]> = {
  valladolid: [
    { nombre: "Malquerida", detalle: "Calle Alarcón, 5 — 47001 Valladolid", verificado: false },
    { nombre: "La Parrilla de San Lorenzo", detalle: "Calle Pedro Niño, 1 — 47001 Valladolid", verificado: false },
  ],
  barcelona: [
    { nombre: "Thai Gardens Barcelona", detalle: "Carrer de la Diputació, 273 — 08007 Barcelona" },
    { nombre: "Leña Barcelona", detalle: "Plaça de Pius XII, 4 (Grand Hyatt) — 08028 Barcelona" },
    { nombre: "La Tortillera (REBO)", detalle: "Carrer Pablo Picasso, 73 — 08830 Sant Boi de Llobregat" },
    { nombre: "Martin's", detalle: "Av. del Parc, 12 — 08940 Cornellà de Llobregat" },
    { nombre: "El Tribut", detalle: "Moll de Gregal, 20 — Port Olímpic, 08005 Barcelona", verificado: false },
    { nombre: "Restaurante El Tibón", detalle: "Rambla de Josep Anselm Clavé, 3 — 08940 Cornellà de Llobregat", verificado: false },
  ],
  cordoba: [
    { nombre: "Vértigo el restaurante", detalle: "C/ Doña Berenguela esq. Anastasio Relaño — 14006 Córdoba" },
    { nombre: "Restaurante El Rincón de Carmen", detalle: "C/ Romero, 4 — 14003 Córdoba", verificado: false },
    { nombre: "Terra Olea", detalle: "Calle Rigoberta Menchú, 2 — 14011 Córdoba", verificado: false },
  ],
  tromso: [
    { nombre: "Restaurant Skirri", detalle: "Kystens Mathus, Stortorget 1 — 9008 Tromsø", verificado: true },
    { nombre: "Backstube Tromsø", detalle: "Storgata 70 — 9008 Tromsø", verificado: true },
    { nombre: "Pastafabrikken", detalle: "Sjøgata 17A — 9007 Tromsø", verificado: true },
    { nombre: "Nyt Bar & Bistro", detalle: "Storgata 71–73 — 9008 Tromsø", verificado: true },
    { nombre: "Cous Restaurant & Bar", detalle: "Storgata 132 — 9008 Tromsø", verificado: false },
    { nombre: "Sumo Vervet", detalle: "Nordøstpassasjen 43 — 9008 Tromsø", verificado: false },
  ],
  oslo: [
    { nombre: "Oslo Street Food", detalle: "Torggata 16 — 0181 Oslo", verificado: true },
    { nombre: "Barcode Street Food", detalle: "Dronning Eufemias gate 14 — 0191 Oslo", verificado: true },
    { nombre: "SALT Art & Music", detalle: "Langkaia 1 — 0150 Oslo", verificado: true },
  ],
};

export const banosAccesiblesPorDestino: Record<string, ItemAccesible[]> = {
  tromso: [
    {
      nombre: "Aseo público adaptado en Stortorget",
      detalle:
        "En el centro, en la plaza Stortorget, enfrente de la pizzería Peppes Pizza (Stortorget 2) y junto al kiosco Raketten (el restaurante más pequeño del mundo), muy cerca del Restaurant Skirri (Kystens Mathus, Stortorget 1).",
      verificado: true,
    },
    {
      nombre: "Centro Comercial Alti",
      detalle: "Localizado en la planta 3. Acceso de pago con tarjeta, aproximadamente 0,75 €.",
    },
  ],
};

export const aparcamientoPmrPorDestino: Record<string, ItemAparcamiento[]> = {
  cordoba: [
    {
      texto:
        "Aparcamiento PMR público recomendado en Córdoba: Ronda de Isasa, junto al Centro de Recepción de Visitantes. Este punto es la referencia más cercana para visitar la Mezquita-Catedral, el Puente Romano, el Alcázar de los Reyes Cristianos y las Caballerizas Reales.",
    },
  ],
  tromso: [
    {
      texto:
        "En Tromsø, las plazas públicas reservadas para PMR (tarjeta HC) las gestiona Tromsø Parkering para el ayuntamiento. Según Tromsø Parkering, hay plazas públicas reservadas para PMR en más de 40 puntos de la ciudad.",
    },
    {
      texto:
        "Con la tarjeta HC válida aparcas gratis en las plazas públicas de pago y en las plazas reservadas para PMR, y además puedes superar el tiempo máximo de estacionamiento, salvo que la señal indique un tiempo máximo específico para PMR. En las plazas situadas fuera de la vía pública (señal blanca con P negra) puede haber obligación de pago: mira siempre el cartel informativo de la plaza.",
    },
    {
      texto:
        "Importante: la tarjeta HC NO es válida en aparcamientos ni parkings privados (por ejemplo, los de operadores como APCOA u Onepark). En esos sitios normalmente hay que pagar y se aplican sus propias normas.",
    },
    {
      texto:
        "Selección de plazas públicas reservadas para PMR en el centro y cerca de lugares de interés (datos del mapa oficial de Tromsø Parkering):",
    },
    {
      texto:
        "Polaria: plaza reservada para PMR junto al acuario y centro de experiencias Polaria, en el sur del centro.",
    },
    {
      texto:
        "Tromsdalen Kirke / Ishavskatedralen: plaza reservada para PMR junto a la Catedral del Ártico (Ishavskatedralen), al otro lado del puente.",
    },
    {
      texto:
        "Kirkegata, junto al parque de la Catedral (Domkirkeparken): plaza reservada para PMR junto a la Catedral de Tromsø (Domkirke).",
    },
    {
      texto:
        "Storgata: plazas reservadas para PMR en la calle principal del centro (a la altura de Eurospar y de Fargerike).",
    },
    {
      texto:
        "Grønnegata: plazas reservadas para PMR junto a la biblioteca (biblioteket) y junto al Ayuntamiento (Rådhuset), en pleno centro.",
    },
    {
      texto:
        "Roald Amundsens plass: plaza reservada para PMR en esta plaza céntrica.",
    },
    {
      texto:
        "Strandgata, junto al centro comercial Nerstranda: plaza reservada para PMR.",
    },
    {
      texto:
        "Kaigata, junto al hotel Amalie: plaza reservada para PMR, cerca del puerto.",
    },
    {
      texto:
        "Sjøgata: plazas reservadas para PMR (a la altura de Austadbygget y de Torghuken), cerca del puerto.",
    },
    {
      texto:
        "Telegrafbukta: plaza reservada para PMR en el parque y la playa de Telegrafbukta, en la zona sur de la isla.",
    },
    {
      texto:
        "Fredrik Langes gate 1: plaza reservada para PMR en el centro, pero de pago las 24 horas (señal 'mot avgift').",
    },
    {
      texto:
        "Esta es una selección del centro y de lugares de interés. Para el listado completo (más de 50 plazas) y la ubicación exacta de cada una, consulta el mapa oficial en tromso-parkering.no (filtro 'Forflytningshemmede').",
    },
  ],
};

export const taxisAdaptadosPorDestino: Record<string, TaxiAdaptado[]> = {
  barcelona: [
    {
      empresa: "Taxi Amic",
      telefono: "934208080",
      web: "https://www.taxismic.cat",
      nota: "Reservar mínimo 24 horas antes.",
      verificado: true,
    },
  ],
  madrid: [
    {
      empresa: "Tele Taxi Madrid",
      telefono: "913712131",
      web: "https://www.tele-taxi.es",
      nota: "Emisora oficial homologada por el Ayuntamiento de Madrid. Indicar al llamar que se necesita un Eurotaxi (vehículo adaptado).",
      verificado: false,
    },
  ],
  valencia: [
    {
      empresa: "Radio Taxi Valencia",
      telefono: "963703333",
      web: "https://radiotaxivalencia.es",
      nota: "Central principal de la ciudad. Indicar explícitamente que se necesita un vehículo adaptado con rampa.",
      verificado: true,
    },
  ],
  valladolid: [
    {
      empresa: "Radio Taxi Valladolid",
      telefono: "983291411",
      web: "https://taxivalladolid.com",
      nota: "Flota mayoritaria oficial centralizada. El Ayuntamiento de Valladolid subvenciona el transporte adaptado mediante el programa Bonotaxi.",
      verificado: false,
    },
  ],
  vitoria: [
    {
      empresa: "Radio Taxi Gasteiz",
      telefono: "945273500",
      web: "https://rtaxigasteiz.com",
      nota: "Central unificada de Eurotaxi en Vitoria-Gasteiz. SMS para personas sordas: 660 034 833.",
      verificado: false,
    },
  ],
  pamplona: [
    {
      empresa: "Tele Taxi San Fermín",
      telefono: "948232300",
      web: "https://taxipamplona.com",
      nota: "Central oficial de la Mancomunidad de la Comarca de Pamplona (MCP). Teléfono alternativo: 948 351 335.",
      verificado: true,
    },
  ],
  cordoba: [
    {
      empresa: "Auttacor – Radio Taxi Córdoba",
      telefono: "957764444",
      web: "https://www.radiotaxicordoba.com",
      nota: "Servicio público de Eurotaxi en Córdoba. Alternativa: Pidetaxi Córdoba 957 45 00 00. SMS para personas sordas: 607 208 817.",
      verificado: false,
    },
  ],
  londres: [
    {
      empresa: "Black Cabs (Transport for London)",
      web: "https://tfl.gov.uk",
      nota: "El 100% de los Black Cabs oficiales de Londres son obligatoriamente accesibles para silla de ruedas y llevan rampa integrada. Se pueden parar directamente en la calle o reservar mediante la app oficial regulada por Transport for London.",
      verificado: true,
    },
    {
      empresa: "Wheelchair Taxis UK",
      web: "https://wheelchair-taxis.co.uk",
      nota: "Servicio unificado de reserva de taxis adaptados en Londres y resto del Reino Unido.",
      verificado: false,
    },
  ],
  edimburgo: [
    {
      empresa: "Central Taxis Edinburgh",
      web: "https://taxis-edinburgh.co.uk",
      nota: "Las licencias oficiales de taxis urbanos en Edimburgo exigen vehículos adaptados. Central Taxis es la flota adaptada más grande, homologada y recomendada por el Ayuntamiento de Edimburgo.",
      verificado: false,
    },
    {
      empresa: "Handicabs (HCL Transport)",
      web: "https://hcltransport.org.uk",
      nota: "Servicio social puerta a puerta gestionado por la organización oficial Handicabs Lothian para personas con movilidad reducida.",
      verificado: false,
    },
  ],
  berlin: [
    {
      empresa: "Eurotaxi Berlín (vía berlin.de)",
      web: "https://www.berlin.de",
      nota: "El Ayuntamiento y el Departamento de Servicios Sociales de Berlín no disponen de flota pública de taxis adaptados, pero centralizan y avalan oficialmente las licencias de Eurotaxi a través de la app de movilidad aprobada por berlin.de.",
      verificado: false,
    },
    {
      empresa: "Prima Fahrten",
      web: "https://primafahrten.de",
      nota: "Empresa de transporte adaptado homologada por Berlín para reservas telefónicas fuera de la app oficial.",
      verificado: false,
    },
  ],
};

export const opcionesTransporte: { label: string }[] = [
  { label: "Tren" },
  { label: "Metro" },
  { label: "Tranvía" },
  { label: "Autobús" },
];

export const alojamientosPorDestino: Record<string, AlojamientoGuia[]> = {
  amsterdam: [
    {
      id: "yotel-amsterdam",
      nombre: "YOTEL Amsterdam",
      descripcion:
        "Hotel moderno y accesible en el corazón de Ámsterdam, a pocos minutos de la estación central y los canales. Habitaciones adaptadas con espacio amplio para silla de ruedas, entrada sin escalones y personal formado en atención accesible.",
      imagen: null,
      estrellas: 4,
      precio: "€€",
      accesibilidad: [
        "Entrada accesible sin escalones",
        "Ascensor a todas las plantas",
        "Habitación adaptada disponible",
        "Baño adaptado con barras de apoyo",
        "Ducha a ras de suelo",
      ],
      videoId: "kiF9TGpmgkU",
      videoUrl: "https://youtu.be/kiF9TGpmgkU",
      reservarUrl: "https://www.silleraviajera.com",
      infoEmailSubject: "Consulta hotel Ámsterdam – Silleraviajera",
    },
  ],
  brujas: [
    {
      id: "ibis-brugge",
      nombre: "ibis budget Brugge Centrum Station",
      descripcion:
        "Hotel accesible y céntrico junto a la estación de tren de Brujas. Habitaciones adaptadas, entrada sin barreras y fácil acceso a todos los servicios de la ciudad.",
      imagen: null,
      estrellas: 2,
      precio: "€",
      accesibilidad: ["Entrada accesible", "Ascensor", "Habitación adaptada"],
      videoId: "mf_oRFxvoyI",
      videoUrl: "https://youtube.com/shorts/mf_oRFxvoyI",
      reservarUrl: "https://www.booking.com/hotel/be/etap-brugge-centrum-station.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Brujas – Silleraviajera",
    },
  ],
  oslo: [
    {
      id: "comfort-xpress-oslo",
      nombre: "Comfort Hotel Xpress Youngstorget",
      descripcion: "Hotel céntrico en Oslo, junto a Youngstorget.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "uvZHCLpElsk",
      videoUrl: "https://youtube.com/shorts/uvZHCLpElsk",
      reservarUrl: "https://www.booking.com/hotel/no/comfort-xpress.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Comfort Hotel Xpress Youngstorget – Silleraviajera",
    },
  ],
  berlin: [
    {
      id: "hotel-lutzow-berlin",
      nombre: "Hotel Lützow",
      descripcion: "Hotel en Berlín.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "wbXkwJUjOuk",
      videoUrl: "https://youtu.be/wbXkwJUjOuk",
      reservarUrl: "https://www.booking.com/hotel/de/la1-4tzow.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Hotel Lützow – Silleraviajera",
    },
  ],
  pamplona: [
    {
      id: "zenit-pamplona",
      nombre: "Zenit Pamplona",
      descripcion: "Hotel Zenit en Pamplona.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "0i-BpS5-vDM",
      videoUrl: "https://youtube.com/shorts/0i-BpS5-vDM",
      reservarUrl: "https://www.booking.com/hotel/es/zenit-pamplona.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Zenit Pamplona – Silleraviajera",
    },
  ],
  valladolid: [
    {
      id: "enara-valladolid",
      nombre: "Hotel Enara",
      descripcion: "Hotel céntrico en Valladolid con habitación adaptada.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "Lp6UKiTJN0w",
      videoUrl: "https://youtube.com/shorts/Lp6UKiTJN0w",
      reservarUrl: "https://www.booking.com/hotel/es/enara.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Enara Valladolid – Silleraviajera",
    },
  ],
  cordoba: [
    {
      id: "patio-san-andres-cordoba",
      nombre: "Patio San Andrés",
      descripcion: "Apartamento accesible en Córdoba.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "vDOdgOeNRCU",
      videoUrl: "https://youtu.be/vDOdgOeNRCU",
      reservarUrl: "https://www.booking.com/hotel/es/patio-san-andres.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Patio San Andrés – Silleraviajera",
    },
  ],
  vitoria: [
    {
      id: "nh-canciller-ayala-vitoria",
      nombre: "NH Canciller Ayala Vitoria",
      descripcion: "Hotel NH en Vitoria-Gasteiz.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "-Y9tr45PWHE",
      videoUrl: "https://youtube.com/shorts/-Y9tr45PWHE",
      reservarUrl: "https://www.booking.com/hotel/es/nh-canciller-ayala-vitoria.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel NH Canciller Ayala Vitoria – Silleraviajera",
    },
    {
      id: "boulevard-vitoria-gasteiz",
      nombre: "Hotel Boulevard Vitoria-Gasteiz",
      descripcion: "Hotel Boulevard en Vitoria-Gasteiz.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "u_Nd4tkyOJM",
      videoUrl: "https://youtu.be/u_Nd4tkyOJM",
      reservarUrl: "https://www.booking.com/hotel/es/boulevard-vitoria-gasteiz.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Boulevard Vitoria-Gasteiz – Silleraviajera",
    },
  ],
  tromso: [
    {
      id: "moxy-tromso",
      nombre: "Moxy Tromso",
      descripcion: "Hotel en Tromsø.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "OZryTmb20Pg",
      videoUrl: "https://youtu.be/OZryTmb20Pg",
      reservarUrl: "https://www.booking.com/hotel/no/moxy-tromso.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Moxy Tromso – Silleraviajera",
    },
    {
      id: "comfort-xpress-tromso",
      nombre: "Comfort Hotel Xpress Tromsø",
      verificado: false,
      descripcion: "Hotel en Tromsø.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: null,
      videoUrl: null,
      reservarUrl: "https://www.booking.com/hotel/no/comfort-xpress-tromso.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Comfort Hotel Xpress Tromsø – Silleraviajera",
    },
    {
      id: "quality-saga-tromso",
      nombre: "Quality Hotel Saga",
      verificado: false,
      descripcion: "Hotel en Tromsø.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: null,
      videoUrl: null,
      reservarUrl: "https://www.booking.com/hotel/no/quality-saga.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Quality Hotel Saga – Silleraviajera",
    },
    {
      id: "scandic-ishavshotel-tromso",
      nombre: "Scandic Ishavshotel",
      verificado: false,
      descripcion: "Hotel en Tromsø.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: null,
      videoUrl: null,
      reservarUrl: "https://www.booking.com/hotel/no/scandic-ishavshotel.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Scandic Ishavshotel – Silleraviajera",
    },
  ],
  munich: [
    {
      id: "arthotel-munich",
      nombre: "Arthotel Munich",
      descripcion: "Hotel en el centro de Múnich.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "ib058tMRfI8",
      videoUrl: "https://youtu.be/ib058tMRfI8",
      reservarUrl: "https://www.booking.com/hotel/de/treff-munchen-city-centre.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Arthotel Munich – Silleraviajera",
    },
  ],
  gante: [
    {
      id: "ibis-budget-gante-dampoort",
      nombre: "ibis budget Gent Centrum Dampoort",
      descripcion: "Hotel céntrico en Gante, junto a la estación Dampoort.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "LaZxNbErrMg",
      videoUrl: "https://youtu.be/LaZxNbErrMg",
      reservarUrl: "https://www.booking.com/hotel/be/ibis-budget-gent-centrum-dampoort.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel ibis budget Gent Centrum Dampoort – Silleraviajera",
    },
  ],
  edimburgo: [
    {
      id: "yotel-edinburgh",
      nombre: "YOTEL Edinburgh",
      descripcion: "Hotel YOTEL en el centro de Edimburgo.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "zqZJstECoJM",
      videoUrl: "https://youtube.com/shorts/zqZJstECoJM",
      reservarUrl: "https://www.booking.com/hotel/gb/yotel-edinburgh.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel YOTEL Edinburgh – Silleraviajera",
    },
  ],
  madrid: [
    {
      id: "bb-madrid-centro",
      nombre: "Hotel B&B Madrid Centro",
      descripcion: "Habitación accesible en Madrid: espacio, comodidad y adaptación real.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "uU_Ia9e7T2c",
      videoUrl: "https://youtu.be/uU_Ia9e7T2c",
      reservarUrl: "https://www.booking.com/hotel/es/plaza-mayor.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel B&B Madrid Centro – Silleraviajera",
    },
    {
      id: "ibis-lavapies",
      nombre: "Hotel Ibis Budget Madrid Centro Lavapiés",
      descripcion: "Hotel en el barrio de Lavapiés, Madrid.",
      imagen: null,
      estrellas: 0,
      precio: "—",
      accesibilidad: [],
      videoId: "40gt0ZN7hRg",
      videoUrl: "https://youtube.com/shorts/40gt0ZN7hRg",
      reservarUrl: "https://www.booking.com/hotel/es/ibis-budget-madrid-centro-lavapies.es.html?aid=304142",
      infoEmailSubject: "Consulta hotel Ibis Lavapiés – Silleraviajera",
    },
  ],
};
