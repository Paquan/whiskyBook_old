export const tastingOptions = {
  distilleries: [
    { value: 1, label: 'Glenmorangie' },
    { value: 2, label: 'GlenDronach' },
    { value: 3, label: 'Aberlour' },
    { value: 4, label: 'The Glenlivet' },
    { value: 5, label: 'Balvenie' }
  ],
  heritage: {
    countries: [
      { value: 'SCT', name: 'Schottland' },
      { value: 'IRL', name: 'Irland' },
      { value: 'USA', name: 'Vereinigte Staaten von Amerika' },
      { value: 'JPN', name: 'Japan' },
      { value: 'CAN', name: 'Kanada' },
      { value: 'GER', name: 'Deutschland' },
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
      USA: ['KY', 'TN'],
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
  kind: ['SM', 'BLM', 'BL', 'BO', 'R'],
  maturation: {
    SHERRY: ['OLOROSO', 'PEDRO XIMENEZ', 'FINO', 'AMONTILLADO', 'MANZANILLA'],
    WINE: ['CABERNET SAUVIGNON', 'AMERONE', 'BURGUNDY', 'BANYUL'],
    MADEIRA: [],
    MARSALA: [],
    SAUTERNES: [],
    BOURBON: [],
    PORT: [],
    MALAGA: [],
    RUM: [],
    WOOD: ['WHITE-OAK', 'DARK-OAK'],
    BEER: []
  }
};
