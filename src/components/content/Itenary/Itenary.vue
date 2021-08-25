<template>
  <section class="itenary flex-col justify-center">
    <div class="header-text">
      <h3 class="text-primary font-semibold">
        <font-awesome-icon class="mr-2" icon="route" :style="{ color: '#a3c6c9' }" />
        Itienary
      </h3>
    </div>
    <div class="flex items-center flex-col">
      <div class="items" v-for="({ images, title, description }, index) in itenaries" :key="index">
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

<style lang="scss" scoped>
  .itenary {
    .header-text {
      margin-bottom: 10px;
      margin-left: -45rem;
      font-size: 20px;
    }
  }
</style>
<script>
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
    Item: () => import('@/components/reusables/Item/Item.vue'),
  },
  computed: {
    itenaries() {
      return ItenaryData.days.map((day) => ({ images: staticImages, ...day }));
    },
  },
};
</script>
