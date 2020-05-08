import consumer from "./consumer"

window.chat = consumer.subscriptions.create("ChatChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data)
  },

  post(message) {
    this.perform('post', { message: message })
  },
});
