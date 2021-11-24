class Message < ApplicationRecord
    validates :author_id, presence: true
    # validates :type, presence: true, inclusion: {in: %w(direct, channel), message: "%{value} is not a valid type"}
    validates :content, presence: true, length: {maximum: 2000}

    belongs_to :user, class_name: :User, foreign_key: :author_id
end
