export const tastingOptions = {
  distilleries: [
    { value: 1, name: 'Glenmorangie' },
    { value: 2, name: 'GlenDronach' },
    { value: 3, name: 'Aberlour' },
    { value: 4, name: 'The Glenlivet' },
    { value: 5, name: 'Balvenie' }
  ],
  heritage: {
    countries: [
      { value: 'SCT', name: 'Schottland' },
      { value: 'IRL', name: 'Irland' },
      { value: 'USA', name: 'Vereinigte Staaten von Amerika' },
      { value: 'JPN', name: 'Japan' },
      { value: 'CAN', name: 'Kanada' },
      { value: 'GER', name: 'Deutschland' }
    ],
    regions: {
      SCT: [
        { value: 'HL', name: 'Highlands' },
        { value: 'SS', name: 'Speyside' },
        { value: 'LL', name: 'Lowlands' },
        { value: 'CP', name: 'Campletown' },
        { value: 'IL-IS', name: 'Inseln - Islay' },
        { value: 'IL-SK', name: 'Inseln - Skye' },
        { value: 'IL-O', name: 'Inseln - Orkney' },
        { value: 'IS-A', name: 'Inseln - Arran' },
        { value: 'IS-M', name: 'Inseln - Mule' },
        { value: 'IS-J', name: 'Inseln - Jura' }
      ],
      GER: [
        { name: 'Baden-Württemberg', value: 'BW' },
        { name: 'Bayern', value: 'BY' },
        { name: 'Berlin', value: 'BE' },
        { name: 'Brandenburg', value: 'BB' },
        { name: 'Bremen', value: 'HB' },
        { name: 'Hamburg', value: 'HH' },
        { name: 'Hessen', value: 'HE' },
        { name: 'Mecklenburg-Vorpommern', value: 'MV' },
        { name: 'Niedersachsen', value: 'NI' },
        { name: 'Nordrhein-Westfalen', value: 'NW' },
        { name: 'Rheinland-Pfalz', value: 'RP' },
        { name: 'Saarland', value: 'SL' },
        { name: 'Sachsen', value: 'SN' },
        { name: 'Sachen-Anhalt', value: 'ST' },
        { name: 'Schleswig-Holstein', value: 'SH' },
        { name: 'Tühring', value: 'TH' }
      ],
      USA: [{ name: 'Kentucky', value: 'KY' }, { name: 'Tennessee', value: 'TN' }],
      IRL: [],
      JPN: [],
      WAL: [],
      IND: [],
      ESP: [],
      CAN: [],
      POL: [],
      DNK: [],
      SWE: [],
      TWN: [],
      FRA: []
    }
  },
  kinds: [
    { value: 'SM', name: 'Single Malt' },
    { value: 'BLM', name: 'Blended Malt' },
    { value: 'BL', name: 'Blend' },
    { value: 'BO', name: 'Bourbon' },
    { value: 'R', name: 'Rye' },
    { value: 'G', name: 'Grain' },
    { value: 'SG', name: 'Single Grain' }
  ],
  maturation: {
    caskKinds: [
      { value: 'SHERRY', name: 'Sherry' },
      { value: 'WINE', name: 'Wein' },
      { value: 'MADEIRA', name: 'Madeira' },
      { value: 'MARSALA', name: 'Marsala' },
      { value: 'MAGALA', name: 'Magala' },
      { value: 'SAUTERNES', name: 'Sauternes' },
      { value: 'BOURBON', name: 'Bourbon' },
      { value: 'PORT', name: 'Portwein' },
      { value: 'RUM', name: 'Rum' },
      { value: 'OAK', name: 'Frisches Eichenfass' },
      { value: 'BEER', name: 'Bier' }
    ],
    specifications: {
      SHERRY: [
        { value: 'OLOROSO', name: 'Oloroso' },
        { value: 'PEDRO_XIMENEZ', name: 'Pedro Ximenez' },
        { value: 'FINO', name: 'Fino' },
        { value: 'AMONTILLADO', name: 'Amontillado' },
        { value: 'MANZANILLA', name: 'Manzanilla' }
      ],
      WINE: [
        { value: 'CABERNET_SAUVIGNON', name: 'Cabernet Sauvignon' },
        { value: 'AMERONE', name: 'Amerone' },
        { value: 'BURGUNDY', name: 'Burgunder' },
        { value: 'BANYUL', name: 'Banyul' }
      ],
      MADEIRA: [],
      MARSALA: [],
      SAUTERNES: [],
      BOURBON: [],
      PORT: [{ value: 'RED_PORT', name: 'Roter Portwein' }, { value: 'WHITE_PORT', name: 'Weißer Portwein' }],
      MALAGA: [],
      RUM: [],
      OAK: [
        { value: 'US_WHITE_OAK', name: 'Amerikanische Eiche' },
        { value: 'EU_DARK_OAK', name: 'Europäische Eiche' }
      ],
      BEER: [{ value: 'IPA', name: 'IPA' }]
    }
  }
};
