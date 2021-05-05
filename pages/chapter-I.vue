<template>
  <div class="main-container padding-for-header bg-custom-purple">
    <Header class="text-black" />
    <div class="content bg-custom-purple text-custom-white bt-content">
      <FirstPartOfChapter
        chapter-number="I"
        img-src="/chapters/chapter1-title.svg"
        video-src="Chapter_01.mp4"
        border-class="border-custom-light-pink"
        gradient="/chapters/chapters-1-6.png"
        chapter-class=""
      >
        <template #title-and-text>
          <h2 class="h2-heading mb-6 md:pt-16">And how to approach it</h2>
          <h3 class="h3-heading mb-4">Getting started...</h3>
          <p class="lead-paragraph">
            We know that climate change will affect the lives of younger
            generations the most, but it’s going to take help from all
            generations to prevent the worst from happening. That's why...
          </p>
        </template>
        <template #bordered-content>
          <h2 class="bordered-content__title h2-heading">
            one of the most powerful things you can do is to
            <span class="text-custom-light-pink">get your parents to care</span>
            about the climate.
          </h2>
        </template>
      </FirstPartOfChapter>
    </div>
    <BeforeStartBlock></BeforeStartBlock>
    <MarqueeAndCarouselComponent
      data-for-ticker="WANT EVEN MORE ADVICE?"
      :data-for-carousel="carouselContent"
      first-class-for-ticker="text-custom-purple"
      second-class-for-ticker="text-custom-blue"
    />
    <LastPartOfChapter
      address="chapter-II"
      img-src="/chapters/chapter2-title.svg"
      video-poster="/chapters/chapter2-poster.svg"
      background="bg-custom-blue"
      video-src="Chapter_02.mp4"
      gradient="/chapters/chapters-2-4.png"
    >
      <template #chapter-name>
        <div class="text-white">CHAPTER II</div>
      </template>
      <template #title-and-text>
        <div class="text-white">The “Plate-to-Planet” Connection and you</div>
      </template>
    </LastPartOfChapter>
  </div>
</template>

<script>
import Header from '~/components/Header'
import BeforeStartBlock from '~/components/chapterI/BeforeStartBlock'

export default {
  name: 'ChapterI',
  components: {
    Header,
    BeforeStartBlock,
  },
  data: () => {
    return {
      carouselContent: {
        1: {
          title: 'Video by TED',
          text:
            'The most important thing you can do to fight climate change: talk about it',
          link:
            'https://www.ted.com/talks/katharine_hayhoe_the_most_important_thing_you_can_do_to_fight_climate_change_talk_about_it',
        },
        2: {
          title: 'By Grist',
          text:
            'Here’s everything we know about how to talk about climate change',
          link:
            'https://grist.org/climate-energy/heres-everything-we-know-about-how-to-talk-about-climate-change/',
        },
        3: {
          title: 'Video by Global Weirding',
          text: "If I just explain the facts, they'll get it, right?",
          link: 'https://www.youtube.com/watch?v=nkMIjbDtdo0',
        },
      },
    }
  },
  head() {
    return {
      title: 'Chapter-I',
    }
  },
}
</script>

<style lang="scss" scoped></style>
