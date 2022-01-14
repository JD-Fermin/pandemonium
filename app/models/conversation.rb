class Conversation < ApplicationRecord
    validates :author_id, presence: true, uniqueness: { scope: :receiver_id }
    validates :receiver_id, presence: true

    belongs_to :author, class_name: 'User'
    belongs_to :receiver, class_name: 'User'

    has_many :personal_messages, -> { order(created_at: :asc) }, dependent: :destroy
end
