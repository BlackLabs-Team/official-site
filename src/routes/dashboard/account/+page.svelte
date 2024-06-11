<script>
    import * as Avatar from "$lib/components/ui/avatar"
    import { logged } from "$lib/account"
</script>

<div class="ml-[100px] p-20">

    <div class="pt-8 leading-8">
        <p class="font-jp font-[700] text-[35px]">アカウント</p>
        <p class="font-poppins text-[13px] ml-1 opacity-50 mt-0.5">Account Management</p>
        <div class="w-full h-[3px] bg-primary opacity-10 mt-16"></div>
    </div>

    <div class="pt-16">

        <div class="flex items-center gap-2.5 font-poppins font-[800] text-[25px]">
            <img src="https://mc-heads.net/avatar/{$logged.uuid}" alt="" class="rounded-full w-14">
            {$logged.name}
        </div>

    </div>

</div>