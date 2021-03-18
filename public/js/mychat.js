//selection de date(en utilisant le olympiad_id)
$('#container').html('');
$('#container').html('<canvas id="myChart"></canvas>');

var select_date = document.getElementById('year');
//year.addEventListener('submit', valide);
document.getElementById('year').addEventListener('change',valide)
function valide(e){
  //j'empêche le comportement par défaut du formulaire
  e.preventDefault();
  //Je récupère ce qu'a écrit l'utilisateur dans le formualaire
  var select = document.getElementById('year').value;
  //j'insère dans un objet literal ce que je viens de récupérer (ici : la variable saisie)
  data = {hello: select}
  // data_medal = {Hola: saisie_type}
  //requete fetch qui permet d'envoyer la variable data à mon serveur
  fetch('/api/bdd/track',{
    method: 'post',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
  })
  .then(r => r.json())
  .then((r) => {
    console.log(r);

  var ctx = document.getElementById('myChart').getContext('2d');
  var labels = []
  for (i=0; i<r.features.length; i++){
    labels.push (r.features[i].propertie.country)
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
  var dataens = {
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
  var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: dataens,
    options: {
        barValueSpacing: 20,
        responsive : true,
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                }
            }]
        }
    }
});

  })
}
