const data = require('../data/zoo_data');

const { species } = data;
const locais = ['NE', 'NW', 'SE', 'SW'];

const objetoSemParametro = () => {
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

const parametroSorted = (parametro, parametro2) => {
  const tipoEspecieEAnimal = [];
  species.forEach(({ name, residents, location }) => {
    if (location === parametro) {
      const objeto2 = {};
      if (parametro2.sorted === true) {
        objeto2[name] = residents.map((objetos) => objetos.name).sort();
        tipoEspecieEAnimal.push(objeto2);
      } else {
        objeto2[name] = residents.map((objetos) => objetos.name);
        tipoEspecieEAnimal.push(objeto2);
      }
    }
  });
  return tipoEspecieEAnimal;
};

const parametroSex = (parametro, parametro2) => {
  const tipoEspecieEAnimal = [];
  species.forEach(({ name, residents, location }) => {
    if (location === parametro && parametro2.sex !== undefined) {
      const objeto = {};
      const animalPorSex = [];
      residents.forEach((objetos) => {
        if (objetos.sex === parametro2.sex) {
          animalPorSex.push(objetos.name);
        }
      });
      objeto[name] = animalPorSex;
      tipoEspecieEAnimal.push(objeto);
    }
  });
  return tipoEspecieEAnimal;
};

const parametroSexSorted = (parametro, parametro2) => {
  const tipoEspecieEAnimal = [];
  species.forEach(({ name, residents, location }) => {
    if (location === parametro && parametro2.sex !== undefined) {
      const objeto = {};
      const animalPorSex2 = [];
      residents.forEach((objetos) => {
        if (objetos.sex === parametro2.sex) {
          animalPorSex2.push(objetos.name);
        }
      });
      objeto[name] = animalPorSex2.sort();
      tipoEspecieEAnimal.push(objeto);
    }
  });
  return tipoEspecieEAnimal;
};

const criaObjeto = (parametro) => {
  const objetos = {};
  locais.map((local) => {
    if (parametro.sex !== undefined && parametro.sorted !== undefined) {
      objetos[local] = parametroSexSorted(local, parametro);
    } else if (parametro.sex !== undefined) {
      objetos[local] = parametroSex(local, parametro);
    } else {
      objetos[local] = parametroSorted(local, parametro);
    }
    return false;
  });
  return objetos;
};

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined || options.includeNames === false
    || options.includeNames === undefined) return objetoSemParametro();
  if (options.includeNames === true) return criaObjeto(options);
}

module.exports = getAnimalMap;
