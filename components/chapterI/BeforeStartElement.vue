<template>
  <div
    class="max-w-xs md:max-w-md mb-10 md:mb-18 flex flex-col justify-between items-center"
  >
    <div
      class="title text-cursor text-custom-charcoal mt-3 mb-4 md:mt-4 md:mb-3"
    >
      <slot name="title"></slot>
    </div>
    <div class="body text-center text-cursor md:mb-auto text-custom-charcoal">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeforStartElement',
}
</script>

<style lang="scss" scoped>
.title {
  font-family: Druk, sans-serif;
  font-size: 80px;
  line-height: 108%;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  @media (max-width: 767px) {
    font-size: 56px;
    line-height: 96%;
  }
}
</style>
