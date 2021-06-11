<template>
           
                
                <div class="row mt-3 ">
                   <div class="col-12 text-center p-3 h5">Categorías</div>
                    <router-link @click="nom_categorias = item.nombre" :to="{ name: 'productos', params: {id: item.nombre} }" v-for= "item of categorias" :key= "item.id" class="col-6 p-3 text-center shadow-sm mt-2" style="height: 220px;">
                        
                         <img :src="`${publicPath}` + item.img" class="img-fluid" alt="wep">
                         <a class="h6 text-dark" >{{item.nombre}}</a>

                    </router-link>
                   
                    
                    


                </div>
                
            
</template>


<script>

import {mapState} from 'vuex';

export default {
    name: 'Categorias',
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        ...mapState(['categorias', 'nom_categoria'])
        
    }
}
</script>