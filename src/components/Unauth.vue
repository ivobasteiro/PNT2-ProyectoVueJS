<template>
  <div>
    <div class="alert alert-danger" role="alert">
      <strong>Unauthorized</strong>
      <p class="mb-auto">Please log in first</p>
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