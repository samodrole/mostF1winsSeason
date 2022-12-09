import { c as create_ssr_component, b as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index.js";
import { extent, max, scaleLinear, scaleBand } from "d3";
/* empty css                   */const data = [
  {
    driver: "Michael Schumacher",
    team: "Ferarri",
    year: 2004,
    wins: 13,
    totalRaces: 18,
    percent: 72.2,
    positions: [1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 2, 2, 12, 1, 7]
  },
  {
    driver: "Sebastian Vettel",
    team: "Red Bull",
    year: 2013,
    wins: 13,
    totalRaces: 19,
    percent: 68.4,
    positions: [3, 1, 4, 1, 4, 2, 1, 20, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    driver: "Max Verstappen",
    team: "Red Bull",
    year: 2022,
    wins: 15,
    totalRaces: 22,
    percent: 68.2,
    positions: [19, 1, 20, 1, 1, 1, 3, 1, 1, 7, 2, 1, 1, 1, 1, 1, 7, 1, 1, 1, 6, 1]
  },
  {
    driver: "Michael Schumacher",
    team: "Ferarri",
    year: 2002,
    wins: 11,
    totalRaces: 17,
    percent: 68.4,
    positions: [1, 3, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 1]
  },
  {
    driver: "Sebastian Vettel",
    team: "Red Bull",
    year: 2011,
    wins: 11,
    totalRaces: 19,
    percent: 57.9,
    positions: [1, 1, 2, 1, 1, 1, 2, 1, 2, 4, 2, 1, 1, 1, 3, 1, 1, 20, 2]
  },
  {
    driver: "Lewis Hamilton",
    team: "Mercedes",
    year: 2014,
    wins: 11,
    totalRaces: 19,
    percent: 57.9,
    positions: [20, 1, 1, 1, 1, 2, 20, 2, 1, 3, 3, 20, 1, 1, 1, 1, 1, 2, 1]
  },
  {
    driver: "Lewis Hamilton",
    team: "Mercedes",
    year: 2018,
    wins: 11,
    totalRaces: 21,
    percent: 52.4,
    positions: [2, 3, 4, 1, 1, 3, 5, 1, 20, 2, 1, 1, 2, 1, 1, 1, 1, 3, 4, 1, 1]
  },
  {
    driver: "Lewis Hamilton",
    team: "Mercedes",
    year: 2019,
    wins: 11,
    totalRaces: 21,
    percent: 52.4,
    positions: [2, 1, 1, 2, 1, 1, 1, 1, 5, 1, 9, 1, 2, 3, 4, 1, 3, 1, 2, 7, 1]
  },
  {
    driver: "Lewis Hamilton",
    team: "Mercedes",
    year: 2020,
    wins: 11,
    totalRaces: 17,
    percent: 62.5,
    positions: [4, 1, 1, 1, 2, 1, 1, 7, 1, 3, 1, 1, 1, 1, 1, 21, 3]
  },
  {
    driver: "Lewis Hamilton",
    team: "Mercedes",
    year: 2015,
    wins: 10,
    totalRaces: 19,
    percent: 52.6,
    positions: [1, 2, 1, 1, 2, 3, 1, 2, 1, 6, 1, 1, 20, 1, 1, 1, 2, 2, 2]
  },
  {
    driver: "Lewis Hamilton",
    team: "Mercedes",
    year: 2016,
    wins: 10,
    totalRaces: 20,
    percent: 50,
    positions: [2, 3, 7, 2, 20, 1, 1, 5, 1, 1, 1, 1, 3, 2, 3, 20, 3, 1, 1, 1, 1]
  },
  {
    driver: "Max Verstappen",
    team: "Red Bull",
    year: 2021,
    wins: 10,
    totalRaces: 22,
    percent: 45.4,
    positions: [2, 1, 2, 2, 1, 18, 1, 1, 1, 20, 9, 1, 1, 20, 2, 2, 1, 1, 2, 2, 2, 1]
  }
];
const Tooltip_svelte_svelte_type_style_lang = "";
const Chart_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".chartWrapper.svelte-1h3wke6{position:relative}.recordRow.svelte-1h3wke6{transition:opacity 0.3s ease\n    }g.totalRacesLabel.svelte-1h3wke6{transition:all 0.2s}",
  map: null
};
const backgroundColor = "hsla(218, 20%, 13%, 1)";
const highlightBarColor = "#EF6831";
const barColor = "hsla(202, 70%, 40%, .8)";
const textColor100 = "hsla(217, 18%, 90%, 1)";
const subtextTextColor = "hsla(217, 18%, 70%, 1)";
const barBorderColor = "hsla(217, 18%, 40%, 1)";
const barLinesColor = "hsla(217, 18%,20%, 1)";
const maxWinsLineColor1 = "#EF6831";
const maxWinsLineColor2 = "hsla(202, 70%, 40%, .8)";
const totalRacesBg = "hsla(210, 25%, 20%, .6)";
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerWidth;
  let xScale;
  let yScale;
  let { data: data2 } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  const margin = { top: 0, bottom: 0, left: 0, right: 0 };
  const innerHeight = height - margin.top - margin.bottom;
  const yDomain = data2.map((d) => d.year);
  extent(data2, (d) => d.totalRaces);
  const xMax = max(data2, (d) => d.totalRaces);
  const xScale2 = (maxRaces) => scaleLinear().domain([0, maxRaces]).range([0, innerWidth]);
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$2);
  innerWidth = width - margin.left - margin.right;
  xScale = scaleLinear().domain([0, xMax]).range([0, innerWidth - 210]);
  yScale = scaleBand().domain(yDomain).range([innerHeight, 0]);
  return `<div class="${"chartWrapper svelte-1h3wke6"}"><svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}><defs><pattern id="${"diagonalHatch"}" patternUnits="${"userSpaceOnUse"}" width="${"4"}" height="${"4"}"><rect width="${"4"}" height="${"4"}"${add_attribute("fill", highlightBarColor, 0)}></rect><path d="${"M-1,1 l2,-2\n								 M0,4 l4,-4\n								 M3,5 l2,-2"}" style="${"stroke:" + escape(backgroundColor, true) + "; stroke-width:1"}"></path></pattern><pattern id="${"totalRaces"}" patternUnits="${"userSpaceOnUse"}" width="${"4"}" height="${"4"}"><rect width="${"4"}" height="${"4"}"${add_attribute("fill", totalRacesBg, 0)}></rect><path d="${"M-1,1 l2,-2\n								 M0,4 l4,-4\n								 M3,5 l2,-2"}" style="${"stroke:" + escape(backgroundColor, true) + "; stroke-width:.5"}"></path></pattern><pattern id="${"otherRaces"}" patternUnits="${"userSpaceOnUse"}" width="${"4"}" height="${"4"}"><rect width="${"4"}" height="${"4"}"${add_attribute("fill", barColor, 0)}></rect><path d="${"M-1,1 l2,-2\n								 M0,4 l4,-4\n								 M3,5 l2,-2"}" style="${"stroke:" + escape(backgroundColor, true) + "; stroke-width:.5"}"></path></pattern></defs><g class="${"innerChart"}" transform="${"translate(" + escape(margin.left, true) + "," + escape(margin.top, true) + ")"}">${each(data2, (record, i) => {
    return `<g class="${"recordRow svelte-1h3wke6"}"${add_attribute(
      "opacity",
      "1",
      0
    )}${add_attribute("transform", `translate(0, ${i * yScale.bandwidth()})`, 0)}><g${add_attribute("transform", `translate(0, 0)`, 0)} class="${"gElement"}"><text font-size="${"12"}" font-weight="${"500"}" x="${"0"}" dominant-baseline="${"middle"}"${add_attribute("y", yScale.bandwidth() / 2 - 1, 0)}${add_attribute("fill", textColor100, 0)}>${escape(record.driver)}</text><text font-size="${"10"}" font-style="${"italic"}" font-weight="${"300"}" x="${"0"}" dominant-baseline="${"middle"}"${add_attribute("y", yScale.bandwidth() / 2 + 11, 0)}${add_attribute("fill", subtextTextColor, 0)}>${escape(record.year)}</text></g><g${add_attribute("transform", `translate(170, 0)`, 0)} class="${"gElement"}"><text font-size="${"10"}" font-weight="${"bold"}" x="${"0"}" text-anchor="${"end"}" dominant-baseline="${"middle"}"${add_attribute("y", yScale.bandwidth() / 2, 0)}${add_attribute("fill", textColor100, 0)}>${escape(record.percent)} %</text></g><g${add_attribute("transform", `translate(180, 0)`, 0)} tabindex="${"0"}" class="${"gElement"}"><g><rect${add_attribute("height", yScale.bandwidth() - 12, 0)} y="${"6"}" x="${"2"}"${add_attribute("width", xScale(record.wins) - 2, 0)}${add_attribute(
      "fill",
      record.year === 2022 ? "url('#diagonalHatch')" : "url('#otherRaces')",
      0
    )}></rect><rect${add_attribute("height", yScale.bandwidth() - 8, 0)}${add_attribute("width", xScale(record.totalRaces), 0)} y="${"4"}" x="${"0"}" fill="${"transparent"}"${add_attribute("stroke", barBorderColor, 0)} stroke-width="${"1"}"></rect>${each(xScale2(record.totalRaces).ticks(record.totalRaces), (tick) => {
      return `<line${add_attribute("x1", xScale(tick), 0)} y1="${"5"}"${add_attribute("x2", xScale(tick), 0)}${add_attribute("y2", yScale.bandwidth() - 5, 0)}${add_attribute(
        "stroke",
        tick === 0 ? "transparent" : `${barLinesColor}` && tick === record.totalRaces ? "transparent" : `${barLinesColor}`,
        0
      )} stroke-width="${"1"}"></line>`;
    })}<line${add_attribute("x1", xScale(record.wins), 0)} y1="${"2"}"${add_attribute("x2", xScale(record.wins), 0)}${add_attribute("y2", yScale.bandwidth() - 2, 0)}${add_attribute(
      "stroke",
      record.year === 2022 ? `${maxWinsLineColor1}` : `${maxWinsLineColor2}`,
      0
    )} stroke-width="${"1"}"></line><line${add_attribute("x1", xScale(record.wins) - 1, 0)} y1="${"2"}"${add_attribute("x2", xScale(record.wins) - 1, 0)}${add_attribute("y2", yScale.bandwidth() - 2, 0)}${add_attribute("stroke", backgroundColor, 0)} stroke-width="${"1"}"></line></g><text font-size="${"10"}"${add_attribute("x", xScale(record.wins) + 4, 0)} dominant-baseline="${"middle"}"${add_attribute("y", yScale.bandwidth() / 2, 0)} font-weight="${"bold"}"${add_attribute("fill", textColor100, 0)}>${escape(record.wins)}</text><g class="${"totalRacesLabel svelte-1h3wke6"}"${add_attribute("transform", `translate(${xScale(record.totalRaces)}, 3)`, 0)}><text font-size="${"10"}" x="${"6"}" font-style="${"italic"}" font-weight="${"300"}" text-anchor="${"start"}" dominant-baseline="${"middle"}"${add_attribute(
      "y",
      i === 0 ? (yScale.bandwidth() - 14) / 2 : (yScale.bandwidth() - 5) / 2,
      0
    )}${add_attribute("fill", subtextTextColor, 0)}>${escape(record.totalRaces)}</text>${i === 0 ? `<text font-size="${"8"}" x="${"6"}" font-style="${"italic"}" font-weight="${"300"}" text-anchor="${"start"}" dominant-baseline="${"middle"}"${add_attribute("y", (yScale.bandwidth() + 8) / 2, 0)}${add_attribute("fill", subtextTextColor, 0)}>Races</text>` : ``}</g></g></g>`;
  })}</g></svg>
    ${``}
</div>`;
});
const Button_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-x93js5{border:none;cursor:pointer;border-right:1px solid hsla(218, 20%, 13%, 1);padding:4px 10px;background-color:hsla(218, 10%, 60%, .4);transition:background-color 0.25s;color:#060E21}button.svelte-x93js5:hover{background-color:hsla(218, 10%, 60%, .6)}button.active.svelte-x93js5{background:hsla(210, 65%, 80%, 1)}button.svelte-x93js5:last-child{border-right:none}@media(max-width:600px){button.svelte-x93js5{padding:8px 16px}}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sortBy } = $$props;
  let { active } = $$props;
  if ($$props.sortBy === void 0 && $$bindings.sortBy && sortBy !== void 0)
    $$bindings.sortBy(sortBy);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$1);
  return `<button class="${["svelte-x93js5", active ? "active" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : `${escape(sortBy === "wins" ? "Wins" : sortBy === "totalRaces" ? "Total races" : sortBy === "year" ? "Year" : sortBy === "percent" ? "Win rate" : "")}`}</button>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.artwork.svelte-1nf09u6.svelte-1nf09u6{display:grid;grid-template-columns:400px minmax(300px, 1fr);grid-template-rows:1fr auto;gap:8px;max-width:960px;min-width:200px;padding:4rem 2rem 0rem 2rem;position:relative;background:var(--bgColor);border:1px solid var(--borderColor);border-radius:8px;height:fit-content;align-self:center}.imageMax.svelte-1nf09u6.svelte-1nf09u6{background-image:url("$lib/images/max_img.png");background-size:cover;background-repeat:no-repeat;background-position:top -140px right;position:relative;grid-column-start:1;grid-column-end:2}.imageMax.svelte-1nf09u6.svelte-1nf09u6::before{content:"";position:absolute;height:140px;top:-140px;left:0;width:400px;background-image:url("$lib/images/max_img.png");background-size:cover;background-repeat:no-repeat;background-position:top right}h1.svelte-1nf09u6.svelte-1nf09u6{font-size:4.2rem;line-height:3.8rem;margin:0 0 16px;font-weight:700;position:relative;z-index:5}p.svelte-1nf09u6.svelte-1nf09u6{font-size:1.2rem;line-height:1.8rem;font-weight:300;margin:0 0 16px;color:hsla(217, 18%, 80%, 1)}p.svelte-1nf09u6 b.svelte-1nf09u6{color:#EF6831}.info.svelte-1nf09u6 p.svelte-1nf09u6:last-child{border:none}h1.svelte-1nf09u6>span.svelte-1nf09u6{font-size:3.6rem}.header.svelte-1nf09u6.svelte-1nf09u6{margin-bottom:24px}.content.svelte-1nf09u6.svelte-1nf09u6{grid-column-start:2;grid-column-end:3;width:100%}.info.svelte-1nf09u6.svelte-1nf09u6{grid-column-start:span 3;border-top:1px solid hsla(217, 18%, 18%, 1);padding:8px 0}.info.svelte-1nf09u6 p.svelte-1nf09u6{color:rgb(79, 89, 105);display:inline-block;margin:0 8px 0 0;padding-right:8px;border-right:1px solid hsla(217, 18%, 15%, 1)}.info.svelte-1nf09u6:hover p.svelte-1nf09u6{color:hsla(217, 18%, 30%, 1);transition:color, 0.25s}.info.svelte-1nf09u6:hover a.svelte-1nf09u6{color:hsla(217, 18%, 30%, 1);transition:color, 0.25s}.info.svelte-1nf09u6 a.svelte-1nf09u6{color:rgb(79, 89, 105);transition:color, 0.25s}.info.svelte-1nf09u6 a.svelte-1nf09u6:hover{color:hsla(217, 18%, 50%, 1)}.sortSelection.svelte-1nf09u6.svelte-1nf09u6{margin-bottom:16px}.sortSelection.svelte-1nf09u6 p.svelte-1nf09u6{margin:0 0 4px;padding-left:3px;color:hsla(217, 18%, 60%, 1)}.segmentedControl.svelte-1nf09u6.svelte-1nf09u6{padding:2px;border:1px solid hsla(217, 18%, 25%, 1);display:inline-block;border-radius:2px}@media(max-width:600px){.content.svelte-1nf09u6.svelte-1nf09u6{grid-column-start:1}.artwork.svelte-1nf09u6.svelte-1nf09u6{display:grid;grid-template-columns:1fr;grid-template-rows:1fr auto;border:none;padding:300px 16px 4rem 16px;align-self:flex-start;margin:0}.imageMax.svelte-1nf09u6.svelte-1nf09u6::before{height:400px;top:-380px;left:0;width:100%}}@media(max-height:860px){.artwork.svelte-1nf09u6.svelte-1nf09u6{align-self:flex-start}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sortedData;
  let selectedSort = "wins";
  let sortOptions = ["wins", "totalRaces", "year", "percent"];
  let width;
  $$result.css.add(css);
  sortedData = data.sort((a, b) => b[selectedSort] - a[selectedSort]);
  return `${$$result.head += `<!-- HEAD_svelte-1heub1z_START -->${$$result.title = `<title>Most wins in a single F1 season</title>`, ""}<meta name="${"description"}" content="${"Most wins in a single F1 season"}"><!-- HEAD_svelte-1heub1z_END -->`, ""}

  <div class="${"artwork svelte-1nf09u6"}"><div class="${"imageMax svelte-1nf09u6"}"></div>
    <div class="${"content svelte-1nf09u6"}"><div class="${"header svelte-1nf09u6"}"><h1 class="${"svelte-1nf09u6"}">Most wins <br><span class="${"svelte-1nf09u6"}">in a single F1 season</span></h1>
            <p class="${"svelte-1nf09u6"}">The number of races over the calendar year has gone from seven races in 1950 to 30 (24+6 sprint races) next year in 2023. Depending on that, a driver has more chances to increase the number of wins per year. <b class="${"svelte-1nf09u6"}">In 2022, Max Verstappen won 15 races</b>, breaking the record for the most number of Grand Prix wins in a season.</p></div>
        <div class="${"chart"}"><div class="${"sortSelection svelte-1nf09u6"}"><p class="${"svelte-1nf09u6"}">Sort by:</p>
                <div class="${"segmentedControl svelte-1nf09u6"}">${each(sortOptions, (sort, i) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        active: selectedSort === sortOptions[i],
        sortBy: sort
      },
      {},
      {}
    )}`;
  })}</div></div>
            ${validate_component(Chart, "Chart").$$render($$result, { data: sortedData, width, height: 460 }, {}, {})}</div></div>
    <div class="${"info svelte-1nf09u6"}"><p class="${"svelte-1nf09u6"}">Design by: <a href="${"https://twitter.com/samodrole"}" target="${"_blank"}" class="${"svelte-1nf09u6"}">Samo Drole</a></p>
        <p class="${"svelte-1nf09u6"}">Data source: <a href="${"https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records#Total_wins:~:text=9%5D%5B10%5D-,Most%20wins%20in%20a%20season,-%5Bedit%5D"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-1nf09u6"}">Wikipeadia</a></p>
        <p class="${"svelte-1nf09u6"}">Image: <a href="${"https://www.ixpap.com/max-verstappen-wallpapers/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-1nf09u6"}">ixpap</a></p>
        <p class="${"svelte-1nf09u6"}">Content: <a href="${"https://khelnow.com/olympic-sports/2022-10-olympics-formula-one-top-five-drivers-with-most-win-in-season#:~:text=Top%205%20drivers%20with%20most%20wins%20in%20a%20single%20F1%20season"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-1nf09u6"}">khelnow</a></p></div>
  </div>`;
});
export {
  Page as default
};
