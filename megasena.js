
//Simulando uma megasena(sorteando 6 número num range de 0 a 60)
let sorteio;
let mega = new Array();

let i = 0;
//sorteando os números
while (i < 6) {
	sorteio = Math.ceil(Math.random()*60);
	if (mega.indexOf(sorteio) < 0) {
		mega.push(sorteio);
		i++;
	}
}
//ordenando os numeros sorteados
function orderNumber(a,b) {
	return a - b;
}
mega.sort(orderNumber);
console.log(mega);

