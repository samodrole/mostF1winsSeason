<script>
   import LineChart from "./LineChart.svelte"
  export let data;
  export let xScale;
  export let yScale;
  export let xPosition = 0;
  export let yPosition = 0;
  export let backgroundColor;
  export let hoverEffect;
  export let width;

  
  $: console.log(width)
</script>

<div class="tooltip" style="{xPosition < 200 ? `left:${xPosition}px` : `left:${xPosition -300}px`}; top:{yPosition - 210}px;">
    <h2>{data.driver}</h2>
    <div class="winStats">
        <div>
            <p>{data.wins}</p>
            <span>wins</span>
        </div>
        <div>
            <p>{data.percent}%</p>
            <span>win rate</span>
        </div>
        <div>
          <p>{data.positions.filter(d => d === 20).length}</p>
          <span>DNF</span>
      </div>
    </div>
    <div class="{data.team === "Ferarri" ? "ferarri graphics" : data.team === "Red Bull" ? "redBull graphics" : "mercedes graphics"}"></div>
    <div class="drivingInfo">
      <p>{data.year} individual race results</p>
      <LineChart data={data} width=260 height=60/>
  </div>
</div>

<style>
  .tooltip {
    position: relative;
    overflow: hidden;
    padding: 16px 8px 8px 42px;
    background-color: #212731;
    position: absolute;
    border-radius: 8px;
    box-shadow: 0 0 16px hsla(320, 0%, 10%, .6);
    pointer-events: none;
    width: 260px;
    z-index: 15;
  }
  h2 {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    color: hsla(0, 0%, 100%, 1);
  }
  .drivingInfo {
    padding:0;
    margin: 0;
  }
  .drivingInfo p {
    padding: 0;
    margin: 0 0 0.6rem;
    color: hsla(217, 18%, 60%, 1);
  }
  .winStats {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0;
  }
  .winStats div {
    flex-grow: 1;
    text-align: center;
    padding: 1rem;
    border-top: 1px solid #343d4b;
    border-bottom: 1px solid hsl(217, 18%, 25%);
  }
  .winStats div p {
    font-size: 1.6rem;
    font-weight: 700;
    color: hsla(0, 0%, 100%, 1);
    padding: 0.2rem 0;
    margin: 0.2rem 0;
  }
  .winStats div {
    border-right: 1px solid #343d4b;
  }
  .winStats div:last-child {
    border-right: none;
  }
  .graphics {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 32px;
  }
  .ferarri {
    background-image: url("$lib/images/ferarri.jpeg");
    background-size: cover;                
    background-repeat: no-repeat;
    background-position: center center;
  }
  .redBull {
    background-image: url("$lib/images/redbull.jpeg");
    background-size: cover;                
    background-repeat: no-repeat;
    background-position: center center;
  }
  .mercedes {
    background-image: url("$lib/images/mercedes.jpeg");
    background-size: cover;                
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
