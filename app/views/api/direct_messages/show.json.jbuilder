json.id direct_message.id
json.content direct_message.content
json.set! "author" do
    json.extract! direct_message.user, :id, :username
end
json.conversation_id direct_message.conversation