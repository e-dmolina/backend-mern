const express = require('express');
const cors = require('cors');
//servidor
const app = express();

/*--------------------
        settings
--------------------*/
//si existe la variable PORT en el archivo .env va a tomar su valor, sino tomara el puerto 4000
app.set('port', process.env.PORT || 4000);

/*--------------------
       middlewares
--------------------*/
//cors permite a la api enviar y recibir datos
app.use(cors());
//permite utilizar json y string
app.use(express.json());

/*--------------------
        routes
--------------------*/
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;