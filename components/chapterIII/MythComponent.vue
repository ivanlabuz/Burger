<template>
  <div class="myth-component">
    <h4 class="myth-component__label h4-heading">
      {{ 'Myth #' + mythNumber }}
    </h4>
    <h2 class="myth-component__title h1-heading">
      <slot name="title"></slot>
    </h2>
    <h4 :class="'myth-component__label  h4-heading ' + actuallyClass">
      ACTUALLY...
    </h4>
    <h2 class="h2-heading mb-8">
      <slot name="subtitle"></slot>
    </h2>
    <p class="lead-paragraph mb-10">
      <slot name="text"></slot>
    </p>
    <div class="myth-component__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MythComponent',
  props: {
    mythNumber: { type: Number, default: 0 },
    actuallyClass: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.myth-component {
  max-width: 814px;
  @apply text-center pb-12 pt-20 md:py-28 flex flex-col items-center;

  &__label {
    @apply text-custom-pink mb-6;
  }

  &__title {
    @apply mb-20;
  }

  &__content {
    max-width: 600px;
    @apply mb-2;
  }

  &__link {
    @apply text-custom-green underline font-bold;
  }

  &__smile {
    @apply relative z-0;

    &:after {
      content: '';
      top: 0;
      background-image: url('~/assets/img/chapterIII/myth2.png');
      background-size: 100%;
      left: 25px;
      width: 142px;
      height: 142px;
      @apply absolute;

      @media (max-width: 768px) {
        width: 103px;
        height: 103px;
        background-image: url('~/assets/img/chapterIII/myth3.png');
      }

      @media (max-width: 500px) {
        left: 10px;
      }
    }
  }
}
</style>
