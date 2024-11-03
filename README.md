# Desafío - Soft Jobs

## Programado por

#### **Carolina Castillo**

## Descripción

 La empresa Soft Jobs ha iniciado el desarrollo de una plataforma que busca apoyar a la
 comunidad de desarrolladores juniors a conseguir trabajos cortos y sencillos para acumular
 experiencia laboral y mejorar sus oportunidades.
 En este desafío serás backend developer de la empresa y deberás crear un servidor para la
 autenticación y autorización de usuarios usando JWT.

## Funcionalidades

Tu servidor debe:

- Permitir el registro de nuevos usuarios a través de una ruta POST /usuarios.
- Ofrecer la ruta POST /login que reciba las credenciales de un usuario y devuelva un token generado con JWT. Se debe incluir el payload del token el email del usuario registrado.
- Disponibilizar una ruta GET /usuarios para devolver los datos de un usuario en caso de que esté autenticado, para esto:
  - Extraiga un token disponible en la propiedad Authorization de las cabeceras.
  - Verifique la validez del token usando la misma llave secreta usada en su firma.
  - Decodifique el token para obtener el email del usuario a buscar en su payload.
  - Obtenga y devuelva el registro del usuario.

## Requerimientos

1. Registrar y obtener usuarios de la base de datos.
2. Usar middlewares para:
  - Verificar la existencia de credenciales en la ruta que corresponda.
  - Validar el token recibido en las cabeceras en la ruta que corresponda.
  - Reportar por la terminal las consultas recibidas en el servidor.
3. Firmar, verificar y decodificar tokens JWT.
4. Capturar y devolver los posibles errores que ocurran en el servidor.
5. Encriptar las contraseñas al momento de registrar nuevos usuarios.

