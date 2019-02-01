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
      { value: 'USA', name: 'Vereinigte Staaten von America' },
      { value: 'JPN', name: 'Japan' },
      { value: 'CAN', name: 'Kanada' },
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
        { name: 'BW', value: 'BW' },
        { name: 'BY', value: 'BY' },
        { name: 'BE', value: 'BE' },
        { name: 'BB', value: 'BB' },
        { name: 'HB', value: 'HB' },
        { name: 'HH', value: 'HH' },
        { name: 'HE', value: 'HE' },
        { name: 'MV', value: 'MV' },
        { name: 'NI', value: 'NI' },
        { name: 'NW', value: 'NW' },
        { name: 'RP', value: 'RP' },
        { name: 'SL', value: 'SL' },
        { name: 'SN', value: 'SN' },
        { name: 'ST', value: 'ST' },
        { name: 'SH', value: 'SH' },
        { name: 'TH', value: 'TH' }
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
