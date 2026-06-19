# Sillera World (Silleraviajera)

App de viajes accesibles para personas con movilidad reducida. Proyecto Expo
(React Native) independiente, listo para ejecutar y compilar fuera de Replit.

## Requisitos

- Node.js 20 o superior
- npm (o pnpm / yarn)
- App **Expo Go** en tu móvil (para probar) o un Mac/Android Studio para compilar nativo

## Probar la app (modo desarrollo)

```bash
npm install
npx expo start
```

Se abrirá un código QR en la terminal:

- **iPhone:** ábrelo con la cámara y se abrirá en Expo Go.
- **Android:** escanéalo desde la app Expo Go.

Aquí el gesto de "deslizar para volver atrás" funciona como app nativa real,
además del botón "‹ Atrás" de cada pantalla.

## Compilar una app nativa instalable (EAS Build)

Para generar un `.ipa` (iOS) o `.apk`/`.aab` (Android) instalable de verdad:

```bash
npm install -g eas-cli
eas login            # crea una cuenta gratuita en expo.dev si no tienes
eas build:configure
eas build --platform ios       # o: --platform android
```

`eas.json` ya está incluido con perfiles de `development`, `preview` y `production`.

## Estructura

- `app/` — pantallas y navegación (expo-router)
- `components/` — componentes reutilizables
- `contexts/`, `hooks/`, `i18n/`, `data/`, `utils/`, `constants/` — lógica y contenido
- `assets/` — imágenes, fuentes y traducciones (es / en)

## Notas

- Idiomas: Español e Inglés (ver `assets/locales/`).
- No requiere servidor ni base de datos: todo el contenido viaja dentro de la app.
