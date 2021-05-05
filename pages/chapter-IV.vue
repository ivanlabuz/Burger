<template>
  <div class="padding-for-header bg-custom-blue">
    <Header class="text-black" />
    <section class="content text-custom-white bg-custom-blue bt-content">
      <FirstPartOfChapter
        chapter-number="IV"
        chapter-class="text-custom-light-pink"
        img-src="/chapters/chapter4-title.svg"
        video-src="Chapter_04.mp4"
        gradient="/chapters/chapters-2-4.png"
        border-class="border-custom-light-pink bordered-content_image"
      >
        <template #title-and-text>
          <h3 class="h3-heading mb-6 md:pt-16">
            The “Plate-to-Planet” Connection and you
          </h3>
          <p class="lead-paragraph">
            When we think about stuff that hurts the planet, most people think
            of gas guzzling cars, littering and trash island. Most people don’t
            realize that what we eat is deeply tied to the health of the planet.
            Because of our current eating habits (specifically our love of
            beef), cows are taking over the world! Not only do they gas up the
            atmosphere, they also take up tons of space.
          </p>
        </template>
        <template #bordered-content>
          <div class="bordered-content__img-wrapper">
            <img src="~/assets/img/cows.png" alt="" />
          </div>
          <h3 class="bordered-content__title h3-heading">
            Forests around the world (which are key to sucking carbon out of the
            air, btw), and all the wild animals they support, are torn down to
            make room for cows to chew grass and get fat and become dinner.
          </h3>
        </template>
      </FirstPartOfChapter>
    </section>
    <section class="bg-custom-light-purple text-custom-white">
      <GasFactComponent />
    </section>
    <section class="content bg-custom-blue">
      <TextAndImageComponent title-class="text-custom-yellow">
        <template #title>WATER FACT</template>
        <template #content>
          <p class="mb-4 body text-cursor">
            Animal agriculture also
            <a
              class="underline"
              href="https://www.fao.org/docrep/010/a0701e/a0701e00.HTM"
              target="_blank"
              >pollutes</a
            >
            and
            <a
              class="underline"
              href="https://waterfootprint.org/media/downloads/Mekonnen-Hoekstra-2012-WaterFootprintFarmAnimalProducts.pdf"
              target="_blank"
              >consumes more water than any other industry</a
            >
            on earth! More than half of the water that flows through the
            Colorado River is used by the beef industry.
          </p>
        </template>
        <template #media>
          <a
            href="https://waterfootprint.org/media/downloads/Mekonnen-Hoekstra-2012-WaterFootprintFarmAnimalProducts.pdf"
            class="text-and-image-component__img-wrapper"
            target="_blank"
          >
            <img
              src="~/assets/img/chapterIV/gallons.png"
              alt=""
              class="text-and-image-component__img"
            />
          </a>
        </template>
      </TextAndImageComponent>
    </section>
    <section class="bg-custom-light-pink">
      <LandFactComponent title-class="text-custom-blue">
        <template #title>LAND FACT</template>
        <template #flex-container>
          <div class="flex-container__item">
            <div class="first-item">
              <span>Animal agriculture currently takes up more than</span>
              <span class="numbers">45%</span>
              <span>of Earth’s ice-free land surface.</span>
            </div>
          </div>
          <div class="flex-container__item">
            <div class="second-item">
              <span>Every city on Earth takes up less than</span>
              <span class="numbers">1%</span>
              <span>of land surface</span>
            </div>
          </div>
          <div class="flex-container__item">
            <div class="last-item">
              <span
                >every human-built building or paved surface takes up less
                than</span
              >
              <span class="numbers">2%</span>
            </div>
          </div>
        </template>
        <template #slogan>
          <span class="wide-accent"
            >80% of the entire land footprint of humanity
          </span>
          <span class="h1-heading text-custom-charcoal"
            >is taken up by animal agriculture</span
          >
        </template>
      </LandFactComponent>
    </section>
    <ImgAndText class="bg-custom-peach">
      <template #img>
        <img width="285" src="~/assets/img/chapterIV/Mirror2.png" alt="" />
      </template>
      <template #title>
        <div class="text-custom-purple">THINK OF IT THIS WAY</div>
      </template>
      <template #text>
        <div class="text-custom-charcoal mt-6 mb-4 md:my-4">
          The land area we use for feeding and raising livestock is about the
          size of both
          <a
            href="https://ourworldindata.org/land-use"
            class="text-custom-blue font-bold underline"
            target="_blank"
            >North America and South America COMBINED.</a
          >
        </div>
        <div class="text-custom-charcoal">
          And because cows are so in demand, more forests are being “slashed and
          burned” (yes, it’s as bad as it sounds) every day.
        </div>
      </template>
    </ImgAndText>
    <HeavyFact class="bg-custom-blue" />
    <MarqueeAndCarouselComponent
      first-class-for-ticker="text-custom-pink"
      second-class-for-ticker="text-custom-purple"
      data-for-ticker="CURIOUS FOR MORE?"
      :data-for-carousel="carouselContent"
    />
    <LastPartOfChapter
      address="chapter-V"
      img-src="/chapters/chapter5-title.svg"
      video-poster="/chapters/chapter5-poster.svg"
      background="bg-custom-yellow"
      video-src="Chapter_05.mp4"
      gradient="/chapters/chapters-3-5.png"
    >
      <template #chapter-name>
        <div class="text-custom-purple">CHAPTER V</div>
      </template>
      <template #title-and-text>
        <div class="text-custom-charcoal">
          It’s OK! You can love the planet AND meat
        </div>
      </template>
    </LastPartOfChapter>
  </div>
</template>

<script>
import Header from '~/components/Header'
import TextAndImageComponent from '~/components/TextAndImageComponent'
import LandFactComponent from '~/components/chapterIV/LandFactComponent'
import HeavyFact from '~/components/chapterIV/HeavyFact'
import GasFactComponent from '~/components/chapterIV/GasFactComponent'

export default {
  name: 'ChapterIV',
  components: {
    LandFactComponent,
    Header,
    TextAndImageComponent,
    HeavyFact,
    GasFactComponent,
  },
  data: () => {
    return {
      carouselContent: {
        1: {
          title: 'By Kurzgesagt',
          text: 'Even more facts about Meat production',
          link: 'https://www.youtube.com/watch?v=NxvQPzrg2Wg',
        },
        2: {
          title: 'By Vox Media',
          text: 'The diet that helps fight climate change',
          link: 'https://www.youtube.com/watch?v=nUnJQWO4YJY',
        },
        3: {
          title: 'By Our World in Data',
          text: 'Environmental impacts of food production',
          link: 'https://ourworldindata.org/environmental-impacts-of-food',
        },
      },
      // TODO: Refactor or remove
      waterFactImageSrc: 'require("~/assets/img/chapterIV/gallons.png")',
    }
  },
  head() {
    return {
      title: 'Chapter-IV',
    }
  },
}
</script>

<style>
.yellow-link {
  @apply text-custom-yellow underline font-bold;
}
</style>
