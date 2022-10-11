<template>

    <div class="text-center text-5xl font-bold">Want to buy or have questions?</div>
    <p class="text-base mt-2 text-center font-semibold">Price: 95€. This contact form does not oblige you to buy. If you are
        interested in buying, invoice will be sent based on contact form.</p>

    <!-- FORM CONTACT -->
    <form class="grid bg-black bg-opacity-40 mt-6 p-4 grid-cols-2 grid-rows-7 gap-2" ref="form"
        @submit.prevent="sendMail">
        <input class="p-3 rounded-sm bg-zinc-900 text-white mt-2" type="text" placeholder="Name" name="user_name"
            required>
        <input class="p-3 rounded-sm bg-zinc-900 text-white mt-2" type="text" placeholder="Email" name="user_email"
            required>

        <div class="p-3 rounded-sm bg-zinc-900 text-white mt-2">
            <div class="bg-zinc-900 flex justify-start gap-4 ">
                <div class="text-zinc-400">Color: {{ picked_color }}</div>
                <input type="radio" id="gray" v-model="picked_color" name="picked_color" value="Gray" class="w-5 accent-yellow-400">
                <label for="gray" class="text-zinc-400">Gray</label>
                <input type="radio" id="other" v-model="picked_color" name="picked_color" value="Other" class="w-5 accent-yellow-400">
                <label for="other" class="text-zinc-400">Other</label>
            </div>
        </div>

        <div class="p-3 rounded-sm bg-zinc-900 text-white mt-2 flex justify-start gap-4">
            <label for="quantity" class="text-zinc-400">Quantity:</label>
            <input type="number" name="quantity" min="1" max="3" class="text-center text-zinc-900">
        </div>


        <input class="p-3 rounded-sm bg-zinc-900 text-white mt-2" type="text" placeholder="Adress" name="street_address">
        <input class="p-3 rounded-sm bg-zinc-900 text-white mt-2" type="text" placeholder="City" name="city">
        <input class="p-3 rounded-sm bg-zinc-900 text-white mt-2" type="text" placeholder="Postal code" name="postal_code">
        <input class="p-3 rounded-sm bg-zinc-900 text-white mt-2" type="text" placeholder="Country" name="country">
        <textarea class="p-3 rounded-sm bg-zinc-900 text-white mt-2 h-32 col-span-2" name="contact_message"
            placeholder="Questions, comments, etc."></textarea>
        <input class="bg-yellow-400 text-black py-4 font-bold col-span-2  justify-center
        text-xl text-center border-black border-2" type="submit" name="Send" value="Send">



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