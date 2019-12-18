<template>
  <div id="app">
    <SearchBar />
    <DataTable :data="data" />
  </div>
</template>

<script>
import DataTable from "./components/DataTable";
import SearchBar from "./components/SearchBar";
import data from "./data.json";

export default {
  name: "app",
  components: {
    DataTable, SearchBar
  },
  data() {
    return {
      data
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1080px;
  margin: 0 auto;
}
</style>
