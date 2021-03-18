function pays(){
  var formepays = document.getElementById('forme_pays').elements["olym_pays"];
  var countrys = [];
  fetch('/api/bdd/track',{
    method : 'post',
    body: JSON.stringify({ hello: "9"}),
    headers: {'Content-Type': 'application/json'}
  })
    .then(req => req.json())
    .then((req) => {
      console.log(req);
      for (var i =0; i < req.features.length;i++){
        countrys += req.features[i].propertie.country + " ";
        var option = document.createElement('option');
        option.innerHTML = req.features[i].propertie.country;
        formepays.appendChild(option);
      }
    console.log(countrys);
  })
}
pays();


var select_pays = document.getElementById('pays');


select_pays.onchange = function(){
  alert(this.value)
}

document.getElementById('pays').addEventListener('change',valide2)



function valide2(e){
  //j'empêche le comportement par défaut du formulaire
  e.preventDefault();
  //Je récupère ce qu'a écrit l'utilisateur dans le formualaire
  var select = document.getElementById('pays').value;
  console.log(select);

  //j'insère dans un objet literal ce que je viens de récupérer (ici : la variable saisie)
  data2 = {hola: select}
  // data_medal = {Hola: saisie_type}
  //requete fetch qui permet d'envoyer la variable data à mon serveur
  fetch('/api/bdd/track2',{
    method: 'post',
    body: JSON.stringify(data2),
    headers: {'Content-Type': 'application/json'}
  })
  .then(r => r.json())
  .then((r) => {
    console.log(r);


  var ctx = document.getElementById('myChartPays').getContext('2d');


  var labels = []
  for (let i=0; i<r.features.length; i++){
   console.log(r.features[i])
   labels.push (r.features[i].propertie.year)
  }

  var golds = []
  for (i=0; i<r.features.length; i++){
    golds.push (r.features[i].propertie.gold)
  }
  var silvers = []
  for (i=0; i<r.features.length; i++){
    silvers.push (r.features[i].propertie.silver)
  }
  var bronzes = []
  for (i=0; i<r.features.length; i++){
    bronzes.push (r.features[i].propertie.bronze)
  }
    var dataensp = {
      labels: labels,
      datasets: [
          {
              label: "gold",
              backgroundColor: "#FFD700",
              data: golds
          },
          {
              label: "silver",
              backgroundColor: "#C0C0C0",
              data: silvers
          },
          {
              label: "bronze",
              backgroundColor: "#CD7F32",
              data: bronzes
          }
      ]
    };
  var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: dataensp,
      options: {
        responsive : true,
        scales: {
          yAxes: [{
            stacked: true,
          }]
        }
      }
  });

  })

}
