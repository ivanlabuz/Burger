<template>
  <div :class="'title-and-text' + className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TitleAndText',
  props: {
    className: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.title-and-text {
  @apply text-center mb-14;

  @media (min-width: 767px) {
    max-width: 814px;
  }
}
</style>
