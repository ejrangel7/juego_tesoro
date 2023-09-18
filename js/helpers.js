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
		return "You are very close";
	}
	else if(distance < 40){
		return "You are close";
	}
	else if(distance < 60){
		return "Near";
	}
	else if(distance < 100){
		return "Cold";
	}
	else if(distance < 360){
		return "you are cold ";
	} 
	else{
		return "You are very cold";
	}
}