<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-1">
              Add a New Champion
            </h5>
            <form>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  v-model="input.imageUrl"
                  class="form-control"
                  placeholder="Image Url"
                />
                <label for="name">Image Url</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  v-model="input.name"
                  class="form-control"
                  placeholder="Name"
                />
                <label for="name">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="rol"
                  id="rol"
                  name="rol"
                  v-model="input.rol"
                  class="form-control"
                  placeholder="Rol"
                />
                <label for="rol">Rol</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="description"
                  id="description"
                  name="description"
                  v-model="input.description"
                  class="form-control"
                  placeholder="Description"
                />
                <label for="description">Description</label>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-dark btn-login text-uppercase fw-bold"
                  type="button"
                  v-on:click="addNewChampion()"
                >
                  Add Champion
                </button>
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
  name: "AddChampion",
  data() {
    return {
      input: {
        imageUrl: "",
        name: "",
        rol: "",
        description: "",
      },
    };
  },
  methods: {
    async addNewChampion() {
      const response = await axios.get(
        "https://62b241bcc7e53744afca0e5c.mockapi.io/champions"
      );
      const champions = response.data;
      const champion = champions.find((c) => c.name === this.input.name);
      if (this.input.imageUrl != "" && this.input.name != "" && this.input.rol != "") {
        if (!champion) {
          await axios.post(
            "https://62b241bcc7e53744afca0e5c.mockapi.io/champions",
            this.input
          );
          this.$router.push("/champions");
          alert("Champion registered succesfully!");
        } else {
          alert(`Champion ${champion.name} already exists`);
        }
      } else {
        alert("Please fill the fields.");
      }
    },
  },
};
</script>

<style>
</style>