class Conversation < ApplicationRecord
   has_many :user_conversations
   has_many :direct_messages

   has_many :users, through: :user_conversations, source: :user
end
