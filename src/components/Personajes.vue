<template>
  <div class="bg-secondary">
    <div class="row">
      <div class="col-4" :key="personaje.id" v-for="personaje in personajes">
        <div class="card mt-4 text-center" style="width: 18rem, height: 8rem">
          <img :src="personaje.image" />
          <div class="card-body">
            <h5 class="card-title">{{ personaje.name }}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Estado: {{ personaje.status }}</li>
            <li class="list-group-item">Origen: {{ personaje.origin.name }}</li>
            <li class="list-group-item">Especie: {{ personaje.species }}</li>
          </ul>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center mt-3" id="paginator">
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="changePage(page - 1)"
            >Previous</a
          >
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="changePage(page + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>

    <button @click="limpiar()">Limpiar</button>

    <div>
      <input v-model="search" type="text" />
      <button type="button" class="btn btn-dark" v-on:click="searchByName()">
        Buscar Nombre
      </button>
    </div>

    <div class="mt-2">
      <input v-model="id" type="text" />
      <button type="button" class="btn btn-dark" v-on:click="searchById()">
        Buscar Id
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Personajes",
  data() {
    return {
      personajes: [],
      users: [],
      page: 1,
      pages: 1,
      search: "",
      id: null,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async loadCharacters() {
      const params = {
        page: this.page,
        name: this.search,
        id: this.id,
      };

      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/",
        { params }
      );

      const { results } = response.data;
      this.personajes = results;
      this.pages = response.data.pages;
    },
    limpiar() {
      this.personajes = [];
    },
    searchByName() {
      this.page = 1;
      this.loadCharacters();
    },
    searchById() {
      if (this.id <= 0) {
        alert("EL ID TIENE QUE SER MAYOR A 0!");
      }
      this.page = 1;
      this.loadCharacters();
    },
    changePage(page) {
      this.page = page <= 0 || page > this.pages ? this.page : page;
      this.loadCharacters();
    },
    loadLocalStorage() {
      const isLogged = localStorage.getItem("logged");
      if (isLogged == 0 || !isLogged) {
        localStorage.setItem("logged", 0);
      }
      console.log(localStorage.logged);
    },
  },
  created() {
    this.loadCharacters();
  },
};
</script>