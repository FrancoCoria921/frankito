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
  Person.findOne({ favoriteFoods: food }, (err, personFound) => {
    if (err) {
      return done(err);
    }
    done(null, personFound);
  });
};

// Solución para: Usar model.findById() para buscar por _id
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, personFound) => {
    if (err) {
      return done(err);
    }
    done(null, personFound);
  });
};

// Solución para: Realizar las actualizaciones clásicas ejecutando "find", "edit" y "save"
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if (err) return done(err);
    
    if (!person) return done(new Error('Persona no encontrada'));

    person.favoriteFoods.push(foodToAdd);

    person.save((err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    });
  });
};

// Solución para: Realizar nuevas actualizaciones en un documento usando model.findOneAndUpdate()
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  // 1. Documento de consulta: {name: personName}
  const query = { name: personName };
  
  // 2. Documento de actualización: {$set: {age: 20}}
  const update = { age: ageToSet }; 
  
  // 3. Opciones: { new: true } asegura que se devuelva el documento actualizado
  const options = { new: true };

  Person.findOneAndUpdate(query, update, options, (err, updatedPerson) => {
    if (err) {
      return done(err);
    }
    // updatedPerson es el documento después de la actualización
    done(null, updatedPerson);
  });
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
exports
