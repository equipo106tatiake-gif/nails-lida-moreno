# Nails Lida Moreno — Landing Page Profesional

Landing page profesional, elegante, moderna y de alta conversión diseñada y desarrollada para **Nails Lida Moreno**, especialista en manicura, pedicura y cuidado estético de uñas en Medellín, Antioquia, Colombia.

Inspirada en el estilo editorial de estudios de uñas de alta gama (referencia Maison Nails): espacios limpios, tipografía refinada, fotografías protagonistas y una experiencia directa de reserva vía WhatsApp.

---

## 1. Tecnologías Utilizadas

- **React 19** + **TypeScript**
- **Vite 8** (Empaquetador ultrarrápido)
- **Tailwind CSS 4** con paleta de colores personalizada y tipografía serif editorial (`Playfair Display` + `Plus Jakarta Sans`)
- **Lucide React** (Iconografía limpia y accesible)
- **Node Test Runner** (`node:test`) para pruebas unitarias de lógica pura

---

## 2. Paleta de Colores y Estilo Visual

- **Fondo lila claro**: `#F6F1FA`
- **Rosa pastel**: `#E8C9D7`
- **Lila principal**: `#B99AD6`
- **Malva oscuro / Botones destacados**: `#80618F`
- **Malva profundo**: `#583F63`
- **Blanco cálido**: `#FFFEFC`
- **Texto principal**: `#352D38`
- **Texto secundario**: `#6F6672`

---

## 3. Catálogo de los 8 Servicios Confirmados

1. **Manicura tradicional**
2. **Manicura semipermanente**
3. **Uñas acrílicas esculpidas**
4. **Forrado de acrílico**
5. **Base rubber + semipermanente**
6. **Pedicura semipermanente**
7. **Decoración adicional**
8. **Retiro de esmalte semipermanente**

Todos los precios están gestionados mediante la constante `PRECIO_PENDIENTE` en `src/data/businessData.ts`. En la interfaz pública se muestra automáticamente como **"Consultar precio"** sin inventar tarifas ni exhibir marcadores técnicos.

---

## 4. Instrucciones para Ejecutar y Probar Localmente

### Requisitos previos
- Node.js versión 18 o superior.
- npm (o pnpm / bun).

### Instalación
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

La aplicación se abrirá en `http://localhost:3000`.

### Ejecutar pruebas unitarias
```bash
npx tsx --test src/utils/pricing.test.ts src/utils/whatsapp.test.ts
```

### Compilar para producción
```bash
npm run build
```

---

## 5. Guía para la Propietaria: Cómo Actualizar Datos

Toda la información configurable del negocio está centralizada en un único archivo:
👉 **`src/data/businessData.ts`**

### A. Para actualizar los precios de los servicios:
Abre `src/data/businessData.ts` y localiza el array `SERVICES_DATA`.
Cambia `price: PRECIO_PENDIENTE` por el valor numérico en pesos colombianos.
*Ejemplo:*
```typescript
{
  id: 'manicura-semipermanente',
  name: 'Manicura semipermanente',
  category: 'Manicura',
  price: 45000, // <-- Actualizado a 45.000 COP
  ...
}
```
Automáticamente la página mostrará `$ 45.000` con formato de moneda.

### B. Para actualizar el número de WhatsApp o Instagram:
En el objeto `BUSINESS_INFO` de `src/data/businessData.ts`:
```typescript
export const BUSINESS_INFO = {
  name: 'Nails Lida Moreno',
  phoneDisplay: '310 523 9190',
  phoneRaw: '3105239190', // 10 dígitos sin espacios ni guiones
  instagramUser: 'nails_lidamoreno',
  ...
};
```

### C. Para cambiar fotografías:
Coloca las imágenes nuevas en `src/assets/images/` y actualiza la importación en `src/data/businessData.ts`.

---

## 6. Información Pendiente por Proporcionar por Lida Moreno

Para completar futuras versiones de la página, los siguientes datos pueden ser suministrados por la propietaria cuando lo desee:
1. **Tarifas exactas** de cada uno de los 8 servicios (actualmente muestran "Consultar precio").
2. **Horarios de atención habituales** (días de la semana y franjas horarias).
3. **Dirección física exacta** o sector de atención fija (si desea habilitar el mapa de Google Maps).
4. **Zonas o barrios específicos de cobertura** para el servicio a domicilio en Medellín.
5. **Años de experiencia y certificaciones profesionales** de Lida para complementar su biografía.
6. **Testimonios y reseñas reales de clientas** (la sección se encuentra preparada pero desactivada para respetar la veracidad).

---

## 7. Pruebas Manuales de Verificación

1. **Botón Principal de Agendar**: Haz clic en "Agendar mi cita" en el encabezado, hero o pie de página. Debe abrir WhatsApp (`https://wa.me/573105239190`) con el mensaje prellenado codificado correctamente.
2. **Tarjetas de Servicio**: Haz clic en "Consultar por WhatsApp" en cualquier servicio (ej. "Manicura semipermanente"). Debe abrir WhatsApp con el mensaje específico de ese servicio.
3. **Filtros de Categoría**: Haz clic en "Acrílicas & Rubber" o "Pedicura & Cuidados". La lista debe filtrarse instantáneamente.
4. **Visor de Galería (Lightbox)**: Haz clic sobre cualquier foto de la galería. Debe abrirse el modal en pantalla completa con opciones para navegar con flechas o teclado (Esc para cerrar) y botón directo para pedir ese diseño por WhatsApp.
5. **Acordeón de Preguntas Frecuentes**: Haz clic en cualquier pregunta para expandir o contraer la respuesta con animación suave y soporte accesible ARIA.
6. **Navegación Móvil**: En pantallas pequeñas, abre el menú hamburguesa, verifica que los enlaces naveguen sin desbordamiento horizontal y que el botón flotante de WhatsApp no obstruya contenido.
