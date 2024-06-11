<script>
    import Icon from "@iconify/svelte"
    import * as Avatar from "$lib/components/ui/avatar"
    import { onMount } from "svelte"
    import { onNavigate } from "$app/navigation"
    import { toggleMode } from "mode-watcher"
    import Kuroneko from "$lib/assets/kuroneko.png"

    let current = "/"
    $: {
        console.log(current)
    }
    onMount(() => {
        current = window.location.pathname
    })

    onNavigate((c) => {
        if (c.to != null) {
            current = `${c.to.route.id}`
        }
    })
</script>

<div class="w-[100px] flex flex-col items-center pt-4 pb-8 h-screen">

    <img src={Kuroneko} alt="" class="w-[5rem] dark:invert" on:click={toggleMode}>
    <div class="h-full flex flex-col justify-center items-center text-[35px] space-y-6">

        <a href="/">
            <Icon icon="memory:home-thatched" class="transition-all active:scale-90" style="opacity: {current === '/dashboard/' ? 1 : 0.5}" />
        </a>
        <a href="/search">
            <Icon icon="memory:search" class="transition-all active:scale-90" style="opacity: {current === '/dashboard/search' ? 1 : 0.5}" />
        </a>
        <a href="/like">
            <Icon icon="memory:heart" class="transition-all active:scale-90" style="opacity: {current === '/dashboard/like' ? 1 : 0.5}" />
        </a>
    </div>

    <a href="/account">
        <Avatar.Root class="transition-all active:scale-90">
            <Avatar.Image src="https://mc-heads.net/avatar/null" alt="@shadcn" />
            <Avatar.Fallback>...</Avatar.Fallback>
        </Avatar.Root>
    </a>

</div>