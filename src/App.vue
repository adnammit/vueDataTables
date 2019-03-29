<template>
  <v-app>
    <SearchBar/>
    <v-content>
      <!-- <DessertReport/> -->
      <WeatherReport/>
      <!-- <NobelReport/> -->
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
// import DessertReport from './components/DessertReport'
import WeatherReport from './components/WeatherReport'
// import NobelReport from './components/NobelReport'
import SearchBar from './components/SearchBar'

export default {
  name: 'App',
  components: {
    // DessertReport,
    WeatherReport,
    // NobelReport,
    SearchBar
  }
}
</script>
