<template>
  <div
    class="bg-custom-yellow z-100 text-custom-charcoal fixed navigation_height h-full inset-x-0 top-0 flex flex-col"
  >
    <div class="overflow-y-scroll flex-1 overflow-x-hidden">
      <div class="flex justify-between items-center">
        <NuxtLink to="/">
          <div
            class="name-wrapper text-black bg-custom-white p-2 m-6 ml-4 md:ml-6"
            @click="$emit('hide-nav')"
          >
            <HeaderNameIcon class="name-icon" />
          </div>
        </NuxtLink>
        <div class="burger-wrapper pointer m-4" @click="$emit('hide-nav')">
          <OpenBurger class="open-burger-icon" />
        </div>
      </div>
      <div
        class="md:mt-6 md:px-20 px-4 overflow-hidden flex flex-col-reverse md:flex-row flex-1"
      >
        <div
          class="mt-11 md:mt-0 pb-2 border-b-2 border-custom-charcoal md:border-none md:mr-3 md:w-2/4"
        >
          <div class="text-custom-purple font-semibold text-cursor">
            Impossible links
          </div>
          <div
            class="mb-20 mt-4 leading-none md:max-w-xs druk-upper-56-40 text-cursor"
          >
            Learn more about our story, best products, stores, and tasty
            recipes.
          </div>
          <div class="grid grid-cols-2 grid-rows-3 md:max-w-xs">
            <a
              href="https://impossiblefoods.com/locations"
              target="_blank"
              class="links-item pointer"
              >Find</a
            >
            <a
              href="https://impossiblefoods.com/sellimpossible"
              target="_blank"
              class="links-item pointer"
              >Sell</a
            >
            <a
              href="https://buy.impossiblefoods.com/"
              target="_blank"
              class="links-item pointer"
              >Buy</a
            >
            <a
              href="https://impossiblefoods.com/food"
              target="_blank"
              class="links-item pointer"
              >Learn</a
            >
            <a
              href="https://impossiblefoods.com/recipes"
              target="_blank"
              class="links-item pointer"
              >Cook</a
            >

            <a
              href="https://impossiblefoods.com/sustainable-food/resources"
              target="_blank"
              class="links-item pointer"
              >Resources</a
            >
          </div>
        </div>
        <div class="md:w-2/4">
          <div class="text-custom-purple font-semibold text-cursor">
            Chapters
          </div>
          <NuxtLink to="/chapter-I">
            <div class="item-nav" @click="$emit('hide-nav')">
              <div class="druk-upper-56-40">THAT AWKWARD CONVO</div>
              <div class="number-style">I</div>
            </div>
          </NuxtLink>
          <NuxtLink to="/chapter-II">
            <div class="item-nav" @click="$emit('hide-nav')">
              <div class="druk-upper-56-40">THE EARTH’S BODY IS CHANGING</div>
              <div class="number-style">II</div>
            </div>
          </NuxtLink>
          <NuxtLink to="/chapter-III">
            <div class="item-nav" @click="$emit('hide-nav')">
              <div class="druk-upper-56-40">CONFUSING FEELINGS</div>
              <div class="number-style">III</div>
            </div>
          </NuxtLink>
          <NuxtLink to="/chapter-IV">
            <div class="item-nav" @click="$emit('hide-nav')">
              <div class="druk-upper-56-40">WHERE DO BURGERS COME FROM?</div>
              <div class="number-style">IV</div>
            </div>
          </NuxtLink>
          <NuxtLink to="/chapter-V">
            <div class="item-nav" @click="$emit('hide-nav')">
              <div class="druk-upper-56-40">WHAT IF I LIKE BOTH?</div>
              <div class="number-style">V</div>
            </div>
          </NuxtLink>
          <NuxtLink to="/chapter-VI">
            <div class="item-nav" @click="$emit('hide-nav')">
              <div class="druk-upper-56-40">ONE DAY, THIS WILL FEEL NORMAL</div>
              <div class="number-style">VI</div>
            </div>
          </NuxtLink>
          <!--          <div class="item-nav pointer border-none">-->
          <!--            <div class="druk-upper-56-40 flex">-->
          <!--              <div>How to start the conversation</div>-->
          <!--              <img src="~/assets/img/Bird.svg" alt="arrow" />-->
          <!--            </div>-->
          <!--            <div class="number-style">B</div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
    <SocialBlock
      color-style="purple-style"
      class="my-4 md:my-3 flex justify-center"
    />
  </div>
</template>

<script>
import OpenBurger from '~/components/icons/OpenBurger'
import HeaderNameIcon from '~/components/icons/HeaderNameIcon'
import SocialBlock from '~/components/icons/social/SocialBlock'

export default {
  name: 'Navigation',
  components: {
    OpenBurger,
    HeaderNameIcon,
    SocialBlock,
  },
}
</script>

<style lang="scss" scoped>
.name-wrapper {
  margin: 23px;
}

.item-nav {
  @apply py-4 md:py-4 flex border-b-2 border-custom-charcoal justify-between;
  transition: all 0.5s ease;
  .number-style {
    font-family: Druk;
    font-size: 56px;
    line-height: 96%;
    color: #ffec00;
    text-shadow: 1px 1px 0 #34323c, 1px -1px 0 #34323c, -1px 1px 0 #34323c,
      -1px -1px 0 #34323c, 1px 0px 0 #34323c, 0px 1px 0 #34323c,
      -1px 0px 0 #34323c, 0px -1px 0 #34323c;
    letter-spacing: 2px;
    transition: all 0.5s ease;
    @media (max-width: 767px) {
      font-size: 40px;
    }
  }
}
.item-nav:hover {
  color: #ab31ff;
  transition: all 0.5s ease;
  .number-style {
    text-shadow: none;
    color: #ab31ff;
    transition: all 0.5s ease;
  }
}

.links-item {
  @apply py-2 font-druk text-3xl;
  transition: all 0.5s ease;
  text-transform: uppercase;
  line-height: 108%;
  letter-spacing: 0.05em;
}

.links-item:hover {
  @apply text-custom-purple;
  transition: all 0.5s ease;
}

.name-icon {
  width: 135px;
  height: 34px;
  @media (max-width: 767px) {
    width: 116px;
    height: 29px;
  }
}
.open-burger-icon {
  width: 60px;
  height: 60px;
  @media (max-width: 767px) {
    width: 23px;
    height: 20px;
  }
}

.open-burger-icon {
  width: 60px;
  height: 60px;
  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
}
.navigation_height {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
</style>
