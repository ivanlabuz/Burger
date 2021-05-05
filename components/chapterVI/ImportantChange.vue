<template>
  <div class="bg-custom-light-pink flex flex-col items-center text-center">
    <ImgAndText class="wrapper-title pb-20">
      <template #img>
        <img
          class="mb-5"
          width="73px"
          src="~/assets/img/chapterVI/cap.png"
          alt=""
        />
      </template>
      <template #title>
        <div class="text-custom-yellow mb-10">
          <span class="z-10 relative">The next big important change is</span>
          <div class="star-background">
            <span class="z-10 relative">here</span>
          </div>
        </div>
      </template>
      <template #text>
        <div class="text-custom-white mt-3">
          Life is crazy. We all adapt, grow, change. When we encounter a
          problem, we don't ignore it, but do we give up??
        </div>
        <div class="text-custom-white mt-3">
          No. We figure it out. We get creative. We find new solutions (and
          often realize we were missing out). Most importantly, we look back at
          the “old way” and laugh at how ridiculous it seems
        </div>
      </template>
    </ImgAndText>
    <div class="h2-heading text-custom-charcoal wrapper-text px-6">
      What’s happening right now
      <span class="opacity-30">(this whole existential crisisthing)</span>
      doesn’t have to happen.
    </div>
    <div class="h2-heading text-custom-charcoal wrapper-text mt-14 px-6">
      If we look at the
      <span class="text-custom-yellow text-shadow">facts</span> and make some
      <span class="text-custom-yellow text-shadow">changes</span> Moms and Dads
      can make their kids lives
      <span class="text-custom-yellow text-shadow">even better</span> than
      theirs.
    </div>
    <img
      class="mt-7 md:mt-16 mb-16 md:mb-40 image"
      src="~/assets/img/chapterVI/ImportantChange.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'ImportantChange',
}
</script>

<style lang="scss" scoped>
.wrapper-title {
  max-width: 814px;
}
.wrapper-text {
  max-width: 1280px;
}
.star-background {
  &::before {
    content: '';
    background: url('~/assets/img/chapterVI/Star.png') 100% 100% no-repeat;
    background-position: center;
    background-size: contain;
    width: 226px;
    height: 173px;
    position: absolute;
    left: -34px;
    top: -39px;
    @media (max-width: 769px) {
      width: 189px;
      height: 145px;
    }
  }
  position: relative;
  display: inline-block;
}
.image {
  max-width: 680px;
  @media (max-width: 767px) {
    width: 471px;
  }
}
.text-shadow {
  text-shadow: 4px 4px 0px #34323c;
}
</style>
