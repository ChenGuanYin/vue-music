import Vue from 'vue';
import Router from 'vue-router';

const Recommend = () => import('components/recommend/recommend');
const Search = () => import('components//search/search');
const Rank = () => import('components/rank/rank');
const Singer = () => import('components/singer/singer');
const SingerDetail = () => import('components/singer-detail/singer-detail');
const Disc = () => import('components/disc/disc');
const TopList = () => import('components/toplist/toplist');
const UserCenter = () => import('components/user-center/user-center');

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    }, {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }, {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    }, {
      path: '/singer',
      component: Singer,
      children: [
        {path: ':id', component: SingerDetail}
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
});
