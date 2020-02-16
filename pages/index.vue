<template>
  <div class="container">
    <div>
      <h1>
        A list making app
      </h1>
      <logo />
      <button class="button is-link">
        Get list making!
      </button>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
