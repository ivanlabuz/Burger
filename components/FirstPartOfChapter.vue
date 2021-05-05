<template>
  <div class="chapter">
    <h4 :class="'chapter__label h4-heading ' + chapterClass">
      CHAPTER {{ chapterNumber }}
    </h4>
    <div class="chapter__video-wrapper">
      <img class="chapter__title-img" :src="imgSrc" alt="" />

      <div class="chapter__video relative">
        <video
          ref="videoPlayer"
          preload="auto"
          autoplay
          playsInline
          loop
          :src="require(`~/assets/video/${videoSrc}`)"
        ></video>
        <img
          class="absolute h-full w-full top-0 left-0"
          :src="gradient"
          alt=""
        />
      </div>
    </div>
    <TitleAndText>
      <slot name="title-and-text"></slot>
    </TitleAndText>
    <BorderedTitle class="background-border" :class="borderClass">
      <slot name="bordered-content"></slot>
    </BorderedTitle>
  </div>
</template>

<script>
export default {
  name: 'FirstPartOfChapter',
  props: {
    chapterNumber: { type: String, default: '' },
    chapterClass: { type: String, default: '' },
    imgSrc: { type: String, default: '' },
    videoSrc: { type: String, default: '' },
    gradient: { type: String, default: '' },
    borderClass: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.chapter {
  max-width: 1178px;
  @apply flex flex-col items-center md:flex-row md:flex-wrap md:justify-center;

  &__label {
    font-family: Druk Wide, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    @apply md:absolute z-0 md:z-50 md:left-1/2 md:transform;

    @media (min-width: 768px) {
      top: 42px;
      transform: translateX(-50%);
    }
  }

  &__title-img {
    @apply w-full;
    z-index: 1;

    @media (min-width: 768px) {
      width: 50%;
    }

    @media (max-width: 768px) {
      position: absolute;
      top: -12%;
    }
  }

  &__video-wrapper {
    @apply relative flex flex-col;

    @media (min-width: 767px) {
      flex-direction: row;
    }
  }

  &__video {
    @apply outline-none mb-3 w-full;
    @media (min-width: 768px) {
      width: 50%;
    }

    @media (max-width: 768px) {
      margin-top: 40%;
      clip-path: polygon(0% 5%, 100% 5%, 100% 96%, 5% 95%);
    }
  }
}
.background-border {
  background-image: url('~/assets/img/first-block-bg.png');
  background-size: contain;
}
</style>
