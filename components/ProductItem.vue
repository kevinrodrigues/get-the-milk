<template>
  <base-item :item="item">
    <template #content>
      {{ item.content }}
    </template>

    <template #quantity>
      {{ item.quantity }}
    </template>

    <template #actions>
      <button @click.prevent="deleteItem">Delete</button>
      <button>Increase</button>
    </template>
  </base-item>
</template>

<script>
import BaseItem from '~/components/BaseItem.vue';

export default {
  name: 'ProductItem',
  components: {
    BaseItem
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    deleteItem () {
      this.emitItemChanged({
        deletedAt: Date.now()
      });
    },

    emitItemChanged (item) {
      this.$emit('change', {
        ...this.item,
        ...item
      });
    }
  }
};
</script>
