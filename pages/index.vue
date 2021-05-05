<template>
  <div class="bg-custom-light-pink padding-for-header">
    <Header :is-border="false" class="text-black" />
    <div class="container flex min-w-full flex-col items-center">
      <MainVideo />
      <div class="mx-6 md:mx-15 flex">
        <img
          class="hidden md:block"
          src="~/assets/img/main-page/hand.svg"
          alt=""
        />
        <div class="body max-w-4xl text-center text-custom-white">
          <strong>We know</strong> that
          <strong>you know</strong>
          that talking to your parents about certain topics (like climate
          change) can be a little tricky. They grew up at a different time, they
          didn’t have the same information, and they can be more set in their
          ways. But that’s ok! And it’s exactly why we filled this guide with
          helpful data and tips to get them on board with saving the planet.
        </div>
        <img
          class="hidden md:block"
          src="~/assets/img/main-page/hand2.svg"
          alt=""
        />
      </div>

      <div
        class="font-size-custom w-full mt-24 hidden xl:flex items-center justify-center text-custom-white"
      >
        <div class="w-52 bg-custom-white mx-2 md:mx-5 max-w-xs h-1"></div>
        <div class="text-cursor">Check out these chapters</div>
        <div class="w-52 bg-custom-white mx-2 md:mx-5 max-w-xs h-1"></div>
      </div>

      <div class="font-size-custom flex items-center flex-col xl:hidden mt-24">
        <div class="text-center text-cursor text-custom-white">
          CHECK OUT THESE
        </div>
        <div class="flex w-full items-center">
          <div
            class="bg-custom-white w-20 xl:w-screen max-w-xs mx-2 md:mx-5 h-1"
          ></div>
          <div class="text-custom-white text-cursor">CHAPTERS</div>
          <div
            class="w-20 bg-custom-white xl:w-screen max-w-xs mx-2 md:mx-5 h-1"
          ></div>
        </div>
      </div>

      <div
        class="grid grid-cols-1 mt-14 grid-rows-2 mb-10 lg:grid-cols-2 xl:grid-cols-3"
      >
        <HoverBorder
          class="pointer"
          address="chapter-I"
          video-src="Chapter_01.mp4"
          img-src="/chapters/chapter1-title.svg"
          class-for-button="button-yellow"
          background="bg-custom-purple"
          noise="/chapters/chapter2-title-bg.png"
          personal-opacity="opacity-30"
          gradient="/chapters/chapters-1-6.png"
        >
          <template #title>
            <div class="text-white">Chapter I</div>
          </template>
          <template #text>
            <div class="text-white">And how to approach it</div></template
          >
        </HoverBorder>
        <HoverBorder
          class="pointer"
          address="chapter-II"
          img-src="/chapters/chapter2-title.svg"
          video-src="Chapter_02.mp4"
          background="bg-custom-blue"
          noise="/chapters/chapter2-title-bg.png"
          personal-opacity="opacity-40"
          gradient="/chapters/chapters-2-4.png"
        >
          <template #title> <div class="text-white">Chapter II</div> </template>
          <template #text>
            <div class="text-white">And here’s how...</div></template
          ></HoverBorder
        >
        <HoverBorder
          class="pointer"
          address="chapter-III"
          img-src="/chapters/chapter3-title.svg"
          video-src="Chapter_03.mp4"
          background="bg-custom-yellow"
          noise="/chapters/chapter2-title-bg.png"
          personal-opacity="opacity-30"
          gradient="/chapters/chapters-3-5.png"
        >
          <template #title>
            <div class="text-custom-purple">Chapter III</div>
          </template>
          <template #text>
            <div class="text-custom-charcoal">Debunking Myths</div></template
          ></HoverBorder
        >
        <HoverBorder
          class="pointer"
          address="chapter-IV"
          img-src="/chapters/chapter4-title.svg"
          video-src="Chapter_04.mp4"
          background="bg-custom-blue"
          noise="/chapters/chapter2-title-bg.png"
          personal-opacity="opacity-40"
          gradient="/chapters/chapters-2-4.png"
        >
          <template #title>
            <div class="text-custom-light-pink">Chapter IV</div>
          </template>
          <template #text>
            <div class="text-white">
              The “Plate-to-Planet” <br />
              Connection and you
            </div></template
          ></HoverBorder
        >
        <HoverBorder
          class="pointer"
          address="chapter-V"
          img-src="/chapters/chapter5-title.svg"
          video-src="Chapter_05.mp4"
          background="bg-custom-yellow"
          noise="/chapters/chapter2-title-bg.png"
          personal-opacity="opacity-30"
          gradient="/chapters/chapters-3-5.png"
        >
          <template #title>
            <div class="text-custom-purple">Chapter V</div>
          </template>
          <template #text>
            <div class="text-custom-charcoal">
              It’s OK! You can love <br />
              the planet AND meat
            </div></template
          ></HoverBorder
        >
        <HoverBorder
          class="pointer"
          address="chapter-VI"
          img-src="/chapters/chapter6-title.svg"
          video-src="Chapter_06.mp4"
          class-for-button="button-yellow"
          background="bg-custom-purple"
          noise="/chapters/chapter2-title-bg.png"
          personal-opacity="opacity-30"
          gradient="/chapters/chapters-1-6.png"
        >
          <template #title>
            <div class="text-custom-light-pink">Chapter VI</div>
          </template>
          <template #text>
            <div class="text-white">
              Helping your parents<br />
              cope with change
            </div></template
          ></HoverBorder
        >
      </div>

      <!-- do not delete -->
      <!-- <div
        class="flex max-w-screen-xl flex-col lg:px-4 lg:w-full lg:flex-row items-center mx-2 mb-10 lg:mx-15"
      >
        <div
          class="lg:w-1/2 mb-4 flex flex-col items-center lg:items-start lg:mb-0"
        >
          <div>
            <div
              class="font-size-bottom-block text-center lg:text-left text-custom-charcoal"
            >
              Need some
            </div>
            <div
              class="font-size-bottom-block shadow-custom text-center lg:text-left text-custom-yellow"
            >
              inspo?
            </div>
          </div>
          <div class="body max-w-xs mt-3 mb-6 text-custom-white">
            Check out videos of other folks having the awkward convo.
          </div>
          <div class="check-video pointer bg-custom-white">
            Check the videos
          </div>
        </div>
        <div class="lg:w-1/2">
          <img width="624" src="~/assets/img/main-page/burger.png" alt="" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import HoverBorder from '~/components/index/HoverBorder'
import MainVideo from '~/components/index/MainVideo'
export default {
  name: 'Index',
  components: {
    Header,
    HoverBorder,
    MainVideo,
  },
}
</script>

<style lang="scss" scoped>
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
.font-size-custom {
  font-family: Druk, sans-serif;
  font-size: 80px;
  line-height: 108%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  @media (max-width: 767px) {
    font-size: 56px;
  }
}
.font-size-bottom-block {
  font-family: Druk, sans-serif;
  font-size: 88px;
  line-height: 88%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.shadow-custom {
  text-shadow: 6px 5px 0 #32333d;
}
</style>
