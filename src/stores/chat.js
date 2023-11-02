import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
  state: () => {
    return {
      selectedContact: null,
      selectedListing: null,
      contactList: [],
      messages: []
      //   messages: [
      //     {
      //       senderId: '2',
      //       recipientId: '1',
      //       messageContent: 'Hello, I am interesting in this giveaway from you.'
      //     },
      //     {
      //       senderId: '1',
      //       recipientId: '2',
      //       messageContent: 'Hi! Thanks for your interest in my giveaway!'
      //     },
      //     {
      //       senderId: '1',
      //       recipientId: '2',
      //       messageContent:
      //         'May I know if you are free to collect at 3pm? At Ang Mo Kio MRT station Exit B?'
      //     },
      //     {
      //       senderId: '2',
      //       recipientId: '1',
      //       messageContent: 'Yes. Sounds good to me!'
      //     },
      //     {
      //       senderId: '1',
      //       recipientId: '2',
      //       messageContent: 'Great! See you at Ang Mo Kio MRT Station Exit B 3pm!'
      //     },
      //     {
      //       senderId: '2',
      //       recipientId: '1',
      //       messageContent: 'Thank you. See you there!'
      //     }
      //   ]
    }
  },
  actions: {
    async sendMessage(msg) {
      this.messages.push(msg)
      console.log('messsages: ', this.messages)
    },

    setContactList(contactListArr) {
      this.contactList = contactListArr
    }
  }
})
