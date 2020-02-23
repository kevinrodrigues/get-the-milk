<template>
  <div class="container">
    <div>
      <h1>
        Get the milk!
      </h1>
      <MilkBottle />
      <button class="button is-tertiary">
        Create a shopping list
      </button>
    </div>
  </div>
</template>

<script>
import MilkBottle from '~/components/MilkBottle.vue'

export default {
  components: {
    MilkBottle
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  height: calc(100vh + 53px);
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

h1 {
  margin: 30px 0;
}

button {
  margin: 30px auto;
}

@media only screen and (min-width: 768px) {
  h1 {
    font-size: 3em;
  }
}
</style>
