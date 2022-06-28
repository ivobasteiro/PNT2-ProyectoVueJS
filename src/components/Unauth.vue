<template>
  <div>
    <div class="alert alert-danger" role="alert">
      <strong>Unauthorized</strong>
    </div>
    <Login />
  </div>
</template>

<script>
import Login from "./Login.vue";

export default {
  name: "Unauth",
  components: { Login },
};
</script>