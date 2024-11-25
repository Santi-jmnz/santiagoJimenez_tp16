/* parse(): Acepta una cadena JSON como parámetro y devuelve el objeto JavaScript correspondiente.
    stringify(): Acepta un objeto como parámetro y devuelve la cadena JSON correspondiente.
*/
function parsearBicis() {    
    let fs = require('fs');
    let bicis = fs.readFileSync("bicicletas.json");
    return JSON.parse(bicis)
}
module.exports = parsearBicis;

