// Les tous les années de cartes sont crées
var mymap = L.map('carte').setView([30, 0], 2);

// importation des cartes leaflet(on doit changer notre propre Token créé sur mapbox)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    // mon propre token // mapbox//username : Takikov
    accessToken: 'pk.eyJ1IjoidGFraWtvdiIsImEiOiJja2x1cTk0Y3AwOWhmMm9wbHk1cGlwbmdhIn0.4IZ_FJBkcBndgp2fdCWaIQ'
}).addTo(mymap);




/*Legend specific*/
// var legend = L.control({ position: "bottomleft" });
//
// legend.onAdd = function(mymap) {
//   var div = L.DomUtil.create("div", "legend");
//   div.innerHTML += "<h4>Légende</h4>";
//   div.innerHTML += '<img scr='img/summer.png'><span>Winter</span><br>';
//   div.innerHTML += '<img scr='img/winter.png'><span>Summer</span><br>';
//     return div;
//   };
//
//   legend.addTo(mymap);









var summer = L.icon({iconUrl: scr='img/summer.png',iconSize: [10, 10]});
var winter = L.icon({iconUrl: scr='img/winter.png',iconSize: [10, 10]});





// var marker = L.marker([37.985096, 23.727036], {icon: summer}).addTo(mymap);
// marker.bindPopup("<form action="#" method="get" id="Date"><fieldset><select name="date"><option class="date" type="option" id="1"><b style='color:red'>1896 : Athènes</b><br><img id=logo src=img/1896.jpg></select></fieldset></form></option>").openPopup();



// <b style='color:red'>
//   1896 : Athènes
// </b>
// <br>
// <img id=logo src=img/1896.jpg><a href='http://osm.org/copyright'>OpenStreetMap</a>



var marker = L.marker([37.985096, 23.727036], {icon: summer}).addTo(mymap);
marker.bindPopup(`
  <div class="container"><b style='color:red'>Athènes</b></div>
    <div id="exTab1">
      <ul  class="nav nav-pills">
  			<li class="active">
          <a  href="#1a" data-toggle="tab">1896</a>
  			</li>
  			<li><a href="#2a" data-toggle="tab">1906</a>
  			</li>
  			<li><a href="#3a" data-toggle="tab">2004</a>
  			</li>
  		</ul>
  	<div class="tab-content clearfix">
  		<div class="tab-pane active" id="1a">
        <img id=logo src=img/1896.jpg>
  		</div>
  		<div class="tab-pane" id="2a">
        <img id=logo src=img/1906.jpg>
  		</div>
      <div class="tab-pane" id="3a">
        <img id=logo src=img/2004.png>
  		</div>
  	</div>
  </div>
`).openPopup();

var marker = L.marker([48.859, 2.347], {icon: summer}).addTo(mymap);
marker.bindPopup(`
  <div class="container"><b style='color:red'>Paris</b></div>
    <div id="exTab1">
      <ul  class="nav nav-pills">
  			<li class="active">
          <a  href="#1a" data-toggle="tab">1900</a>
  			</li>
  			<li><a href="#2a" data-toggle="tab">1924</a>
  			</li>
  		</ul>
  	<div class="tab-content clearfix">
  		<div class="tab-pane active" id="1a">
        <img id=logo src=img/1900.jpg>
  		</div>
  		<div class="tab-pane" id="2a">
        <img id=logo src=img/1924.png>
  		</div>
  	</div>
  </div>
`).openPopup();

var marker = L.marker([51.503272, -0.142822], {icon: summer}).addTo(mymap);
marker.bindPopup(`
  <div class="container"><b style='color:red'>Athènes</b></div>
    <div id="exTab1" >
      <ul  class="nav nav-pills">
  			<li class="active">
          <a  href="#1a" data-toggle="tab">1908</a>
  			</li>
  			<li><a href="#2a" data-toggle="tab">1948</a>
  			</li>
  			<li><a href="#3a" data-toggle="tab">2012</a>
  			</li>
  		</ul>
  	<div class="tab-content clearfix">
  		<div class="tab-pane active" id="1a">
        <img id=logo src=img/1908.jpg>
  		</div>
  		<div class="tab-pane" id="2a">
        <img id=logo src=img/1948.png>
  		</div>
      <div class="tab-pane" id="3a">
        <img id=logo src=img/2012.png>
  		</div>
  	</div>
  </div>
`).openPopup();

var marker = L.marker([35.682287, 139.704895], {icon: summer}).addTo(mymap);
marker.bindPopup(`
  <div class="container"><b style='color:red'>Tokyo</b></div>
    <div id="exTab1" >
      <ul  class="nav nav-pills">
  			<li class="active">
          <a  href="#1a" data-toggle="tab">1964</a>
  			</li>
  			<li><a href="#2a" data-toggle="tab">2020</a>
  			</li>
  		</ul>
  	<div class="tab-content clearfix">
  		<div class="tab-pane active" id="1a">
        <img id=logo src=img/1964.png>
  		</div>
  		<div class="tab-pane" id="2a">
        <img id=logo src=img/2020.png>
  		</div>
  	</div>
  </div>
`).openPopup();

var marker = L.marker([47.265159, 11.394711], {icon: winter}).addTo(mymap);
marker.bindPopup(`
  <div class="container"><b style='color:red'>Innsbruck</b></div>
    <div id="exTab1">
      <ul  class="nav nav-pills">
  			<li class="active">
          <a  href="#1a" data-toggle="tab">1964 Hiver</a>
  			</li>
  			<li><a href="#2a" data-toggle="tab">1976 Hiver</a>
  			</li>
  		</ul>
  	<div class="tab-content clearfix">
  		<div class="tab-pane active" id="1a">
        <img id=logo src=img/1964W.png>
  		</div>
  		<div class="tab-pane" id="2a">
        <img id=logo src=img/1976W.png>
  		</div>
  	</div>
  </div>
`).openPopup();

var marker = L.marker([44.278785, -73.981075], {icon: winter}).addTo(mymap);
marker.bindPopup(`
  <div class="container"><b style='color:red'>Lake Placid</b></div>
    <div id="exTab1">
      <ul  class="nav nav-pills">
  			<li class="active">
          <a  href="#1a" data-toggle="tab">1932 Hiver</a>
  			</li>
  			<li><a href="#2a" data-toggle="tab">1980 Hiver</a>
  			</li>
  		</ul>
  	<div class="tab-content clearfix">
  		<div class="tab-pane active" id="1a">
        <img id=logo src=img/1932W.png>
  		</div>
  		<div class="tab-pane" id="2a">
        <img id=logo src=img/1980W.png>
  		</div>
  	</div>
  </div>
`).openPopup();

var marker = L.marker([46.497069, 9.836197], {icon: winter}).addTo(mymap);
marker.bindPopup(`
  <div class="container"><b style='color:red'>St-Moritz</b></div>
    <div id="exTab1">
      <ul  class="nav nav-pills">
  			<li class="active">
          <a  href="#1a" data-toggle="tab">1928 Hiver</a>
  			</li>
  			<li><a href="#2a" data-toggle="tab">1948 Hiver</a>
  			</li>
  		</ul>
  	<div class="tab-content clearfix">
  		<div class="tab-pane active" id="1a">
        <img id=logo src=img/1928W.jpg>
  		</div>
  		<div class="tab-pane" id="2a">
        <img id=logo src=img/1948W.png>
  		</div>
  	</div>
  </div>
`).openPopup();







var marker = L.marker([38.631033, -90.211487], {icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1904 : St-Louis</b><br><img id=logo src=img/1904.jpg>").openPopup();
var marker = L.marker([59.325063, 18.07251], {icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1912 : Stockholm</b><br><img id=logo src=img/1912.jpg>").openPopup();
// var marker = L.marker([], {icon: summer}).addTo(mymap);
// marker.bindPopup("<b style='color:red'>1916 : Berlin</b><br><img id=logo src=img/1916.jpg> /n Exo et JO.").openPopup();
var marker = L.marker([51.221594, 4.400711], {icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1920 : Anvers</b><br><img id=logo src=img/1920.jpg>").openPopup();
var marker = L.marker([45.930904, 6.865425], {icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1924 Hiver: Chamonix</b><br><img id=logo src=img/1924W.jpg>").openPopup();
var marker = L.marker([52.371575, 4.884796], {icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1928 : Amsterdam</b><br><img id=logo src=img/1928.jpg>").openPopup();
var marker = L.marker([34.076322, -118.273315], {icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1932 : Los Angeles</b><br><img id=logo src=img/1932.png>").openPopup();
var marker = L.marker([52.552308, 13.381348], {icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1936 : Berlin</b><br><img id=logo src=img/1936.png>").openPopup();
var marker = L.marker([47.492895, 11.100655],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1936 Hiver :  Garmisch-Partenkirchen </b><br><img id=logo src=img/1936W.png>").openPopup();
var marker = L.marker([60.178677, 24.936218],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1952 : Helsinki</b><br><img id=logo src=img/1952.png>").openPopup();
var marker = L.marker([59.914556, 10.743256],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1952 Hiver : Oslo</b><br><img id=logo src=img/1952W.png>").openPopup();
var marker = L.marker([-37.814992, 144.93576],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1956 : Melbourne</b><br><img id=logo src=img/1956.png>").openPopup();
var marker = L.marker([46.53931, 12.136116],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1956 Hiver : Cortina d'Ampezzo </b><br><img id=logo src=img/1956W.png>").openPopup();
var marker = L.marker([41.893691, 12.479782],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1960 : Rome</b><br><img id=logo src=img/1960.png>").openPopup();
var marker = L.marker([39.197913, -120.232358],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1960 Hiver : Squaw Valley</b><br><img id=logo src=img/1960W.png>").openPopup();
var marker = L.marker([19.429298, -99.139252],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1968 : Mexico</b><br><img id=logo src=img/1968.png>").openPopup();
var marker = L.marker([45.178746, 5.72731],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1968 Hiver : Grenoble</b><br><img id=logo src=img/1968W.png>").openPopup();
var marker = L.marker([48.134567, 11.56929],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1972  : Munich</b><br><img id=logo src=img/1972.png>").openPopup();
var marker = L.marker([43.06969, 141.352844],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1972 Hiver : Sapporo</b><br><img id=logo src=img/1972W.png>").openPopup();
var marker = L.marker([45.497299, -73.609085],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1976 : Montréal</b><br><img id=logo src=img/1976.png>").openPopup();
var marker = L.marker([55.74814, 37.618561],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1980 : Moscou</b><br><img id=logo src=img/1980.png>").openPopup();
var marker = L.marker([34.076322, -118.273315],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1984 : Los Angeles</b><br><img id=logo src=img/1984.png>").openPopup();
var marker = L.marker([43.852949, 18.38356],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1984 Hiver : Sarajevo</b><br><img id=logo src=img/1984W.png>").openPopup();
var marker = L.marker([37.567222, 126.963501],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1988 : Séoul</b><br><img id=logo src=img/1988.png>").openPopup();
var marker = L.marker([51.190361, -114.038086],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1988 Hiver : Calgary</b><br><img id=logo src=img/1988W.png>").openPopup();
var marker = L.marker([41.394118, 2.172546],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1992 : Barcelone</b><br><img id=logo src=img/1992.png>").openPopup();
var marker = L.marker([45.670108, 6.38443],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1992 Hiver : Albertville</b><br><img id=logo src=img/1992W.png>").openPopup();
var marker = L.marker([33.749693, -84.386673],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1996 : Atlanta</b><br><img id=logo src=img/1996.png>").openPopup();
var marker = L.marker([36.630738, 138.213329],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>1998 : Nagano</b><br><img id=logo src=img/1998.png>").openPopup();
var marker = L.marker([-33.858556, 151.200714],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>2000 : Sydney</b><br><img id=logo src=img/2000.png>").openPopup();
var marker = L.marker([40.764317, -111.921844],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>2002 : Salt Lake City</b><br><img id=logo src=img/2002.png>").openPopup();
var marker = L.marker([45.068865, 7.678757],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>2006 : Turin</b><br><img id=logo src=img/2006.png>").openPopup();
var marker = L.marker([39.927431, 116.386414],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>2008 : Pékin</b><br><img id=logo src=img/2008.png>").openPopup();
var marker = L.marker([49.257409, -123.11142],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>2010 : Vancouver</b><br><img id=logo src=img/2010.png>").openPopup();
var marker = L.marker([43.584768, 39.714203],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>2014 : Sotchi</b><br><img id=logo src=img/2014.png>").openPopup();
var marker = L.marker([-22.88655, -43.2174689],{icon: summer}).addTo(mymap);
marker.bindPopup("<b style='color:red'>2016 : Rio de Janeiro </b><br><img id=logo src=img/2016.png>").openPopup();
var marker = L.marker([37.373486, 128.388119],{icon: winter}).addTo(mymap);
marker.bindPopup("<b style='color:red'>2018: Pyeongchang</b><br><img id=logo src=img/2018.png>").openPopup();












// marker.on('click', function(ev) {alert(ev.latlng);});

// var circle = L.circle([48.859, 2.347], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     weight:21,
//     radius: 4000
// }).addTo(mymap);


// marker.bindPopup("<b style='color:red'>Lacalisation de ma maison</b><br> Maison avec moisissures et bruitsssss.").openPopup();
// // circle.bindPopup("<b style='color:red'>1km de rayon pour possibilité de courses pendant le confinement</b><br>Paris, on habite dans le pays de la guerre? Liverté de déplacement! nous sommes pas d'oiseau dans un cage!!!").openPopup();
// const coords = [48.859, 2.347];
// for (var i=0; i < 200; i++){
//     let newCoords = [48.859 + i * 0.1, 2.347+ i * 0.1]
//     let style  = {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         weight:0,
//         radius: 4000
//     }
//     L.circle(newCoords, style).addTo(mymap);
// }
//je prepare une nouvellepopup que j'appelle 'popup'
var popup = L.popup();
// je définie une fonctionne que je veux jouer au click sur la carte
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Les coordonnées géographiques d'ici sont... : " + e.latlng.toString())
        .openOn(mymap);
}
// sur la map 'mymap' je lie l'action 'click' à la méthode 'onMapClick'
mymap.on('click', onMapClick);
function createCanard(e){
    console.log('Create a canard there', e.latlng);
    var icone = L.icon({
        iconUrl: 'img/canard.png',
        iconSize:[38, 95]
    });
    var marker = L.marker(e.latlng,{
        icon: icone,
        draggrable:true
    })
   marker.on('click',function() {marker.remove()});
   marker.addTo(mymap);
}
mymap.on('click',createCanard);
