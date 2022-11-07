<script>
  export let data;
  export let xScale;
  export let yScale;
  export let xPosition;
  export let yPosition;
  export let backgroundColor;
  
//   $: console.log(xPosition)
</script>

<div class="tooltip" style="{xPosition < 440 ? `left:${xPosition}px` : `right:${660 - xPosition}px`}; top:{yPosition - 158}px;">
    <h2>{data.driver}</h2>
    <div class="winStats">
        <div>
            <p>{data.wins}</p>
            <span>wins</span>
        </div>
        <div>
            <p>{data.percent}%</p>
            <span>success</span>
        </div>
    </div>
    <div class="drivingInfo">
        <p><strong>{data.year}</strong> season</p>
        <p><strong>{data.team}</strong> team</p>
    </div>
    <div class="{data.team === "Ferarri" ? "ferarri graphics" : data.team === "Red Bull" ? "redBull graphics" : "mercedes graphics"}"></div>
</div>

<style>
  .tooltip {
    position: relative;
    overflow: hidden;
    padding: 16px 16px 8px 42px;
    background-color: hsla(320, 3%, 20%, 1);
    position: absolute;
    border-radius: 8px;
    box-shadow: 0 0 16px hsla(320, 0%, 10%, .6);
    pointer-events: none;
    width: 150px;
  }
  h2 {
    font-size: 1.2rem;
    margin: 0 0 1rem;
    padding: 0;
    color: hsla(0, 0%, 100%, 1);
  }
  .drivingInfo {
    border-top: 1.5px solid hsla(320, 0%, 30%, 1);
    /* border-bottom: 1.5px solid hsla(320, 0%, 30%, 1); */
    padding: 0.4rem 0 0;
    margin: 0;
  }
  .drivingInfo p {
    padding: 0;
    margin: 0.4rem 0;
  }
  .winStats {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .winStats div {
    flex-grow: 1;
    text-align: center;
    padding: 1rem;
    border-top: 1.5px solid hsla(320, 0%, 30%, 1);
  }
  .winStats div p {
    font-size: 1.6rem;
    font-weight: 700;
    color: hsla(0, 0%, 100%, 1);
    padding: 0.2rem 0;
    margin: 0.2rem 0;
  }
  .winStats div:first-child {
    border-right: 1.5px solid hsla(320, 0%, 30%, 1);
  }
  .graphics {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 26px;
  }
  .ferarri {
    background-color: #9e3f3f;
  }
  .redBull {
    background-color: orange;
  }
  .mercedes {
    background-color: silver;
  }
</style>
