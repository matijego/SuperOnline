<template>
  <div id="app" style="background-color: #FFFEE9;" >
    <Nav></Nav>
    <ModalCarrito></ModalCarrito>
    <Slider></Slider>
    <router-view/>
    <Pagos></Pagos>
    <Info_contacto></Info_contacto>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
import Slider from './components/slider.vue'
import Pagos from './components/pagos_envios.vue'
import Info_contacto from './components/info_contacto.vue'
import ModalCarrito from './components/modalCarrito.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Slider,
    Pagos,
    Info_contacto,
    ModalCarrito
  }
  
}
</script>


