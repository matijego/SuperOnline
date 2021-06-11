<template>
    
            <nav class="navbar navbar-expand-sm navbar-dark shadow-sm sticky-top" style="background-color: #3FD225;">
                    <router-link to="/" class="navbar-brand">
                    SuperOnline 
                   <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-shop h4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                    </svg>
                    </router-link>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#uno">
                         <span class="navbar-toggler-icon"></span>
                     </button>
                     
                    <div class="collapse navbar-collapse" id="uno">
                        <ul class="navbar-nav ml-auto rounded-bottom">
                           <ion-icon class="img-fluid" name="log-in-outline"></ion-icon>
                            <li class="nav-item">
                            
                            <router-link to="/Registro" class="nav-link text-white h6" data-toggle="modal" data-target="#login">
                            
                            Inicia sesión
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-open h4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z"/>
                              <path fill-rule="evenodd" d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z"/>
                              <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z"/>
                            </svg>
                            
                            </router-link>
                            
                            </li>
                            
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white h6" data-toggle="modal" data-target="#carrito">
                                
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart4 h4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg> ($ {{total}} ) 
                                </a>
                            </li>

                            <li class="nav-item">
                                <router-link to="/Formulario" class="nav-link text-white h6">Cargar producto</router-link>
                            </li>
                            
                        </ul>
                        
                    </div>
                    
                </nav>
    
    
</template>

<script>

import {mapState} from 'vuex';


export default {
    name: 'Nav',
    computed: {
        ...mapState(['total'])
    }
}
</script>