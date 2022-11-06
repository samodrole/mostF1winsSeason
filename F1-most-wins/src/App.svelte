<script>
  import {data} from "./assets/data.js"
  import Chart from "./lib/Chart.svelte"

// Colors 
  const mainBg = "hsla(320, 3%, 50%, 1)";
  const borderColor = "hsla(320, 0%, 100%, 1)";


  let selectedSort = "wins"
	$: sortedData = data.sort((a,b) => (b[selectedSort] - a[selectedSort]))
  
</script>


<main>
  <h1>Top ten most wins in a single F1 season</h1>
  <select bind:value={selectedSort} id="sortBy" class="selector">
    <option value="wins">Wins</option>
    <option value="totalRaces">Total races</option>
    <option value="year">Year</option>
    <option value="percent">Percentage</option>
  </select>
  <Chart data={sortedData}/>
</main>


<style>
  html {
    background-color: var(--mainBg);
  }
  main {
    display: grid;
    max-width: 660px;
    border: "1px solid var(--borderColor)"
  }

</style>