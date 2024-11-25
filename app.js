let bicis = require("./datosBici")
let dhBici = {
    bicicletas : bicis(),
    buscarBici(id){
        const idbici = this.bicicletas.filter(bici => bici.id === id);
        if (idbici.length != 0) {
            return idbici; 
        }
        return null;
    },
    venderBici(id){
        const biciEnVenta = this.buscarBici(id);
        if (biciEnVenta) {
            biciEnVenta.vendida = true;
            return biciEnVenta;
        }
        return "Bicicleta no encontrada";
    },
    biciParaLaVenta(){
        const bicisALaVenta = this.bicicletas.filter(bici => bici.vendida === false);
        return bicisALaVenta;
    },
    totalDeVentas(){
        const ventas = this.bicicletas.filter(bici => bici.vendida).reduce((total,bici)=> total + bici.precio,0);
        return ventas;
    },

    aumentoBici(porcentaje){
        const aumento = this.bicicletas.map(bici => bici.precio = ((bici.precio * porcentaje)/100) + bici.precio);
        for (let i = 0; i < this.bicicletas.length; i++) {
            console.log(`el aumento de las bicis es del % ${porcentaje} y el precio final es de: ${aumento[i]} para la bicicleta con el id ${i+1}`);
        }
    },
    biciPorRodado(numeroDelRodado){
        const rodado= this.bicicletas.filter(bici => bici.rodado == numeroDelRodado);
        return rodado;
    },
    listarTodasLasBici(){
        for (let element of this.bicicletas) {
            console.log(element);
        }
    }

}
// console.log(dhBici.buscarBici(5));
// console.log(dhBici.buscarBici(15));
// console.log(dhBici.venderBici(4));
// console.log(dhBici.biciParaLaVenta());
// console.log(dhBici.totalDeVentas());
    // dhBici.aumentoBici(25)
    console.log(dhBici.biciPorRodado(26));
    dhBici.listarTodasLasBici();
