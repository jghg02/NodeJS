## NodeJS


Para crear un proyecto en **NodeJS** lo primero que se debe hacer es ejecutar el siguiente comando.

	> npm init (este comando te preguta la información básica del proyecto como nombre, etc, etc)
	> npm init -y  (obvia toda estas preguntas y las setea por default)
	
Este comando crea el archivo **package.json** que contiene la informacion esencial para el proyecto. 

## Estructura Package.json

	{
      "name": "init",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
     "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }


Si se necesita agregar aguno _modulos_ o _dependencias_ que necesitemos en nuestro proyecto. Estas deben ser **agregadas** en el archivo **package.json** en la sección de **dependencies**

	"dependencies": {
    	"graphql": "^0.7.2",
	    "express": "",
    	"mongo": ""
  	}

Estructura del **package.json** luego de agregar la sección de **dependencies**

	{
     "name": "init",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "dependencies": {
       "express" : ""
     }
    }

  	
En donde se especifican el nombre de la dependencia y la versión de la misma. 

Luego para instalar todas estas dependencias es necesario ejecutar el siguiente comando: 

	> npm install 

Esto instala todas las dependencias agregadas en el **package.json** y crea una carpeta llamada _node_modules_

Para poder usar estas _dependencias_ en el proyecto es necesario hacer un import de las mismas de esta forma:

	var express = require('express');
	





