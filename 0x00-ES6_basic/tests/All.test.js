// BEGIN: Test Suite
// functions import
import { taskFirst, getLast, taskNext } from "../0-constants";
import taskBlock  from "../1-block-scoped";
import getNeighborhoodsList  from "../2-arrow";
import getSumOfHoods from '../3-default-parameter.js';
import returnHowManyArguments from '../4-rest-parameter.js';
import concatArrays from '../5-spread-operator.js';
import getSanFranciscoDescription from "../6-string-interpolation.js";
import getBudgetObject from "../7-getBudgetObject.js";
import getBudgetForCurrentYear from "../8-getBudgetCurrentYear.js";
import getFullBudgetObject from "../9-getFullBudget.js";
import appendToEachArrayValue from "../10-loops.js";
import createEmployeesObject from "../11-createEmployeesObject.js";
import createReportObject from "../12-createReportObject.js";

// modules import
import fs from 'fs';
import path from 'path';

describe('0-constants.js', () => {
  // Test Case 1
  test('A Test for taskFirst Function', () => {
    expect(taskFirst()).toMatch(/I prefer const when I can./);
  });

  // Test Case 2
  test('Test the getLast function', () => {
    expect(getLast()).toMatch(/ is okay/);
  });

  // Test Case 3
  test('Test the taskNext function', () => {
    expect(taskNext()).toMatch(/But sometimes let is okay/);
  });
});
// END: Test Suite

// Path: 0x00-ES6_basic/tests/1-block_scope.test.js
describe('1-block_scope.js', () => {
  // Test Case 1
  test('Test the taskBlock function', () => {
    expect(taskBlock(true)).toEqual([false, true]);
    expect(taskBlock(false)).toEqual([false, true]);
  });
});

// Path: 0x00-ES6_basic/tests/2-arrow_functions.test.js
describe('2-arrow_functions.js', () => {
  // Test Case 1
  test('Test the getNeighborhoodsList function', () => {
    const neighborhoodsList = new getNeighborhoodsList();
    const res = neighborhoodsList.addNeighborhood('Noe Valley');
    expect(res).toEqual([ 'SOMA', 'Union Square', 'Noe Valley' ]);
    const resTwo = neighborhoodsList.addNeighborhood('new neighborhood');
    expect(resTwo).toContain('new neighborhood');
  });
});

// Path: 0x00-ES6_basic/tests/3-default_parameter.test.js
describe('3-default_parameter.js', () => {
  // Test Case 1
  test('Test the getSumOfHoods function', () => {
    expect(getSumOfHoods(20, 50, 20)).toEqual(90);
    expect(getSumOfHoods(20, 50)).toEqual(89);
    expect(getSumOfHoods(20)).toEqual(128);
  });
  // Test Case 2
  test('Test the getSumOfHoods function with no arguments', () => {
    expect(getSumOfHoods()).toBe(NaN);
  });
  // Test Case 3
  test('Test the length of the file', () => {
    const data = fs.readFileSync(path.resolve(__dirname, '../3-default-parameter.js'), 'utf8');
    const lines = data.split('\n').length;
    expect(lines).toEqual(4);
  });
});

// Path: 0x00-ES6_basic/tests/4-rest_parameter.test.js
describe('4-rest_parameter.js', () => {
  // Test Case 1
  test('Test the returnHowManyArguments function', () => {
    expect(returnHowManyArguments('one', 'two')).toEqual(2);
    expect(returnHowManyArguments('one', 'two', 'three', 'four')).toEqual(4);
    expect(returnHowManyArguments()).toEqual(0);
  });
});

// Path: 0x00-ES6_basic/tests/5-spread_operator.test.js
describe('5-spread_operator.js', () => {
  // Test Case 1
  test('Test the concatArrays function', () => {
    expect(concatArrays(['a', 'b'], ['c', 'd'], 'good')).toEqual(['a', 'b', 'c', 'd', 'g', 'o', 'o', 'd']);
    expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toEqual(['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o']);
  });
  // Test Case 2
  test('The function body should be one line long', () => {
    const data = fs.readFileSync(path.resolve(__dirname, '../5-spread-operator.js'), 'utf8');
    const lines = data.split('\n').length;
    expect(lines).toEqual(4);
  })
});

// Path: 0x00-ES6_basic/tests/6-string_interpolation.test.js
describe('6-string_interpolation.js', () => {
  // Test Case 1
  test('Test the getSanFranciscoDescription function', () => {
    const res = getSanFranciscoDescription();
    expect(res).toMatch(/As of 2017, it was the seventh-highest income county in the United States/);
    expect(res).toMatch(/with a per capita personal income of \$119,868./);
    expect(res).toMatch(/and a GDP per capita of \$178,479./);
    expect(res).toMatch(/As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of \$119,868. As of 2015, San Francisco proper had a GDP of \$154.2 billion, and a GDP per capita of \$178,479./);
  });
});

// Path: 0x00-ES6_basic/tests/7-getBudgetObject.test.js
describe('7-getBudgetObject', () => {
  const obj = getBudgetObject(15, 2, 1000)
  //Test Case 1
  test('Test the getBudgetObject function', () => {
    expect(obj).toEqual({ income: 15, gdp: 2, capita: 1000 })
  })
  // Test Case 2
  test('Test the keynames of the output', () => {
    expect(obj).toMatchObject({ income : 15})
  })
});

// Path: 0x00-ES6_basic/tests/7-getBudgetCurrentYear.test.js
describe('7-getBudgetCurrentYear.js', () => {
  const obj = getBudgetForCurrentYear(15, 2, 1000);
  const currentYear = new Date().getFullYear();
  //Test Case 1
  test('Test the getBudgetForCurrentYear function', () => {
    expect(obj).toEqual({ 'income-2024': 15, 'gdp-2024': 2, 'capita-2024': 1000 })
  })
  // Test Case 2
  test('Test the keynames of the output', () => {
    expect(obj).toMatchObject({ 'income-2024' : 15})
  })
  // Test Case 3
  test('Test the current year', () => {
    expect(obj).toHaveProperty(`income-${currentYear}`);
    expect(obj).toHaveProperty(`gdp-${currentYear}`);
    expect(obj).toHaveProperty(`capita-${currentYear}`);
  })
});

// Path: 0x00-ES6_basic/tests/9-getFullBudget.test.js
describe('9-getFullBudget.js', () => {
  const obj = getFullBudgetObject(15, 2, 1000);
  //Test Case 1
  test('Test the getFullBudgetObject function', () => {
    expect(obj).toEqual({ income: 15, gdp: 2, capita: 1000, getIncomeInDollars: expect.any(Function), getIncomeInEuros: expect.any(Function) })
  })
  // Test Case 2
  test('Test the keynames of the output', () => {
    expect(obj).toMatchObject({ income : 15})
  })
  // Test Case 3
  test('Test the getIncomeInDollars function', () => {
    expect(obj.getIncomeInDollars(15)).toEqual('$15');
  })
  // Test Case 4
  test('Test the getIncomeInEuros function', () => {
    expect(obj.getIncomeInEuros(15)).toEqual('15 euros');
  })
});

// Path: 0x00-ES6_basic/tests/10-loops.test.js
describe('10-loops.js', () => {
  let arr = ['appended', 'fixed', 'displayed'];
  //Test Case 1
  test('Test the appendToEachArrayValue function', () => {
    expect(appendToEachArrayValue(arr, 'correctly-')).toEqual(['correctly-appended', 'correctly-fixed', 'correctly-displayed']);
  })
});

// Path: 0x00-ES6_basic/tests/11-createEmployeesObject.test.js
describe('11-createEmployeesObject.js', () => {
  let arr = ['Sara', 'Bob', 'Jill'];
  //Test Case 1
  test('Test the createEmployeesObject function', () => {
    expect(createEmployeesObject('Software', arr)).toEqual({ Software: ['Sara', 'Bob', 'Jill'] });
  });
  // Test Case 2
  test('Test the keynames of the output', () => {
    expect(createEmployeesObject('Software', arr)).toMatchObject({ Software: ['Sara', 'Bob', 'Jill'] });
  });
  // Test Case 3
  test('Test the Object to have a property with the same name of the department', () => {
    expect(createEmployeesObject('Software', arr)).toHaveProperty('Software');
  });
});

// Path: 0x00-ES6_basic/tests/12-createReportObject.test.js
describe('12-createReportObject.js', () => {
  const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
  };

  const report = createReportObject(employees);
  // Test Case 1
  test('Test if createReportObject function returns all employees object', () => {
    expect(report).toMatchObject({allEmployees: { engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }});
    expect(report.allEmployees).toHaveProperty("engineering");
  });
  // Test Case 2
  test('Test if createReportObject has a method for counting', () => {
    expect(report).toMatchObject({ getNumberOfDepartments : expect.any(Function)});
  });
  // Test Case 3
  test('Test the result of counting method for the object', () => {
    expect(report.getNumberOfDepartments(report.allEmployees)).toEqual(2);
  })
});