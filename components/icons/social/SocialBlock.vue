<template>
  <div class="flex">
    <a
      href="https://twitter.com/ImpossibleFoods"
      target="_blank"
      :class="colorStyle + ' ' + 'pointer'"
    >
      <Twitter />
    </a>
    <a
      href="https://www.facebook.com/ImpossibleFoods/"
      target="_blank"
      :class="colorStyle + ' ' + 'pointer'"
    >
      <Facebook />
    </a>
    <a
      href="https://www.instagram.com/impossible_foods"
      target="_blank"
      :class="colorStyle + ' ' + 'pointer'"
    >
      <Instagram />
    </a>
    <a
      href="https://www.youtube.com/channel/UCDOAr7cjp7c__9D_PIF3hsA"
      target="_blank"
      :class="colorStyle + ' ' + 'pointer'"
    >
      <Youtube />
    </a>
    <a
      href="https://medium.com/impossible-foods "
      target="_blank"
      :class="colorStyle + ' ' + 'pointer'"
    >
      <M />
    </a>
    <a
      href="https://www.linkedin.com/company/impossible-foods-inc./"
      target="_blank"
      :class="colorStyle + ' ' + 'pointer'"
    >
      <IN />
    </a>
    <a
      href="https://open.spotify.com/user/prsuztlf5uln58u9oj7x7kaff?si=smn-c1YFTrWzfECLTRpuTA"
      target="_blank"
      :class="colorStyle + ' ' + 'pointer'"
    >
      <Spotify />
    </a>
  </div>
</template>

<script>
import Facebook from '~/components/icons/social/Facebook'
import IN from '~/components/icons/social/IN'
import Instagram from '~/components/icons/social/Instagram'
import M from '~/components/icons/social/M'
import Spotify from '~/components/icons/social/Spotify'
import Twitter from '~/components/icons/social/Twitter'
import Youtube from '~/components/icons/social/Youtube'

export default {
  name: 'SocialBlock',
  components: {
    Facebook,
    IN,
    Instagram,
    M,
    Spotify,
    Twitter,
    Youtube,
  },
  props: {
    colorStyle: { type: String, default: `white-style` },
  },
}
</script>

<style lang="scss" scoped>
.white-style {
  @apply p-3 md:p-3.5 md:mx-3;
  transition: all 0.5s ease;
  color: white;
  border-radius: 50%;
}
.white-style:hover {
  transition: all 0.5s ease;
  color: #34323c;
  background: #ffec00;
}
.purple-style {
  @apply p-3 md:p-3.5 md:mx-3;
  transition: all 0.5s ease;
  color: #34323c;
  border-radius: 50%;
}
.purple-style:hover {
  transition: all 0.5s ease;
  color: white;
  background: #ab31ff;
}
</style>
