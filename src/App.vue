<template>
  <div id="app">
    <c-header></c-header>
    <tabs></tabs>   
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>  
  </div>
</template>

<script >
import CHeader from "components/c-header/c-header";
import Tabs from "components/tabs/tabs";
import player from "components/player/player";

export default {
  name: "app",
  components: {
    CHeader,
    Tabs,
    player
  }
};
</script>

