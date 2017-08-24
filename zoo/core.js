var zooData= require('/data');

function entryCalculator (entrants) {
  // your code here
  if ( !entrants ) { return 0; }

  return Object.keys(entrants).reduce(function (total, key) {
    return total += ( entrants[key] * zooData.prices[key] );
  }, 0);
};

function schedule (day) {
  // your code here
  function formatHours ( hours ) {
    if ( hours.close - hours.open ) {
      return 'Open from ' + hours.open + 'am until ' +
             ( hours.close - 12 ) + 'pm';
    } else {
      return 'CLOSED';
    }
};

  var keys = day ? [day] : Object.keys(zooData.hours);

  return keys.reduce(function (result, dayKey) {
    var hours = zooData.hours[dayKey];
    var hoursStr = formatHours(hours);

    result[dayKey] = hoursStr;
    return result;
  }, {});
}
function animalCount (query) {
  animalsAndCounts = zooData.animals.reduce(function (result, species) {
    result[species.name] = species.residents.length;
    return result;
  }, {});

  return query ? animalsAndCounts[query] : animalsAndCounts;
}


function animalMap (options) {
  // your code here
  function formatSpeciesInfo (species) {
    if ( !options || !options.includeNames ) { return species.name; }

    var name = species.name;
    var result = {};
    result[name] = species.residents;

    if ( options.sex ) {
      result[name] = result[name].filter(function (resident) {
        return resident.sex === options.sex;
      });
    }

    result[name] = result[name].map(function (animal) {
      return animal.name;
    });

    return result;
  }

  return zooData.animals.reduce(function (result, species) {
    var speciesInfo = formatSpeciesInfo(species);

    if ( result[species.location] ) {
      result[species.location].push(speciesInfo);
    } else {
      result[species.location] = [speciesInfo];
    }

    return result;
  }, {});
};

function animalPopularity (rating) {
  // your code here
  var popularityObj = zooData.animals.reduce(function (result, species) {
    if ( result[species.popularity] ) {
      result[species.popularity].push(species.name);
    } else {
      result[species.popularity] = [species.name];
    }

    return result;
  }, {});

  return popularityObj[rating] || popularityObj;
}

};

function animalsByIds (ids) {
  // your code here
  return byIds(zooData.animals, ids);
};

function animalByName (name) {
  // your code here
  return byName(zooData.animals, { name: name, resources: 'animals' });

};

function employeesByIds (ids) {
  // your code here
  return byIds(zooData.employees, ids);

};

function employeeByName (name) {
  // your code here
  return byName(zooData.employees, { name: name, resources: 'employees '});

};

function managersForEmployee (idOrName) {
  // your code here
  var employee = byNameOrId(nameOrId)[0];

  employee.managers = employeesByIds(employee.managers).map(function (manager) {
    return manager.firstName + ' ' + manager.lastName;
  });
    return employee;
};

function employeeCoverage (nameOrId) {
  // your code here
  function findEmployeeInfo () {
      return ( !nameOrId ) ? zooData.employees : byNameOrId(nameOrId);
    }

    var employeeData = findEmployeeInfo();

    return employeeData.reduce(function (result, employee) {
      var employeeName = employee.firstName + ' ' + employee.lastName;
      var animals = animalsByIds(employee.responsibleFor).map(function (species) {
        return species.name;
      });

      result[employeeName] = animals;
      return result;
    }, {});
};


module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage
}
