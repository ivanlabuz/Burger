<template>
  <div class="biodiversity-fact-component">
    <div class="bg-wrapper" data-v-sticky-container>
      <img
        v-sticky
        class="biodiversity-fact-component__elephants"
        src="~/assets/img/chapterII/elephants.gif"
        alt=""
      />
    </div>
    <div class="biodiversity-fact-component__vertical-wrapper">
      <h2 class="biodiversity-fact-component__title h1-heading">
        BIODIVERSITY FACT
      </h2>
      <p class="biodiversity-fact-component__text text-cursor">
        The total populations of
        <span class="opacity-80 font-extrabold">wild mammals,</span><br />
        <span class="opacity-70 font-extrabold">birds, reptiles,</span><br />
        <span class="opacity-50 font-extrabold">amphibians and fish</span><br />
        living on earth today are
      </p>
      <p
        class="biodiversity-fact-component__text wide-accent text-cursor text-custom-yellow"
      >
        less than ⅓ of their numbers just 50 years ago
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BiodiversityFactComponent',
  data: () => ({
    offset: { top: 10, bottom: 30 },
  }),
}
</script>

<style lang="scss" scoped>
.biodiversity-fact-component {
  display: flex;
  justify-content: center;
  width: 100%;
  @apply py-16 px-4 relative;

  &__elephants {
    width: 100%;
    height: auto;
  }

  &__vertical-wrapper {
    max-width: 814px;
  }

  &__title {
    @apply text-center mb-16 text-custom-charcoal;
  }

  &__text {
    font-family: Druk, sans-serif;
    font-size: 80px;
    line-height: 108%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    &_opacity-text {
    }
    @media (max-width: 767px) {
      font-size: 56px;
    }
  }
}

.bg-wrapper {
  mix-blend-mode: darken;
  @apply absolute top-0 bottom-0;
  left: 50%;
  width: 700px;
  margin-left: -350px;
  z-index: -1;
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    margin-left: 0;
  }
}
</style>
