import type { ImageSourcePropType } from "react-native";

export type Tema = {
  id: string;
  titulo: string;
  iconName: string;
  iconLib: "feather" | "mci";
  colorKey: "terracotta" | "mediterranean" | "olive" | "amber";
};

export const imagenPorTema: Record<string, ImageSourcePropType> = {
  "tren-nacional": require("@/assets/images/consejos/tren-nacional.jpg"),
  "tren-internacional": require("@/assets/images/consejos/tren-internacional.jpg"),
  avion: require("@/assets/images/consejos/avion.jpg"),
  "hotel-accesible": require("@/assets/images/consejos/hotel-accesible.jpg"),
  "restaurante-accesible": require("@/assets/images/consejos/restaurante-accesible.jpg"),
  "tarjeta-sanitaria-europea": require("@/assets/images/consejos/tarjeta-sanitaria-europea.png"),
  "documentacion-tramites": require("@/assets/images/consejos/documentacion-tramites.jpg"),
  "esim-datos-moviles": require("@/assets/images/consejos/esim-datos-moviles.jpg"),
  "tarjeta-dorada": require("@/assets/images/consejos/tarjeta-dorada.jpg"),
};

export const temas: Tema[] = [
  { id: "tren-nacional", titulo: "Cómo viajar en tren con movilidad reducida a nivel nacional", iconName: "train", iconLib: "mci", colorKey: "terracotta" },
  { id: "tren-internacional", titulo: "Cómo viajar en tren a nivel internacional", iconName: "globe", iconLib: "feather", colorKey: "mediterranean" },
  { id: "avion", titulo: "Cómo viajar en avión", iconName: "airplane", iconLib: "mci", colorKey: "olive" },
  { id: "hotel-accesible", titulo: "Cómo localizar un hotel accesible", iconName: "bed", iconLib: "mci", colorKey: "amber" },
  { id: "restaurante-accesible", titulo: "Cómo localizar un restaurante accesible", iconName: "silverware-fork-knife", iconLib: "mci", colorKey: "mediterranean" },
  { id: "tarjeta-sanitaria-europea", titulo: "Cómo solicitar la tarjeta sanitaria europea", iconName: "heart-pulse", iconLib: "mci", colorKey: "terracotta" },
  { id: "documentacion-tramites", titulo: "Documentación y trámites para viajar por Europa", iconName: "file-text", iconLib: "feather", colorKey: "mediterranean" },
  { id: "esim-datos-moviles", titulo: "Cómo viajar sin quedarte sin datos móviles con una eSIM", iconName: "smartphone", iconLib: "feather", colorKey: "olive" },
  { id: "tarjeta-dorada", titulo: "Cómo solicitar la Tarjeta Dorada de Renfe", iconName: "credit-card", iconLib: "feather", colorKey: "amber" },
];

export type BloqueContenido =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "lista"; items: string[] }
  | { tipo: "enlace"; texto: string; url: string };

export const contenidoPorTema: Record<string, BloqueContenido[]> = {
  avion: [
    { tipo: "parrafo", texto: "Puedes comprar tus billetes sin problema a través de las webs oficiales de las compañías aéreas. Actualmente, muchas de ellas ya incluyen durante el proceso de compra una opción para indicar si eres una persona con movilidad reducida o si necesitas asistencia. En ese caso, solo tendrás que seleccionarla y añadir la información que te pidan." },
    { tipo: "parrafo", texto: "Si la compañía no ofrece esa opción durante la compra, puedes hacer la reserva de forma normal y, después, ponerte en contacto con la aerolínea para indicar qué vuelo has comprado y qué tipo de asistencia necesitas, ya sea por viajar en silla de ruedas o por cualquier otra necesidad de apoyo." },
    { tipo: "subtitulo", texto: "Vídeo de ayuda" },
    { tipo: "enlace", texto: "Domina Skyscanner: los secretos para optimizar tu búsqueda de vuelos y ahorrar en tus viajes", url: "https://youtu.be/rK8FEB3Q-QE" },
  ],
  "tren-nacional": [
    { tipo: "parrafo", texto: "Actualmente hay varias compañías de tren, y en los servicios de larga distancia todas cuentan con opción de asistencia para personas con movilidad reducida." },
    { tipo: "parrafo", texto: "En el momento de comprar el billete, cada compañía incluye esta opción en un punto distinto del proceso:" },
    { tipo: "lista", items: ["Iryo: al añadir el tipo de pasajero.", "OUIGO: al añadir el tipo de pasajero.", "Renfe: al añadir los datos del viajero."] },
    { tipo: "subtitulo", texto: "Descuentos para personas con movilidad reducida" },
    { tipo: "lista", items: [
      "Renfe: el acompañante puede viajar por 7 euros por trayecto. Si tienes Tarjeta Dorada, el descuento es distinto. Además, si en la tarjeta tienes añadido acompañante, también se le aplica el descuento correspondiente.",
      "Iryo: puedes añadir la opción de persona con movilidad reducida y acompañante, y ambos tienen el mismo descuento.",
    ] },
    { tipo: "subtitulo", texto: "Vídeos de ayuda" },
    { tipo: "enlace", texto: "Viajar en Renfe con movilidad reducida: 14€ tú y descuento para tu acompañante", url: "https://youtu.be/uW3xIB-zub4" },
    { tipo: "enlace", texto: "Renfe: el truco para viajar por 14 € con movilidad reducida", url: "https://youtu.be/nPwoIp9NiXE" },
    { tipo: "enlace", texto: "Renfe: cómo adquirir los billetes de tren si tienes Tarjeta Dorada", url: "https://youtu.be/IL6XdiT4ru0" },
    { tipo: "enlace", texto: "Cómo comprar con Iryo billetes a 15 € si tienes movilidad reducida", url: "https://youtu.be/gxlhFzMb9F0" },
  ],
  "hotel-accesible": [
    { tipo: "parrafo", texto: "En mi caso, la plataforma que suelo utilizar para buscar hoteles accesibles es Booking. Para hacer una búsqueda más precisa, lo más recomendable es usar bien los filtros desde el principio." },
    { tipo: "parrafo", texto: "Yo siempre recomiendo marcar, al menos, estas opciones:" },
    { tipo: "lista", items: ["Adaptado para personas que usan silla de ruedas", "Ducha a ras de suelo"] },
    { tipo: "parrafo", texto: "Una vez aplicados esos filtros, lo mejor es revisar los hoteles uno por uno y fijarse bien en las fotografías, ya que muchas veces ahí es donde realmente puedes comprobar si el alojamiento se adapta a lo que necesitas." },
    { tipo: "parrafo", texto: "Los filtros ayudan mucho a hacer una primera selección, pero revisar las imágenes con detalle es clave para valorar mejor la accesibilidad real del hotel." },
    { tipo: "subtitulo", texto: "Vídeo de ayuda" },
    { tipo: "enlace", texto: "Guía completa: cómo encontrar los mejores hoteles accesibles en Booking", url: "https://youtu.be/IAwf8CNPZgw" },
  ],
  "tren-internacional": [
    { tipo: "parrafo", texto: "En los trenes internacionales, una vez comprado el billete, lo más recomendable es ponerte en contacto con atención al cliente para solicitar la asistencia que necesites." },
    { tipo: "parrafo", texto: "Lo habitual es hacerlo por teléfono, pero si te resulta más cómodo o te cuesta gestionarlo así, normalmente en la web de la compañía también encontrarás un correo electrónico para pedirla." },
    { tipo: "parrafo", texto: "Como recomendación general, es mejor solicitar la asistencia con al menos 48 horas de antelación para que puedan organizarla correctamente." },
  ],
  "restaurante-accesible": [
    { tipo: "parrafo", texto: "Una forma sencilla de localizar un restaurante accesible es utilizar Google Maps. Solo tienes que buscar la zona o el restaurante que te interese, entrar en su ficha y revisar la información disponible." },
    { tipo: "parrafo", texto: "Dentro de esa ficha, suele aparecer un apartado de información donde puedes consultar si el lugar cuenta con opciones de accesibilidad. Ahí podrás comprobar, por ejemplo, si tiene acceso adaptado para personas que usan silla de ruedas u otras características útiles antes de ir." },
    { tipo: "parrafo", texto: "Como recomendación, además de revisar esa información, conviene fijarse también en las fotos y, si tienes dudas, contactar directamente con el restaurante para confirmar que se adapta a lo que necesitas." },
  ],
  "documentacion-tramites": [
    { tipo: "parrafo", texto: "La documentación necesaria para viajar por Europa depende del pasaporte con el que viajes y del país europeo al que vayas. No se pide lo mismo a todas las personas, así que siempre debes comprobar los requisitos exactos según tu nacionalidad y tu destino." },
    { tipo: "subtitulo", texto: "Si viajas con pasaporte o DNI de un país de la Unión Europea" },
    { tipo: "parrafo", texto: "Normalmente puedes viajar por los países de la UE y por los países del espacio Schengen con DNI o pasaporte en vigor. Los menores también deben llevar su propio documento de viaje." },
    { tipo: "subtitulo", texto: "Si viajas con pasaporte de un país fuera de la Unión Europea" },
    { tipo: "parrafo", texto: "Normalmente necesitarás pasaporte en vigor y, según tu nacionalidad, puede que también necesites visado. Además, tu pasaporte puede tener que cumplir requisitos de vigencia, y en frontera pueden pedirte documentos como reserva de alojamiento, billete de vuelta o prueba de medios económicos." },
    { tipo: "subtitulo", texto: "Si viajas a Reino Unido" },
    { tipo: "parrafo", texto: "Debes tener en cuenta que no forma parte del espacio Schengen. Según tu nacionalidad, puede que necesites una ETA o un visado." },
    { tipo: "subtitulo", texto: "Importante" },
    { tipo: "parrafo", texto: "Aunque vengas de donde vengas y viajes a cualquier ciudad de Europa, siempre debes revisar antes del viaje si puedes entrar con DNI o necesitas pasaporte, si tu nacionalidad necesita visado, si tu pasaporte cumple la vigencia exigida y si tu destino tiene algún trámite adicional de entrada." },
    { tipo: "subtitulo", texto: "Cómo solicitar el pasaporte en España" },
    { tipo: "parrafo", texto: "El pasaporte español se tramita presencialmente en una Unidad de Documentación de la Policía Nacional. Para pedirlo o renovarlo, lo normal es solicitar cita previa en la web oficial de cita del DNI y pasaporte." },
    { tipo: "subtitulo", texto: "Dónde pedir cita previa" },
    { tipo: "parrafo", texto: "La cita previa se pide en la web oficial de Cita Previa DNI y Pasaporte. También puedes solicitarla por teléfono llamando al 060." },
    { tipo: "enlace", texto: "Cita Previa Pasaporte", url: "https://www.citapreviadnie.es/citaPreviaDniExp/" },
    { tipo: "enlace", texto: "Cita Previa DNI", url: "https://www.citapreviadnie.es/citaPreviaDni/Inicio.action" },
    { tipo: "parrafo", texto: "Teléfono de información y cita previa: 060." },
    { tipo: "subtitulo", texto: "Documentación necesaria" },
    { tipo: "parrafo", texto: "Para expedir el pasaporte es imprescindible la presencia física de la persona solicitante, el abono de la tasa y presentar:" },
    { tipo: "lista", items: [
      "DNI en vigor.",
      "Una fotografía reciente en color, tamaño 32 x 26 mm, con fondo blanco y liso, de frente y sin elementos que dificulten la identificación.",
      "Si el DNI se ha obtenido o renovado el mismo día, no hace falta aportar foto.",
      "Si se trata de una renovación o duplicado y el pasaporte anterior sigue en vigor, hay que llevarlo para que sea inutilizado.",
    ] },
    { tipo: "subtitulo", texto: "Si es para un menor o una persona tutelada" },
    { tipo: "parrafo", texto: "Además de la presencia física, hace falta la autorización expresa de quienes ejerzan la patria potestad o tutela. Y si el menor no tiene DNI por no estar obligado a tenerlo, debe aportar una certificación literal de nacimiento expedida por el Registro Civil con una antigüedad máxima de 6 meses y emitida solo a efectos de obtener el pasaporte." },
    { tipo: "subtitulo", texto: "Precio" },
    { tipo: "parrafo", texto: "La tasa general del pasaporte es de 30,00 euros para primera obtención, renovación, extravío, sustracción, anticipo o deterioro. Se puede pagar en efectivo, con tarjeta en la Unidad de Documentación o telemáticamente al pedir la cita. Para personas con familia numerosa acreditada, la expedición es gratuita." },
  ],
  "tarjeta-sanitaria-europea": [
    { tipo: "parrafo", texto: "La Tarjeta Sanitaria Europea es gratuita y se solicita en la Sede Electrónica de la Seguridad Social. Desde ahí puedes pedirla, renovarla, comprobar si ya la tienes en vigor y, si lo necesitas, obtener el Certificado Provisional Sustitutorio." },
    { tipo: "subtitulo", texto: "Qué cubre" },
    { tipo: "parrafo", texto: "La Tarjeta Sanitaria Europea te da acceso a la asistencia sanitaria que sea médicamente necesaria durante una estancia temporal en países de la Unión Europea, además de Reino Unido, Noruega, Islandia, Liechtenstein y Suiza, en las mismas condiciones que las personas aseguradas de ese país." },
    { tipo: "subtitulo", texto: "Qué no cubre" },
    { tipo: "parrafo", texto: "No sirve si viajas expresamente para recibir tratamiento médico ni si trasladas tu residencia a otro país. Además, si en el país de destino existe copago o parte del coste corre a cargo del paciente, tendrás que asumirlo en las mismas condiciones que las personas de allí." },
    { tipo: "enlace", texto: "Solicitar en la Sede Electrónica de la Seguridad Social", url: "https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10938/11566/1761" },
  ],
  "esim-datos-moviles": [
    { tipo: "parrafo", texto: "La eSIM es una tarjeta SIM digital que te permite tener datos móviles en tu destino sin necesidad de cambiar físicamente la tarjeta de tu teléfono. Es una opción muy cómoda para viajar, porque puedes activar internet en muchos países de forma rápida y sencilla, directamente desde tu móvil, siempre que tu dispositivo sea compatible." },
    { tipo: "parrafo", texto: "Su funcionamiento es simple: contratas un plan de datos, recibes la configuración y la instalas en el teléfono. A partir de ahí, puedes conectarte a internet durante el viaje sin depender solo del wifi y sin tener que buscar una tienda física para comprar una SIM local." },
    { tipo: "parrafo", texto: "La eSIM puede ser una buena opción para viajar por comodidad, por rapidez y para mantenerte conectado durante todo el viaje. Aun así, antes de contratar una, conviene revisar bien la cobertura, los datos incluidos, la duración del plan y la compatibilidad de tu móvil." },
    { tipo: "parrafo", texto: "Si quieres más información o necesitas una opción más adaptada a tu viaje, puedes ponerte en contacto en info@silleraviajera.com" },
  ],
  "tarjeta-dorada": [
    { tipo: "parrafo", texto: "La Tarjeta Dorada de Renfe es un título personal, nominativo e intransferible que ofrece descuentos en prácticamente todos los servicios de Renfe (AVE, Larga Distancia, Avant, Media Distancia y Cercanías)." },
    { tipo: "subtitulo", texto: "Quién puede solicitarla" },
    { tipo: "lista", items: [
      "Personas mayores de 60 años.",
      "Pensionistas mayores de 18 años por incapacidad permanente total, absoluta o gran invalidez.",
      "Militares retirados en situación de incapacidad permanente.",
      "Personas con un grado de discapacidad igual o superior al 33%.",
    ] },
    { tipo: "parrafo", texto: "Las personas con un grado de discapacidad igual o superior al 65% pueden viajar con un acompañante, que se beneficia del mismo descuento." },
    { tipo: "subtitulo", texto: "Documentación necesaria" },
    { tipo: "lista", items: [
      "Mayores de 60 años: DNI, NIE o pasaporte en vigor.",
      "Pensionistas y militares retirados con incapacidad: documento que acredite la condición de pensionista.",
      "Personas con discapacidad: certificado, tarjeta o documento acreditativo emitido por el organismo oficial correspondiente.",
    ] },
    { tipo: "subtitulo", texto: "Cómo solicitarla por primera vez" },
    { tipo: "parrafo", texto: "La primera vez es necesario hacerla de forma presencial, ya que se requiere identificar a la persona titular. La opción online solo está disponible para renovaciones de tarjetas ya existentes." },
    { tipo: "lista", items: [
      "En las taquillas de las estaciones de Renfe.",
      "En agencias de viaje autorizadas.",
    ] },
    { tipo: "subtitulo", texto: "Precio" },
    { tipo: "lista", items: [
      "Emisión o renovación por 1 año: 6 €.",
      "Renovación por 2 años: 12 €.",
      "Renovación por 3 años: 15 €.",
    ] },
    { tipo: "subtitulo", texto: "Descuentos" },
    { tipo: "lista", items: [
      "AVE y Larga Distancia: 25% sobre el precio vigente, cualquier día de la semana.",
      "Avant: 25% de lunes a viernes y 40% los fines de semana sobre la tarifa General/Base.",
      "Media Distancia: 40% todos los días.",
      "Cercanías: 40% todos los días (requiere también la tarjeta TSC Renfe&Tú personalizada, con un coste de 2 €).",
      "Cercanías Ancho Métrico: hasta el 50% en cualquier tren y recorrido.",
    ] },
    { tipo: "parrafo", texto: "El descuento se aplica sobre la tarifa General/Base o sobre el precio dinámico abierto según el tipo de servicio, y no es acumulable al descuento de Ida y vuelta." },
    { tipo: "enlace", texto: "Información oficial en renfe.com", url: "https://www.renfe.com/es/es/viajar/prepara-tu-viaje/descuentos/mayores-de-60" },
    { tipo: "subtitulo", texto: "Vídeo de ayuda" },
    { tipo: "enlace", texto: "Tarjeta Dorada Renfe", url: "https://youtu.be/9yjyxOYgq_I" },
  ],
};

export function getTema(id: string): Tema | undefined {
  return temas.find((t) => t.id === id);
}
