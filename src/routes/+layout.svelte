<script>
    import "../global.css"
    import "@fontsource/poppins"
    import '@fontsource-variable/noto-sans-jp'
    import '@fontsource-variable/inter'
    import Sidebar from "$lib/components/Sidebar.svelte"
    import Transition from "$lib/components/Transition.svelte"
    import { ModeWatcher } from "mode-watcher"
    import Header from "$lib/components/Header.svelte";
    export let data
</script>

<div class="relative h-screen">
    <ModeWatcher />
    <Transition pathname={data.pathname}>
        <Header/>
        <slot/>
    </Transition>
</div>