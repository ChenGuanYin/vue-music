<template>
  <div class="singer" ref="singer">
    <listview :data="singers" @select="selectSinger" ref="singerList"></listview>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import Listview from "base/listview/listview";
  import {gerSingerList} from "api/singer";
  import Singer from "common/js/singer";
  import {ERR_OK} from "api/config";
  import {mapMutations} from "vuex";
  import {playlistMixin} from 'common/js/mixin';
  const HOT_NAME = "热门";
  const HOT_SINGER_LEN = 10;

  export default {
    mixins: [playlistMixin],
    data() {
      return {
        singers: []
      };
    },
    methods: {
      handlePlaylist(playList) {
        const bottom = playList.length > 0 ? '60px' : 0;
        this.$refs.singer.style.bottom = bottom;
        this.$refs.singerList.refresh();
      },
      selectSinger(singer) {
        this.$router.push(`/singer/${singer.id}`);
        this.setSinger(singer);
      },
      _gerSingerList() {
        gerSingerList().then(res => {
          if (res.code === ERR_OK) {
            this.singers = this._normalizeSinger(res.data.list);
          }
        });
      },
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        };
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(
              new Singer({
                id: item.Fsinger_mid,
                name: item.Fsinger_name
              })
            );
          }
          const key = item.Findex;
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            };
          }
          map[key].items.push(
            new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            })
          );
        });
        let hot = [];
        let ret = [];
        for (let key in map) {
          let val = map[key];
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val);
          } else if (val.title === HOT_NAME) {
            hot.push(val);
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0);
        });
        return hot.concat(ret);
      },
      ...mapMutations({
        setSinger: "SET_SINGER"
      })
    },
    created() {
      this._gerSingerList();
    },
    components: {
      Listview
    }
  };
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  .singer {
    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%;
  }
</style>
