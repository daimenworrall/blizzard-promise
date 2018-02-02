/*
  Blizzard API Promise Wrapper
  Daimen Worrall
*/

const request = require('request');

module.exports = function(api_key, locale) {
  let module = {};

  module.getProfile = function(region, realm, character, fields) {
    return new Promise(function(resolve, reject) {
      if (fields) {
        fields = "&fields=" + fields.join(",");
      } else {
        fields = "";
      }
      let url = `https://${region}.api.battle.net/wow/character/${realm}/${character}?locale=${locale}&apikey=${api_key}${fields}`;
      request.get(url, function(error, result, body) {
        if (error) return reject(error);
        return resolve(body);
      });
    });
  }

  return module;

}
