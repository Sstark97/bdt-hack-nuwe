# Reto frontend

Nuestro equipo de front-end está desarrollando un sistema SaaS para un cliente dónde puede haber tanto usuarios como empresas.
Para poder acceder al SaaS nos han pedido que creemos una pasarela registro como la que se muestra en el siguiente diseño que nos han preparado desde el departamento de UX/UI.

Para dar el diseño como finalizado nos piden que complemetemos las siguientes tasks que forman parte de la épica de User Acquisition:

----

### User taks | User acquisition

- **Task 1:** Puedo ver las páginas que se muestran en el diseño desde el PC
- **Task 2:** Puedo ver las páginas que se muestran en el diseño desde el móvil
- **Task 3:** Si se intenta pasar de página y el correo introducido no es un correo tiene que abrirse un dialog notificándolo
- **Task 4:** Al acabar el formulario aparece un dialog informando que todo el proceso ha salido correctamente

----

### DOD | Definition of Done

- **DOD-1:** No puede haber ningún Warning en la terminal al inciar el proyecto
- **DOD-2:** Tiene que contener un README que contenga un breve explicación de como se empezar a trabajar con el repositorio y la estructura de lo desarrollado
- **DOD-3:** Tiene que estar desarrollado utilizando ReactJS

---

### Reglas y recomendaciones 

- Si se detectan posibles plagios y copias se descalificará automáticamente a la persona
- Recomendable utilizar clean code 
- Desarrollarlo implementando componentes funcionales
- Para considerar corregir el proyecto se tiene que haber hecho deploy de la solución 
----

### Tecnologías Utilizadas
- Para mayor comodidad y mejor funcionamiento decidi utilizar WebPack, babel y eslint para configurar el proyecto.
- Para las vistas me apoye en Chakra UI, ya que ofrece componentes presentacionales que facilitan la creación de páginas.
- Para enrutar las distintas páginas utilice React Router
----

### Procedimiento
- Una vez confugurado Webpack, babel y eslint lo primero que decidi hacer fue la maquetación de las vistas.
- Cree dos carpetas, una llamada componentes y otra llamada pages. En la primera coloque aquellos componentes que 
  me serían de utilidad para hacer los distintos formularios o componentes complemenarios. Y en la carpeta de pages coloque
  las diferentes vistas del proyecto.
- Después de eso lo siguiente que hice fue preparar el Layout y el Router, para ello me cree una carpeta llamada routes, donde
  coloque el componente que se encargará de manejar las distintas rutas
- Cuando ya tenia maquetadas todas las vistas procedi a controlar la validación del email y de los campos del formulario de la 
  primera vista. Cree el modal que saldría emergente en caso de fallos con el email. Y un mensaje de error en caso de que haya algún
  campo vacío.
- Por último realice el último modal, el de confirmación de cuenta.
----