const app1 = {
    data() {
        return {
            mensaje: '',
            frutas: [{ nombre: 'Manzana', cantidad: 0, precioUnitario: 5, totalFruta: 0 }],
            nuevaFruta: '',
            nuevaCantidad: 0,
            nuevoPrecio: 0.0,
        };
    },
    methods: {
        montoFruta(i) {
            this.frutas[i].totalFruta = this.frutas[i].cantidad * this.frutas[i].precioUnitario;
            return this.frutas[i].totalFruta;
        },
        agregarNuevaFruta() {
            if (this.nuevaFruta && this.nuevaCantidad > 0 && this.nuevoPrecio > 0) {
                this.frutas.push({
                    nombre: this.nuevaFruta,
                    cantidad: this.nuevaCantidad,
                    precioUnitario: this.nuevoPrecio,
                    totalFruta: this.nuevaCantidad * this.nuevoPrecio,
                });
                
                this.nuevaFruta = '';
                this.nuevaCantidad = 0;
                this.nuevoPrecio = 0.0;
            }
        },
    },
    computed: {
        calculoSubtotal() {
            return this.frutas.reduce((acc, fruta) => acc + fruta.totalFruta, 0);
        },
        calculoIVA() {
            return this.calculoSubtotal * 0.16;
        },
        calculoTotal() {
            return this.calculoSubtotal + this.calculoIVA;
        },
    },
};
Vue.createApp(app1).mount('#seccion');
