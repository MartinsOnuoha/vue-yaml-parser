<template>
  <span class="upload-btn">
    <input @change="selected" accept=".yaml,.md" name="upload" id="upload" type="file" class="text-sm cursor-pointer invisible upload inline-block" />
    <label for="upload" class="w-[150px] p-3 bg-primary text-white cursor-pointer hover:opacity-50 rounded-md">{{ label }}</label>
  </span>
</template>

<style lang="scss" scoped>
  .upload-btn {
    input {
      width: 0;
    }
    label {
      font-weight: normal;
      font-size: 14px;
      margin-left: 5px;
    }
  }
</style>
<script>
export default {
  name: 'upload-btn',
  props: {
    label: {
      type: String,
      default: 'Upload .Yaml File 📁',
    },
  },
  methods: {
    selected(e) {
      const [file] = e.target.files;
      this.$emit('selected', file);
    },
  },
};
</script>
