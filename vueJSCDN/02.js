const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con vue',
        frutas: [
            { nombre: 'pera', cantidad: 0 },
            { nombre: 'Manzana', cantidad: 20 },
            { nombre: 'platano', cantidad: 30 }
        ],
        nuevaFruta: "",
    },
    methods: {
        agregarFruta (){
            //this para poder acceder a una palabra reservada de data
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
        }
    }

})