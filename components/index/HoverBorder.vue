<template>
  <div class="wrapper-img" @mouseover="playVideo()" @mouseout="stopVideo()">
    <NuxtLink :to="{ name: address }">
      <div :class="'button flex flex-center ' + classForButton">
        <div class="ml-2 pt-1">Explore</div>
        <ArrowInButton class="ml-4 h-full" />
      </div>
      <div
        :class="background"
        class="relative flex flex-col items-center my-2 border-hover"
      >
        <div class="title-font mt-7 m-20 z-10"><slot name="title"></slot></div>

        <img
          class="frame absolute w-full h-full z-10"
          src="~/assets/img/mask.png"
          alt=""
        />
        <img class="absolute top-0 z-10 w-60" :src="imgSrc" alt="" />
        <img
          :class="personalOpacity"
          class="absolute z-10 top-0 h-full w-full"
          :src="noise"
          alt=""
        />
        <div class="relative">
          <video
            :ref="videoSrc"
            preload="auto"
            width="364"
            playsInline
            muted="muted"
            autoplay
            loop
            class="pruning"
            :src="require(`~/assets/video/${videoSrc}`)"
          ></video>
          <img
            class="absolute h-full w-full top-0 left-0"
            :src="gradient"
            alt=""
          />
        </div>

        <div class="text-font text-center absolute bottom-12">
          <slot name="text"></slot>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import ArrowInButton from '~/components/icons/ArrowInButton'

export default {
  name: 'HoverBorder',
  components: {
    ArrowInButton,
  },
  props: {
    address: { type: String, default: '' },
    videoSrc: { type: String, default: '' },
    imgSrc: { type: String, default: '' },
    classForButton: { type: String, default: '' },
    background: { type: String, default: '' },
    personalOpacity: { type: String, default: '' },
    noise: { type: String, default: '' },
    gradient: { type: String, default: '' },
  },
  mounted() {
    this.$refs[`${this.videoSrc}`].pause()
  },
  methods: {
    playVideo() {
      if (this.$refs[`${this.videoSrc}`]) {
        this.$refs[`${this.videoSrc}`].play()
      }
    },
    stopVideo() {
      if (this.$refs[`${this.videoSrc}`]) {
        this.$refs[`${this.videoSrc}`].pause()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.img-wrapper {
  padding-left: 50px;
  min-width: 165px;
}

.check-video {
  align-items: center;
  font-family: Druk;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 80%;
  justify-content: center;
  display: flex;
  border-radius: 60px;
  text-align: center;
  text-transform: uppercase;
  color: #ab31ff;
  width: 180px;
  transform: matrix(1, -0.05, 0.04, 1, 0, 0);
  height: 60px;
}
.wrapper-img {
  @apply md:mx-8 my-5;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  .button {
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
    font-family: Druk, serif;
    font-style: italic;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 26px;
    position: absolute;
    bottom: -2%;
    left: 27%;
    z-index: 21;
    box-shadow: 4px 4px #34323c;
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    @media (max-width: 1023px) {
      left: 29%;
      bottom: -8px;
    }
  }
  .button-yellow {
    background: #ffec00;
    color: #34323c;
  }
  .border-hover {
    width: 344px;
    height: 500px;
    clip-path: path(
      'M332.442 55.8994C328.441 32.9996 314.74 20.7998 303.838 16.7998C280.435 5.49994 228 2 193 1C116.215 0 62 6.49994 37 18.7998C21.203 27.6998 16.6017 34.9996 12.6011 46.8994C-4.0007 96 -2.00058 402 10.6011 446.194C14.2016 465.294 33.403 482.994 42.2046 485.294C60.6075 490.594 113 499.194 182 497.994C229.229 496.194 292.536 493.594 305.838 482.294C317.64 475.994 328.941 461.294 332.442 446.194C346.044 383.695 340.044 91 332.442 55.8994Z'
    );
    .frame {
      transition: opacity 0.25s ease-out;
      opacity: 0;
    }
  }
}
.wrapper-img:hover {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: rotate(-4deg);
  .button {
    transition: opacity 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 1;
  }
  .border-hover {
    .frame {
      top: 0;
      left: 0;
      transition: opacity 0.25s ease-out;
      opacity: 1;
    }
  }
}
.title-font {
  font-family: Druk Wide, sans-serif;
  font-size: 11px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}
.text-font {
  font-family: Druk, sans-serif;
  font-size: 28px;
  line-height: 108%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
</style>
