<template>
  <client-only>
    <marquee-text :repeat="50">
      <span :class="'h1-heading marquee-span ' + firstClass">{{
        contentValue
      }}</span>
      <span :class="'h1-heading marquee-span ' + secondClass">{{
        contentValue
      }}</span>
    </marquee-text>
  </client-only>
</template>

<script>
export default {
  name: 'TickerComponent',
  props: {
    firstClass: { type: String, default: 'text-custom-pink' },
    secondClass: { type: String, default: 'text-custom-blue' },
    contentValue: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.marquee-wrapper {
  @apply w-full;
}

.marquee-text-content {
  @apply w-max;
}

.marquee-text-wrap {
  @apply mb-5;
}

.marquee-span {
  @apply pr-8;
}

.marquee-yellow {
  text-shadow: 5px 5px #000;
  @apply text-custom-yellow;
}
</style>
