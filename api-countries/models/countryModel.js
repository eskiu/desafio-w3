import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
  nombre: {type: String, required: true},
  poblacion: {type: Number, min: 0, required: true},
});

const Country = mongoose.model('Country', countrySchema);

export{
    Country,
}