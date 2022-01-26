const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id1) {
  // seu código aqui
  const pessoa = employees.find(({ id }) => id === id1).responsibleFor[0];
  const animais = species.find(({ id }) => id === pessoa).residents;
  const animal = animais.sort((a, b) => b.age - a.age);
  return Object.values(animal[0]);
}

module.exports = getOldestFromFirstSpecies;
