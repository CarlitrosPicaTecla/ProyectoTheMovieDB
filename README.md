# TMDB API 
## API sobre Cine y series - Trabajo cooperativo

___
## **Introducción**

Este es un ejercicio práctico para el desarrollo web y manejo de APIs con **Angular**.

Se ha trabajado sobre la siguiente **documentación:**

* [TMBD API](https://developers.themoviedb.org/3/getting-started/introduction)
* [Angular](https://angular.io/docs)


También se ha prácticado el manejo de **PostMan** y de metodologías ágiles como **SCRUM** para el reparto de tareas a través de **GitHub**.

Se pueden realizar las siguientes funcionalidades: 
* Listado de películas/Series
* Listado de Actores 
* Detallado de cada Película/serie 
* Detallado de cada actor  
* Funcionalidades básicas de navegación (toScroll Button, progress scrollbar, routing).

---

## **Tecnologías utilizadas** 

Para realizar este proyecto hemos utilizado:

1. [Angular CLI 14.2.6](https://angular.io/)
2. [Tailwind CSS](https://tailwindcss.com/docs/installation)
4. [Toggl](https://toggl.com/)
5. [Postman](https://www.postman.com/)

### Código: 

Typescript:
```typescript
 if (this.approved) {
        this.login = true;
        let session = new CreateSessionDto();
        session.request_token = rToken;
        this.authService.createSession(session).subscribe((resp) => {
          localStorage.setItem('session_id', resp.session_id);
          console.log('Session id: ' + resp.session_id);
        });
  }

```

HTML5:

```html
        <div class="w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
              >
              <a routerLink="/admin/actors" routerLinkActive="Active"><i class="fas fa-theater-masks"></i></a>
              
            </div>
              <h6 class="text-xl font-semibold">Actores</h6>
              <p class="mt-2 mb-4 text-blueGray-500 truncate">
                Disfruta de nuestra lista de actores en la que podras encontrar todos y cada uno de los actores de tus peliculas favoritas
              </p>
            </div>
          </div>
        </div>
```

Tailwind CSS:

```css
 <h6 class="text-xl font-semibold">Actores</h6>
```
Javascript:

```javascript
  onActivate(event: Event) {
    window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
     });
  }
```

---
## **Arranque**

Realiza un *git clone* de la siguiente dirección: 
*https://github.com/CarlitrosPicaTecla/ProyectoTheMovieDB*

```console
git clone https://github.com/CarlitrosPicaTecla/ProyectoTheMovieDB.git
```

Dirígete hasta la carpeta:

> cd ./ProyectoTheMovieDB/

Instala el paquete de node:  

   npm install
    ---> 100% 

Ejecuta el comando:

   ng serve -o


Este comando abrirá el **Landing** en tu navegador predeterminado.
___
## **Autores**

Este proyecto ha sido realizado por: 

* [Carlos Ortega Reina - GITHUB](https://github.com/CarlitrosPicaTecla)
* [David García María - GITHUB](https://github.com/davidgm26)

Ambos estudiantes de 2º Desarrollo de Aplicaciones Multiplataforma, grado 
superior de formación profesional en España.

### **Thump up :+1: if you like it, and start it! :star: :smiley:**

