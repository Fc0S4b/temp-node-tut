//conceptos sobre web servers
//cada vez que se accede a una página web se hace una petición (request) a un servidor (node/express) y este da una respues (response), en la petición y respuesta se transmite datos (data). Esto sucede en un protocolo http.
//express es un framework
//la estructura de una request es:
//método: GET (default del browser) porque queremos OBTENER un recurso, url:el enlace /contact y versión del http: http/1.1 y también una línea de status code: indica cual es el resultado de la solicitud, por ejemplo 200 significa que la request es ok, 400 error en la request, 404 not found, 401 no autorizado
//headers (opcional): pragma= no -cache, referer= página que está accediento-->todo el meta, son un par de valores claves. Info sobre el mensaje
//body (opcional): request payload(carga útil, lo que se añade a la solicitud del recurso sino se mostraría solo el recurso), ej {email. "hello@hello.com"}
//la estructura de una response:
//status text, status code
//headers (opcional): content-type: text/html; charset=UTF-8 content-Type: application/json: charset= utf-8
//body (opcional): <html lang="en"><head>....</head><body> etc, código html que se envían como datos. cuando se crea una app web, nos comunicamos con api la mayor parte del tiempo estamos obteniendo de vuelta los datos json
//se puede ver un ejemplo al inspeccionar una página web, luego en Network actualizas la página y veras Name los request y response
