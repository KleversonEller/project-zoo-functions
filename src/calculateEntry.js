const data = require('../data/zoo_data');

const { prices } = data;

const quantidadePessoas = (min, max, objeto) => objeto.reduce((quantidade, { age }) => {
  if (age >= min && age < max) {
    return quantidade + 1;
  }
  return quantidade;
}, 0);

function countEntrants(entrants) {
  // seu código aqui
  return {
    child: quantidadePessoas(0, 18, entrants),
    adult: quantidadePessoas(18, 50, entrants),
    senior: quantidadePessoas(50, 500, entrants),
  };
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  if (entrants === 0 || Object.entries(entrants).length === 0) {
    return 0;
  }
  const objeto = countEntrants(entrants);
  const keys = Object.keys(objeto);
  const values = Object.values(objeto);
  return keys.reduce((valorTotal, valorUnitario, index) => {
    const valor = (prices[valorUnitario] * values[index]);
    return valorTotal + valor;
  }, 0);
}

module.exports = { calculateEntry, countEntrants };
