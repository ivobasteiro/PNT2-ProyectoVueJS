<template>
  <div>
    <p>Unauthorized</p>
    <Login/>
  </div>
</template>

<script>
import Login from './Login.vue';

export default {
  name: "Unauth",
  components: {Login}
};
</script>