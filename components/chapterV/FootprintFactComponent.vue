<template>
  <div class="footprint-fact-component">
    <div class="footprint-fact-component__text-wrapper">
      <h2 class="footprint-fact-component__title h2-heading">FOOTPRINT FACT</h2>
      <p class="footprint-fact-component__text body">
        What if just once a week, you and your family ate an Impossible Burger
        instead of a cow burger. If you did this for a year, you would
        <a
          class="footprint-fact-component__link"
          href="https://impossiblefoods.com/ecological-footprint-calculator"
          target="_blank"
          >reduce your environmental footprint</a
        >
        by
      </p>
    </div>
    <div
      class="footprint-fact-component__burgers flex items-end body text-white font-normal pb-16 md:pb-20 md:px-20 text-center"
    >
      This is how much water you'd save if you and your family ate an impossible
      Burger Instead of a cow burger once a week for a year.
    </div>
    <div class="footprint-fact-component__facts">
      <FactsInNumbersComponent number="5,798" second-title="gallons of water" />
      <FactsInNumbersComponent
        first-title="A land area big enough to support"
        number="104"
        second-title="trees"
      />
      <FactsInNumbersComponent
        first-title="the greenhouse gas emissions equivalent of traveling"
        number="5,954"
        second-title="passenger-miles in a plane"
      />
    </div>
  </div>
</template>

<script>
import FactsInNumbersComponent from '~/components/chapterV/FactsInNumbersComponent'
export default {
  name: 'FootprintFactComponent',
  components: {
    FactsInNumbersComponent,
  },
}
</script>

<style lang="scss" scoped>
.footprint-fact-component {
  @apply flex flex-wrap justify-around pt-12 pb-14 lg:pt-24 px-24 lg:pb-40;

  @media (max-width: 1440px) {
    @apply justify-between;
  }

  @media (max-width: 1200px) {
    @apply mb-0 flex-col items-center pb-0;
  }

  @media (max-width: 600px) {
    @apply items-start px-0;
  }

  &__title {
    @apply text-custom-yellow pt-28 mb-10;

    @media (max-width: 1200px) {
      @apply pt-0;
    }
  }

  &__text {
    @apply text-custom-white;
  }

  &__burgers {
    clip-path: path(
      'M63.4878 16.8008C45.2474 23.0853 26.5829 39.896 19.513 60.1632C6.36292 98.498 0 182.709 0 269.591C0 356.472 6.36292 440.683 19.513 479.018C26.4415 499.442 45.2474 516.096 63.4878 522.38C129.238 545.318 573.653 543.747 643.645 522.38C662.168 516.724 680.125 499.128 687.62 479.018C700.77 443.825 707.274 360.243 706.991 269.591C707.274 178.938 700.77 95.1987 687.62 60.1632C680.125 40.0531 662.168 22.2997 643.645 16.8008C573.653 -4.5661 129.238 -6.13721 63.4878 16.8008Z'
    );
    background-size: auto 72% !important;
    background-position-y: top !important;
    width: 707px;
    background: url('~/assets/img/chapterV/footprint.png') no-repeat center
      #fc8cf3;
    height: 538px;
    @apply bg-contain mb-28;

    @media (max-width: 1200px) {
      order: 1;
      clip-path: none;
      @apply bg-custom-purple mb-0 max-w-full;
    }
  }

  &__facts {
    @apply flex w-full justify-between;

    @media (max-width: 1200px) {
      @apply flex-col;
    }
  }

  &__text-wrapper {
    max-width: 300px;

    @media (max-width: 1200px) {
      @apply max-w-full text-center;
    }
  }

  &__link {
    @apply text-custom-yellow underline font-bold;
  }
}
</style>
