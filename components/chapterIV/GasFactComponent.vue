<template>
  <div class="gas-fact-component">
    <h2 class="gas-fact-component__title h1-heading">GAS FACT</h2>
    <p class="gas-fact-component__text text-cursor body">
      <a
        class="gas-fact-component__link"
        href="https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_chapter8.pdf"
        target="_blank"
        >The greenhouse gas footprint of animal agriculture</a
      >
      rivals that of every
    </p>
    <TickerComponent
      first-class="marquee-yellow"
      second-class="marquee-yellow"
      content-value="Car Rocketship Airplane Ship BUS truck"
    />
    <div class="gas-fact-component__combined">
      <div class="gas-fact-component__line"></div>
      <h2
        class="gas-fact-component__title gas-fact-component__title_combined h1-heading"
      >
        Combined
      </h2>
      <div class="gas-fact-component__line"></div>
    </div>
    <p class="gas-fact-component__text mb-20 text-cursor mx-2 body">
      Wrap your brain around that for a second!
    </p>
    <img class="px-2" src="~/assets/img/chapterIV/gasfactimage.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'GasFactComponent',
}
</script>

<style lang="scss" scoped>
.gas-fact-component {
  @apply max-w-full flex flex-col items-center py-16 md:py-28 text-center;

  &__title {
    padding-left: 5%;
    padding-right: 5%;
    @apply mb-10 text-custom-yellow;

    &_combined {
      padding-left: 5%;
      padding-right: 5%;
      @apply mb-0;
    }
  }

  &__text {
    max-width: 814px;
    @apply mb-8;
  }

  &__combined {
    @apply flex justify-center items-center mb-9 md:mb-24;
  }

  &__line {
    min-width: 22%;
    height: 1px;
    @apply bg-custom-yellow;
  }

  &__link {
    @apply text-custom-yellow underline font-bold;
  }
}
</style>
