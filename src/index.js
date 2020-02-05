export const DOT = "dot";
export const NICKNAME = "nickname";
export const HEART = "heart";
export const CONSTELLATION_STAR = "constellation_star";
export const HOME = "home";
export const GENERIC = "generic";
export const GAS = "gas";
export const PARKING = "parking";
export const CAR_RENTAL = "car_rental";
export const LODGING = "lodging";
export const RESORT = "resort";
export const BANK_EURO = "bank_euro";
export const BANK_DOLLAR = "bank_dollar";
export const BANK_JP = "bank_jp";
export const ATM = "atm";
export const BANK_INTL = "bank_intl";
export const HOSPITAL_H = "hospital_H";
export const HOSPITAL_SHIELD = "hospital_shield";
export const PHARMACY = "pharmacy";
export const FIRE_JP = "fire_jp";
export const MEDICAL = "medical";
export const TREE = "tree";
export const MOUNTAIN = "mountain";
export const STADIUM = "stadium";
export const PAW = "paw";
export const CAMPING = "camping";
export const CEMETERY = "cemetery";
export const GOLF = "golf";
export const FLOWER = "flower";
export const HIKING = "hiking";
export const BOATING = "boating";
export const FISHING = "fishing";
export const HOTSPRING = "hotspring";
export const AIRPORT = "airport";
export const RESTAURANT = "restaurant";
export const BAR = "bar";
export const CAFE = "cafe";
export const GLASS = "glass";
export const SHOPPINGBAG = "shoppingbag";
export const SHOPPINGCART = "shoppingcart";
export const PALETTE = "palette";
export const LIGHTHOUSE = "lighthouse";
export const THEATER = "theater";
export const CAMERA = "camera";
export const DICE = "dice";
export const DOLPHIN = "dolphin";
export const EVENT_VENUE = "event_venue";
export const FERRISWHEEL = "ferriswheel";
export const HISTORIC = "historic";
export const HISTORIC_CN = "historic_cn";
export const MUSEUM = "museum";
export const MOVIE = "movie";
export const MONUMENT = "monument";
export const NOTE = "note";
export const RELIC_JP = "relic_jp";
export const CIVIC_BLDG = "civic_bldg";
export const POSTOFFICE = "postoffice";
export const POSTOFFICE_JP = "postoffice_jp";
export const LIBRARY = "library";
export const POLICE = "police";
export const POLICE_JP = "police_jp";
export const SCHOOL = "school";
export const SCHOOL_CN_JP = "school_cn_jp";
export const BRIDGE = "bridge";
export const RESTROOM = "restroom";
export const CITY_OFFICE_JP = "city_office_jp";
export const CIVIL_OFFICE_JP = "civil_office_jp";
export const GOVERNMENT_CN = "government_cn";
export const WORSHIP_CHRISTIAN = "worship_christian";
export const WORSHIP_TEMPLE = "worship_temple";
export const WORSHIP_JEWISH = "worship_jewish";
export const WORSHIP_MORMON = "worship_mormon";
export const WORSHIP_DHARMA = "worship_dharma";
export const WORSHIP_BUDDHIST = "worship_buddhist";
export const WORSHIP_HINDU = "worship_hindu";
export const WORSHIP_JAIN = "worship_jain";
export const WORSHIP_SHINTO = "worship_shinto";
export const WORSHIP_SIKH = "worship_sikh";
export const WORSHIP_ISLAM = "worship_islam";
export const TRAIN = "train";
export const BUS = "bus";
export const METRO = "metro";
export const SUBWAY = "subway";
export const FUNICULAR = "funicular";

export const families = {
  services: { color: "909ce1" },
  health: { color: "f88181" },
  outdoor: { color: "4db546" },
  transport: { color: "10bdff" },
  food: { color: "ff9e67" },
  shopping: { color: "4b96f3" },
  entertainment: { color: "13b5c7" },
  civil: { color: "7b9eb0" },
  worship: { color: "7b9eb0" },
  transit: { color: "10bdff" }
};

export const icons = {
  dot: { type: "poi", color: "7b9eb0" },
  nickname: { type: "poi", color: "4285f4" },
  heart: { type: "poi", color: "fa507d" },
  constellation_star: { type: "poi", color: "fbc02d" },
  home: { type: "poi", color: "4285f4" },
  generic: { type: "poi", color: "acc1" },
  gas: { type: "poi", family: "services" },
  parking: { type: "poi", family: "services" },
  car_rental: { type: "poi", family: "services" },
  lodging: { type: "poi", family: "services" },
  resort: { type: "poi", family: "services" },
  bank_euro: { type: "poi", family: "services" },
  bank_dollar: { type: "poi", family: "services" },
  bank_jp: { type: "poi", family: "services" },
  atm: { type: "poi", family: "services" },
  bank_intl: { type: "poi", family: "services" },
  hospital_H: { type: "poi", family: "health" },
  hospital_shield: { type: "poi", family: "health" },
  pharmacy: { type: "poi", family: "health" },
  fire_jp: { type: "poi", family: "health" },
  medical: { type: "poi", family: "health" },
  tree: { type: "poi", family: "outdoor" },
  mountain: { type: "poi", family: "outdoor" },
  stadium: { type: "poi", family: "outdoor" },
  paw: { type: "poi", family: "outdoor" },
  camping: { type: "poi", family: "outdoor" },
  cemetery: { type: "poi", family: "outdoor" },
  golf: { type: "poi", family: "outdoor" },
  flower: { type: "poi", family: "outdoor" },
  hiking: { type: "poi", family: "outdoor" },
  boating: { type: "poi", family: "outdoor" },
  fishing: { type: "poi", family: "outdoor" },
  hotspring: { type: "poi", family: "outdoor" },
  airport: { type: "poi", family: "transport" },
  restaurant: { type: "poi", family: "food" },
  bar: { type: "poi", family: "food" },
  cafe: { type: "poi", family: "food" },
  glass: { type: "poi", family: "food" },
  shoppingbag: { type: "poi", family: "shopping" },
  shoppingcart: { type: "poi", family: "shopping" },
  palette: { type: "poi", family: "entertainment" },
  lighthouse: { type: "poi", family: "entertainment" },
  theater: { type: "poi", family: "entertainment" },
  camera: { type: "poi", family: "entertainment" },
  dice: { type: "poi", family: "entertainment" },
  dolphin: { type: "poi", family: "entertainment" },
  event_venue: { type: "poi", family: "entertainment" },
  ferriswheel: { type: "poi", family: "entertainment" },
  historic: { type: "poi", family: "entertainment" },
  historic_cn: { type: "poi", family: "entertainment" },
  museum: { type: "poi", family: "entertainment" },
  movie: { type: "poi", family: "entertainment" },
  monument: { type: "poi", family: "entertainment" },
  note: { type: "poi", family: "entertainment" },
  relic_jp: { type: "poi", family: "entertainment" },
  civic_bldg: { type: "poi", family: "civil" },
  postoffice: { type: "poi", family: "civil" },
  postoffice_jp: { type: "poi", family: "civil" },
  library: { type: "poi", family: "civil" },
  police: { type: "poi", family: "civil" },
  police_jp: { type: "poi", family: "civil" },
  school: { type: "poi", family: "civil" },
  school_cn_jp: { type: "poi", family: "civil" },
  bridge: { type: "poi", family: "civil" },
  restroom: { type: "poi", family: "civil" },
  city_office_jp: { type: "poi", family: "civil" },
  civil_office_jp: { type: "poi", family: "civil" },
  government_cn: { type: "poi", family: "civil" },
  worship_christian: { type: "poi", family: "worship" },
  worship_temple: { type: "poi", family: "worship" },
  worship_jewish: { type: "poi", family: "worship" },
  worship_mormon: { type: "poi", family: "worship" },
  worship_dharma: { type: "poi", family: "worship" },
  worship_buddhist: { type: "poi", family: "worship" },
  worship_hindu: { type: "poi", family: "worship" },
  worship_jain: { type: "poi", family: "worship" },
  worship_shinto: { type: "poi", family: "worship" },
  worship_sikh: { type: "poi", family: "worship" },
  worship_islam: { type: "poi", family: "worship" },
  train: { type: "transit", family: "transit" },
  bus: { type: "transit", family: "transit" },
  metro: { type: "transit", family: "transit" },
  subway: { type: "transit", family: "transit" },
  funicular: { type: "transit", family: "transit" }
};

export default function googleMapIcon(icon, { color, scale } = { scale: 1 }) {
  if (!icons[icon]) {
    return googleMapIcon(GENERIC, { color, scale });
  }
  const iconObj = icons[icon];
  if (!color) {
    color = iconObj.color || families[iconObj.family].color || "7b9eb0";
  }
  if (iconObj.type === "poi") {
    return `https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-1-small.png,assets/icons/poi/tactile/pinlet_outline_v2-1-small.png,assets/icons/poi/tactile/pinlet-1-small.png,assets/icons/poi/quantum/pinlet/${icon}_pinlet-1-small.png&highlight=ff000000,ffffff,${color},ffffff?scale=${scale}`;
  }
  return `https://www.google.com/maps/vt/icon/name=assets/icons/transit/quantum_v2/transit-container-outline-1-small.png,assets/icons/transit/quantum_v2/transit-container-1-small.png,assets/icons/transit/quantum_v2/${icon}-1-small.png&highlight=ffffff,${color},ffffff?scale=${scale}`;
}
