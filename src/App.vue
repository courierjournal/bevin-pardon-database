<template>
  <div id="app">
    <main>
      <section class="app-header">
        <h1>Who did Matt Bevin pardon?</h1>
        <p>Gov. Matt Bevin issued more than 250 pardons between his loss to Andy Beshear on Election Day and the end of his term. Bevin has been criticized for several pardons he issued, including to the man convicted on homicide and other charges in a fatal 2014 Knox County home invasion whose brother and sister-in-law hosted a fundraiser for Bevin that raised $21,500. Those pardons are among the more than 670 pardons and commutations Bevin issued during his final two months in office.</p>
      </section>
      <section>
        <h2>Terminology</h2>
        <ul>
          <li>Pardon - the action of forgiving or being forgiven for an error or offense.</li>
          <li>Commutation - the action or process of commuting a judicial sentence.</li>
        </ul>
      </section>
      <section>
        <SearchBar />
        <DataTable :data="data" />
      </section>
    </main>
  </div>
</template>

<script>
import DataTable from "./components/DataTable";
import SearchBar from "./components/SearchBar";
import data from "./data.json";

export default {
  name: "app",
  components: {
    DataTable,
    SearchBar
  },
  data() {
    return {
      data
    };
  }
};
</script>

<style>
@font-face {
  font-family: "Unify Sans";
  src: url(https://www.gannett-cdn.com/gannett-web/global/fonts/unify/UnifySans_W_Bd.woff2);
  font-weight: 800;
}

:root {
  --gannett-blue: #009bff;
  --gannett-grey: #404040;
}

body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 10px;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Unify Sans", sans-serif;
}
h1 {
  font-size: 2.3em !important;
}
h2 {
  font-size: 1.3em;
  border-left: 6px solid var(--gannett-blue);
  padding-left: 8px;
}
p,
ul {
  font-size: 1em;
  line-height: 1.3em;
  margin: 1em;
}

section {
  margin: 3em 0;
}

.app-header {
  text-align: center;
}
.app-header > p {
  font-size: 1.2em;
  max-width: 80%;
  margin: 0 auto;
  line-height: 30px;
  color: #555;
}
</style>
