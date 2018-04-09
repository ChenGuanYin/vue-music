import { playMode } from "common/js/config";
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache';

const state = {
    singer: {},         // 歌手信息
    playing: false,     //  播放 暂停/播放
    fullScreen: false,  // 是否在全屏播放
    playList: [],       // 播放列表
    sequenceList: [],   // 是否是顺序播放
    mode: playMode.sequence,    // 播放模式
    currentIndex: -1,    // 当前播放索引
    disc: {},              // 热门歌单信息
    topList: {},            // 排行信息
    searchHistory: loadSearch(),       // 搜索历史
    playHistory: loadPlay(),         // 播放历史
    favoriteList: loadFavorite()              // 收藏列表

}
export default state
