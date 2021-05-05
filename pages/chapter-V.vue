<template>
  <div class="padding-for-header bg-custom-yellow">
    <Header :chapter="true" class="text-black" />
    <div class="content text-custom-charcoal bg-custom-yellow bt-content">
      <FirstPartOfChapter
        chapter-number="V"
        chapter-class="text-custom-purple"
        img-src="/chapters/chapter5-title.svg"
        video-src="Chapter_05.mp4"
        gradient="/chapters/chapters-3-5.png"
        border-class="border-custom-purple"
      >
        <template #title-and-text>
          <h3 class="h3-heading mb-6 md:pt-16">
            It’s OK! You can love the planet AND meat
          </h3>
          <p class="lead-paragraph">
            We all love Earth. And we all want to try and protect it. But
            grilling up some tasty burgers shouldn’t be the end of the world.
            AND IT DOESN’T HAVE TO BE! In the past few years humans have learned
            how to make really (really really really) really good meat out of
            plants. And it’s getting better every day. Cows aren’t getting
            better anytime soon (ever).
          </p>
        </template>
        <template #bordered-content>
          <h2 class="bordered-content__title h2-heading">
            Not only is meat from plants absolutely delicious, it’s one of the
            most impactful ways you can help protect the planet!
          </h2>
        </template>
      </FirstPartOfChapter>
    </div>
    <section class="content text-custom-charcoal bg-custom-light-blue">
      <TitleAndText>
        <h2 class="h1-heading mb-8 pt-12 md:pt-40">
          NEWS FLASH
          <span class="text-custom-blue"
            >Cows aren't the only way to make meat!</span
          >
        </h2>
        <p class="lead-paragraph mb-10">
          They aren’t even the best way. When it comes to making food, cows are
          about as efficient as hopping on a scooter for a cross country
          roadtrip.
        </p>
        <p class="lead-paragraph md:pb-36">
          They take up tons of space (literally). They take forever to grow. And
          they’re wildly inefficient (we feed them 10x the calories they
          produce.)
        </p>
      </TitleAndText>
    </section>
    <section
      class="bg-custom-light-pink py-16 px-6 md:py-32 flex flex-col items-center"
    >
      <div class="text-custom-blue h4-heading pb-4">IN FACT</div>
      <div class="wrapper-in-fact h2-heading text-center text-custom-charcoal">
        All of the cows in the world supply
        <span class="text-custom-yellow shadow-text">less than 12%</span> of the
        protein in the human diet, but take
        <a
          href="https://ourworldindata.org/land-use"
          target="_blank"
          class="sub-text"
          >up 77% of agricultural space.</a
        >
      </div>
    </section>
    <section
      class="content flex flex-col items-center pb-16 md:pb-24 bg-custom-blue"
    >
      <TextAndImageComponent class="pb-2">
        <template #title>
          <div class="text-custom-yellow">A TASTY SOLUTION</div>
        </template>
        <template #content>
          <p class="mb-4 text-cursor">
            That’s why we made Impossible™ Burger - it’s the mouthwatering meat
            you (and your parents) love, except made from plants. Which means
            its way less polluting, less resource intensive and causes no
            deforestation.
          </p>
          <p class="mb-14 text-cursor">And it’s tastyyyyyyy.</p>
        </template>
      </TextAndImageComponent>
      <div class="relative">
        <img
          class="z-20 absolute w-20 md:w-auto top-0 right-0"
          src="~/assets/img/chapterV/MadeFromPlants.svg"
          alt=""
        />
        <div class="flex flex-col items-center relative w-full max-width">
          <img
            class="z-10 hidden md:block"
            src="~/assets/img/chapterV/BorderVideoBurger.svg"
            alt=""
          />
          <img
            class="z-10 block md:hidden"
            src="~/assets/img/chapterV/BorderVideoBurgerSmall.svg"
            alt=""
          />
          <div class="absolute video-wrapper h-full">
            <video
              preload="auto"
              class=""
              src="~/assets/video/Megaburger.mp4"
              autoplay
              loop
              playsInline
              muted="muted"
            ></video>
          </div>
        </div>
      </div>
    </section>
    <section class="content bg-custom-purple">
      <FootprintFactComponent />
    </section>
    <section class="content bg-custom-beige">
      <HelpSwitchComponent />
    </section>
    <MarqueeAndCarouselComponent
      first-class-for-ticker="text-custom-blue"
      second-class-for-ticker="text-custom-light-blue"
      data-for-ticker="CURIOUS FOR MORE?"
      :data-for-carousel="carouselContent"
    />
    <LastPartOfChapter
      address="chapter-VI"
      img-src="/chapters/chapter6-title.svg"
      video-poster="/chapters/chapter6-poster.svg"
      background="bg-custom-purple"
      video-src="Chapter_06.mp4"
      gradient="/chapters/chapters-1-6.png"
    >
      <template #chapter-name>
        <div class="text-custom-light-pink">CHAPTER VI</div>
      </template>
      <template #title-and-text>
        <div class="text-white">Helping your parents cope with change</div>
      </template>
    </LastPartOfChapter>
  </div>
</template>

<script>
import Header from '~/components/Header'
import FootprintFactComponent from '~/components/chapterV/FootprintFactComponent'
import HelpSwitchComponent from '~/components/chapterV/HelpSwitchComponent'

export default {
  name: 'ChapterV',
  components: {
    Header,
    FootprintFactComponent,
    HelpSwitchComponent,
  },
  data: () => {
    return {
      carouselContent: {
        1: {
          title: 'By Kurzgesagt',
          text: 'Check out the Impossible Burgers Life Cycle Analysis',
          link:
            'https://impossiblefoods.com/sustainable-food/burger-life-cycle-assessment-2019',
        },
        2: {
          title: 'By Vox',
          text: 'Why beef is the worst food for the climate',
          link: 'https://www.youtube.com/watch?v=3lrJYTsKdUM',
        },
      },
    }
  },
  head() {
    return {
      title: 'Chapter-V',
    }
  },
}
</script>

<style lang="scss" scoped>
.max-width {
  clip-path: path(
    'M347 520.661C403.788 520.802 458.451 519.255 504.442 516.03C550.306 512.816 587.936 507.91 610.424 501.207C636.515 493.482 660.286 474.834 667.89 454.522C674.816 436.487 679.995 407.601 683.495 373.796C687.01 339.846 688.87 300.507 688.993 261.336C689.117 222.167 687.504 183.079 684.048 149.636C680.61 116.364 675.302 88.1391 667.793 71.0443C659.261 51.3956 636.943 31.9418 610.33 24.5685L610.321 24.5658L610.31 24.5629C561.615 11.2963 455.613 5 347 5C238.392 5 132.396 11.2957 83.6975 24.561C56.8296 31.802 34.7212 51.4284 26.2038 71.0515C18.6974 88.1469 13.3898 116.368 9.95257 149.636C6.49705 183.079 4.88331 222.167 5.00655 261.336C5.12981 300.507 6.99057 339.846 10.5055 373.796C14.0067 407.616 19.1885 436.513 26.1201 454.546H26.1203C33.9103 474.809 57.448 493.472 83.5828 501.208C106.164 507.91 143.79 512.815 189.633 516.03C235.598 519.255 290.212 520.802 347 520.661ZM347 520.661C346.996 520.661 346.992 520.661 346.988 520.661L347 515.719L347.012 520.661C347.008 520.661 347.004 520.661 347 520.661Z'
  );
  padding: 4px;
  max-width: 699px;
  @media (max-width: 767px) {
    clip-path: path(
      'M167.5 239.784C194.444 239.848 220.379 239.144 242.2 237.677C263.961 236.215 281.815 233.983 292.484 230.934C304.863 227.42 316.142 218.937 319.75 209.698C323.036 201.494 325.493 188.353 327.154 172.976C328.821 157.532 329.704 139.637 329.762 121.819C329.821 104.001 329.056 86.2203 327.416 71.007C325.785 55.8721 323.266 43.0327 319.704 35.2564C315.656 26.3183 305.067 17.4689 292.44 14.1149L292.435 14.1136L292.43 14.1123C269.326 8.07745 219.033 5.21332 167.5 5.21332C115.97 5.21332 65.6786 8.07718 42.5733 14.1115C29.8255 17.4053 19.3359 26.3333 15.2948 35.2597C11.7332 43.0362 9.21501 55.8738 7.58418 71.007C5.94467 86.2203 5.17901 104.001 5.23748 121.819C5.29597 139.637 6.17882 157.532 7.84652 172.976C9.5077 188.36 11.9663 201.505 15.2551 209.708H15.2552C18.9512 218.926 30.1189 227.415 42.5189 230.934C53.2326 233.983 71.0846 236.214 92.8353 237.677C114.644 239.144 140.556 239.848 167.5 239.784ZM167.5 239.784C167.498 239.784 167.496 239.784 167.494 239.784L167.5 237.535L167.506 239.784C167.504 239.784 167.502 239.784 167.5 239.784Z'
    );
  }
}
.video-wrapper {
  width: 133%;
}
.wrapper-in-fact {
  max-width: 814px;
}
.sub-text {
  color: #ffec00;
  text-shadow: 4px 4px 0px #34323c;
  transition: all 0.5s ease;
  text-decoration: underline;
}
.sub-text:hover {
  transition: all 0.5s ease;
  text-shadow: 1px 1px 0px #34323c;
  text-decoration: none;
}
.shadow-text {
  text-shadow: 4px 4px 0px #34323c;
}
</style>
