<template>
  <div class="second-chapter padding-for-header bg-custom-blue">
    <Header class="text-black" />
    <div class="content bg-custom-blue text-custom-white bt-content">
      <FirstPartOfChapter
        chapter-number="II"
        img-src="/chapters/chapter2-title.svg"
        video-src="Chapter_02.mp4"
        gradient="/chapters/chapters-2-4.png"
        border-class="border-custom-light-pink"
      >
        <template #title-and-text>
          <h2 class="h2-heading mb-6 md:pt-16">And here’s how...</h2>
          <p class="lead-paragraph">
            For many older people, сlimate change feels like one of those things
            that “might happen one day”. But it’s important to understand that
            it IS happening, and it’s happening RIGHT NOW.
          </p>
        </template>
        <template #bordered-content>
          <h2 class="bordered-content__title h2-heading">
            Give your parents a little reminder about the impacts it’s already
            having on the planet and the people who live here.
          </h2>
        </template>
      </FirstPartOfChapter>
    </div>
    <section class="content bg-custom-light-blue">
      <TextAndImageComponent title-class="text-custom-charcoal">
        <template #title>WEATHER FACT</template>
        <template #content>
          <div class="mt-12 mb-9 md:mt-14 md:mb-20">
            <img src="~/assets/img/chapterII/itsgettinghot.png" alt="" />
          </div>
          <p class="text-cursor mb-8 text-custom-charcoal">
            This video from NASA shows how global temperature has changed over
            the last 100 years.
          </p>
        </template>
        <template #media>
          <div class="relative">
            <div class="flex flex-col items-center relative w-full max-width">
              <img
                class="z-10 hidden md:block"
                src="~/assets/img/chapterII/border_video.svg"
                alt=""
              />
              <img
                class="z-10 block md:hidden"
                src="~/assets/img/chapterII/border-video-small.svg"
                alt=""
              />
              <div class="absolute video-wrapper h-full">
                <video
                  preload="auto"
                  class=""
                  src="~/assets/video/gisstemp_celsius_fade_composite.mp4"
                  autoplay
                  loop
                  playsInline
                  muted="muted"
                ></video>
              </div>
            </div>
            <a
              href="https://www.youtube.com/watch?v=FsX4qHgDlZM"
              target="blank"
              class="text-and-image-component__img-wrapper"
            >
              <div
                class="text-and-image-component__link lead-paragraph pointer"
              >
                Source
              </div>
            </a>
          </div>
        </template>
      </TextAndImageComponent>
    </section>
    <NaturalDisasterFact></NaturalDisasterFact>
    <section
      class="content z-10 relative content_py-0 bg-custom-light-green text-custom-white overflow-hidden"
    >
      <BiodiversityFactComponent />
    </section>
    <MarqueeAndCarouselComponent
      first-class-for-ticker="text-custom-pink"
      second-class-for-ticker="text-custom-green"
      data-for-ticker="WANT EVEN MORE FACTS?"
      :data-for-carousel="carouselContent"
      :slider-for-carousel="true"
    />
    <LastPartOfChapter
      address="chapter-III"
      img-src="/chapters/chapter3-title.svg"
      video-poster="/chapters/chapter3-poster.svg"
      background="bg-custom-yellow"
      video-src="Chapter_03.mp4"
      gradient="/chapters/chapters-3-5.png"
    >
      <template #chapter-name>
        <div class="text-custom-purple">CHAPTER III</div>
      </template>
      <template #title-and-text>
        <div class="text-custom-charcoal">Debunking Myths</div>
      </template>
    </LastPartOfChapter>
  </div>
</template>

<script>
import Header from '~/components/Header'
import NaturalDisasterFact from '~/components/chapterII/NaturalDisasterFact'
import BiodiversityFactComponent from '~/components/chapterII/BiodiversityFactComponent'
export default {
  name: 'ChapterII',
  components: {
    Header,
    NaturalDisasterFact,
    BiodiversityFactComponent,
  },
  data: () => {
    return {
      carouselContent: {
        1: {
          title: 'By Carbon Brief',
          text:
            'How every part of the world has warmed – and could continue to warm',
          link:
            'https://www.carbonbrief.org/mapped-how-every-part-of-the-world-has-warmed-and-could-continue-to-warm',
        },
        2: {
          title: 'By New York Times',
          text: 'How Climate Migration will Reshape America',
          link:
            'https://www.nytimes.com/interactive/2020/09/15/magazine/climate-crisis-migration-america.html',
        },
        3: {
          title: 'Video by TED',
          text: 'Is the weather actually becoming more extreme? - R. Saravanan',
          link: 'https://www.youtube.com/watch?v=NCPTbfQyMt8',
        },
        4: {
          title: 'By Fuse School',
          text: 'Human impacts on Biodiversity',
          link: 'https://www.youtube.com/watch?v=wXJiHr8jWBs',
        },
        5: {
          title: 'By CrashCourse',
          text: '5 Human Impacts on the Environment: Crash Course Ecology #10',
          link: 'https://www.youtube.com/watch?v=5eTCZ9L834s',
        },
      },
    }
  },
  head() {
    return {
      title: 'Chapter-II',
    }
  },
}
</script>

<style lang="scss" scoped>
.second-chapter {
  .carousel-block {
    @apply max-w-full;
  }
}

.video-wrapper {
  //width: 133%;
  clip-path: path(
    'M347 520.661C403.788 520.802 458.451 519.255 504.442 516.03C550.306 512.816 587.936 507.91 610.424 501.207C636.515 493.482 660.286 474.834 667.89 454.522C674.816 436.487 679.995 407.601 683.495 373.796C687.01 339.846 688.87 300.507 688.993 261.336C689.117 222.167 687.504 183.079 684.048 149.636C680.61 116.364 675.302 88.1391 667.793 71.0443C659.261 51.3956 636.943 31.9418 610.33 24.5685L610.321 24.5658L610.31 24.5629C561.615 11.2963 455.613 5 347 5C238.392 5 132.396 11.2957 83.6975 24.561C56.8296 31.802 34.7212 51.4284 26.2038 71.0515C18.6974 88.1469 13.3898 116.368 9.95257 149.636C6.49705 183.079 4.88331 222.167 5.00655 261.336C5.12981 300.507 6.99057 339.846 10.5055 373.796C14.0067 407.616 19.1885 436.513 26.1201 454.546H26.1203C33.9103 474.809 57.448 493.472 83.5828 501.208C106.164 507.91 143.79 512.815 189.633 516.03C235.598 519.255 290.212 520.802 347 520.661ZM347 520.661C346.996 520.661 346.992 520.661 346.988 520.661L347 515.719L347.012 520.661C347.008 520.661 347.004 520.661 347 520.661Z'
  );
  left: 0;
  /* height: 100% !important; */
  /* width: 133%; */
  /* position: absolute !important; */
  /* width: auto; */
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    clip-path: path(
      'M136 200.657C157.716 200.71 178.619 200.124 196.206 198.903C213.744 197.685 228.134 195.827 236.734 193.288C246.711 190.362 255.801 183.299 258.709 175.605C261.357 168.774 263.338 157.833 264.676 145.029C266.02 132.17 266.732 117.269 266.779 102.433C266.826 87.5968 266.209 72.7916 264.888 60.1242C263.573 47.522 261.543 36.8313 258.672 30.3563C255.409 22.914 246.875 15.5455 236.698 12.7528L236.694 12.7518L236.69 12.7507C218.069 7.72571 177.534 5.34088 136 5.34088C94.4681 5.34088 53.935 7.72548 35.3128 12.75C25.0385 15.4926 16.5842 22.9265 13.3271 30.3591C10.4566 36.8342 8.42703 47.5235 7.11262 60.1242C5.79122 72.7916 5.17413 87.5968 5.22126 102.433C5.26839 117.269 5.97995 132.17 7.32406 145.029C8.66292 157.839 10.6445 168.784 13.2951 175.614H13.2952C16.2741 183.289 25.2749 190.358 35.2689 193.288C43.9039 195.827 58.2921 197.685 75.8225 198.903C93.3999 200.124 114.284 200.71 136 200.657ZM136 200.657C135.999 200.657 135.997 200.657 135.996 200.657L136 198.785L136.005 200.657C136.003 200.657 136.002 200.657 136 200.657Z'
    );
  }

  video {
    height: 100%;
    width: 100%;
    max-width: none;
    width: 133%;
  }
}

.media-wrapper {
  @apply relative overflow-hidden;
}

.media-container {
  clip-path: path(
    'M24.0791 62.5878L24.0744 62.6006L24.0698 62.6133C17.513 80.6121 12.7797 108.901 9.66268 142.208C6.53398 175.641 4.99999 214.54 4.99999 254C4.99999 293.46 6.53398 332.359 9.66269 365.792C12.7792 399.094 17.5116 427.379 24.0668 445.378C31.3441 465.569 50.7699 481.618 69.5117 487.701C77.9718 490.479 92.0381 492.767 109.904 494.678C127.905 496.603 150.155 498.182 175.215 499.427C225.342 501.918 286.894 503.084 348.541 502.995C410.189 502.906 471.991 501.562 522.619 499.027C547.931 497.76 570.489 496.193 588.858 494.331C607.124 492.479 621.56 490.307 630.446 487.753L629.065 482.95L630.446 487.753C649.826 482.181 668.259 465.097 676.009 445.515C682.616 428.862 687.384 401.351 690.499 368.14C693.628 334.774 695.127 295.163 694.992 254C695.127 212.837 693.628 173.19 690.499 139.806C687.384 106.579 682.615 79.0594 676.004 62.4734C668.264 42.9252 649.847 25.677 630.427 20.2413C621.54 17.6894 607.112 15.5198 588.858 13.6694C570.489 11.8074 547.931 10.2404 522.619 8.97291C471.991 6.43772 410.189 5.09373 348.541 5.00472C286.894 4.9157 225.342 6.08153 175.215 8.57262C150.155 9.81799 127.905 11.3968 109.903 13.3222C92.0403 15.2328 77.9753 17.5208 69.5148 20.2979C50.7319 26.3935 31.4834 42.6006 24.0791 62.5878Z'
  );

  //  @apply flex flex-col items-center relative w-full max-w-full;
}
</style>
