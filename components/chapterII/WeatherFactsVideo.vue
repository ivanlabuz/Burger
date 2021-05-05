<template>
  <div class="flex items-center flex-col">
    <div class="items-center relative mx-2 md:my-10 my-5 flex object-cover">
      <div
        :class="{ 'pointer-events-none': !isShowButton }"
        class="absolute top-0 z-30 left-0 w-full h-full flex items-center justify-center"
        @click="playVideo()"
      >
        <div class="h-4/5 relative">
          <div
            :class="{ 'opacity-0': !isShowButton }"
            class="play-hover pointer absolute h-full w-full z-20 flex items-center justify-center"
          >
            <img
              class="w-10 z-10 md:w-16"
              src="~/assets/img/main-page/play-video.svg"
              alt=""
            />
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
            }"
            class="star-position absolute flex bottom-0 w-full"
          >
            <div class="w-2/3"></div>
            <img class="w-1/3" src="~/assets/img/main-page/star.png" alt="" />
          </div>
        </div>
      </div>
      <video
        ref="videoPlayer"
        preload="metadata"
        poster="/Poster.png"
        class="outline-none"
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        playsInline
        @ended="showReplay()"
      ></video>
    </div>
    <div
      v-if="isReplay"
      class="replay pointer mb-6 flex shadowForArrow items-center justify-center"
      @click="playVideo()"
    >
      <img
        class="mr-3 w-5 h-5 md:w-auto md:h-auto"
        src="~/assets/img/main-page/yellow_arrow.svg"
        alt=""
      />
      <div>replay Video</div>
    </div>
    <div v-else class="mb-16"></div>
  </div>
</template>

<script>
export default {
  name: 'MainVideo',
  data() {
    return {
      isShowButton: true,
      isReplay: false,
    }
  },
  methods: {
    playVideo() {
      if (this.$refs.videoPlayer) {
        this.isReplay = false
        this.isShowButton = false
        this.$refs.videoPlayer.play()
      }
    },
    showReplay() {
      if (this.$refs.videoPlayer) {
        this.$refs.videoPlayer.load()
        this.isReplay = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.star-position {
  bottom: -11%;
  right: -10%;
}
.replay {
  font-family: Druk Wide;
  font-style: normal;
  font-weight: normal;
  transition: all 0.5s ease;
  font-size: 40px;
  line-height: 100%;
  text-transform: uppercase;
  color: #ffec00;
  @media (max-width: 767px) {
    font-size: 16px;
  }
}
.replay:hover {
  transition: all 0.5s ease;
}
.play-hover {
  img {
    transition: all 0.5s ease;
  }
}
.play-hover:hover {
  img {
    transition: all 0.5s ease;
    width: 96px;
    @media (max-width: 767px) {
      width: 60px;
    }
  }
}
.shadowForArrow {
  filter: drop-shadow(5px 4px 0px #32333d);
  transition: all 0.5s ease;
}
.shadowForArrow:hover {
  filter: drop-shadow(2px 1px 0px #32333d);
  transition: all 0.5s ease;
}
</style>
