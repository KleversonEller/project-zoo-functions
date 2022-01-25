const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.some((valor) => valor === id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const colaboradores = employees.filter(({ managers }) => managers
      .some((valor) => valor === managerId));
    const result = [];
    colaboradores.forEach(({ firstName, lastName }) => result
      .push(`${firstName} ${lastName}`));
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
