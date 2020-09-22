const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

//Campos que ocupa el usuario 
const CustomerSchema = new Schema({
    FirstName: {type: String, required: true},
    LastName: {type:String, required: true},
    email: {type:String, required:true},
    passsword: {type:String, require:true},
    fechaCreado: {type: Date, default: Date.now}
});


//Se encripta la contrasenia
CustomerSchema.methods.encrypyPassword = async(passsword) => {
    //cifra la contrasenia 
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(passsword,salt);
    return hash;
};


//Verifica con lo que tenemos en la base cuando se logee
CustomerSchema.methods.matchPassword = async function(passsword){
    return await bcrypt.compare(password, this.passsword);

} 

module.exports = mongoose.model('User', CustomerSchema);