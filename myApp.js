// myApp.js

require('dotenv').config();

// Incluimos Mongoose
let mongoose = require('mongoose');

// El código de CONEXIÓN que detecta FCC:
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// ----------------------------------------------------------------------
// PASO 1: CREAR ESQUEMA Y MODELO
// ----------------------------------------------------------------------

// 1. Crear el Esquema (Schema) de Persona
const personSchema = new mongoose.Schema({
  // Campo 'name' obligatorio de tipo String
  name: {
    type: String,
    required: true
  },
  // Campo 'age' de tipo Number
  age: Number,
  // Campo 'favoriteFoods' de tipo Array de Strings
  favoriteFoods: [String]
});

// 2. Crear el Modelo (Model) a partir del esquema
let Person = mongoose.model('Person', personSchema);


// ----------------------------------------------------------------------
// FUNCIONES CRUD (COMIENZA EL DESAFÍO)
// ----------------------------------------------------------------------

const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 * No modifiques el código debajo de esta línea
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
