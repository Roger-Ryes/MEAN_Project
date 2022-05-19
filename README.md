# AuthApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Sweetalert2
https://sweetalert2.github.io/

# Crear Guard
Los Guards en Angular, son de alguna manera: middlewares que se ejecutan antes de cargar una ruta y determinan si se puede cargar dicha ruta o no.
ref: https://binary-coffee.dev/post/guards-en-angular-como-funcionan

    ng g guard path --skipTests


# DEPLIEGUE EN FRONT
https://www.heroku.com/

## comando
ng build --prod
ng build


## Deplegar
Luego de ejecutar el comando ng build, los archivos generados se colocan en la carpeta "public" del backend 

## compatibilidad de Routas Metodo 1 Frontend
Para que la app de angular sea compatible con el path de otros navegadores usar hash en el routing

    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],