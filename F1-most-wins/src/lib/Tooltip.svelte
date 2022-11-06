<script>
  export let data;
  export let xScale;
  export let yScale;
  export let xPosition;
  export let yPosition;

  $: console.log(yScale.bandwidth(data.driver));
</script>

<div class="tooltip" style="left: {xPosition}px; top: {yPosition}px;">
  <p>
    {data.driver}
  </p>
</div>

<style>
  .tooltip {
    padding: 8px;
    background-color: white;
    position: absolute;
    top: 40px;
  }
</style>
