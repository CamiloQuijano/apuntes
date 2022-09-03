[`Volver`](../index.html)

# JS

## FUNCIONES GENERALES

```js
    Math.floor(Math.random() * 100)				// Número aleatorio 0-100
```

### Try catch en JS
###### Tags: `js` `try` `catch`

```js
    try {
        var itemsSCCF = JSON.parse(shoppingCarCF); 
    } catch(e) {
        alertError("Ocurrio un error en la extracción de la información del paquete.");
        return;
    }
```

### redireccionar - recargar - validar url si finaliza en un texto especifico
###### Tags: `js` `reload` `location` `href` `endsWith`

```js
    // Refrescar
    window.location.reload();

    // Redireccionar
    window.location.href = 'http://www.example.com'

    // Validar si la ruta actual finaliza el un contenido específico
    window.location.href.endsWith('aseguramiento/inconsistencias')
```

### abrir ventana
###### Tags: `js` `window` `open`

```js
    let url = 'http://www.test.com'
    window.open(url, 'title', 'width=590,height=500,left=50,top=50,toolbar=no,scrollbars=yes,resizable=no');
```

### JS date fecha actual, primer y ultimo día del mes
###### Tags: `js` `new` `date` `first` `last` `current`

```js
    // Fecha Actual
    var date = new Date();

    // Fecha Actual con primer día del mes
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

    // Fecha Actual con último día del mes
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
```

### Unificar dos objetos en uno
###### Tags: `js` `mezclar` `unir` `extend` `objects`
```js
    var object1 = { 
            apple: 0, 
            banana: { weight: 52, price: 100 }, 
            cherry: 97 
    };
    var object2 = { 
            banana: { price: 200 }, 
            durian: 100 
    };

    $.extend( object1, object2 ); // Mezcla objeto2 en el objeto1
    // SALIDA: {apple: 0, banana: {price: 200}, cherry: 97, durian: 100}
```

### Unir elementos de un object
###### Tags: `js` `join` `implode` `array`
```js
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var energy = fruits.join('-');
    // SALIDA: Banana-Orange-Apple-Mango
```

### Agregar elemento a un array
###### Tags: `js` `array` `push`
```js
    // Agregar a una posición específica
    $scope.hoursExtraMasiveRows[0] = 1;

    // Agregar a la siguiente posición disponible
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Lemon");
```

### Eliminar elemento de un array
###### Tags: `js` `array` `push`
```js
    // Eliminar un elemento de un array 
    delete fruits[1];

    // En caso de desear reconstruir los keys del arreglo para que no quede el espacio vacio
    fruits = fruits.filter(Boolean);
```


### Setear variable a formato float - quitar decimales
###### Tags: `js` `parseFloat` `format` `numero`
```js
    var a = parseFloat("10")            // 10
    var b = parseFloat("10.00")         // 10
    var c = parseFloat("10.33")         // 10.33
    var d = parseFloat("34 45 66")      // 34
    var e = parseFloat("   60   ")      // 60
    var f = parseFloat("40 years")      // 60
    var g = parseFloat("He was 40")     // NaN
```	

### Setear variable a formato entero - quita decimales
###### Tags: `js` `parseInt` `format` `numero`
```js
    parseInt("10");         // 10
    parseInt("10 años");    // 10
    parseInt("10 54");      // 10
    parseInt("10.50");      // 10
    parseInt("casi 10");    // NaN
    parseInt("10",16);      // 16
```

### Validar si una variables es un numero isNan

La función isNaN () determina si un valor es un número ilegal (Not-a-Number).
```js
    isNaN(123)              //false
    isNaN(-1.23)            //false
    isNaN(5-2)              //false
    isNaN(0)                //false
    isNaN('123')            //false
    isNaN('Hello')          //true
    isNaN('2005/12/12')     //true
    isNaN('')               //false
    isNaN(true)             //false
    isNaN(undefined)        //true
    isNaN('NaN')            //true
    isNaN(NaN)              //true
    isNaN(0 / 0)            //true
    isNaN(null)             //false
```

### setTimeOut
```js
    setTimeout(function(){ alert("Hello"); }, 3000);
```

### setInterval intervalos
Alert "Hello" every 3 seconds (3000 milliseconds):
```js
    setInterval(function(){ alert("Hello"); }, 3000);
```

### JSON - pasar de json a string stringify
```js
    var obj = { name: "John", age: 30, city: "New York" };
    var myJSON = JSON.stringify(obj);
    console.log(myJSON); 				
    // SALIDA: {"name":"John","age":30,"city":"New York"}	
```

### JSON - pasar de string a json parse
```js
    var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    console.log(obj.name);		// SALIDA John
    console.log(obj.age);		// SALIDA 30
```

### Date 
```js
    var d = new Date();
    getFullYear()       // Get the year as a four digit number (yyyy)
    getMonth()          // Get the month as a number (0-11)
    getDate()           // Get the day as a number (1-31)
    getHours()          // Get the hour (0-23)
    getMinutes()        // Get the minute (0-59)
    getSeconds()        // Get the second (0-59)
    getMilliseconds()   // Get the millisecond (0-999)
    getTime()           // Get the time (milliseconds since January 1, 1970)
    getDay()            // Get the weekday as a number (0-6)
    Date.now()          // Get the time. ECMAScript 5.
```

### Date unix
```js
    var x = new Date('2021-02-11');
    document.getElementById("demo2").innerHTML = x.getTime();
    // 1613001600000
```

### Date validar si una fecha es mayor a otra 
```js
    var dateControlDateNow = new Date();
    var dateControlDateInit = new Date('2021-02-10 00:00:00');
    var startDateDaysBack = (dateControlDateNow >= dateControlDateInit) ? 3 : 6;
```
	
### alert
```js
    // Alerta de notificacion
    alert('Hola mundo');
    alert('Hola mundo'+name);

    // Preguntar con opción de incluir texto | El valor incluido queda guardado en la variable
    nombre = prompt("Cual es tu nombre");

    // Alerta con opción de aceptar|cancelar
    confirm('Seguro?');
```

### console log
```js
    console.warn("Warning: Error to ...");              // Alert en warning
    console.log("Este es un ejemplo de log");           // Alert informativa
    console.info("Information: Your version is ...");   // Alert informativa
```

### variables var const array
```js
    // Variable dinámica (Actualizable)
    var name = 'Hola mundo';
    console.log(name); // Hola mundo

    // Variable de valor fijo (No se actualiza)
    const name2 = 'Hola mundo';
    console.log(name2); // Hola mundo

    // Variable tipo array
    var arreglo = [1,2,3,4,5];
    console.log(arrrglo[0]) // Imprimirá el 1 - el indice parte de 0
```

### Condicionales
```js	
    var numero = 5;
    var nombre = 'camilo';
    var booleanvar = true;

    // Condicional ambas condiciones &&
    // Salida: 'Verdad'
    if(numero >= 5 && nombre == 'camilo') {
        console.log('Verdad');
    } else {
        console.log('Falso');
    }

    // Condicional una verdadera ||
    // Salida: 'Verdad' cumple una de las condiciones
    if(numero >= 5 || nombre == 'camilo2') {
        console.log('Verdad');
    } else {
        console.log('Falso');
    }

    // Condicional Contraria con signo !
    // Salida: 'Verdad'
    if (!booleanvar) {
        console.log('Falso');
    } else {
        console.log('Verdad');
    }
```

### Iteracion For 
```js	
    var arreglo = [1,2,3,4,5];
    for(var i=0; i<5; i++) {
        console.log(arreglo[i]);
    }

    // Salida: 1	2	3	4 	5
```

### Iteracion While
Tener precaución de generar un ciclo infinito
```js	
    var i = 0;
    while(i<5) {
            console.log(i);
            i++;
    }

    // Salida: 	0	1 	2 	3 	4
```

### Iteracion Do While
Es similar al while, pero se ejecuta la primera condición asi no cumpla el while()
```js	
    var i = 0;
    do {
            console.log(i);
    }
    while(i<5);

    // Salida: 	0	1 	2 	3 	4
```

### Switch
```js	
    var hora = 12;
    swith(hora) {
        case 0: 
            console.log('Buenos días');
            break;
        case 12: 
            console.log('Buenos tardes');
            break;
        case 18: 
            console.log('Buenos noches');
            break;
        default: 
            console.log('No estoy seguro');
            break;
    }
```

### Funciones

```js	
    // Función que suma
    function suma(num1, num2) {
        console.log(num1+num2);
    }

    suma(10, 5);
```
	
	
## Datepicker 
###### Tags: `datepicker` `documentacion`

[`Documentación`](https://bootstrap-datepicker.readthedocs.io/en/latest/index.html)

### Datepicker - estructura y establecer fecha actual
###### Tags: `datepicker` `fecha` `actual`
```js
    // Datepicker Fecha Búsqueda
    $('#scheduleDate').datepicker({
        dateFormat: 'dd/mm/yy',
        startDate: '0'
    }).datepicker("setDate", '0');
	
    // datapicker
    $('#inputInitialDate, #inputFinalDate').datepicker({
        autoclose: true,
        endDate: '0',
        format: 'dd/mm/yyyy',
        todayHighlight: true
    });
	
    // Establecer valor fecha inicial - Final 
    $('#inputInitialDate').datepicker('setDate', '-5d');
    $('#inputFinalDate').datepicker('setDate', '0');
```

### Datepicker - estructura y establecer fecha de día inicial del mes actual
###### Tags: `datepicker` `estructura` `fecha` `inicial` `mes`

```js
    // Fecha inicial
    var dateNow = new Date();
    var firstDay = new Date(dateNow.getFullYear(), dateNow.getMonth(), 1);
    $('#searchDocDateInit').datepicker({
            autoclose: true,
            clearBtn: true,
            todayHighlight: true
    }).datepicker("setDate", firstDay);
```
### Datepicker - control entre fecha Inicial y final

```html

    <!-- html -->
    <div class="col-xs-12 col-sm-3" >
        <div class="form-groups mt-2">
            <div class="input__singular--1">
                <label for="">Desde:</label>
                <span class="input__container">
                    <input class="input__singular--text datepicker" id="searchEHDateInit"
                        name="searchEHDateInit" maxlength="200" autocomplete="off"> 
                    <label for=""><i class="fa fa-calendar"></i></label>
                </span>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-3" >
        <div class="form-groups mt-2">
            <div class="input__singular--1">
                <label for="">Hasta:</label>
                <span class="input__container">
                    <input class="input__singular--text datepicker" id="searchEHDateEnd"
                        name="searchEHDateEnd" maxlength="200" autocomplete="off"> 
                    <label for=""><i class="fa fa-calendar"></i></label>
                </span>
            </div>
        </div>
    </div>
	
    <!-- javascript -->
    <script>
        // Ajustar elemento de fecha fin para que esta no pueda ser menor a la aplicada
        $('#searchEHDateInit').change(function(){
            var date = $(this).val(); 
            if (date) { $('#searchEHDateEnd').datepicker('setStartDate', date); } 
        }); 

        // Ajustar elemento de fecha inicio para que esta no pueda ser mayor a la aplicada 
        $('#searchEHDateEnd').change(function(){
            var date = $(this).val(); 
            if (date) { $('#searchEHDateInit').datepicker('setEndDate', date); } 
        }); 
    </script>
```

## Reiniciar Form reset
```js
    $('#formscheduleedit').trigger('reset');
```

					
## Reiniciar Select2 change
```js
    $("#scheduleStatusEdit").val('').trigger('change'); 
```

## Evento al cerrar el modal
```js
    // Evento al cerrar el modal
    $('#myModal').on('hidden.bs.modal', function () {
        // do something…
    });				
```

## request http ajax simple
```js
    var processReplyCampaigns = () => {
        $("#loader").show();
        $.ajax({
            url: BASE_URL+'campanias/replicar',
            dataType: "json",
            type: 'post',
            success: function (response) {
                if (validateReponseJSON(response)) { 
                    alertSuccessCallback(response.message, 'Aceptar', () => {
                        location.reload();
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

## datetimepicker

[`Descargar librería`](jquery/datetimepicker.rar)

Implementar:  

```html
    <!-- DateTimePicker -->
    <!-- Documentación: https://www.malot.fr/bootstrap-datetimepicker/ -->
    <link href="<?= base_url('resources/app/plugins/datetimepicker/css/bootstrap-datetimepicker.min.css') ?>" rel="stylesheet" media="screen">
    <script src="<?= base_url('resources/app/plugins/datetimepicker/js/bootstrap-datetimepicker.js') ?>" charset="UTF-8"></script>
    <script src="<?= base_url('resources/app/plugins/datetimepicker/js/locales/bootstrap-datetimepicker.es.js') ?>" charset="UTF-8"></script>
```

Vista
```html
    <div>
        <!-- Input para fecha inicial -->
        <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="input__singular--1">
                <label for="inputInitialDate">Fecha inicial *</label>
                <span class="input__container">
                    <input id="inputInitialDate" type="text" class="input__singular--text"
                        name="initialDate" placeholder="Fecha y hora" readonly required/>
                    <label for="inputInitialDate"><i class="fa fa-calendar" aria-hidden="true"></i></label>
                </span>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="input__singular--1">
                <label for="inputFinalDate">Fecha inicial *</label>
                <span class="input__container">
                    <input id="inputFinalDate" type="text" class="input__singular--text"
                        name="initialDate" placeholder="Fecha y hora" readonly required/>
                    <label for="inputFinalDate"><i class="fa fa-calendar" aria-hidden="true"></i></label>
                </span>
            </div>
        </div>
    </div>
```

Js:  
```js
    $('#inputInitialDate').datetimepicker({
        format: 'dd/mm/yyyy hh:ii',
        language: 'es',
        autoclose: true,
        todayHighlight: true,
        showMeridian: true,
        clearBtn: true,
        minuteStep: 30,
        endDate: '-0d',
    }).on('changeDate', function(ev){
        // Contenido del input: ev.target.value
        // Valor unix: ev.date.valueOf() 
        $('#inputFinalDate').datetimepicker('setStartDate', ev.target.value);
    });
			
    $('#inputFinalDate').datetimepicker({
        format: 'dd/mm/yyyy hh:ii',
        language: 'es',
        autoclose: true,
        todayHighlight: true,
        showMeridian: true,
        clearBtn: true,
        minuteStep: 30,
        endDate: '-0d',
    }).on('changeDate', function(ev){
        $('#inputInitialDate').datetimepicker('setEndDate', ev.target.value);
    });
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

## Deshabilitar boton submit o elementos formulario

### Deshabilitar boton submit al enviar formulario
###### Tags: `js` `form` `submit` `disabled`
```js
    // Deshabilitar submit
    var buttonSubmit = $this.find("button[type='submit']");
    buttonSubmit.attr("disabled", true);

    // Activar de nuevo
    buttonSubmit.attr("disabled", false);
```

### Deshabilitar elementos del formulario
###### Tags: `js` `disabled` `prop`
```js
    // Deshabilitar input
    $( "#x" ).prop( "disabled", true );

    // Habilitar input
    $( "#x" ).prop( "disabled", false );
```

### Descheckar checkbox
###### Tags: `js` `checkbox` `checked` `prop`
```js
    $('input.checkbox_check').prop('checked',false)
```

## Validar checkbox si esta checkeado
###### Tags: `js` `checkbox` `checked` `is`
```js
    if ($('input.checkbox_check').is(':checked')) {
        console.log('CHECKED');
    }
```



## LOCALSTORAGE
```js
    localStorage.clear()				// Limpiar contenido
```

## JAlert

### jalert con btn de aceptar y callback

```js
    /**
     * Mostrar alert 
     * @param {string} title Titulo
     * @param {string} msg Mensaje
     * @param {string} theme Color
     * @param {string} theme Callback
     */
    function showAlert(title, msg, theme, callback) {
        $.jAlert({
            'title': title,
            'content': msg,
            'theme': theme,
            btns: {
                text: 'Aceptar',
                onClick: callback
            },
        });		
    }
```

Implementación funcion success

```js
    /**
     * Alerta exitosa
     * @param {string} msg Mensaje
     * @param {string} title Titulo
     * @param {string} theme Callback
     */
     function alertSuccess(msg, title, callback) {
        var title = ( typeof title == 'undefined' || !title ) ? 'Sistema' : title;
        var msg = ( typeof msg == 'undefined' || !msg ) ? 'Acción realizada correctamente' : msg;
        var callback = (typeof callback !== 'undefined') ? callback : function() {}
        showAlert(title, msg, 'green', callback);
    }
```


## Datatable

### Implementacion

[`Descargar`](https://datatables.net/download/) 
[`Descargar librería Sencilla`](jquery/datatablesSimple.zip)  
[`Descargar librería Completa - buttons - responsive`](jquery/datatablesComplete.zip)

```html
    <!-- datatables -->
    <link rel="stylesheet" type="text/css" href="{{ asset('js/plugins/datatables/datatables.min.css') }}"/>
    <script type="text/javascript" src="{{ asset('js/plugins/datatables/datatables.min.js') }}"></script>
```
```js
    $(document).ready(function() {
        $('#example').DataTable();
    });
```
```html
    <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>>
                <td>2011/04/25</td>
                <td>$320,800</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
    </table>
```

### Configuraciones por defecto del datatable 
###### Tags: `datatable` `options` `language` `settings` `responsive` 

```js
    /**
     * Configuraciones por default de datatables
     * @returns {app_L6.configDefaultDatatables.appAnonym$0}
     */
	var configDefaultDatatables = ()=> {
        return {
            "responsive": true,
            "pageLength": 25,
            "language": {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "Ningún dato disponible en esta tabla",
                "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "sInfoThousands": ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                buttons: {
                    copyTitle: 'Contenido copiado',
                    copySuccess: {
                        1: "Copiado 1 registro",
                        _: "Copiados %d registros"
                    }
                },
                "oAria": {
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        };
    }
	
    $.extend( true, $.fn.dataTable.defaults, configDefaultDatatables());

```

### Configuraciones por defecto para botones de exportacion
###### Tags: `datatable` `options` `language` `settings` `excel` `copy` `excludeExport` `dtFormatText`

```js
    /**
     * Configuracion de Botones de exportar de datatable excel|copy por default 
     * @description IMPORTANTE Exportar a excel
     *      incluir clase excludeExport en TH para omitir en exportación
     *      incluir clase dtFormatText en TD para formato de números a texto (bug de números grandes - excel los vuelve cientificos y redondea al final)
     * @param {string} title de excel a generar 
     * @returns {object} configuraciones para descargar excel | copiar portapapeles 
     */
    var confiDatatablesOptionsButtonsDefault = function(title) {
        return  {
            dom: 'lfrtipB',
            buttons: [ 
                {
                    extend: 'copy',
                    exportOptions: {
                        columns: ':not(.excludeExport):visible'
                    },
                    text: 'Copiar', 
                    footer: true 
                },
                {
                    extend: 'excel',
                    exportOptions: {
                        columns: ':not(.excludeExport):visible',
                        format: {
                            body: (data, row, column, node) =>
                                (node.classList.contains('dtFormatText')) ? '\0' + data : $(node).text()
                        }
                    },
                    text: 'Excel',
                    title: title, 
                    customize: customizeButtonExcel,
                    footer: true 
                }]
        }; 
    };

    var customizeButtonExcel = function(xlsx) {
        var sheet = xlsx.xl.worksheets['sheet1.xml'];
        $('row c', sheet).attr('s', '0');
    };
```

### Datatables responsive
###### Tags: `datatable` `response` `all` `desktop`

[`Descargar librería`](jquery/datatable-responsive.rar)
				
Incluir js y css asociado al responsive
```html
    <!-- Opc 1: datatables responsive CDN -->
    <script src="https://cdn.datatables.net/responsive/2.2.6/js/dataTables.responsive.min.js" ></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.6/css/responsive.dataTables.min.css">

    <!-- Opc 2: datatables responsive local -->
    <script src="<?= base_url('resources/app/plugins/datatable-responsive/dataTables.responsive.min.js') ?>" ></script>
    <link rel="stylesheet" href="<?= base_url('resources/app/plugins/datatable-responsive/responsive.dataTables.min.css') ?>">
```

Inicializar el datatable con responsive en true
```js
    $('#example').DataTable({
        "response": true,
    });
```

Incuir la clase en **th** para:

    desktop                     x >= 1024px
    tablet-l (landscape)        768 <= x < 1024
    tablet-p (portrait)         480 <= x < 768
    mobile-l (landscape)        320 <= x < 480
    mobile-p (portrait)         x < 320
    all                         Always display
    none                        Don't display as a column, but show in the child row
    never                       Never display
    control                     Used for the column



### Datatables compacta 
###### Tags: `datatable` `compact`

[`Documentacion`](https://datatables.net/examples/styling/compact.html)


Incluir la clase .compact

```html
    <table id="example" class="display compact" style="width:100%"> </table>
```

[`Libro Javascript`](https://librosweb.es/libro/javascript/)	


## CKEditor 4 
###### Tags: `js` `plugins` `wysiwyg` `CKEDITOR`

[`Descargar librería 4.16.2`](libraries/ckeditor4.16.2.zip)  
[`Documentacion`](https://ckeditor.com/docs/ckeditor4/latest/guide/dev_installation.html)

Implementar en proyecto
```html
    <!-- Plugin wysiwyg -->
    <script src="<?php echo base_url('resources/plugins/ckeditor/ckeditor.js'); ?>"></script>
```

Renderizar plugin en textarea
```js
    <!-- textarea con id catContent -->
    CKEDITOR.replace('catContent'); // Render plugin wysiwyg
```

Asignar valor plugin wysiwyg a textarea previo a envio via ajax
```js
    $('#catContent').val(CKEDITOR.instances.catContent.getData());
```


## Moments - plugin para manejo de fechas
###### Tags: `js` `plugins` `moments`

[`Documentación`](https://momentjs.com/docs/)  



### Validar diferencias entre fechas

```js
    var dateInitDT = false;
    var dateEndDT = false;
    var dateInit = '28/03/2021 20:00';
    if(dateInit) {
        dateInitDT = moment(dateInit, 'DD/MM/YYYY HH:mm');
    }

    var dateEnd = 28/03/2021 21:00);
    if(dateEnd) {
        dateEndDT = moment(dateEnd, 'DD/MM/YYYY HH:mm');
    }

    if(dateInit && dateEndDT) {
        console.log(dateEndDT.diff(dateInit, 'days'))           // 0
        console.log(dateEndDT.diff(dateInit, 'hours'))          // 1
        console.log(dateEndDT.diff(dateInit, 'minutes'))        // 60
    }
```