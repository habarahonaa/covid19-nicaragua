Este es un dashboard informativo sobre el COVID-19 creado con [Next.js](https://nextjs.org/) y [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Informacion sanitaria importante

> La informacion contenida en este aplicacion proviene de fuentes publicas reconocidas mas abajo. Recuerda que la autoridad sanitaria del pais tiene la informacion mas actualizada y fidedigna.

[Recursos sobre COVID-19 para padres de familia y niños](https://www.paho.org/es/recursos-sobre-covid-19-para-padres-ninos). El objetivo de esta página es ofrecer recursos para los padres, cuidadores y niños sobre la COVID-19 y la importancia de adoptar medidas efectivas para protegerse y sobrellevar la cuarentena. Estos materiales han sido preparados por la OMS, socios de la OPS, colaboradores y autores.

[Informes del departamento de Salud](http://www.minsa.gob.ni/index.php/repository/Descargas-MINSA/COVID-19/Datos-COVID-19/). Estos son los documentos oficiales publicados cada semana. Recuerda seguir las instrucciones y recomendaciones del ministerio de salud.

## Reconocimiento

[disease.sh API](https://disease.sh/) - toda la informacion utilizada en esta aplicacion proviene del API de disease.sh.

## Desarrollo local

Primero, clona el codigo fuente usando GIT CLI o descarga HTTPS e instala dependencias necesarias

```bash
npm install
# o
yarn install
```

Luego, inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver los resultados.

Puedes editar cada una de las paginas en el directorio `pages/`. Las paginas se auto-actualizan mientras haces cambios.

[Rutas API](https://nextjs.org/docs/api-routes/introduction) puedes acceder y editar en [http://localhost:3000/api/disease](http://localhost:3000/api/disease). Estas pueden ser editadas en `pages/api/disease.js`.

El directorio `pages/api` esta mapeado a `/api/*`. Los archivos en este directorio son tratados como [API routes](https://nextjs.org/docs/api-routes/introduction) en vez de como paginas React.


## Despliegue en Vercel

La forma mas sencilla de desplegar la aplicacion en Internet es la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.
