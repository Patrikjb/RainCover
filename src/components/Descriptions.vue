<template>
    <div class="mt-24 py-16 h-screen text-white
    lg:mt-0 lg:py-0 lg:h-full lg:bg-black lg:bg-opacity-60 lg:overflow-hidden">

        <!-- Blackbox -->

        <div class="mx-12 p-10 bg-black bg-opacity-70 text-white 
        sm:text-xl
        lg:text-base lg:mx-0 lg:p-6 lg:mb-4 lg:h-full lg:bg-transparent">

            <div class="flex flex-col px-4 gap-12
            lg:flex lg:flex-row lg:gap-auto">

                <div v-for="(content,index) in contents" v-bind:key="index" v-on:click="toggle(content)" class="flex flex-col gap-3 cursor-pointer
                lg:gap-1 lg:flex-1">

                    <h1 class="text-yellow-400">{{content.number}}</h1>

                    <h2 class="text-white text-xl font-medium
                    sm:text-2xl
                    lg:text-base">{{content.title}}</h2>

                    <p class="text-zinc-400
                    lg:text-sm">
                        {{content.textShort}}..
                    </p>
                    <p class="text-zinc-400
                    lg:text-sm" v-if="content.isActive">
                        {{content.textLong}}
                    </p>
                </div>
            </div>

        </div>


        <!-- Interested button for MOBILE, PAD -->
        <!-- NOT IN DESKTOP -->

        <div class="mx-20 mt-10
        lg:invisible lg:mx-0 lg:mt-0">
            <div class="bg-yellow-400 text-black py-4 font-bold
                text-xl text-center border-black border-2 rounded-full">
                Interested?
            </div>
        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue'

const contents = ref([
    {
        title: 'Rain Cover',
        isActive: false,
        number: "01",
        textShort: 'Waterproof rain covers for large backpacks and rugsacks.',
        textLong: 'Designed to fit even aluminium framed rucksacks up to 130 l. Compression elastic cord makes it fit smaller rucksacks (> 60 l).'
    },
    {
        title: 'Handmade',
        isActive: false,
        number: "02",
        textShort: 'Made with quality, accuracy and passion. Every rain cover is made individually.',
        textLong: 'Waterproof ripstop nylon fabric. Lightweight, but durable.'
    },
    {
        title: 'From Finland',
        isActive: false,
        number: "03",
        textShort: 'Made, tested and used in hard conditions all year around.',
        textLong: 'Design has been tested in harsh Finnish conditions. From heat to snow, from -35 to 30 C.'
    }
])

function toggle(content) {
    content.isActive = !content.isActive
}


</script>

<style>

</style>