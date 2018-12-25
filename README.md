# VillePays

C'est un projet FrontEnd pour cette application  [SpringMVC](https://github.com/amaryassa/List-ville-SpringMvc)

### Prerequisites
* installation de Node [NodeJS Pages](http://nodejs.org/)
* installation de NPM [NPM Pages](https://www.npmjs.org/)
* installation de  *Angular CLI  - version 7.0.6*  `npm install -g @angular/cli`  
* lancement du projet backend [SpringMVC](https://github.com/amaryassa/List-ville-SpringMvc)

### Getting Started
```
git clone https://github.com/amaryassa/List-ville-Angular
cd List-ville-Angular
npm install
ng serve
```
* naviguer:  http://localhost:4200/


### Important

si l'application [SpringMVC](https://github.com/amaryassa/List-ville-SpringMvc) ne tourne pas en local (localhost)  ou sur un port différent que 8080 il faut penser à changer tous les services dans ```List-ville-Angular/src/services/```
#### Exemple modification un services
* l'application [SpringMVC](https://github.com/amaryassa/List-ville-SpringMvc) tourne en local avec le port 8585  (http://localhost:8585/SpringWeb/)

* le service: *area.service.ts* à la ligne **12**
* il faut changer ```http://localhost:8080/SpringWeb/area1?motCle=${motCle}&page=${page}&size=${size}```
* par ```http://localhost:8585/SpringWeb/area1?motCle=${motCle}&page=${page}&size=${size}```


#### Petit Problème pas encore réglé:
* Si l'application ne démarre pas et affiche ``` Cannot GET /```
* aller dans ```List-ville-Angular/src/app/app.component.ts```
* ligne 9
* changer le title de la page, sauvegarder et recharger la page
