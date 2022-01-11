/* global _: Underscore */

/**
 * JS de consultar
 * @author Camilo Quijano <camiloquijano31@hotmail.com>
 * @date 07/10/2020
 */
var search = (() => {
	
    var settings = {};
    var interval, searchText = '', listClass = [];

	/**
     * Renderizar menú de helpers principal
     * @param {artay} helpers estructura de menu a renderizar (En caso de no venir se asigna el por defecto)
     * @returns {undefined}
     */
    var generateMenu = (helpers) => {
		// Pintar Render html
		var template = $("#helpersMenuPrimaryTemplate").html();
        let auxhelpers = (helpers) ? helpers : settings.helpersPrimary;
		var renderTmpl = _.template(template, {variable: 'data'})({ helpers: auxhelpers });
        $('#menuprimary').html(renderTmpl);
	};
	
    /**
     * Renderizar menú de helpers Detallado
     * @returns {undefined}
     */
    var generateMenuDetails = () => {
        // Pintar Render html
		var template = $("#helpersTemplate").html();
        var renderTmpl = _.template(template, {variable: 'data'})({ helpers: settings.helpers });
        $('#menu').html(renderTmpl);
    };

    // Iniciar eventos JQUERY
    var initEventsListener = () => {

        // Evento keyup de input de búsqueda
        $("#searchMenu").keyup((e) => {
            keyPressSearch();
        });
        
        // Evento keyup de input de búsqueda (menu principal)
        $("#searchPrimaryMenu").keyup(() => {
            searchPrimaryMenu();
        });
		
        // Evento click a tipo específico
		$("body").on('click', '.filtertype', (e) => {
			let key = $(e.currentTarget).data('id');
			filterByType(key);
		});
    };

    /**
     * Evento keyup de input de búsqueda (menu principal)
     * @returns {undefined}
     */
    var searchPrimaryMenu = () => {
        // Identificar valor a consultar
        let searchText  = cleanAccents($("#searchPrimaryMenu").val().toLowerCase());
        
        // Iteramos opciones y generamos array de coincidencias
        // conservando el KEY para que el sistema de filtros siga 
        // funcionando
        var helpersPrimaryFilter = [];
        _.each(settings.helpersPrimary, function(help, key) {
            var auxhelp = cleanAccents(help.title.toLowerCase());
            if(auxhelp.includes(searchText)) {
                helpersPrimaryFilter[key] = help;
            }
        });
        
        // Renderizar menu con coincidencias
        generateMenu(helpersPrimaryFilter);
    }
    
    /**
     * Evento keypress de formulario de búsqueda
     * @returns {undefined}
     */
    var keyPressSearch = () => {
        
        // Identificar texto a consultar
        searchText  = cleanAccents($("#searchMenu").val().toLowerCase());
        clearInterval(interval); //Limpia el intervalo de escritura del usurio
        interval = setInterval(function () { //Ejecuta la función despues de que deje de escribir

			listClass = [];

			// Minimo de caracteres | Mostrar todo
			if (!searchText || searchText === '' || searchText.length <= 2) {
                	$(".menu, .submenu").show(); // Ocultar menu/submenu
				return;
			}

			// Iniciar proceso de búsqueda
			setTimeout(() => {
				processSearch(); // Ejecuta la función de busqueda
				clearInterval(interval);
			}, 100);

        }, 100);
    };

    /**
     * Procesar búsqueda
     * @returns {undefined}
     */
    var processSearch = () => {
            
		$('#searchNoResults').hide();
		$(".menu, .submenu").hide();	// Esconder todo el menú

		// Iniciar consulta
		searchDataHelpers();

		// Recorre las clases de menú a buscar y mostrar
		$.each(listClass, (key, menuId) => {
			$("#"+menuId).show();
		});

		// Si no existen elementos mostrar no resultados
		if(!listClass.length) {
			$('#searchNoResults').show();
		}
    };
    
    /**
     * Iniciar búsqueda Nivel 1
     * @returns {undefined}
     */
    var searchDataHelpers = () => {
        _.each(settings.helpers, (helper, key) => {
            if(validateTextInMenu(helper.title, helper.tags)) {
                listClass.push('menuId'+key);
            }
            validateLevel2(helper.subnivels, key);
        });
    };
    
    /**
     * Iniciar búsqueda Nivel 2
     * @param {object} subnivels estrutura helpers subnivel
     * @param {int} keyL1 key nivel 1
     * @returns {undefined}
     */
    var validateLevel2 = (subnivels, keyL1) => {
        if(subnivels) {
            _.each(subnivels, (helper, keyL2) => {
                if(validateTextInMenu(helper.title, helper.tags)) {
                    listClass.push('menuId'+keyL1);
                    listClass.push('menuSub'+keyL1);
                    listClass.push('menuId'+keyL1+'-'+keyL2);
                }

                validateLevel3(helper.subnivels, keyL1, keyL2);
            });
        }
    };

    /**
     * Iniciar búsqueda Nivel 3
     * @param {object} subnivels estrutura helpers subnivel
     * @param {int} keyL1 key nivel 1
     * @param {int} keyL2 key nivel 2
     * @returns {undefined}
     */
    var validateLevel3 = (subnivels, keyL1, keyL2) => {
        if(subnivels) {
            _.each(subnivels, (helper, keyL3) => {
                if(validateTextInMenu(helper.title, helper.tags)) {
                    listClass.push('menuId'+keyL1);
                    listClass.push('menuSub'+keyL1);
                    listClass.push('menuId'+keyL1+'-'+keyL2);
                    listClass.push('menuSub'+keyL1+'-'+keyL2);
                    listClass.push('menuId'+keyL1+'-'+keyL2+'-'+keyL3);
                }
            });
        }
    };
    
    /**
     * Validar texto si concide en búsqueda
     * @param {string} title texto a validar
     * @param {array} tags Arreglo de tags
     * @returns {bool} Indicador de si coincide
     */
    var validateTextInMenu = (title, tags) => {
        var name = cleanAccents(title.toLowerCase());
        
        // Buscar texto en tags
        let tagInclude = _.filter(tags, function(tag) { 
            let auxName = cleanAccents(tag.toLowerCase());
            return auxName.includes(searchText); 
        });
        let includeLength = (tagInclude.length) ? true : false;
        
        // Validar si el titulo o tag tienen coincidencia
        return (name.includes(searchText) || includeLength);
    };

    /**
     * Remplaza los acentos y caracteres 
     * @param {string} text texto a convertir
     * @returns {string} texto convertivo
     */
    var cleanAccents = (text) => {
        let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
                a = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
                re = new RegExp('[' + de + ']', 'ug');
        return  text.replace(re, match => a.charAt(de.indexOf(match)));
    };
	
	/**
     * Aplicar flitro por tipo (Menu principal)
     * @param {int} key Key menu principal
     */
	var filterByType = (key) => {
		if(key === 'ALL') { 
            // Aplicamos todos los helpers
			settings.helpers = settings.helpersAll;
		} else {
            // Aplicamos solo el helper del ID solicitado
			settings.helpers = [];
			settings.helpers[0] = settings.helpersAll[key];
		}
		generateMenuDetails();
	}

    // Iniciar JS
    var initSearch = () => {
        generateMenu();
        generateMenuDetails();
        initEventsListener();	// Inicializar eventos
    };

    return {
        init: (s) => {
            let helpers = _.sortBy(s.helpers, 'title');
            settings.helpers = helpers;
            settings.helpersPrimary = helpers;
            settings.helpersAll = helpers;
            initSearch();
        }
    };
})();