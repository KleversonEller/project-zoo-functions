const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName !== undefined) {
    return employees.find(({ firstName, lastName }) =>
      employeeName === firstName || employeeName === lastName);
  }
  return {};
}

module.exports = getEmployeeByName;
