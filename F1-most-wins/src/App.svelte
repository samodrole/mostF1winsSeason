<script>
  import {data} from "./assets/data.js"
  import Chart from "./lib/Chart.svelte"
  import Button from "./lib/Button.svelte"

  let selectedSort = "wins";
  let sortOptions = ['wins', 'totalRaces', 'year', 'percent'];
	$: sortedData = data.sort((a,b) => (b[selectedSort] - a[selectedSort]))
  let width;
  $: console.log(width)
  
</script>

<main >
  <div class="imageMax">
    <!-- <img src="/src/assets/max_img.png"/> -->
  </div>
  <div class="header">
    <h1>Most wins <br/><span>in a single F1 season</span></h1>
    <p>The number of races over the calendar year has kept increasing with the evolution of Formula 1 (F1). It has gone from seven races in 1950 to 30 (24+6 sprint races) next year in 2023. Depending on that, a driver has more chances to increase the number of wins per year. This is subsequent in the list of the most number of wins in a single season, where the top five belong to the 21st-century drivers.</p>
  </div>
  <div class="chart" bind:clientWidth={width}>
    <div class="sortSelection">
      <p>Sort by:</p>
      <div class="segmentedControl">
        {#each sortOptions as  sort, i}
          <Button active={selectedSort === sortOptions[i]} on:click={() => (selectedSort = sortOptions[i])}  sortBy={sort}></Button>
        {/each}
      </div>
    </div>
    <Chart data={sortedData} {width} height={460}/>
  </div>
</main>


<style>
/* .imageMax {
  background-image: url("./assets/max_img.png");
    background-size: cover;                
    background-repeat: no-repeat;
    background-position: center center;
} */
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
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-rows: repeat(3, [col-start] 1fr);
    position: relative;
    background-image: url("./assets/max_img.png");
    background-size: contain;                
    background-repeat: no-repeat;
    background-position: left top;
  }
  .imageMax{
    grid-area: 1 / 1 / 4 / 5;
    /* border: 1px solid red; */
  }
  .chart {
    grid-area: 2 / 5 / 4 / 13;
  }
  .header {
    grid-area: 1 / 5 / 2 / 13;
  }
  .imageMax img {
    width: 100%;
    height: 100%;
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