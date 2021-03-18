// alert('Script exoleaflet.js est bien chargé!!!, Merci de votre dévéloppement. ');

// setview = latitude, longitude, niv.zoom
var mymap = L.map('carte').setView([48.859, 2.347], 12);

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

var marker = L.marker([48.861918, 2.354164]).addTo(mymap);

var circle = L.circle([48.859, 2.347], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    weight:0,
    radius: 4000
}).addTo(mymap);






marker.bindPopup("<b style='color:red'>Lacalisation de ma maison</b><br> Maison avec moisissures et bruits.").openPopup();
// circle.bindPopup("<b style='color:red'>1km de rayon pour possibilité de courses pendant le confinement</b><br>Paris, on habite dans le pays de la guerre? Liverté de déplacement! nous sommes pas d'oiseau dans un cage!!!").openPopup();

const coords = [48.859, 2.347];
for (var i=0; i < 200; i++){
    let newCoords = [48.859 + i * 0.1, 2.347+ i * 0.1]
    let style  = {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        weight:0,
        radius: 4000
    }
    L.circle(newCoords, style).addTo(mymap);
}

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





// Exo 2 ! USA Dansity Map !

//Création de Token of mapbox
var mapboxAccessToken = 'pk.eyJ1IjoidGFraWtvdiIsImEiOiJja2x1cTk0Y3AwOWhmMm9wbHk1cGlwbmdhIn0.4IZ_FJBkcBndgp2fdCWaIQ';

var map = L.map('USAMap').setView([37.8, -96], 4);




L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGFraWtvdiIsImEiOiJja2x1cTk0Y3AwOWhmMm9wbHk1cGlwbmdhIn0.4IZ_FJBkcBndgp2fdCWaIQ'
}).addTo(map);



L.geoJson(statesData).addTo(map);
function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}




function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}



L.geoJson(statesData, {style: style}).addTo(map);

function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    /*if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }*/
    info.update(e.target)
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
    layer.on({
        //Condition de position de souris
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}





geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

// nouveau control vierge
var info = L.control();


info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); 
    this.update();
    return this._div;
};



info.update = function(target) {
    //console.log(target);
    if(!target){
        return this._div.innerHTML = `
        <h4>Mon nouveau control</h4>
        `;
    }
    // this._div.innerHTML = `
    //     <h4>Densités de population</h4>
    //     <p>Etat : ${target.feature.properties.name}</p>
    //     <img src="img/canard.png">     
    //     `;
    this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
        : 'Hover over a state');
}
info.addTo(map);

/*
// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
        : 'Hover over a state');
};

info.addTo(map);
*/

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = []
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

    return div;
};
legend.addTo(map);












// Exo 3 carte Geoserver


var geomap = L.map('geomap').setView([51.505,-0.09], 4);

//Données geoserver depuis directement chargé
// var wmsLayer = L.tileLayer.wms(
//     'http://localhost:8080/geoserver/infrastructure/wms?',
//     {
//         layers: 'infrastructure_agregation'
//     }
// ).addTo(geomap);



// Données geoserver via postgreGIS
var wmsLayer = L.tileLayer.wms(
    'http://localhost:8080/geoserver/infrastructure/wms?',
    {
        layers: 'countries'
    }
).addTo(geomap);



// construction de chemin de url
const url = "http://localhost:8080/geoserver/infrastructure/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=infrastructure%3Acountries&maxFeatures=50&outputFormat=application%2Fjson"

const newColorFunction = function(feature){
    const name = feature.properties.name_fr;
    if (name === 'France'){
        return 'red';
    }
} 

const newStyle = function(feature) {
    return{
        fillColor: newColorFunction(feature)
    }
}

//importation depuis fiche xml
fetch(url)
    .then((response)=> response.json())
    .then((json) => {
        console.log(json);
        L.geoJson(json, {
            style: newStyle
        }).addTo(geomap);
    });
