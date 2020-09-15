//se conecta a la base de datos
const mong = require('mongoose');

mong.connect('mongodb://localhost/customer-db-app',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false

})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));