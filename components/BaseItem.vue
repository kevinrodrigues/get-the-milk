<template>
  <div class="c-baseItem">
    <div class="c-baseItem--checkbox">
      <slot name="checkbox">
        <input
          :checked="!!item.purchasedAt"
          type="checkbox"
        >
      </slot>
    </div>

    <div class="c-baseItem--content">
      <slot name="content" />
      <slot name="quantity" />
    </div>

    <div class="c-baseItem--actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
