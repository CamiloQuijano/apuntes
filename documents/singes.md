[`Volver`](../index.html)

# SINGES

## Mostrar errores consola

```js
	$('#errores').show();		// Función en consola para Imprimir error x excepción
```

## Consultas comunes
```sql
	-- desbloqueo por IP
	update Singes..portal_sisUsuarios set conexion = '0', ip_conexion = '0' where usuario = 'caquijano'

	-- Consultar Ingreso Usuario
	select * from Singes..ing_registro_ingresos where usuario = 'usuario_singes' and fecha = '06/03/2017'
	
	-- consulta de registro de huella 
	select * from singes..portal_sisUsuarios where usuario = 'usuario_singes'
```

## WEBSTORE
```js
	showErrors();			// Función en consola para Imprimir error x excepción
```

## Actualizar Directivas (CMD)
```bash
	gpupdate /force
```

## htaccess implementación
```php
	define('SERVER_NAME', isset($_SERVER['SERVERNAME']) ? $_SERVER['SERVERNAME'] : '');
	define('RESTAPI_BASE', isset($_SERVER['SINGES_RESTAPI']) ? $_SERVER['SINGES_RESTAPI'] : 'http://192.168.100.83/');

	inicio singes- login
	<title>Singes | <?php echo SERVER_NAME ?> </title>
```
	
## Acceso sesion singes
```php	
	$this->nativesession->get('singes')
	$this->nativesession->getData('singes', 'usuario')
	
	$sessionIp = $this->nativesession->getData('singes', 'ip_conexion');
    $sessionUser = $this->nativesession->getData('singes', 'usuario');
```

## IE TAB
```php
	(http|https)://www.singes.com.co/portalSinges/singularcomFacturacion/index.php/Facturacion/imprimirFactura/*
	(http|https)://www3.singes.com.co/portalSinges/ventas/ayudaventas/imprimirFactura/*
```


## Estructura elementos formularios Singes

### File
```html
	<div class="col-xs-12 col-sm-6">
		<div class="input__singular--file">
			<label for="scheduleEditAttachment">Adjuntos</label>
			<div class="input__file">
				<input type="file" class="custom-file-input" id="scheduleEditAttachment" 
					name="scheduleEditAttachment" accept=".png,.jpeg,.jpg,.pdf,.zip,.rar">
				<label class="custom-file-label" for="scheduleEditAttachment">Seleccione adjunto...</label>
			</div>
		</div>
		<div class="text-muted fs-xxs mt-1"> png, jpeg, jpg, pdf, zip, rar </div>
	</div>
```

### Select
```html
	<div class="col-xs-12 col-sm-6">
		<div class="select__singular">
			<label for="inputNewTypePackage">Tipo de paquete</label>
			<select class="selectSinges" id="inputNewTypePackage" name="inputNewTypePackage">
				<option value="1">Sencillo</option>
				<option value="2">Doble</option>
				<option value="3">Triple</option>
				<option value="5">Multiplay</option>
				<option value="6">DTH</option>
			</select>
		</div>
	</div>
```

### Text
```html
	<!-- Input con icono - texto -->
	<div class="col-xs-12 col-sm-6">
		<div class="input__singular--1">
			<label for="schNewtDate">Fecha</label>
			<span class="input__container">
				<input type="text" name="schNewtDate" class="input__singular--text datepicker" 
					autocomplete="off" required=""/>
				<label for="schNewtDate"><i class="fa fa-calendar"></i></label>
			</span>
		</div>
	</div>
	
	<!-- Input solo -->
	<div class="col-xs-12 col-sm-6">
		<div class="input__singular--1">
			<label for="">Orden de trabajo</label>
			<span class="input__container">
				<input class="input__singular--text" name="schNewOT" type="text" maxlength="30" required>
			</span>
		</div>
	</div>
```

### Textarea
```html
	<div class="col-xs-12 col-md-6">
		<div class="mt-1"><label class="font-weight-bold"> Detalle documento </label></div>
		<textarea id="textDescription" class="w-100" rows="3" cols="50"></textarea>
	</div>
```

## Button Submit
```html
	<div class="col-xs-12 col-sm-12 ta-r">
		<div class="separator"></div>
		<div class="btn4__singular w-100">
			<button type="submit">
				<h2>Crear</h2>
			</button>
		</div>
	</div>
```

### Checkbox List
```html
  <div class="col-xs-12 col-sm-12">
		<div class="form-groups mb-2 mt-1">
			<label>El activo a crear cuenta con algunas de las siguientes caracteristicas</label>
			<div class="form-groups">
				<div class="checkbox__singular--1">
					<input type="checkbox" id="inputWarranty"> </input>
					<label class="radio-label" for="inputWarranty"> </label>
				</div>
				<label for="inputWarranty">Garantia</label>
			</div>
			<div class="form-groups">
				<div class="checkbox__singular--1">
					<input type="checkbox" id="inputLicence" name="license" > </input>
					<label class="radio-label" for="inputLicence"> </label>
				</div>
				<label for="inputLicence">Licencia</label>
			</div>
		</div>                                                
	</div>
```

### Radio List
```html
<div class="row">
	<div class="col-xs-12 col-sm-12">
		<div class="form-groups mb-2 mt-1 input__singular--1">
			<label>Tipo solicitud</label>
			<div class="form-groups">
				<div class="radio__singular">
					<input type="radio" id="radioHE" name="type" value="HE"> </input>
					<label class="radio-label" for="radioHE"> Hora Extra</label>
				</div>
			</div>
			<div class="form-groups">
				<div class="radio__singular">
					<input type="radio" id="radioR" name="type" value="R"> </input>
					<label class="radio-label" for="radioR"> Recargo</label>
				</div>
			</div>
		</div>                                                
	</div>
</div>
```

					
## Reset formulario input file js
Dejar texto nuevamente por default - cambiar texto del archivo precargado
```js
	$(".input__file label[for=scheduleEditAttachment]").text('Seleccione adjunto...');
```


## Modal

### Apertura modal por JS
```js
	$('#modalEditShedules').modal('show');
```

### Apertura modal desde html toggle
```html
	<li>
		<a data-toggle='modal' data-target='#modalExtraHoursCreate'> 
			<i class="fa fa-plus-circle" aria-hidden="true"></i>
			<h2> Crear </h2>
		</a>
	</li>
```

### Estructura modal - formulario

Modal con botones de cancelar y guardar

```html				
	<div class="modal fade modal__singes" id="modalEditShedules" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
	  <div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				 <h4 class="modal-title" id="titleModalCustomer">Editar estado Agendamiento</h4>
				 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					 <span aria-hidden="true">&times;</span>
				 </button>
			 </div>
			<div class="modal-body">
			  <div class="container-fluid">
				
				  <!-- form cambio estado -->
				  <div class="body__form">
					  <form id="formscheduleedit" ng-submit="sendScheduleChangeStatus()">
						<input type="hidden" name="scheduleEditId" value="{{ scheduleEditData.id }}">
						<div class="row">
							
							<!-- select -->
							<div class="col-xs-12 col-sm-6">
								<div class="select__singular">
									<label for="scheduleEditStatusId">Estado *</label>
									<select id="scheduleEditStatusId" name="scheduleEditStatusId" class="selectSinges select2" required>
										<option value="">Seleccione estado...</option>
										<option ng-repeat="state in status" value="{{state.id}}">{{state.descripcion}}</option>
									</select>
								</div>
							</div>
							
							<!-- file -->
							<div class="col-xs-12 col-sm-6">
								<div class="input__singular--file">
									<label for="scheduleEditAttachment">Adjuntos</label>
									<div class="input__file">
										<input type="file" class="custom-file-input" id="scheduleEditAttachment" name="scheduleEditAttachment"
											   accept=".png,.jpeg,.jpg,.pdf,.zip,.rar">
										<label class="custom-file-label text-nowrap" for="scheduleEditAttachment">Seleccione adjunto...</label>
									</div>
								</div>
								<div class="text-muted fs-xxs mt-1"> png, jpeg, jpg, pdf, zip, rar </div>
							</div>
							
							<!-- Input con icono -->
							<div class="col-xs-12 col-sm-6">
								<div class="input__singular--1">
									<label for="schNewtDate">Fecha</label>
									<span class="input__container">
										<input type="text" name="schNewtDate" class="input__singular--text datepicker" autocomplete="off" required=""/>
										<label for="schNewtDate"><i class="fa fa-calendar"></i></label>
									</span>
								</div>
							</div>
							
							<!-- Input solo -->
							<div class="col-xs-12 col-sm-6">
								<div class="input__singular--1">
									<label for="">Orden de trabajo</label>
									<span class="input__container">
										<input class="input__singular--text" name="schNewOT" type="text" maxlength="30" required>
									</span>
								</div>
							</div>
								
						</div>
						<div class="row">
						
							<!-- textarea -->
							<div class="col-xs-12 col-sm-12">
								<div class="select__singular">
									<label for="scheduleEditDetails">Observaciones</label>
									<textarea name="scheduleEditDetails" class="form-control"></textarea>
								</div>
							</div>
						</div>
					</form>
				</div>
			  </div>
			</div>
			
			<!-- Modal con 2 botón en footer -->	
			<div class="modal-footer">
				<div class="row justify-content-center">
					<div class="col-xs-12 col-sm-6">
						<div class="btn4__singular w-100">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">
								<h2><i class="fa fa-close" aria-hidden="true"></i> Cerrar </h2>
							</button>
						</div>
					</div>
					<div class="col-xs-12 col-sm-6">
						<div class="btn4__singular w-100">
							<button type="submit" form="formscheduleedit">
								<h2>Guardar</h2>
							</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	  </div>
	</div>
```

### Estructura modal - footer

```html			

	<!-- Modal con 1 botón en footer -->
	<div class="modal-footer">
		 <div class="col-xs-12 col-sm-12">
			<div class="btn4__singular w-100">
				<button type="submit" form="formscheduleedit">
					<h2>Guardar</h2>
				</button>
			</div>
		</div>
	</div>	
	
	<!-- Modal con 2 botón en footer -->	
	<div class="modal-footer">
		<div class="row justify-content-center">
			<div class="col-xs-12 col-sm-6">
				<div class="btn4__singular w-100">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">
						<h2><i class="fa fa-close" aria-hidden="true"></i> Cerrar </h2>
					</button>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6">
				<div class="btn4__singular w-100">
					<button type="submit" form="formscheduleedit">
						<h2>Guardar</h2>
					</button>
				</div>
			</div>
		</div>
	</div>
```

### Modal no pertimir cerrar backdrop static

Es necesario en elemento del modal incluir:   

```html
	<!-- data-backdrop="static" -->
	<div class="modal fade modalSinges" id="modalCreateShedule" role="dialog" 
		aria-labelledby="modalCreateShedule" aria-hidden="true" data-backdrop="static">
		 <div class="modal-dialog modal-xl">
		 </div>
	 </div>
```

### Modal Tamano

Incluir clase a nivel de modal-dialog

	.modal-sm		// Pequeño
	.modal-lg		// Grande
	
```html
	<div class="modal fade modalSinges" id="modalCreateShedule" role="dialog" 
		aria-labelledby="modalCreateShedule" aria-hidden="true" data-backdrop="static">
		 <div class="modal-dialog modal-xl">
		 </div>
	 </div>
```

## Estructura vista formulario busqueda con render en angular

Vista ng-app ng-controller ng-submit -ng-repeat
```html
	<div ng-app="reportApp" ng-controller="reportController" ng-cloak="">
		<div class="dashboard-container home__dashboard reporteVentas__dashboard">
			<div class="container__singular" >
				<div class="row">
					<div class="col-xs-12">
						<div class="header__line">
							<div class="header__title">
								<h2>Reporte seriales conversión</h2>
							</div>                    
						</div>
						
						<!-- btns flotantes -->
						<div class="heder__btnFloat">
							<ul>
								<li>
									<a href="#"> <i class="fa fa-plus"></i>
										<h2>Serial 1</h2>
									</a>
								</li>
								<li>
									<a href="#"> <i class="fa fa-plus"></i>
										<h2>Serial 1</h2>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Formulario de búsqueda -->
				<div class="body__form">                
					<div class="container">
						<!-- Formulario Búsqueda -->
						<form autocomplete="off" ng-submit="consultReportFilters()" id="formFilterReport">  
							<div class="row justify-content-center">
								<div class="col-xs-12 col-sm-5">
									<div class="input__singular--1">
										<label for="descriptionList">Fecha</label>
										<span class="input__container">
											<input type="text" id="dateInit" name="dateConsult" class="input__singular--text datepicker" ng-model="formReport.dateConsult"autocomplete="off" required=""/>
											<label for="descriptionList"><i class="fa fa-calendar"></i></label>
										</span>
									</div>
								</div>
								<div class="col-xs-12 col-sm-3 mt-2">
									<div class="btn4__singular w-100">                                             
										<button type="submit" name="search" class="btn btn-default btn__table--ico">
											<h2>Buscar</h2>
										</button>
									</div>
								</div>                                                                                                
							</div>                                                                                            
						</form>
					</div>
				</div>
			<br/>

			<!-- Listado de Reportes -->
			<div class="row">
				<div class="col-xs-12">
					<div class="table-responsive mt-2" ng-if="datatable.show">
						<table datatable="ng" dt-options="datatable.options"
							   data-order="[[ 4, &quot;desc&quot; ]]" class="table table__singular noneHover">
							<thead>
								<tr>
									<th class="ta-c">Item</th>
									<th class="ta-c">Serial</th>                                                              
									<th class="ta-c">Sucursal</th>                                
									<th class="ta-c">Estado</th>                                
									<th class="ta-c">Fecha Salida</th>                                
									<th class="ta-c">Fecha Ingreso</th>                                
								</tr>
							</thead>
							<tbody>
								<tr ng-repeat="(key, data) in datatable.rows">            
									<td>{{data.descItem}}</td>       
									<td class="ta-c">{{data.serial}}</td>   
									<td>{{data.codSuc}} - {{data.sucursal}}</td>       
									<td class="ta-c">{{data.estado}}</td>       
									<td class="ta-c">{{data.fechaSalida}}</td>       
									<td class="ta-c">{{data.fechaIngreso}}</td>       
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>   
		</div>        
	</div>
	</div>  
	<script src="<?= base_url('resources/app/inventory/controllers/report/reportController.js?c=' . CACHE_UPDATE) ?>" type="text/javascript"></script>
	<script>
		reportController.init();
	</script>
```

## Ejemplo Controlador con control try-catch y retorno json
###### Tags: `try` `catch` `controller` `documentacion` `json`

```php
	/**
	 * Ejemplo controlador con retorno try|catch
	 * @author Camilo Quijano <camiloquijano31@hotamail.com>
	 * @date 22/07/2020
	 * @param array $postData estructura formulario
	 *      {string} initialDate Fecha inicial formado dd/mm/yyyy
	 *      {string} codSuc Código sucursal
	 * @return array status|data|message
	 * @return json coincidencia búsqueda
	 * @throws Exception en caso de error en consulta
	 */
	public function technologyLoadProcess() {
		try {
			// Validación de acceso a funcionalidad y login
			$this->validateaccess->validateAccessSinges('ipo-loadCircularTech', 'json');

			$formData = $this->input->post();
			$this->load->model('business/logCircular', 'logCircular');
			$response = $this->logCircular->processCircularTechnology($formData);
			echo json_encode($response);
		} catch (Exception $exc) {
			$code = $exc->getCode() ? $exc->getCode() : 400;
			$messageException = ($exc->getMessage()) ? $exc->getMessage() : 'Ocurrio un error en la solicitud. Intente de nuevo, en caso de persistir el error contactese con el administrador';
			echo json_encode(array('status' => $code, 'message' => $messageException));
		}
	}
```