<template>
  <div>
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
                <!-- Formulario para actualizar -->
                <input
                  v-model="usernameActualizar"
                  type="text"
                  class="form-control"
                />
              </span>
              <span v-else>
                <!-- Dato username -->
                {{ user.username }}
              </span>
            </td>
            <td>
              <!-- Botón para guardar la información actualizada -->
              <span v-if="formActualizar && idActualizar == user.id">
                <button
                  @click="guardarActualizacion(user.id, index)"
                  class="btn btn-success"
                >
                  Guardar
                </button>
              </span>
              <span v-else>
                <!-- Botón para mostrar el formulario de actualizar -->
                <button
                  @click="verFormActualizar(user.id, index)"
                  class="btn btn-warning"
                >
                  Actualizar
                </button>
                <!-- Botón para borrar -->
                <button @click="borrarUsuario(user.id)" class="btn btn-danger">
                  Borrar
                </button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
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
      console.log("user Id :", userId);
      console.log("Ivo");
      await axios.delete(
        `https://62b241bcc7e53744afca0e5c.mockapi.io/users/${userId}`
      );
      this.actualizarUsuarios();
    },
    async guardarActualizacion(userId, index) {
      this.formActualizar = false;
      const updatedUser = this.usernameActualizar;
      this.users[index].username = this.usernameActualizar;
      await axios.put(`https://62b241bcc7e53744afca0e5c.mockapi.io/users/${userId}`, {username: updatedUser});
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