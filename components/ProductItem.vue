<template>
  <base-item :item="item">
    <template #content>
      <div
        v-if="!isEditing"
        @dblclick="onEdit"
      >
        {{ item.content }}
      </div>

      <input
        ref="editItem"
        v-if="isEditing"
        v-model.trim="itemReference"
        @keyup.enter="saveItem"
        @blur="saveItem"
        type="text"
      >
    </template>

    <template #quantity>
      <!--{{ item.quantity }}-->
    </template>

    <template #actions>
      <button @click.prevent="deleteItem">Delete</button>
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

  data () {
    return {
      isEditing: false,
      itemReference: ''
    };
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
    },

    async onEdit () {
      this.isEditing = true;
      this.itemReference = this.item.content;

      await this.$nextTick();

      this.$refs.editItem.focus();
    },

    saveItem () {
      if (this.itemReference) {
        /* eslint-disable */
        this.emitItemChanged({
          content: this.itemReference
        });
      }

      this.stopItemEdit();
    },

    stopItemEdit () {
      this.isEditing = false;
      this.itemReference = '';
    }
  }
};
</script>
