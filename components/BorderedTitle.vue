<template>
  <div :class="'bordered-content' + className">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BorderedTitle',
  props: {
    title: { type: String, default: `` },
    className: { type: String, default: `` },
  },
}
</script>

<style lang="scss" scoped>
.bordered-content {
  @apply border-8 py-0 md:pt-10 px-0 md:px-8 md:pb-8 text-center max-w-5xl mb-16;

  &_image {
    @apply flex flex-col lg:flex-row p-0 max-w-7xl;
  }

  &__img-wrapper {
    @media (min-width: 1023px) {
      min-width: 530px;
    }
    @apply w-full lg:w-3/4 flex justify-center p-4 items-center bg-custom-light-pink;
  }

  &__title {
    @apply px-4 lg:px-16 py-8 lg:py-10;
  }
}
</style>
