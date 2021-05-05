<template>
  <div class="carousel-block">
    <client-only>
      <VueSlickCarousel v-bind="settings">
        <div
          v-for="item in carouselItems"
          :key="item.key"
          class="carousel-block__item"
        >
          <h5 class="carousel-block__title">{{ item.title }}</h5>
          <div class="carousel-block__text facts-cards">{{ item.text }}</div>
          <a :href="item.link" target="_blank" class="carousel-block__link"
            ><span>Explore</span>
            <span><img src="~/assets/img/link-arrow.svg" alt="" /></span
          ></a>
        </div>
      </VueSlickCarousel>
    </client-only>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'CarouselComponent',
  components: { VueSlickCarousel },
  props: {
    carouselItems: { type: Object, default: null },
    sliderOnDesktop: { type: Boolean, default: false },
  },
  data() {
    return {
      settings: {
        arrows: false,
        focusOnSelect: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 2990,
            settings: 'unslick',
          },
          {
            breakpoint: 1500,
            settings: this.sliderOnDesktop ? 'slick' : 'unslick',
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 3,
              variableWidth: true,
              centerMode: true,
              centerPadding: '0px',
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
$item-path: 'M274.914 23.6486L274.915 23.6508C276.369 26.6 277.651 31.7324 278.748 38.563C279.841 45.3771 280.743 53.83 281.455 63.3845C282.88 82.4926 283.548 105.98 283.497 129.52C283.446 153.061 282.676 176.646 281.225 195.95C280.5 205.603 279.605 214.179 278.546 221.142C277.485 228.118 276.265 233.431 274.904 236.585L274.902 236.59C273.522 239.881 270.578 243.169 266.653 245.984C262.734 248.794 257.87 251.109 252.703 252.471L252.702 252.472C243.651 254.876 228.264 256.681 209.222 257.87C190.192 259.059 167.547 259.631 144.001 259.579H143.999C120.453 259.631 97.8283 259.059 78.8087 257.87C59.7773 256.681 44.39 254.876 35.2977 252.471L35.2974 252.471C30.13 251.109 25.2874 248.795 21.3784 245.984C17.4635 243.169 14.5174 239.88 13.0956 236.585C11.7351 233.431 10.5151 228.118 9.45397 221.142C8.39487 214.179 7.49987 205.603 6.77455 195.95C5.32397 176.646 4.55372 153.061 4.50271 129.52C4.4517 105.98 5.11997 82.4926 6.54495 63.3845C7.25748 53.83 8.15873 45.3771 9.25242 38.563C10.3488 31.7324 11.6311 26.6 13.0849 23.6508L13.086 23.6486C16.2741 17.1001 24.7889 10.2643 35.2866 7.74413L35.2879 7.74383C55.1419 2.92412 98.844 0.582031 144 0.582031C189.155 0.582031 232.857 2.92407 252.711 7.74367C263.133 10.3166 271.727 17.1026 274.914 23.6486Z';
$item-path-hover: 'M270.394 28.7356C267.14 20.4797 258.436 12.0318 247.941 8.83189C228.092 2.87996 184.487 0 139.5 0C94.5127 0 50.9083 2.87996 31.0586 8.83189C20.4829 11.9679 11.8597 20.4797 8.60561 28.7356C-3.27169 58.4953 -2.45818 259.645 8.60561 291.324C11.5343 299.708 20.6456 307.836 31.0586 311.228C49.2813 317.18 92.5602 320.124 139.5 319.996C186.44 320.124 229.8 317.18 247.941 311.228C258.354 307.836 267.547 299.708 270.394 291.324C281.458 259.645 282.272 58.4953 270.394 28.7356Z';
.carousel-block {
  $root: &; // .carousel-block
  @apply w-full text-center;

  @media (max-width: 768px) {
    @apply pl-0;
  }

  &__title {
    @apply text-lg mb-1.5 font-light;
  }

  &__text {
    @apply mb-9;

    @media (max-width: 768px) {
      min-height: 120px;
    }
  }

  &__link {
    font-family: Druk, sans-serif;
    font-style: italic;
    width: 121px;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: normal;
    box-shadow: 3px 5px 0px #ab31ff;
    visibility: hidden;
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    @apply text-custom-purple px-4 py-2 bg-custom-white text-2xl flex items-center mx-auto;
    @media (max-width: 767px) {
      visibility: visible;
    }
  }

  &__item {
    max-width: 280px;
    min-height: 260px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    clip-path: path($item-path);
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    @apply pt-14 px-7 mx-1.5 sm:mx-3 pb-16 outline-none text-custom-white bg-custom-light-pink;
    @media (max-width: 767px) {
      clip-path: path($item-path-hover);

      #{$root}__link {
        visibility: visible;
      }
    }
    &:hover {
      clip-path: path($item-path-hover);
      transform: rotate(-3deg);
      min-height: 323px;
      #{$root}__link {
        visibility: visible;
        transition: visibility 0.5s;
      }
    }

    @media (max-width: 768px) {
      clip-path: path($item-path-hover);
      min-height: 323px;
      #{$root}__link {
        visibility: visible;
        transition: visibility 0.5s;
      }

      &:hover {
        transform: rotate(0);
      }
    }
  }
}

.slick-track.slick-center,
.regular.slider {
  @apply flex justify-center;
}
</style>
