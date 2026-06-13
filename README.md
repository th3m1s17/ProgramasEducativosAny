# 🎓 Aritmética Interactiva - Suma y Resta

Programa educativo interactivo para practicar suma y resta con números de 1, 2 y 3 cifras. Incluye explicación paso a paso, pistas, estadísticas y retroalimentación con sonidos.

## ✨ Características Principales

### 📱 Interfaz Principal
- **Selección de Dificultad**: Elige entre problemas de 1, 2 o 3 cifras
- **Seleción de Operación**: Suma, Resta o Modo Mixto (aleatorio)
- **Estadísticas en Tiempo Real**: Muestra intentos totales, respuestas correctas y porcentaje
- **Diseño Responsive**: Funciona perfectamente en dispositivos móviles y de escritorio

### 🎯 Características de Problemas

1. **Números Aleatorios**
   - Generación automática según la dificultad
   - Rango ajustado para cada nivel:
     - 1 cifra: 1 a 9
     - 2 cifras: 10 a 99
     - 3 cifras: 100 a 999

2. **Explicación Paso a Paso**
   - Desglose detallado de cómo se resuelve cada operación
   - Muestra cada paso del cálculo de forma clara
   - Botón para mostrar/ocultar pasos
   - Ejemplo para suma de 2 cifras:
     ```
     Sumamos: 45 + 23
     Desglosamos: (40 + 5) + (20 + 3)
     Sumamos decenas: 40 + 20 = 60
     Sumamos unidades: 5 + 3 = 8
     Resultado final: 60 + 8 = 68
     ```

3. **Sistema de Pistas**
   - Proporciona pistas útiles sin revelar la respuesta
   - Las pistas varían según la dificultad
   - Solo se puede usar una pista por problema

4. **Validación de Respuestas**
   - Verifica si la respuesta es correcta
   - Muestra la respuesta correcta si es incorrecta
   - Retroalimentación visual clara

5. **Retroalimentación Auditiva**
   - 🔊 Sonido de Éxito: Tres notas musicales (DO - MI - SOL)
   - 🔊 Sonido de Error: Dos notas bajas (SOL - RE)
   - Sonidos generados programáticamente con Web Audio API

6. **Estadísticas y Progreso**
   - Barra de progreso para seguimiento de problemas resueltos
   - Contador de intentos totales
   - Contador de respuestas correctas
   - Porcentaje de acierto
   - Almacenamiento local (no se pierden al cerrar)

7. **Navegación Intuitiva**
   - Botones "Volver" en cada pantalla
   - Botón "Nuevo Problema" para generar otro ejercicio
   - Entrada con validación numérica
   - Tecla Enter para verificar respuesta
   - Botón para limpiar la entrada

## 🚀 Cómo Usar

1. **Abre el archivo `index.html`** en tu navegador
2. **Selecciona la dificultad** (1, 2 o 3 cifras)
3. **Elige la operación** (Suma, Resta o Modo Mixto)
4. **Lee el problema** en la pantalla
5. **Consulta los pasos** haciendo clic en "Mostrar Pasos"
6. **Usa una pista** si lo necesitas con el botón "Pista"
7. **Ingresa tu respuesta** en el campo de entrada
8. **Presiona "Verificar"** o pulsa Enter
9. **Escucha la retroalimentación** sonora
10. **Genera un nuevo problema** con el botón "Nuevo Problema"

## 📁 Estructura de Archivos

```
ProgramasEducativosAny/
├── index.html       # Archivo HTML principal
├── styles.css       # Estilos y diseño responsive
├── script.js        # Lógica del programa
└── README.md        # Este archivo
```

## 🎨 Diseño

- **Interfaz moderna** con gradientes y colores vibrantes
- **Animaciones suaves** para transiciones entre pantallas
- **Iconos emoji** para mejor visualización
- **Responsive design** que se adapta a cualquier tamaño de pantalla
- **Tema claro** y fácil de leer

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados y animaciones
- **JavaScript ES6+** - Lógica interactiva
- **Web Audio API** - Generación de sonidos
- **LocalStorage** - Almacenamiento persistente de estadísticas

## 💾 Almacenamiento Local

El programa guarda automáticamente:
- Total de intentos
- Respuestas correctas
- Porcentaje de acierto

Estas estadísticas persisten incluso después de cerrar el navegador.

## 🎮 Modos de Juego

### Suma
Practica la suma de números:
- **1 cifra**: 3 + 5 = ?
- **2 cifras**: 24 + 17 = ?
- **3 cifras**: 245 + 183 = ?

### Resta
Practica la resta de números:
- **1 cifra**: 8 - 3 = ?
- **2 cifras**: 45 - 23 = ?
- **3 cifras**: 456 - 234 = ?

### Modo Mixto
Alternancia aleatoria entre suma y resta para mayor variedad.

## 💡 Ejemplos de Explicación Paso a Paso

### Suma de 1 Cifra (3 + 5)
```
Sumamos: 3 + 5
Como ambos son de 1 cifra: 3 + 5 = 8
```

### Suma de 2 Cifras (34 + 27)
```
Sumamos: 34 + 27
Desglosamos: (30 + 4) + (20 + 7)
Sumamos decenas: 30 + 20 = 50
Sumamos unidades: 4 + 7 = 11
Resultado final: 50 + 11 = 61
```

### Resta de 2 Cifras (45 - 23)
```
Restamos: 45 − 23
Desglosamos: (40 + 5) − (20 + 3)
Restamos decenas: 40 − 20 = 20
Restamos unidades: 5 − 3 = 2
Resultado final: 20 + 2 = 22
```

## 🔄 Mejoras Futuras

- [ ] Sistema de insignias y logros
- [ ] Tabla de clasificación global
- [ ] Multiplicación y división
- [ ] Modo multijugador competitivo
- [ ] Configuración de dificultad personalizada
- [ ] Exportar reportes de progreso
- [ ] Tema oscuro
- [ ] Otros idiomas
- [ ] Ecuaciones y problemas de palabras
- [ ] Historial detallado de intentos

## 🔗 Compatibilidad

- ✅ Chrome/Edge (versión 90+)
- ✅ Firefox (versión 88+)
- ✅ Safari (versión 14+)
- ✅ Navegadores móviles modernos
- ❌ Internet Explorer (no compatible)

## 📝 Notas

- Los sonidos se generan programáticamente usando la Web Audio API
- No requiere conexión a internet para funcionar
- Los datos se guardan en el almacenamiento local del navegador
- Compatible con todos los navegadores modernos

## 👨‍💻 Autor

Creado como programa educativo interactivo para aprender y practicar aritmética básica.

---

¡Disfruta aprendiendo matemáticas de forma interactiva y divertida! 🎉
