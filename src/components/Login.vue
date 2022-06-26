<template>
  <div>
    <div id="login">
      <h1>Login</h1>
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
      <button type="button" v-on:click="login()">Login</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const response = await axios.get(
        "https://62b241bcc7e53744afca0e5c.mockapi.io/users"
      );

      if (this.input.username != "" && this.input.password != "") {
        const users = response.data;
        const user = users.find((u) => u.username === this.input.username);

        if (!user) {
          alert("invalid user");
        } else {
          if (
            user.username == this.input.username &&
            user.password == this.input.password
          ) {
            localStorage.setItem("logged", 1);
            alert("logeado");
          } else {
            alert("The username and / or password is incorrect");
          }
        }
      } else {
        alert("A username and password must be present");
      }
    },
  },
};
</script>

<style>
</style>