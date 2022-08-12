<style> body { tab-size: 4; } </style>
{% raw %}

[`Volver`](../index.html)

# Angular JS

[`Documentación angular 1`](https://angularjs.org/)
[`Documentación angular 2`](https://angular.io/docs/ts/latest/)

- Aplicación completa – parecido a node , 
- amd(asynchronous Module Definition) forma de estructura 
- (arquitectura del framework) inicial de todos los archivos.
- Patron de diseño : MVVM (Módelo, Vista, Vista-Modelo)

```javascript
	(function () {
		angular
			.module('angular-app', [ // Nombre aplicación
				'ngRoute', // Paquete de control de rutas – Altactic no se usa, channeldir si.
				'angular-app.controllers', // Importación de secciones , mismo nombre asignado en achivo de controllers.js
				'angular-app.directives',
				'angular-app.filters',
				'angular-app.services'
			])
			.config(["$interpolateProvider", function($interpolateProvider){
				$interpolateProvider
					.startSymbol('[[')
					.endSymbol(']]');
			}]);
	})();
```

	controllers → Controladores,
	directives → funciones globales (Control eventos parecido a jquery)
	filters → Parecidos a Filtros de twig
	services → Servicios


## Ejemplo Implementacion inicial angular js
###### Tags: `angular.min.js` `libreria` `ng-app` `ng-controller` `ng-cloak` `$scope`

Descargar:  
[`Descargar 1.5 min.js`](libraries/angular1.5.min.zip)  - Sugerida  
[`Descargar 1.8 min.js`](libraries/angular1.8.min.zip)  


```html
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
	<div ng-app="reloadApp" ng-cloak>
		<div ng-controller="ReportController">
			{{ holamundo }}
			{{ content $scope }}
		</div>
	</div>
```


Entre los [] posterior al modulo, se incluyen las librerías adicionales Ej. datatables, charts, etc.

```javascript
	angular
		.module('reloadApp', ['datatables'])
		.controller('ReportController', ['$scope', ($scope) => {
				$scope.holamundo = 'Contenido variable';
			}
		]);
```

## filtros 

### Filtro Formato Dinero
###### Tags: `filters` `currency`

```js
	{{ 10000 | currency : "" : 0 }}           	// 10,000
	{{ 10000 | currency : '$' : 0 }}          	// $10,000 
	{{ 10000 | currency : '$' : 2 }}          	// $10,000.00 
	{{ 10000 | currency : 'Rs.' : 2 }}        	// Rs.10,000.00
	{{ 10000 | currency : 'USD $' : 2 }}      	// USD $10,000.00
	{{ 10000 | currency : '#' : 3 }}          	// #10,000.000
	{{ 10000 | currency : 'ANYTHING: ' : 5 }} 	// ANYTHING: 10,000.00000
```

### filtros date - number
###### Tags: `filters` `date` `number`

```js
	{{ doc.date|date:'dd/MM/yyyy' }}	// Formato Fecha 
	{{ val | number }}      		// Formato número sin decimales
	{{ val | number:2 }}    		// Formato número indicando cantidad de decimales
```	

### filtro rango (crear)
###### Tags: `angular` `filters` `range`

Implementar filtro de Rangos
```javascript
	angular
		.module("app", [])
		.filter('range', function() {
			return function(input, init, total) {
				total = parseInt(total) + 1;
				for (var i=init; i<total; i++) {
				  input.push(i);
				}
				return input;
			};
		})
		.controller('issuanceController', ['$scope', ($scope) => {
				$scope.holamundo = 'Contenido variable';
			}
		]);
```

Uso 
```html
	<div ng-repeat="n in [] | range:100" ></div>
```	


## atributos ng
###### Tags: `ng-app` `ng-controller` `ng-cloak`

```js
	ng-app			// Nombre aplicación general
	ng-contoller		// Nombre Controlador
	ng-cloak		// Para no mostrar estructura angular al cargar la vista | clase (d-none ó ng-cloak)
```


## timeout

5000 => 5 segundos  

```javascript 
	angular
		.module('reloadApp', ['datatables'])
		.controller('initControllerList', ['$scope', '$timeout', ($scope, $timeout) => {
			$timeout(() => {
				$scope.formChangeStatus.typeId = 2;
			}, 5000) 
	]);
```


## Actualizar scope en JQUERY ($apply)
```javascript
	if(validateReponseJSON(respuesta)){
		$scope.$apply(function () {
			$scope.dataResponse.rows = respuesta.data;
			$scope.dataResponse.display = true;
		});
	}      
```
	
## Estructura para datatable

### Descargar libreria
###### Tags: `angular` `datatable` `plugin`

Descargar:  
[`Datatable`](libraries/datatables.rar)  
[`Datatable angular`](libraries/angular-datatables.rar)  

Incluir en sección de scripts del template 
```html
    <!-- datatables jquery -->
    <link href="<?php echo base_url('resources/plugins/datatables/media/css/jquery.dataTables.css') ?>" rel="stylesheet" type="text/css">
    <script src="<?php echo base_url('resources/plugins/datatables/media/js/jquery.dataTables.js') ?>" type="text/javascript" language="javascript"></script>
    <script src="<?php echo base_url('resources/plugins/datatables/extensions/Buttons/js/dataTables.buttons.min.js'); ?>"></script>
    <script src="<?php echo base_url('resources/plugins/datatables/extensions/Buttons/js/jszip/dist/jszip.min.js'); ?>"></script>
    <script src="<?php echo base_url('resources/plugins/datatables/extensions/Buttons/js/buttons.html5.min.js'); ?>"></script>

    <!-- datatables angular -->
    <link href="<?php echo base_url('resources/plugins/angular-datatables/dist/css/angular-datatables.min.css'); ?>" rel="stylesheet">
    <link href="<?php echo base_url('resources/plugins/datatables/extensions/Buttons/css/buttons.dataTables.min.css'); ?>" rel="stylesheet">
    <script src="<?php echo base_url('resources/plugins/angular-datatables/dist/angular-datatables.min.js'); ?>"></script>
    <script src="<?php echo base_url('resources/plugins/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.min.js'); ?>"></script>
```

### Implementación en controlador
###### Tags: `angular` `mezclar` `unir` `extend` `objects` `options` `configuraciones`

[`configDefaultDatatables`](js.md#configuraciones-por-defecto-del-datatable)  
[`confiDatatablesOptionsButtonsDefault`](js.md#configuraciones-por-defecto-para-botones-de-exportacion)  

```javascript
	/**
	 * @var {object} $scope.dtDocuments Datos para la tabla de documentos procesados
	 */
	$scope.dtDocuments = {
		show: false,
		rows: [],
		totals: [],
		options: angular.extend(
			global.configDefaultDatatables(), 
			global.confiDatatablesOptionsButtonsDefault('_log_documentos'),
			{ pageLength : 10, order: [[5, 'desc']] },
		)
	};
```


### Peticion http - definicion data manual
###### Tags: `angular` `$http` `param`
```javascript
	$scope.sendSearchContractRecord = () => {
		$("#loader").show();
		$http({
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			url: BASE_URL.concat("gestionClientes/contratosGrabados/buscar"),
			data: $.param({
				statusId: $scope.filterState
			}),
			method: 'POST',
			config: {timeout: timeOutRequests}
		}).success(function (response) {
			if (validateReponseJSON(response)) {
				$scope.tdContractRecords.data = response.data;
				$scope.tdContractRecords.display = true;
			}
		}).error(function () {
			alertError('Ocurrio un error al cargar el contenido');
			$('#loader').hide(); // Ocultar loading... 
		}).then(function () {
			setTimeout(function () {
				$('#loader').hide(); // Ocultar loading... 
			}, 250); // Ocultar loading... 
		});
	};
```
	
## Peticion http - definicion desde evento del formulario
###### Tags: `angular` `$http` `$event` `param`	`currentTarget` `serialize`

Capturar información de Formulario HTML para envío por angular

```html
	<form id="formscheduleedit" ng-submit="sendScheduleChangeStatus($event)">
```
```javascript
	/**
	 * - Data definida del formulario
	 * @param {object} event Evento Submit del formulario
	 */
	$scope.getReloadsReportByForm = (event) => {
		$('#loader').show();
		$http({
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			method: 'POST',
			url: BASE_URL.concat('recargas/reporte/consultar'),
			dataType: 'json',
			data: $(event.currentTarget).serialize()
		}).success((response) => {
			if (validateReponseJSON(response)) {
				alertSuccess(response.message);
				$scope.dtDocuments.rows = response.data;
				$scope.dtDocuments.show = true;
			}
		}).error(() => {
			alertError();
		}).finally(() => {
			$('#loader').hide();
		});
	};				
```

## Envio formulario con JQUERY-AJAX con archivos

```html
	<!-- Incluir multipart -->
	<form  id="formUploadFile" enctype="multipart/form-data" method="post">
```
```js
	/**
	 * Procesar formulario de Circular Postpago
	 * @param {event} e Evento submit
	 */
	var submitFormCircular = function (e) {
		
		e.preventDefault();
		$scope.datatable.show = false; 
		$("#loader").show();
		
		var formData = new FormData(document.getElementById("formCircularPostpago"));
		$.ajax({
			url: baseUrl+'circular/postpagoProcesar',
			data: formData,
			dataType: "json",
			type: 'post',
			cache: false,
			contentType: false,
			processData: false,
			success: function (response) {
				if (validateReponseJSON(response)) { 
					alertSuccess(response.message);
				} 
				
				if(response && response.data) {
					$scope.$apply(function () {
						$scope.datatable.rows = response.data.rows;
						$scope.datatable.errors = (response.data.countErrors) ? response.data.countErrors : 0;
						$timeout(function(){ $scope.datatable.show = true; }, 500);
					});
				}
			},
			error: function(){
				alertError();
			},
			complete : function(){
				setTimeout(function(){ $('#loader').hide();  }, 250); // Ocultar loading... 
			}
		});
	};
```

## Estructura tabla HTML - angular - datatable - export excel
```html

	<!--
		Incluir las siguientes clases en los TD para: 
			dtFormatText		Para que al exportar el excel le respete el formato (Ej. seriales)
			excludeExport   	Para no incluir al exportar
	-->
	
	<!-- Tabla con los documentos -->
    <div class="row mt-3" ng-if="dtDocuments.show">
        <div class="col-xs-12">
            <div class="table-responsive">
                <table datatable="ng" dt-options="dtDocuments.options" class="table table__singular noneHover"
                       data-order="[[ 2, &quot;desc&quot; ]]" data-page-length='25'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Número</th>
                            <th>Fecha</th>
                            <th>Punto de venta</th>
                            <th>Código Usuario</th>
                            <th>Usuario</th>
                            <th>Código Vendedor</th>
                            <th>Caja</th>
                            <th>Tercero</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="doc in dtDocuments.rows">
                            <td class="ta-c">
                                <a class="btn__table" ng-click="getConversionDocumentDetails(doc)">
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                </a>
                            </td>
                            <td><b>{{doc.docNumber}}</b></td>
                            <td>{{doc.date|date:'dd/MM/yyyy'}}</td>
                            <td title="{{doc.groupCode}}">{{doc.groupName}}</td>
                            <td>{{doc.userCode}}</td>
                            <td class="dtFormatText">{{doc.userName}}</td>
                            <td>{{doc.sellerCode}}</td>
                            <td>{{doc.boxCode}}</td>
                            <td>{{doc.clientCode}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
```	

## Select options con flitro

```html

	<!-- Select con repeat -->
	<select id="selectCode" class="selectSinges select2" name="code" ng-model="accessCodes.selectedOption">
		<option></option>
		<option 
			ng-repeat="accessCode in accessCodes.allowedOptions| filter:{ idModulo: modules.selectedOption}:true" 
			value="{{accessCode.codigo}}" >
				{{accessCode.codigo}} - {{accessCode.descripcion}}
		</option>
	</select>

	<!-- Select con options -->
	<select  class="form-control"
		ng-options="plan.cod_plan as plan.name for (key , plan) in item.plansSimulation"
		ng-model="xxx" ng-init="xxx=''">
		<option value=""> Seleccione un plan...</option>
	</select>
	
	<!-- Select con options: Incluir track by xxxx para evitar que el option quede con el formato Ej. number:1 --> 
	<select class="form-control" name="schEditTtypeId"
		ng-options="type.id as type.descripcion for (key , type) in getStructureFormDataEdit.types track by type.id"
		ng-model="typeSelected" ng-init="typeSelected=''">
		<option value=""> Seleccione un tipo...</option>
	</select>


```

## ng-repeat
###### Tags: `angular` `ng-repeat` `range`

```javascript
	ng-repeat="(k, lf) in listFiles"		// Arreglo
	ng-repeat="n in [] | range:100"			// Rango (Tiene que estar implementado filter range)
```

## ng-options
###### Tags: `angular` `ng-options` `range`

```javascript
	// Object subobjects
	ng-options="stratum.id as stratum.descripcion for stratum in formDataInitCF.stratum" 

	// Object one Nivel 
	key as value for (key , value) in formDataInitCF.stratum
	
	// Options a partir de rango (Tiene que estar implementado filter range)
	ng-options="n for n in []  | range:1:10 track by n "
```

## ng-styles
```javascript
	ng-style="{ 'border': '2px solid '+ p.color }"
	ng-style="{ width: myObject.value == 'ok' ? '100%' : '0%' }"
```

## Actualizar select2
```javascript
	$scope.nodeCodeSelected = '';
	setTimeout(() => $('#selectNode').trigger('change'), 200);
```

## Event

Capturar información de Formulario HTML para envío por angular

```html
	<form id="formscheduleedit" ng-submit="sendScheduleChangeStatus($event)">
```
```js
	// JS
	data: $(event.currentTarget).serialize(),
```


## Checkbox - manejo jquery - angular
###### Tags: `angular` `checkbox` `checked` `apply` `ng-cloak` `$scope`

```html
    <!-- Checkbox con control de check en angular -->
     <div class="checkbox__item" >
        <div class="radio_basic_swithes_padbott">
            <input type="checkbox" class="js-switch sm_toggle-labelCheckDiscnt" 
                id="checkDiscnt" name="checkDiscnt" data-switchery="true">
            <label>Aplicar comisión anticipada</label>
        </div>
    </div>
```
```js
    // Evento change del checkeo
    $('body').on('change', '#checkIsCustomerAllClaro', function () {
        var isChecked = $("#checkIsCustomerAllClaro").is(':checked') ? 1 : 0;
        $scope.$apply(function () { $scope.shoppingCartJson.details.isCustomerAllClaro = isChecked; });
    });
```


## Implementaciones

Altactic: Notificaciones
Channeldir: Notificaciones y Chat
app.js →  Principal

{% endraw %}
