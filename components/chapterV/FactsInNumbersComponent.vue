<template>
  <div class="fact-numbers-component">
    <div
      class="fact-numbers-component__title fact-numbers-component__title_first h4-heading"
    >
      {{ firstTitle }}
    </div>
    <div class="fact-numbers-component__number numbers">{{ number }}</div>
    <div class="fact-numbers-component__title h4-heading">
      {{ secondTitle }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FactsInNumbersComponent',
  props: {
    firstTitle: { type: String, default: '' },
    number: { type: [String, Number], default: '' },
    secondTitle: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.fact-numbers-component {
  width: 33%;
  @apply text-center;

  @media (max-width: 1200px) {
    border-bottom: 4px solid #34323c;
    @apply w-full;

    &:last-child {
      border-bottom: none;
    }
  }

  &__title {
    padding: 0 62px;
    @apply flex justify-center items-center text-custom-white mb-6;

    &_first {
      min-height: 131px;
      @apply mb-0;
    }
  }

  &__number {
    @apply mb-8;

    @media (max-width: 360px) {
      font-size: 66px;
    }
  }
}
</style>
