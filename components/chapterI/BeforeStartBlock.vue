<template>
  <div class="flex flex-col relative items-center bg-custom-gray">
    <div
      class="h4-heading text-custom-burgundy mt-14 md:mt-28 md-5 font-40 mb-h4"
    >
      Before you start
    </div>
    <div
      class="h1-heading max-w-xs md:max-w-3xl mb-10 md:mb-18 text-center text-custom-charcoal"
    >
      Here’s some helpful tips to keep in mind
    </div>
    <div class="wrapper-block mx-10 md:mx-20">
      <BeforeStartElement class="first">
        <template #title>
          Use the
          <span class="text-custom-light-blue shadow-for-text">facts</span>
        </template>
        <template #text>
          Everyone loves facts. You can’t argue with them (that’s kind of the
          point). That’s why we loaded this guide with lots of facts that you
          can share (plus lots of sources if they want it straight from a
          scientist’s mouth!)
        </template>
      </BeforeStartElement>
      <BeforeStartElement class="second">
        <template #title>
          Bring
          <span class="text-custom-peach shadow-for-text">solutions</span>
        </template>
        <template #text>
          A problem is frustrating. But a solution is empowering. Climate change
          conversations always go better when they end with "and here’s what you
          can do about it!”
        </template>
      </BeforeStartElement>
      <BeforeStartElement class="third">
        <template #title>
          Make it about
          <span class="text-custom-green shadow-for-text">your</span> future
        </template>
        <template #text>
          Ask them how they want to be remembered. If you want kids someday,
          what stories will you tell them about their grandparents? You’re gonna
          be here awhile, so help them understand that taking care of the planet
          is like taking care of you.
        </template>
      </BeforeStartElement>
      <BeforeStartElement class="fourth">
        <template #title>
          <span class="text-custom-pink shadow-for-text">Persistence</span
          ><br />
          is key
        </template>
        <template #text>
          You may have to have this conversation with them more than once. AND
          THAT’S OK! Change can take time, and slow progress is better than no
          progress. But don’t give up. Find multiple ways to show them you care,
          and that it’s important that they do too.
        </template>
      </BeforeStartElement>
      <BeforeStartElement class="fifth">
        <template #title>
          Make it
          <span class="text-custom-purple shadow-for-text">exciting</span>
        </template>
        <template #text>
          Stopping climate change doesn’t have to be painful. It means creating
          a future that’s cleaner, healthier and more beautiful. Making that
          future possible should be something we look forward to, not something
          we dread.
        </template>
      </BeforeStartElement>
    </div>
    <div class="relative">
      <div
        class="title text-cursor text-right text-custom-charcoal md:text-center md:m-6 absolute top-2 md:static"
      >
        Who doesn’t want <br class="block md:hidden" />
        <span class="text-custom-light-blue shadow-for-text"
          >to live here?
        </span>
      </div>
      <img
        class="img-wrapper hidden md:block"
        src="~/assets/img/chapterI/BeforeStartBlock.png"
        alt=""
      />
      <img
        class="img-wrapper-small block md:hidden"
        src="~/assets/img/chapterI/BeforeStartBlock1.png"
        alt=""
      />
    </div>
    <div class="w-full h-80 md:h-60 bg-white"></div>
    <div
      class="black-wrapper bg-custom-charcoal absolute bottom-0 px-4 my-2 mx-4 text-center p-9"
    >
      <div class="text-custom-yellow tracking-wider h3-heading">
        If they see that you are really passionate about something, they’ll pay
        attention.
      </div>
      <div class="h3-heading text-white pt-4">
        Remember you love the planet, and they love you. So use that to your
        advantage! You can be the domino that gets them to take action at home,
        at their work, with their friends, and who knows where else.
      </div>
    </div>
  </div>
</template>

<script>
import BeforeStartElement from '~/components/chapterI/BeforeStartElement'
export default {
  name: 'BeforeStartBlock',
  components: {
    BeforeStartElement,
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-family: Druk, sans-serif;
  font-size: 80px;
  line-height: 108%;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  @media (max-width: 767px) {
    font-size: 56px;
    line-height: 96%;
    right: 24px;
  }
}
.wrapper-block {
  counter-reset: section;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 5px 40px;
  grid-template-areas:
    'first second'
    'third fourth'
    'fifth fifth';
  .first {
    grid-area: first;
  }
  .second {
    grid-area: second;
  }
  .third {
    grid-area: third;
  }
  .fourth {
    grid-area: fourth;
  }
  .fifth {
    margin-left: auto;
    margin-right: auto;
    grid-area: fifth;
  }
  @media (max-width: 767px) {
    display: block;
  }
  div::before {
    counter-increment: section;
    content: '0' counter(section);
    font-family: Druk, sans-serif;
    font-size: 32px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #870d4f;
    @media (min-width: 768px) {
      font-size: 28px;
      letter-spacing: 0.05em;
    }
  }
}
.img-wrapper {
  max-width: 685px;
  width: 100%;
  margin: 0 auto;
  padding: 31px 10px 345px 10px;

  @media (max-width: 769px) {
    padding-bottom: 215px;
  }
}

.img-wrapper-small {
  max-width: 409px;
  width: 100%;
  padding: 68px 10px 360px 10px;

  @media (max-width: 320px) {
    padding-bottom: 480px;
  }
}
.shadow-for-text {
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 1);
}
.black-wrapper {
  max-width: 822px;
}

.mb-h4 {
  margin-bottom: 19px;
  @media (min-width: 768px) {
    margin-bottom: 31px;
  }
}
</style>
