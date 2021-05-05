<template>
  <div class="marquee-and-carousel">
    <TickerComponent
      :first-class="firstClassForTicker"
      :second-class="secondClassForTicker"
      :content-value="dataForTicker"
    />
    <div class="marquee-and-carousel__label text-cursor">
      Check these links out
    </div>
    <CarouselComponent
      :carousel-items="dataForCarousel"
      :slider-on-desktop="sliderForCarousel"
    />
  </div>
</template>

<script>
import TickerComponent from '~/components/TickerComponent'
import CarouselComponent from '~/components/CarouselComponent'

export default {
  name: 'MarqueeAndCarouselComponent',
  components: {
    TickerComponent,
    CarouselComponent,
  },
  props: {
    dataForTicker: { type: String, default: '' },
    firstClassForTicker: { type: String, default: '' },
    secondClassForTicker: { type: String, default: '' },
    dataForCarousel: { type: Object, default: null },
    sliderForCarousel: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
.marquee-and-carousel {
  @apply flex flex-col items-center w-full pt-24 md:pt-28 bg-custom-white relative;

  &:before {
    content: '';
    position: absolute;
    background: url('~/assets/img/carousel-block-decoration.svg') no-repeat;
    width: 67px;
    height: 67px;
    top: 30%;
    left: 0;

    @media (min-width: 768px) {
      display: none;
    }
  }

  &__label {
    @apply mb-8;
    font-family: Druk, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #34323c;
    @media (max-width: 767px) {
      font-size: 28px;
      letter-spacing: 0.05em;
    }
  }
}
</style>
