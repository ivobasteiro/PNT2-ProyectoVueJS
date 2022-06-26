<template>
  <div>
    <div id="register">
      <h1>Register</h1>
      <div class="form-inputs">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          v-model="input.username"
          placeholder="Username"
        />
      </div>
      <div class="form-inputs">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="input.password"
          placeholder="Password"
        />
      </div>
      <button type="button" v-on:click="register()">Register</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      const response = await axios.get(
        "https://62b241bcc7e53744afca0e5c.mockapi.io/users"
      );
      const users = response.data;
      const user = users.find((u) => u.username === this.input.username);
      if (!user) {
        await axios.post(
          "https://62b241bcc7e53744afca0e5c.mockapi.io/users",
          this.input
        );
        alert("Usuario registrado");
      } else {
          alert(`El usuario ${user.username} ya esta registrado`);
      }
    },
  },
};
</script>

<style>
</style>