<template>
  <div class="flex">
    <item-sideline></item-sideline>
    <article class="item flex h-full mt-8">
      <ItemImages :images="images" />
      <div class="item__details flex flex-col ml-7 h-full">
        <div class="caption flex text-left">
          <h6 class="text-primary font-bold">Day {{ dayNumber }}</h6>
          <div class="dot h-5 w-5 mr-2 ml-2 bg-gray-200"></div>
          <span v-if="title" class="" v-html="format(title, 37)"></span>
        </div>
        <div v-if="description" class="item__description text-sm text-left mt-4" v-html="format(description, 150)"></div>
        <div class="align-bottom text-left text-sm mt-7 underline">
          <a href="#" class="text-secondary font-bold">Show more</a>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="scss" src="./_item.scss" scoped></style>

<script>
import marked from 'marked';
import ItemImages from '@/components/reusables/ItemImages/ItemImages.vue';
import { truncate } from '@/utils/helpers';
import ItemSideline from '@/components/reusables/ItemSideline/ItemSideline.vue';

export default {
  name: 'Item',
  props: {
    dayNumber: {
      type: Number,
      default: 1,
    },
    images: {
      type: Array,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  components: {
    ItemImages,
    ItemSideline,
  },
  methods: {
    format(text, len) {
      return marked(truncate(text, len));
    },
  },
};
</script>
