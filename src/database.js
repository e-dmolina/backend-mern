const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/dbmernstack';

//si existe la variable de entorno en el archivo .env se utiliza, sino se utiliza la db de test
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/dbmernstack';

//conectar a base de datos
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//cuando se abre la conexión mostramos el msj por consola
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})