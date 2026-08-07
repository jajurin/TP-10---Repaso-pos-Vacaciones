# Registro de Errores

Completar una fila por cada error detectado.

| N | Archivo | Problema encontrado | Como lo detectaron | Solucion aplicada |
|---|---------|---------------------|--------------------|-------------------|
| 1 | src/ejemplo.js | El token no se verificaba | Prueba manual de ruta protegida | Se uso jwt.verify con manejo de excepcion |

## Guia de calidad para el informe

No alcanza con escribir "habia un error y lo arreglamos".

En cada caso expliquen:

1. Que ocurria.
2. Por que ocurria.
3. Como se soluciono.
4. Como validaron que quedo funcionando.

| N |       Archivo          |     Problema encontrado        | Como lo detectaron             |           Solucion aplicada               |
| 1 |![alt text](image-1.png)|Se ha subido el archivo .env|Lo vimos en los archivos del proyecto|Creamos un gitignore y pusimos el .env allí|
| 2 |![alt text](image-2.png)|algunos archvios se encuentran duplicados(scr, readme y package.json)|Lo vimos en los archivos del proyecto vimos que fucnionalidades y nombres se repetian|Eliminamos los archvios duplicados.
  