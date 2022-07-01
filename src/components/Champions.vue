<template>
  <h1 class="mt-3 text-light">Champions</h1>
  
  <div class="input-group justify-content-center my-3">
    <h5 class="text-light my-auto mx-3">Add New Champion</h5>
    <button type="button" class="btn btn-success" v-on:click="addChampion()">
      <i class="bi bi-plus"></i>
    </button>
  </div>
  <div class="row bg-secondary">
    <div class="col-3" :key="champion.id" v-for="champion in champions">
      <Champion :champion="champion" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Champion from "./Champion.vue";
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  name: "Users",
  data() {
    return {
      champions: []
    };
  },
  components: {
    Champion
  },
  methods: {
    addChampion(){
      this.$router.push('/addchampion');
    },
    async getChampions() {
      const response = await axios.get(
        "https://62b241bcc7e53744afca0e5c.mockapi.io/champions"
      );
      this.champions = response.data;
    },
  },
  mounted() {
    this.getChampions();
  },
};
</script>