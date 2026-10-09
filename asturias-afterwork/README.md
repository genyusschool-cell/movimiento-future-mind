# AsturiasAfterWork 2026 · Web de inscripción

Web estática. No necesita build.

## Publicar en Vercel
1. Sube esta carpeta a un repositorio de GitHub. Tiene que ser **privado** (ver nota).
2. En Vercel: Add New → Project → importa el repo.
3. Framework Preset: **Other**. Build Command: vacío. Output Directory: `./` (raíz).
4. Deploy.

## Nota sobre Slack
El webhook de Slack va dentro de `index.html`. Si el repositorio es público, Slack lo detecta y lo desactiva automáticamente, y dejaríais de recibir avisos. Por eso el repositorio tiene que ser privado.

## Conexiones
- Inscripciones → Google Sheets + email: Apps Script (URL dentro de `index.html`).
- Avisos → Slack webhook.
- Pago → Stripe (el enlace va en el email de confirmación).
