<template>
  <div>
    <div>
      <h1 class="mt-3">Admin Board</h1>
    </div>
    <div class="container">
      <section class="data">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="user.id" v-for="(user, index) in users">
              <td>{{ user.id }}</td>
              <td>
                <span v-if="formActualizar && idActualizar == user.id">
                  <input
                    v-model="usernameActualizar"
                    type="text"
                    class="form-control"
                  />
                </span>
                <span v-else>
                  {{ user.username }}
                </span>
              </td>
              <td>
                <span v-if="formActualizar && idActualizar == user.id">
                  <button
                    @click="guardarActualizacion(user.id, index)"
                    class="btn btn-success"
                  >
                    Guardar
                  </button>
                </span>
                <span v-else>
                  <button
                    @click="verFormActualizar(user.id, index)"
                    class="btn btn-warning"
                  >
                    Actualizar
                  </button>
                  <button
                    @click="borrarUsuario(user.id)"
                    class="btn btn-danger"
                  >
                    Borrar
                  </button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Users",
  data() {
    return {
      username: "",
      formActualizar: false,
      idActualizar: 0,
      usernameActualizar: "",
      users: [],
    };
  },
  methods: {
    verFormActualizar(userId, index) {
      this.idActualizar = userId;
      this.usernameActualizar = this.users[index].username;
      console.log(this.usernameActualizar);
      this.formActualizar = true;
    },
    async borrarUsuario(userId) {
      await axios.delete(
        `https://62b241bcc7e53744afca0e5c.mockapi.io/users/${userId}`
      );
      this.actualizarUsuarios();
    },
    async guardarActualizacion(userId, index) {
      this.formActualizar = false;
      const updatedUser = this.usernameActualizar;
      this.users[index].username = this.usernameActualizar;
      await axios.put(
        `https://62b241bcc7e53744afca0e5c.mockapi.io/users/${userId}`,
        { username: updatedUser }
      );
    },
    async actualizarUsuarios() {
      const response = await axios.get(
        "https://62b241bcc7e53744afca0e5c.mockapi.io/users"
      );
      this.users = response.data;
    },
  },
  mounted() {
    this.actualizarUsuarios();
  },
};
</script>

<style>
</style>