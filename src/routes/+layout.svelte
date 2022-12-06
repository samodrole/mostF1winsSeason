<script>
    import './styles.css'
    import TopBar from './TopBar.svelte';
    let width;

</script>

<main>
    <TopBar />

    <content>
        <slot></slot>
    </content>

</main>

<style>
      content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: calc(100vh - 41px);
      }
</style>