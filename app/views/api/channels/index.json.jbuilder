@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :id, :name, :description
    end
end