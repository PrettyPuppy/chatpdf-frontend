
<template>
  <div>
    <div class="container">

      <!-- Chat box -->
      <div style="height: 600px; overflow-y: auto;">
        <div class="chat-box" v-for="i in store.messages.length">
          <div class="message-ai" v-if="i % 2 == 0">
            <p v-for="n in (store.messages[i - 1]).split('\n')"> 
              {{ n }}
            </p>
          </div>
          <div class="message-you" v-if="i % 2 == 1">
            {{ store.messages[i - 1] }}
          </div>
        </div>
      </div>

      <!-- Input message box -->
      <div class="message-box">
        <form @submit.prevent="handleSubmit">
            <div class="input-group">
                <input type="text" placeholder="Please input you wanna know..." v-model="prompt" />
                <button type="submit" class="btn btn-primary">Send</button>
            </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { useMessagesStore } from '../stores/Messages';

const store = useMessagesStore();
const prompt = ref('');

const handleSubmit = () => {
  if (prompt.value !== '') {
    store.sendMessage(prompt.value);
    prompt.value = '';
  }
}

</script>