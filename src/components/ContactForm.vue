<template>
    <p class=" text-lg mx-4 text-zinc-400 mt-2 text-center font-semibold">This contact form does not oblige you to buy. If you are
        interested in buying, invoice will be sent based on contact form.</p>
    <form class="mx-12" ref="form" @submit.prevent="sendMail">
        <input class="mt-4 p-4 w-full bg-zinc-900 text-white text-xl" type="text" placeholder="Name" name="user_name"
            required>
        <input class="mt-4 p-4 w-full bg-zinc-900 text-white text-xl" type="text" placeholder="Email" name="user_email"
            required>
        <div class=""></div>


        <!-- color options -->
        <div class="bg-zinc-900 my-4 p-3">
            <div class="text-zinc-400 text-xl">Color: {{ picked_color }}</div>
            <div class="bg-zinc-900 flex justify-around mt-2
            sm:justify-center sm:gap-10">
                <input type="radio" id="gray" v-model="picked_color" name="picked_color" value="Gray" class="w-5">
                <label for="gray" class="text-zinc-400 text-xl font-semibold">Gray</label>
                <input type="radio" id="other" v-model="picked_color" name="picked_color" value="Other" class="w-5">
                <label for="other" class="text-zinc-400 text-xl font-semibold">Other</label>
            </div>
        </div>

        <!-- amount -->

        <div class="bg-zinc-900 my-4 p-3 w-full">
            <div class="bg-zinc-900 mt-2">
                <label for="quantity" class="text-zinc-400 text-xl mr-10">Quantity:</label>
                <input type="number"     name="quantity" min="1" max="3" class="p-1 text-lg text-center">
            </div>
        </div>
        <!-- address -->

        <input class=" p-4 w-full bg-zinc-900 text-white text-xl" type="text" placeholder="Address" name="street_address">

        <div class="flex justify-around mt-2">
            <input class="mt-2 p-4 mr-2 w-full bg-zinc-900 text-white text-xl" type="text" placeholder="Postal Code" name="postal_code">
            <input class="mt-2 p-4 ml-2 w-full bg-zinc-900 text-white text-xl" type="text" placeholder="City" name="city">
        </div>
        <input class="mt-4 p-4 w-full bg-zinc-900 text-white text-xl" type="text" placeholder="Country" name="country">

        <!-- message -->

        <textarea class="mt-4 p-4 w-full bg-zinc-900 text-white text-xl h-48" name="contact_message"
            placeholder="Questions, comments, etc." ></textarea> <br />


        <!-- TODO ADD CAPTCHA -->
        <!-- <div class="g-recaptcha" :data-sitekey="site_key"></div> --> -->
        <br />

        <input class="bg-yellow-400 text-black py-4 font-bold
        text-xl text-center border-black border-2  w-full" type="submit" name="Send" value="Send">
    </form>

    <!-- <ModalComposable v-if="modalMsg" @close-modal="closeModal" v-bind:modalMessage="modalMsg" /> -->
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import emailjs from 'emailjs-com';

// import ModalComposable from './ModalComposable.vue'

// onMounted(() => {
//     let recaptchaScript = document.createElement('script')
//     recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
//     document.head.appendChild(recaptchaScript)
// })




const picked_color = ref("")


const form = ref(null)

const sendMail = (e) => {
    emailjs.sendForm('service_e4tty8p', 'template_qjfp2ws', form.value, 'ZzOEPVPEXm5njPKjE')
        .then(() => {
            console.log("Thanks for message. I contact you in 48 hours.")
        }, () => {
            console.log("error message")
        })

}

// function closeModal() {
//     modalMsg.value = ""
// }

</script>