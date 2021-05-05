<template>
  <div class="wrapper">
    <div class="flex flex-col items-center">
      <div class="-mb-4">
        <slot name="img"></slot>
      </div>
      <div class="h1-heading text-center">
        <slot name="title"></slot>
      </div>
      <div class="body max-w-3xl text-center">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImgAndText',
}
</script>

<style lang="scss" scoped>
.wrapper {
  @apply flex flex-col items-center;
  padding-top: 80px;
  padding-bottom: 128px;
  @media (max-width: 767px) {
    padding-top: 36px;
    padding-bottom: 24px;
    @apply px-6;
  }
}
</style>
