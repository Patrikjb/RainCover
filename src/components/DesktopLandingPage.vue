<template>
    <div class="col-start-2 col-end-4 row-start-2 row-end-4">
        <HandMadeHeader />
        <div class="mt-10 bg-yellow-400 text-black py-4 font-bold w-1/4
                text-lg text-center border-black border-2 rounded-full">
            <router-link to="/buydesktop">Interested?</router-link>
        </div>
    </div>


    <!-- BOTTOM LANDING PAGE DESKTOP -->
    <div class="col-start-2 col-span-3 row-start-4">
        <Descriptions />
    </div>
</template>

<script setup>
import HandMadeHeader from "../components/HandMadeHeader.vue";
import Descriptions from "@/components/Descriptions.vue";

</script>

<style>

</style>