<template>
    <div class="mt-24 py-16 text-white">

        <div class="mx-12 p-10 bg-black bg-opacity-70 text-white
        sm:text-xl">
            <!-- Blackbpx -->

            <div class="flex flex-col px-4 gap-6">

                <div v-for="(content,index) in contents" v-bind:key="index" v-on:click="toggle(content)"
                    class="flex flex-col gap-3 cursor-pointer">

                    <h2 class="text-white text-xl font-medium
                    sm:text-2xl">{{content.title}}</h2>
                    <p class="text-zinc-400" v-if="content.isActive">
                        {{content.textLong}}
                    </p>

                </div>
                <div class="text-white text-xl font-medium"> Price: 95 €</div>

            </div>
        </div>


        <!-- Interested button -->

        <div class="mx-20 mt-10">
            <div class="bg-yellow-400 text-black py-4 font-bold
        text-xl text-center border-black border-2 rounded-full">
                Want to buy?<br/> Contact below.
            </div>
        </div>

    </div>
</template>

<script setup>
import {ref} from 'vue'

const contents = ref([
    {
        title: 'Color',
        isActive: false,
        number: "01",
        textLong: 'Dark gray (see background image). More noticeable color might be possible (orange, yellow). Contact us.'
    },
    {
        title: 'Size',
        isActive: false,
        number: "02",
        textLong: 'One size. 65-130 l rucksack. Well suited for aluminium framed and extra large rucksacks.'
    },
    {
        title: 'Materials',
        isActive: false,
        number: "03",
        textShort: 'Made, tested and used in hard conditions all year around.',
        textLong: 'PU-coated Ripstop Nylon (82% PA 6.6 and 18% PU). 80g /m2. Hydrostatic rating 10000 mm. 3.5mm thick elastic cord tightening.'
    }
])

function toggle(content) {
    content.isActive = !content.isActive
}

</script>

<style>

</style>