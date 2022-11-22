<script>
    import {scaleLinear, extent, scaleBand, max} from 'd3';
    import Tooltip from "./Tooltip.svelte"
    export let data;
    let tooltipData;
    let hoverEffect = false;
    let xPosition = 0;
    let yPosition = 0;
    export let width;
    export let height;

    // import { onMount } from 'svelte';

	// onMount(() => {
	// 	console.log('the component has mounted', width);
	// });

    // Colors
	const backgroundColor = "hsla(218, 20%, 13%, 1)";
	const highlightBarColor = "#EF6831";
	const barColor = "hsla(202, 70%, 40%, .8)";
	const textColor100 = "hsla(217, 18%, 90%, 1)";
	const textColor80 = "hsla(217, 18%, 80%, 1)";
	const subtextTextColor = "hsla(217, 18%, 60%, 1)";
	const barBorderColor = "hsla(217, 18%, 40%, 1)";
	const barLinesColor = "hsla(217, 18%,20%, 1)";
	const maxWinsLineColor1 = "#EF6831";
	const maxWinsLineColor2 = "hsla(202, 70%, 40%, .8)";
	const totalRacesBg = "hsla(210, 25%, 20%, .6)";

	const margin = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	}
	const innerHeight = height - margin.top - margin.bottom;
	$: innerWidth = width - margin.left - margin.right;

    const yDomain = data.map( (d) => d.year)
	
	const xExtent = extent(data, (d) => d.totalRaces)
	const xMax = max(data, (d) => d.totalRaces )
	$: xScale = scaleLinear().domain([0, xMax]).range([0, innerWidth - 230])
	$: yScale = scaleBand().domain(yDomain).range([innerHeight, 0])

    const xScale2 = (maxRaces) => scaleLinear().domain([0, maxRaces]).range([0, innerWidth])

    const mousePosition = (e) => {
        xPosition = e.offsetX;
        yPosition = e.offsetY
        // console.log(e)
    }


</script>



<div class="chartWrapper" >
    <svg {width} {height} on:mouseleave={() => {
        tooltipData = null;
        hoverEffect = false;
        }}>
        <defs>
			<pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
				<rect width="4" height="4" fill={highlightBarColor}></rect>
				<path d="M-1,1 l2,-2
								 M0,4 l4,-4
								 M3,5 l2,-2" 
							style="stroke:{backgroundColor}; stroke-width:1" />
			</pattern>

			<pattern id="totalRaces" patternUnits="userSpaceOnUse" width="4" height="4">
				<rect width="4" height="4" fill={totalRacesBg}></rect>
				<path d="M-1,1 l2,-2
								 M0,4 l4,-4
								 M3,5 l2,-2" 
							style="stroke:{backgroundColor}; stroke-width:.5" />
			</pattern>

            <pattern id="otherRaces" patternUnits="userSpaceOnUse" width="4" height="4">
				<rect width="4" height="4" fill={barColor}></rect>
				<path d="M-1,1 l2,-2
								 M0,4 l4,-4
								 M3,5 l2,-2" 
							style="stroke:{backgroundColor}; stroke-width:.5" />
			</pattern>
		</defs>
        <g class="innerChart" transform="translate({margin.left},{margin.top})">
            {#each data as record, i}
                <g class="recordRow" opacity={tooltipData || hoverEffect ? tooltipData == record ? "1" : "0.5" : "1"} transform={`translate(0, ${i * yScale.bandwidth()})`}>
                    <!-- Drivers column -->
                    <g transform={`translate(0, 0)`} class="gElement" on:mouseover={() => {
                        hoverEffect = true;
                        tooltipData = record
                    }} on:focus={() => {
                        hoverEffect = true;
                        tooltipData = record
                    }}>
                        <text font-size = "12" font-weight="500" x=0 dominant-baseline="middle" y={yScale.bandwidth()/2 - 1} fill={textColor100}>{record.driver}</text>
                        <text font-size = "10" font-style="italic" font-weight="300" x=0 dominant-baseline="middle" y={yScale.bandwidth()/2 + 10} fill={subtextTextColor}>{record.year}</text>
                    </g>

                    <!-- Percent sucess column -->
                    <g transform={`translate(170, 0)`} class="gElement" on:mouseover={() => {
                        hoverEffect = true;
                        tooltipData = record
                    }} on:focus={() => {
                        hoverEffect = true;
                        tooltipData = record
                    }}>
                        <text font-size="10" font-weight="bold" x=0 text-anchor="end" dominant-baseline="middle" y={yScale.bandwidth()/2} fill={textColor100}>{record.percent} %</text>
                    </g>

                    <!-- Chart column -->
                    <g transform={`translate(180, 0)`} on:mousemove={mousePosition} on:mouseover={() => {
                        tooltipData = record;
                        hoverEffect = false;
                        }} on:focus={() => tooltipData = record} tabindex="0" class="gElement">
                        <g>
                            <rect
                                    height = {yScale.bandwidth() - 12}
                                    y = 6
                                    x = 2
                                    width = {xScale(record.wins) - 2}
                                    fill= {record.year === 2022 ? "url('#diagonalHatch')" : "url('#otherRaces')"}
                                    >
                            </rect>
                            <rect 
                                        height={yScale.bandwidth() - 8}
                                        width= {xScale(record.totalRaces)}
                                        y="4"
                                        x="0"
                                        fill="transparent"
                                        stroke= "{barBorderColor}"
                                        stroke-width=1
                                        >
                            </rect>
                        {#each xScale2(record.totalRaces).ticks(record.totalRaces) as tick}
                                    <line x1={xScale(tick)} y1=5 x2={xScale(tick)} y2={yScale.bandwidth() - 5} stroke={tick === 0 ? "transparent" : `${barLinesColor}` && tick === record.totalRaces ? "transparent" : `${barLinesColor}` } stroke-width="1"></line>
                            {/each}

                            <line x1={xScale(record.wins)} y1=2 x2={xScale(record.wins)} y2={yScale.bandwidth() -2} stroke="{record.year === 2022 ? `${maxWinsLineColor1}` : `${maxWinsLineColor2}`}" stroke-width="1"></line>
                            <line x1={xScale(record.wins)-1} y1=2 x2={xScale(record.wins)-1} y2={yScale.bandwidth() -2} stroke={backgroundColor} stroke-width="1"></line>
                        </g>

                        <!-- Number of Wins Label -->
                        <text font-size = "10" x={xScale(record.wins) + 4} dominant-baseline="middle" y="{yScale.bandwidth() / 2}" font-weight="bold" fill={textColor100}>{record.wins}</text>


                        <!-- Number of total races ina season label -->
                        <g class="totalRacesLabel" transform={`translate(${xScale(record.totalRaces)}, 3)`}>
                            <!-- <rect width={record.year === 2022 ? "36" : "24"} fill={totalRacesBg} height={yScale.bandwidth() - 6} x=0 y="0"></rect> -->
                            <text font-size = "10" x="6" font-style="italic" font-weight="300" text-anchor="start" dominant-baseline="middle" y={i === 0 ? (yScale.bandwidth() - 14) / 2 : (yScale.bandwidth() - 5) / 2} fill={subtextTextColor}>{record.totalRaces}</text>
                            {#if i === 0}
                                <text font-size = "8" x="6" font-style="italic" font-weight="300" text-anchor="start" dominant-baseline="middle" y="{(yScale.bandwidth() + 8) / 2}" fill={subtextTextColor}>Races</text>
                            {/if}
                        </g>

                    </g>
                </g>    
            {/each}
        </g>
    </svg>
    {#if tooltipData &&  !hoverEffect}
		<Tooltip data={tooltipData} {xScale} {yScale} {xPosition} {yPosition} {backgroundColor} {hoverEffect} {width}/>
	{/if}
</div>


<style>
    .chartWrapper {
        position: relative;
    }
    .recordRow {
        transition: opacity 0.3s ease
    }
    g.totalRacesLabel {
        transition: all 0.2s;
    }
</style>