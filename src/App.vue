<template>
<nav>
  <div class="nav-wrapper teal">
     <ul class="right hide-on-med-and-down">
      <li><router-link v-if="$store.state.isAuthenticated" to="/Estudiantes">Estudiantes</router-link></li>
      <li><router-link v-if="!$store.state.isAuthenticated" :to="{name:'Login'}">Login</router-link></li>
     </ul>
  </div>
</nav>

<div class="container" >
    <router-view></router-view>
 </div>

<div class="user-data">
   <h1 style="color:Red"> nombre: {{$store.state.nombre}}</h1>
</div>
</template>

 
<script>
export default {
  name: 'App'
  
}

</script>

<style  scoped>

   .user-data{
    margin-top: 10px;
    padding: 10px;
    background: white;
    color: black;
    bottom: 0px;
    left: 0px;
    
   }
</style>
 
