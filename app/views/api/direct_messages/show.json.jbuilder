json.extract! @direct_message, :id, :content, :conversation_id
json.set! "author" do
    json.extract! @direct_message.user, :id, :username
end

