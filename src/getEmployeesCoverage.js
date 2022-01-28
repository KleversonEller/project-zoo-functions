const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const ids = employees.map(({ id }) => id);

const pegaLocal = (parametro) => {
  const obrigacoes = employees.find((valor) => parametro.id === valor.id
  || parametro.name === valor.lastName || parametro.name === valor.firstName
  || parametro === valor.id).responsibleFor;
  const local = species.filter((valor) => obrigacoes.find((valor2) => valor.id === valor2));
  const resultado = local.map(({ location }) => location);
  return resultado;
};

const pegaEspecies = (parametro) => {
  const obrigacoes2 = employees.find((valor2) => parametro.id === valor2.id
  || parametro.name === valor2.lastName || parametro.name === valor2.firstName
  || parametro === valor2.id).responsibleFor;
  const local = species.filter((valor) => obrigacoes2.find((valor2) => valor.id === valor2));
  const resultado2 = local.map(({ name }) => name);
  return resultado2;
};

const criaObjeto = (parametro) => {
  const objeto = {};
  employees.map((valor) => {
    if (parametro.id === valor.id || parametro.name === valor.lastName
      || parametro.name === valor.firstName || parametro === valor.id) {
      objeto.id = valor.id;
      objeto.fullName = `${valor.firstName} ${valor.lastName}`;
      objeto.species = pegaEspecies(parametro);
      objeto.locations = pegaLocal(parametro);
    }
    return objeto;
  });
  return objeto;
};

function getEmployeesCoverage(parametro) {
  // seu código aqui
  if (parametro === undefined) {
    return ids.map((id) => criaObjeto(id));
  } if (Object.entries(criaObjeto(parametro)).length === 0) {
    throw new Error('Informações inválidas');
  }
  return criaObjeto(parametro);
}

module.exports = getEmployeesCoverage;
