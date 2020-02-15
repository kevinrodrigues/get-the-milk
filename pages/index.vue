<template>
  <div class="container">
    <div>
      <logo />
      <h1>
        get-the-milk
      </h1>
      <h2>
        Reminder list making app
      </h2>
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

<style>
html, body {
  height: 100%;
}

body {
  background-color: #254E70;
  color: #fff;
}

.milk-bottle {
  width: 100px;
  height: 100px;
}

.mask-rect {
  animation: fill 2s ease-in-out infinite;
}

@keyframes fill {
  0% { height: 0; }
  50% { height: 100%; }
  100% { height: 0; }
}
</style>
