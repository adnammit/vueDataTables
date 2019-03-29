<template>
    <div class="data-table">
      <v-layout v-resize="onResize" column style="padding-top:56px">
        <v-data-table :headers="headers" :items="reportData" :search="search" :pagination.sync="pagination" :hide-headers="isMobile" :class="{mobile: isMobile}">
          <template slot="items" slot-scope="props">
            <tr>
            <!-- <tr v-if="!isMobile"> -->
              <!-- <td>{{ props.item.year }}</td> -->
              <td>{{ props.item.year }}</td>
              <td>{{ props.item.category }}</td>
              <td>{{ props.item.overallMotivation }}</td>
              <!-- <td class="text-xs-right">{{ props.item.laureates }}</td> -->
              <!-- <td class="text-xs-right"> -->
              <div v-for="person in props.item.laureates" v-bind:key="person" style="width: 100%;">
                <Laureate
                  :firstname="person.firstname"
                  :surname="person.surname"
                  :motivation="person.motivation"
                ></Laureate>
              </div>
            </tr>
            <!-- <tr v-else>
              <td>
                <ul class="flex-content">
                  <li class="flex-item" data-label="Name">{{ props.item.year }}</li>
                  <li class="flex-item" data-label="Calories">{{ props.item.calories }}</li>
                  <li class="flex-item" data-label="category (g)">{{ props.item.category }}</li>
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
import rawData from '../nobel.json'
import Laureate from './RowItems/Laureate'

export default {
  name: 'NobelReport',
  components: {
    Laureate
  },
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
