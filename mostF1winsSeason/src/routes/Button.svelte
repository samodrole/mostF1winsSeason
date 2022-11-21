<script>
    export let sortBy;
    export let active;

</script>


<button class:active on:click><slot>{sortBy === "wins" ? "Wins" : sortBy === "totalRaces" ? "Total races" : sortBy === "year" ? "Year" : sortBy === "percent" ? "Success rate" : ""}</slot></button>


<style>
    button {
        border: none;
        cursor: pointer;
        border-right: 1px solid hsla(218, 20%, 13%, 1);
        padding: 4px 10px;
        background-color: hsla(218, 10%, 60%, .4);
        transition: background-color 0.25s;
    }
    button:hover {
        background-color: hsla(218, 10%, 60%, .6);
    }
    button.active {
        background: hsla(210, 45%, 80%, 1);
        /* color: #fff; */
    }
    button:last-child {
        border-right: none;
    }
</style>