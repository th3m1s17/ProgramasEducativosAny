# 🎓 Aritmetica Interactiva - Suma y Resta

Programa educativo interactivo para practicar suma y resta con números de 1, 2 y 3 cifras. Incluye explicación paso a paso, pistas, estadísticas, sistema de logros e insignias, y retroalimentación con sonidos.

## 📄 Derechos de Autor

**Creado por**: @th3m1s17  
**Derechos de Autor (C)**: @anylops  
Todos los derechos reservados © 2026

## ✨ Características Principales

### 📱 Interfaz Principal
- **Selección de Dificultad**: Elige entre problemas de 1, 2 o 3 cifras
- **Selección de Operación**: Suma, Resta o Modo Mixto (aleatorio)
- **Estadísticas en Tiempo Real**: Muestra intentos totales, respuestas correctas y porcentaje
- **Panel de Logros**: Visualiza todos los logros desbloqueados
- **Diseño Responsive**: Funciona perfectamente en dispositivos móviles y de escritorio

### 🏆 Sistema de Insignias y Logros

El programa cuenta con **30+ logros diferentes** organizados en categorías:

#### 📊 Logros de Cantidad de Intentos
- **¡Primer Intento!** - Completa tu primer problema
- **Principiante** - Completa 10 problemas
- **Estudiante Dedicado** - Completa 50 problemas
- **Matemático Apasionado** - Completa 100 problemas
- **Maestro de las Matemáticas** - Completa 500 problemas

#### ⭐ Logros de Precisión
- **100% Perfecto** - Obtén una precisión del 100%
- **Casi Perfecto** - Obtén una precisión del 90% o más
- **Muy Bueno** - Obtén una precisión del 80% o más

#### 🔥 Logros de Racha
- **En Racha** - Obtén 5 respuestas correctas seguidas
- **Racha Épica** - Obtén 10 respuestas correctas seguidas

#### 🎯 Logros por Dificultad
- **Primeros Pasos** - Completa un problema de 1 cifra
- **Desafío Intermedio** - Completa un problema de 2 cifras
- **Dominio Supremo** - Completa un problema de 3 cifras
- **Experto en Básicos** - Completa 20 problemas de 1 cifra
- **Experto Intermedio** - Completa 20 problemas de 2 cifras
- **Campeón de Dificultad** - Completa 20 problemas de 3 cifras

#### ➕ Logros por Operación
- **Sumador Principiante** - Completa tu primer problema de suma
- **Restador Principiante** - Completa tu primer problema de resta
- **Maestro de Sumas** - Completa 50 problemas de suma
- **Maestro de Restas** - Completa 50 problemas de resta

#### 🎁 Logros Especiales
- **¿Necesitas Ayuda?** - Usa tu primera pista
- **Maestro de Pistas** - Usa 10 pistas
- **Jugador Equilibrado** - Completa 10 sumas y 10 restas
- **Conquistador Total** - Completa al menos 1 problema de cada dificultad
- **Regreso Triunfal** - Obtén 3 respuestas correctas después de una incorrecta

### 🎮 Características de Problemas

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
   - Las pistas varían según el nivel de dificultad
   - Solo se puede usar una pista por problema
   - Pistas adaptadas:
     - Nivel 1: "Cuenta desde X hacia adelante/atrás Y números"
     - Nivel 2: "La respuesta está cerca de..."
     - Nivel 3: "El resultado tiene X dígitos"

4. **Validación de Respuestas**
   - Verifica si la respuesta es correcta
   - Muestra la respuesta correcta si es incorrecta
   - Retroalimentación visual clara

5. **Retroalimentación Auditiva**
   - 🔊 Sonido de Éxito: Tres notas musicales (DO - MI - SOL)
   - 🔊 Sonido de Error: Dos notas bajas (SOL - RE)
   - 🔊 Sonido de Logro: Secuencia victoriosa (DO - RE - MI - SOL)
   - Sonidos generados programáticamente con Web Audio API

6. **Estadísticas y Progreso**
   - Barra de progreso para seguimiento de problemas resueltos
   - Contador de intentos totales
   - Contador de respuestas correctas
   - Porcentaje de acierto
   - Contador de insignias desbloqueadas
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
11. **Visualiza tus logros** en el panel de logros

## 📁 Estructura de Archivos

```
ProgramasEducativosAny/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos y diseño responsive
├── script.js           # Lógica principal del programa
├── achievements.js     # Sistema de logros e insignias
├── README.md          # Este archivo
└── LICENSE            # Licencia del proyecto
```

## 🎨 Diseño

- **Interfaz moderna** con gradientes y colores vibrantes
- **Animaciones suaves** para transiciones entre pantallas
- **Iconos emoji** para mejor visualización
- **Responsive design** que se adapta a cualquier tamaño de pantalla
- **Tema claro** y fácil de leer
- **Rareza de logros**: Common (básicos), Uncommon (intermedios), Rare (avanzados)

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados y animaciones
- **JavaScript ES6+** - Lógica interactiva
- **Web Audio API** - Generación de sonidos
- **LocalStorage** - Almacenamiento persistente de estadísticas y logros

## 💾 Almacenamiento Local

El programa guarda automáticamente:
- Total de intentos
- Respuestas correctas
- Porcentaje de acierto
- Racha actual
- Estadísticas por dificultad
- Estadísticas por operación
- Pistas utilizadas
- Logros desbloqueados

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

## 📊 Ejemplos de Explicación Paso a Paso

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

### Suma de 3 Cifras (234 + 156)
```
Sumamos: 234 + 156
Desglosamos: (200 + 30 + 4) + (100 + 50 + 6)
Sumamos centenas: 200 + 100 = 300
Sumamos decenas: 30 + 50 = 80
Sumamos unidades: 4 + 6 = 10
Resultado final: 300 + 80 + 10 = 390
```

### Resta de 2 Cifras (45 - 23)
```
Restamos: 45 − 23
Desglosamos: (40 + 5) − (20 + 3)
Restamos decenas: 40 − 20 = 20
Restamos unidades: 5 − 3 = 2
Resultado final: 20 + 2 = 22
```

## 🎯 Objetivos de Aprendizaje

- ✅ Fortalecer habilidades básicas de suma y resta
- ✅ Comprender el desglose de números por cifras
- ✅ Desarrollar razonamiento matemático
- ✅ Mejorar velocidad de cálculo
- ✅ Aumentar confianza en matemáticas
- ✅ Aprender mediante el juego y la gamificación

## 🏅 Sistema de Rareza de Logros

- **Common** 🟩: Logros básicos y fáciles de conseguir
- **Uncommon** 🟦: Logros intermedios que requieren dedicación
- **Rare** 🟪: Logros avanzados que requieren maestría

## 🔄 Mejoras Futuras

- [ ] Tabla de clasificación global
- [ ] Multiplicación y división
- [ ] Modo multijugador competitivo
- [ ] Configuración de dificultad personalizada
- [ ] Exportar reportes de progreso
- [ ] Tema oscuro
- [ ] Otros idiomas
- [ ] Ecuaciones y problemas de palabras
- [ ] Historial detallado de intentos
- [ ] Sistema de niveles
- [ ] Desafíos especiales
- [ ] Retos comunitarios

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
- Optimizado para pantallas de cualquier tamaño

## 👨‍💻 Autor

**Creado por**: @th3m1s17  
Creado como programa educativo interactivo para aprender y practicar aritmética básica.

## 📄 Licencia y Derechos de Autor

Derechos de Autor © 2026 @anylops. Todos los derechos reservados.

Este proyecto fue desarrollado con fines educativos. Está prohibida la distribución, copia o reproducción del código sin autorización expresa.

---

¡Disfruta aprendiendo matemáticas de forma interactiva y divertida! 🎉
