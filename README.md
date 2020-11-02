# Portafolio

Plantilla de portafolio que recoge datos de una hoja de cálculo en google drive.

- [Demo](https://vivirenremoto.github.io/)

- [Ejemplo de hoja de cálculo](https://docs.google.com/spreadsheets/d/1gjSO6dzKyucIQMkM3yo4DfZf7tSPOCfZ4wSMP5NInlU/edit?usp=sharing)

### Importante

- Intenta respetar las columnas de la hoja de cálculo y no elimines la primera fila.

- La hoja de cálculo en google drive tiene que ser pública (Archivo - Publicar en la web).

- En /static/main.js cambia el valor de la variable URL por el ID de tu hoja de cálculo.

- El ID de la hoja de cálculo lo puedes encontrar en la URL al editar el documento.
```
https://docs.google.com/spreadsheets/d/ID-DE-LA-HOJA-DE-CALCULO/edit#gid=0
```

### Personalización

Ancho completo
```
<div class="container fullwidth">
```

Cabecera fija
```
<body class="fixed">
```

Mostrar 4 elementos por fila
```
<div class="col-md-3 item" data-category="{{category}}">
```

Mostrar 6 elementos por fila
```
<div class="col-md-2 item" data-category="{{category}}">
```
