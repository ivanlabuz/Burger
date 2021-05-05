<template>
  <div class="padding-for-header bg-custom-purple">
    <Header class="text-black" />
    <div class="content text-custom-white bg-custom-purple bt-content">
      <FirstPartOfChapter
        chapter-number="VI"
        chapter-class="text-custom-light-pink"
        img-src="/chapters/chapter6-title.svg"
        video-src="Chapter_06.mp4"
        gradient="/chapters/chapters-1-6.png"
        border-class="border-custom-light-pink"
      >
        <template #title-and-text>
          <h2 class="h2-heading mb-6 md:pt-16">
            Helping your parents cope with change
          </h2>
          <p class="lead-paragraph">
            We get it. Change can be annoying sometimes. But it can be pretty
            great also. Think of all the changes your parents have seen in their
            lifetime. The switch from not-cell-phones to cell phones.
            Blockbuster to Netflix. Is it really so crazy to think there are
            better ways of making meat?
          </p>
        </template>
        <template #bordered-content>
          <h2 class="bordered-content__title h2-heading">
            Here's a couple of big changes your parents might have lived
            through, to prove they can handle it.
          </h2>
        </template>
      </FirstPartOfChapter>
    </div>
    <WeUsedToSmoke class="bg-custom-white"></WeUsedToSmoke>
    <ImgAndText class="bg-custom-blue bg-for-block">
      <template #img>
        <img width="237" src="~/assets/img/chapterVI/Earth.png" alt="" />
      </template>
      <template #title>
        <div class="text-custom-white">Remember the hole in the Ozone?</div>
      </template>
      <template #text>
        <div class="text-custom-white mt-3">
          In 1985... scientists warned us about a hole in the ozone layer caused
          by aerosols we were using.
          <span class="font-bold">Within two years</span> the nations of the
          world banned the aerosols responsible and we created things that
          worked better. Your parent’s saw firsthand that we’re capable of big,
          impactful climate action.
        </div>
        <div class="wide-accent mt-8 md:mt-14">We changed, and we fixed it</div>
      </template>
    </ImgAndText>
    <ImportantChange />
    <MarqueeAndCarouselComponent
      first-class-for-ticker="text-custom-blue"
      second-class-for-ticker="text-custom-light-blue"
      data-for-ticker="CURIOUS FOR MORE?"
      :data-for-carousel="carouselContent"
    />
  </div>
</template>

<script>
import Header from '~/components/Header'
import WeUsedToSmoke from '~/components/chapterVI/WeUsedToSmoke'
import ImportantChange from '~/components/chapterVI/ImportantChange'
export default {
  name: 'ChapterVI',
  components: {
    Header,
    WeUsedToSmoke,
    ImportantChange,
  },
  data: () => {
    return {
      carouselContent: {
        1: {
          title: 'By Grist',
          text: 'What the climate movement can learn from the war on smoking',
          link:
            'https://grist.org/politics/what-the-climate-movement-can-learn-from-the-war-on-smoking/',
        },
        2: {
          title: 'TED Talk',
          text: 'Lessons from how we protected the ozone layer',
          link: 'https://www.youtube.com/watch?v=08z_xW-szwM',
        },
        3: {
          title: 'From EarthDay.org',
          text: 'What We can Learn from the Montreal Protocol',
          link:
            'https://www.earthday.org/what-can-we-learn-from-the-montreal-protocol/#:~:text=A%20tremendous%20effort%20by%20the,the%20planet%20began%20fixing%20itself.',
        },
      },
    }
  },
  head() {
    return {
      title: 'Chapter-VI',
    }
  },
}
</script>

<style lang="scss" scoped>
.bg-for-block {
  background-image: url('~/assets/img/background-lines2.png');
  background-blend-mode: color-dodge;
  background-size: 100% 21%;
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
