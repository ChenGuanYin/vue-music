<template>
  <transition name="slider">
    <music-list :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>
<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list';
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      title() {
        return this.disc.dissname
      },
      bgImage() {
        return this.disc.imgurl
      },
      ...mapGetters(['disc'])
    },
    created() {
      if (!this.title) {
        this.$router.push('/recommend')
      }
    },
    components: {
      MusicList
    }
  }
</script>
<style rel="stylesheet/stylus" lang="stylus" scope>
  .slider-enter-active, .slider-leave-active
    transition: all 0.5s;

  .slider-enter, .slider-leave-to
    transform: translate3d(100%, 0, 0)
</style>
