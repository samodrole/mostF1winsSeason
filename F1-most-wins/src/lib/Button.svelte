<script>
    export let sortBy;
    export let active;

</script>


<button class:active on:click><slot>{sortBy === "wins" ? "Wins" : sortBy === "totalRaces" ? "Total Races" : sortBy === "year" ? "Year" : sortBy === "percent" ? "Success" : ""}</slot></button>


<style>
    button {
        border: none;
        cursor: pointer;
        border-right: 1px solid hsla(218, 20%, 13%, 1);
        padding: 6px 10px;
        background-color: hsla(218, 10%, 60%, .4);
        transition: background-color 0.25s;
    }
    button:hover {
        background-color: hsla(218, 10%, 60%, .6);
    }
    button.active {
        background: hsla(27, 91%, 40%, 1);
        color: #fff;
    }
</style>