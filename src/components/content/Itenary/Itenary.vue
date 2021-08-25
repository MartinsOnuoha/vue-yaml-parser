<template>
  <section>
    <h5 class="text-primary">Itienary</h5>
    <div class="flex items-center flex-col">
      <div class="" v-for="({ images, title, description }, index) in itenaries" :key="index">
        <item
          :dayNumber="index + 1"
          :title="title"
          :description="description"
          :images="images"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .itenary {
    display: flex;
    justify-content: center;
  }
</style>
<script>
import Item from '@/components/reusables/Item/Item.vue';
import ItenaryData from '@/assets/data.yaml';

const staticImages = [
  { src: 'https://picsum.photos/seed/picsum/450/300' },
  { src: 'https://picsum.photos/id/1050/450/300' },
  { src: 'https://picsum.photos/id/1037/450/300' },
  { src: 'https://picsum.photos/id/1036/450/300' },
];

export default {
  name: 'Itenary',
  components: {
    Item,
  },
  data() {
    return {
      itenaries: ItenaryData.days.map((day) => ({ images: staticImages, ...day })),
    };
  },
  mounted() {
    console.log(this.itenaries);
  },
};
</script>
