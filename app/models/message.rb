class Message < ApplicationRecord
    validates :author_id, :channel_id, presence: true
    validates :content, presence: true, length: { minimum: 1, maximum: 2000 } 

    belongs_to :user, class_name: :User, foreign_key: :author_id

    belongs_to :channel, class_name: :Channel, foreign_key: :channel_id 
end
