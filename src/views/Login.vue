<template>
      <div class="row">
        <div class="col m12 card-panel">
            <form @submit.prevent="iniciarSesion">
            <div class="row">
                <div class="col m3">
                    <label>Rut</label>
                    <input type="number" v-model="rut">
                </div>
            </div>
                <div class="row">
                <div class="col m3">
                    <label>DV</label>
                    <input type="text" v-model="dv">
                </div>
            </div>
             <div class="row">
                <div class="col m3">
                    <label>Contraseña</label>
                    <input type="password" v-model="password">
                </div>
            </div>
           
             <div class="row">
                <div class="col m3">
                  <button type="submit" v-show="!loading" class="waves-effect waves-light btn">INICIAR SESION<i class="material-icons right">security</i></button>
                <div class="progress" v-show="loading">
                   <div class="indeterminate"></div>
                     </div>
                </div>
            </div>
            </form>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'
export default {
    name:'Login',
    data(){
        return{
            rut: '',
            dv: '',
            password: '',
            loading: false
        }
    },
    methods:{
        async iniciarSesion()
        {
            var payload = {
                rut: this.rut,
                dv: this.dv,
                password: this.password
            };
            this.loading = true;
            await this.axios.post('/api/login', payload)
            .then(response =>{
               this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
             //  console.log(response.data)
     localStorage.setItem('token',JSON.stringify(response.data));
         //    localStorage.setItem('isAuthentincated', 'S');
         var nombre  = JSON.parse(localStorage.getItem('token'));
            var usuario = nombre.data.nombre
  

         
                this.$store.commit('setAuthenticated', true);
               this.$store.commit('setNombre', usuario);
               this.$router.push('/')
            })
            .catch(error =>{
                var data = error.response.data;
                M.toast({html: data.message})
            });

            this.loading = false;
        }
    }
}
</script>