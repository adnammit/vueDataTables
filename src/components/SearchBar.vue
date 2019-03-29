<template>
  <v-toolbar app dark color="primary" fixed>
    <v-toolbar-title class="white--text">DATA TABLES</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'weather-report', params: { }}">Weather Trends</router-link>
    <router-link :to="{ name: 'nobel-report', params: { }}">Nobel Prizes</router-link>
    <router-link :to="{ name: 'dessert-report', params: { }}">Desserts</router-link>
    <v-spacer></v-spacer>
    <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    <v-menu offset-y :nudge-left="170" :close-on-content-click="false">
      <v-btn icon slot="activator">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile  v-for="(item) in headers" :key="item.value" @click="changeSort(item.value)">
          <v-list-tile-title>{{ item.text }}<v-icon v-if="pagination.sortBy === item.value">{{pagination.descending ? 'arrow_downward':'arrow_upward'}}</v-icon>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'SearchBar',
  data: () => ({
    pagination: {
      sortBy: 'name'
    },
    selected: [],
    search: '',
    isMobile: false,
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        value: 'name'
      },
      {
        text: 'Calories',
        value: 'calories'
      },
      {
        text: 'Fat (g)',
        value: 'fat'
      },
      {
        text: 'Carbs (g)',
        value: 'carbs'
      },
      {
        text: 'Protein (g)',
        value: 'protein'
      },
      {
        text: 'Iron (%)',
        value: 'iron'
      }
    ]
  }),

  methods: {
    changeSort(column) {
      console.log(column);
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  }
};
</script>
