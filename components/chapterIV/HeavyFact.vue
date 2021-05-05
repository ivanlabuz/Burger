<template>
  <div class="flex flex-col items-center px-6 pt-24 text-center pb-14 md:py-28">
    <div class="h1-heading text-custom-white">
      A VERY <span class="text-custom-pink heavy-shadow">HEAVY</span> FACT
    </div>
    <img
      class="mt-5 mb-7 md:mt-10"
      width="640"
      src="~/assets/img/chapterIV/Heavy.png"
      alt=""
    />
    <div class="body text-custom-white">
      The planet is covered with over 1.7 BILLION COWS
    </div>
    <div class="pt-14 pb-4 text-cursor text-custom-white fonts-together">
      Together, all these
    </div>
    <div class="pb-8 big-text text-cursor">
      cows being raised for food (a single species) weigh 10x more than every
      wild terrestrial mammal, bird, reptile and amphibian COMBINED.
    </div>
    <div class="body text-custom-white">
      We’re well on the way to completely replacing Nature with cows.
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeavyFact',
}
</script>

<style lang="scss" scoped>
.heavy-shadow {
  text-shadow: 6px 5px 0 #32333d;
}
.fonts-together {
  font-family: Druk, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 108%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  @media (max-width: 767px) {
    font-size: 20px;
  }
}
.big-text {
  font-family: Druk Wide, sans-serif;
  max-width: 1024px;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 116%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffec00;
  text-shadow: 5px 4px 0px #32333d;
  @media (max-width: 767px) {
    font-size: 28px;
  }
}
</style>
