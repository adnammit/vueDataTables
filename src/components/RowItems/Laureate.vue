<template>
  <td class="table-subrows">
    <tr><td>{{ firstname }} {{ surname }}</td></tr>
    <tr><td>{{ motivation }}</td></tr>
  </td>
</template>

<script>
export default {
  name: 'Laureate',
  props: [
    'firstname',
    'surname',
    'motivation'
  ]
};
</script>
