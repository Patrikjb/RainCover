<template>

    <div class="w-screen h-screen">
        <!-- hamburger menu icon for small screen, otherwise desktop-->
        <div v-on:click="toggleNav" class="pt-4 pl-6 h-9 w-9 flex flex-col gap-1 items-center justify-center
            sm:pl-10">
            <div class="h-0.5 w-7 bg-black bg-opacity-60 rounded-sm
            sm:h-1 sm:w-9"></div>
            <div class="h-0.5 w-7 bg-black bg-opacity-60 rounded-sm
            sm:h-1 sm:w-9"></div>
            <div class="h-0.5 w-7 bg-black bg-opacity-60 rounded-sm
            sm:h-1 sm:w-9"></div>
        </div>

        <!-- links in hamburger menu for small screens, otherwise desktop -->
        <div>
            <div v-if="navIsOpen"
                class="ml-4 mt-2 flex flex-col bg-gray-100 text-black text-opacity-60 absolute w-full
                sm:w-5/6 ">
                <a href="#" class=" px-2 py-2 font-semibold border-b border-gray-900
                sm:text-xl sm:p-4">About</a>
                <a href="#" class=" px-2 py-2 font-semibold 
                sm:text-xl sm:p-4">Buy</a>
            </div>
        </div>

        <!-- Header (landing page) -->
        <div class="mt-32 ml-4 float sm:mt-52 sm:text-center">
            <img class="h-14 drop-shadow-lg sm:m-auto sm:h-24" v-bind:src="require('../assets/logo-no-background.svg')" alt="">
            <HandMadeHeader class="mt-10" />
        </div>

    </div>

    <!-- "Next page" starts -->
    <div class="">
        <Descriptions />
    </div>
    <div class="my-24">
        <DetailsPage />
    </div>
    <div class="pb-24">
        <ContactForm />
    </div>
    <footer class="border-t border-white px-5 py-5 text-center text-zinc-300">
    Products are made in Finland by avid hiker, father, sport enthusiast and outdoors person. All steps are handmade.
  </footer>

</template>

<script setup>
import { ref } from 'vue'
import HandMadeHeader from '../components/HandMadeHeader.vue'
import Descriptions from '../components/Descriptions.vue'
import DetailsPage from '../components/DetailsPage.vue'
import ContactForm from '../components/ContactForm.vue'

let navIsOpen = ref(false)

function toggleNav() {
    navIsOpen.value = !navIsOpen.value
}

</script>

<style>

</style>