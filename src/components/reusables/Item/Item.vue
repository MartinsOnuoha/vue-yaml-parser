<template>
  <div class="item">
    {{ title }}
    {{ description }}
  </div>
</template>

<style lang="scss" src="./_item.scss"></style>

<script>
export default {
  name: 'Item',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
