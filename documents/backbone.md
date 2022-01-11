[`Volver`](../index.html)

# Backbone

Tutorial:
http://alfonsomarin.com/backbonejs/

## Implementar - documentacion

Documentación:    
https://backbonejs.org/  

[`Descargar librería`](libraries/backbone-min.zip)  

Implementación:  
```html
    <script src="resources/plugins/backbone-min.js"></script>
```

## Formato a numeros
###### Tags: `backbone` `underscore` `js` `numberformat` `parceInt` `currency`

se usa parseInt, para en caso de que el formato del número sea string
```js
	<%= _.numberFormat(parseInt(item.price)) %>
```


## Ejemplo Render con template 

```javascript
	// Render de respuesta
	var template = $("#detailsAccelerationPointTmpl").html();
	var dataResponse = (response.data && response.data.detailsByProd) ? response.data.detailsByProd : null;

	// Pintar Render html
	var renderTmpl = _.template(template, {variable: 'data'})({ products: dataResponse });
	$('#modalAcceletarationPoints .detailsAccelerationPoint').html(renderTmpl);
```

## Ejemplo template

```javascript
	<!-- Tmpl de Modal de puntos aceleración -->
	<script type="text/template" id="detailsAccelerationPointTmpl">
		<div>
			<% if(!data.products) { %>
			<div class="alert alert-info mt-3">
				<strong>Importante!</strong> No hay campañas activas en este periodo
			</div>
			<% } %>
			<div class="card-group">
				<% _.each(data.products, function(prod) { %> <% if(prod.rows) { %>
				<div class="card warp__singular">
					<div class="card__wrap">
						<div class="card-header">
							<%= prod.nameProd %>
						</div>
						<div class="card-body">
						<div class="col-xs-12 col-sm-8">
							<div class="col-xs-12 border-l">
								<div class="row">
									<div class="col-xs-12 col-sm-4">
										<ul class="list-group list-group-flush">
											<li class="list-group-item">Rol: <b><%= prod.nameRol %></b></li>
											<li class="list-group-item">Grupo: <b><%= prod.nameGroup %></b></li>
											<li class="list-group-item">Campaña: <b><%= prod.nameBell %></b></li>
										</ul>
									</div>
									<div class="col-xs-12 col-sm-8">
										<div class="progressbar__wrap">
											<div class="progressbar-title">
												<span class="percent"> <%= prod.totalFulfillment %> </span>
											</div>
											<div class="bar-container">
													<span class="progressbar" style="width: <%= (prod
													.totalFulfillmentVal > 100)  ? 100 : prod.totalFulfillmentVal %>%"></span>
												<div class="statistics__items">
													<div class="statistics__item percent-a">100%</div>
													<div class="statistics__item percent-b">75%</div>
													<div class="statistics__item percent-c">50%</div>
													<div class="statistics__item percent-d">25%</div>
													<div class="statistics__item percent-e">0%</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xs-12 border-l pt-1 table__results">
									<table class="table table__singular">
										<thead>
										<tr>
											<th scope="col">Semana</th>
											<th scope="col">Meta</th>
											<th scope="col">Puntos</th>
											<th scope="col">% Cumplimiento</th>
											<th scope="col">Puntos Aceleración</th>
											<th scope="col"></th>
										</tr>
										</thead>
										<tbody>
										<% _.each(prod.rows, function(row) { %> <% xxx = (row.pointsAcceleration > 0) ? 'active' : 'deneged' %>
										<tr class="<%= xxx %>">
											<th class="ta-r" scope="row"><%= row.week %></th>
											<td class="ta-r"><%= row.threshold %></td>
											<td class="ta-r"><%= row.points %></td>
											<td class="ta-r"><%= row.fulfillment %></td>
											<td class="ta-r"><%= row.pointsAcceleration %></td>
											<td class="ta-r"></td>
										</tr>
										<% }); %>
										</tbody>
										<tfooter>
											<tr>
												<th>Total</th>
												<td class="ta-r"><%= prod.totalThreshold %></td>
												<td class="ta-r"><%= prod.totalPoints %></td>
												<td></td>
												<td class="ta-r"><%= prod.totalPointsAcc %></td>
												<th class="ta-r"><%= prod.total %></th>
											</tr>
										</tfooter>
									</table>
								</div>
						</div>
							<div class="col-xs-12 col-sm-4">
								<div class="col-xs-12 ta-c">
									<%= prod.titleConsolidate %>
								</div>
								<div class="col-xs-12 mt-2">
									<table class="table table__singular table__results tableColor">
										<tbody>
										<tr>
											<th scope="row"> Umbral Mes</th>
											<td class="ta-r"><%= prod.totalThreshold %></td>
										</tr>
										<tr>
											<th scope="row"> Total Puntos <br/>(Puntos + Puntos Promo)</th>
											<td class="ta-r"><%= prod.totalPoints %></td>
										</tr>
										<tr>
											<th scope="row"> <%= prod.nameBell %> a hoy</th>
											<td class="ta-r"><%= prod.totalPointsAcc %></td>
										</tr>
										<tr>
											<th scope="row"> Total</th>
											<td class="ta-r"><%= prod.totalPointsAll %></td>
										</tr>
										<tr>
											<th scope="row"> Cumplimiento Mes</th>
											<td class="ta-r"><%= prod.totalFulfillment %></td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<% } %> <% }); %>
			</div>
		</div>
	</script>
```

Implementaciones:
- Altactic: Módulo tareas y chat
- Channeldir: Publicaciones, likes, comentarios, feedback, favoritos