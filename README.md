# Omar Chapas - Catálogo Web

## 📁 Estructura de archivos

```
omar-chapas/
├── index.html              (tu archivo HTML principal, renombrá omar-chapas-catalog.html)
├── productos.json          (base de datos de productos)
├── logo-omar-chapas.png    (logo en el header)
├── taller-omar-chapas.jpg  (foto del hero)
└── images/                 (carpeta con fotos de productos)
    ├── chapa-trapezoidal.jpg
    ├── chapa-sinusoidal.jpg
    ├── chapa-lisa.jpg
    ├── canaletas.jpg
    ├── caños-bajada.jpg
    ├── cumbreras.jpg
    ├── babetas.jpg
    └── accesorios.jpg
```

## 🚀 Cómo usar

### 1. Preparar archivos
- Renombrá `omar-chapas-catalog.html` a `index.html`
- Poné todos los archivos en la misma carpeta
- Creá la carpeta `images/` y poné ahí las fotos de los productos

### 2. Agregar fotos de productos
Las fotos deben estar en la carpeta `images/` con estos nombres:
- `chapa-trapezoidal.jpg`
- `chapa-sinusoidal.jpg`
- `chapa-lisa.jpg`
- `canaletas.jpg`
- `caños-bajada.jpg`
- `cumbreras.jpg`
- `babetas.jpg`
- `accesorios.jpg`

**Recomendaciones para las fotos:**
- Formato: JPG o PNG
- Resolución recomendada: 800x600px (aprox)
- Peso máximo: 500KB por foto
- Calidad: 80-85% (para web)

### 3. Agregar más productos
Para agregar un producto nuevo, editá `productos.json`:

```json
{
  "id": "producto-nuevo",
  "nombre": "Nombre del producto",
  "categoria": "chapas",  // opciones: chapas, zingueria, accesorios
  "descripcion": "Descripción breve del producto",
  "imagen": "images/nombre-foto.jpg",
  "especificaciones": [
    "Primera característica",
    "Segunda característica",
    "Tercera característica"
  ]
}
```

### 4. Modificar productos existentes
Abrí `productos.json` y editá los datos que necesites:
- Cambiar nombre
- Modificar descripción
- Actualizar especificaciones
- Cambiar la ruta de la imagen

### 5. Subir al servidor
Subí TODOS los archivos manteniendo la estructura:
- Todos los archivos HTML, JSON e imágenes principales en la raíz
- Carpeta `images/` con todas las fotos de productos

## 🎨 Ventajas de esta estructura

✅ **Fácil de actualizar** - Solo editás el JSON, no tocás el HTML
✅ **Mejor organización** - Fotos separadas por carpeta
✅ **Escalable** - Agregás productos sin tocar código
✅ **Profesional** - Fotos reales de tus productos en buena calidad
✅ **Rápido** - Modificás precios/textos en segundos

## 🔧 Solución de problemas

**Las fotos no se ven:**
- Verificá que la carpeta `images/` esté en el mismo nivel que index.html
- Verificá que los nombres de las fotos coincidan EXACTAMENTE con productos.json
- Los nombres distinguen mayúsculas/minúsculas

**Los productos no cargan:**
- Verificá que `productos.json` esté en la misma carpeta que index.html
- Abrí la consola del navegador (F12) para ver errores
- Verificá que el JSON tenga la estructura correcta (sin comas de más)

**Quiero cambiar el logo:**
- Reemplazá `logo-omar-chapas.png` manteniendo el mismo nombre
- O cambiá el nombre en el HTML donde dice: `<img src="logo-omar-chapas.png"`

## 📸 Consejos para las fotos

1. **Iluminación** - Sacá las fotos con buena luz natural
2. **Fondo limpio** - Fondo blanco o neutro
3. **Enfoque** - Que se vea bien el producto
4. **Ángulo** - Mostrar el producto completo
5. **Consistencia** - Todas las fotos con similar estilo

## 💡 Próximos pasos recomendados

- [ ] Agregar fotos reales de todos los productos
- [ ] Agregar teléfono y email en la sección de contacto
- [ ] Optimizar fotos antes de subir (comprimir)
- [ ] Testear en celular y desktop
- [ ] Agregar más productos si es necesario
