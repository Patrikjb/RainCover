<template>
    <form class="mx-12" ref="form" @submit.prevent="sendMail">
        <input class="mt-4 p-4 w-full bg-zinc-900 text-white text-xl" type="text" placeholder="Name" v-model="user_name" required>
        <input class="mt-4 p-4 w-full bg-zinc-900 text-white text-xl" type="text" placeholder="Email" v-model="user_email" required>
        <input class="mt-4 p-4 w-full bg-zinc-900 text-white text-xl" type="text" placeholder="Organisation" v-model="user_organization">
        <textarea class="mt-4 p-4 w-full bg-zinc-900 text-white text-xl" name="message" placeholder="Message" v-model="user_text" required></textarea> <br />
        <!-- <div class="g-recaptcha" :data-sitekey="site_key"></div> -->
        <br />

        <input type="submit" name="Send" value="Send">
    </form>

    <!-- <ModalComposable v-if="modalMsg" @close-modal="closeModal" v-bind:modalMessage="modalMsg" /> -->
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
// import emailjs from 'emailjs-com';
// import ModalComposable from './ModalComposable.vue'

// onMounted(() => {
//     let recaptchaScript = document.createElement('script')
//     recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
//     document.head.appendChild(recaptchaScript)
// })




const user_name = ref("")
const user_email = ref("")
const user_organization = ref("")
const user_text = ref("")


// const form = ref(null)
// let modalMsg = ref("");

// const sendMail = (e) => {
//     emailjs.sendForm('service_e4tty8p', 'template_pqd4il4', e.target, 'ZzOEPVPEXm5njPKjE')
//         .then(() => {
//             modalMsg.value = "Thanks for message. I contact you in 48 hours."
//         }, () => {
//             modalMsg.value = "error message"
//         })

// }

// function closeModal() {
//     modalMsg.value = ""
// }

</script>