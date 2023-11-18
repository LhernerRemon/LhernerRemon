---
title: Buenas prácticas en el diseño de una API web
description: Hello
date: 2023-11-04
time: 7 min
tags:
  - Desarrollo
  - API
author: RrQq
---
Si está leyendo esto, es probable que le interese diseñar API web utilizando principios de diseño probados y que sea de fácil uso para los demás desarrolladores.

**REST** es un estilo arquitectónico y no un estándar estricto, ya que permite mucha flexibilidad y libertad de estructura.

El éxito de la API web se mide con la facilidad y rapidez con la un desarrollador puede usarla. No olvidemos que **el cliente de la API web** de creemos será otro **desarrollador**.

## Los sustantivos son buenos, los verbos son malos

#### Mantenga los verbos fuera de sus URL base

Para cualquier recurso que modele, como nuestro ‘dogs’, nunca lo considerar de forma aislada. Más bien, siempre hay recursos relacionados de los que tener en cuenta, como propietarios, veterinarios, etc.

| /getAllDogs | /verifyVeterinarianLocation |
| --------- | --------- |
| /newDogs | /getAllLesshedDogs |
| ... | ... |

Es una pendiente resbaladiza: pronto tendrá una larga lista de URL y ningún patrón coherente.

#### Mantenga su URL base simple e intuitiva

Solo debe haber 1 URL base por recurso y deben estar en plural.

- /dogs 
- /dogs/1234

#### Utilice verbos HTTP para operar en las colecciones y elementos

Para nuestros recursos para ’dogs’, tenemos 2 URL que son sustantivos y podemos operar en ellas con verbos HTTP como lo son: POST, GET, PUT y DELETE.

Con nuestros dos recursos (/dogs y /dogs/1234) y los cuatro verbos HTTP, tenemos:

| Recurso | **POST** | **GET** | **PUT** | **DELETE** |
| --------- | --------- | --------- | --------- | --------- |
| /dogs | Crear un recurso | Listar todos los recursos | Actualizar todos los recursos | Eliminar todos los recursos |
| /dogs/1234 | -- | Obtener un recurso | Actualizar un recurso | Eliminar un recurso |

#### Retornar el recurso

Cada vez que se crea o actualiza un recurso se debe retornar el mismo recurso y evitar un llamado adicional al servidor.

## Simplifique las relaciones; parámetros de las URL '?'

#### Relaciones

Los recursos casi siempre tienen relación con otros recursos. Estamos usando verbos HTTP para operar en los recursos y colecciones. Así que debemos **mantener la relación como una pertenencia**.

Para obtener todos los perros que pertenecen a un dueño específico.

- **GET** /owners/5678/dogs 

Para obtener un perro específico que pertenece a un dueño específico.

- **GET** /owners/5678/dogs/123

Crear un nuevo perro para ese dueño

- **POST** /owners/5678/dogs

Recuerde que una vez que tenga el sustantivo principal para un nivel, generalmente no necesita incluir los niveles anteriores porque ya tiene su objeto específico. 

No debería necesitar muchos casos en los que una URL sea más profunda que la que tenemos arriba, es decir, **2 niveles**. Pero puede suceder.

#### Use '?'

La mayoría de las API tienen complejidades más allá del nivel básico en el detalle de las consultas de un recurso. Muchos estados que se pueden actualizar, cambiar y consultar.

Facilite a los desarrolladores el uso de la **URL base** colocando **estados y atributos** opcionales detrás del signo de interrogación HTTP.

#### Filtros

Para obtener todos los perros de color ‘red’, con el estado ‘running’ y con la ubicación `park`

- **GET** /dogs?color=red&state=running&location=park

#### Ordenar

Para obtener todos los perros el orden descendente de creación y actualización

- **GET** /dogs?sort=-created,-updated

#### Búsqueda

Para obtener todos los perros cuyo nombre tengan la letra ‘a’

- **GET** /dogs?name__icontains=a

## Respuesta parcial y paginación

#### Respuesta parcial

La respuesta parcial le permite darle a los desarrolladores solo la información que necesitan.

Cada uno tiene un parámetro opcional llamado campos después del cual usted coloca los nombres de los campos que desea que se devuelvan, pero en estos casos es una opción y un buen camino usar **GraphQL**.

- **Facebook** /joe.smith/friends?fields=id,name,picture

#### Paginación de objetos en una base de datos

Casi siempre es una mala idea devolver todos los recursos de una base de datos.

- **limit and offset** /dogs?limit=25&offset=50

- **page** /dogs?page=1

## Manejo de errores, versiones y subdominio

#### Utilice códigos de estado HTTP

Hay más de 70 códigos de estado HTTP. Sin embargo, la mayoría de los desarrolladores no han memorizado los 70. Por lo tanto, si elige **códigos de estado** que no son muy comunes, obligará a los desarrolladores a dejar de crear sus aplicaciones y acudir a  averiguar qué estás tratando de decirles.

**Sé explícito** con tus respuestas usando los estados HTTP más comunes.

#### Consejos para el control de versiones

El control de versiones es una de las consideraciones más importantes al diseñar su API web. Nunca publique una API sin una versión y haga que la versión sea obligatoria.

Especifique la versión con un prefijo 'v'. Muévalo completamente hacia la izquierda en la URL

- /v1/dogs

#### ¿La versión y el formato deben estar en URL o encabezados?

A veces, las personas se ven obligadas a poner la versión en el encabezado porque tienen varias API interdependientes.

A menudo, eso es un síntoma de un problema mayor, es decir, generalmente exponen su desorden interno en lugar de crear una fachada de API utilizable en la parte superior.

Si cambia la lógica que escribe para manejar la respuesta, colócala en la URL para que pueda verla fácilmente.

#### Consolide las solicitudes de API en un subdominio

Hemos hablado de cosas que vienen después del dominio de nivel superior. Esta vez, exploramos cosas al otro lado de la URL.

**Es más limpio**, más fácil e intuitivo para los desarrolladores que desean crear aplicaciones geniales usando su API.

- **Facebook**
  - graph.facebook.com
  - api.facebook.com

## Adicionales

#### CamelCase vs pascalCase vs snake_case

::custom-image
---
url: "https://imgb.ifunny.co/images/7042ff298998e2ea8c70c35478541672166ec90170125b7479daa11ae234df37_1.jpg"
max-width: 400
---
::

A continuación, se muestran las respuestas de la API de algunas de las principales API:
- **Bing** "DateTime": "2011-10-29T09:35:00Z" 
- **Foursquare** "createdAt": 1320296464
- **Twitter** "created_at": "Thu Nov 03 05:19;38 +0000 2011" 

**No es una convención**, pero esto da como resultado un código que se parece al siguiente, lo que permite al desarrollador de JavaScript escribirlo de una manera que **tenga sentido para JavaScript**.

- Utilice mayúsculas medial (también conocido como CamelCase)
- Utilice mayúsculas o minúsculas según el tipo de objeto
- Esto da como resultado: **"createdAt": 1320296464**

#### Autenticación

::custom-image
---
url: "https://res.cloudinary.com/practicaldev/image/fetch/s--oiCy8FFt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://code.oursky.com/wp-content/uploads/2021/02/Screenshot-2021-02-09-at-4.15.21-PM-1-scaled.jpg"
max-width: 400
---
::

Las aplicaciones web o móviles que exponen API **no tienen que compartir contraseñas**. Permite al proveedor de API **revocar tokens** para un usuario individual, para una aplicación completa, sin requerir que el usuario cambie su contraseña original. 

Esto es fundamental si un dispositivo móvil se ve comprometido o si se descubre una aplicación no autorizada.

#### SSL

::custom-image
---
url: "https://media.makeameme.org/created/ssl-ssl-everywhere-5bc9c7.jpg"
max-width: 400
---
::

Va a haber intercambio de mucha información sensible, como los token. SSL es de uso obligatorio y es gratis.

#### Cache

::custom-image
---
url: "https://miro.medium.com/v2/resize:fit:750/1*TRpMZdbDrdZxAOwWTZ_Kgw.jpeg"
max-width: 400
---
::

Una compensación fundamental en los sitios web dinámicos es que son dinámicos. Almacenar en caché algo es guardar el resultado de un **cálculo costoso** para que no tenga que realizar el cálculo la próxima vez.

No vayas a realizar **las mismas consultas otra vez**.

#### Limita las solicitudes

::custom-image
---
url: "https://blog.careem.com/wp-content/uploads/2022/06/Blog_-Presto-Rate-Limiting_image3-1.png"
max-width: 400
---
::

La limitación es similar a los permisos, ya que determina si se debe autorizar una solicitud. Utiliza ‘limitadores’ para controlar la tasa de solicitudes que los clientes pueden realizar a tu API.

##### Fuente: [Apigee](https://pages.apigee.com){:target="_blank"}