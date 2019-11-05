const width = 400;
const height = 400;

let target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
}
//$ INDICA QUE LA VARIABLE VIENE DE UNA ETIQUETA HTML
let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let click = 0;
$map.addEventListener('click', function (e){
	click++;
	let distance = getDistance(e, target);
	let distanceHint = getDistanceHint(distance);
	$distance.innerHTML = `<h1>${distanceHint}</h1>`;
	if(distance < 20){
		alert(`Has encontrado el tesoro en ${click} clicks`);
		location.reload();
	}
});

