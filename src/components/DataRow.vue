<template>
  <tr :item="rowData">
    <td>{{rowData.name}}</td>
    <td>{{rowData.type}}</td>
    <td class="truncate-cell">{{rowData.charges}}</td>
    <td class="truncate-cell">{{rowData.bevinComments}}</td>
    <td>
      <button @click="$emit('expand')">+</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "DataRow",
  props: ["rowData"]
};
</script>

<style scoped>
.truncate-cell {
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>