//se conecta a la base de datos
const mong = require('mongoose');

mong.connect('mongo "mongodb+srv://tecfood.tkuel.azure.mongodb.net/<dbname>" --username vec',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false

})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));