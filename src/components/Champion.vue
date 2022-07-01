<template>
  <div class="card mt-3 mx-3">
    <img :src="champion.imageUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">
        <span v-if="updateForm">
          <p class="card-text"><strong>Name:</strong></p>
          <input v-model="updateName" type="text" class="form-control" />
        </span>
        <span v-else>
          <strong>{{ champion.name }}</strong>
        </span>
      </h5>

      <div>
        <span v-if="updateForm">
          <p class="card-text"><strong>Rol: </strong></p>
          <input v-model="updateRol" type="text" class="form-control" />
        </span>
        <span v-else> <strong>Role: </strong>{{ champion.rol }} </span>
      </div>

      <div>
        <span v-if="updateForm">
          <p class="card-text"><strong>Description: </strong></p>
          <input v-model="updateDescription" type="text" class="form-control" />
        </span>
        <span v-else>
          <strong>Description: </strong>{{ champion.description }}
        </span>
      </div>

      <div>
        <button
          type="button"
          class="btn btn-dark mt-3"
          v-on:click="showUpdateForm()"
        >
          <i class="bi bi-pen"></i>
        </button>

        <button
          type="button"
          class="btn btn-success mt-3 mx-2"
          v-on:click="saveChanges(champion)"
          v-if="updateForm"
        >
          <i class="bi bi-check"></i>
        </button>
        
        <button
          type="button"
          class="btn btn-danger mt-3"
          v-on:click="removeChampion(champion)"
          v-if="updateForm"
        >
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Champion",
  data() {
    return {
      updateForm: false,
      updateName: "",
      updateRol: "",
      updateDescription: "",
    };
  },
  props: {
    champion: Object,
  },
  methods: {
    showUpdateForm() {
      if (this.updateForm) {
        this.updateForm = false;
      } else {
        this.updateForm = true;
      }
    },
    async saveChanges(champion) {
      this.updateForm = false;
      const updatedChampion = {
        name: this.updateName,
        rol: this.updateRol,
        description: this.updateDescription,
      };
      champion.name = this.updateName;
      champion.rol = this.updateRol;
      champion.description = this.updateDescription;

      await axios.put(
        `https://62b241bcc7e53744afca0e5c.mockapi.io/champions/${champion.id}`,
        updatedChampion
      );
    },
    async removeChampion(champion) {
      await axios.delete(
        `https://62b241bcc7e53744afca0e5c.mockapi.io/champions/${champion.id}`
      );
      this.$el.parentNode.removeChild(this.$el)
    }
  },
};
</script>