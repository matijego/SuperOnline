<template>
    <div>
        <div class="row p-3 h5 mt-3">

            <div class="col-2">
                <router-link to="/" style="color: #3FD225;">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-left h4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
                </svg>
                </router-link>

            </div>
            <div class="col-8 text-center">{{$route.params.id}}</div>
            <div class="col-2"></div>

        </div>
        <div class="row">
            <div v-for="item in productos" :key="item.id" class="col-6 shadow-sm mt-3 border-top border-light p-2" style="height: 360px;" >
                <div class="row">
                            
                    <div class="col-12 p-3">
                        <img :src="`${publicPath}` + item.imgUrl"  alt="Producto" class="img-fluid">
                    </div>
        
                    <div class="col-12 text-center">
                        <p><small>{{item.nombre}}</small></p>
                    </div>
                                
                    <div class="col-12 text-center">
                        <p class="h6 text-danger"><em>$ {{item.precio}}</em></p>
                    </div>
                                
                    <div class="col-4 text-center">
                        <a class="text-center" @click="item.cantidad--" style="color: #3FD225;" v-if = "item.cantidad > 1">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash-circle h4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                        </a>
                        <a class="text-center" style="color: #ABABAB;" v-if = "item.cantidad == 1">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash-circle h4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </a>
                    </div>
                    <div class="col-4 text-center">
                        {{item.cantidad}}
                    </div>
                                
                    <div class="col-4 text-center">
                        <a class="text-center" style="color: #ABABAB;" v-if= "item.cantidad == 5">
                                    
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle h4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                                        
                        </a>

                        <a class="text-center" @click="item.cantidad++" style="color: #3FD225;" v-if= "item.cantidad < 5">
                                    
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle h4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                                        
                        </a>
                    </div>
                                
                    <div class="col-12 text-center p-1">
                        <a class="" style="color: #3FD225;" @click="agregarCarrito(item)">
                                        
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-plus h3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                <path fill-rule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                                        
                        </a>
                    </div>
                                
                                
                                
                </div>


            
            </div>
        </div>
    </div>
</template>

<script>


//FIREBASE CONFIGURACIÓN
import db from './firebaseinit'



import {mapState, mapMutations} from 'vuex';


export default {
    name: 'Productos',
    data () {
        return {
            publicPath: process.env.BASE_URL,
            productos: []
            
            
        }
    },
    created(){
        db.collection('/Productos/Categorias/' + this.$route.params.id).get().then(
            querySnapshot => {
                querySnapshot.forEach(doc => {

                    const data = {
                        'id': doc.id,
                        'nombre': doc.data().nombre,
                        'cantidad': doc.data().cantidad,
                        'imgUrl': doc.data().imgUrl,
                        'precio': doc.data().precio
                        
                    }
                    this.productos.push(data)
                })
            }
        )
    },
    computed: {
        ...mapState(['mostrar_productos', 'nom_categoria'])
        
    },
    methods: {
        ...mapMutations(['agregarCarrito'])
    }
    

}
</script>