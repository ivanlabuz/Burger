<template>
  <div
    class="bg-custom-light-pink pb-28 lg:pb-32 relative flex items-center flex-col"
  >
    <div class="mt-12 lg:mt-24 mb-10 text-custom-charcoal h3-heading">
      NEXT CHAPTER
    </div>
    <NuxtLink
      :to="{ name: address }"
      :class="'chapter' + ' ' + background"
      class="lg:block hidden height-for-block"
    >
      <div
        class="h-full relative"
        @mouseover="playVideo()"
        @mouseout="stopVideo()"
      >
        <h4 class="chapter__chapter-name absolute w-full z-20">
          <slot name="chapter-name"></slot>
        </h4>
        <div class="media-wrapper flex md:px-12 flex-row">
          <img
            class="chapter__title-img w-1/2 h-full mt-12"
            :src="imgSrc"
            alt=""
          />
          <div class="chapter__video z-10 w-1/2 relative mt-16 md:ml-auto">
            <video
              ref="videoPlayer"
              preload="auto"
              class="h-full w-full"
              autoplay
              muted
              playsInline
              loop
              :src="require(`~/assets/video/${videoSrc}`)"
            ></video>
            <img
              class="absolute height-img top-0 right-0 w-full z-10 object-contain"
              :src="gradient"
              alt=""
            />
          </div>
        </div>
        <div class="chapter__text z-20">
          <slot name="title-and-text"></slot>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink :to="{ name: address }" class="block lg:hidden mx-2">
      <img
        width="343"
        :src="require(`~/assets/img/main-page/${address}.png`)"
        alt="chapter"
      />
    </NuxtLink>
    <NuxtLink
      :to="{ name: address }"
      class="absolute w-full flex justify-center chapter__button"
    >
      <div
        :class="`${background === 'bg-custom-yellow' ? '' : 'button-yellow'}`"
        class="explore-button"
      >
        Explore<ArrowInButton class="ml-4" />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import ArrowInButton from '~/components/icons/ArrowInButton'
export default {
  name: 'LastPartOfChapter',
  components: {
    ArrowInButton,
  },
  props: {
    background: { type: String, default: '' },
    address: { type: String, default: '' },
    imgSrc: { type: String, default: '' },
    gradient: { type: String, default: '' },
    videoSrc: { type: String, default: '' },
  },
  mounted() {
    this.$refs.videoPlayer.pause()
  },
  methods: {
    playVideo() {
      if (this.$refs.videoPlayer) {
        this.$refs.videoPlayer.play()
      }
    },
    stopVideo() {
      if (this.$refs.videoPlayer) {
        this.$refs.videoPlayer.pause()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chapter {
  max-width: 892px;
  max-height: 492px;
  width: 100%;
  clip-path: path(
    'M79.2801 17.8122C56.2152 24.5475 32.6139 42.5646 23.6741 64.2861C7.04589 105.372 0 157.633 0 250.749C0 343.865 7.04589 386.628 23.6741 427.714C32.4351 449.604 56.2152 467.453 79.2801 474.188C162.421 498.772 724.381 497.088 812.886 474.188C836.309 468.126 859.016 449.267 868.492 427.714C885.12 389.996 892.345 347.906 891.987 250.749C892.345 153.592 885.12 101.836 868.492 64.2861C859.016 42.733 836.309 23.7056 812.886 17.8122C724.381 -5.08798 162.421 -6.77179 79.2801 17.8122Z'
  );

  &__chapter-name {
    @apply text-center mt-7 mb-7;
    font-family: Druk Wide, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  &__video {
    @apply outline-none mb-3 w-1/2;
    max-height: 413px;

    video {
      height: 86% !important;
    }
  }
  &__text {
    font-family: Druk, sans-serif;
    margin: 14px 0 60px;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 108%;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    position: absolute;
    width: 100%;
    bottom: 0px;
  }
  &__button {
    bottom: 100px;
    @media (max-width: 1023px) {
      bottom: 85px;
    }
  }
}
.height-img {
  height: 86% !important;
}
.explore-button {
  align-items: center;
  line-height: 100%;
  justify-content: center;
  display: flex;
  border-radius: 60px;
  text-align: center;
  color: white;
  background: #ab31ff;
  width: 168px;
  height: 60px;
  font-family: Druk, sans-serif;
  font-style: italic;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 26px;
  box-shadow: 4px 4px #34323c;
}
.media-wrapper {
  margin: auto;
}
.button-yellow {
  background: #ffec00;
  color: #34323c;
}
.height-for-block {
  height: 492px;
}
</style>
