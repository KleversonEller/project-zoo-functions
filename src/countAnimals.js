const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  let resultado;
  if (animal === undefined) {
    resultado = {};
    species.forEach(({ name, residents }) => {
      resultado[name] = residents.length;
    });
    return resultado;
  }
  species.find(({ name, residents }) => {
    if (name === animal.specie && animal.sex !== undefined) {
      resultado = residents.filter(({ sex }) => sex === animal.sex).length;
    } else if (name === animal.specie) {
      resultado = residents.length;
    }
    return resultado;
  });
  return resultado;
}

module.exports = countAnimals;
