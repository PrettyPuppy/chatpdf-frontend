import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    messages: [],
    grade: '8th',
  }),
  actions: {
    async sendMessage(prompt) {

      this.messages.push(prompt);

      const response = await fetch(`http://localhost:9000/${this.grade}/${prompt}`);

      const msg = await response.text();

      console.log(msg);
      
      this.messages.push(msg);
    },

    setGrade(grade) {
      this.grade = grade;
    }
  },
});
