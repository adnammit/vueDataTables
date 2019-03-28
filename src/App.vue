<template>
  <v-app>
    <SearchBar/>
    <v-content>
      <DessertReport/>
    </v-content>
  </v-app>
</template>

<script>
import DessertReport from './components/DessertReport'
import SearchBar from './components/SearchBar'

export default {
  name: 'App',
  components: {
    DessertReport,
    SearchBar
  }
}
</script>
