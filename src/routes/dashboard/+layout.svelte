<script>
    import Sidebar from "$lib/components/Sidebar.svelte"
</script>

<div class="relative h-screen">
    <div class="absolute left-0 top-0"> <Sidebar/> </div>
    <slot/>
</div>