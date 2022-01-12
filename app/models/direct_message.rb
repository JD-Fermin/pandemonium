class DirectMessage < ApplicationRecord
    validates :author_id, :receiver_id, presence: true
    # validates :type, presence: true, inclusion: {in: %w(direct, channel), message: "%{value} is not a valid type"}
    validates :content, presence: true, length: { minimum: 1, maximum: 2000 }
    
    belongs_to :author, class_name: :User, foreign_key: :author_id
    belongs_to :receiver, class_name: :User, foreign_key: :receiver_id
end
