# Movimiento Future Minds — Sistema de diseño

Sistema de diseño derivado **íntegramente** del *Manual de Marca de Movimiento Future Minds* (documento de 40 páginas producido por Timing Studio). No contiene ningún color, tipografía, forma ni recurso que no aparezca en ese manual.

> **Regla operativa impuesta por el cliente:** está terminantemente prohibido salirse de la estructura del brand book. No se usa negro de fondo ni ningún elemento que no esté en el PDF.

---

## 1. Contexto de marca

Movimiento Future Minds es un movimiento de transformación educativa. Se define como «la chispa que enciende el futuro de la educación»: pionero, innovador y líder en llevar el aprendizaje más allá de los límites tradicionales.

- **Arquetipo predominante:** Rebelde (referencia declarada en el manual: Han Solo). Espíritu desafiante y disruptivo, cuestiona el status quo educativo.
- **Arquetipo secundario:** Explorador (referencia declarada: Indiana Jones). Curiosidad, descubrimiento, rutas menos exploradas.
- **Lema:** *Redefiniendo reglas, liberando potencial.*
- **Insight:** *Despertando mentes, creando futuros.*
- **Audiencias:** instituciones educativas progresistas · educadores visionarios · estudiantes curiosos y desafiantes · padres y familias comprometidos.
- **Valores:** innovación educativa, empoderamiento, colaboración y comunidad, inclusión y diversidad, sostenibilidad y responsabilidad social.
- **Idiomas:** español castellano e inglés.

### Superficies que la marca produce

El capítulo 3 del manual («Uso de marca») documenta cuatro familias de aplicación. Son los productos que este sistema recrea:

| Superficie | Páginas del manual | Recreación en este sistema |
|---|---|---|
| Comunicación digital — sitio web y presentaciones | p.38 | `ui_kits/web/` y `slides/` |
| Redes sociales — posts y feed de Instagram | p.36 | `ui_kits/social/` |
| Miniaturas de YouTube (reglas explícitas) | p.37 | `ui_kits/social/` |
| Comunicación impresa — cartel, banner enrollable, cuaderno, merchandising | p.35, p.39 | no recreado (ver *Pendientes*) |

### Fuentes recibidas

- `uploads/BrandBook_FutureMind-3.pdf` — Manual de Marca, 40 páginas. **Única fuente utilizada.**
- Se mencionó también una carpeta `uploads/drive-download-20260916T104032Z-1-001/` procedente de Drive, pero **no llegó al proyecto**; no se ha usado nada de ella.
- Contacto del estudio que firma el manual: timingstudio.com · Tatiana · hola@timingstudio.com.

No se recibió repositorio de código ni archivo de Figma, así que no existe un inventario de componentes de origen: los componentes de este sistema son un conjunto estándar dimensionado a lo que el manual documenta (ver §6).

---

## 2. Fundamentos de contenido

**Tono.** Audaz y estimulante, con un matiz de desafío constructivo. El objetivo declarado es desafiar el status quo educativo e invitar a la reflexión y a la acción.

**Lenguaje.** Directo y estimulante. Terminología que resuena con innovadores y pioneros en educación.

**Formato.** Preciso y enfocado, con narrativa que destaca casos reales de transformación educativa.

**Gramática y sintaxis (reglas del manual, §1.5).**

- Voz activa, siempre: «Transformamos los métodos de enseñanza», no «los métodos son transformados».
- Preguntas retóricas y declaraciones audaces para provocar pensamiento y discusión: «¿Qué cambiarías mañana en tu aula?».
- Español castellano e inglés, cada uno con sus propias normas gramaticales.

**Persona.** Primera persona del plural — *nosotros* — para hablar del movimiento, y segunda persona — *tú* — para dirigirse al lector. El manual entero está escrito así («Este manual te ayudará a entender…», «En Movimiento Future Minds, creemos…»). Nunca «usted».

**Casing.** Los titulares van en MAYÚSCULAS. Los rótulos de apartado también, con tracking abierto. El texto corrido va en caja normal, con mayúscula inicial de frase. No se usa Title Case inglés en castellano.

**Emoji.** No. El manual no contiene ni un emoji en 40 páginas. Tampoco se usan caracteres unicode como iconos.

**Léxico de marca** (palabras clave del manual, §1.7): innovación · empoderamiento · colaboración · creatividad · curiosidad · flexibilidad · compromiso.

**Frases de marca aprobadas** (literales del manual, no reescribir):

- «Innovación en cada paso del aprendizaje.»
- «Empoderando mentes, transformando educación.»
- «Colaboración para un futuro educativo brillante.»
- «Creatividad como motor de cambio educativo.»
- «Curiosidad que impulsa el descubrimiento y el aprendizaje.»
- «Flexibilidad para adaptarse a cada estilo de aprendizaje.»
- «Compromiso con la excelencia en la educación.»
- «Uniendo mentes / creando futuros.» (titular de las piezas de aplicación)
- «Despertando mentes, creando futuros.» (insight)
- «Redefiniendo reglas, liberando potencial.» (lema)

**Longitudes.** Titular: 2–5 palabras por línea, 2–4 líneas apiladas. Rótulo: 1–3 palabras. Párrafo de pieza gráfica: 2–3 frases. En el manual los bloques largos aparecen sólo en documentación interna, nunca en una pieza de comunicación.

---

## 3. Fundamentos visuales

### 3.1 Color

Paleta cerrada de seis colores primarios (§2.4, p.29). Los valores son los del manual, sin redondeos:

| Nombre | HEX | CMYK | RGB |
|---|---|---|---|
| Rojo | `#E94B4D` | 0, 82, 64, 0 | 233, 74, 76 |
| Lima | `#DCDD3C` | 21, 0, 85, 0 | 220, 221, 60 |
| Naranja | `#F9B44B` | 0, 35, 77, 0 | 249, 180, 75 |
| Turquesa | `#27B4AF` | 72, 0, 37, 0 | 39, 180, 175 |
| Verde | `#C3D66D` | 31, 0, 69, 0 | 195, 214, 109 |
| Gris | `#E0E0E0` | 14, 10, 11, 0 | 224, 224, 224 |

Además, **carbón `#2C2E35`** (muestreado del isotipo y del logotipo en el propio PDF) y **blanco `#FFFFFF`**.

- El **rojo** es el color de encabezamiento: hereda el papel de color principal en el mock de web, en los posts y en las miniaturas.
- El **carbón** es tinta, nunca fondo. No se usa negro (`#000`) en ningún caso.
- Nada de degradados. Nada de colores fuera de la tabla.
- Parejas fondo → tinta aprobadas: rojo→lima · turquesa→lima · lima→carbón · naranja→carbón · verde→carbón · gris→carbón. Sobre rojo y turquesa también se admite blanco.
- Nunca naranja sobre rojo, ni verde sobre lima: el contraste se rompe.

### 3.2 Tipografía

Dos familias, y sólo dos (§2.5, p.30).

- **DIN Alternate Bold** — titulares, rótulos, cifras, rótulos de botón. Siempre en mayúsculas. Interlineado cerrado (0.92) en titular apilado.
- **Poppins** — texto corrido e interfaz. Light 300 para párrafos grandes, Regular 400 para cuerpo, Medium/SemiBold para etiquetas.

El logotipo combina las dos: «Movimiento» en Poppins, «FUTURE MINDS» en DIN Alternate Bold.

Tracking: 0.18em en rótulos de apartado, 0.32em en el tratamiento extremo de portada («M A N U A L  D E  M A R C A»).

Sobre fotografía, el titular lleva **contorno blanco** (regla explícita de la p.37).

**Sustitución de fuente declarada:** no se entregó el binario de DIN Alternate. Es una fuente Monotype con licencia que además viene instalada en macOS/iOS, así que `--font-display` la pide primero por nombre y cae en **Archivo** (Google Fonts) donde no exista. Ver *Pendientes*.

### 3.3 Composición y layout

La unidad de composición es la **banda de color a sangre**. Una pieza se construye apilando bandas de color pleno, alternando saturado y claro, sin márgenes exteriores. El contenido se centra en un contenedor de 1280px con canal de 50px.

El módulo de espaciado es **25px**, derivado del cuadrado de referencia de 25×25px con el que el manual mide el aire del logotipo. El aire de protección es de 50px (75px lateral en la versión horizontal).

Elementos que pisan el margen: en las miniaturas de YouTube la persona fotografiada va siempre a la derecha, **pisando el margen de la pieza**. En los posts y carteles el grafismo se recorta contra el borde.

### 3.4 Fondos y grafismo

- Fondos: color pleno de la paleta, blanco o gris de marca. **Nunca negro, nunca degradado, nunca textura o patrón repetido** — el manual no los usa.
- El recurso de fondo característico es el **isotipo ampliado**, recortado por el borde de la pieza, girado entre −25° y 25°, a **color pleno** (no en opacidad baja, no en gris). Un solo grafismo por pieza; complementa, no domina.
- Fotografía a sangre dentro de bloques de canto vivo.

### 3.5 Fotografía

Estilo vibrante y juvenil, paleta de colores brillantes que transmite energía y positividad (§2.7). Los sujetos son niños y jóvenes; expresiones desde la alegría desenfrenada hasta la reflexión pensativa. Poses naturales y espontáneas. Fondos de estudio de color pleno.

- Temperatura: **cálida y saturada**. Amarillos, naranjas y corales dominan; el turquesa aparece como fondo de estudio.
- **Nunca** blanco y negro. **Nunca** grano. **Nunca** viñeteado ni filtro desaturado.
- Se admite virar la foto a un color de marca (`multiply` al 55%) para integrarla en una banda.

### 3.6 Bordes, radios y sombras

- El sistema es de **canto vivo**: bandas, bloques de texto y recortes fotográficos van a radio 0.
- Redondeo sólo en dos sitios: tarjeta blanca (12px) y botón (cápsula, 999px). Casilla de verificación a 4px.
- Sombra: una sola, suave y neutra — `0 8px 24px rgba(44,46,53,.10)` — y sólo para separar una tarjeta blanca de una banda de color. **Nunca sombra de color, nunca sombra interior.**
- Bordes: línea de 1px en gris de marca para separación fina; 2px en carbón para el trazo fuerte (botón secundario, casillas).
- No hay «gradiente de protección» sobre foto: el manual resuelve la legibilidad con **contorno blanco** en el titular y con **bloques de color plano**, no con velos.

### 3.7 Transparencia y desenfoque

Prácticamente ausentes. Las dos únicas excepciones:

1. El bloque de color plano superpuesto a una foto para virarla (`mix-blend-mode: multiply`, 55%).
2. El velo de carbón al 55% detrás de una ventana modal.

**No se usa desenfoque** (`backdrop-filter`) en ningún caso. No hay cristal, no hay glassmorphism.

### 3.8 Movimiento

El manual no documenta animación — es un manual impreso. Lo que sigue es la extensión mínima coherente con la personalidad «rebelde + explorador», y está declarada como tal:

- Gesto corto y decidido, nunca elástico: curva `cubic-bezier(.2,.7,.25,1)`.
- Entrada de contenido: desplazamiento de 18px hacia arriba + fundido, 640ms.
- Banda de color: barrido horizontal desde el borde, 420ms.
- Sin rebotes, sin parallax, sin animaciones en bucle.

### 3.9 Estados de interacción

- **Hover:** opacidad 0.88. En tarjeta, sombra a `0 14px 34px rgba(44,46,53,.16)`. No se aclara ni oscurece el color: la paleta es cerrada y oscurecer un primario inventa un color nuevo.
- **Press:** escala 0.97.
- **Foco:** contorno de 2px en carbón, desplazado 2px.
- **Deshabilitado:** opacidad 0.40.
- **Enlaces:** rojo de marca con subrayado a 1.5px y desplazamiento de 3px; en hover pasa a `#C93C3E`.
- **Selección de texto:** fondo lima, tinta carbón.

---

## 4. Iconografía

El manual dedica la p.31 a iconografía y muestra una retícula de unos 50 pictogramas **lineales, de trazo fino y uniforme, sin relleno, con remates vivos y esquinas sin redondear**. Cubren categorías cotidianas: herramientas, comida y bebida, ropa, meteorología, tiempo, dispositivos, cámaras y gráficas. No hay un icono de marca propio más allá del isotipo.

**El manual no entrega los archivos del set** — sólo la retícula rasterizada dentro del PDF. No existe fuente de iconos, sprite ni SVG que copiar.

**Sustitución declarada:** este sistema usa **Phosphor Icons en peso `light`**, la coincidencia más próxima disponible en CDN (trazo fino, terminaciones rectas, cobertura de todas las categorías de la p.31). Se carga por CDN y se envuelve en el componente `Icon`:

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css">
```

Reglas de uso:

- Peso `light` siempre; no mezclar pesos en una misma pieza.
- Tamaños 20 / 26 / 34 / 48px. El icono hereda el color del texto, así que sobre una banda de color queda automáticamente en la tinta correcta.
- **Sin emoji. Sin caracteres unicode como iconos.** No está en el manual.
- El isotipo no es un icono: no se usa dentro de una lista de pictogramas ni como viñeta.

---

## 5. Assets

Los archivos de `assets/` se han **extraído del PDF original**, no redibujados. El logotipo es vectorial en el PDF; se ha rasterizado a alta resolución y se ha convertido a PNG con transparencia (las contraformas del isotipo son transparentes, de modo que el fondo se ve a través, tal como muestra la p.25).

```
assets/
  logo-horizontal-{carbon,blanco,rojo,lima,naranja,turquesa,verde}.png   1478×582
  logo-vertical-{…}.png                                                  687×1047
  isotipo-{…}.png                                                       1083×1045
  photography/foto-01…06.png    retratos de estudio sobre fondo de color
  photography/foto-07…11.png    composiciones de marca del manual (foto + grafismo)
```

No se ha dibujado ningún logotipo ni marca a mano. No hay versión SVG del logotipo: el PDF no permite extraerla limpiamente. Ver *Pendientes*.

---

## 6. Componentes

21 componentes en cinco grupos. No se recibió librería de origen, así que el inventario es un conjunto estándar dimensionado a lo que el manual documenta; los seis de `brand/` sí traducen recursos explícitos del manual.

**`components/brand/`** — recursos propios del manual
`Logo` · `Watermark` · `DisplayTitle` · `Eyebrow` · `PhotoBlock` · `ColorBand`

**`components/core/`**
`Button` · `IconButton` · `Icon` · `Card` · `Badge` · `Tag`

**`components/forms/`**
`Input` · `Select` · `Checkbox` · `Radio` · `Switch`

**`components/feedback/`**
`Dialog` · `Toast` · `Tooltip`

**`components/navigation/`**
`Tabs`

Cada directorio tiene su ficha `*.card.html`, y cada componente un `.d.ts` con el contrato de props y un `.prompt.md` con el cuándo y el cómo.

### Añadidos intencionados

- **`Icon`** — envoltorio sobre el set sustituto de iconos. Necesario porque el manual define una iconografía pero no entrega los archivos.
- **`Watermark`, `ColorBand`, `DisplayTitle`, `Eyebrow`, `PhotoBlock`** — no son «componentes» en el manual, sino recursos gráficos (§2.8, §2.5, §2.7). Se han encapsulado porque son el vocabulario con el que se compone cualquier pieza.

---

## 7. Índice del proyecto

| Ruta | Qué es |
|---|---|
| `styles.css` | Punto de entrada único. Sólo `@import`. |
| `tokens/fonts.css` | Carga de webfonts y nota de sustitución de DIN Alternate. |
| `tokens/colors.css` | Paleta primaria, tinta, alias semánticos y parejas de contraste. |
| `tokens/typography.css` | Familias, pesos, escala, interlineado y tracking. |
| `tokens/spacing.css` | Módulo de 25px, aire del logotipo, layout. |
| `tokens/radii.css` | Radios. |
| `tokens/effects.css` | Sombras, bordes, opacidades de interacción. |
| `tokens/motion.css` | Curvas, duraciones, hover y press. |
| `tokens/base.css` | Reseteo mínimo y estilos de enlace. |
| `assets/` | Logotipos, isotipo y fotografía extraídos del manual. |
| `guidelines/` | 22 fichas de fundamentos (color, tipo, espaciado, marca). |
| `components/` | Los 21 componentes, agrupados por concern. |
| `ui_kits/web/` | Sitio web navegable: inicio, programas, metodología, únete. |
| `ui_kits/social/` | Feed y post de Instagram + miniaturas de YouTube. |
| `slides/` | Seis plantillas de diapositiva 1280×720. |
| `templates/presentacion/` | Plantilla de presentación completa (seis diapositivas) para copiar en un proyecto consumidor. |
| `thumbnail.html` | Tile del sistema en el listado de proyectos. |
| `SKILL.md` | Envoltorio para usar este sistema como Agent Skill. |
| `uploads/` | El PDF original. |

### Fichas de fundamentos (`guidelines/`)

`color-primarios` · `color-neutros` · `color-parejas` · `color-prohibido` · `type-display` · `type-body` · `type-escala-display` · `type-escala-texto` · `type-rotulos` · `type-contorno` · `spacing-escala` · `spacing-logo` · `layout-bandas` · `radios` · `sombras` · `movimiento` · `marca-logotipo` · `marca-versiones-color` · `marca-isotipo-colores` · `marca-prohibido` · `marca-grafismo` · `marca-fotografia` · `marca-fotografia-viraje` · `marca-iconografia`

---

## 8. Pendientes

1. **DIN Alternate Bold** — falta el binario. Sustituido por Archivo (Google Fonts) donde la fuente de sistema no esté disponible. Hace falta el `.ttf`/`.woff2` con licencia.
2. **Set de iconos** — el manual muestra la retícula pero no entrega los archivos. Sustituido por Phosphor Light.
3. **Logotipo en SVG** — sólo hay PNG de alta resolución extraído del PDF. Con el `.ai`/`.svg` original el sistema escalaría sin límite.
4. **Carpeta de Drive** — `uploads/drive-download-20260916T104032Z-1-001/` no llegó al proyecto.
5. **Comunicación impresa** — cartel, banner enrollable y merchandising (p.35, p.39) están documentados en el manual pero no recreados como plantilla.
