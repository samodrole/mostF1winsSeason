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
//   $: console.log(width)
    
    </script>
  
  <svelte:head>
      <title>Most wins in a single F1 season</title>
      <meta name="description" content="Most wins in a single F1 season" />
  </svelte:head>

  <main >
    <div class="imageMax">
      <!-- <img src={max} content="Max Verstapen cover" alt="Max Verstapen cover"/> -->
    </div>
    <div class="content" bind:clientWidth={width}>
        <div class="header">
            <h1>Most wins <br/><span>in a single F1 season</span></h1>
            <p>The number of races over the calendar year has kept increasing with the evolution of Formula 1 (F1). It has gone from seven races in 1950 to 30 (24+6 sprint races) next year in 2023. Depending on that, a driver has more chances to increase the number of wins per year. <b>In 2022, Max Verstappen won 15 races</b>, breaking the record for the most number of Grand Prix wins in a season. This is subsequent in the list of the most wins in a single season, where the top five belong to the 21st-century drivers. </p>
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
        <p>Design by: <a href="https://twitter.com/samodrole" target="_blank">Samo Drole</a></p>
        <p>Data source: <a href="https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records#Total_wins:~:text=9%5D%5B10%5D-,Most%20wins%20in%20a%20season,-%5Bedit%5D" target="_blank">Wikipeadia</a></p>
        <p>Image: <a href="https://www.ixpap.com/max-verstappen-wallpapers/" target="_blank">ixpap</a></p>
        <p>Content: <a href="https://khelnow.com/olympic-sports/2022-10-olympics-formula-one-top-five-drivers-with-most-win-in-season#:~:text=Top%205%20drivers%20with%20most%20wins%20in%20a%20single%20F1%20season" target="_blank">khelnow</a></p>
    </div>

  </main>


  <style>
    .imageMax {
      background-image: url("$lib/images/max_img.png");
        background-size: cover;                
        background-repeat: no-repeat;
        background-position: top -140px right;
        position: relative;
    }
    .imageMax::before {
        content: "";
        position: absolute;
        height: 140px;
        top: -140px;
        left: 0;
        width: 400px;
      background-image: url("$lib/images/max_img.png");
        background-size: cover;                
        background-repeat: no-repeat;
        background-position: top right;
    }
      h1 {
        font-size: 4.2rem;
        line-height: 3.8rem;
        margin: 0 0 16px;
        font-weight:700;
        position: relative;
        z-index: 5;
        /* color: #E17237; */
      }
      p {
        font-size: 1.2rem;
        line-height: 1.6rem;
        margin: 0 0 16px;
        color: hsla(217, 18%, 80%, 1);
      }
      .info p:last-child {
        border: none;
      }
      h1::after {
        content: "";
        position: absolute;
        background-image: url("$lib/images/highlight.svg");
        background-repeat: no-repeat;
        left: -8px;
        top: 21px;
        width: 224px;
        height: 20px;
        z-index: -1;
        rotate: -2deg;
      }
      h1 > span {
        font-size: 3.6rem;
        /* color: white; */
        /* font-weight: 500; */
      }
      main {
        display: grid;
        grid-template-columns: 400px auto;
        grid-template-rows: 1fr auto;
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
        grid-column-start: span 3;
        border-top: 1px solid hsla(217, 18%, 18%, 1);
        padding: 8px 0;
      }
      .info p {
        color: hsla(217, 18%, 25%, 1);
        display: inline-block;
        margin: 0 8px 0 0;
        padding-right: 8px;
        border-right: 1px solid hsla(217, 18%, 15%, 1);
      }
      .info:hover p {
        color: hsla(217, 18%, 30%, 1);
        transition: color, 0.25s;
      }
      .info:hover a {
        color: hsla(217, 18%, 30%, 1);
        transition: color, 0.25s;
      }
      .info a {
        color: hsla(217, 18%, 25%, 1);
        transition: color, 0.25s;
      }
      .info a:hover {
        color: hsla(217, 18%, 50%, 1);
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
            grid-template-columns: 1fr;
            grid-template-rows: 1fr auto;
        }
        .imageMax img {
            display: none;
        }
        .imageMax::before {
        height: 400px;
        top: -360px;
        left: 0;
        width: 100%;
    }
	}
    
    </style>