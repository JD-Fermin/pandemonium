@direct_messages.each do |direct_message|
    json.set! direct_message.id do
        json.id direct_message.id
        json.content direct_message.content
        json.set! "author" do
            json.extract! direct_message.user, :id, :username
        end
        json.conversation_id direct_message.conversation
    end
end