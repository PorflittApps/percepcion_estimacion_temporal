VERSIÓN 2.0 — Percepción y Estimación Temporal

CAMBIOS PRINCIPALES
1. Logo UC 15% más grande.
2. Ítem de la T corregido:
   - estímulos más largos;
   - mismo botón para iniciar y marcar llegada;
   - la T está rotada 90 grados hacia la derecha.
3. Nuevo Ítem 3:
   - percepción de cambio de pulso;
   - seis trials de 10 segundos con dificultad variable.
4. Último ítem corregido:
   “¿Cuánto tiempo cree que pasó desde el inicio del primer ítem hasta este momento?”
5. El CSV ya no se ofrece al participante.
6. El participante puede descargar un resumen personal en PDF.
7. La app está preparada para enviar la fila completa a Google Sheets mediante Apps Script.

ARCHIVOS PARA SUBIR A GITHUB
Subir a la raíz del repositorio:
- index.html
- test.html
- inicio_test.html
- gracias.html
- styles.css
- app.js
- logo_uc.svg
- logo_cedeti.png
- logo_facultad_educacion_uc.png
- carpeta audios/

GOOGLE SHEETS
El archivo apps_script_google_sheets.gs NO es necesario subirlo a GitHub.
Debe pegarse en Extensiones > Apps Script dentro de una planilla de Google Sheets.

Después de desplegar como Web App, copiar la URL y pegarla en app.js en esta línea:
const GOOGLE_SCRIPT_URL = "";

Si prefieres, puedes pasarme la URL de Apps Script y te devuelvo la versión ya conectada.
