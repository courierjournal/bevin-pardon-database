<template>
  <table class="datatable">
    <thead>
      <tr class="datatable-header">
        <th>Name</th>
        <th>Type</th>
        <th>Conviction(s)</th>
        <th>Conviction Year(s)</th>
        <th>Bevin's Comments</th>
        <th>Expand</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item,index) in data">
        <DataRow class="datatable-row" :key="index" :rowData="item" @expand="expandRow(index)" />
        <template v-if="expanded[index]">
          <tr :key="index+'ex'">
            <td colspan="6"><div>Expanded Row</div></td>
          </tr>
        </template>
      </template>
    </tbody>
  </table>
</template>

<script>
import DataRow from "./DataRow";
export default {
  name: "DataTable",
  components: { DataRow },
  props: ["data"],
  data() {
    return {
      expanded: {}
    };
  },
  methods: {
    expandRow(index) {
      console.log("expanded", index);
      let state = true;
      if(index in this.expanded){
          if (this.expanded[index] === true){
              console.log('fired')
              state = false;
          }
      }
      this.$set(this.expanded, index, state);
    },
    expandAll(){

    }
  }
};
</script>

<style scoped>

</style>