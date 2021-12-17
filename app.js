const fs = require('fs');
const path = require('path');
const toml = require('toml');

// Read a toml file
const fileData = fs.readFileSync(path.join(__dirname, 'config.toml'), 'utf8');
const tomlData = toml.parse(fileData);
console.log('tomlData:', tomlData);

// Make a toml file
const tomlData2 = {
  name: 'toml',
  version: '1.0.0',
  description: 'A toml file',
  cars: [
    {
      name: 'Ford',
      year: '1903',
      color: 'red',
    },
    {
      name: 'Fiat',
      year: '1904',
      color: 'blue',
    },
  ]
};

// write a toml file with indencation 2
const tomlString = JSON.stringify(tomlData2, null, 2);
fs.writeFileSync(path.join(__dirname, 'config2.toml'), tomlString);