<script>
  import {data} from "./assets/data.js"
  import Chart from "./lib/Chart.svelte"
  import Button from "./lib/Button.svelte"

  let selectedSort = "wins";
  let sortOptions = ['wins', 'totalRaces', 'year', 'percent'];
	$: sortedData = data.sort((a,b) => (b[selectedSort] - a[selectedSort]))
  
</script>


<main>
  <h1>Most wins <br/><span>in a single F1 season</span></h1>
  <p>The number of races over the calendar year has kept increasing with the evolution of Formula 1 (F1). It has gone from seven races in 1950 to 30 (24+6 sprint races) next year in 2023. Depending on that, a driver has more chances to increase the number of wins per year. This is subsequent in the list of the most number of wins in a single season, where the top five belong to the 21st-century drivers.</p>
  <div class="sortSelection">
    <p>Sort by:</p>
    <div class="segmentedControl">
      {#each sortOptions as  sort, i}
        <Button active={selectedSort === sortOptions[i]} on:click={() => (selectedSort = sortOptions[i])}  sortBy={sort}></Button>
      {/each}
    </div>
  </div>
  <Chart data={sortedData}/>
</main>


<style>
  h1 {
    font-size: 6.4rem;
    line-height: 4.4rem;
    margin: 0 0 16px;
  }
  h1 > span {
    font-size: 4rem;
    font-weight: 500;
  }
  main {
    display: grid;
    position: relative;
    max-width: 660px;
  }
  .sortSelection {
    margin-bottom: 24px;
  }
  .sortSelection p {
    margin: 0 0 4px;
    padding-left: 3px;
    color: hsla(217, 18%, 60%, 1);
  }
  .segmentedControl {
    padding: 2px;
    border: 1px solid hsla(217, 18%, 25%, 1);
    display: inline-block;
    border-radius: 2px;
  }

</style>