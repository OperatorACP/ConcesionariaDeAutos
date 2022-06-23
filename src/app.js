let autos = [{
    marca: "Ford",
    modelo: "Fiesta",
    color: "Azul",
    precio: 150000,
    km: 200,
    cuotas: 12,
    anio: 2019,
    patente: "APL123",
    vendido: false
},{
    marca: "Toyota",
    modelo: "Corolla",
    color: "Blanco",
    precio: 100000,
    km: 0,
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: false
}];

let concesionaria = {
   autos: autos,
   buscarAuto: function(patente){
      for(let i = 0;i<autos.length;i++){
         if(autos[i].patente == patente) {
            return autos[i];
         }
      }
      return null;
},
venderAuto: function(patente){
   if(this.buscarAuto(patente) != null){
      let index = autos.indexOf(this.buscarAuto(patente));
      autos[index].vendido = true;
      }
},
autosParaLaVenta: function(){
return autos = this.autos.filter(function (elemento){
      return !elemento.vendido
   })
},
};

 