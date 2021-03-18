'use strict';

const MEDALS = [
  {
    id: 1,
    athlete: {
      id: 200,
      name: 'Coincoin'
    },
    epreuve: {
      id: 1001,
      name: '100m'
    }
  },
  {
    id: 2,
    athlete: {
      id: 201,
      name: 'Bouché'
    },
    epreuve: {
      id: 1002,
      name: 'Saut à la perche'
    }
  },
];

exports.read = function(req, res) {
  // TODO recherche dans la base
  res.json(MEDALS[1]);
};

exports.search = function(req, res) {
  // TODO recherche dans la base
  res.json(MEDALS);
};
