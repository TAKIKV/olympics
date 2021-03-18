'use strict';

const config = require('../../config');
const pgp = require('pg-promise')({});
const db = pgp(config.database);

const TABLES = [
  'livres',
  'auteurs'
]
// // Function des erreurs
// const check =function(req, res, next){
//   const table = req.params.table;
//   if (TABLES.find((t) => t === table)){
//     continue;
//   }else{
//     res.send("La table "+ table + " n'existe pas");
//   }
// }

exports.list = function (req, res){
  const table = req.params.table;
  // // checking error Function


  //check(req, res);
  if(table == 'livres'){
    return listLivres(req, res);
  }
}


const listLivres = function(req, res){
  let sql = 'SELECT livre_id, titre, auteur FROM livres';
  db.any(sql)
    .then((data) => {
      const result = data.map((item) => {
        return {
          type : 'Feature',
          propertie : {
            id: item.livre_id,
            name: item.titre,
            auteur: item.auteur
          }
        }
      });
      res.json({
        type:'FeatureCollection',
        features: result
      });
    })
    .catch((error) => {
      res.send(error);
    })
}
