class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat:message'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def post(data)
    ChatChannel.broadcast_to('message', data['message'])
  end
end
