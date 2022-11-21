<script>
    import {data} from "$lib/images/data.js"
    import Chart from "./Chart.svelte"
    import Button from "./Button.svelte"
    import max from '$lib/images/max_img.png';
    import './styles.css';

    let selectedSort = "wins";
  let sortOptions = ['wins', 'totalRaces', 'year', 'percent'];
	$: sortedData = data.sort((a,b) => (b[selectedSort] - a[selectedSort]))
  let width;
  $: console.log(width)
    
    </script>
  
  <svelte:head>
      <title>Most wins in a single F1 season</title>
      <meta name="description" content="Most wins in a single F1 season" />
  </svelte:head>


  <main >
    <div class="imageMax">
      <img src={max} content="Max Verstapen cover" alt="Max Verstapen cover"/>
    </div>
    <div class="content" bind:clientWidth={width}>
        <div class="header">
        <h1>Most wins <br/><span>in a single F1 season</span></h1>
        <p>The number of races over the calendar year has kept increasing with the evolution of Formula 1 (F1). It has gone from seven races in 1950 to 30 (24+6 sprint races) next year in 2023. Depending on that, a driver has more chances to increase the number of wins per year. This is subsequent in the list of the most number of wins in a single season, where the top five belong to the 21st-century drivers.</p>
        </div>
        <div class="chart">
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
    </div>
    <div class="info">
        <p>Design by: Samo Drole  |  Data resoruces: link  |  Image by: Samo Drole</p>
    </div>

  </main>


  <style>
    /* .imageMax {
      background-image: url({max});
        background-size: cover;                
        background-repeat: no-repeat;
        background-position: center center;
    } */
      h1 {
        font-size: 4.2rem;
        line-height: 4.6rem;
        margin: 0 0 16px;
        font-weight:700;
      }
      p {
        font-size: 1.2rem;
        line-height: 1.6rem;
        margin: 0 0 16px;
        color: hsla(217, 18%, 80%, 1);
      }
      /* h1 > span {
        font-size: 4rem;
        font-weight: 500;
      } */
      main {
        display: grid;
        grid-template-columns: 300px 1fr 40px;
        gap: 8px;
        position: relative;
      }
      .imageMax{
        grid-column-start: 1;
        grid-column-end: 2;
      }
      .header {
        margin-bottom: 24px;
      }
      .content {
        grid-column-start: 2;
        grid-column-end: 3;
        width: 100%;
      }
      .info {
        grid-column-start: 3;
        border-left: 1px solid hsla(217, 18%, 25%, 1);
        padding: 0 8px;
      }
      .info p {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        color: hsla(217, 18%, 25%, 1);
        display: inline-block;
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

      @media (max-width:600px) {
        .content {
            grid-column-start: 1;
        }
        main {
            display: grid;
            grid-template-columns: 1fr 40px;
            gap: 8px;
            position: relative;
        }
        .imageMax img {
            display: none;
        }
	}
    
    </style>