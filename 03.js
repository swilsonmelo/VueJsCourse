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
        total: 0
    },
    methods: {
        agregarFruta() {
            //this para poder acceder a una palabra reservada de data
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = "";
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total += fruta.cantidad;
            }
            return this.total;

        }
    }

})