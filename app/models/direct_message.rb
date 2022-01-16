class DirectMessage < ApplicationRecord
    validates :user_id, :conversation_id, presence: true
    validates :content, presence: true, length: { minimum: 1, maximum: 2000 }

    belongs_to :user, class_name: :User, foreign_key: :user_id
    belongs_to :conversation, class_name: :Conversation, foreign_key: :conversation_id
end
