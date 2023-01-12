[`Volver`](../index.html)

# Lighthouse 

Herramienta de auditoria para identificar puntos de mejora.
Inspecciona, sugiere e indica que falta por implementar.

Audita Estandar web como:
- Metricas de PWA
- Performance
- Accesibilidad - Seguridad
- Ceo
- Buenas prácticas
	
A partir de la versión 60 de Google Chrome, la herramienta Lighthouse viene integrada 
en el navegador. Sólo tienen que abrir la consola (F12) e ir a la pestaña “Audits”. 
Al parecer funciona igual que la extensión, así que no haría falta instalarla.

El realiza un reporte de la pagina consultada, no del sitio en general.


## Automatización

Lighthouse bot a tu proceso de integración continua

```bash
	npm install -g lighthouse
	lighthouse --help
	lighthouse https://testing-angularpwa.web.app/home
```

La idea es implementar esto en un proceso de integración, para que salte alertas o errores

## Consola

```bash
	npm install -g lighthouse
	lighthouse --help
	lighthouse https://testing-angularpwa.web.app/home
```
