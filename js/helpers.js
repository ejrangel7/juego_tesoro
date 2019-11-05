//function getRandomNumber(size){
let getRandomNumber = size => {
	//Math.random() DEVUELVE NÚMEROS REALES DESDE 0 A 1
	//SE MULTIPLICA POR EL SIZE PARA QUE DEVUELVA NUMEROS GRANDES
	//Math.floor() DEVUELVE SOLO EL ENTERO DEL NUMERO RENDONDEANDO HACIA ARRIBA
	return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
	let diffx = e.offsetX - target.x;
	let diffy = e.offsetY - target.y;
	return Math.sqrt((diffx*diffx) + (diffy*diffy));
}

let getDistanceHint = distance => {
	if(distance < 30){
		return "Estas muy cerca";
	}
	else if(distance < 40){
		return "estas cerca";
	}
	else if(distance < 60){
		return "cerca";
	}
	else if(distance < 100){
		return "frio";
	}
	else if(distance < 360){
		return "estas frio";
	} 
	else{
		return "estas muy frio";
	}
}