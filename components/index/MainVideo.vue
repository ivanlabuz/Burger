<template>
  <div class="flex mt-0 md:-mt-32 items-center flex-col">
    <div class="items-center relative md:mb-10 mb-5 flex object-cover">
      <div
        :class="{ 'pointer-events-none': !isShowButton }"
        class="absolute bottom-0 z-30 left-0 w-full h-full flex items-center justify-center px-4"
        @click="playVideo()"
      >
        <div class="h-4/6 md:h-3/5 relative margin-for-border">
          <div
            :class="{ 'opacity-0': !isShowButton }"
            class="play-hover pointer absolute h-full w-full z-20 flex items-center justify-center"
          >
            <img src="~/assets/img/main-page/play-video.png" alt="" />
          </div>
          <img
            :class="{ 'opacity-0': !isShowButton }"
            class="h-full"
            src="~/assets/img/main-page/border-video.png"
            alt=""
          />
          <div
            :class="{
              'opacity-0': !isShowButton && !isReplay,
              'star-position_with-replay': isReplay,
            }"
            class="star-position position absolute flex w-full"
          >
            <div class="w-2/3"></div>
            <img
              class="w-1/3 h-full"
              src="~/assets/img/main-page/star.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="relativ">
        <video
          ref="videoPlayer2"
          preload="metadata"
          autoplay
          loop
          muted
          playsInline
          class="outline-none w-full cut-video max-w-7xl min-w-33"
          src="~/assets/video/MainVideo.mp4"
        ></video>
        <img
          class="absolute h-full w-full top-0 left-0"
          src="/chapters/homepage-video-preview.png"
          alt=""
        />
      </div>
    </div>
    <div
      v-if="isReplay"
      class="replay pointer mb-6 shadowForArrow z-50 relative"
      @click="playVideo()"
    >
      <div class="flex items-center justify-center">
        <img
          class="mr-3 w-5 h-5 md:w-auto md:h-auto z-20"
          src="~/assets/img/main-page/yellow_arrow.svg"
          alt=""
        />
        <div class="z-20">replay Video</div>
      </div>
      <div class="absolute flex items-center justify-center fake-shadow-block">
        <svg
          width="40"
          class="mr-3 w-5 h-5 md:w-auto md:h-auto z-10"
          height="44"
          viewBox="0 0 40 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.5 17.4019C35.5 18.5566 35.5 21.4434 33.5 22.5981L5 39.0526C3 40.2073 0.5 38.7639 0.5 36.4545V3.54552C0.5 1.23612 3 -0.207259 5 0.947442L33.5 17.4019Z"
            fill="#32333d"
          />
        </svg>
        <div class="fake-shadow z-10">replay Video</div>
      </div>
    </div>
    <div v-else class="mb-16"></div>
    <div
      v-touch:swipe.bottom="showReplay"
      :class="isShowMainVideo ? '' : 'hidden'"
      class="fixed h-screen w-screen overflow-y-scroll bg-black z-50 top-0 left-0"
    >
      <video
        ref="videoPlayer"
        controls
        muted
        class="outline-none max-w-none w-full h-full"
        src="~/assets/video/MainVideo2.mp4"
        @ended="showReplay()"
      ></video>
      <img
        class="fixed top-5 right-5 pointer"
        src="~/assets/img/close.svg"
        alt=""
        @click="showReplay()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainVideo',
  data() {
    return {
      isShowButton: true,
      isShowMainVideo: false,
      isReplay: false,
    }
  },
  methods: {
    playVideo() {
      if (this.$refs.videoPlayer) {
        this.isShowMainVideo = true
        this.$refs.videoPlayer.muted = false
        this.isReplay = false
        this.isShowButton = false
        this.$refs.videoPlayer.play()
      }
    },
    showReplay() {
      if (this.$refs.videoPlayer) {
        this.isShowMainVideo = false
        this.$refs.videoPlayer.pause()
        this.$refs.videoPlayer.currentTime = 0
        this.isReplay = true
        window.scrollTo(0, 0)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.star-position {
  bottom: -25%;
  right: 1%;
  &_with-replay {
    bottom: -10%;
    right: 31%;
  }
  @media (min-width: 768px) {
    bottom: -16%;
    right: -5%;
    &_with-replay {
      bottom: -3%;
      right: -21%;
    }
  }
}
.replay {
  font-family: Druk Wide;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 100%;
  text-transform: uppercase;
  color: #ffec00;
  padding-right: 5px;
  padding-bottom: 3px;
  .fake-shadow-block {
    top: 4px;
    left: 5px;
    transition: all 0.25s;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    .fake-shadow-block {
      top: 2px;
      left: 2px;
      transition: all 0.25s;
    }
  }
}
.replay:hover {
  .fake-shadow-block {
    top: 1px;
    left: 1px;
    transition: all 0.25s;
  }
}
.play-hover {
  img {
    transition: width 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    width: 64px;
    @media (max-width: 767px) {
      width: 40px;
    }
  }
}
.play-hover:hover {
  img {
    z-index: 10;
    transition: width 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);

    width: 96px;
    @media (max-width: 767px) {
      width: 60px;
    }
  }
}
.margin-for-border {
  margin-top: 18%;
}
//.shadowForArrow {
//  filter: drop-shadow(5px 4px 0px #32333d);
//  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
//}
//.shadowForArrow:hover {
//  filter: drop-shadow(2px 1px 0px #32333d);
//  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
//}
.min-w-33 {
  min-width: 33rem;
}
.min-w-33 {
  min-width: 33rem;
}
.fake-shadow {
  filter: none;
  color: #32333d;
}
</style>
