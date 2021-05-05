<template>
  <div class="padding-for-header bg-custom-yellow">
    <Header :chapter="true" class="text-black" />
    <section class="content text-custom-charcoal bg-custom-yellow bt-content">
      <FirstPartOfChapter
        chapter-number="III"
        chapter-class="text-custom-purple"
        img-src="/chapters/chapter3-title.svg"
        video-src="Chapter_03.mp4"
        gradient="/chapters/chapters-3-5.png"
        border-class="border-custom-purple"
      >
        <template #title-and-text>
          <h3 class="h3-heading mb-4">Debunking Myths about climate change</h3>
          <p class="lead-paragraph font-normal">
            When it comes to climate change, there’s a lot of misinformation,
            falsehoods, and downright lies out there. And that’s a problem. If
            your parents don’t think it’s real, or they don’t think it’s caused
            by humans – they won’t think they can do anything about it.
          </p>
        </template>
        <template #bordered-content>
          <h2 class="bordered-content__title h2-heading">
            FEAR NOT! We’ve debunked some of the top climate conspiracies so you
            can get those non-facts out of their heads.
          </h2>
        </template>
      </FirstPartOfChapter>
    </section>
    <section class="content bg-custom-light-blue">
      <StillUpForDebateComponent />
    </section>
    <section class="content text-custom-charcoal">
      <client-only>
        <MythComponent :myth-number="2" actually-class="text-custom-blue">
          <template #title>
            <span class="text-custom-pink">“</span>It’s just the sun getting
            hotter<span class="text-custom-pink myth-component__smile"
              >”</span
            ></template
          >
          <template #subtitle
            >There’s no correlation between the sun’s temp and earth’s</template
          >
          <template #text>
            <div class="font-normal">
              The sun’s energy fluctuates, but has actually been going down
              while the average temperature of the planet continues to rise.
            </div>
          </template>
          <template #content>
            <a
              href="https://climateprimer.mit.edu/climate-change/#the-climate-is-always-changing"
              target="_blank"
            >
              <img src="~/assets/img/chapterIII/temperature.png" />
            </a>
          </template>
        </MythComponent>
      </client-only>
    </section>
    <section class="content text-custom-white bg-custom-midnight-sky">
      <client-only>
        <MythComponent :myth-number="3" actually-class="text-custom-green">
          <template #title>
            <span class="text-custom-pink">“</span>Isn’t the climate always
            <span class="text-custom-light-blue">c</span
            ><span class="text-custom-light-purple">h</span
            ><span class="text-custom-purple">a</span
            ><span class="text-custom-light-pink">n</span
            ><span class="text-custom-pink">g</span
            ><span class="text-custom-peach">i</span
            ><span class="text-custom-yellow">n</span
            ><span class="text-custom-green">g</span>?<span
              class="text-custom-pink"
              >”</span
            ></template
          >
          <template #subtitle
            >Yes! But never in history has it gotten this hot and this
            fast.</template
          >
          <template #text>
            <div class="font-normal">
              The natural changes in the earth’s climate (from ice ages to warm
              periods) happens gradually over thousands of years. Humans are
              causing the climate to change faster than life on earth can adapt.
              Every time this has happened in the past it has led to a worldwide
              mass extinction event. And we’d, you know, like to avoid another
              one of those.
            </div>
          </template>
          <template #content>
            <img src="~/assets/img/chapterIII/arctic-summer-temps.png" />
            <a
              href="https://climateprimer.mit.edu/climate-change/#the-climate-is-always-changing"
              target="_blank"
              class="myth-component__link lead-paragraph"
              >Source</a
            >
          </template>
        </MythComponent>
      </client-only>
    </section>
    <MarqueeAndCarouselComponent
      first-class-for-ticker="text-custom-blue"
      second-class-for-ticker="text-custom-light-blue"
      data-for-ticker="MORE RESOURCES TO HELP DEBUNK MYTHS"
      :data-for-carousel="carouselContent"
    />
    <LastPartOfChapter
      address="chapter-IV"
      img-src="/chapters/chapter4-title.svg"
      video-poster="/chapters/chapter4-poster.svg"
      background="bg-custom-blue"
      video-src="Chapter_04.mp4"
      gradient="/chapters/chapters-2-4.png"
    >
      <template #chapter-name>
        <div class="text-custom-light-pink">CHAPTER IV</div>
      </template>
      <template #title-and-text>
        <div class="text-white">The “Plate-to-Planet” Connection and you</div>
      </template>
    </LastPartOfChapter>
  </div>
</template>

<script>
import Header from '~/components/Header'
import StillUpForDebateComponent from '~/components/chapterIII/StillUpForDebateComponent'
import MythComponent from '~/components/chapterIII/MythComponent'
export default {
  name: 'ChapterIII',
  components: {
    Header,
    StillUpForDebateComponent,
    MythComponent,
  },
  data: () => {
    return {
      carouselContent: {
        1: {
          title: 'By PBS',
          text: 'This is all just a part of a natural cycle, right?',
          link: 'https://www.youtube.com/watch?v=k5_zpjerQFo',
        },
        2: {
          title: 'From MIT',
          text:
            'Climate Science, Risk & Solutions Climate Knowledge for Everyone',
          link: 'https://climateprimer.mit.edu/',
        },
      },
    }
  },
  head() {
    return {
      title: 'Chapter-III',
    }
  },
}
</script>

<style lang="scss" scoped></style>
