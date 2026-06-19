import * as Linking from "expo-linking";

export function openExternal(url: string) {
  Linking.openURL(url).catch(() => {});
}

export function buildMailto(to: string, subject: string, body: string) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function infoMailtoHotel(nombre: string, contexto?: string) {
  const subject = `Consulta hotel ${nombre} – Silleraviajera`;
  const body = `Hola,\n\nMe gustaría recibir más información sobre el hotel "${nombre}"${contexto ? ` en ${contexto}` : ""}.\n\nGracias.`;
  return buildMailto("info@silleraviajera.com", subject, body);
}
