<?php 

/**
 * Clase para creación de archivo JSON con estructura de helpers
 * @author Camilo Quijano <camiloquijano31@hotmail.com>
 * @date 07/10/2020
 */
class updateContentClass {
    
    /**
     * Iniciar proceso
     * @author Camilo Quijano <camiloquijano31@hotmail.com>
     * @date 07/10/2020
     */
    public function initProcess() {
        
        // Listado de archivos
        $files = scandir('../documents'); //ruta actual
        //$files = ['GIT.md', 'SQL.md' ];

        $structureAllFiles = [];
        foreach($files as $pathFile) {
            
            // Validar archivo
            if(!$this->_validatePathFile($pathFile)) { continue; }
            $contentFile = file ("../documents/$pathFile");
            echo "<h3>$pathFile...</h3>";

            /**
             * @var $lastAccess Validar nivel del último acceso
             */
            $structure = [];
            $last1Level = $last2Level = $last3Level = 0;
            $lastAccess = '';

            // Iterar línea a línea para identificar titulos nivel 1-2-3
            foreach($contentFile as $lineFile) {
                $first12Postiions = substr($lineFile, 0, 12);
                
                // Validar títulos NIVEL 1
                $first2Postiions = substr($lineFile, 0, 2);
                if ($first2Postiions == '# ') {
                    echo "$lineFile...<br>";
                    $last1Level = count($structure);
                    $lastAccess = 'L1';
                    array_push($structure, $this->_getStructure($lineFile, $pathFile));
                }

                // Validar tags NIVEL 1
                if ($first12Postiions == '###### Tags:' && $lastAccess == 'L1') {
                    echo "$lineFile...<br>";
                    $structure[$last1Level]['tags'] = $this->_getTags($lineFile);
                }
                
                // Validar títulos NIVEL 2
                $first3Postiions = substr($lineFile, 0, 3);
                if ($first3Postiions == '## ') {
                    echo "$lineFile...<br>";
                    if(!isset($structure[$last1Level])) { array_push($structure, $this->_getStructure('Undefined')); }
                    $last2Level = count($structure[$last1Level]['subnivels']);
                    $lastAccess = 'L2';
                    array_push($structure[$last1Level]['subnivels'], $this->_getStructure($lineFile, $pathFile));
                }
                
                // Validar tags NIVEL 2
                if ($first12Postiions == '###### Tags:'  && $lastAccess == 'L2') {
                    echo "$lineFile...<br>";
                    $structure[$last1Level]['subnivels'][$last2Level]['tags'] = $this->_getTags($lineFile);
                }

                // Validar títulos NIVEL 3
                $first4Postiions = substr($lineFile, 0, 4);
                if ($first4Postiions == '### ') {
                    echo "$lineFile...<br>";
                    if(!isset($structure[$last1Level])) { array_push($structure, $this->_getStructure('Undefined l3')); }
                    if(!isset($structure[$last1Level]['subnivels'][$last2Level])) { array_push($structure[$last1Level]['subnivels'], $this->_getStructure('Undefined l3')); }
                    $last3Level = count($structure[$last1Level]['subnivels'][$last2Level]['subnivels']);
                    $lastAccess = 'L3';
                    array_push($structure[$last1Level]['subnivels'][$last2Level]['subnivels'], $this->_getStructure($lineFile, $pathFile));
                }
                
                // Validar tags NIVEL 3
                if ($first12Postiions == '###### Tags:'  && $lastAccess == 'L3') {
                    echo "$lineFile...<br>";
                    $structure[$last1Level]['subnivels'][$last2Level]['subnivels'][$last3Level]['tags'] = $this->_getTags($lineFile);
                }
            }
        
            // Incluir estructura del archivo a estructura general
            foreach($structure as $str) {
                array_push($structureAllFiles, $str);
            }
        }

        // Crear archivo y guardar JSON
        $file = fopen("../js/helpers.json", "w") or die("Error opening output file");
        $json = json_encode ( $structureAllFiles, JSON_PRETTY_PRINT );	// Formato amigable
        fwrite($file, 'helpers = ');
        fwrite($file, $json);
        fclose($file);
        
        // Response
        //echo '<pre>';
        //print_R($structureAllFiles);
        //echo '</pre>';
        echo '<br>PROCESO FINALIZADO!';
    }
    
    /**
     * Validar ruta de archivo , extensión MD
     * @author Camilo Quijano <camiloquijano31@hotmail.com>
     * @date 07/10/2020
     * @param {string} $pathFile Ruta archivo
     * @return bool Indicador si supera la validación
     */
    private function _validatePathFile($pathFile) {
	if(in_array($pathFile, ['.', '..'])) { return false; }

	$auxFile = explode(".", $pathFile);
	$extension = end($auxFile);
	if($extension !== 'md') { return false; }	
	return true;
    }
    
    /**
     * Generar estructura de titulo nivel 1, 2, 3
     * @author Camilo Quijano <camiloquijano31@hotmail.com>
     * @date 07/10/2020
     * @param {string} $textLine Línea de archivo que encontro #, ##, ###
     * @param {string} $pathFile Ruta archivo
     * @return array estructura title|url|subnivels
     */
    function _getStructure($textLine, $pathFile = false) {

        // Quitar caractéres especiales | pasar a minúscula
        $title = trim(str_replace('#', '', $textLine));
        $auxUrl = str_replace('/', '', mb_strtolower($title)); 
        $url = str_replace(['+', '/'], ['-', ''], urlencode($auxUrl));
	
        return [
            'title' => $title,
            'url' => ($pathFile) ? "documents/$pathFile#$url" : '',
            'subnivels' => []
        ];
    }
    
    /**
     * Listado de tags 
     * @author Camilo Quijano <camiloquijano31@hotmail.com>
     * @date 07/10/2020
     * @param {string} $textLine Línea de archivo que encontro #, ##, ###
     *      Ejemplo formato línea: ###### Tags: `TRANSACTION` `BEGIN` `COMMIT`
     * @example path description
     * @return array Listado de tags
     */
    function _getTags($textLine) {
        $title = trim(str_replace('###### Tags:', '', $textLine));
        $tags = array_filter(explode("`", $title), function($item) { return (trim($item)); });
        return array_values($tags);
    }
}