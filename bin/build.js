const optimize = require('./optimize');
const generatePathFile = require('./path-data');

module.exports = function () {
  return optimize('*.svg')
    .then(() => optimize('icons/*.svg', true))
    .catch((error) => {
      console.error('🚨  Error while optimizing icons');
      throw error;
    })
    .then(() => {
      console.log('✨ icons optimized successfully');
      return generatePathFile();
    })
    .catch((error) => {
      console.error('🚨  Error while generating icons.json');
      console.error(error);
      throw error;
    })
    .then((files) => {
      console.log('✨ path file generated at ./icons.json');
      return files;
    });
}
