<template>
    <div class="modal">
      <div class="modal-content">
        <p>{{modalMessage}}</p>
        <button class="modal-button" v-on:click="$emit('close-modal')">Close</button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['modalMessage'])
  defineEmits(['close-modal'])
  
  </script>