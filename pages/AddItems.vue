<template>
  <div class="c-addItemWrapper">
    <navigation />

    <div class="c-addItem">
      <input v-model.trim="itemEntered" @keyup.enter.prevent="saveItem" type="text" placeholder="Add item...">
    </div>

    <div class="c-addItem-container">
      <product-item
        v-for="item in itemAdded"
        :key="item.key"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue';
import ProductItem from '~/components/ProductItem.vue';

export default {
  components: {
    Navigation,
    ProductItem
  },

  data: () => ({
    itemEntered: '',
    itemAdded: []
  }),

  methods: {
    saveItem () {
      if (!this.itemEntered) {
        return false;
      }

      this.itemAdded.push({
        id: Math.random().toString(36).substr(2, 5),
        content: this.itemEntered,
        quantity: 1,
        purchasedAt: null,
        createdAt: Date.now(),
        deletedAt: null
      });

      this.itemEntered = '';
    }
  }
};
</script>
