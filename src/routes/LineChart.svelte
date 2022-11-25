<script>
     import {scaleLinear, extent, scaleBand, max, line, curveStep} from 'd3';
    export let data;
    export let width;
    export let height;


    console.log(data)

    const margin = {
		top: 10,
		bottom: 10,
		left: 8,
		right: 8
	}
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

    // let xExtent = extent(data, (d) => data.totalRaces)
    $: xScale = scaleLinear().domain([0, data.positions.length]).range([0,innerWidth])

    $: yExtent = extent(data.positions, (d,i) => d)
    console.log(yExtent)
    $: yScale = scaleLinear().domain([0, 19]).range([0,innerHeight])

    $: path = line().x( (d,i) => xScale(i)).y( (d,i) => yScale(d)).curve(curveStep);


</script>


<svg {width} {height}>
    <g class="innerChart" transform="translate({margin.left},{margin.top})">
		<!-- line -->
        <path 
            d="{path(data.positions)}"
            fill="none"
            stroke="hsla(217, 18%, 35%, 1)"
            stroke-width="1"
        />
        {#each data.positions as d, i}
        {#if d === 1}
        <g >
            <g transform="translate(-5,-5), rotate(45,{xScale(i) + (10/2)},{yScale(d) + (10/2)})">
                <rect fill="hsla(218, 20%, 13%, .8)" x={xScale(i)} y={yScale(d)} width="10" height="10" stroke-width="1" stroke="hsla(30, 55%, 50%, 1)" ></rect>
            </g>
            <text dx="-0.5" dy="0.5" x={xScale(i)} y={yScale(d)} fill="white" text-anchor="middle" alignment-baseline="middle" font-size="8">{d}</text>
        </g>
        {:else if d === 20}
            <g>
                <circle r="6" fill="hsla(218, 20%, 13%, .8)" stroke-width="1" stroke="hsla(0, 55%, 50%, 1)" cx={xScale(i)} cy={yScale(d)} ></circle>
                <text x={xScale(i)} y={yScale(d)} fill="white" text-anchor="middle" alignment-baseline="middle" font-size="6">D</text>
            </g>
        {:else if d === 21}
            <g>
                <circle r="4" fill="hsla(218, 20%, 13%, 1)" stroke-width="1" stroke="hsla(0, 55%, 50%, 1)" cx={xScale(i)} cy={yScale(d)} ></circle>
                <text dx="-9"  x={xScale(i)} y={yScale(d)} fill="white" text-anchor="end" alignment-baseline="middle" font-size="8">Race absence
                (COVID-19)</text>
            </g>
        {:else}
        <g>
            <circle r="6" fill="hsla(218, 20%, 13%, .8)" stroke-width="1" stroke="hsla(210, 65%, 80%, 1)" cx={xScale(i)} cy={yScale(d)}></circle>
            <text dy="0.5" x={xScale(i)} y={yScale(d)} fill="white" text-anchor="middle" alignment-baseline="middle" font-size="6">{d}</text>
        </g>
        {/if}
            {/each}
    </g>
</svg>
