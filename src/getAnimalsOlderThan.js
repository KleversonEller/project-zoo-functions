const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age2) {
  // seu código aqui
  return species.find(({ name }) => name === animal)
    .residents.every(({ age }) => age >= age2);
}

module.exports = getAnimalsOlderThan;
