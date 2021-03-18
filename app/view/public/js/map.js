// // //Affichage de l'alarte
// //alert('Script map.js chargé');
//
window.onload = function () {

  // fetch('/api/medal/1')
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log('réponse', json);
  //     const result = document.getElementById('result');
  //     result.innerHTML = `
  //       <ul class="cthg-map-list">
  //         <li>Identifiant: ${json.id}</li>
  //         <li>Nom: ${json.athlete.name}</li>
  //         <li>Sport: ${json.epreuve.name}</li>
  //       </ul>
  //     `
  //   });

    fetch('/api/bdd/livres')
      .then((response) => response.json())
      .then((json) => {
        console.log('réponse', json.features);
        const result = document.getElementById('result');
        var output = '<ul>'
        for (var i = 0; i<json.features.length; i++){
          output += '<li>'+ json.features[i].propertie.name + ' : <em>' + json.features[i].propertie.auteur + '</em></li>'
        }
        output += '</ul>';
        result.innerHTML = output;
      });
        // result.innerHTML = `
        //   <ul class="cthg-map-list">
        //     <li>Identifiant: ${json.id}</li>
        //     <li>Nom: ${json.athlete.name}</li>
        //     <li>Sport: ${json.epreuve.name}</li>
        //   </ul>
        // `

    // fetch('http://api-adresse.data.gouv.fr/search/?q=' + 'VILLE')
    //   .then((json) => {
    //
      // })

      var formu = document.getElementById('formu');
      formu.addEventListener('submit',valide);

      function valide(e){
        e.preventDefault();
        var saisie = formu.elements["ville"].value;
        url = 'http://api-adresse.data.gouv.fr/search/?q=' + saisie;

        // console.log(url);

    // fetch(url, {
    //   method: 'get';
    //   headers: {
    //     'Content-Type' : 'application/x-www-form-urlencoded'
    //   }
    // })
    // .then(rep => {rep.json()})
    // .then(rep => {
    //   console.log(rep)
    // })
    //   }
      fetch(url)
        .then(r => r.json())
        .then(r2 => {
          console.log(r2.features[0].geometry.coordinates);
        });

      }
}
