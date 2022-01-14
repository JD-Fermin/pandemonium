class DirectMessage < ApplicationRecord
    validates :user_id, :conversation_id, presence: true
    validates :content, presence: true, length: { minimum: 1, maximum: 2000 }
    

    belongs_to :conversation
    belongs_to :user
end
