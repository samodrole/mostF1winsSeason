<script>
    export let sortBy;
    export let active;

</script>


<button class:active on:click><slot>{sortBy === "wins" ? "Wins" : sortBy === "totalRaces" ? "Total Races" : sortBy === "year" ? "Year" : sortBy === "percent" ? "Success" : ""}</slot></button>


<style>
    button.active {
        background: orange;
    }
</style>