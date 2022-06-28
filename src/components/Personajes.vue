<template>
  <div class="input-group justify-content-center my-3">
    <div class="form-outline">
      <input
        v-model="search"
        type="text"
        placeholder="Search"
        id="form1"
        class="form-control"
      />
    </div>
    <button type="button" class="btn btn-dark" v-on:click="searchByName()">
      <i class="bi bi-search"></i>
    </button>
  </div>

  <div class="row bg-secondary">
    <div class="col-3" :key="personaje.id" v-for="personaje in personajes">
      <Personaje :personaje="personaje" />
    </div>
  </div>

  <div class="justify-content-center">
      <ul class="pagination mt-3 justify-content-center" id="paginator">
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="changePage(page - 1)">
            Previous
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="changePage(page + 1)">
            Next
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";
import Personaje from "./Personaje.vue";
import "bootstrap-icons/font/bootstrap-icons.css";

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
  components: {
    Personaje,
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
    searchByName() {
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