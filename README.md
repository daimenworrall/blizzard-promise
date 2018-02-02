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
  let blizzard = require("blizzard-promise")("API KEY HERE", "en_GB");
  ```

  You may pass a different locale. We'll be using en_GB as an example.

## Usage

### WOW Character Profile

  ```javascript
  .getProfile(REGION, REALM, CHARACTER, FIELDS)
  ```

  Fields is optional, if not provided it will just return the basic character info. Here's an example:

  ```javascript
  blizzard.getProfile("eu", "Alonsus", "Kattarinna")
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

  achievements
  appearance
  feed
  guild
  hunterPets
  items
  mounts
  pets
  petSlots
  professions
  progression
  pvp
  quests
  reputation
  stats
  talents
  titles
