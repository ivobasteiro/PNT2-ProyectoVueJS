<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-1">Register</h5>
            <form>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  id="username"
                  name="username"
                  v-model="input.username"
                  class="form-control"
                  placeholder="Username"
                />
                <label for="username">Username</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  v-model="input.password"
                  class="form-control"
                  placeholder="Password"
                />
                <label for="password">Password</label>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-primary btn-login text-uppercase fw-bold"
                  type="button"
                  v-on:click="register()"
                >
                  Sign Up
                </button>
              </div>
              <div class="clearfix mt-3">
                <router-link to="/login">Already have an account ?</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
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
      if (this.input.username != "" && this.input.password != "") {
        if (!user) {
          await axios.post(
            "https://62b241bcc7e53744afca0e5c.mockapi.io/users",
            this.input
          );
          this.$router.push('/login');
          alert("Usuario registrado con exito");
        } else {
          alert(`El usuario ${user.username} ya esta registrado`);
        }
      } else {
        alert("Los campos no pueden estar vacios.");
      }
    },
  },
};
</script>

<style>
</style>