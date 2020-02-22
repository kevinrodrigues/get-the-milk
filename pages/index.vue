<template>
  <div class="container">
    <div>
      <h1>
        Get the milk!
      </h1>
      <MilkBottle />
      <button class="button is-tertiary">
        Create list
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
