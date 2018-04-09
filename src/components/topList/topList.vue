<template>
  <transition name="slide">
    <music-list :bg-image="bgImage" :title="title" :songs="songs" :rank="rank"></music-list>
  </transition>
</template>
<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list';
  import {mapGetters} from 'vuex'
  import {getMusicList} from 'api/rank';
  import {createSong} from 'common/js/song';
  export default {
    computed: {
      title() {
        return this.topList.topTitle;
      },
      bgImage() {
        if (this.songs.length) {
          return this.songs[0].image
        }
        return '';
      },
      ...mapGetters(['topList'])
    },
    data() {
      return {
        rank: true,
        songs: []
      }
    },
    methods: {
      _getMusicList() {
        getMusicList(this.topList.id).then((res) => {
          this.songs = this._normalizeSongs(res.songlist);
        })
      },
      _normalizeSongs(list) {
        const ret = [];
        list.forEach((item) => {
          const musicData = item.data;
          if (musicData.songid && musicData.albumid) {
            ret.push(createSong(musicData))
          }
        })
        return ret;
      }
    },
    created() {
      if (!this.title) this.$router.push('/rank');
      this._getMusicList();
    },
    components: {
      MusicList
    }
  }
</script>
<style rel="stylesheet/stylus" lang="stylus" scope>
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s;

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
