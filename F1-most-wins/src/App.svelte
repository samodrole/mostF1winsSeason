<script>
  import {data} from "./assets/data.js"
  import Chart from "./lib/Chart.svelte"
  import Button from "./lib/Button.svelte"

  let selectedSort = "wins";
  let sortOptions = ['wins', 'totalRaces', 'year', 'percent'];
	$: sortedData = data.sort((a,b) => (b[selectedSort] - a[selectedSort]))
  
</script>


<main>
  <h1>Most wins in a single F1 season</h1>
  <div class="sortSelection">
    {#each sortOptions as  sort, i}
      <Button active={selectedSort === sortOptions[i]} on:click={() => (selectedSort = sortOptions[i])}  sortBy={sort}></Button>
    {/each}
  </div>
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