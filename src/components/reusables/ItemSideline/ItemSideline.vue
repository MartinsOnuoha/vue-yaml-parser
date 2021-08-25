<template>
  <div class="side-line bg-accent w-[1px] absolute h-[25%] ml-[-40px]">
    <div class="side-line__circle absolute bg-accent">
      <div class="side-line__circle-inner"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .side-line {
    margin-left: -40px;
    margin-top: 7rem;
    &__circle {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      top: -9px;
      margin-left: -4px;
      display: flex;
      place-items: center;
      &-inner {
        height: 5px;
        width: 5px;
        border-radius: 50%;
        background-color: #fff;
        margin: 0 auto;
      }
    }
  }
</style>
<script>
export default {
  name: 'ItemSideline',
};
</script>
