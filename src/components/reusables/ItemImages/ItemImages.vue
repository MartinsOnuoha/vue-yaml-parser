<template>
  <div class="item__images relative">
    <img
      v-for="({ src }, i) in images"
      :key="i"
      v-show="current === i"
      class="rounded-md image"
      :src="src"
      alt="image-preview"
    >
    <div class="item__images-controls justify-between flex absolute">
      <div @click="prev" class="control"> &#x3c; </div>
      <div @click="next" class="control"> &#x3e; </div>
    </div>
  </div>
</template>

<style lang="scss" src="./_itemImages.scss" scoped></style>

<script>
export default {
  name: 'ItemImages',
  props: {
    images: {
      type: Array,
      default: () => [
        { src: 'https://picsum.photos/seed/picsum/450/300' },
      ],
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    next() {
      if (this.current !== this.images.length - 1) {
        this.current += 1;
      }
    },
    prev() {
      if (this.current !== 0) {
        this.current -= 1;
      }
    },
  },
};
</script>
