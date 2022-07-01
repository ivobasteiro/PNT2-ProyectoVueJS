<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Users from "./components/Users.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Login,
    Register,
    Users
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
