<template>
    <div style="overflow: auto; height: calc(100vh - 110px)" id="scroll">
        <VList lines="two" style="min-height: 100%;" class="d-flex flex-column justify-end" >
            <VCard 
            v-for="imessage in messages" :key="imessage.id"
                :color="imessage.userId === userId ? 'blue' : 'grey'"
                class="mb-10"
                
                >
                <VCardText>{{ imessage.body }}</VCardText>
                <VCardSubtitle class="ml-auto">{{ formatDate(imessage.sendAt) }}</VCardSubtitle>
            </VCard>
        </VList>
    </div>
</template>

<script lang="ts" setup>
import { VList, VCard, VCardText, VCardSubtitle } from 'vuetify/components'
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/authStore'
import { useMessagesStore } from '@/stores/messagesStore'
import { formatDate } from '@/utils/formatDate'

const messagesStore = useMessagesStore();
const { messages } = storeToRefs(messagesStore);

const authStore = useAuthStore();
const { userId } = storeToRefs(authStore);

</script>

<style>

</style>