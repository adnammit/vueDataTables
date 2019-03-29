<template>
  <v-app>
    <nav>
      <!-- <router-link :to="{ name: 'weather-report', params: { }}">Weather Trends</router-link>
      <router-link :to="{ name: 'nobel-report', params: { }}">Nobel Prizes</router-link>
      <router-link :to="{ name: 'dessert-report', params: { }}">Desserts</router-link> -->
    </nav>
    <SearchBar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import SearchBar from './components/SearchBar'

export default {
  name: 'App',
  components: {
    SearchBar
  }
}
</script>
