<template>
  <div class="footer flex flex-col bg-custom-purple items-center">
    <div class="footer__name-wrapper bg-custom-yellow p-3">
      <img src="~/assets/img/name-footer.svg" alt="" />
    </div>
    <div class="footer__text-wrapper flex md:flex-row flex-col items-center">
      <div class="footer-visit-text lg:font-druk-wide text-cursor">Visit</div>
      <a
        href="https://impossiblefoods.com/"
        class="shadowForLink flex items-center"
        target="_blank"
      >
        <div class="hidden md:block">&ensp;</div>
        <div class="footer-text lg:font-druk-wide">impossible</div>
        <div class="footer-text lg:font-druk-wide">foods.com</div>
        <div class="ml-3 md:ml-4">
          <img
            class="hidden md:block"
            src="~/assets/img/arrow.svg"
            alt="arrow"
          />
          <img
            class="block md:hidden"
            src="~/assets/img/arrow2.svg"
            alt="arrow"
          />
        </div>
      </a>
    </div>
    <SocialBlock color-style="white-style" />
    <div class="footer__label-wrapper text-cursor text-custom-white">
      © Copyright 2021 Impossible Foods Inc.
    </div>
  </div>
</template>

<script>
import SocialBlock from '~/components/icons/social/SocialBlock'

export default {
  name: 'Footer',
  components: {
    SocialBlock,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background-image: url('~/assets/img/background-lines.png');
  background-blend-mode: color-dodge;
  &__name-wrapper {
    margin: 108px 0 50px;
    @media (max-width: 767px) {
      background-size: 100% 100%;
      margin: 60px 0 56px;
    }
  }
  &__text-wrapper {
    margin-bottom: 156px;
    @media (max-width: 767px) {
      margin-bottom: 182px;
    }
  }
  &__label-wrapper {
    padding: 36px 0 65px;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.02em;
    @media (max-width: 767px) {
      padding: 52px 0 36px;
      font-size: 16px;
    }
  }
}
.footer-text {
  @apply uppercase font-druk text-3xl md:text-4xl text-custom-yellow;
  font-size: 40px;
  line-height: 108%;
  @media (max-width: 1023px) {
    font-size: 40px;
    line-height: 108%;
    letter-spacing: 0.02em;
  }
}
.footer-visit-text {
  @apply uppercase font-druk text-custom-white;
  font-size: 40px;
  line-height: 100%;
  @media (max-width: 1023px) {
    font-size: 40px;
    line-height: 108%;
    letter-spacing: 0.02em;
  }
}
.shadowForLink {
  filter: drop-shadow(5px 4px 0px #32333d);
  transition: all 0.5s ease;
}
.shadowForLink:hover {
  filter: drop-shadow(2px 1px 0px #32333d);
  transition: all 0.5s ease;
}
</style>
