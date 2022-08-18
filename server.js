/*=================== MODULOS ===================*/
const express = require('express');
const morgan = require('morgan')

/*======== Instancia de Server y de rutas ========*/
const app = express();
const routerProductos = require('./src/routes/productos.routes.js')

/*================= Middlewears =================*/
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))

/*==================== Rutas ====================*/
app.use('/api/productos', routerProductos);
app.use('*', (req, res) => {
    res.send({error: 'Producto no encontrado'})
})

/*================== Servidor ==================*/
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor: ${error}`))