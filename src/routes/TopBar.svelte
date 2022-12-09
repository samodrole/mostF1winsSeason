<script>
    import logo from "$lib/images/onechart_light.png"


</script>


<header>
    <a href="http://onechart.xyz/index.html">
        <figure>
            <img src={logo} alt="onechart lister page"/>
        </figure>
    </a>
</header>


<style>
    header {
            display: flex;
            flex-direction: row;
            padding: 0px 16px;
            background: rgba(6, 14, 33, .6);
            border-bottom: 1px solid rgba(59, 76, 116, 0.1);
            position: sticky;
            z-index: 10;
            top: 0;
            align-self: start;
            backdrop-filter: blur(20px);
            justify-content: space-between;
            align-items: center;
            height: 40px;
        }
        header figure {
            margin: 0;
        }
        header figure img {
            height: 16px;
            opacity: .6;
            transition: all, 0.2s;
        }
        a:hover figure img {
            opacity: 1;
        }
</style>