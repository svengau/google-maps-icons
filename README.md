# Google Map Icons

[DEMO SITE HERE](https://svengau.github.io/google-maps-icons/)

**Important note**: this project is not an official Google Project, and is provided as this.

## Overview

This project provides all Google Map Icons, in a simple way.

### Installation

```
npm install google-maps-icons
```

or

```
yarn add google-maps-icons
```

### Usage

Simple:

```
import googleMapIcon, { CONSTELLATION_STAR } from "google-maps-icons";
const iconUrl = googleMapIcon(CONSTELLATION_STAR);
```

With options

```
import googleMapIcon from "google-maps-icons";
const options = {scale: 2, color: "800000"};
const iconUrl = googleMapIcon("parking", options);
```

Agument:

- **icon**: a valid string among the following ones:
  dot, nickname, heart, constellation_star, home, generic, gas, parking, car_rental, lodging, resort, bank_euro, bank_dollar, bank_jp, atm, bank_intl, hospital_H, hospital_shield, pharmacy, fire_jp, medical, tree, mountain, stadium, paw, camping, cemetery, golf, flower, hiking, boating, fishing, hotspring, airport, restaurant, bar, cafe, glass, shoppingbag, shoppingcart, palette, lighthouse, theater, camera, dice, dolphin, event_venue, ferriswheel, historic, historic_cn, museum, movie, monument, note, relic_jp, civic_bldg, postoffice, postoffice_jp, library, police, police_jp, school, school_cn_jp, bridge, restroom, city_office_jp, civil_office_jp, government_cn, worship_temple, worship_jewish, worship_mormon, worship_dharma, worship_buddhist, worship_hindu, worship_jain, worship_shinto, worship_sikh, worship_islam

Options:

- **scale**: Number, from 1 to 4. Default is 1.
- **color**: hexa color, without the hashtag. Default is the one provided by Google.

## Useful links

https://www.blog.google/products/maps/google-maps-gets-new-look/
https://docs.google.com/spreadsheets/d/1YivKsYBr7pQ7R_VK2WPszc0CNakqlbT6zGeqCvuQRS8/edit#gid=0
