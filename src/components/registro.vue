<template>
    <form @submit.prevent="registro">
        <input type="email" class="form-control mt-5" v-model="email" placeholder="Email">
        <input type="password" class="form-control mt-5" v-model="pass" placeholder="Contraseña">
        <button class="btn btn-success text-center mt-5">Guardar</button>
    </form>
</template>

<script>
import config from './config'
firebase.initializeApp(config)
import firebase from 'firebase'


export default {
    name: 'Registro',
    data() {
        return {
            email: '',
            pass: ''
        }
    },

    methods: {
        registro: function() {
            console.log('wep')
            firebase.auth().createUserWithEmailAndPassword(this.email, this.pass)
            .then(
                user => {
                console.log(`Cuenta creada con el email: ${user.user.email}`)
                
                },

                err => {
                    alert(err.message)
                }
            );
        }
    }
    
}
</script>