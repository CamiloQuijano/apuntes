[`Volver`](../index.html)

# PHP Laravel

## Comandos útiles
```php
	// Iniciar proyecto / Versión Específica
	composer create-project laravel/laravel MyWebAppLaravel			
	composer create-project --prefer-dist laravel/laravel blog 		
	composer create-project --prefer-dist laravel/laravel blog "6.*" --ignore-platform-reqs
	
	// Artisan
	php artisan serve  				// Iniciar servidor - Acceso en: http://127.0.0.1:8000/
	php artisan						// Listado de comandos para ejecutar
	php artisan --version  			// Versión LARAVEL
	php artisan config:cache   		// Borrar cache
	php artisan config:clear   		// Borrar cache
	php artisan route:list 			// Listado de rutas del proyecto 
	php artisan make:model Post		// Crear modelo POST
	php artisan make:model Post -m	// Crear modelo POST y archivo de migración
	
	// Composer
	composer require laravel/ui --dev	// Implementar sistema de autenticación
	composer update						// Actualizar librerias y estructura de composer.json
	composer self-update --stable 		// Actualizar la versión de composer  
	composer self-update --2			// Actualizar la versión de composer específica
	composer self-update --rollback		// Devolver versión anterior
	
	// Instalar dependencias npm
	npm install backbone
	npm install underscore
```


## Funciones útiles
```php		
	dd($xx);			// dump and die();
```

## Software Sugerido

Curso		https://www.youtube.com/watch?v=IDVrgMabqPQ&list=PLX54xtp5Ni0vOacVQ8PG_DQ3-KZMN6o3x&index=1  
Composer 	https://getcomposer.org/download/  
Laravel 	https://laravel.com/

Recomendación para visualStudio  
- Plugin Blade

## Iniciar proyecto por consola - wammp
```bash
	composer create-project laravel/laravel MyWebAppLaravel
	composer create-project --prefer-dist laravel/laravel blog

	// Descargar versión específica
	composer create-project --prefer-dist laravel/laravel blog "6.*" --ignore-platform-reqs
```

**--ignore-platform-reqs:** Ignorar requerimientos de plataforma

**--prefer-dist:** Intentaría descargar y descomprimir archivos de las dependencias usando GitHub u otra API cuando esté disponible. 
Esto se usa para descargar más rápidamente las dependencias en la mayoría de los casos. No descarga todo el historial de VCS de las 
dependencias y debería almacenarse mejor en caché. Además, los archivos en GitHub podrían excluir algunos archivos que no necesita 
solo para usar la dependencia con la directiva de exclusión .gitattributes.

**--prefer-source:** intentaría clonar y mantener todo el repositorio VCS de las dependencias cuando esté disponible. Esto es útil cuando desea 
clonar los repositorios de VCS originales en su carpeta / proveedor. Por ejemplo, es posible que desee trabajar en las dependencias: modificarlas, 
bifurcarlas, enviar solicitudes de extracción, etc. y al mismo tiempo usarlas como parte del proyecto más grande que las requiere en primer lugar.

Arranque por Wampp 	
```bash
Acceso en: http://localhost/mywebapplaravel/public/
```

## ARTISAN 

Arranque propio del proyecto  
```bash
	php artisan serve  		// Iniciar servidor - Acceso en: http://127.0.0.1:8000/
	php artisan				// Listado de comandos para ejecutar
	php artisan --version  	// Versión LARAVEL
```

## Directorios

webpack -> para minimificar archivos automaticamente de unos directorios específicos  
vendors -> dependencias   
HTML -> Templates de ejemplo  
storage -> almacenamiento  
routes -> rutas  del proyecto (navegación)  
resuorces -> js, sass, langs (traducciones), vistas  
public ->  
database -> migración, scripts  
app -> http -> controllers | modelos  
.env  
	- Variables conexión DB  
	- Nombre del proyecto, entorno  
	- Configuración email  

## Routes

Estructura routes
- Ubicación Views/*
- Parametro 1 ruta 
- Parámetro 2 función con parámetros
- ->name: Nombre con el que se puede referenciar

```php
	
	// Ruta con funcion 
	Route::get('/home', function () {
		return view('home'); // resources/views/home.blade.php
	});
	
	// Ruta con funcion 
	Route::get('myroute', function(){
		return 'this is the view content';
	});
	
	// Ruta con Clase y función
	Route::get("myroute", "HomeController@index")->name('admin');
	
	// Ruta con parámetros
	Route::get("editar/{postId}", "HomeController@edit");
	
	// Métodos
	Route::get()
	Route::post()
	Route::put()
	Route::patch()
	Route::delete()
	Route::options()
```

### Estructura de rutas (Crud)

```php
	
	// Posts - Estructura crud
	Route::get('/posts', 'PostsController@index');
	Route::post('/posts', 'PostsController@store');
	Route::get('/posts/create', 'PostsController@create');
	Route::get('/posts/{post}', 'PostsController@show');
	Route::patch('/posts/{post}', 'PostsController@update');
	Route::delete('/posts/{post}', 'PostsController@destroy');
	Route::get('/posts/{postId}/edit', 'PostsController@edit');
	
	ó 
	
	Route::resource('/posts', 'PostsController');
```

```html
	<!-- Enlaces en víews, tal cual como primer parámetro de routes -->
	<li class="nav-item">
		<a class="nav-link" href="/home">Home</a>
	</li>
	
	<!-- Llamado a nivel de vista, si tiene definida la posición ->name('admin') -->
	<a class="dropdown-item" href="{{ route('admin') }}">
		Dashboard
	</a>
```

### Validación de sesión 

En routes - *routes/web*
```php
	// Validación de session 
	Route::get('/admin', 'AdminController@index')->middleware('auth');
```

En Controlador - constructor
```php
	public function __construct() {
        $this->middleware('auth');
    }
```

### Poner login como ruta por defecto

```php
	// web.php
	Route::get('', 'Auth\LoginController@showLoginForm')->name('login');
```


## Controladores

Ubicación en *app/http/controller*

por artisan: 
- último parámetro nombre del controllador 

```bash
	// Crear Controlador vacio
	php artisan make:controller AdminController
	
	// Crear controlador partiendo de estructura de rutas (-r Resources | -m Modelo)
	php artisan make:controller AdminController -r -m Post
	
	// Mostrar ayudas en consola
	php artisan help make:controller
	
```

Llamar vista en controlador
```php

	// Instanciar modelo post
	use App\Post; 
	
	public function index() {
	
		// Consultar datos de modelos POST
		$posts = Post::get();
		
        // Nombre directorio (.) Nombre archivo (sin blade.php) , con parámetros
		return view('admin.posts.index', [
            'posts' => $posts
        ]);
    }
```



## Blade template

https://laravel.com/docs/7.x/blade


Estructura base o template 
Ubicación **views/layouts/template.blade.php**  
**@yield('content')** contendra el nombre de los elementos dinámicos  

```html
	<html>
		<head>
		</head>
		<body>
			@yield('content')
			-------------
			@yield('test')
		</body>
	</html>
```

Estructura en vista que usa template

```html
	@extends('layouts.template')

	@section('content')
		<h1>Contenido dinámico</h1>
	@endsection
	
	@yield('test')
		<h1>Contenido dinámico 2</h1>
	@endsection
```

### Instalacion de librerias e incluir en template backbone - underscore

Instalar dependencias via npm
```js
	npm install backbone
	npm install underscore
```

Incluir en template
```html
	<script src="{{ asset('node_modules/underscore/underscore-min.js') }}"></script>
	<script src="{{ asset('node_modules/backbone/backbone-min.js') }}"></script>
```

## Iteraciones for - foreach

Foreach: Se puede imprimir como objeto o como array

```html
	@for ($i = 0; $i < 10; $i++)
		The current value is {{ $i }}
	@endfor

	@foreach ($users as $user)
		<p>This is user {{ $user->id }}</p>
	@endforeach

	@forelse ($users as $user)
		<li>{{ $user->name }}</li>
	@empty
		<p>No users</p>
	@endforelse

	@while (true)
		<p>I'm looping forever.</p>
	@endwhile
```
						
  
## Uso @INCLUDE

Incluir el nombre del directorio . nombre archivo (sin el blade.php)

*resources/views/partial/navbar.blade.php*
```html
	<div>
		Incluide content
	</div>
```

*resources/views/layouts/app.blade.php*
```php
	@include('partial.navbar')
```

## Validaciones en vistar con ruta

- Si no estamos en el login (Ruta), no mostrar sección menu
```php
	@if(!\Request::is('login') && !\Request::is('register'))
		@include('partial.navbar')
	@endif
```

## Estructura estilos y JS

### CSS - Compilación SCSS

Ubicación SCSS *resources/assets/sass/app.scss*
- Realizar imports o includes en app.*
- Compilación incluida en **webpack.mix.js** 
	- app.scss a public/sass
	- app.js a public/js

```php
	mix.js('resources/assets/js/app.js', 'public/js')
       .js('resources/assets/js/clean-blog.js', 'public/js')
	   .sass('resources/assets/sass/app.scss', 'public/css');
```

Para la compilación de assets es necesario tener instalado **node** y **npm**  
Una vez ejecutado el comando generará los archivos en la carpeta **public/css** y **public/js**

```bash
	// Instalar dependencias de laravel ubicarse en raiz proyecto
	npm install 

	// Desarrollo
	npm run dev

	// Producción - minimifica
	npm run production
```

El llamado de los css y/o js unificación se realizarían asi:
```html
	<!-- Partiendo de la carpeta public -->
	<link href="{{ asset('js/app.js') }}" rel="stylesheet">
```

## JS - compilación

```php
	mix.js('resources/assets/js/app.js', 'public/js')
       .js('resources/assets/js/clean-blog.js', 'public/js')
	   .sass('resources/assets/sass/app.scss', 'public/css');
```

El llamado de los css y/o js unificación se realizarían asi:
```html
	<!-- Partiendo de la carpeta public -->
	<script src="/js/clean-blog.js"></script>
```

## Imágenes

Ubicación Imágenes Originales:  
- Storage/app/public/*

Enlazar contenido de **Storage/app/public/** a **public/**:

```bash
	php artisan storage:link
```

Enlazar imágenes en vistas  
- assets es el path de public
```html
	
	<!-- Imprimir path imagen -->
	{{ asset('/storage/img/home-bg.jpg') }}
	
	<header class="masthead" style="background-image: url({{ asset('/storage/img/home-bg.jpg') }})">
```

## Sistema de autenticación 
- Controladores y vistas relacionadas a:  
	- Inicio sesión
	- Registrar 
	- Olvide contraseña

```bash
	composer require laravel/ui --dev	 		// Instalar versión por defecto
	composer require laravel/ui "^1.2"			// Instalar versión específica

	php artisan ui vue --auth
```

## Configurar Database

Uso DB sqlite

*config/database.php*
- **database.sqlite**: es el nombre del archivo en el que se va a crear la DB, en caso de requerir este tipo de DB, crear archivo vacio en la ruta *database/*

```php
	'sqlite' => [
		'driver' => 'sqlite',
		'url' => env('DATABASE_URL'),
		'database' => env('DB_DATABASE', database_path('database.sqlite')),
		'prefix' => '',
		'foreign_key_constraints' => env('DB_FOREIGN_KEYS', true),
    ],
```

*.env*
```php
	DB_CONNECTION=sqlite
	DB_HOST=127.0.0.1
	DB_PORT=3306
	
	// Borrar estos tres
	DB_DATABASE=laravel
	DB_USERNAME=root
	DB_PASSWORD=
```

Uso DB mysql

Ubicación *app/providers/RouteServiceProvider*  
Incluir línea de Schema

```php
	public function boot() {
		Schema::defaultStringLength(191); // New: Increase StringLength
	}
```
	
*.env*
```php
	DB_CONNECTION=mysql
	DB_HOST=127.0.0.1
	DB_PORT=3306
	DB_DATABASE='mwapplaravel'
	DB_USERNAME=root
	DB_PASSWORD=
```

Migrar estructura de la DB al archivo vacio

```bash
	php artisan migrate
```
 
 En caso de error: 
	*SQLITE Database throw error could not find driver (SQL: PRAGMA foreign_keys = ON;)*
	
Validar en php.ini que la extensión **extension=pdo_sqlite** este descomentada
	
## MIGRACIONES

Ficheros que ayudan a actualizar la estructura de la DB 

```bash
	php artisan make:migration create_users_table
	// create_: Acción a realizar (create_, add_)
	// _users_: Nombre de la tabla
```

Estructura ficheros 
- función **up**: Creación columnas, tablas
- función **down**: Eliminar columnas, etc.

```php
	public function up(){
		Schema::create('posts', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('name', 100);	
			$table->text('description');
			$table->integer('userId');
			$table->timestamps();
		});
	}

	public function down(){
		Schema::dropIfExists('posts');
	}
```

### Migrar estructura de la DB al archivo vacio

```bash
	php artisan migrate
```

### Borra-Recrea estructura DB

```bash
	php artisan migrate:rollback
	php artisan migrate
```

### Agregar columna sin eliminar registros 
- add_: agregagar columnas
- post_new_columns_table: Detalles del contenido del fichero
- --table:post: Nombre de la tabla

```bash
	php artisan make:migration add_post_new_columns_table --table=posts
	php artisan migrate
```

### Eliminar columna 

- Incluir en *doctine/dbal* en composer, y ejecutar *composer update*

```bash
	php artisan make:migration drop_post_new_columns_table --table=posts
	php artisan migrate
```

```php
	public function up() {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn('testColumn');
        });
    }
```

Columnas y tipos de datos  
https://laravel.com/docs/7.x/migrations#creating-columns


## Modelos

Los modelos son como las entidades de DB  
https://laravel.com/docs/6.x/eloquent#retrieving-models

- Ubicación en *app/*


### Crear modelo por consola 
```bash
	php artisan make:model Post
```

### Consultas a modelos 

```php

	// Consultar registro específico
	$post = Post::find($post->id);
	
	// Consultar registro específico (Genera excepción si no existe)
	$post = Post::findOrFail($post->id);
	
	// Consultar datos de modelos POST
	$posts = Post::get();
	
	// Consultar datos de modelos POST con filtros
	$posts = Post::where('userId', 7)
		->orderBy('title', 'desc')
		->get();
		
	// Consultar y eliminar
	$postM = Post::findOrFail($post->id);
	$postM->delete();
	
	// Consultar primer registro
	$user = User::where('email', $email)->first();
	
	// Consultar primer registro (Genera excepción si no existe)
	$user = User::where('email'$email)->firstOrFail();
	
	// Consultar where variable sea diferente
	$docContractUserExist = ss_usuariocontratos::where('tipoContrato', 1)
		->where('id', '!=', $contract->id)
		->get();
```

### Eliminar un registro e imagen (Back)

```php
	public function destroy(Post $post) {
        $postM = Post::findOrFail($post->id);
        
        $image = public_path("storage/images/posts/").$postM->image;
        if(file_exists($image)) { unlink($image); }

        $postM->delete();
        return redirect('posts');
    }
```

## Estructura modelo 

- Control de autoincremetal
- Control de nombre de tabla (Bug pluralidad)
- Control de timestamp (Bug updated_at)
- Ejemplo control doble primary key

```php
	use Illuminate\Database\Eloquent\Builder;

	class ss_usuariocontratodocumentoshv extends Model {
		// Indicador que tabla no maneja ID con autoincremental
		public $incrementing = false;

		// Por error de pluralidad en consultas (x defecto laravel de agrega la s al final)
		public $table = "ss_usuariocontratodocumentoshv";

		// Deshabilita updated_at 
		public $timestamps = false;

		protected $primaryKey = ['documentoHVCodigo', 'usuarioContratoId'];

		/**
		 * Actualizar keys para actualizar consultas modo Seguro
		 * @param \Illuminate\Database\Eloquent\Builder  $query
		 * @return \Illuminate\Database\Eloquent\Builder
		 */
		protected function setKeysForSaveQuery(Builder $query)
		{
			return $query
				->where('documentoHVCodigo', $this->getAttribute('documentoHVCodigo'))
				->where('usuarioContratoId', $this->getAttribute('usuarioContratoId'));
		}
	}
```
	

## En caso de error 1054 Unknown column 'updated_at' in 'field list'

Detalle error:  	
```php
	message: "SQLSTATE[42S22]: Column not found: 1054 Unknown column 'updated_at' in 'field list' 
	(SQL: insert into `ss_usuariocontratodocumentoshv` (`documentoHVCodigo`, `usuarioContratoId`, 
	`indicador`, `updated_at`, `created_at`) values (8, 1, 2, 2021-02-05 02:47:47, 2021-02-05 02:47:47))"
```

Solución: En modelo deshabilitar timestamps
```php
	class ss_usuariocontratodocumentoshv extends Model {
		// Deshabilita updated_at 
		public $timestamps = false;
	}
```


## En caso de error Illegal offset type al actualizar registro con doble primary key

En modelo incluir la función setKeysForSaveQuery para claves compuestas
https://stackoverflow.com/questions/36332005/laravel-model-with-two-primary-keys-update

Detalle error:  	
```php
	exception: "ErrorException"
	file: "C:\Users\MAICK\Desktop\ssControlDocumentos\vendor\laravel\framework\
		src\Illuminate\Database\Eloquent\Model.php"
	line: 776
	message: "Illegal offset type"
```

Solución: 
```php
	protected function setKeysForSaveQuery(Builder $query) {
		return $query
			->where('documentoHVCodigo', $this->getAttribute('documentoHVCodigo'))
			->where('usuarioContratoId', $this->getAttribute('usuarioContratoId'));
	}
```

## Relaciones

https://laravel.com/docs/6.x/eloquent-relationships

### Relación 1-M (Inversa) 

Ej. un post lo crea un único usuario, pero un usuario tiene multiples post 

Parámetros
1. Modelo relacionado
1. Id relación foreign_key, si el id es Ej. user_id no es necesario definirla

```php
	class Post extends Model
	
		public function user() {
		
			// Opción 1 (Con id foreign_key en estructura modelo_id)
			return $this->belongsTo('App\User');
			
			// Opción 2 (Definiendo el Id de la foreign_key)
			return $this->belongsTo('App\User''userId');
		}
	}
```

Acceso de info en vísta (Acceso completo a los datos del modelo relacionado)
**user** hace relación al mombre de la función en el modelo

```html
	{{ $post->user['email'] }}
	{{ $post->user['name'] }}
```


## TINKERS

### Insertar datos

```bash
	php artisan tinker	
	
	// Imprimir datos de Folder\Modelo
	App\Post::all() 
	
	// Crear instancia del modelo post | asignar datos
	$post = new App\Post;	
	$post->title = 'Title 1';
	$post->description = 'description 1';
	$post->image = 'route/image.png';
	$post->userId = 1;
	
	// Guarda los datos
	$post->save();		

	// Salir consola
	exit;
```

## Factories

### Insertar datos masivamente para testeo

Ubicación en *database/factories*

Párametros
1. Clase (modelo)
2. Cantidad de registros

```bash
	php artisan tinker	

	factory(App\User::class, 200)->create();
```

### Crear factory
```bash
	php artisan make:factory PostFactory
```
```php
	use App\Post;
	use Faker\Generator as Faker;
	$factory->define(Post::class, function (Faker $faker) {
	
		// Estructura de tabla | $faker es el simulador de datos (validar Faker\Generator)
		return [
			'title' => $faker->jobTitle,
			'description' => $faker->paragraph,
			'image' => $faker->url,
			'userId' => $faker->randomDigitNotNull
		];
	});
```

En caso de error
*InvalidArgumentException with message 'Unable to locate factory with name [default] [App/Post]*.  
- valide que el use **App\Model**, y el **->define(Post)**  
- Salir de consola tinker y volver a ingresar para que tome los cambios

## FORMULARIOS 

Estructura formulario
- csrf_field() | @csrf(): Token de seguridad del formulario
- old('title'): En caso de que el formulario caiga en el envio por validaciones, precarga el valor previamente enviado, no funciona con input=file

```html
	<!-- Estructura formulario creación -->
	<form method="POST" action="{{ asset('posts')}}" enctype="multipart/form-data">
        {{ csrf_field() }}
        <div class="form-group">
            <label for="title"> Titulo</label>
            <input id="title" type="text" name="title" class="form-control" placeholder="title" value="{{ old('title') }}">
        </div>
        <div class="form-group">
            <input type="submit" value="Enviar" class="btn btn-primary">
        </div>
    </form>
	
	<!-- Estructura formulario edición método PATCH -->
	<form method="POST" action="{{ asset('posts/'.$post->id)}}" enctype="multipart/form-data">
        @method('PATCH')
		@csrf()
	</form>
```

### Incluir Token de seguridad csrf
```php
	{{ csrf_token() }}		// Contenido del token (Solo el value)
	{{ csrf_field() }}		// Input hide con token
	{{ @csrf() }}			// Input hide con token
```

### Validar formularios 

https://laravel.com/docs/7.x/validation#introduction

Tipos de validaciones  
https://laravel.com/docs/7.x/validation#available-validation-rules

```php
	// Validar formulario
	$data = request()->validate([
		'title' =>  'required|max:255|',
		'image' => 'required|image',
		'description' => 'required'
		'email' => 'required|email'
		'userTypeDoc' => 'exists:ss_tipodocumentos,codigo', // Relación table,columna
	]);
	
	$user = auth()->user();
	
	// Entidad en DB - guardar registro.
	$post = new Posts();
	$post->title = request('title');
	$post->image = request('image');
	$post->description = request('descripction');
	$post->user_id = $user->id;
	$post->save();
	
	return redirect('posts');
```

### Mostrar errores en caso de que no supere las validaciones

```html
	<!-- Bloque de impresión de errores del form -->
	@if ($errors->any())
		<div class="alert alert-danger">
			<ul>
				@foreach ($errors->all() as $error)
					<li>{{ $error }}</li>
				@endforeach
			</ul>
		</div>
	@endif
	
	<!-- Errores por elemento -->
	<div class="col-xl-4 col-md-6">
		<div class="form-group">
			<label for="userName">Nombres:</label>
			<input type="text" class="form-control" id="userName" name="userName">
			@error('userName')
				<span class="text-danger"> {{ $message }} </span>
			@enderror
		</div>
	</div>
```


### Mostrar respuesta exitosa uso flasdata
Generar flashdata en petición post al finalizar el proceso  

```php
	request()->session()->flash('status', "Usuario {$name} fue creado exitosamente");
	return redirect('usuarios/crear');
```

Mostar en vista la alerta flashdata

```php
	<!-- Respuesta proceso exitoso -->
	@if (session('status'))
		<div class="p-3">
			<div class="alert alert-success" role="alert">
				{{ session('status') }}
			</div>
		</div>
	@endif
```

## Procesar imagenes con storeAs
- storeAs parte de **storage\app\**

```php
	// Cargar una imagen
	$filenameWithExt = request('image')->getClientOriginalName();   // Nombre original
	$fileext = request('image')->getClientOriginalExtension();      // Extensión archivo
	$filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
	$filenameDB = "{$filename}_".time().".{$fileext}";
	$path = request('image')->storeAs('public/images/posts', $filenameDB);
```

## Enlazar imagen en vista
```html
	<img src="{{ asset('storage/images/posts/'.$post->image) }}" alt="{{ $post->image) }}" />
```

## Acceder a información de la sesión 

```php
	// Traer info de sessión
	$user = auth()->user();
	dd($user->id);
```

## Redireccionar 
```php
	return redirect('posts');
```

## Renderizar código HTML 
```html
	{!! $post->description !!}
```

## Validación de sessión 
```html
	<div class="card-body">
		@if (session('status'))
			<div class="alert alert-success" role="alert">
				{{ session('status') }}
			</div>
		@endif
		You are logged in!
	</div>
```

## HELPERS
https://laravel.com/docs/8.x/helpers#introduction

Ubicación: *app/*

Ejemplo helper

```php
	/**
	 * Estructura para crear función en helper
	 * - Función para cortar el texto
	 */
	if(!function_exists('getShorterString')) {
		function getShorterString($text, $length = null) {
			$formatString = ucwords($text);
			if ($length == null) { return $formatString; }
			if(strlen($formatString) > $length) {
				$formatString = substr($formatString, 0, $length);
			}
			return $formatString;
		}
	}
```

Para autoiniciar helpers con proyecto incluir en *composer.json*

```json
	"autoload": {
		...
        "files": [
            "app/helpers.php"
        ],
```

Uso de helper en vista

```html
	{!! getShorterString($post->description, 50) !!}
```	

Finalmente ejecutar por consola

```bash
	composer dump-autoload
```


## Paginación
https://laravel.com/docs/6.x/pagination

- Bloque de número de páginas
- No funciona con el all 

```php
	// Formas de paginar
	$users = App\User::paginate(15);
	$posts = Post::orderBy('id', 'desc')->paginate(5);
```

Generar estructura de paginación en vista
```html
	{{ $posts->links() }}
```

### Paginación Simple
- Previous - Next 

```php
	// Forma de paginar
	$posts = Post::orderBy('id', 'desc')->simplePaginate(5);
```

Generar estructura de paginación en vista
```html
	{{ $posts->links() }}
```

### Personalizar paginación

```bash
	php artisan vendor:publish --tag=laravel-pagination
	// Crea ubicación: \resources\views\vendor\pagination
```

-  se cambiaría y personaliza el menú
	- paginate(): simple-bootstrap-4.blade.php
	- simplePaginate(): simple-default.blade.php


## Actualizar version framework

Documentación: https://laravel.com/docs/7.x/upgrade
Github: https://github.com/laravel/laravel/blob/7.x/composer.json

1. Validar los requerimientos en la documentación, Ejemplo. Versión PHP
2. Actualizar el composer con las versiones de sus dependencias.
3. Una vez realizados los cambios ejecutar:
	```bash
		composer update
	```

### Cambio de 6.x a 7.x

Actualizar los siguientes archivos a la versión 7.
- Composer.json
- App/Exceptions/Handler.php
- Ejecutar

	```bash
		// Si tiene módulo de autenticacion Ejecutar:
		composer require laravel/ui "^2.0"
		composer update
	```

## Curso de Blogs - proyecto

```bash
	// Clonar proyecto repositorio GIT
	git clone https://github.com/CamiloQuijano/MyWebAppLaravel
	
	// Instalar dependencias
	composer install
```

-----------------------------------------

Validar versiones de librerias
https://packagist.org/packages/laravel/ui#v1.2.0


## Respuesta JSON petición AJAX

```php
	$contracts = ss_usuariocontratos::all();

	// Respuesta tipo JSON de distintas formas
	return response()->json($contracts, 202);
	return response()->json($contracts);
	return $contracts->toJson();
```


## Ejemplo estructuracion consultas BUILDER con JOIN 

Importante incluir instancia a DB  
```php
	use Illuminate\Support\Facades\DB;
```
	
### builder select from join 
```php
	// use Illuminate\Support\Facades\DB;
	return  DB::table('ss_usuariocontratos AS suc')
		->join('ss_usuarios AS su', 'suc.usuarioId', '=', 'su.id')
		->join('ss_usuarioCargos AS suca', 'su.cargoId', '=', 'suca.id')
		->selectRaw('suc.id, su.nombres, suca.descripcion AS cargo')
		->get();
```

### builder select from leftJoin on doble valor

```php
	// use Illuminate\Support\Facades\DB;
	return  DB::table('ss_documentoshv AS d')
		->leftJoin('ss_usuariocontratodocumentoshv AS ud', function($join) use ($contratUserId) {
			$join->on('ud.documentoHVCodigo', '=', 'd.codigo');
			$join->on('ud.usuarioContratoId', '=', DB::raw($contratUserId));
		})
		->selectRaw('d.codigo, d.descripcion, ud.indicador, ud.observaciones')
		->get();
```


### builder select from where orWhere

```php
	// use Illuminate\Support\Facades\DB;
	$users = DB::table('users')
		->where('votes', '>', 100)
		->orWhere('name', 'John')
		->get();
```

### builder consultar solo un registro select from where first

```php
	$documernContractUser = ss_usuariocontratodocumentoshv::where('documentoHVCodigo', $documentCode)
		->where('usuarioContratoId', $userContractId)
		->firstOrFail();
```

### builder insert

```php
	// Opción 1
	$X = DB::table('ss_usuariocontratodocumentoshv')->insert([
		'indicador' => 1,
		'usuarioContratoId' => $userContractId,
		'documentoHVCodigo' => $documentCode
	]);
	
	// Opción 2
	$xx = new ss_usuariocontratodocumentoshv();
	$xx->documentoHVCodigo = $documentCode;
	$xx->usuarioContratoId = $userContractId;
	$xx->indicador = '2';
	$xx->save();
```


### builder Update Actualizar

```php
	$page = Page::find($id);
	if($page) {
		$page->image = 'imagepath';
		$page->save();
	}
```
	
	
### Funcion ejemplo que actualiza-crea registro si no existe

```php
	/**
	 * Crear/Actualizar Documentos de contrato
	 * @author Camilo Quijano <camiloquijano31@hotmail.com>
	 * @date 01/02/2021
	 * @method POST
	 * @param {int} documentCode Código del documento
	 * @param {int} userContractId ID Contrato de Usuario
	 * @param {mixed} action Tipo de acción a realizar (1|0|N/A)
	 * @route documentosContratos/actualizar
	 * @return json estado solicitud
	 */
	public function setContractDocuments() {

		// Recibir parámetros
		$documentCode = request('documentCode');
		$userContractId = request('userContractId');
		$action = request('action');

		// Consultar existencia de documento de contrato del usuario
		$docContractUserExist = ss_usuariocontratodocumentoshv::
			where('documentoHVCodigo', $documentCode)
			->where('usuarioContratoId', $userContractId)
			->first();

		if($docContractUserExist) {
			// Si existe se actualiza el indicador
			$docContractUserExist->indicador = $action;
			$docContractUserExist->save();
			$response = 'documento contrato ACTUALIZADO correctamente';
		} 
		
		else {
			// Si no existe crea registro
			$docContractUserNew = new ss_usuariocontratodocumentoshv();
			$docContractUserNew->documentoHVCodigo = $documentCode;
			$docContractUserNew->usuarioContratoId = $userContractId;
			$docContractUserNew->indicador = $action;
			$docContractUserNew->save();
			$response = 'documento contrato CREADO correctamente';
		}

		return response()->json($response, 200);
	}
```

### Imprimir ultima consulta realizada

```php
	// Opción 1: Cambiar get por toSql
	$query = User::select("*")->toSql();
	dd($query);

	// Opción 2: Actulizar log e imprimir consulta
	DB::enableQueryLog();
	$users = User::select("*")->get();
	print_r(DB::getQueryLog());
	
	// SALIDA: select * from `users`
```


## Configurar ruta por defecto - homeURI

Cuando un usuario se autentica con éxito, será redirigido al /homeURI. 
Puede personalizar la ruta de redireccionamiento posterior a la autenticación 
utilizando la constante HOME:

```php
	// RouteServiceProvider.php
	public const HOME = '/home';
```

## Configurar redireccionar usuarios no autenticados 

Cuando el authmiddleware detecta un usuario no autorizado, 
redirigirá al usuario a la ruta definida en la función redirectTo:

```php
	// app/Http/Middleware/Authenticate.php
	protected function redirectTo($request) {
		return route('login');
	}
```

## Textos validaciones lenguaje espanol

Para cambiar los textos de las validaciones en español será necesario:  

Crear archivo:  
resources/langs/es/validation.php 
(Se podría tomar el de ingles y realizar las traducciones o descargar en internet) 


adicionalmente: 

```php
	// config/app.php
	'locale' => 'es',
```

## Texto dinamicos traduccions lenguaje espanol

Para cambiar el texto dinamico del error (Nombre del input)  
incluir en la sección atributos el nombre del input y su traducción

```php
	// resources/langs/es/validation.php
	'attributes' => [
		'first-name' => 'Primer nombre'
	],
```
```html
	<input id="first-name" name="first-name" type="text" value="">
	<!-- 
		Ejemplo en vista 
		Salida original:  El campo first-name es obligatorio.  
		Salida con traducción: El campo Primer Nombre es obligatorio.
	-->
```