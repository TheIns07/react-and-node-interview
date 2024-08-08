# Aplicación de noticias (Backend)
El backend crea la base de datos de manera automatica dependiendo de la conexión local o en la nube que se le ponga.

Comando para iniciar el backend y crear la base de datos:

`npm start`

Para la documentación del codigo se usa Swagger, por lo que el endpoint para hacer testing de la API es:

`url/api-docs/`

En donde se tiene el endpoint:

`GET api/articles: Obtiene todos los articulos de la base de datos`

En caso de ver el JSON RAW, acceder directamente en el buscador a:

`GET url/api/articles: Obtiene todos los articulos de la base de datos`


# Aplicación de noticias (Frontend)
El frontend genera la conexión hacia el backend recuperando diversos endpoints del backend. Es necesario llenar las variables de entorno
o las condicionales para que la aplicación genere conexión.

El comando necesario para ejecutar el frontend es:
`npm run dev`