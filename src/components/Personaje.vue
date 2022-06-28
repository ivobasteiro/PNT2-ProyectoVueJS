<template>
  <div class="card mt-3 mx-3" style="">
    <img :src="personaje.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ personaje.name }}</h5>
      <p class="card-text">Estado: {{ personaje.status }}</p>
      <p class="card-text">Especie: {{ personaje.species }}</p>
      <p class="card-text">Creado: {{ personaje.created }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personaje",
  props: {
    personaje: Object,
  },
};
</script>