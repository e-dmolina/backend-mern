require('dotenv').config();
const app = require('./app');
require('./database');

//Se ejecuta la aplicacion
const main = async () => {
    await app.listen(app.get('port'));
    console.log('server on port ', app.get('port'));
}

main();