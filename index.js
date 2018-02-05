/*
  Blizzard API Promise Wrapper
  Daimen Worrall
*/

const request = require('request');

module.exports = function(api_key, region, locale) {
  let module = {};

  if (!api_key) throw "API Key is required.";
  if (!locale) locale = "en_GB";
  if (!region) region = "eu";

  module.getProfile = function(realm, character, fields) {
    return new Promise(function(resolve, reject) {
      if (fields) {
        fields = "&fields=" + fields.join(",");
      } else {
        fields = "";
      }
      let url = `https://${region}.api.battle.net/wow/character/${realm}/${character}?locale=${locale}&apikey=${api_key}${fields}`;
      request.get(url, function(error, result, body) {
        if (error) return reject(error);
        return resolve( JSON.parse(body) );
      });
    });
  }

  module.getAchievement = function(id) {
    return new Promise(function(resolve, reject) {
      let url = `https://${region}.api.battle.net/wow/achievement/${id}?locale=${locale}&apikey=${api_key}`;
      request.get(url, function(error, result, body) {
        if (error) return reject(error);
        return resolve( JSON.parse(body) );
      });
    });
  }

  module.getAuctions = function(realm) {
    return new Promise(function(resolve, reject) {
      let url = `https://${region}.api.battle.net/wow/auction//data/${realm}?locale=${locale}&apikey=${api_key}`;
      request.get(url, function(error, result, body) {
        if (error) return reject(error);
        url = JSON.parse(body).files[0].url;
        request.get(url, function(error, result, body) {
          if (error) return reject(error);
          return resolve( JSON.parse(body).auctions );
        });
      });
    });
  }

  return module;

}
