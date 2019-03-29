<template>
    <div class="data-table">
      <v-layout v-resize="onResize" column style="padding-top:56px">
        <v-data-table :headers="headers" :items="reportData" :search="search" :pagination.sync="pagination" :hide-headers="isMobile" :class="{mobile: isMobile}">
          <template slot="items" slot-scope="props">
            <tr>
            <!-- <tr v-if="!isMobile"> -->
              <!-- <td>{{ props.item.name }}</td> -->
              <td class="text-xs-right">{{ props.item.date }}</td>
              <td class="text-xs-right">{{ props.item.temperaturemin }}</td>
              <td class="text-xs-right">{{ props.item.temperaturemax }}</td>
              <td class="text-xs-right">{{ props.item.avgwindspeed }}</td>
              <td class="text-xs-right">{{ props.item.fastest2minwindspeed }}</td>
              <td class="text-xs-right">{{ props.item.rain }}</td>
              <td class="text-xs-right">{{ props.item.precipitation }}</td>
              <td class="text-xs-right">{{ props.item.drizzle }}</td>
              <td class="text-xs-right">{{ props.item.mist }}</td>
              <td class="text-xs-right">{{ props.item.freezingrain }}</td>
              <td class="text-xs-right">{{ props.item.freezingfog }}</td>
              <td class="text-xs-right">{{ props.item.snow }}</td>
              <td class="text-xs-right">{{ props.item.snowdepth }}</td>
              <td class="text-xs-right">{{ props.item.snowfall }}</td>
              <td class="text-xs-right">{{ props.item.ice }}</td>
              <td class="text-xs-right">{{ props.item.fog }}</td>
              <td class="text-xs-right">{{ props.item.fogground }}</td>
              <td class="text-xs-right">{{ props.item.hail }}</td>
              <td class="text-xs-right">{{ props.item.dust }}</td>
              <td class="text-xs-right">{{ props.item.thunder }}</td>
              <td class="text-xs-right">{{ props.item.glaze }}</td>
            </tr>
            <!-- <tr v-else>
              <td>
                <ul class="flex-content">
                  <li class="flex-item" data-label="Name">{{ props.item.name }}</li>
                  <li class="flex-item" data-label="Calories">{{ props.item.calories }}</li>
                  <li class="flex-item" data-label="Fat (g)">{{ props.item.fat }}</li>
                  <li class="flex-item" data-label="Carbs (g)">{{ props.item.carbs }}</li>
                  <li class="flex-item" data-label="Protein (g)">{{ props.item.protein }}</li>
                  <li class="flex-item" data-label="Iron (%)">{{ props.item.iron }}</li>
                </ul>
              </td>
            </tr> -->
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
      </v-layout>
    </div>
</template>

<script>
import rawData from '../weather.json'
export default {
  name: 'WeatherReport',
  data: () => ({
    pagination: {
      sortBy: 'name'
    },
    selected: [],
    search: '',
    isMobile: false,
    headers: rawData.headers,
    reportData: rawData.data
  }),

  methods: {
    onResize() {
      if (window.innerWidth < 769)
        this.isMobile = true;
      else
        this.isMobile = false;
    },
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.reportData.slice()
    },
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
