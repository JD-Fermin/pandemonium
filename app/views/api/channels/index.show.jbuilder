@channels.each do |channel|
    json.set! channel.id do
        json.extract! message, :id, :name, :description
    end
end