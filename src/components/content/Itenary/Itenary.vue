<template>
  <section class="itenary flex-col justify-center">
    <div class="header-text">
      <h3 class="text-primary font-semibold">
        <font-awesome-icon class="mr-2" icon="route" :style="{ color: '#a3c6c9' }" />
        Itienary
      <upload-btn @selected="setFile" />
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
      margin-left: -35rem;
      font-size: 20px;
    }
  }
</style>
<script>
import YAML from 'yaml';
import { parseToText } from '@/utils/helpers';

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
    UploadBtn: () => import('@/components/reusables/UploadBtn/UploadBtn.vue'),
  },
  data() {
    return {
      daysData: [],
    };
  },
  computed: {
    itenaries() {
      return this.daysData.map((day) => ({ images: staticImages, ...day }));
    },
  },
  methods: {
    async setFile(file) {
      const result = await parseToText(file);
      const jsonResult = await YAML.parse(result);
      this.daysData = jsonResult.days;
    },
  },
  mounted() {
  },
};
</script>
