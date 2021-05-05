<template>
  <div class="debate-component">
    <h2 class="debate-component__title text-custom-charcoal h1-heading">
      <span class="text-custom-white">“</span>It’s still up for debate<span
        class="text-custom-white"
        >”</span
      >
    </h2>
    <p
      class="debate-component__text debate-component__text_actually text-custom-charcoal h2-heading"
    >
      Nope!
      <span class="wide-accent text-custom-yellow _actually"
        >100% of people who pay attention to climate change</span
      >
      agree that humans are causing global warming.
    </p>
  </div>
</template>

<script>
export default {
  name: 'StillUpForDebateComponent',
}
</script>

<style lang="scss" scoped>
.debate-component {
  @apply pt-44 pb-20 md:pt-64 md:pb-32 max-w-5xl text-center;

  &__title {
    @apply relative mb-24  z-0;

    &:before {
      content: 'Myth #1';
      top: -113px;
      background: url('~/assets/img/chapterIII/mith1.png') no-repeat;
      left: -18px;
      width: 227px;
      height: 182px;
      z-index: -1;
      transform: rotate(-8deg);
      @apply absolute bg-contain text-4xl flex items-center justify-center text-custom-white leading-tight;

      @media (max-width: 768px) {
        top: -91px;
        left: -41px;
        width: 165px;
        height: 132px;
      }
    }
  }

  &__text {
    @apply mb-10;
    .wide-accent {
      font-family: Druk, sans-serif;
      font-size: 80px;
      line-height: 108%;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    &_actually {
      @apply relative z-0;

      &:before {
        content: 'Actually...';
        top: -93px;
        background: url('~/assets/img/chapterIII/actually.png') no-repeat;
        right: -120px;
        width: 227px;
        z-index: -1;
        background-size: 100%;
        transform: rotate(12deg);
        height: 182px;
        @apply absolute bg-contain text-4xl flex items-center justify-center text-custom-white leading-tight;

        @media (max-width: 768px) {
          top: -91px;
          right: -41px;
          width: 165px;
          height: 132px;
        }
      }
    }
  }
}
.text-shadow {
  text-shadow: 4px 4px 0px #34323c;
}
</style>
