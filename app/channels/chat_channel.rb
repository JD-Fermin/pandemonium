class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_channel"
  end

  def speak(data)
    message = Message.create(content: data['content'], author_id: data['author_id'])
    socket = {id: message.id, content: message.content, author_id: message.author_id}
    ActionCable.server.broadcast('chat_channel', socket)
  end


  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
