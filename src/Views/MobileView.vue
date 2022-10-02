<template>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <div class="w-screen h-screen">
        <!-- hamburger menu icon for small screen, otherwise desktop-->
        <div v-on:click="toggleNav" class="pt-4 pl-6 h-9 w-9 flex flex-col gap-1 items-center justify-center">
            <div class="h-0.5 w-7 bg-black bg-opacity-60 rounded-sm"></div>
            <div class="h-0.5 w-7 bg-black bg-opacity-60 rounded-sm"></div>
            <div class="h-0.5 w-7 bg-black bg-opacity-60 rounded-sm"></div>
        </div>

        <!-- links in hamburger menu for small screens, otherwise desktop -->
        <div>
            <div v-if="navIsOpen"
                class="ml-4 mt-2 flex flex-col bg-gray-100 text-black text-opacity-60 absolute w-full">
                <a href="#" class=" px-2 py-2 font-semibold border-b border-gray-900">About</a>
                <a href="#" class=" px-2 py-2 font-semibold ">Buy</a>
            </div>
        </div>

        <!-- Header (landing page) -->
        <HandMadeHeader class="mt-36 ml-4 float" />

    </div>

    <!-- "Next page" starts -->
    <div class="">
        <Descriptions/>
    </div>
    <div class="my-24">
        <DetailsPage />
    </div>
    <div class="pb-24">
        <ContactForm />
    </div>

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