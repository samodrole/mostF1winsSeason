<script>
    import {scaleLinear, extent, scaleBand, max} from 'd3';
    import Tooltip from "./Tooltip.svelte"
    export let data;
    let tooltipData;
    let xPosition = 0;
    let yPosition = 0;
    $: console.log(data)


    // Colors
	const backgroundColor = " hsla(320, 3%, 20%, 1)";
	const highlightBarColor = "hsla(326, 100%, 50%, 1)";
	const barColor = "hsla(59, 50%, 20%, 1)";
	const textColor100 = "hsla(0, 0%, 100%, 1)";
	const textColor80 = "hsla(0, 0%, 80%, 1)";
	const subtextTextColor = "hsla(0, 0%, 40%, 1)";
	const barBorderColor = "hsla(0, 0%, 100%, 1)";
	const barLinesColor = "hsla(0, 0%, 20%, 1)";
	const maxWinsLineColor1 = "hsla(326, 100%, 50%, 1)";
	const maxWinsLineColor2 = "hsla(59, 0%, 90%, 1)";
	const totalRacesBg = "hsla(210, 25%, 20%, .6)";


    const width = 660;
	const height = 460;
	const margin = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	}
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

    const yDomain = data.map( (d) => d.year)
	
	const xExtent = extent(data, (d) => d.totalRaces)
	const xMax = max(data, (d) => d.totalRaces )
	$: xScale = scaleLinear().domain([0, xMax]).range([0, innerWidth - 230])
	$: yScale = scaleBand().domain(yDomain).range([innerHeight, 0])

    const xScale2 = (maxRaces) => scaleLinear().domain([0, maxRaces]).range([0, innerWidth])


</script>



<div class="chartWrapper" >
    <svg {width} {height} >
        <defs>
			<pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
				<rect width="4" height="4" fill={highlightBarColor}></rect>
				<path d="M-1,1 l2,-2
								 M0,4 l4,-4
								 M3,5 l2,-2" 
							style="stroke:{backgroundColor}; stroke-width:.5" />
			</pattern>

			<pattern id="totalRaces" patternUnits="userSpaceOnUse" width="4" height="4">
				<rect width="4" height="4" fill={totalRacesBg}></rect>
				<path d="M-1,1 l2,-2
								 M0,4 l4,-4
								 M3,5 l2,-2" 
							style="stroke:{backgroundColor}; stroke-width:.5" />
			</pattern>
		</defs>
        <g class="innerChart" transform="translate({margin.left},{margin.top})">
            {#each data as record, i}
                <!-- Drivers column -->
			<g transform={`translate(0, ${i * yScale.bandwidth()})`} class="gElement">
				<text font-size = "12" x=0 dominant-baseline="middle" y={yScale.bandwidth()/4 + 4} fill={textColor100}>{record.driver}</text>
				<text font-size = "10" x=0 dominant-baseline="middle" y={yScale.bandwidth()/2 + 8} fill={subtextTextColor}>{record.year}</text>
			</g>

			<!-- Percent sucess column -->
			<g transform={`translate(180, ${i * yScale.bandwidth()})`} class="gElement">
				<text font-size="10" font-weight="bold" x=0 text-anchor="end" dominant-baseline="middle" y={yScale.bandwidth()/2} fill={textColor100}>{record.percent} %</text>
			</g>

			<!-- Chart column -->
			<g transform={`translate(190, ${i * yScale.bandwidth()})`} on:mouseover={() => tooltipData = record} on:focus={() => tooltipData = record} tabindex="0" class="gElement">
				<g>
					<rect
							height = {yScale.bandwidth() - 12}
							y = 6
							x = 2
							width = {xScale(record.wins) - 2}
							fill= {record.year === 2022 ? "url('#diagonalHatch')" : `${barColor}`}
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

					<line x1={xScale(record.wins)} y1=2 x2={xScale(record.wins)} y2={yScale.bandwidth() -2} stroke="{record.year === 2022 ? `${maxWinsLineColor1}` : `${maxWinsLineColor2}`}" stroke-width="2"></line>
					<line x1={xScale(record.wins)-1} y1=2 x2={xScale(record.wins)-1} y2={yScale.bandwidth() -2} stroke={backgroundColor} stroke-width="1"></line>
				</g>

				<!-- Number of Wins Label -->
				<text font-size = "10" x={xScale(record.wins) + 4} dominant-baseline="middle" y="{yScale.bandwidth() / 2}" font-weight="bold" fill={textColor100}>{record.wins}</text>


				<!-- Number of total races ina season label -->
				<g class="totalRacesLabel" transform={`translate(${xScale(record.totalRaces) + 4}, 3)`}>
					<rect width={record.year === 2022 ? "36" : "24"} fill="url('#totalRaces')" height={yScale.bandwidth() - 6} x=0 y="0"></rect>
					<text font-size = "10" x="6" text-anchor="start" dominant-baseline="middle" y={record.year === 2022 ? (yScale.bandwidth() - 14) / 2 : (yScale.bandwidth() - 5) / 2} fill={textColor100}>{record.totalRaces}</text>
					{#if record.year === 2022}
						<text font-size = "8" x="6" text-anchor="start" dominant-baseline="middle" y="{(yScale.bandwidth() + 8) / 2}" fill={textColor80}>Races</text>
					{/if}
				</g>

			</g>
            {/each}
        </g>
    </svg>
    {#if tooltipData }
		<Tooltip data={tooltipData} {xScale} {yScale}/>
	{/if}
</div>


<style>
    .chartWrapper {
        position: relative;
    }
</style>