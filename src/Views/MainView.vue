<template>
<div class="w-screen h-screen">

    <!-- GRID LAYOUT FOR DESKTOP -->
    <div class="grid grid-cols-4 grid-rows-4 gap-4 w-screen h-screen justify-items-stretch pt-4 pl-4">

        <!-- LOGO DESKTOP -->
        <div class="mr-10">
            <router-link to="/">
                <img class="h-1/4 drop-shadow-lg" v-bind:src="require('../assets/logo-no-background.svg')" alt="">
            </router-link>
        </div>

        <!-- NAV BAR -->
        <div class="pt-5 col-start-2 col-end-4">
            <nav>
                <ul class="flex flex-row justify-start gap-20 cursor-pointer ">
                    <router-link to="/buydesktop" class="text-opacity-60 font-medium text-lg hover:text-yellow-400">Buy</router-link>
                    <router-link to="/aboutdesktop" class="text-opacity-60 font-medium text-lg hover:text-yellow-400">About</router-link>
                    <router-link to="/buydesktop" class="text-opacity-60 font-medium text-lg hover:text-yellow-400">Contact</router-link>
                </ul>
            </nav>
        </div>

        <router-view/>  
        <!-- Header -->
        <!-- <div class="col-start-2 col-end-4 row-start-2 row-end-4">
            <HandMadeHeader />
            <div class="mt-10 bg-yellow-400 text-black py-4 font-bold w-1/4
                text-lg text-center border-black border-2 rounded-full">
                <router-link to="/buydesktop">Interested?</router-link>
            </div>
        </div>
         -->

        <!-- BOTTOM LANDING PAGE DESKTOP -->
        <!-- <div class="col-start-2 col-span-3 row-start-4">
            <Descriptions/>
        </div> -->

        <!-- SOCIAL MEDIA ICONS DESKTOP -->
        <div class="row-start-3 row-span-2">
            <SocialMediaDesktop/>
        </div>
    </div>
</div>

</template>

<script setup>
import SocialMediaDesktop from "@/components/SocialMediaDesktop.vue";

</script>

<style>

</style>