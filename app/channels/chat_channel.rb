class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_channel"
  end

  def speak(data)
    message = Message.create(content: data['message']['content'], author_id: data['message']['author_id'])
    socket = {message: message.content, author: User.find_by(id: message.author_id).username}
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
