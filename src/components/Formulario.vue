<template>
    <div>
    <form @submit.prevent="agregar" class="text-center p-2">
        
        <h3>Agregar nuevo producto</h3>

        <input type="text" class="form-control mt-5" v-model="ubicacion" placeholder="Ingresar categoría">
        <input type="text" class="form-control mt-5" v-model="nombre" placeholder="Nombre del producto">
        <input type="number" class="form-control mt-5" v-model="precio" placeholder="Precio" step="any">
        <input type="text" class="form-control mt-5" v-model="descripcion" placeholder="Descripción">
        <input type="number" class="form-control mt-5" v-model="stock" placeholder="Número de stock">
        <input type="text" class="form-control mt-5" v-model="imgUrl" placeholder="URL de imagen">
        
        
        <button class="btn btn-success text-center mt-5">Guardar</button>
        
    </form>


    </div>


</template>

<script>

//FIREBASE CONFIGURACIÓN
import db from './firebaseinit'






export default {
    name: 'Formulario',
    data() {
        return {
            ubicacion: '',
            nombre: '',
            precio: Number,
            cantidad: 1,
            stock: Number,
            descripcion: '',
            imgUrl: ''
        }
    },
    
    methods: {
        agregar(){
            db.collection('/Productos/Categorias/' + this.ubicacion).add({
                nombre: this.nombre,
                precio: this.precio,
                cantidad: this.cantidad,
                stock: this.stock,
                descripcion: this.descripcion,
                imgUrl: 'img_prod/' + this.imgUrl

            })
            .then(
                console.log('El producto' + this.nombre + 'fue agregado con éxito!'),
                this.$router.push('/Categorias/' + this.ubicacion)
            )

        }
    }
}
</script>