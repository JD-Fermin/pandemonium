class UserConversation < ApplicationRecord
    validates :user_id, :conversation_id, presence: true

    belongs_to :conversation, class_name: :Conversation, foreign_key: :conversation_id
    belongs_to :user, class_name: :User, foreign_key: :user_id
end