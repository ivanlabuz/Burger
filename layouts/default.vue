<template>
  <div class="flex min-h-screen flex-col overflow-x-hidden">
    <Nuxt class="flex-1" />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
export default {
  name: 'DefaultLayouts',
  components: {
    Footer,
  },
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
