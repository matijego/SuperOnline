import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0,
    nom_categoria: 'Almacén',
    categorias: [
      {nombre: 'Almacén', img: 'img/categorias/almacen.jpg'},
      {nombre: 'Higiene personal', img: 'img/categorias/higiene.jpg'},
      {nombre: 'Bebidas', img: 'img/categorias/bebidas.jpg'},
      {nombre: 'Limpieza', img: 'img/categorias/limpieza.jpg'}
    ],
    carrito: [],
    bandera: 0
    
  },


  mutations: {
   agregarCarrito(state, producto){
    
     console.log(producto.precio * producto.cantidad)
     state.bandera = 0
     if(state.total === 0){
       state.carrito.push({

         nombre: producto.nombre,
         precio: producto.precio,
         cantidad: producto.cantidad

       })
       state.total += producto.precio * producto.cantidad

     }else{
       state.carrito.map(function(carrito){
          if(carrito.nombre === producto.nombre){
            carrito.precio += producto.cantidad * producto.precio
            carrito.cantidad += producto.cantidad
            state.total += producto.cantidad * producto.precio
            state.bandera = 1
          }

       })

       if(state.bandera === 0){
         state.carrito.push({
           nombre: producto.nombre,
           precio: producto.cantidad * producto.precio,
           cantidad: producto.cantidad
         })
         state.total += producto.cantidad * producto.precio
         state.bandera = 1
       }
     }
   }
  },
  modules: {
  }
})
