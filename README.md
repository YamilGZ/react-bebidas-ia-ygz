# 🍹 React Bebidas - Aplicación de Recetas de Bebidas con IA

Aplicación web moderna para buscar y generar recetas de bebidas utilizando React, TypeScript y servicios de IA. Permite buscar recetas desde TheCocktailDB API y generar nuevas recetas personalizadas utilizando inteligencia artificial a través de OpenRouter.

## 📋 Descripción del Proyecto

Esta aplicación es una plataforma completa para amantes de las bebidas y cocteles que combina dos fuentes principales de recetas:

1. **Búsqueda de Recetas**: Permite buscar recetas de bebidas existentes utilizando categorías e ingredientes a través de TheCocktailDB API.
2. **Generación con IA**: Utiliza modelos de lenguaje de OpenRouter (como GPT-OSS, Llama, DeepSeek, etc.) para generar recetas personalizadas de bebidas según las preferencias del usuario.

### Características principales:

- 🔍 **Búsqueda de recetas** por categoría e ingredientes
- 🤖 **Generación de recetas con IA** usando modelos de lenguaje avanzados
- ⭐ **Sistema de favoritos** para guardar recetas favoritas
- 📱 **Diseño responsive** optimizado para todos los dispositivos
- 🎨 **Interfaz moderna** con Tailwind CSS
- 💾 **Gestión de estado** eficiente con Zustand
- 🔄 **Navegación fluida** con React Router

## 🛠️ Tecnologías Utilizadas

### Frontend:
- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite 7** - Herramienta de construcción rápida para desarrollo frontend
- **React Router DOM 7** - Enrutamiento para aplicaciones React

### Estilos:
- **Tailwind CSS 4** - Framework CSS utility-first
- **Headless UI** - Componentes UI sin estilos predefinidos
- **Heroicons** - Biblioteca de iconos SVG

### Estado y Gestión de Datos:
- **Zustand 5** - Biblioteca de gestión de estado ligera y escalable
- **Axios** - Cliente HTTP para realizar peticiones API

### IA y Validación:
- **AI SDK 5** - SDK para integrar modelos de IA
- **OpenRouter AI SDK Provider** - Proveedor para usar modelos de OpenRouter
- **Zod 4** - Biblioteca de validación de esquemas TypeScript-first

### Desarrollo:
- **ESLint** - Linter para JavaScript/TypeScript
- **TypeScript ESLint** - Linter específico para TypeScript
- **SWC** - Compilador rápido para React

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ y npm (o yarn/pnpm)
- Cuenta en [OpenRouter](https://openrouter.ai/) para obtener una API key (opcional, solo si quieres usar la generación con IA)

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/YamilGZ/react-bebidas-ia-ygz.git
cd react-bebidas-ia-ygz
```

### Paso 2: Instalar dependencias

```bash
npm install
```

### Paso 3: Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
VITE_OPENROUTER_KEY=tu_api_key_de_openrouter
```

**Nota**: Si no tienes una API key de OpenRouter, puedes usar modelos gratuitos pero necesitarás registrarte en [OpenRouter](https://openrouter.ai/) para obtener una clave API. La funcionalidad de búsqueda de recetas funciona sin esta clave.

### Paso 4: Ejecutar la aplicación

#### Modo de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne automáticamente).

#### Construir para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

#### Vista previa de la build de producción:

```bash
npm run preview
```

## 🚀 Uso de la Aplicación

1. **Página de Inicio (/)**:
   - Busca recetas usando el formulario de búsqueda
   - Selecciona una categoría y un ingrediente
   - Visualiza las recetas encontradas en tarjetas

2. **Página de Favoritos (/favoritos)**:
   - Ve todas las recetas que has marcado como favoritas
   - Accede rápidamente a tus recetas preferidas

3. **Generar con IA (/generate)**:
   - Ingresa una descripción de la bebida que deseas (ej: "Bebida con Tequila y Fresa")
   - La IA generará una receta personalizada usando modelos de lenguaje avanzados

## 📁 Estructura del Proyecto

```
react-bebidas-typescript-ai/
├── public/              # Archivos estáticos
│   ├── bg.jpg          # Imagen de fondo
│   └── logo.svg        # Logo de la aplicación
├── src/
│   ├── components/     # Componentes reutilizables
│   │   ├── DrinkCard.tsx
│   │   ├── Header.tsx
│   │   ├── Modal.tsx
│   │   └── Notification.tsx
│   ├── layouts/        # Layouts de la aplicación
│   │   └── Layout.tsx
│   ├── libs/           # Configuraciones y librerías
│   │   └── ai.ts       # Configuración de OpenRouter
│   ├── services/       # Servicios para API
│   │   ├── AIService.ts
│   │   └── RecipeService.ts
│   ├── stores/         # Estado global con Zustand
│   │   ├── aiSlice.ts
│   │   ├── favoritesSlice.ts
│   │   ├── notificationSlice.ts
│   │   ├── recipeSlice.ts
│   │   └── useAppStore.ts
│   ├── types/          # Tipos TypeScript
│   │   └── index.ts
│   ├── utils/          # Utilidades y validaciones
│   │   └── recipes-schema.ts
│   ├── views/          # Páginas/Views
│   │   ├── FavoritesPage.tsx
│   │   ├── GenerateAI.tsx
│   │   └── IndexPage.tsx
│   ├── index.css       # Estilos globales
│   ├── main.tsx        # Punto de entrada
│   └── router.tsx      # Configuración de rutas
├── .env                # Variables de entorno (crear manualmente)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 🌐 APIs Utilizadas

- **TheCocktailDB**: API gratuita para obtener recetas de bebidas
  - Endpoints utilizados:
    - `/list.php?c=list` - Lista de categorías
    - `/filter.php` - Filtrar por categoría e ingrediente
    - `/lookup.php` - Obtener receta por ID

- **OpenRouter**: Plataforma para acceder a modelos de IA
  - Modelo por defecto: `openai/gpt-oss-20b:free`
  - Otros modelos disponibles en `src/services/AIService.ts`

## 🤖 Configuración del Servicio de IA (AIService)

### Descripción del Servicio

El archivo `src/services/AIService.ts` contiene la configuración para generar recetas de bebidas usando modelos de IA a través de OpenRouter. El servicio utiliza `streamText` de AI SDK para generar respuestas en tiempo real.

### Estructura Actual

```typescript
// src/services/AIService.ts
export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('openai/gpt-oss-20b:free'),
            prompt,
            system: 'Eres un bartender que tiene 50 años de experiencia...',
        })
        return result.textStream
    }
}
```

**Parámetros configurables:**
- `model`: Modelo de IA a utilizar (ver sección de modelos disponibles)
- `prompt`: Descripción de la bebida que el usuario quiere generar
- `system`: Instrucciones del sistema que definen el comportamiento del asistente
- `temperature`: (Opcional) Controla la aleatoriedad de las respuestas (0-1)

### Modelos Disponibles

El archivo incluye varios modelos comentados que puedes usar como alternativas. El modelo actualmente activo es:

- ✅ **Activo**: `openai/gpt-oss-20b:free`

**Modelos alternativos disponibles** (comentados en el código):

- `meta-llama/llama-3.2-3b-instruct:free` - Modelo Llama 3.2 de Meta
- `meituan/longcat-flash-chat:free` - Modelo rápido de Meituan
- `deepseek/deepseek-chat-v3.1:free` - Modelo DeepSeek
- `google/gemma-3n-e2b-it:free` - Modelo Gemma de Google

### Cómo Cambiar de Modelo

Si encuentras errores como `404` o `No endpoints found`, significa que el modelo no está disponible. Para cambiar de modelo:

1. Abre el archivo `src/services/AIService.ts`
2. Comenta el modelo actual (agrega `//` al inicio de la línea)
3. Descomenta uno de los modelos alternativos (quita `//` del inicio)
4. Guarda el archivo y recarga la aplicación

**Ejemplo:**

```typescript
// Antes (modelo con error)
model: openrouter('meta-llama/llama-3.3-8b-instruct:free'),

// Después (cambiar a modelo alternativo)
//model: openrouter('meta-llama/llama-3.3-8b-instruct:free'), // Modelo no disponible
model: openrouter('openai/gpt-oss-20b:free'),
```

### Verificar Modelos Disponibles

Los modelos disponibles en OpenRouter pueden cambiar con el tiempo. Para verificar qué modelos están disponibles:

1. Visita [OpenRouter Models](https://openrouter.ai/models)
2. Filtra por modelos gratuitos (busca el tag `:free`)
3. Copia el nombre exacto del modelo
4. Actualiza el código en `AIService.ts`

### Solución de Problemas Comunes

#### Error: `404 - No endpoints found for [modelo]`

**Causa**: El modelo especificado no está disponible en OpenRouter.

**Solución**:
1. Verifica que el nombre del modelo sea correcto
2. Cambia a uno de los modelos alternativos comentados
3. Consulta [OpenRouter Models](https://openrouter.ai/models) para modelos actualizados

#### Error: `AI_APICallError`

**Causa**: Problema con la API key o el modelo no está disponible.

**Soluciones**:
1. Verifica que tu `.env` contenga `VITE_OPENROUTER_KEY` con una clave válida
2. Asegúrate de que la API key tenga permisos para usar modelos gratuitos
3. Prueba con otro modelo de la lista de alternativas

#### Error: `Failed to load resource: 404`

**Causa**: El endpoint del modelo no existe o fue descontinuado.

**Solución**: Cambia a un modelo diferente usando los pasos descritos arriba.

### Personalizar el Prompt del Sistema

Puedes modificar el comportamiento del asistente cambiando el parámetro `system`:

```typescript
system: 'Eres un bartender que tiene 50 años de experiencia y le sirvió una bebida a James Bond',
```

**Ejemplos de prompts alternativos:**
- `'Eres un mixólogo profesional especializado en cócteles clásicos'`
- `'Eres un bartender creativo que inventa recetas innovadoras'`
- `'Eres un experto en bebidas sin alcohol'`

### Ajustar la Temperatura (Opcional)

Para controlar qué tan creativas o deterministas son las respuestas:

```typescript
temperature: 1,  // Más creativo (0-1, por defecto no se especifica)
temperature: 0,  // Más determinista
```

Descomenta la línea `//temperature: 1,` y ajusta el valor según necesites.

## 📝 Notas Adicionales

- La aplicación utiliza lazy loading para optimizar el rendimiento
- El estado se gestiona centralmente con Zustand
- Las validaciones se realizan con Zod para mayor seguridad de tipos
- El diseño es completamente responsive usando Tailwind CSS
- Los modelos de IA pueden cambiar su disponibilidad, consulta regularmente OpenRouter para actualizaciones

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, crea un issue o un pull request si deseas mejorar el proyecto.


---

**Desarrollado con ❤️ usando React, TypeScript y IA**
