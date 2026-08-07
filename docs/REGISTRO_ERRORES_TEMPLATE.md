# Registro de Errores

Completar una fila por cada error detectado.

| N | Archivo | Problema encontrado | Como lo detectaron | Solucion aplicada |
|---|---------|---------------------|--------------------|-------------------|
| 1 | .env | Se ha subido el archivo .env | Lo vimos en los archivos del proyecto | Creamos un gitignore y pusimos el .env allí |
| 2 | Archivos en general | Algunos archivos se encuentran duplicados (src, readme y package.json) | Lo vimos en los archivos del proyecto, vimos que funcionalidades y nombres se repetían | Eliminamos los archivos duplicados |
| 3 | app.js | No se consigue el req.body parseado ya que no se utiliza el middleware de express | Cuando testeamos la ruta de registro en postman apareció un mensaje que nos advertía de la falla con la recepción del body | Agregamos el middleware en app.js antes de las rutas |
| 4 | utils/token.js | No se exporta correctamente el sign.token | En postman nos advirtió de un error con signToken. Al buscar la causa del error descubrimos la falla del export | Agregamos una s al export para que funcione el export |
| 5 | authController.js | En el inicio de sesión, a pesar de tener las credenciales válidas, se muestra lo contrario, consecuencia de la comparación de contraseñas en el orden de los parámetros ya que primero debe ir la contraseña escrita y luego el hash guardado en la base de datos | Fuimos a postman a probar el login, y posteriormente tuvimos un error de credenciales. Al revisar descubrimos ese error | Cambiamos el orden de los parámetros |
| 6 | app.js | Hay malas prácticas de nomenclatura en las rutas, ya que /api/login no representa su categoría, ya que debería ser auth al ser de registro e inicio de sesión, y app.use("/api/users", adminRoutes) debería ser admin | Usando las rutas para las requests nos dimos cuenta del error | Cambiamos las rutas |
| 7 | utils/token.js | El tiempo de expiración son 2 segundos, así que es inutilizable | Cuando arreglamos el export nos dimos cuenta de ese error | Pusimos un tiempo de expiración de 2 horas |
| 8 | token.js | Está mal escrito el process.env.JWT_SECRET | Lo leímos en el archivo | Le sacamos la T de sobra |
| 9 | authController.js | Status de éxito en donde se reportan errores | Lo vimos en los archivos del proyecto y cuando probábamos un fallo en el login, en la consola reportaba el status 200 | Pusimos los códigos correspondientes a cada situación |
| 10 | authController.js | Faltaba usar return después de enviar respuestas de error | Probando en postman recibíamos el mensaje de error, no obstante un status incorrecto (500) | Agregamos un return en los faltantes |
| 11 | userRoutes.js | Primero esta la funcion y luego el middleware siendo un orden incorrecto | Lo vimos en el codigo revisandolo | Cambiamos el orden |
| 12 | token.js | El token no contiene el id, por lo que en funciones como getProfile nunca encuentra el usuario| probando la funcion getProfile nos dimos cuenta de este error | Agregamos el id a la firma |
| 13 | authMiddleware.js | se usa decode envez de verify lo que causa que se puedan usar tokens falso | En postman probamos la ruta de get api/users/me y pegamos el token del usuario, pero al borrar o cambiar una letra, no tiraba error y mostramos los datos | Lo remplazamos por verify |
| 14 | authMiddlewares.js |Falta de uso de try catch para la validacion del token, porque sino tira error y rompe el flujo |al probar una peticion en postman con errores se rompio y envio el codigo 500 | agregamos un try catch |
| 15 | authController.js | Cuando se incia o registra se muestra, aunque hasheada la contraseña| Lo vimos en pruebas de postman | hacemos un funcion de quitar la contraseña antes de mostar |
| 16 | userRoutes.js | Se harcodean los pedidos, no obstante aunque sean hardcodeados deberian estar en la db.js | los vimos en el codigo | pasamos los pedidos a la db.js y luego los retornamos en useroutes.js|
## Guia de calidad para el informe

No alcanza con escribir "habia un error y lo arreglamos".

En cada caso expliquen:

1. Que ocurria.
2. Por que ocurria.
3. Como se soluciono.
4. Como validaron que quedo funcionando.


