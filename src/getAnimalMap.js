const data = require('../data/zoo_data');

const { species } = data;
const locais = ['NE', 'NW', 'SE', 'SW'];

const objetoLocalAnimal = () => {
  const objetos = {};
  locais.map((local) => {
    const animais = [];
    species.filter(({ location, name }) => {
      if (location === local) {
        animais.push(name);
      }
      return animais;
    });
    objetos[local] = animais;
    return animais;
  });
  return objetos;
};

// const tipoAnimaisList = [...objetoLocalAnimal().NE, ...objetoLocalAnimal().NW,
//   ...objetoLocalAnimal().SE, ...objetoLocalAnimal().SW];

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined || options.includeNames === false
    || options.includeNames === undefined) {
    return objetoLocalAnimal();
  }
}

module.exports = getAnimalMap;
