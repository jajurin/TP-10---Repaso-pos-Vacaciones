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
| 1 |.env|Se ha subido el archivo .env|Lo vimos en los archivos del proyecto|Creamos un gitignore y pusimos el .env allí|
| 2 |archvios en general|algunos archvios se encuentran duplicados(scr, readme y package.json)|Lo vimos en los archivos del proyecto vimos que fucnionalidades y nombres se repetian|Eliminamos los archvios duplicados.
| 3 |app.js|No se consigue el req.body parseado ya que no se utiliza el middleware de express|Cuando testeamos la ruta de registro en postman aparecio un mensaje que nos advertia de la falla con la recepcion del body|Agregamos el middleware en app.js antes de las rutas
| 4 |utils/token.js|no se exporta correctamente el sign.token|en postman nos advirtio de un error con signtoken. al bsucar la causa del error descubrimos la falla del export|Agregamos una s al export para que funcione el export|
| 5 |authController.js|En el inicio sesion a pesar de tener las credenciales validas, se muestra lo contrario, consecuencia de la comparacion de contraseñas en el orden de los parametros ya que primero debe ir la cosntraseña escirta y luego el hash guardado en la base de datos|Fuimos a postman a probar el login, y posteriormente tuvimos un error de creedenciales, al revisar descubrimos ese error|cambiamos el orden de los parametros|
| 6 |app.js|La ruta esta escrita "Mal"(loginn envez de login) lo que podria causar errores al hacer requests|Usando las rutas para las requests nos dimos cuenta del error|Quitamos una n de la loginn|
 7 |utils/token.js|el tiempo de expiracion son 2 segundos asi que es inutilizable|cuano arrgelamos el export nos dimos cuenta de ese error|pusimos un tiempo de expiraicon de 2 horas|
| 8 |token.js|Esta mal escrito el process.env.JWT_SECRET|Lo leimos en el archivo|Le sacamos la T de sobra|
| 9 |authController.js|Status de exito en donde se reportan errores|Lo vimos en los archivos del proyecto y cuando probabamos un fallo en en el login, en la consola reportaba el status 200|pusimos los codigos correspondientes a cada situacion|

