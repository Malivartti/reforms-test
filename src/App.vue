<template>
  <VApp>
    <VMain>
      <VContainer>
        <Chat></Chat>
        <ChatInput></ChatInput>
      </VContainer>
  </VMain>
</VApp>
</template>

<script lang="ts" setup>
import { VApp, VMain, VContainer} from 'vuetify/components'
import Chat from '@/components/Chat.vue'
import ChatInput from '@/components/ChatInput.vue'

</script>

<style>

</style>

@/stores/messagesStore