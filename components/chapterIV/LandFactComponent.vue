<template>
  <div class="land-fact-component">
    <h2 :class="`land-fact-component__title h1-heading ` + titleClass">
      <slot name="title"></slot>
    </h2>
    <div class="flex-container h4-heading">
      <slot name="flex-container"></slot>
    </div>
    <div class="land-fact-component__slogan">
      <slot name="slogan"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandFactComponent',
  props: {
    srcImage: { type: String, default: '' },
    titleClass: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.land-fact-component {
  max-width: 100%;
  font-size: 40px;
  @apply flex flex-col items-center text-custom-charcoal text-center py-16 md:py-28 xl:pb-44 px-6;

  @media (max-width: 768px) {
    @apply text-sm;
  }

  &__title {
    @apply mb-2.5 xl:mb-16;
  }

  .flex-container {
    @apply flex flex-col items-start justify-between text-center mb-12 xl:flex-row;
    &__item {
      @apply flex justify-center py-8;
      max-width: 454px;
      width: 100%;
      & > div {
        @apply flex flex-col items-center text-center;
        & > span:not(:last-child) {
          @apply mb-2.5;
        }
      }
      .first-item,
      .last-item {
        width: 95%;
      }
      .second-item {
        @media (max-width: 767px) {
          width: 60%;
        }
      }
      @media (max-width: 1279px) {
        &:not(:last-child) {
          border-bottom: 4px solid #34323c;
        }
      }
    }
    @media (min-width: 1440px) {
      width: 86%;
      &_item {
        width: fit-content;
      }
      .second-item {
        max-width: 300px;
      }
    }
  }

  &__slogan {
    width: 80%;
    .wide-accent {
      font-family: Druk, serif;
      font-size: 120px;
      line-height: 96%;
      text-align: center;
      letter-spacing: 0.02em;
      text-shadow: 4px 4px 0 #32333d;
    }
    @media (max-width: 768px) {
      width: 100%;
      .wide-accent,
      .h1-heading {
        font-size: 56px;
      }
    }
  }

  &__link {
    font-family: Open Sans;
    text-decoration: underline;
    @apply text-custom-blue font-bold leading-normal;
  }
}
</style>
