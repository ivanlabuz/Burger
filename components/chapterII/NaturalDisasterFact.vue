<template>
  <div class="wrapper flex relative items-center flex-col bg-custom-purple">
    <div class="wrapper__text-block text-center flex items-center flex-col">
      <div class="h1-heading text-center text-custom-yellow">
        NATURAL DISASTER FACT
      </div>
      <div
        class="h4-heading text-center text-custom-white mt-9 md:mt-16 mb-3 md:mb-6"
      >
        <div>In the last 40 years, the number</div>
        <div>of natural disasters per year has</div>
      </div>
      <div class="big-text text-cursor">TRIPLED</div>
      <div class="big-text text-cursor">TRIPLED</div>
      <div class="big-text text-cursor">TRIPLED</div>
      <div class="h4-heading text-custom-white mt-3 md:mt-8 mb-7 md:mb-10">
        Big floods, wildfires and hurricanes are
        <a
          href="https://www.adb.org/sites/default/files/publication/176899/ewp-466.pdf"
          class="text-custom-yellow underline"
          target="_blank"
        >
          becoming more frequent</a
        >. Climate change is already reshaping what “normal” looks like
      </div>
      <div class="body text-white">(and not in a good way.)</div>
    </div>
    <div class="z-0 absolute width-img">
      <img src="~/assets/img/chapterII/propeller.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NaturalDisasterFact',
}
</script>

<style lang="scss" scoped>
.wrapper {
  &__text-block {
    max-width: 814px;
    padding: 120px 32px 848px;
    @media (max-width: 767px) {
      padding: 64px 20px 520px;
    }
  }
}
.big-text {
  font-family: Druk Wide;
  font-style: normal;
  font-weight: normal;
  font-size: 134px;
  line-height: 108%;
  color: #ffec00;
  text-shadow: 14px 13px 0px #32333d;
  @media (max-width: 854px) {
    font-size: 53px;
    line-height: 100%;
    text-shadow: 10px 9px 0px #32333d;
  }
}
.width-img {
  width: 988px;
  bottom: -4%;
  @media (max-width: 767px) {
    width: 581px;
  }
}
</style>
