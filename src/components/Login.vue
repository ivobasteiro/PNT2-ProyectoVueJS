<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-1">Login</h5>
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
                  v-on:click="login()"
                >
                  Sign in
                </button>
                <div class="clearfix mt-3">
                  <router-link to="/register"
                    >Create an account</router-link>
                </div>
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
            this.$router.push('/Personajes');
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