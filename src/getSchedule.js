const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const diasKeys = Object.keys(hours);
const diasValores = Object.values(hours);
const animaisDia = species.map(({ availability, name }) => ({ [name]: availability }));

const parametroAnimal = (parametro) => animaisDia.find((objeto) =>
  Object.keys(objeto)[0] === parametro);

const animaisDoDia = (parametro) => {
  const valor = species.map(({ availability }) => availability);
  const resultado = [];
  valor.forEach((array, index) => {
    if (array.find((dia) => dia === parametro)) {
      resultado.push(Object.keys(animaisDia[index])[0]);
      return false;
    }
    return false;
  });
  return resultado;
};

const semParametro = () => {
  const objeto = {};
  diasKeys.map((dia, index) => {
    objeto[dia] = {
      officeHour: `Open from ${diasValores[index].open}am until ${diasValores[index].close}pm`,
      exhibition: animaisDoDia(dia),
    };
    if (dia === 'Monday') {
      objeto[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    return objeto;
  });
  return objeto;
};

const parametroDia = (parametro) => {
  const objeto = {};
  diasKeys.map((dia, index) => {
    if (parametro === dia) {
      objeto[dia] = {
        officeHour: `Open from ${diasValores[index].open}am until ${diasValores[index].close}pm`,
        exhibition: animaisDoDia(dia),
      };
      if (dia === 'Monday' && parametro === 'Monday') {
        objeto[dia] = {
          officeHour: 'CLOSED',
          exhibition: 'The zoo will be closed!',
        };
      }
    }
    return objeto;
  });
  return objeto;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (parametroAnimal(scheduleTarget)
  !== undefined) return parametroAnimal(scheduleTarget)[scheduleTarget];
  if (Object.entries(parametroDia(scheduleTarget)).length
  !== 0) return parametroDia(scheduleTarget);
  return semParametro();
}

module.exports = getSchedule;
