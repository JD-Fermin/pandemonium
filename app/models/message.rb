class Message < ApplicationRecord
    validates :author_id, :channel_id, presence: true
    # validates :type, presence: true, inclusion: {in: %w(direct, channel), message: "%{value} is not a valid type"}
    validates :content, presence: true, length: { minimum: 1, maximum: 2000 } 

    belongs_to :user, class_name: :User, foreign_key: :author_id

    belongs_to :channel, class_name: :Channel, foreign_key: :channel_id 
end
