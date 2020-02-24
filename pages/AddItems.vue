<template>
  <div class="c-addItemWrapper">
    <list-collection />

    <div class="c-addItem">
      <input v-model="item" type="text" placeholder="Add item...">
      <button v-show="item" @click="clearSelection" type="button" class="delete is-vertically-aligned" />
    </div>

    <div class="c-addItem-container">
      Some items
    </div>
  </div>
</template>

<script>
import ListCollection from '~/components/ListCollection.vue';

export default {
  components: {
    ListCollection
  },

  data: () => ({
    item: null
  }),

  computed: {

  },

  methods: {
    clearSelection () {
      this.item = '';
    }
  }
};
</script>
