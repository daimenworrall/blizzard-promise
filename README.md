# Dropbox Promise

  A simple promise wrapper for Blizzard APIs.

  UNDER DEVELOPMENT, FAR FROM COMPLETE.

## Installation
  `npm install --save blizzard-promise`

## Usage

  Before starting anything you need to go create your app over at: https://dev.battle.net and get your API Key. Full documentation for these APIS is available at: https://dev.battle.net/io-docs

### Setup

  Require the module and pass your API Key:

  ```javascript
  let blizzard = require("blizzard-promise")("API KEY HERE", "eu", "en_GB");
  ```

  You may pass a different locale. We'll be using `en_GB` as an example.
  You may pass a different region. We'll be using `eu` as an example.

## Usage

### WOW Character Profile

  ```javascript
  .getProfile(REALM, CHARACTER, FIELDS)
  ```

  Fields is an optional array, if not provided it will just return the basic character info. Here's an example:

  ```javascript
  blizzard.getProfile("Alonsus", "Kattarinna")
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error) {
      console.log(error);
    });
  ```
  Will return something like the following:

  ```json
  {
    "lastModified":1517510845000,
    "name":"Kattarinna",
    "realm":"Alonsus",
    "battlegroup":"Reckoning / Abrechnung",
    "class":4,
    "race":1,
    "gender":1,
    "level":110,
    "achievementPoints":9980,
    "thumbnail":"alonsus/83/110950227-avatar.jpg",
    "calcClass":"c",
    "faction":0,
    "totalHonorableKills":952
  }
  ```

  Possible Fields:

  achievements, appearance, feed, guild, hunterPets, items, mounts, pets, petSlots, professions, progression, pvp, quests, reputation, stats, talents, titles

  Fields is an array, example use case:

  ```javascript
  blizzard.getProfile("Alonsus", "Kattarinna", ["guild", "items"])
  ```

  Will return the basic user profile with guild and item info.

  ### Available APIS

    .getProfile( Realm, CharacterName, Fields ) //get a wow character profile
    .getAchievement( AchievementID ) //Get info about a specific achievement
    .getAuctions( Realm ) //Return all the auctions on a specific realm. WARNING: This dataset could be extremely large. On a low population server it was over 50k entries in testing
