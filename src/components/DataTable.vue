<template>
  <table class="datatable">
    <thead>
      <tr class="datatable-header">
        <th>Name</th>
        <th>Type</th>
        <th>Conviction(s)</th>
        <th>Bevin's Comments</th>
        <th>More</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item,index) in data">
        <tr class="datatable-row" :key="index">
          <td>{{item.name}}</td>
          <td :class="{'truncate-cell': !expanded[index]}">{{item.type}}</td>
          <td :class="{'truncate-cell': !expanded[index]}">{{item.charges}}</td>
          <td :class="{'truncate-cell': !expanded[index]}">{{item.bevinComments}}</td>
          <td>
            <button @click="expandRow(index)">+</button>
          </td>
        </tr>
        <template v-if="expanded[index]">
          <tr :key="index+'ex'">
            <td>Order Date: {{item.orderDate}}</td>
            <td>Conviction Date(s): {{item.convictionDate}}</td>
            <td>Conviction County: {{item.convictionCounty}}</td>
            <td colspan="2">
              Link:
              <a :href="item.link" target="_blank">Full Text [PDF]</a>
            </td>
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
  beforeMount() {
    for (var i = 0, f = this.data.length; i < f; i++) {
      this.$set(this.expanded, i, false);
    }
  },
  methods: {
    expandRow(index) {
      let currentState = !this.expanded[index];
      this.$set(this.expanded, index, currentState);
    },
    expandAll() {}
  }
};
</script>

<style scoped>
table {
  width: 100%;
  table-layout: fixed;
  border-spacing:0;
  font-size:.9em;
}

th:nth-child(1) {
  text-align:left;
  width: 20%;
}

th:nth-child(2) {
  text-align:left;
  width: 10%;
}

th:nth-child(3) {
  text-align:left;
  width: 20%;
}
th:nth-child(4) {
  width: 45%;
}
th:nth-child(5) {
  width: 5%;
}
.expanded-row {
  background-color: #eee;
  text-align: center;
}

.truncate-cell {
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

tbody>tr:nth-child(odd){
  background-color: rgba(0,0,0,.03);
}

th, td{
  padding:15px;
}
</style>