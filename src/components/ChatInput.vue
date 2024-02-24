<template>
    <VForm @submit.prevent="onSubmit">
        <VTextField
            variant="solo"
            placeholder="Напишите сообщение..." 
            append-inner-icon="mdi-send"
            @click:append-inner="onSubmit"
            v-model:model-value="message"
            >
        </VTextField>
    </VForm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VForm, VTextField } from 'vuetify/components'
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/authStore'
import { useMessagesStore } from '@/stores/messagesStore'

const authStore = useAuthStore();
const { userId } = storeToRefs(authStore);

const messagesStore = useMessagesStore();

const message = ref('');

function onSubmit() {
  const umessage = {
    id: Date.now(),
    userId: userId.value,
    body: message.value,
    sendAt: new Date()
  }
  
  messagesStore.pushMessage(umessage);
  message.value = '';

  setTimeout(() => {
    const container: HTMLElement = document.getElementById('scroll')!;
    container.scrollTop = container.scrollHeight - container.clientHeight;
  })
}

</script>

<style>

</style>