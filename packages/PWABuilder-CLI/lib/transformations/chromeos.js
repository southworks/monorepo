'use strict';


function convertToBase (manifestInfo, callback) {
  //TODO implement this method
  return callback(undefined, manifestInfo);
}

function convertFromBase (manifestInfo, callback) {
  //TODO implement this method
  return callback(undefined, manifestInfo);
}

function matchFormat (manifestInfo, callback) {
  if (!manifestInfo || !manifestInfo.content) {
    return callback(new Error('Manifest content is empty or not initialized.'));
  }

  //TODO implement this method

  return callback(undefined, false);
}


module.exports = {
  convertToBase: convertToBase,
  convertFromBase: convertFromBase,
  matchFormat: matchFormat
};
