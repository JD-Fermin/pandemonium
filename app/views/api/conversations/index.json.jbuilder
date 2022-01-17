@conversations.each do |conversation| do
    json.set! conversation.id do 
        json.extract! @conversation, :id
        json.members @conversation.users
    end
end