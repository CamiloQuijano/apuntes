[`Volver`](../index.html)

# Vue


## Comandos
###### Tags: `vue` `console` `install` `run` `serve` `build` `create`
```bash
	npm install -g @vue/cli             // Instalación npm
	yarn global add @vue/clie           // Instalación yarn
	vue create my-project               // Crear proyecto (Nombre en minúscula)
	npm run serve                       // Iniciar servidor
	npm run build                       // Paso a producción
```


## Crear proyecto e inicializarlo
###### Tags: `vue` `console` `install` `run` `serve` `build` `create`

Instalación vue (Yarn / npm)
```bash
	npm install -g @vue/cli
	yarn global add @vue/clie
```
Crear proyecto
```bash
	vue create rick-and-morty
```
Parametrización manual
```bash
	Manually select features (Seleccionar manualmente elementos)
	- babel | vuex | css
	- version 3 vue
	- sass/SCSS (with node-sass)
	- In dedicated config files (Archivos dedicados)
```
Inicializar proyecto 
```bash	
	cd proyecto (Moverse al proyecto)
	npm run serve
```


## Estructura de un proyecto
###### Tags: `vue` `project` `structure`
**node_module**: paquetes / dependencias  
**public**: index.html  
**src**: Lógica del proyecto  
|-- **assets**: Estilos e imagenes  
|-- **componentes**: Bloques funcionales - modulos  (Tiene que iniciar en mayúscula Ej. CardCharacter.vue)  
|-- **stores**: Eventos (state) - index.js  
|------ **state**: Definición de variables con contenido dinámico  
|------ **mutations**: Funciones que modifican las variables (state)  
|------ **actions**: Funcion que llama las funciones de mutación  


## Estructura base de un componente
###### Tags: `vue` `structure` `component`
```html
	<!-- html -->
	<template></template>

	<!-- scripts -->
	<script>
		export default {
		}
	</script>

	<!-- styles -->
	<style></style>
```
 
 
## Iterar arreglo
###### Tags: `vue` `for`
```html
	<li v-for="character in characters" :key="ch.id">
		{{ character.name }}
	</li>
```


## Paso de parametros entre componentes
###### Tags: `vue` `components`

Componente padre: 
```html
	<template>
		<li v-for="character in characters" :key="character.id">
			<!-- Componente hijo -->
			<CardCharacter :character="character" />
		</li>
	</template>
	<script>
		import CardCharacter from '@/components/CardCharacter'
		export default {
			components: {
				CardCharacter
			}
		}
	</script>
```
Componente hijo
```html
	<template>
		<div class="character">
			{{ character.name }}
		</div>
	</template>
	<script>
		export default {
			props: ['character'];
		}
	</script>
```


## Imprimir contenido dinamico en atributos
###### Tags: `vue` `components` `attr` `src`
Incluir los dos puntos (:)
```html
	<img :src="character.image" :alt="character.name">
```


## Asignar clase dependiendo de variable
###### Tags: `vue` `components` `attr` `print` `if` `class`
```html
	<div>
		<span :class="
			character.status == 'Alive' ? 'classAlive' : 
			character.status == 'Dead' ? 'classDead' : 
			'default'
		"> Estado </span>
	</div>
```


## Evento Click - Ejemplo aplicar filtro
###### Tags: `vue` `components` `event` `click`

Componente
```html
	<template>
		<div class="item" @click="filter('')"> Todos </div>
	</template>
	
	<script>
		import { useStore } from 'vuex';
		export default {
			setup() {
				// Definir uso de STORE
				const store = useStore();

				// Función que controlará el evento click del filtro
				const filter = ((statefilter) => {
					store.dispatch('filterByStatus', statefilter);
				});
				
				// Retorno de funciones para uso
				return {
					filter
				}
			}
		}
	</script>
```

Store -> action 
```js
	import { createStore } from 'vuex'

	export default createStore({
		action: {
		
			// Función que aplica filtro de  estado
			filterByStatus({commit, state}, stateFilter) {

			  // Aplica filtro
			  const resultFilter = state.characters.filter((character) => {
				return character.status.includes(stateFilter)
			  });

			  // Actualiza variable llamando mutacion
			  commit('setCharactersFilters', resultFilter);
			}
		}
		
	})
```


## v-model - Pasar parametro input de template a script
###### Tags: `vue` `v-model` `keyup`
```html
	<template>
		<div class="search">
			<input type="text"
				placeholder="Buscar por nombre"
				v-model="name"
				@keyup="filterName()" >
		</div>
	</template>

	<script>
		import { ref } from 'vue' // Acceder a variables en uso en vista
		import { useStore } from 'vuex'

		export default {
			setup() {

				// Definir uso de STORE
				const store = useStore()
				const name = ref('')		// Recibir parámetro (name.value)

				// Función que controlará el evento click del filtro
				const filterName = (() => {
					store.dispatch('filterByName', name.value);
				});
				
				// Retorno de funciones para uso
				return {
					name,   // Variable de vista
					filterName
				}
			}
		}
	</script>
```

## proyecto rick y morty
###### Tags: `vue` `project` `netlify`

**CURSO**: [Link Curso](https://www.udemy.com/course/vue-3-composition-api-vuex-api-rest-rick-and-morty/)  
**APIREST RICK AND MORTY**: [Link API](https://rickandmortyapi.com/)  
**PROD NETLIFY** [Link Prueba](https://rickandmortyvuecq.netlify.app)  
**GITHUB**: git@github.com:CamiloQuijano/rickandmorty-vue.git  
**DESCARGAR**: [Bajar proyecto](./projects/rickandmorty-vue.zip)  

Necesario para aplicación  
- Instalar nodejs  	
- Instalar vue - [Validar comando instalacion](#Comandos) 

Descargar repositorio o Clonar 
```bash
	git clone git@github.com:CamiloQuijano/rickandmorty-vue.git
```
	
Instalar dependencias e iniciar server
```bash
	npm install
	npm run serve
```

Subir cambios a producción en netlify
- [Validar paso a paso](./github.md#subir-a-produccion-de-repositorio-github-a-netlify) 

<style> body { tab-size: 4; } </style>