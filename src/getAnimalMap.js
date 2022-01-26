const data = require('../data/zoo_data');

const { species } = data;

const separaAnimais = (localizacao) => {
  const animais = [];
  if (localizacao !== undefined) {
    species.filter(({ location, name }) => {
      if (location === localizacao) {
        return animais.push(name);
      }
      return '';
    });
  } else {
    species.forEach(({ name }) => animais.push(name));
  }
  return animais;
};

const criaObjeto = () => ({
  NE: separaAnimais('NE'),
  NW: separaAnimais('NW'),
  SE: separaAnimais('SE'),
  SW: separaAnimais('SW'),
});

const separaAnimais2 = () => {
  const objeto = {};
  separaAnimais().forEach((animal, index) => {
    const nomeAnimais = [];
    species[index].residents.forEach(({ name }) => nomeAnimais.push(name));
    objeto[animal] = nomeAnimais;
  });
  return objeto;
};

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined) {
    return criaObjeto();
  }
  return criaObjeto();
}

module.exports = getAnimalMap;

console.log(separaAnimais2());
