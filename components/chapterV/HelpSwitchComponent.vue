<template>
  <div class="help-switch-component">
    <div class="help-switch-component__text-wrapper">
      <h5 class="help-switch-component__h5 h4-heading">
        How to help them switch
      </h5>
      <h2 class="help-switch-component__title h1-heading">
        HIT ‘EM IN THE TASTEBUDS
      </h2>
      <p class="help-switch-component__text text-cursor body">
        We made meat from plants so delicious that people won’t even miss meat
        from cows. But tasting is believing! So one of the best ways to get your
        parents on board is by convincing their taste buds! (Plus imagine how
        much better this conversation would be with food.)
      </p>
    </div>
    <div class="list-wrapper">
      <div class="list-wrapper__list list">
        <h2 class="h2-heading mb-12">Here’s what you can do</h2>
        <ol class="list__content">
          <li class="list__item">Offer to make dinner.</li>
          <li class="list__item">
            Make them a delicious, meaty dinner using Impossible™ Burger.
          </li>
          <li class="list__item">Sit them down. Have a dinner moment.</li>
          <li class="list__item">
            Talk to them about climate change (using all the facts and tips you
            now know).
          </li>
          <li class="list__item">
            As you’re clearing the table you can casually tell them that the
            dinner they just enjoyed is how y’all can save the
            planet...together.
          </li>
          <li class="list__item">Boom. Instant bonding moment.</li>
        </ol>
      </div>
      <div class="list-wrapper__list list list_small">
        <h2 class="h2-heading mb-12">MAKE YOUR DINNER MOMENT HAPPEN</h2>
        <ol class="list__content">
          <li class="list__item">
            <span>
              Need help finding Impossible™ products?
              <a
                class="list__link"
                href="https://impossiblefoods.com/grocery"
                target="_blank"
                >Look here.</a
              >
            </span>
          </li>
          <li class="list__item">
            <span>
              Need some recipe inspiration? We got you!
              <a
                href="https://impossiblefoods.com/recipes"
                target="_blank"
                class="list__link"
                >Check this out.</a
              ></span
            >
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelpSwitchComponent',
}
</script>

<style lang="scss" scoped>
.help-switch-component {
  padding: 122px 134px 82px 110px;
  @apply flex flex-col items-center w-full;

  @media (max-width: 1360px) {
    @apply px-8;
  }

  @media (max-width: 1200px) {
    @apply px-4;
  }

  @media (max-width: 1024px) {
    padding: 70px 24px 50px;
  }

  &__text-wrapper {
    max-width: 1026px;
    @apply text-center;
  }

  &__text {
    max-width: 814px;
    @apply mb-20;
  }

  &__h5 {
    @apply text-custom-blue mb-10;
  }

  &__title {
    @apply mb-8;
  }
}

.list-wrapper {
  @apply flex justify-around w-full;

  @media (max-width: 1439px) {
    @apply justify-center items-center;
  }

  @media (max-width: 1439px) {
    @apply flex-col;
  }
}

.list {
  counter-reset: section;
  clip-path: path(
    'M584.401 68.2471C577.368 48.6394 558.555 28.5756 535.873 20.9757C492.972 6.83991 398.731 0 301.5 0C204.269 0 110.028 6.83991 67.1266 20.9757C44.2695 28.4236 25.6322 48.6394 18.5992 68.2471C-7.07107 138.926 -5.31283 616.656 18.5992 691.895C24.9289 711.807 44.6212 731.111 67.1266 739.167C106.511 753.303 200.05 760.294 301.5 759.991C402.95 760.294 496.665 753.303 535.873 739.167C558.379 731.111 578.247 711.807 584.401 691.895C608.313 616.656 610.071 138.926 584.401 68.2471Z'
  );
  width: 603px;
  height: 750px;
  @apply p-20 text-center bg-custom-white;

  @media (max-width: 1024px) {
    clip-path: none;
    height: auto;
    @apply bg-custom-beige w-full p-0 mb-20;
  }

  &_small {
    counter-reset: section;
    clip-path: path(
      'M47.1954 17.8654C33.7796 24.4319 20.0518 41.9971 14.8518 63.1738C5.17994 103.229 0.5 191.219 0.5 282C0.5 372.781 5.17994 460.771 14.8518 500.826C19.9478 522.167 33.7796 539.568 47.1954 546.135C95.5548 570.102 422.423 568.46 473.902 546.135C487.526 540.225 500.734 521.839 506.246 500.826C515.918 464.054 520.701 376.721 520.493 282C520.701 187.279 515.918 99.7816 506.246 63.1738C500.734 42.1613 487.526 23.6111 473.902 17.8654C422.423 -4.46039 95.5548 -6.10205 47.1954 17.8654Z'
    );
    width: 520px;
    height: 563px;
    @apply px-12;

    @media (max-width: 1024px) {
      clip-path: none;
      height: auto;
      @apply bg-custom-beige w-full p-0;
    }

    &__item {
      @apply flex;
      &::before {
        counter-increment: section;
        content: counters(section, '.');
      }
    }
  }
  &__item {
    cursor: url('~/assets/img/cursor-text.svg') 18 10, default;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: #34323c;
    @apply flex mb-6 text-left;

    &::before {
      counter-increment: section;
      content: counters(section, '.');
      padding-top: 3px;
      font-family: Druk Wide, sans-serif;
      font-size: 14px;
      text-align: center;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      box-shadow: 2px 3px 0 #32333d;
      line-height: 1.5;
      display: table;
      @apply bg-custom-yellow mr-5;
    }
  }

  &__link {
    @apply text-custom-blue underline font-bold;
  }
}
</style>
