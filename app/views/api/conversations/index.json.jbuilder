@conversations.each do |conversation|
    json.set! conversation.id do 
        json.extract! conversation, :id
        json.set! "members" do
            conversation.users.each do |user|
            # uncomment for multiple peeps
              #  json.set! user.id do
                    json.extract! user, :id, :username, :email
                # end
               
            end
        end
        
    end
end