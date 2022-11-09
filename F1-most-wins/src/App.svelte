<script>
  import {data} from "./assets/data.js"
  import Chart from "./lib/Chart.svelte"

  let selectedSort = "wins";
  let sortOptions = ['wins', 'totalRaces', 'year', 'percent'];
	$: sortedData = data.sort((a,b) => (b[selectedSort] - a[selectedSort]))
  
</script>


<main>
  <h1>Most wins in a single F1 season</h1>

  <select bind:value={selectedSort} id="sortBy" class="selector">
    <option value="wins">Wins</option>
    <option value="totalRaces">Total races</option>
    <option value="year">Year</option>
    <option value="percent">Percentage</option>
  </select>
  <Chart data={sortedData}/>
</main>


<style>
  h1 {
    font-size: 3.2rem;
  }
  main {
    display: grid;
    position: relative;
    max-width: 660px;
  }

</style>