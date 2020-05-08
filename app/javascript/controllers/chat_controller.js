import { Controller } from "stimulus"
import consumer from "channels/consumer"

export default class extends Controller {
  static targets = [ "message" ]

  connect() {
    this.chat = consumer.subscriptions.create("ChatChannel", {

      received(data) {
        const li = document.createElement('li')
        li.textContent = data
        document.getElementById('messages').appendChild(li)
      },

      post(message) {
        this.perform('post', { message: message })
      }
    });
  }

  post(event) {
    event.preventDefault()
    if (this.chat.consumer.connection.isOpen()) {
      this.chat.post(this.messageTarget.value)
      this.messageTarget.value = ''
    }
  }
}
