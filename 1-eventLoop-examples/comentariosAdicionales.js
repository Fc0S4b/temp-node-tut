//Event Loop definición
//es lo que le permite a node.js realice tareas sin bloqueos de operaciones de entrada y salida a pesar de que js es single threaded (mas adelante se define esto de single threaded) Mediante descargas de operaciones al kernel siempre que sea posible. Una palabra clave es offloading operations 



//explicación:

// existen tres pilas que van alojando cada proceso, una pila se llama callstack, que es aquella que ejecuta los inputs de funciones sincrónicas (como un console.log("Hola") por ejemplo) y el output es cuando esa función sale de esa pila y devuelve un resultado ("Hola"). Cuando una función es asincrónica, esta entra a la pila callstack pero esa pila dice "oye, no te tengo un output de inmediato, se lo dejaré a mi otra pila amiga", esa función pasa a una segunda pila la cual tiene nombre de webApis o puede ser de otro nombre en node.js. 

// En esta segunda pila se establece un temporizador que lo obtiene de la función asincrónica y realiza una solicitud a un ente externo (una api), mientras tanto la primera pila sigue trabajando con el siguiente código sincrónico. La segunda pila cuando recibe una respuesta a su solicitud se deshace de esta carga pero no se la devuelve a la primera pila, primero le dice "listo aqui esta resuelta tu petición, vuelve a la primera pila pero antes tienes que esperar a que se desocupe, anda hacer fila allí y el señor ese te dirá cuando puedes pasar" la otra fila adonde va esa respuesta es la call queue que sería la tercera pila, el señor que da el paso es el eventLoop, este revisa la primera pila, el callstack que esté desocupado (la pila vacía) para que pueda pasar la respuesta. La respuesta entra, y el callstack dice, "ahh listo, te mostraré en el output". 

// si la operación asincrónica tiene tiempo 0, igual pasa a la segunda pila y posteriormente a la tercera pila, hasta llegar de nuevo al callstack. Ahora si son varias operaciones asincrónicas de 1 segundo cada una y todas entran al callstack al mismo tiempo, la última operación no se demorará un segundo en tener respuesta, ni la segunda, ni la tercera, ya que se irán respondiendo a medida que eventLoop vara liberando la fila y posteriormente el callstack. 

//un bloqueo significa que, la primera pila, recibe operaciones que tardan en resolverse y que no libera la pila para que continúe llenándose hasta el máximo de su capacidad. Esto puede traer consecuencias en el render del navegador (por ejemplo quedarse pegado, dejar de funcionar )

//entonces volviendo a la definición, el event loop es lo que permite que se realicen tareas sin bloqueos (se libera mejor el callstack) a operaciones de entrada y salida (input cuando ingresa al callstack y output cuando sale de la pila) a pesar de que js es single threaded (monoproceso, un proceso a la vez y no con varios hilos), mediante descargas de operaciones al kernel (cuando le pasa la pega a la segunda pila y esta a la tercera pila) siempre que sea posible (cuando hay asincronía). Una palabra clave es offloading operations (operaciones de descarga)
