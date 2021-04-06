
const { dictionary } = require("./dependencies/program_dependencies_module");

// état initial de l'application
const appState = {
  trialsCount: 0,
  words: dictionary.split(/\r?\n/)
};

module.exports = appState;