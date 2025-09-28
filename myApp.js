// myApp.js

require('dotenv').config();

// Incluimos Mongoose
let mongoose = require('mongoose');

// **Código de CONEXIÓN detectado por FCC:**
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// ----------------------------------------------------------------------
// DEFINICIÓN DE ESQUEMA Y MODELO
// ----------------------------------------------------------------------

// 1. Crear el Esquema (Schema) de Persona
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

// 2. Crear el Modelo (Model) a partir del esquema
let Person = mongoose.model('Person', personSchema);


// ----------------------------------------------------------------------
// FUNCIONES CRUD
// ----------------------------------------------------------------------

// Solución para: Crear y Guardar un Documento
const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: 'Jhonny Appleseed',
    age: 30,
    favoriteFoods: ['apples', 'pie', 'cider']
  });

  newPerson.save((err, data) => {
    if (err) {
      return done(err); 
    }
    done(null, data); 
  });
};

// Solución para: Crear muchos registros con model.create()
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) {
      return done(err);
    }
    done(null, people);
  });
};

// Solución para: Usar model.find() para buscar personas por nombre
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, peopleFound) => {
    if (err) {
      return done(err);
    }
    done(null, peopleFound);
  });
};

// Solución para: Usar model.findOne() para buscar por comida favorita
const findOneByFood = (food, done) => {
  // Model.findOne() busca el primer documento donde 'favoriteFoods' contenga el valor 'food'.
  Person.findOne({ favoriteFoods: food }, (err, personFound) => {
    if (err) {
      return done(err);
    }
    // personFound es un solo documento (un objeto Persona) o null si no se encuentra nada.
    done(null, personFound);
  });
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
