<template>
        <div class="modal fade" id="carrito">
                               
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-light">
                    <div class="modal-header d-block">
                       <button type="button" class="close float" data-dismiss="modal">&times;</button>
                       <br>
                        <h3 class="modal-title text-center" style="margin-bottom: 30px;">Carrito</h3>
                    </div>
                                        
                     <div class="modal-body d-block align-items-center">
                       <div class="row">
                           
                           <div class="col-12" v-for="item of carrito" :key="item.id">
                                Nombre: {{item.nombre}} Cant: {{item.cantidad}} Precio: $ {{item.precio}}
                           </div>
                       </div>
                     </div>
                                        
                    <div class="modal-footer d-block">
                        
                    </div>
                                        
                </div>
             </div>
        </div>    


</template>

<script>

import {mapState} from 'vuex'

export default {
    name: 'ModalCarrito',
    computed: {
        ...mapState(['carrito'])
    }
}
</script>