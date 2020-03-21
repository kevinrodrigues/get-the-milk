<template>
  <div class="c-addItemWrapper">
    <navigation />

    <div class="c-addItem">
      <input v-model.trim="itemEntered" @keyup.enter.prevent="saveItem" type="text" placeholder="Add item...">
    </div>

    <div class="c-addItem-container">
      <product-item
        v-for="item in items"
        :key="item.key"
        :item="item"
        @change="handleItemChange"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Navigation from '~/components/Navigation.vue';
import ProductItem from '~/components/ProductItem.vue';

export default {
  components: {
    Navigation,
    ProductItem
  },

  data: () => ({
    itemEntered: ''
  }),

  mounted () {
    this.getPreviousItems();
  },

  computed: {
    ...mapState('ItemList', [
      'items'
    ])
  },

  methods: {
    ...mapActions('ItemList', [
      'addItems',
      'removeItems',
      'getPreviousItems'
    ]),

    saveItem () {
      if (!this.items) {
        return false;
      }

      this.addItems({
        id: Math.random().toString(36).substr(2, 5),
        content: this.itemEntered,
        quantity: 1,
        purchasedAt: null,
        createdAt: Date.now(),
        deletedAt: null
      });

      this.itemEntered = '';
    },

    handleItemChange (item) {
      const itemToRemove = this.items.findIndex(el => el.id === item.id);
      this.removeItems(itemToRemove);
    }
  }
};
</script>
