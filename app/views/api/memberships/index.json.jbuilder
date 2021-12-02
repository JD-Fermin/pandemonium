@memberships.each do |membership|
    json.set! membership.id do
        json.extract! membership, :id, :user_id, :server_id
    end
end