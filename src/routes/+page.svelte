<script>
import Icon from "@iconify/svelte";
</script>

<div class="relative h-screen overflow-hidden">
    <video class="-z-10 absolute top-0 left-0 h-full w-full object-cover" src="https://cdn.sanity.io/files/1shfht35/production/24826aa5b811d542e900d9f9c03615ecc0aadcce.mp4" loop muted playsinline autoplay></video>
<!--    <div class="-z-10 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-[20rem]" />-->

    <div class="absolute bottom-0 right-0 p-24 leading-[2.8rem]">
        <p class="font-inter font-[800] text-[50px]">技術ですべてに笑顔を。</p>
        <p>Smiles for all with technology.</p>
    </div>
    <div class="absolute bottom-0 left-0 p-24 leading-[2.8rem] font-inter">
        <p class="font-inter font-[700] text-[30px]">Production, Management, Publicity</p>

        <div class="flex items-center gap-1.5">
            <div class="flex items-center gap-1.5 backdrop-blur-[20px] w-max px-4 h-9 rounded-full">
                <Icon icon="mdi:minecraft"/>
                <p>Minecraft</p>
            </div>
            <div class="flex items-center gap-1.5 backdrop-blur-[20px] w-max px-4 h-9 rounded-full">
                <Icon icon="jam:cloud-thunder"/>
                <p>Cloud API</p>
            </div>
            <div class="flex items-center gap-1.5 backdrop-blur-[20px] w-max px-4 h-9 rounded-full">
                <Icon icon="mdi:design"/>
                <p>Design</p>
            </div>
        </div>

    </div>
</div>