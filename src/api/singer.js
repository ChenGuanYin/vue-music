import jsonp from 'common/js/jsonp';
import { commonParams, options } from './config';

export function gerSingerList() {
    const url = "https://c.y.qq.com/v8/fcg-bin/v8.fcg";
    const data = Object.assign({}, commonParams, {
        channel: "singer",
        page: "list",
        key: "all_all_all",
        pagesize: "100",
        pagenum: "1",
        g_tk: "5381",
        loginUin: "0",
        hostUin: '0',
        platform: "yqq",
        needNewCode: '0'
    });
    return jsonp(url, data, options);
}

export function getSingerDetail(singer) {
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg";
    const data = Object.assign({}, commonParams, {
        singermid: singer,
        g_tk: 1928093487,
        platform: "yqq",
        order: "listen",
        begin: 0,
        num: 100,
        songstatus: 1
    })
    return jsonp(url, data, options);
}