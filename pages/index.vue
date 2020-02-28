<template>
  <div class="container">
    <div>
      <h1>Get the milk!</h1>
      <MilkBottle />
      <button type="button" class="button is-tertiary">Sign up for free!</button>
      <p>or</p>
      <router-link to="/additems" class="button is-primary">
        Create a list!
      </router-link>
    </div>
  </div>
</template>

<script>
import MilkBottle from '~/components/MilkBottle.vue';

export default {
  components: {
    MilkBottle
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  height: calc(100vh + 53px);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  margin: 30px 0;
}

.button {
  font-family: 'Pacifico', sans-serif;
  margin: 30px auto;
}

@media only screen and (min-width: 768px) {
  h1 {
    font-size: 3em;
  }
}
</style>
