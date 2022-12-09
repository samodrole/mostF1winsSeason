import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
/* empty css                   */const logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZoAAABFCAMAAABEx9AfAAAAnFBMVEUAAADo6Ojg4ODo4ODo6Ojo6Ojw8PDw6Ojw6Ojo6Ojo6Ojo6Ojo6Ojs6Ojw6Ojs7Ozw8PDw8PDw6Ojw8PDw6Ojs6Ojo6Ojo6Ojs7Ozw6Ojw6Ojs7Ozw8PDw8PDs7Ozs6Ojw6Ojw6Ojs7Ozo6Ojo6Ojs7Ozw8PDw8PDw8PDw8PDw8PDw6Ojs6+vo6Ojg4ODa2trY2Njg2Njo4ODs7Owk03z8AAAALHRSTlMAIBAwMEBQYFBQYHCAgICAgJCQoKCgoLCwsMDw8ODg4ODQ0NDAwMCwcGAQ8CSZkPgAAAcRSURBVHgB7Zvxcps4EIdXBNkxcL4UfE0DkNj11b7gbdy7vv+7nS9xaMRvDWvK1UyG769OZgchfZJ2JVx614yYLQ2Skb8ypgEyYlLmUc1Al8yoZoj4a+ZRzQDxYuZRzRCxBQ9bzbhkRjXDYlbwqGaImC3zcNWMFfM7VeOlfCSf06/gJucXVqaPQ6ZLQe+IyS+ecoYrwh6WzHtWM72cmqiXQ+aoZjhqsGIe1QxIjS14VDNENbhkRjXDUDMreFQzQDVwyBzVDEUNVsyjmkGoMSnzqGYYanDJdFfjUzPGTv/DXpEC7+oQem29puddTyFGHQVqqkanikaxE72o0R8ygaVtKuu+N410mOb8Sp4Gpj4p0iNJ+RLNR9JAft518uN5q9icavXuTVRim9XYNBca1XdidvfaB/McPY3vjj3yn//xmSvu0yPzThUzEnnNJyE6hVlwncTpV8kVwcFT7qxUg+86z9nlzpAiqghOq7GpHKnvRMGvxEQmrhoPacMnKTscMoHUb/N63j45l9d64EG+CzXvCvOvEix5BjU3+DxFJ+7fGuSKP5zoqEmN+fklk4V0miBvyKVewjKrUlLzW8HAoztILHLnTsAblglFNTdtrhOWmYtqbph7UjNrXzJGUdaRSMqn+FwKajJGMoNmkFQyg8xRjcyk0QxGYR+UavSHTGQXqso6AnCMHBJQ0z7qPp8klvwhoVJNVjZ1AqMYUarRZgLka0P699Pmw4GvmpiGW7CYbA+kSbx1olSqM9OsBktck9UaXWJU/2pM2irm6RudwpszN6tZOZM/fAydsSy0alJh/j7YeuG0oiMLN/cXO+lhU9Yum+BNoy9jGUFUk5pbRYXWYck8fdvvlWWdFMHQK/OA89xVk8UT408W4igVOOG2zY+LPSLyN7i6pnKjwir8WO8D0QaiGtSYODnwiSvWyRGrP2TiktkfUJZ1hCyEtWsymMCGUSFNhVEKpEQFjwuF/WYDSWkqNWozN85tdTejIyFGsczSKG4DcGg1S+aUmlnO7WoKGEp3N9ihmgeDcVXuvuWKKyIc9bL+h6WULwpHTdUoaE1Vv/m4ldSkj6b7RY0tdEvmgDJHEVCKmdxyfYANSwrLjCsW9EzuSD0Sc8WsPkiBFLUGNQlV5KorQ4sCmeF1O6nxYo2YI8oc1ZxqSrH3AaixVHFbn5o+Dps7xnEVBWurXGyObH1Qc0UVH7FHLp65DpPPjWqW1F3NTLNkKpRlXeOy38nbXAhqSnE5pHXVWVTxqWbQ6m77p9AobKPQ8Wl8ByMnqAk7qzFblZgKrJiVaqY4y2u5IAI1JI5Sqqt3186E0KshhRqb5IyIamxHNYqK+Z9v+7dgjrqQmpBbKKDVntTgNXb/alSHzL2LMkcREPWsJrqUGrzG7l+N8pDposxRBITvQw1envevRnHIXD/tAchRg841/aupD9pulfzesxrFZ5mI9gguuAGo2Qhs/Z7LALx3TuPnw6TpV41VfZbZI5ij9Gr0xbNCjRVUq09TXdUY6ZOz7UuN/kvmSTXzjNto/iRgxDuC2VlqDKiWMOJZ0uTufFCrCaQhnfyUmkW3L5l7pGHB6S9qAuVFTZMaykE14EZF0i5anKXmVjrkL7qrgSVvFywCl6p7BBec9pdQK+yB060lnafmo3Ti9uwrBizcl4RNpGepWQmT3dzr1Ugz5rHl1zrwVeOEmqeCEekBSCS8r8VrRbWaiTDz/LwuIsQWvIK544ZWCJtozHo10jzlxL5QyQmWbTMe1fz9ldtJ/faMnAUvO2uGfVCrKTP4TuLf8w8wiovgylyFzuwyHTc0nqMZhRr0Kd62gRyY8fUlI5vR/qxjw2/I0+Qud6YE6dXgwK2tR8YpTxIhColJqwZGdH3wfD0vuJMay8jCCdiwy9p9EIhpZevpClnEP1tN+cCnyYwmaump1Si60KAGWDapwaSTReQCZjqkf+ipTER6NVCPN+4OvsKfVg1t+lJjm9RUcpYnf/uHYrr+EBrqMXitDmpo2m66KSrz6Vw1JutJDX1oVOMknSwkoEr/T9wOmtWvm5g6qaFJxkhVZVRRD/Ia9zvcofnYYnSvU4NuUA0SbLaGkD7SP8wCZBdQRzVkbjWTxCxaCh69GjIPsHWq1CDBA6pRo6+YE48QnZyduw+WGRRt8NMmd1bVxVgCoODZxRZ3fmh0Iv3ZfKi3toFXW+l+kxlscOtQ0kf6R/xw+/rqxTay8MLRK8ZREB0JPejhdlXd0D96BEBUDFFB1agv/9m4Q7o7/kcr67xx6EEfLDVjJyH2S4FOTAbpX4FnDpAG/fO8nqK07dEFUZlJL/CKI39+ZwBT+CUYMQvFTealGOUsGYB7nYsw4kG5C/c6F2MkWI7pf6jgh9HljAbDmHTG9D9YzIflmP4HC95RjwyG4MsXQ/8TI/8Cx1zNiiNnH5cAAAAASUVORK5CYII=";
const TopBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-243kpl.svelte-243kpl{display:flex;flex-direction:row;padding:0px 16px;background:rgba(6, 14, 33, .6);border-bottom:1px solid rgba(59, 76, 116, 0.1);position:sticky;z-index:10;top:0;align-self:start;backdrop-filter:blur(20px);justify-content:space-between;align-items:center;height:40px}header.svelte-243kpl figure.svelte-243kpl{margin:0}header.svelte-243kpl figure img.svelte-243kpl{height:16px;opacity:.6;transition:all, 0.2s}a.svelte-243kpl:hover figure img.svelte-243kpl{opacity:1}",
  map: null
};
const TopBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-243kpl"}"><a href="${"http://onechart.xyz/index.html"}" class="${"svelte-243kpl"}"><figure class="${"svelte-243kpl"}"><img${add_attribute("src", logo, 0)} alt="${"onechart lister page"}" class="${"svelte-243kpl"}"></figure></a>
</header>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "content.svelte-1s6x1oh{display:flex;flex-direction:row;justify-content:center;height:calc(100vh - 41px)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})}

    <content class="${"svelte-1s6x1oh"}">${slots.default ? slots.default({}) : ``}</content>

</main>`;
});
export {
  Layout as default
};
