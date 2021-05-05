<template>
  <div
    class="flex min-w-full transition-all justify-between z-50 items-center"
    :class="{
      'is-open-nav': isOpenNav,
      'header-wrapper': isBorder,
      'fixed-header': isHeaderFixed,
      'absolut-header': !isHeaderFixed,
    }"
  >
    <NuxtLink
      to="/"
      :class="`${chapter ? 'white-index-background' : 'index-background'}`"
      class="name-wrapper p-2 m-6 ml-4 md:ml-6"
    >
      <HeaderNameIcon class="name-icon" />
    </NuxtLink>
    <div
      :class="`${chapter ? 'white-index-background' : 'index-background'}`"
      class="burger-wrapper pointer m-4"
      @click="showNav"
    >
      <HeaderBurgerIcon class="burger-icon" />
    </div>
    <Navigation v-if="isOpenNav" @hide-nav="hideNav" />
  </div>
</template>

<script>
import HeaderBurgerIcon from '~/components/icons/HeaderBurgerIcon'
import HeaderNameIcon from '~/components/icons/HeaderNameIcon'
import Navigation from '~/components/Navigation'
export default {
  name: 'Header',
  components: {
    HeaderBurgerIcon,
    HeaderNameIcon,
    Navigation,
  },
  props: {
    isBorder: { type: Boolean, default: false },
    chapter: { type: Boolean, default: false },
  },
  data() {
    return {
      isOpenNav: false,
      currentPositionY: 0,
      isHeaderFixed: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    showNav() {
      document.body.style.overflow = 'hidden'
      this.isOpenNav = true
    },
    hideNav() {
      document.body.style.overflow = 'auto'
      this.isOpenNav = false
    },
    handleScroll() {
      if (window.scrollY > this.currentPositionY || window.scrollY <= 0) {
        this.isHeaderFixed = false
      } else {
        this.isHeaderFixed = true
      }
      this.currentPositionY = window.scrollY
    },
  },
}
</script>

<style lang="scss" scoped>
.is-open-nav {
  z-index: 1000 !important;
}
.header-wrapper {
  color: black;
  border-bottom: 2px solid rgba($color: #ffffff, $alpha: 0.3);
  @media (max-width: 767px) {
    border-bottom: none;
  }
}
.white-index-background {
  background: white;
  border-color: white !important;
}
.index-background {
  background: #ffec00;
  border-color: #ffec00 !important;
}
.burger-wrapper {
  padding: 15px 13px 16px;
  border: 2px solid;
  border-radius: 50%;
  @media (max-width: 767px) {
    padding: 7.5px 6.5px 8.5px;
  }
}
.name-wrapper {
  margin: 23px;
}
.name-icon {
  width: 135px;
  height: 34px;
  @media (max-width: 767px) {
    width: 116px;
    height: 29px;
  }
}
.burger-icon {
  width: 30px;
  height: 25px;
  @media (max-width: 767px) {
    width: 23px;
    height: 20px;
  }
}
.fixed-header {
  position: fixed;
  top: 0;
}
.absolut-header {
  position: absolute;
  top: 0;
}
</style>
