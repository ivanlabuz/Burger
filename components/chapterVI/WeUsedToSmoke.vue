<template>
  <div class="cigarets py-24 md:py-28 px-6">
    <div class="cigarets__title h1-heading text-custom-blue">
      We used to smoke cigarettes... everywhere!
    </div>
    <div class="cigarets__img-block mt-14 mb-10">
      <div class="h4-heading text-custom-charcoal">50 years ago</div>
      <img
        class="my-5 md:mt-4"
        width="466"
        src="~/assets/img/chapterVI/Cigarets.png"
        alt=""
      />
      <div class="h4-heading text-custom-charcoal">
        the average American smoked more than 10 cigarettes every day.
      </div>
    </div>
    <div class="cigarets__sub-text body text-custom-charcoal">
      Professors would smoke in class, parents would smoke in the car with their
      kids. It was just...normal. Then we learned about the risks and realized
      that wasn’t such a good idea. So we changed our ways, and now it feels
      almost crazy we did!
      <span class="font-bold"
        >(One day soon, meat from animals is going to feel just as crazy.)</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeUsedToSmoke',
}
</script>

<style lang="scss" scoped>
.cigarets {
  @apply flex items-center flex-col text-center w-full;
  background-image: url('~/assets/img/chapterVI/CigaretsBg.png');
  background-blend-mode: exclusion;
  background-size: contain;
  &__title {
    max-width: 1025px;
  }
  &__img-block {
    max-width: 466px;
  }
  &__sub-text {
    max-width: 814px;
  }
}
</style>
