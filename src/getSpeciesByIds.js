const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter(({ id }) => ids.find((valor) => valor === id));
}

module.exports = getSpeciesByIds;
