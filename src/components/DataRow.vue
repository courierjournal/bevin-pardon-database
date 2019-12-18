<template>
  <tr :item="rowData">
    <td>{{rowData.name}}</td>
    <td>{{rowData.type}}</td>
    <td>{{rowData.charges}}</td>
    <td>{{rowData.convictionDate}}</td>
    <td>{{rowData.bevinComments}}</td>
    <td><button @click="$emit('expand')">+</button></td>
  </tr>
</template>

<script>
export default {
  name: "DataRow",
  props: ["rowData"]
};
</script>

<style scoped>
</style>