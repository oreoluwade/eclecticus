export const returnDiffValue = (value) => {
  let returnValue;
  switch (typeof value) {
    case 'string':
      returnValue = 'this is a string';
      break;
    case 'number':
      returnValue = value * 3;
      break;
    default:
      returnValue = 'unrecognized type';
  }
  return returnValue;
};

export const filterFxn = (params) => {
  if (!Array.isArray(params)) {
    return `Cannot filter a ${typeof params}`;
  }
  return params.filter(Boolean);
};

export const friendsinfo = [
  {
    name: 'oreoluwade',
    occupation: 'developer',
    status: 'single',
    isActive: true,
  },
  {
    name: 'oladipupo',
    occupation: 'banker',
    status: 'single',
    isActive: false,
  },
  {
    name: 'oredavids',
    occupation: 'developer',
    status: 'married',
    isActive: true,
  },
  {
    name: 'tobidosh',
    occupation: 'procurement officer',
    status: 'engaged',
    isActive: false,
  },
];

export const procurementGuy = friendsinfo.find(item => item.occupation === 'procurement officer');
