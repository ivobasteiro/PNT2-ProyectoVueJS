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
        <span v-else> <strong>Rol: </strong>{{ champion.rol }} </span>
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
          v-on:click="showUpdateForm(champion.id, index)"
        >
          <i class="bi bi-pen"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Champion",
  data() {
    return {
      updateForm: false,
      updateName: "",
      idActualizar: 0,
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
  },
};
</script>