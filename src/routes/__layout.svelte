<script>
    import Nav from "../components/nav.svelte";
</script>
<!-- <div class="p-12 max-w-6xl mx-auto"> -->
<div class="p-10">
    <Nav/>
    <slot>
    </slot>
</div>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
