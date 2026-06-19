import type { Lang } from "@/contexts/LanguageContext";
import type {
  AlojamientoGuia,
  Destino,
  HotelDestino,
  HotelEntry,
  ItemAccesible,
  ItemAparcamiento,
  LugarQueVer,
  TaxiAdaptado,
  Viaje,
} from "@/data/types";
import type { BloqueContenido, Tema } from "@/data/consejos";
import type { BloqueInfo } from "@/data/informacion";
import { ui } from "./ui";

const cityEN: Record<string, string> = {
  "Ámsterdam": "Amsterdam",
  "Berlín": "Berlin",
  "Brujas": "Bruges",
  "Edimburgo": "Edinburgh",
  "Gante": "Ghent",
  "Londres": "London",
  "Múnich": "Munich",
  "Oslo": "Oslo",
  "Roma": "Rome",
  "Tromsø": "Tromsø",
  "Madrid": "Madrid",
  "Barcelona": "Barcelona",
  "Valencia": "Valencia",
  "Valladolid": "Valladolid",
  "Vitoria": "Vitoria",
  "Pamplona": "Pamplona",
  "Córdoba": "Córdoba",
};

export function tCity(name: string, lang: Lang): string {
  if (lang === "es") return name;
  return cityEN[name] ?? name;
}

export function tPais(pais: string, lang: Lang): string {
  if (lang === "es") return pais;
  return ui.en.paisGenerico[pais] ?? pais;
}

export function tDestino<T extends Destino | HotelDestino>(d: T, lang: Lang): T {
  if (lang === "es") return d;
  return { ...d, nombre: tCity(d.nombre, lang), pais: tPais(d.pais, lang) };
}

const hotelEN: Record<string, { descripcion?: string; accesibilidad?: string[] }> = {
  "yotel-amsterdam": {
    descripcion:
      "Modern and accessible hotel in the heart of Amsterdam, just minutes from the central station and the canals. Adapted rooms with plenty of space for a wheelchair, step-free entrance and staff trained in accessible service.",
    accesibilidad: [
      "Step-free accessible entrance",
      "Lift to all floors",
      "Adapted room available",
      "Adapted bathroom with grab rails",
      "Roll-in shower",
    ],
  },
  "ibis-brugge": {
    descripcion:
      "Accessible, central hotel next to the Bruges train station. Adapted rooms, barrier-free entrance and easy access to all the city's services.",
    accesibilidad: ["Accessible entrance", "Lift", "Adapted room"],
  },
  "comfort-xpress-oslo": { descripcion: "Central hotel in Oslo, next to Youngstorget." },
  "hotel-lutzow-berlin": { descripcion: "Hotel in Berlin." },
  "nh-canciller-ayala-vitoria": { descripcion: "NH hotel in Vitoria-Gasteiz." },
  "boulevard-vitoria-gasteiz": { descripcion: "Boulevard hotel in Vitoria-Gasteiz." },
  "moxy-tromso": { descripcion: "Hotel in Tromsø." },
  "comfort-xpress-tromso": {
    descripcion:
      "Eco-certified hotel right in the centre of Tromsø, a 1-minute walk from the Strandgata shopping street and about 500 metres from the Polaria experience centre. Simple rooms with free wifi, flat-screen TV, desk and private bathroom with shower; some with city or sea views.",
    accesibilidad: ["Adapted room available", "Wheelchair accessible", "Lower washbasin", "Toilet with grab rails"],
  },
  "quality-saga-tromso": { descripcion: "Hotel in Tromsø." },
  "scandic-ishavshotel-tromso": { descripcion: "Hotel in Tromsø." },
  "arthotel-munich": { descripcion: "Hotel in central Munich." },
  "ibis-budget-gante-dampoort": { descripcion: "Central hotel in Ghent, next to Dampoort station." },
  "yotel-edinburgh": { descripcion: "YOTEL hotel in central Edinburgh." },
  "bb-madrid-centro": {
    descripcion: "Accessible room in Madrid: space, comfort and real adaptation.",
  },
  "ibis-lavapies": { descripcion: "Hotel in the Lavapiés neighbourhood, Madrid." },
  "zenit-pamplona": { descripcion: "Zenit hotel in Pamplona." },
  "patio-san-andres-cordoba": { descripcion: "Accessible apartment in Córdoba." },
};

export function tHotel<T extends HotelEntry | AlojamientoGuia>(h: T, lang: Lang): T {
  if (lang === "es") return h;
  const tr = hotelEN[h.id];
  if (!tr) return h;
  return {
    ...h,
    descripcion: tr.descripcion ?? h.descripcion,
    accesibilidad: tr.accesibilidad ?? h.accesibilidad,
  };
}

const viajeEN: Record<number, { destino?: string; pais?: string; notas?: string }> = {
  5: {
    destino: "Bruges",
    pais: "Belgium",
    notas: "Very accessible city. Reserve an adapted boat tour along the canals.",
  },
  6: {
    destino: "Ghent",
    pais: "Belgium",
    notas: "Historic centre with accessible paving. Hotel with confirmed lift.",
  },
  7: {
    destino: "London",
    pais: "United Kingdom",
    notas: "Tube with step-free access. Visit to Tate Modern and Hyde Park.",
  },
  8: {
    destino: "Tromsø",
    pais: "Norway",
    notas: "Accessible Northern Lights. Adapted sleigh activities and viewing.",
  },
  11: { destino: "Madrid", pais: "Spain" },
  12: { destino: "Barcelona", pais: "Spain" },
  13: { destino: "Valencia", pais: "Spain" },
  14: { destino: "Valladolid", pais: "Spain" },
  15: { destino: "Vitoria", pais: "Spain" },
  16: { destino: "Pamplona", pais: "Spain" },
  17: { destino: "Córdoba", pais: "Spain" },
  18: { destino: "Amsterdam", pais: "Netherlands" },
  19: { destino: "Berlin", pais: "Germany" },
  20: { destino: "Edinburgh", pais: "United Kingdom" },
  21: { destino: "Munich", pais: "Germany" },
  22: { destino: "Oslo", pais: "Norway" },
  23: { destino: "Rome", pais: "Italy" },
};

export function tViaje(v: Viaje, lang: Lang): Viaje {
  if (lang === "es") return v;
  const tr = viajeEN[v.id];
  if (!tr) return v;
  return {
    ...v,
    destino: tr.destino ?? v.destino,
    pais: tr.pais ?? v.pais,
    notas: tr.notas ?? v.notas,
  };
}

export function tTema(t: Tema, lang: Lang): Tema {
  if (lang === "es") return t;
  const titulo = ui.en.consejoTitulo[t.id];
  return titulo ? { ...t, titulo } : t;
}

const bloquesEN: Record<string, BloqueContenido[]> = {
  avion: [
    {
      tipo: "parrafo",
      texto:
        "You can buy your tickets without any trouble through the airlines' official websites. Many of them now include an option during checkout to indicate that you are a person with reduced mobility or that you need assistance. If so, just select it and add the requested information.",
    },
    {
      tipo: "parrafo",
      texto:
        "If the airline does not offer that option during purchase, you can book normally and then contact the airline to indicate which flight you bought and what kind of assistance you need, whether for travelling in a wheelchair or any other support need.",
    },
    { tipo: "subtitulo", texto: "Helpful video (in Spanish)" },
    { tipo: "enlace", texto: "Master Skyscanner: secrets to optimise your flight search and save on your trips", url: "https://youtu.be/rK8FEB3Q-QE" },
  ],
  "tren-nacional": [
    {
      tipo: "parrafo",
      texto:
        "There are currently several train operators, and on long-distance services they all offer assistance for people with reduced mobility.",
    },
    {
      tipo: "parrafo",
      texto: "When buying the ticket, each operator includes this option at a different point in the process:",
    },
    {
      tipo: "lista",
      items: [
        "Iryo: when adding the type of passenger.",
        "OUIGO: when adding the type of passenger.",
        "Renfe: when adding the traveller's details.",
      ],
    },
    { tipo: "subtitulo", texto: "Discounts for people with reduced mobility" },
    {
      tipo: "lista",
      items: [
        "Renfe: the companion can travel for 7 euros per leg. With a Tarjeta Dorada, the discount is different. If the card includes a companion, they also get the corresponding discount.",
        "Iryo: you can add the option for a person with reduced mobility plus companion, and both get the same discount.",
      ],
    },
    { tipo: "subtitulo", texto: "Helpful videos (in Spanish)" },
    { tipo: "enlace", texto: "Travelling on Renfe with reduced mobility: €14 for you and a discount for your companion", url: "https://youtu.be/uW3xIB-zub4" },
    { tipo: "enlace", texto: "Renfe: the trick to travel for €14 with reduced mobility", url: "https://youtu.be/nPwoIp9NiXE" },
    { tipo: "enlace", texto: "Renfe: how to buy train tickets if you have a Tarjeta Dorada", url: "https://youtu.be/IL6XdiT4ru0" },
    { tipo: "enlace", texto: "How to buy Iryo tickets for €15 if you have reduced mobility", url: "https://youtu.be/gxlhFzMb9F0" },
  ],
  "hotel-accesible": [
    {
      tipo: "parrafo",
      texto:
        "In my case, the platform I usually use to find accessible hotels is Booking. To make a more precise search, the best approach is to use the filters well from the start.",
    },
    { tipo: "parrafo", texto: "I always recommend ticking at least these options:" },
    { tipo: "lista", items: ["Adapted for wheelchair users", "Roll-in shower"] },
    {
      tipo: "parrafo",
      texto:
        "Once those filters are applied, it's best to review the hotels one by one and look closely at the photos, as that is often where you can really check whether the place suits what you need.",
    },
    {
      tipo: "parrafo",
      texto:
        "Filters help a lot for an initial selection, but reviewing the images carefully is key to better assessing the hotel's real accessibility.",
    },
    { tipo: "subtitulo", texto: "Helpful video (in Spanish)" },
    { tipo: "enlace", texto: "Full guide: how to find the best accessible hotels on Booking", url: "https://youtu.be/IAwf8CNPZgw" },
  ],
  "tren-internacional": [
    {
      tipo: "parrafo",
      texto:
        "On international trains, once you have bought the ticket, the best option is to contact customer service to request the assistance you need.",
    },
    {
      tipo: "parrafo",
      texto:
        "It's usually done by phone, but if that's easier or hard to manage, the operator's website normally also lists an email address you can use to request it.",
    },
    {
      tipo: "parrafo",
      texto:
        "As a general recommendation, request assistance at least 48 hours in advance so it can be properly arranged.",
    },
  ],
  "restaurante-accesible": [
    {
      tipo: "parrafo",
      texto:
        "An easy way to find an accessible restaurant is to use Google Maps. Just search for the area or the restaurant you're interested in, open its listing and review the available information.",
    },
    {
      tipo: "parrafo",
      texto:
        "Inside the listing there is usually an information section where you can check whether the place has accessibility options. There you can see, for example, whether it has wheelchair-accessible entry or other useful features before going.",
    },
    {
      tipo: "parrafo",
      texto:
        "As a tip, beyond reviewing that information, look at the photos too and, if in doubt, contact the restaurant directly to confirm it suits what you need.",
    },
  ],
  "documentacion-tramites": [
    {
      tipo: "parrafo",
      texto:
        "The documentation needed to travel around Europe depends on the passport you travel with and the European country you are going to. Not the same is asked of everyone, so always check the exact requirements for your nationality and destination.",
    },
    { tipo: "subtitulo", texto: "If you travel with a passport or ID from an EU country" },
    {
      tipo: "parrafo",
      texto:
        "You can normally travel around the EU and the Schengen area with a valid ID card or passport. Minors must also carry their own travel document.",
    },
    { tipo: "subtitulo", texto: "If you travel with a passport from outside the EU" },
    {
      tipo: "parrafo",
      texto:
        "You will normally need a valid passport and, depending on your nationality, you may also need a visa. Your passport may have to meet validity requirements, and at the border you may be asked for documents such as accommodation booking, return ticket or proof of financial means.",
    },
    { tipo: "subtitulo", texto: "If you travel to the United Kingdom" },
    {
      tipo: "parrafo",
      texto:
        "Note that it is not part of the Schengen area. Depending on your nationality, you may need an ETA or a visa.",
    },
    { tipo: "subtitulo", texto: "Important" },
    {
      tipo: "parrafo",
      texto:
        "Wherever you come from and whichever European city you travel to, always check before your trip whether you can enter with an ID card or need a passport, whether your nationality requires a visa, whether your passport meets the required validity, and whether your destination has any additional entry procedure.",
    },
    { tipo: "subtitulo", texto: "How to apply for a passport in Spain" },
    {
      tipo: "parrafo",
      texto:
        "The Spanish passport is processed in person at a National Police Documentation Unit. To apply or renew, the usual approach is to book an appointment on the official DNI and passport appointment website.",
    },
    { tipo: "subtitulo", texto: "Where to book an appointment" },
    {
      tipo: "parrafo",
      texto:
        "Appointments are booked on the official DNI and passport appointment website. You can also request one by phone at 060.",
    },
    { tipo: "enlace", texto: "Passport appointment", url: "https://www.citapreviadnie.es/citaPreviaDniExp/" },
    { tipo: "enlace", texto: "DNI appointment", url: "https://www.citapreviadnie.es/citaPreviaDni/Inicio.action" },
    { tipo: "parrafo", texto: "Information and appointment phone: 060." },
    { tipo: "subtitulo", texto: "Required documentation" },
    {
      tipo: "parrafo",
      texto: "To issue the passport, the applicant must be physically present, the fee must be paid and you must provide:",
    },
    {
      tipo: "lista",
      items: [
        "Valid DNI.",
        "A recent colour photograph, 32 x 26 mm, with a plain white background, facing forward and with no items hindering identification.",
        "If the DNI was obtained or renewed the same day, no photo is needed.",
        "If it is a renewal or duplicate and the previous passport is still valid, bring it so it can be invalidated.",
      ],
    },
    { tipo: "subtitulo", texto: "If it is for a minor or a person under guardianship" },
    {
      tipo: "parrafo",
      texto:
        "In addition to physical presence, the express authorisation of those exercising parental authority or guardianship is required. If the minor does not have a DNI because they are not required to have one, they must provide a literal birth certificate issued by the Civil Registry no more than 6 months old and issued solely for obtaining the passport.",
    },
    { tipo: "subtitulo", texto: "Price" },
    {
      tipo: "parrafo",
      texto:
        "The general passport fee is €30.00 for first issue, renewal, loss, theft, advance issue or damage. Payment can be made in cash, by card at the Documentation Unit, or online when booking the appointment. For people with accredited large-family status, issuance is free.",
    },
  ],
  "tarjeta-sanitaria-europea": [
    {
      tipo: "parrafo",
      texto:
        "The European Health Insurance Card is free and is requested through the Spanish Social Security electronic office. From there you can apply, renew, check whether yours is still valid and, if needed, obtain the Provisional Replacement Certificate.",
    },
    { tipo: "subtitulo", texto: "What it covers" },
    {
      tipo: "parrafo",
      texto:
        "The European Health Insurance Card gives you access to medically necessary healthcare during a temporary stay in EU countries plus the United Kingdom, Norway, Iceland, Liechtenstein and Switzerland, under the same conditions as insured residents of that country.",
    },
    { tipo: "subtitulo", texto: "What it does not cover" },
    {
      tipo: "parrafo",
      texto:
        "It is not valid if you travel specifically to receive medical treatment, nor if you move your residence to another country. Also, if the destination country has co-payments or part of the cost is borne by the patient, you will have to cover it under the same conditions as local residents.",
    },
    {
      tipo: "enlace",
      texto: "Apply on the Social Security electronic office",
      url: "https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10938/11566/1761",
    },
  ],
  "esim-datos-moviles": [
    {
      tipo: "parrafo",
      texto:
        "An eSIM is a digital SIM card that lets you have mobile data at your destination without physically swapping the SIM in your phone. It's a very convenient option for travelling, because you can activate internet in many countries quickly and easily, directly from your phone, as long as your device is compatible.",
    },
    {
      tipo: "parrafo",
      texto:
        "It's simple: you buy a data plan, receive the configuration and install it on the phone. From then on, you can connect to the internet during your trip without relying only on Wi-Fi and without having to find a physical shop to buy a local SIM.",
    },
    {
      tipo: "parrafo",
      texto:
        "An eSIM can be a good option for travelling for convenience, speed and to stay connected throughout the trip. Even so, before buying one, check coverage, included data, plan duration and your phone's compatibility.",
    },
    {
      tipo: "parrafo",
      texto:
        "If you want more information or need an option more tailored to your trip, you can contact info@silleraviajera.com",
    },
  ],
  "tarjeta-dorada": [
    {
      tipo: "parrafo",
      texto:
        "Renfe's Tarjeta Dorada is a personal, nominative and non-transferable card that offers discounts on practically all Renfe services (AVE, Long Distance, Avant, Medium Distance and Cercanías).",
    },
    { tipo: "subtitulo", texto: "Who can apply for it" },
    {
      tipo: "lista",
      items: [
        "People over 60 years old.",
        "Pensioners over 18 years old with total or absolute permanent incapacity, or major disability.",
        "Retired military personnel with permanent incapacity.",
        "People with a recognised disability of 33% or higher.",
      ],
    },
    {
      tipo: "parrafo",
      texto:
        "People with a disability of 65% or higher may travel with a companion, who benefits from the same discount.",
    },
    { tipo: "subtitulo", texto: "Required documentation" },
    {
      tipo: "lista",
      items: [
        "People over 60: valid DNI, NIE or passport.",
        "Pensioners and retired military personnel with incapacity: document accrediting their pensioner status.",
        "People with disabilities: certificate, card or accrediting document issued by the relevant official body.",
      ],
    },
    { tipo: "subtitulo", texto: "How to apply for it the first time" },
    {
      tipo: "parrafo",
      texto:
        "The first application must be made in person, as the holder needs to be identified. The online option is only available to renew existing cards.",
    },
    {
      tipo: "lista",
      items: ["At the ticket counters of Renfe stations.", "At authorised travel agencies."],
    },
    { tipo: "subtitulo", texto: "Price" },
    {
      tipo: "lista",
      items: [
        "Issue or renewal for 1 year: €6.",
        "Renewal for 2 years: €12.",
        "Renewal for 3 years: €15.",
      ],
    },
    { tipo: "subtitulo", texto: "Discounts" },
    {
      tipo: "lista",
      items: [
        "AVE and Long Distance: 25% off the current price, any day of the week.",
        "Avant: 25% Monday to Friday and 40% on weekends, off the General/Base fare.",
        "Medium Distance: 40% every day.",
        "Cercanías: 40% every day (also requires the personalised TSC Renfe&Tú card, at a cost of €2).",
        "Cercanías Ancho Métrico: up to 50% on any train and route.",
      ],
    },
    {
      tipo: "parrafo",
      texto:
        "The discount is applied on the General/Base fare or on the open dynamic price depending on the service, and cannot be combined with the round-trip discount.",
    },
    { tipo: "enlace", texto: "Official information at renfe.com", url: "https://www.renfe.com/es/es/viajar/prepara-tu-viaje/descuentos/mayores-de-60" },
    { tipo: "subtitulo", texto: "Helpful video (in Spanish)" },
    { tipo: "enlace", texto: "Renfe's Tarjeta Dorada", url: "https://youtu.be/9yjyxOYgq_I" },
  ],
};

export function tBloquesContenido(temaId: string, lang: Lang, fallback: BloqueContenido[]): BloqueContenido[] {
  if (lang === "es") return fallback;
  return bloquesEN[temaId] ?? fallback;
}

const bloquesInfoEN: Record<string, { titulo?: string; parrafos?: string[] }> = {
  quien: {
    titulo: "Who is behind it",
    parrafos: [
      "Sillera World is the app born from Silleraviajera, a project created to help people with reduced mobility travel with more information, more confidence and fewer barriers. Behind this space there is real experience, a constant search for useful resources, and the intention of making trip planning easier, clearer and more accessible.",
    ],
  },
  privacidad: {
    titulo: "Privacy",
    parrafos: [
      "At SilleraViajera we take privacy seriously. If at any point this app collects personal data, it will be used only to provide a better service, improve the experience or run features that require it. Personal data will not be shared with third parties, except where necessary for the service to work or where there is a legal obligation.",
      "We recommend reviewing this information from time to time, as it may be updated if new features or changes are added to the app.",
    ],
  },
  aviso: {
    titulo: "Important notice",
    parrafos: [
      "The information in this app is intended to help and guide you, but some conditions may change over time. Opening hours, services, accessibility, prices, assistance, transport conditions or features of hotels and venues may be modified without prior notice by third parties.",
      "For that reason, we always recommend confirming directly with the relevant company, accommodation, transport operator or venue before making your trip or booking.",
    ],
  },
};

export function tBloqueInfo(b: BloqueInfo, lang: Lang): BloqueInfo {
  if (lang === "es") return b;
  const tr = bloquesInfoEN[b.id];
  if (!tr) return b;
  return { ...b, titulo: tr.titulo ?? b.titulo, parrafos: tr.parrafos ?? b.parrafos };
}

const queVerEN: Record<string, Record<string, string>> = {
  madrid: {
    "Puerta del Sol": "Puerta del Sol",
    "Plaza Mayor": "Plaza Mayor",
    "Gran Vía": "Gran Vía",
    "Palacio Real por fuera": "Royal Palace from the outside",
    "Catedral de la Almudena por fuera": "Almudena Cathedral from the outside",
    "Plaza de Oriente": "Plaza de Oriente",
    "Templo de Debod": "Temple of Debod",
    "Parque del Retiro": "Retiro Park",
    "Fuente de Cibeles": "Cibeles Fountain",
    "Paseo del Prado": "Paseo del Prado",
  },
  barcelona: {
    "Visitar la Sagrada Familia": "Visit the Sagrada Familia",
    "Visitar el Hospital de Sant Pau": "Visit the Hospital de Sant Pau",
    "Visitar Casa Batlló": "Visit Casa Batlló",
    "Visitar Casa Vicens": "Visit Casa Vicens",
    "Pasear por Las Ramblas de Barcelona": "Walk along La Rambla",
    "Visitar el Liceu": "Visit the Liceu opera house",
    "Visitar el Palau de la Música": "Visit the Palau de la Música",
    "Recorrer el Barrio Gótico": "Explore the Gothic Quarter",
    "Visitar Montjuïc": "Visit Montjuïc",
    "Visitar el Bosc de les Fades": "Visit the Bosc de les Fades",
    "Recorrido accesible con Wheeling Barcelona": "Accessible tour with Wheeling Barcelona",
    "Visitar el Museo de Cera": "Visit the Wax Museum",
    "Visitar el Museo de las Ciencias": "Visit the Science Museum",
    "Visitar el MACBA": "Visit MACBA",
  },
  cordoba: {
    "Recorrer las calles del centro y del casco antiguo": "Stroll the city centre and old town streets",
    "Visitar la Mezquita": "Visit the Mosque-Cathedral",
    "Visitar los Patios de Córdoba": "Visit the Patios of Córdoba",
    "Visitar el Alcázar": "Visit the Alcázar",
    "Visitar la Caballeriza": "Visit the Royal Stables",
    "Visitar el Puente Romano": "Visit the Roman Bridge",
    "Córdoba en 2 horas: free tour por lo mejor de la ciudad":
      "Córdoba in 2 hours: free tour of the city's highlights",
  },
  tromso: {
    "En búsqueda de ballenas en barco": "Whale watching by boat",
    "En búsqueda de auroras: la magia de la noche polar":
      "Chasing the Northern Lights: the magic of the polar night",
    "Ruta por los fiordos en furgoneta": "Fjord tour by van",
    "Ruta por Tromsø y puntos de interés en furgoneta": "Tour around Tromsø and points of interest by van",
    "Visita a tribu Sami y sus renos / paseo en reno": "Visit to a Sami community and their reindeer / reindeer ride",
  },
};

export function tQueVer(item: LugarQueVer, lang: Lang, destinoId: string): LugarQueVer {
  if (lang === "es") return item;
  const map = queVerEN[destinoId];
  if (!map) return item;
  return { ...item, nombre: map[item.nombre] ?? item.nombre };
}

const itemAccesibleEN: Record<string, Record<string, { nombre?: string; detalle?: string }>> = {
  madrid: {
    "Museo Reina Sofía": { nombre: "Reina Sofía Museum" },
    "Museo Nacional del Prado": { nombre: "Prado National Museum" },
    "Museo Sorolla": { nombre: "Sorolla Museum" },
    "Museo Thyssen": { nombre: "Thyssen Museum" },
    "CaixaForum Madrid": { nombre: "CaixaForum Madrid" },
  },
  barcelona: {
    "Museo Marítimo de Barcelona": { nombre: "Maritime Museum of Barcelona" },
    "Museo Nacional de Arte de Cataluña": { nombre: "National Art Museum of Catalonia" },
    "Museo de Arte Contemporáneo": { nombre: "Museum of Contemporary Art" },
    "Museo de Historia de Barcelona": { nombre: "Barcelona History Museum" },
    "Museo de las Ciencias CosmoCaixa": { nombre: "CosmoCaixa Science Museum" },
    "CaixaForum Barcelona": { nombre: "CaixaForum Barcelona" },
    "Museo Moco Barcelona": { nombre: "Moco Museum Barcelona" },
  },
  valencia: {
    "Museo de las Ciencias Príncipe Felipe": { nombre: "Príncipe Felipe Science Museum" },
    "CaixaForum Valencia": { nombre: "CaixaForum Valencia" },
    "Museo de Historia de Valencia": { nombre: "Valencia History Museum" },
    "Museo Fallero de Valencia": { nombre: "Fallero Museum of Valencia" },
    "Museo Arqueológico de la Almoina": { nombre: "Almoina Archaeology Museum" },
    "Museo del Arroz": { nombre: "Rice Museum" },
  },
  oslo: {
    "Museo Munch": { nombre: "Munch Museum" },
    "Museo del Pueblo Noruego": { nombre: "Norwegian Museum of Cultural History" },
    "Centro Nobel de la Paz": { nombre: "Nobel Peace Center" },
    "Museo de la Ciudad de Oslo": { nombre: "Oslo City Museum" },
    "Museo del Fram": { nombre: "Fram Museum" },
    "Museo Kon-Tiki": { nombre: "Kon-Tiki Museum" },
    "Museo de Barcos Vikingos": { nombre: "Viking Ship Museum" },
    "Oslo Street Food": { nombre: "Oslo Street Food" },
    "Barcode Street Food": { nombre: "Barcode Street Food" },
    "SALT Art & Music": { nombre: "SALT Art & Music" },
  },
  cordoba: {
    "Vértigo el restaurante": { nombre: "Vértigo el restaurante" },
    "Restaurante El Rincón del Carmen": { nombre: "Restaurante El Rincón del Carmen" },
    "Terra Olea": { nombre: "Terra Olea" },
  },
  tromso: {
    "Restaurant Skirri": { nombre: "Restaurant Skirri" },
    "Backstube Tromsø": { nombre: "Backstube Tromsø" },
    Pastafabrikken: { nombre: "Pastafabrikken" },
    "Nyt Bar & Bistro": { nombre: "Nyt Bar & Bistro" },
    "Cous Restaurant & Bar": { nombre: "Cous Restaurant & Bar" },
    "Sumo Vervet": { nombre: "Sumo Vervet" },
    "Aseo público adaptado en Stortorget": {
      nombre: "Accessible public toilet at Stortorget",
      detalle:
        "In the centre, on Stortorget square, across from Peppes Pizza (Stortorget 2) and next to the Raketten kiosk (the world's smallest restaurant), very close to Restaurant Skirri (Kystens Mathus, Stortorget 1).",
    },
    "Centro Comercial Alti": {
      nombre: "Alti Shopping Centre",
      detalle: "Located on floor 3. Card-paid access, around €0.75.",
    },
  },
};

export function tItemAccesible(item: ItemAccesible, lang: Lang, destinoId: string): ItemAccesible {
  if (lang === "es") return item;
  const map = itemAccesibleEN[destinoId];
  const tr = map?.[item.nombre];
  if (!tr) return item;
  return { ...item, nombre: tr.nombre ?? item.nombre, detalle: tr.detalle ?? item.detalle };
}

const taxiNotaEN: Record<string, Record<string, string>> = {
  barcelona: {
    "Taxi Amic": "Book at least 24 hours in advance.",
  },
  madrid: {
    "Tele Taxi Madrid":
      "Official dispatch service approved by Madrid City Council. When calling, ask explicitly for an Eurotaxi (wheelchair-adapted vehicle).",
  },
  valencia: {
    "Radio Taxi Valencia":
      "Main city dispatch. State explicitly that you need a wheelchair-adapted vehicle with ramp.",
  },
  valladolid: {
    "Radio Taxi Valladolid":
      "Main official fleet, centrally dispatched. Valladolid City Council subsidises adapted transport through the Bonotaxi programme.",
  },
  vitoria: {
    "Radio Taxi Gasteiz":
      "Unified Eurotaxi dispatch in Vitoria-Gasteiz. SMS line for deaf users: 660 034 833.",
  },
  pamplona: {
    "Tele Taxi San Fermín":
      "Official dispatch for the Pamplona Metropolitan Area (MCP). Alternative phone: 948 351 335.",
  },
  cordoba: {
    "Auttacor – Radio Taxi Córdoba":
      "Public Eurotaxi service in Córdoba. Alternative: Pidetaxi Córdoba 957 45 00 00. SMS line for deaf users: 607 208 817.",
  },
  londres: {
    "Black Cabs (Transport for London)":
      "100% of London's official Black Cabs are required to be wheelchair accessible and come with a built-in ramp. You can hail one on the street or book through the official app regulated by Transport for London.",
    "Wheelchair Taxis UK":
      "Unified booking service for wheelchair-adapted taxis across London and the rest of the United Kingdom.",
  },
  edimburgo: {
    "Central Taxis Edinburgh":
      "Edinburgh's official city taxi licences require wheelchair-accessible vehicles. Central Taxis runs the largest adapted fleet, approved and recommended by Edinburgh City Council.",
    "Handicabs (HCL Transport)":
      "Door-to-door social transport service run by the official charity Handicabs Lothian for people with reduced mobility.",
  },
  berlin: {
    "Eurotaxi Berlín (vía berlin.de)":
      "Berlin City Council and its Social Services Department do not run a public adapted-taxi fleet, but they officially endorse and centralise Eurotaxi licences through the mobility app approved by berlin.de.",
    "Prima Fahrten":
      "Adapted-transport company approved by Berlin for phone bookings outside the official app.",
  },
};

export function tTaxi(item: TaxiAdaptado, lang: Lang, destinoId: string): TaxiAdaptado {
  if (lang === "es") return item;
  const nota = taxiNotaEN[destinoId]?.[item.empresa];
  if (!nota) return item;
  return { ...item, nota };
}

const aparcamientoEN: Record<string, string[]> = {
  cordoba: [
    "Recommended public accessible (PRM) parking in Córdoba: Ronda de Isasa, next to the Visitor Reception Centre. This spot is the closest reference for visiting the Mosque-Cathedral, the Roman Bridge, the Alcázar de los Reyes Cristianos and the Royal Stables.",
  ],
  tromso: [
    "In Tromsø, the public spaces reserved for people with reduced mobility (HC permit) are managed by Tromsø Parkering on behalf of the municipality. According to Tromsø Parkering, there are public reserved accessible (PRM) spaces at more than 40 locations across the city.",
    "With a valid HC permit you can park free on public paid spaces and on reserved accessible (PRM) bays, and you may also exceed the maximum parking time, unless the sign states a specific maximum time for PRM users. On spaces off the public thoroughfare (white sign with a black P) there may be a payment obligation: always check the bay's information sign.",
    "Important: the HC permit is NOT valid in private car parks or private parking houses (for example, those run by operators such as APCOA or Onepark). At those places you normally have to pay and their own rules apply.",
    "A selection of public reserved accessible (PRM) bays in the centre and near points of interest (data from the official Tromsø Parkering map):",
    "Polaria: accessible (PRM) reserved bay next to the Polaria aquarium and experience centre, in the southern part of the centre.",
    "Tromsdalen Kirke / Ishavskatedralen: accessible (PRM) reserved bay next to the Arctic Cathedral (Ishavskatedralen), across the bridge.",
    "Kirkegata, by the Cathedral park (Domkirkeparken): accessible (PRM) reserved bay next to Tromsø Cathedral (Domkirke).",
    "Storgata: accessible (PRM) reserved bays on the main street of the centre (by Eurospar and by Fargerike).",
    "Grønnegata: accessible (PRM) reserved bays by the library (biblioteket) and by the Town Hall (Rådhuset), in the heart of the centre.",
    "Roald Amundsens plass: accessible (PRM) reserved bay on this central square.",
    "Strandgata, by the Nerstranda shopping centre: accessible (PRM) reserved bay.",
    "Kaigata, by the Amalie hotel: accessible (PRM) reserved bay, near the harbour.",
    "Sjøgata: accessible (PRM) reserved bays (by Austadbygget and by Torghuken), near the harbour.",
    "Telegrafbukta: accessible (PRM) reserved bay at the Telegrafbukta park and beach, in the southern part of the island.",
    "Fredrik Langes gate 1: accessible (PRM) reserved bay in the centre, but paid 24 hours (sign 'mot avgift').",
    "This is a selection for the centre and points of interest. For the full list (more than 50 bays) and the exact location of each, see the official map at tromso-parkering.no (filter 'Forflytningshemmede').",
  ],
};

export function tAparcamiento(item: ItemAparcamiento, lang: Lang, destinoId: string, idx: number): ItemAparcamiento {
  if (lang === "es") return item;
  const arr = aparcamientoEN[destinoId];
  const txt = arr?.[idx];
  if (!txt) return item;
  return { ...item, texto: txt };
}
