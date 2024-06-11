<script>
    import Icon from "@iconify/svelte"
    import * as Avatar from "$lib/components/ui/avatar"

    const data = {
        "icon": "https://media.discordapp.net/attachments/1241262923842850997/1247937264915320923/server-icon_1.png?ex=6661d7a5&is=66608625&hm=7ddcd7d7ce1d8eb1274d9e83542553a6a48803310c31544df20f5867610b2b39&=&format=webp&quality=lossless",
        "background": "https://cdn.modrinth.com/data/Q1vvjJYV/images/593042203d2297676eed851f22c8e2ee3eaab5d6.jpeg",
        "title": "黒猫ネットワーク - Kuroneko Network",
        "subtitle": "日本版Hypixelを目指したサーバーです。"
    }
</script>

<div class="h-screen text-white">
    <div class="ml-[100px] h-full p-20 pt-28">

        <div class="font-jp flex items-center gap-4 p-5 rounded-[20px] relative bg-neutral-700">
<!--            <img src={data.background} class="absolute" alt="">-->
            <img src={data.icon} alt="">
            <div>
                <p class="font-[700] text-[25px]">{data.title}</p>
                <p>{data.subtitle}</p>
            </div>
        </div>


    </div>
</div>