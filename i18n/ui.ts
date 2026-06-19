import type { Lang } from "@/contexts/LanguageContext";

type Dict = {
  language: { title: string; spanish: string; english: string };
  tabs: { inicio: string; hoteles: string; guias: string; viajes: string; mas: string };
  stack: {
    atras: string;
    hoteles: string;
    hotel: string;
    guia: string;
    seccion: string;
    ayuda: string;
    informacion: string;
    favoritos: string;
    buscar: string;
  };
  home: {
    etiqueta: string;
    titulo: string;
    subtitulo: string;
    explorar: string;
    onboardingTitulo: string;
    onboardingTexto: string;
    onboardingCerrar: string;
    betaTitulo: string;
    betaTexto: string;
    betaCerrar: string;
    bloqueHotelesT: string;
    bloqueHotelesD: string;
    bloqueGuiasT: string;
    bloqueGuiasD: string;
    bloqueViajesT: string;
    bloqueViajesD: string;
    bloqueConsejosT: string;
    bloqueConsejosD: string;
  };
  bienvenida: { entrar: string; porSilleraviajera: string };
  compartir: { boton: string; descripcion: string; titulo: string; mensaje: string };
  hoteles: {
    titulo: string;
    subtitulo: string;
    mapaInternacional: string;
    mapaNacional: string;
    abrirEnMaps: string;
    abrir: string;
    destinos: string;
    internacionales: string;
    nacionales: string;
  };
  hotelDestino: {
    hotelesEn: string;
    verificadosLabel: string;
    aconsejadosLabel: string;
    sinHoteles: string;
    prontoHoteles: string;
    destinoNoEncontrado: string;
  };
  hotelFicha: {
    accesibilidad: string;
    asiEs: string;
    reservar: string;
    solicitarInfo: string;
    verificadoBadge: string;
    aconsejadoBadge: string;
    hotelNoEncontrado: string;
    orientativo: string;
    compartir: string;
    disponible: string;
    compartirMensaje: string;
  };
  guias: {
    titulo: string;
    subtitulo: string;
    destinos: string;
    verDetalles: string;
    pendienteInfo: string;
    orientativo: string;
    destinoNoEncontrado: string;
    mapaAccesible: string;
    abrirMaps: string;
    abrir: string;
    queVer: string;
    queHacer: string;
    sinLugares: string;
    sinLugaresSub: string;
    sinInformacion: string;
    masInformacion: string;
    sinTaxis: string;
    sinTaxisSub: string;
    sinAparcamiento: string;
    sinHoteles: string;
    opcionesTransporte: string;
    confirmaTransporte: string;
    transporteTren: string;
    transporteMetro: string;
    transporteTranvia: string;
    transporteAutobus: string;
    seccionPendiente: string;
    orientativoSeccion: string;
  };
  consejos: { titulo: string; subtitulo: string };
  consejoDetalle: { contenidoPendiente: string; prontoAnadiremos: string; orientativo: string; temaNoEncontrado: string };
  informacion: { titulo: string; subtitulo: string };
  viajes: {
    titulo: string;
    subtitulo: string;
    activos: string;
    proximos: string;
    plazasDisponibles: string;
    enCola: string;
    listaEspera: string;
    masInfo: string;
    proximamente: string;
  };
  mas: {
    titulo: string;
    subtitulo: string;
    ayudaT: string;
    ayudaD: string;
    favoritosT: string;
    favoritosD: string;
    buscarT: string;
    buscarD: string;
    infoT: string;
    infoD: string;
    legalT: string;
    legalD: string;
  };
  legal: {
    titulo: string;
    subtitulo: string;
    ultimaActualizacion: string;
    privacidadTitulo: string;
    privacidadParrafos: string[];
    avisoTitulo: string;
    avisoParrafos: string[];
    derechosTitulo: string;
    derechosParrafos: string[];
    contactoTitulo: string;
    contactoTexto: string;
    contactoBoton: string;
  };
  favoritos: {
    titulo: string;
    subtitulo: string;
    vacioTitulo: string;
    vacioSubtitulo: string;
    quitar: string;
    badgeHotel: string;
    badgeViaje: string;
    badgeDestino: string;
  };
  buscar: {
    titulo: string;
    placeholder: string;
    vacioTitulo: string;
    vacioSubtitulo: string;
    sinResultados: string;
    sinResultadosSub: string;
    destinos: string;
    hoteles: string;
    viajes: string;
    activo: string;
    proximo: string;
  };
  badges: { verificado: string; sinVerificar: string; aconsejado: string; video: string; verificadoCompleto: string };
  common: {
    favorito: string;
    quitarFav: string;
    proximamenteVideo: string;
    proximamenteVideoSub: string;
    verEnYoutube: string;
    informacionOrientativa: string;
    sinPlazas: string;
    plazas: string;
  };
  email: { hola: string; gracias: string; deseoHotel: string };
  destinoNombre: Record<string, string>;
  destinoPais: Record<string, string>;
  paisGenerico: Record<string, string>;
  seccionLabel: Record<string, string>;
  consejoTitulo: Record<string, string>;
  iconCircleColor?: string;
};

export const ui: Record<Lang, Dict> = {
  es: {
    language: { title: "Idioma", spanish: "Español", english: "English" },
    tabs: { inicio: "Inicio", hoteles: "Hoteles", guias: "Guías", viajes: "Viajes", mas: "Más" },
    stack: {
      atras: "Atrás",
      hoteles: "Hoteles",
      hotel: "Hotel",
      guia: "Guía",
      seccion: "Sección",
      ayuda: "Ayuda",
      informacion: "Información",
      favoritos: "Favoritos",
      buscar: "Buscar",
    },
    home: {
      etiqueta: "Sillera World",
      titulo: "Viajar accesible, con confianza",
      subtitulo:
        "Información práctica para viajar con movilidad reducida: hoteles accesibles, guías de destino, viajes en grupo y consejos útiles.",
      explorar: "Explorar",
      onboardingTitulo: "Bienvenido a Sillera World",
      onboardingTexto:
        "Información práctica para viajar con movilidad reducida: hoteles, guías de ciudad, viajes en grupo y consejos.",
      onboardingCerrar: "Cerrar",
      betaTitulo: "Versión beta",
      betaTexto:
        "Estás viendo una versión beta de Sillera World. La app irá creciendo y mejorando poco a poco, con nuevos contenidos, destinos y funciones pensadas para ayudarte cada vez más en tus viajes.",
      betaCerrar: "Cerrar",
      bloqueHotelesT: "Hoteles accesibles",
      bloqueHotelesD: "Alojamientos verificados con vídeo, accesibilidad real y reserva directa.",
      bloqueGuiasT: "Guías de destino",
      bloqueGuiasD: "Qué ver, dónde comer, transporte adaptado y servicios accesibles.",
      bloqueViajesT: "Viajes en grupo",
      bloqueViajesD: "Viajes organizados pensados para personas con movilidad reducida.",
      bloqueConsejosT: "Ayuda y consejos",
      bloqueConsejosD: "Tren, avión, hoteles, eSIM y trámites para viajar por Europa.",
    },
    bienvenida: { entrar: "Entrar", porSilleraviajera: "Idea original de Silleraviajera" },
    hoteles: {
      titulo: "Hoteles accesibles",
      subtitulo: "Selecciona un destino para ver los hoteles accesibles disponibles.",
      mapaInternacional: "Mapa de hoteles internacionales",
      mapaNacional: "Mapa de hoteles nacionales",
      abrirEnMaps: "Abrir en Google Maps",
      abrir: "Abrir",
      destinos: "Destinos",
      internacionales: "Internacionales",
      nacionales: "Nacionales",
    },
    hotelDestino: {
      hotelesEn: "Hoteles en",
      verificadosLabel: "Verificados por Silleraviajera",
      aconsejadosLabel: "Aconsejados (no verificados)",
      sinHoteles: "Aún no hay hoteles publicados",
      prontoHoteles: "Pronto añadiremos hoteles accesibles para este destino.",
      destinoNoEncontrado: "Destino no encontrado",
    },
    hotelFicha: {
      accesibilidad: "Accesibilidad",
      asiEs: "Así es la accesibilidad real de este hotel",
      reservar: "Reservar en silleraviajera.com",
      solicitarInfo: "Solicitar información",
      verificadoBadge: "Verificado por Silleraviajera",
      aconsejadoBadge: "Aconsejado · sin verificar",
      hotelNoEncontrado: "Hotel no encontrado",
      orientativo:
        "La información sobre accesibilidad puede variar. Confirma siempre los detalles directamente con el hotel antes de reservar.",
      compartir: "Compartir hotel",
      disponible: "Disponible",
      compartirMensaje: "{nombre} — {ciudad}, {pais}\n\nHotel accesible en Silleraviajera.\nhttps://silleraviajera.com",
    },
    guias: {
      titulo: "Guías accesibles",
      subtitulo: "Información práctica por ciudad: qué ver, dónde comer, transporte adaptado y más.",
      destinos: "Destinos",
      verDetalles: "Ver detalles",
      pendienteInfo: "Pendiente de información",
      orientativo:
        "Las guías se amplían poco a poco con información verificada. Te recomendamos confirmar siempre los servicios y horarios antes de tu viaje.",
      destinoNoEncontrado: "Destino no encontrado",
      mapaAccesible: "Mapa accesible",
      abrirMaps: "Abrir en Google Maps",
      abrir: "Abrir",
      queVer: "Qué ver",
      queHacer: "Qué hacer",
      sinLugares: "Aún no hay lugares publicados",
      sinLugaresSub: "Iremos añadiendo recomendaciones para esta ciudad.",
      sinInformacion: "Aún no hay información publicada",
      masInformacion: "Más información",
      sinTaxis: "Sin taxis adaptados publicados",
      sinTaxisSub: "Estamos recopilando información verificada.",
      sinAparcamiento: "Sin información de aparcamiento PMR",
      sinHoteles: "Sin hoteles publicados",
      opcionesTransporte: "Opciones de transporte habituales para llegar al destino:",
      confirmaTransporte:
        "Consulta siempre la asistencia disponible para personas con movilidad reducida en cada compañía.",
      transporteTren: "Tren",
      transporteMetro: "Metro",
      transporteTranvia: "Tranvía",
      transporteAutobus: "Autobús",
      seccionPendiente: "La información puede cambiar. Confirma siempre con cada lugar antes de tu visita.",
      orientativoSeccion: "La información puede cambiar. Confirma siempre con cada lugar antes de tu visita.",
    },
    consejos: {
      titulo: "Ayuda y consejos",
      subtitulo:
        "Trenes, aviones, hoteles, restaurantes, eSIM y trámites para viajar por Europa con movilidad reducida.",
    },
    consejoDetalle: {
      contenidoPendiente: "Contenido pendiente",
      prontoAnadiremos: "Pronto añadiremos esta información.",
      orientativo:
        "Estos consejos son orientativos. Comprueba siempre las condiciones actualizadas con cada compañía o entidad oficial.",
      temaNoEncontrado: "Tema no encontrado",
    },
    informacion: {
      titulo: "Información",
      subtitulo: "Conoce el proyecto, cómo tratamos tu privacidad y el aviso importante.",
    },
    viajes: {
      titulo: "Viajes en grupo",
      subtitulo: "Viajes organizados pensados para personas con movilidad reducida.",
      activos: "Activos",
      proximos: "Próximos",
      plazasDisponibles: "Plazas disponibles",
      enCola: "En cola",
      listaEspera: "Apuntarme a la lista de espera",
      masInfo: "Más información y reserva",
      proximamente: "Próximamente",
    },
    mas: {
      titulo: "Más",
      subtitulo: "Ayuda, favoritos, búsqueda e información sobre Silleraviajera.",
      ayudaT: "Ayuda y consejos",
      ayudaD: "Tren, avión, hoteles, eSIM y trámites para viajar.",
      favoritosT: "Favoritos",
      favoritosD: "Tus hoteles y viajes guardados.",
      buscarT: "Buscar",
      buscarD: "Buscar destinos, hoteles y viajes.",
      infoT: "Información",
      infoD: "Quién está detrás, privacidad y aviso importante.",
      legalT: "Privacidad y aviso legal",
      legalD: "Política de privacidad, condiciones de uso y contacto.",
    },
    legal: {
      titulo: "Privacidad y aviso legal",
      subtitulo: "Información sobre el uso de la aplicación y tus datos.",
      ultimaActualizacion: "Última actualización: mayo de 2026.",
      privacidadTitulo: "Política de privacidad",
      privacidadParrafos: [
        "En Silleraviajera nos tomamos la privacidad muy en serio. La aplicación está pensada como una herramienta de consulta y no requiere registro ni cuenta de usuario para utilizarla.",
        "Algunos datos se guardan únicamente en tu dispositivo para mejorar tu experiencia, como el idioma elegido, tus favoritos y la confirmación de haber visto la pantalla de bienvenida. Esta información no sale del teléfono y puedes borrarla en cualquier momento desinstalando la app.",
        "Si nos escribes a info@silleraviajera.com, utilizaremos tu correo y los datos que nos facilites únicamente para responderte. No los cederemos a terceros ni los usaremos con fines comerciales.",
        "La app puede enlazar con servicios externos (Google Maps, YouTube, webs de hoteles, taxis o transporte). Cuando abras esos enlaces, te aplicarán las políticas de privacidad de cada uno de esos servicios.",
      ],
      avisoTitulo: "Aviso legal y limitación de responsabilidad",
      avisoParrafos: [
        "La información incluida en esta app está pensada para ayudarte y orientarte, pero las condiciones reales pueden cambiar con el tiempo. Horarios, precios, accesibilidad, asistencia, condiciones de transporte o características de hoteles y espacios pueden modificarse sin previo aviso por parte de terceros.",
        "Por eso, siempre recomendamos confirmar directamente con la empresa, alojamiento, transporte o lugar correspondiente antes de realizar tu viaje o tu reserva.",
        "Silleraviajera no se hace responsable de las decisiones tomadas a partir de la información de la app ni de los servicios prestados por terceros (hoteles, taxis, museos, transporte, etc.).",
      ],
      derechosTitulo: "Tus derechos",
      derechosParrafos: [
        "Como usuario tienes derecho a acceder, rectificar y suprimir los datos personales que nos hayas facilitado, así como a oponerte a su tratamiento. Para ejercer cualquiera de estos derechos puedes escribirnos al correo de contacto.",
      ],
      contactoTitulo: "Contacto",
      contactoTexto:
        "Si tienes cualquier duda sobre privacidad, condiciones de uso o contenido de la app, puedes escribirnos a info@silleraviajera.com",
      contactoBoton: "Escribir a info@silleraviajera.com",
    },
    favoritos: {
      titulo: "Favoritos",
      subtitulo: "Tus hoteles y viajes guardados.",
      vacioTitulo: "Aún no has guardado nada",
      vacioSubtitulo: "Pulsa el corazón en hoteles o viajes para añadirlos aquí.",
      quitar: "Quitar de favoritos",
      badgeHotel: "Hotel",
      badgeViaje: "Viaje",
      badgeDestino: "Destino",
    },
    buscar: {
      titulo: "Buscar",
      placeholder: "Buscar destinos, hoteles, viajes...",
      vacioTitulo: "Busca por destino, hotel o ciudad",
      vacioSubtitulo: "Te mostraremos resultados de hoteles, viajes y destinos.",
      sinResultados: "Sin resultados",
      sinResultadosSub: "Prueba con otra ciudad u hotel.",
      destinos: "Destinos",
      hoteles: "Hoteles",
      viajes: "Viajes",
      activo: "Activo",
      proximo: "Próximo",
    },
    badges: {
      verificado: "Verificado",
      sinVerificar: "Sin verificar",
      aconsejado: "Aconsejado",
      video: "Vídeo",
      verificadoCompleto: "Verificado por Silleraviajera",
    },
    common: {
      favorito: "Añadir a favoritos",
      quitarFav: "Quitar de favoritos",
      proximamenteVideo: "Vídeo próximamente",
      proximamenteVideoSub: "El vídeo de accesibilidad de este hotel se añadirá en breve.",
      verEnYoutube: "Ver en YouTube",
      informacionOrientativa: "Información orientativa",
      sinPlazas: "Sin plazas",
      plazas: "Plazas",
    },
    email: {
      hola: "Hola",
      gracias: "Gracias.",
      deseoHotel: 'Me gustaría recibir información sobre el hotel',
    },
    compartir: {
      boton: "Compartir la app",
      descripcion: "Recomienda Silleraviajera a otras personas.",
      titulo: "Silleraviajera",
      mensaje:
        "Silleraviajera: hoteles accesibles, guías de ciudad y viajes en grupo para personas con movilidad reducida. https://silleraviajera.com",
    },
    destinoNombre: {},
    destinoPais: {},
    paisGenerico: {},
    seccionLabel: {
      "que-ver": "Qué ver / Qué hacer",
      museos: "Museos accesibles",
      teatros: "Teatros",
      "conciertos-festivales": "Conciertos y festivales",
      "donde-comer": "Dónde comer",
      hoteles: "Hoteles",
      "taxis-adaptados": "Taxis adaptados",
      "aparcamiento-pmr": "Aparcamiento PMR público",
      "banos-accesibles": "Baños accesibles",
      "como-llegar": "Cómo llegar",
    },
    consejoTitulo: {},
  },
  en: {
    language: { title: "Language", spanish: "Español", english: "English" },
    tabs: { inicio: "Home", hoteles: "Hotels", guias: "Guides", viajes: "Trips", mas: "More" },
    stack: {
      atras: "Back",
      hoteles: "Hotels",
      hotel: "Hotel",
      guia: "Guide",
      seccion: "Section",
      ayuda: "Help",
      informacion: "Information",
      favoritos: "Favorites",
      buscar: "Search",
    },
    home: {
      etiqueta: "Sillera World",
      titulo: "Travel accessible, with confidence",
      subtitulo:
        "Practical information for travelling with reduced mobility: accessible hotels, destination guides, group trips and useful tips.",
      explorar: "Explore",
      onboardingTitulo: "Welcome to Sillera World",
      onboardingTexto:
        "Practical info for travelling with reduced mobility: hotels, city guides, group trips and tips.",
      onboardingCerrar: "Close",
      betaTitulo: "Beta version",
      betaTexto:
        "You're viewing a beta version of Sillera World. The app will keep growing and improving little by little, with new content, destinations and features designed to help you more and more on your travels.",
      betaCerrar: "Close",
      bloqueHotelesT: "Accessible hotels",
      bloqueHotelesD: "Verified accommodation with video, real accessibility and direct booking.",
      bloqueGuiasT: "Destination guides",
      bloqueGuiasD: "What to see, where to eat, adapted transport and accessible services.",
      bloqueViajesT: "Group trips",
      bloqueViajesD: "Organised trips designed for people with reduced mobility.",
      bloqueConsejosT: "Help and tips",
      bloqueConsejosD: "Train, plane, hotels, eSIM and paperwork for travelling around Europe.",
    },
    bienvenida: { entrar: "Enter", porSilleraviajera: "Original idea by Silleraviajera" },
    hoteles: {
      titulo: "Accessible hotels",
      subtitulo: "Pick a destination to see the accessible hotels available.",
      mapaInternacional: "International hotels map",
      mapaNacional: "Spanish hotels map",
      abrirEnMaps: "Open in Google Maps",
      abrir: "Open",
      destinos: "Destinations",
      internacionales: "International",
      nacionales: "Spain",
    },
    hotelDestino: {
      hotelesEn: "Hotels in",
      verificadosLabel: "Verified by Silleraviajera",
      aconsejadosLabel: "Recommended (not verified)",
      sinHoteles: "No hotels published yet",
      prontoHoteles: "We will soon add accessible hotels for this destination.",
      destinoNoEncontrado: "Destination not found",
    },
    hotelFicha: {
      accesibilidad: "Accessibility",
      asiEs: "This is what accessibility really looks like at this hotel",
      reservar: "Book on silleraviajera.com",
      solicitarInfo: "Request information",
      verificadoBadge: "Verified by Silleraviajera",
      aconsejadoBadge: "Recommended · not verified",
      hotelNoEncontrado: "Hotel not found",
      orientativo:
        "Accessibility information may change. Always confirm details directly with the hotel before booking.",
      compartir: "Share hotel",
      disponible: "Available",
      compartirMensaje: "{nombre} — {ciudad}, {pais}\n\nAccessible hotel on Silleraviajera.\nhttps://silleraviajera.com",
    },
    guias: {
      titulo: "Accessible guides",
      subtitulo: "Practical city information: what to see, where to eat, adapted transport and more.",
      destinos: "Destinations",
      verDetalles: "View details",
      pendienteInfo: "Information pending",
      orientativo:
        "Guides are gradually expanded with verified information. We always recommend confirming services and opening hours before your trip.",
      destinoNoEncontrado: "Destination not found",
      mapaAccesible: "Accessible map",
      abrirMaps: "Open in Google Maps",
      abrir: "Open",
      queVer: "What to see",
      queHacer: "What to do",
      sinLugares: "No places published yet",
      sinLugaresSub: "We will keep adding recommendations for this city.",
      sinInformacion: "No information published yet",
      masInformacion: "More information",
      sinTaxis: "No adapted taxis published",
      sinTaxisSub: "We are gathering verified information.",
      sinAparcamiento: "No accessible parking information",
      sinHoteles: "No hotels published",
      opcionesTransporte: "Common transport options to reach the destination:",
      confirmaTransporte: "Always check the assistance available for people with reduced mobility with each company.",
      transporteTren: "Train",
      transporteMetro: "Metro",
      transporteTranvia: "Tram",
      transporteAutobus: "Bus",
      seccionPendiente: "Information may change. Always confirm with each place before your visit.",
      orientativoSeccion: "Information may change. Always confirm with each place before your visit.",
    },
    consejos: {
      titulo: "Help and tips",
      subtitulo: "Trains, planes, hotels, restaurants, eSIM and paperwork for travelling around Europe with reduced mobility.",
    },
    consejoDetalle: {
      contenidoPendiente: "Content pending",
      prontoAnadiremos: "We will add this information soon.",
      orientativo:
        "These tips are for guidance. Always check up-to-date conditions with each company or official body.",
      temaNoEncontrado: "Topic not found",
    },
    informacion: {
      titulo: "Information",
      subtitulo: "Learn about the project, how we handle your privacy, and the important notice.",
    },
    viajes: {
      titulo: "Group trips",
      subtitulo: "Organised trips designed for people with reduced mobility.",
      activos: "Active",
      proximos: "Upcoming",
      plazasDisponibles: "Available spots",
      enCola: "On waitlist",
      listaEspera: "Join the waiting list",
      masInfo: "More information and booking",
      proximamente: "Coming soon",
    },
    mas: {
      titulo: "More",
      subtitulo: "Help, favourites, search and information about Silleraviajera.",
      ayudaT: "Help and tips",
      ayudaD: "Train, plane, hotels, eSIM and travel paperwork.",
      favoritosT: "Favourites",
      favoritosD: "Your saved hotels and trips.",
      buscarT: "Search",
      buscarD: "Search destinations, hotels and trips.",
      infoT: "Information",
      infoD: "Who is behind it, privacy and important notice.",
      legalT: "Privacy and legal notice",
      legalD: "Privacy policy, terms of use and contact.",
    },
    legal: {
      titulo: "Privacy and legal notice",
      subtitulo: "Information about using the app and your data.",
      ultimaActualizacion: "Last updated: May 2026.",
      privacidadTitulo: "Privacy policy",
      privacidadParrafos: [
        "At Silleraviajera we take privacy very seriously. The app is designed as a reference tool and does not require registration or a user account.",
        "Some data is stored only on your device to improve your experience, such as the chosen language, your favourites and the confirmation that you have seen the welcome screen. This information never leaves your phone and you can delete it at any time by uninstalling the app.",
        "If you write to info@silleraviajera.com, we will use your email and any details you provide solely to reply to you. We will not share them with third parties or use them for commercial purposes.",
        "The app may link to external services (Google Maps, YouTube, hotel, taxi or transport websites). When you open those links, the privacy policy of each service will apply.",
      ],
      avisoTitulo: "Legal notice and limitation of liability",
      avisoParrafos: [
        "The information in this app is intended to help and orient you, but real conditions can change over time. Hours, prices, accessibility, assistance, transport conditions or features of hotels and venues may be modified without notice by third parties.",
        "For that reason, we always recommend confirming directly with the company, accommodation, transport or venue before your trip or booking.",
        "Silleraviajera is not responsible for decisions made based on the information in the app or for services provided by third parties (hotels, taxis, museums, transport, etc.).",
      ],
      derechosTitulo: "Your rights",
      derechosParrafos: [
        "As a user, you have the right to access, rectify and delete the personal data you have provided to us, as well as to object to its processing. To exercise any of these rights you can write to our contact email.",
      ],
      contactoTitulo: "Contact",
      contactoTexto:
        "If you have any questions about privacy, terms of use or app content, you can write to info@silleraviajera.com",
      contactoBoton: "Write to info@silleraviajera.com",
    },
    favoritos: {
      titulo: "Favourites",
      subtitulo: "Your saved hotels and trips.",
      vacioTitulo: "You haven't saved anything yet",
      vacioSubtitulo: "Tap the heart on hotels or trips to add them here.",
      quitar: "Remove from favourites",
      badgeHotel: "Hotel",
      badgeViaje: "Trip",
      badgeDestino: "Destination",
    },
    buscar: {
      titulo: "Search",
      placeholder: "Search destinations, hotels, trips...",
      vacioTitulo: "Search by destination, hotel or city",
      vacioSubtitulo: "We will show results from hotels, trips and destinations.",
      sinResultados: "No results",
      sinResultadosSub: "Try another city or hotel.",
      destinos: "Destinations",
      hoteles: "Hotels",
      viajes: "Trips",
      activo: "Active",
      proximo: "Upcoming",
    },
    badges: {
      verificado: "Verified",
      sinVerificar: "Not verified",
      aconsejado: "Recommended",
      video: "Video",
      verificadoCompleto: "Verified by Silleraviajera",
    },
    common: {
      favorito: "Add to favourites",
      quitarFav: "Remove from favourites",
      proximamenteVideo: "Video coming soon",
      proximamenteVideoSub: "The accessibility video for this hotel will be added shortly.",
      verEnYoutube: "Watch on YouTube",
      informacionOrientativa: "Guidance information",
      sinPlazas: "No spots",
      plazas: "Spots",
    },
    email: {
      hola: "Hello",
      gracias: "Thank you.",
      deseoHotel: "I would like to receive information about the hotel",
    },
    compartir: {
      boton: "Share the app",
      descripcion: "Recommend Silleraviajera to others.",
      titulo: "Silleraviajera",
      mensaje:
        "Silleraviajera: accessible hotels, city guides and group trips for people with reduced mobility. https://silleraviajera.com",
    },
    destinoNombre: {
      amsterdam: "Amsterdam",
      berlin: "Berlin",
      brujas: "Bruges",
      edimburgo: "Edinburgh",
      gante: "Ghent",
      londres: "London",
      munich: "Munich",
      oslo: "Oslo",
      roma: "Rome",
      tromso: "Tromsø",
      madrid: "Madrid",
      barcelona: "Barcelona",
      valencia: "Valencia",
      valladolid: "Valladolid",
      vitoria: "Vitoria",
      pamplona: "Pamplona",
      cordoba: "Córdoba",
    },
    destinoPais: {
      amsterdam: "Netherlands",
      berlin: "Germany",
      brujas: "Belgium",
      edimburgo: "United Kingdom",
      gante: "Belgium",
      londres: "United Kingdom",
      munich: "Germany",
      oslo: "Norway",
      roma: "Italy",
      tromso: "Norway",
      madrid: "Spain",
      barcelona: "Spain",
      valencia: "Spain",
      valladolid: "Spain",
      vitoria: "Spain",
      pamplona: "Spain",
      cordoba: "Spain",
    },
    paisGenerico: {
      "Países Bajos": "Netherlands",
      "Bélgica": "Belgium",
      "Reino Unido": "United Kingdom",
      "Alemania": "Germany",
      "Noruega": "Norway",
      "Italia": "Italy",
      "España": "Spain",
    },
    seccionLabel: {
      "que-ver": "What to see / What to do",
      museos: "Accessible museums",
      teatros: "Theatres",
      "conciertos-festivales": "Concerts and festivals",
      "donde-comer": "Where to eat",
      hoteles: "Hotels",
      "taxis-adaptados": "Adapted taxis",
      "aparcamiento-pmr": "Public accessible parking",
      "banos-accesibles": "Accessible toilets",
      "como-llegar": "How to get there",
    },
    consejoTitulo: {
      "tren-nacional": "How to travel by train within the country with reduced mobility",
      "tren-internacional": "How to travel by train internationally",
      avion: "How to travel by plane",
      "hotel-accesible": "How to find an accessible hotel",
      "restaurante-accesible": "How to find an accessible restaurant",
      "tarjeta-sanitaria-europea": "How to apply for the European Health Insurance Card",
      "documentacion-tramites": "Documentation and paperwork to travel around Europe",
      "esim-datos-moviles": "How to travel without running out of mobile data using an eSIM",
      "tarjeta-dorada": "How to apply for Renfe's Tarjeta Dorada",
    },
  },
};

export function useUi(lang: Lang): Dict {
  return ui[lang];
}
