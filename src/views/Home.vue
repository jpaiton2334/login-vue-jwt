<template>
    <!-- <div>home{{data}}</div> -->
    <div class="">
  <div class="">
        <h1 class="datos-usuario">{{usuario}}</h1>
        <h5 class="datos-usuario"> Numero del grupo: {{numero}}</h5>
        <h5 class="datos-usuario"> Mensaje: {{msg}}</h5>
    </div>
    </div>
  
</template>


<script>

export default {
    name: 'App',
    computed: {
        usuario() {
            var token = JSON.parse(localStorage.getItem('token'));
            var nombre = token.data.nombre

            return nombre
        },
        numero() {
            var token = JSON.parse(localStorage.getItem('token'));
            var numero = token.data.numero
            return numero
        },
        msg() {
            var token = JSON.parse(localStorage.getItem('token'));
            var msg = token.msg
            return msg
        }
       
    }

}


</script>

<style  scoped>
.datos-usuario {
    padding: 10px;
    color: blue;
    text-align: center;
}.subtitle {
     padding: 10px;
     color:rgb(243, 243, 243);
     text-align: center;
    }

   
</style>
 